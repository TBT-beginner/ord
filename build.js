// Build: merge data/*.csv into the page, check each question, and write gojun-world.html + preview/index.html.
// node build.js de  → German version: data-de/*.csv, wording from lang/de.js, gojun-world-de.html + preview/de.html
const fs = require('fs'), path = require('path');
const LANG = process.argv[2] || 'en';
const dir = path.join(__dirname, LANG === 'en' ? 'data' : 'data-' + LANG);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.csv')).sort();
let header = null; const body = [];
for (const f of files) {
  const lines = fs.readFileSync(path.join(dir, f), 'utf8').replace(/^﻿/, '').trim().split(/\r?\n/);
  if (!header) header = lines[0];
  else if (lines[0] !== header) throw new Error(`${f}: 1行目（列名）がほかのファイルとちがいます`);
  body.push(...lines.slice(1));
}
const csv = [header, ...body].join('\n');

// Check: every chunk's Japanese must appear inside its sentence (needed for LV2 tapping).
const cols = header.split(',');
let problems = 0, qCount = 0;
for (const line of body) {
  const cells = line.match(/("([^"]|"")*"|[^,]*)(,|$)/g).map(c => c.replace(/,$/, '').replace(/^"|"$/g, ''));
  const g = k => cells[cols.indexOf(k)] || '';
  let n = 1, inQ = false;
  for (const ch of line) { if (ch === '"') inQ = !inQ; else if (ch === ',' && !inQ) n++; }
  if (n !== cols.length) { console.log(`列の数が ${n} 個（${cols.length} 個のはず）。英語にカンマがあるなら "…" で囲む:`, line.slice(0, 60)); problems++; }
  if (g('type') !== 'Q') continue;
  qCount++;
  const parts = [...g('chunks').matchAll(/([SVOCMNJAW])~?\s*:\s*([^=\[\]\/]*?)\s*=/g)];
  if (!parts.length) { console.log('書き方エラー:', g('ja')); problems++; }
  for (const m of parts) if (!g('ja').includes(m[2])) { console.log('日本文に含まれない:', g('ja'), '→', m[2]); problems++; }
  if ((g('chunks').match(/\[/g) || []).length !== (g('chunks').match(/\]/g) || []).length) { console.log('[ ] の数が合わない:', g('ja')); problems++; }
}
if (problems) process.exit(1);

