// German version wording: [from, to] pairs applied to src/gojun-src.html by `node build.js de`.
// Specific sentences first; the general 英語 → ドイツ語 swap comes last.
const R = (r, q) => `<span class="rtag r-${r}">${q || r}</span>`;
module.exports = [
  ['<title>ゴジュンワールド</title>', '<title>ゴジュンワールド ドイツ語版</title>'],
  ['ゴジュンワールド<small>英語の語順を箱でつかむ</small>', 'ゴジュンワールド<small>ドイツ語版・語順を箱でつかむ</small>'],

  // box explanations
  ["kid: '文の主人公。日本語の「〜は」「〜が」の部分。英語ではいちばん最初に言う。', ex: ['', 'I', ' am Ken.']",
   "kid: '文の主人公。日本語の「〜は」「〜が」の部分。ドイツ語でも最初に言うことが多い。でも「いつ」などが先頭に来ると、動詞の<b>うしろ</b>に回る。', ex: ['', 'Ich', ' bin Ken.']"],
  ["kid: '主人公が「どうする」、または主人公と中身をつなぐ「＝（〜は…です）」。英語では主語のすぐ後ろ。日本語では文の最後にあることが多い。', ex: ['I ', 'am', ' Ken.']",
   "kid: '主人公が「どうする」、または主人公と中身をつなぐ「＝（〜は…です）」。ドイツ語では<b>いつも2番目</b>。「〜したい」「〜した」の2つ目の動詞は文の<b>最後</b>。weil・dass のかたまりの中でも最後。', ex: ['Ich ', 'bin', ' Ken.']"],
  ["ex: ['I eat ', 'breakfast', '.']", "ex: ['Ich trinke ', 'Kaffee', '.']"],
  ["ex: ['I am ', 'Ken', '.']", "ex: ['Ich bin ', 'Ken', '.']"],
  ["kid: '「いつ」「どこで」「どうやって」のおまけの情報。なくても文は成り立つ。ふつうは文の後ろ。', ex: ['I live ', 'in Osaka', '.']",
   "kid: '「いつ」「どこで」「どうやって」のおまけの情報。なくても文は成り立つ。ドイツ語では「いつ」→「どこ」の順が多い。文の最初にも置けるけど、そのときは<b>動詞 → 主語</b>の順になる。', ex: ['Ich wohne ', 'in Osaka', '.']"],
  ["ex: ['The ', 'book', ' on the desk is mine.']", "ex: ['Das ', 'Buch', ' auf dem Tisch ist meins.']"],
  ["kid: '文と文をつなぐ言葉。that（〜と）・because（〜ので）・when（〜とき）・if（もし〜なら）など。つなぎ言葉のあとに、もう1つの S と V が入る。', ex: ['I think ', 'that', ' English is fun.']",
   "kid: '文と文をつなぐ言葉。dass（〜と）・weil（〜ので）・wenn（〜とき・もし〜なら）など。つなぎ言葉のあとに S と V が入るけど、<b>V はかたまりの最後</b>。日本語と同じ順番！', ex: ['Ich denke, ', 'dass', ' Deutsch Spaß macht.']"],
  ["kid: '疑問文で文の最初に出てくる Do・Does・Did・Can・Will など。「〜ですか？」の日本語には出てこないことが多い。', ex: ['', 'Do', ' you like soccer?']",
   "kid: 'ドイツ語には Do・Does がない！ 疑問文は動詞をそのまま文の最初に出す。（この箱はドイツ語版では使わない）', ex: ['', 'Spielst', ' du Fußball?']"],
  ["kid: 'What（なに）・Where（どこ）・When（いつ）・Why（なぜ）・How（どうやって）。英語では文のいちばん最初に置く。', ex: ['', 'Where', ' do you live?']",
   "kid: 'Was（なに）・Wo（どこ）・Wann（いつ）・Warum（なぜ）・Wie（どうやって）。文のいちばん最初に置いて、すぐ次に動詞。', ex: ['', 'Wo', ' wohnst du?']"],

  // levels and worlds
  ['be動詞は形を選ぼう', '動詞は主語に合う形を選ぼう'],
  ["{ n: 1, name: 'はじめまして島', gram: 'be動詞・SV / SVC' }", "{ n: 1, name: 'はじめまして島', gram: 'sein・動詞の形' }"],
  ["{ n: 2, name: 'まいにち高原', gram: '一般動詞・SVO' }", "{ n: 2, name: 'まいにち高原', gram: 'SVO・動詞は2番目' }"],
  ["{ n: 3, name: 'しゅうまつ海岸', gram: '時・場所のM・過去形' }", "{ n: 3, name: 'しつもん海岸', gram: '疑問文・否定・2つ目の動詞' }"],
  ["{ n: 4, name: 'まちかど村', gram: 'There is・It' }", "{ n: 4, name: 'りゆう村', gram: 'weil・dass・wenn（動詞は最後）' }"],
  ["{ n: 5, name: 'おくりもの山', gram: 'SVOO・SVOC' }", "{ n: 5, name: 'おくりもの山', gram: '3格（〜に）・helfen・danken' }"],
  ["{ n: 6, name: 'ゆめの森', gram: '不定詞・動名詞（入れ子）' }", "{ n: 6, name: 'ゆめの森', gram: 'gern・zu ＋ 動詞' }"],
  ["{ n: 7, name: 'せつめい砂漠', gram: '後置修飾' }", "{ n: 7, name: 'せつめい砂漠', gram: '名詞の説明・形容詞の語尾' }"],
  ["{ n: 8, name: 'なかま城下町', gram: '関係代名詞' }", "{ n: 8, name: 'なかま城下町', gram: '関係文（動詞は最後）' }"],
  ["{ n: 9, name: 'いけん火山', gram: '接続詞・that節' }", "{ n: 9, name: 'いけん火山', gram: 'obwohl・als・ob・bevor' }"],
  ["{ n: 10, name: 'はてな港', gram: '疑問文・否定文' }", "{ n: 10, name: 'はてな港', gram: '分離動詞' }"],
  ["{ n: 11, name: 'みらい空港', gram: '助動詞・未来' }", "{ n: 11, name: 'みらい空港', gram: '話法の助動詞・werden' }"],
  ["{ n: 13, name: 'とけい台の丘', gram: '受け身・現在完了' }", "{ n: 13, name: 'とけい台の丘', gram: 'sein の完了形・過去形・受け身' }"],

  // order hints
  [/const QUESTION_MSG = '[^\n]*';/, `const QUESTION_MSG = '疑問文は<b>動詞を文の最初</b>に出す（Do はいらない！）。疑問詞があれば「${R('W')} 疑問詞 → ${R('V')} → ${R('S')}」。';`],
  ['M が2つあるときは「場所」→「時」の順が基本だよ。', 'M が2つあるときは「いつ」→「どこ」の順が基本だよ（英語と逆！）。'],
  ['M が2つあるときは「場所」→「時」の順が基本。', 'M が2つあるときは「いつ」→「どこ」の順が基本（英語と逆！）。'],
  [`${R('M')}（いつ・どこ）は文の後ろのほうに置くのが基本だよ。`, `ドイツ語は ${R('V')} のあと「いつ」→「どこ」→「〜を」の順が多いよ。`],
  [`${R('V')} は ${R('S')} のすぐ後ろに置こう。`, `${R('V')} は<b>2番目</b>に置こう（「いつ」が先頭なら、V → S の順）。`],
  ['箱の順番をチェック。基本は S → V → O/C → M だよ。', '箱の順番をチェック。動詞は2番目、2つ目の動詞は最後。weil・dass の中では動詞が最後だよ。'],
  [`'${R('V')} は ${R('S')} のすぐ後ろ！ 語順をチェックしよう。'`, `'${R('V')} は<b>いつも2番目</b>！ 語順をチェックしよう。'`],
  ['英語の基本は S → V → O/C → M（場所 → 時）だよ。', 'ドイツ語は動詞が2番目、2つ目の動詞と weil・dass の中の動詞は最後だよ。'],
  [`英語は ${R('S')} → ${R('V')} から始まるよ。`, `ドイツ語も ${R('S')} → ${R('V')} から始まることが多いよ。V はいつも2番目！`],
  ['（I・you など）', '（ich・du など）'],
  ['「です」も be動詞という動詞だよ。', '「です」も sein という動詞だよ。'],

  ['英語は「だれが → どうする/です → なに・どこ・いつ」の順', 'ドイツ語は<b>動詞が2番目</b>。2つ目の動詞と weil・dass の中の動詞は<b>最後</b>'],

  // voice and praise
  ['Nice to meet you. I am Hakomaru.', 'Freut mich. Ich bin Hakomaru.'],
  ["speak('Nice to meet you.')", "speak('Freut mich.')"],
  ["['Great!', 'Nice!', 'Perfect!', 'Good job!']", "['Super!', 'Toll!', 'Prima!', 'Sehr gut!']"],

  // everything else that says "English"
  ['英文', 'ドイツ語の文'],
  ['英単語', 'ドイツ語の単語'],
  ['英語', 'ドイツ語'],
  ['ドイツ語と逆！', '英語と逆！'],
];