// Warning: new words belong in LV0–LV2. Typing stages (LV3・LV4) bring at most 4 new words, a boss at most 2
// (word forms count as one word, names and small function words are not counted).
{
  const STOP = new Set((LANG === 'de'
    ? 'ich du er sie es wir ihr mich dich mir dir ihn ihm uns euch ihnen bin bist ist sind seid war waren der die das den dem des ein eine einen einem einer und nicht in im am an auf aus mit zu zum zur von vom nach bei für um als dass weil wenn ob kein keine mein meine meinen meinem dein deine sein seine ihr ihre unser hier da so sehr auch'
    : 'i you he she it we they me him her us them my your his its our their am is are was were be been the a an and to of in on at for with from by not do does did this that these those there here can will very too so').split(' '));
  const NAMES = /^(ken|emma|lena|yui|tom|anna|max|kyoto|tokyo|tokio|osaka|japan|berlin|deutschland|hokkaido|fuji|mt|hakomaru|zorg|draco)$/;
  const stem = t => LANG === 'de' ? t.replace(/(en|em|er|es|st|e|t|n|s)$/, '') : t.replace(/'s$/, '').replace(/ie[sd]$/, 'y').replace(/(s|x|ch|sh)es$/, '$1').replace(/(ing|ed|s)$/, '').replace(/e$/, '').replace(/(.)\1$/, '$1');
  const LIMIT = { L3: 4, L4: 4, BOSS: 2 }, seen = new Set(), stages = new Map();
  for (const line of body) {
    const c = line.match(/("([^"]|"")*"|[^,]*)(,|$)/g).map(x => x.replace(/,$/, '').replace(/^"|"$/g, '')), g = k => c[cols.indexOf(k)] || '';
    if (g('type') !== 'Q' || +g('stage') >= 90) continue;
    const id = `${g('world')}-${g('stage')}`; if (!stages.has(id)) stages.set(id, { w: +g('world'), s: +g('stage'), lv: g('level'), qs: [] });
    stages.get(id).qs.push(g('chunks'));
  }
  const warn = [];
  for (const [id, st] of [...stages].sort((a, b) => a[1].w - b[1].w || a[1].s - b[1].s)) {
    const fresh = [];
    for (const ch of st.qs) for (const p of ch.matchAll(/[SVOCMNJAW]~?\s*:\s*[^=\[\]\/]*?\s*=\s*([^\/\[\]]*)/g)) {
      const en = p[1].split('||')[0].replace(/\{.*?\}/, '').trim(); if (!en || en === '-') continue;
      for (const t of en.toLowerCase().replace(/[.,!?]/g, '').split(/\s+/)) {
        if (!t || STOP.has(t) || /^\d+$/.test(t) || NAMES.test(t) || seen.has(t) || seen.has('~' + stem(t))) continue;
        seen.add(t); seen.add('~' + stem(t)); fresh.push(t);
      }
    }
    if (LIMIT[st.lv] != null && fresh.length > LIMIT[st.lv]) warn.push(`  ${id}（${st.lv}）新しい単語 ${fresh.length}（${LIMIT[st.lv]}まで）: ${fresh.join(' ')}`);
  }
  if (warn.length) console.log(`注意：打ちこみ・ボスのステージに新しい単語が多い（LV0〜LV2 で先に出すか、前に出た単語に言いかえる）\n${warn.join('\n')}`);
}

let src = fs.readFileSync(path.join(__dirname, 'src', 'gojun-src.html'), 'utf8').replace('@@LANG@@', LANG);
// a language pack swaps the English-specific wording: [from, to] pairs, every 'from' must exist
if (LANG !== 'en') for (const [a, b] of require(path.join(__dirname, 'lang', LANG + '.js'))) {
  if (typeof a === 'string' && !src.includes(a)) { console.log('lang/' + LANG + '.js: 見つからない文:', a.slice(0, 60)); process.exit(1); }
  src = typeof a === 'string' ? src.split(a).join(b) : src.replace(a, b);
}
// word-card meanings: "word = meaning" lines (# for comments); "-" leaves the word out of the cards
const glossFile = path.join(dir, 'gloss.txt'), gloss = {};
if (fs.existsSync(glossFile)) for (const line of fs.readFileSync(glossFile, 'utf8').split(/\r?\n/)) {
  const m = line.replace(/#.*$/, '').match(/^\s*(.+?)\s*=\s*(.+?)\s*$/); if (m) gloss[m[1]] = m[2];
}
src = src.replace('@@GLOSS@@', () => JSON.stringify(gloss));
const out = src.replace('@@CSV@@', () => csv);
const script = out.match(/<script>\n([\s\S]*?)<\/script>/)[1];
new Function(script); // syntax check
// run the page's own CSV parser on the data, so anything it would reject fails here instead of in the browser
{
  const start = script.indexOf("'use strict';"), end = script.indexOf('let WORLDS;');
  const parse = new Function('document', 'localStorage', script.slice(start, end) + '\nreturn buildWorlds;')({ querySelector: () => null }, undefined);
  try { parse(csv); } catch (e) { console.log('ページの読み込みエラー:', e.message); process.exit(1); }
}
const suffix = LANG === 'en' ? '' : '-' + LANG;
fs.writeFileSync(path.join(__dirname, 'gojun-world' + suffix + '.html'), out);
fs.mkdirSync(path.join(__dirname, 'preview'), { recursive: true });
const pwaHead = `<link rel="manifest" href="/${LANG === 'en' ? 'manifest.webmanifest' : 'manifest-' + LANG + '.webmanifest'}"><meta name="theme-color" content="#f4c430"><link rel="icon" href="/icon-192.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="${LANG === 'en' ? 'ゴジュン' : 'ゴジュンDE'}">`;
fs.writeFileSync(path.join(__dirname, 'preview', LANG === 'en' ? 'index.html' : LANG + '.html'),
  '<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' + pwaHead + '</head><body>' + out + '</body></html>');
// home-screen app: one manifest per language (English at /, German at /de)
fs.writeFileSync(path.join(__dirname, 'preview', LANG === 'en' ? 'manifest.webmanifest' : 'manifest-' + LANG + '.webmanifest'), JSON.stringify({
  name: LANG === 'en' ? 'ゴジュンワールド' : 'ゴジュンワールド ドイツ語版', short_name: LANG === 'en' ? 'ゴジュン' : 'ゴジュンDE',
  id: LANG === 'en' ? '/' : '/' + LANG, start_url: LANG === 'en' ? '/' : '/' + LANG, scope: LANG === 'en' ? '/' : '/' + LANG,
  display: 'standalone', background_color: '#e9efe4', theme_color: '#f4c430', lang: 'ja',
  icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }],
}, null, 2));
console.log(`ok: ${files.length} files, ${qCount} questions, ${out.length} chars`);
