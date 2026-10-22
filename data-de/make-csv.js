// German version question data. Edit here, then `node data-de/make-csv.js` writes data-de/world*.csv
// (CSV quoting is handled here, so German sentences with commas are safe).
// Stage: [level, title, intro, [goal, goalChunks, cando], talkBefore, talkAfter, questions]
// Question: [ja, chunks, note, distractors?]   Talk: [speaker, ja, de]
const fs = require('fs'), path = require('path');
const W = {
  1: [
    ['L0', 'はじめてのメッセージ', 'ドイツからの留学生レナがクラスにやってきた！メッセージで自己紹介を送ろう。',
      ['「〜は…です」を 主語 → sein（＝）→ 中身 の順で言えるようになろう', 'S:私は=ich / V:です=bin / C:ケン=Ken', '名前・年齢・住んでいる所をドイツ語で言える'],
      ['Lena', 'やあ！レナだよ。よろしくね！', 'Hallo! Ich bin Lena. Freut mich!'], ['Lena', 'いいね！私も生徒だよ！', 'Cool! Ich bin auch Schülerin!'], [
        ['私はケンです。', 'S:私は=ich / V:です=bin / C:ケン=Ken', '「です」は sein という動詞。主語が ich なら bin'],
        ['私は14歳です。', 'S:私は=ich / V:です=bin / C:14歳=vierzehn||14||vierzehn Jahre alt||14 Jahre alt', '「〜歳です」は数字だけでOK。Jahre alt をつけても正解'],
        ['私は大阪に住んでいます。', 'S:私は=ich / V:住んでいます=wohne / M:大阪に=in Osaka', '「住んでいる」は wohnen。ich のときは wohne'],
        ['私の名前はケンです。', 'S:私の名前は=mein Name / V:です=ist / C:ケン=Ken', '主語が mein Name（1つ）なので ist'],
        ['私は生徒です。', 'S:私は=ich / V:です=bin / C:生徒=Schüler||Schülerin', '職業や立場には ein をつけない。女子なら Schülerin'],
      ]],
    ['L1', '家族を紹介しよう', 'レナが家族の写真を見たいって。写真を送って説明しよう。',
      ['主語に合わせて bin / ist / sind を使い分けられるようになろう', 'S:姉と私は=meine Schwester und ich / V:です=sind / C:仲良し=gute Freunde', '家族を1人ずつドイツ語で紹介できる'],
      ['Lena', '家族の写真見せて！', 'Zeig mir ein Foto von deiner Familie!'], ['Lena', 'すてきな家族だね！', 'Was für eine tolle Familie!'], [
        ['これは私の家族です。', 'S:これは=das / V:です=ist{bin|ist|sind} / C:私の家族=meine Familie', '「これは〜です」は Das ist 〜。家族（Familie）は女性名詞なので meine'],
        ['私の父は先生です。', 'S:私の父は=mein Vater / V:です=ist{bin|ist|sind} / C:先生=Lehrer', '父（Vater）は男性名詞なので mein。職業には ein をつけない'],
        ['私の母は医者です。', 'S:私の母は=meine Mutter / V:です=ist{bin|ist|sind} / C:医者=Ärztin', '母（Mutter）は女性名詞なので meine。女性の医者は Ärztin'],
        ['私の兄はとても背が高いです。', 'S:私の兄は=mein Bruder / V:です=ist{bin|ist|sind} / C:とても背が高い=sehr groß', '「背が高い」は groß。ä・ö・ü・ß は ae・oe・ue・ss と打ってもOK'],
        ['私の両親は親切です。', 'S:私の両親は=meine Eltern / V:です=sind{bin|ist|sind} / C:親切=nett', '両親（Eltern）は2人なので sind。複数の「私の」は meine'],
      ]],
    ['L2', '学校を紹介しよう', 'レナがケンの学校について聞いてきた。',
      ['主語と動詞を見つけて、動詞の形を主語に合わせられるようになろう', 'S:私たちの学校は=unsere Schule / V:です=ist / C:大きい=groß', '学校や先生のことをドイツ語で説明できる'],
      ['Lena', 'あなたの学校はどんなところ？', 'Wie ist deine Schule?'], ['Lena', 'いい学校だね！', 'Deine Schule klingt toll!'], [
        ['私たちの学校は大きいです。', 'S:私たちの学校は=unsere Schule / V:です=ist / C:大きい=groß', 'Schule は女性名詞なので unsere（私たちの）', 'bin|sind|klein'],
        ['担任の先生はおもしろいです。', 'S:担任の先生は=unser Klassenlehrer / V:です=ist / C:おもしろい=lustig', '「担任の先生」は Klassenlehrer。笑えるおもしろさは lustig', 'sind|bist|langweilig'],
        ['教室はとても明るいです。', 'S:教室は=das Klassenzimmer / V:です=ist / C:とても明るい=sehr hell', 'Klassenzimmer は中性名詞なので das', 'sind|bin|dunkel'],
        ['生徒たちは親切です。', 'S:生徒たちは=die Schüler / V:です=sind / C:親切=nett', '生徒たち（複数）なので sind。複数の「その」は die', 'ist|bin|der Schüler'],
        ['私のクラスは静かです。', 'S:私のクラスは=meine Klasse / V:です=ist / C:静か=ruhig', 'Klasse は女性名詞なので meine', 'sind|bin|laut'],
      ]],
    ['L3', '友だちを紹介しよう', 'レナの友だちのマックスとも話すことに。自分や友だちのことをもっとくわしく。',
      ['主語に合わせて動詞の語尾（-e・-st・-t・-en）を変えられるようになろう', 'S:彼は=er / V:住んでいます=wohnt / M:ベルリンに=in Berlin', '自分や友だちのことを動詞を使って言える'],
      ['Max', 'やあ、マックスだよ。ベルリンから来たんだ。', 'Hallo, ich bin Max. Ich komme aus Berlin.'], ['Max', 'よろしくね！', 'Freut mich!'], [
        ['私は日本の出身です。', 'S:私は=ich / V:出身です=komme / M:日本の=aus Japan', '「〜の出身です」は komme aus 〜（〜から来る）'],
        ['彼はベルリンに住んでいます。', 'S:彼は=er / V:住んでいます=wohnt / M:ベルリンに=in Berlin', '主語が er なので wohnen → wohnt'],
        ['私はドイツ語を習っています。', 'S:私は=ich / V:習っています=lerne / O:ドイツ語を=Deutsch', 'lernen（学ぶ）。ich なので lerne。言語名は大文字で始める'],
        ['レナは音楽が好きです。', 'S:レナは=Lena / V:好きです=mag / O:音楽が=Musik', '「〜が好き」は mögen。er・sie のときは mag（形が大きく変わる）'],
        ['私の姉は東京で働いています。', 'S:私の姉は=meine Schwester / V:働いています=arbeitet / M:東京で=in Tokio', 'arbeiten は主語が sie だと arbeitet（t が続くので e をはさむ）'],
      ]],
    ['L4', '自己紹介の練習', '明日はオンラインでレナのクラスと交流会。自己紹介を練習しよう。',
      ['箱がなくても、主語 → 動詞 → … の文を組み立てられるようになろう', 'S:私は=ich / V:です=bin / C:15歳=fünfzehn', '自己紹介をドイツ語の文でまるごと書ける'],
      null, ['Lena', '明日楽しみ！', 'Ich freue mich auf morgen!'], [
        ['私はユイです。', 'S:私は=ich / V:です=bin / C:ユイ=Yui', 'ich のときは bin'],
        ['私は15歳です。', 'S:私は=ich / V:です=bin / C:15歳=fünfzehn||15||fünfzehn Jahre alt||15 Jahre alt', '15 は fünfzehn（ü は ue と打ってもOK）'],
        ['私は京都に住んでいます。', 'S:私は=ich / V:住んでいます=wohne / M:京都に=in Kyoto', 'wohnen は ich のとき wohne'],
        ['私は英語を習っています。', 'S:私は=ich / V:習っています=lerne / O:英語を=Englisch', '英語は Englisch。名詞なので大文字で始める'],
        ['私の趣味は料理です。', 'S:私の趣味は=mein Hobby / V:です=ist / C:料理=Kochen', 'Hobby は中性名詞なので mein。「料理（すること）」は Kochen'],
      ]],
    ['BOSS', '自己紹介スピーチ', '交流会本番！レナのクラスのみんなの前で自己紹介スピーチ。',
      ['ここまでの文を、すばやく正確に書けるようになろう', 'S:私の名前は=mein Name / V:です=ist / C:ケン=Ken', '自己紹介スピーチの原稿をドイツ語で作れる'],
      null, ['Lena', 'すばらしいスピーチだった！', 'Super Rede!'], [
        ['私の名前はケンです。', 'S:私の名前は=mein Name / V:です=ist / C:ケン=Ken', 'mein Name（1つ）なので ist'],
        ['私は大阪の出身です。', 'S:私は=ich / V:出身です=komme / M:大阪の=aus Osaka', '「〜の出身」は komme aus 〜'],
        ['私の父はエンジニアです。', 'S:私の父は=mein Vater / V:です=ist / C:エンジニア=Ingenieur', '職業には ein をつけない'],
        ['私の兄たちは背が高いです。', 'S:私の兄たちは=meine Brüder / V:です=sind / C:背が高い=groß', '兄たち（複数）なので meine と sind'],
        ['私はドイツ語を習っています。', 'S:私は=ich / V:習っています=lerne / O:ドイツ語を=Deutsch', 'ich lerne'],
      ]],
  ],
  2: [
    ['L0', '朝ごはん', 'レナが日本の朝ごはんに興味しんしん。毎日の生活を伝えよう。',
      ['「〜を」を動詞のうしろに置く順番を身に付けよう', 'S:私は=ich / V:飲みます=trinke / O:牛乳を=Milch', '毎日の習慣をドイツ語で言える'],
      ['Lena', '日本の朝ごはんって何を食べるの？', 'Was isst man in Japan zum Frühstück?'], ['Lena', 'おいしそう！', 'Lecker!'], [
        ['私は牛乳を飲みます。', 'S:私は=ich / V:飲みます=trinke / O:牛乳を=Milch', '日本語は「〜を → 飲む」、ドイツ語は「飲む → 〜を」'],
        ['私はご飯を食べます。', 'S:私は=ich / V:食べます=esse / O:ご飯を=Reis', 'essen（食べる）。ich esse'],
        ['私の母はコーヒーを飲みます。', 'S:私の母は=meine Mutter / V:飲みます=trinkt / O:コーヒーを=Kaffee', '主語が sie（1人）なので trinkt'],
        ['私の父はパンを食べます。', 'S:私の父は=mein Vater / V:食べます=isst / O:パンを=Brot', 'essen は er・sie のとき isst（形が変わる）'],
        ['私は毎日リンゴを食べます。', 'S:私は=ich / V:食べます=esse / M~:毎日=jeden Tag / O:リンゴを=einen Apfel', '「いつ」は動詞のうしろ、O の前。Apfel は男性名詞なので「1つの〜を」は einen'],
      ]],
    ['L1', '放課後', 'レナが「放課後は何してるの？」と聞いてきた。',
      ['「いつ」を先頭に出したら 動詞 → 主語 にする「動詞は2番目」を身に付けよう', 'M:放課後=nach der Schule / V:します=spiele / S:私は=ich / O:サッカーを=Fußball', '「いつ」から始まる文をドイツ語で言える'],
      ['Lena', '放課後は何してるの？', 'Was machst du nach der Schule?'], ['Lena', '私は放課後ギターを弾くよ！', 'Nach der Schule spiele ich Gitarre!'], [
        ['放課後、私はサッカーをします。', 'S:私は=ich / V:します=spiele{spiele|spielst|spielt} / M~:放課後=nach der Schule / O:サッカーを=Fußball', '「放課後」を先頭にすると Nach der Schule spiele ich Fußball. 動詞はいつも2番目！'],
        ['毎日、私は宿題をします。', 'S:私は=ich / V:します=mache{mache|machst|macht} / M~:毎日=jeden Tag / O:宿題を=Hausaufgaben', '「宿題をする」は Hausaufgaben machen。Jeden Tag mache ich … も正解'],
        ['月曜日に、私はピアノを弾きます。', 'S:私は=ich / V:弾きます=spiele{spiele|spielst|spielt} / M~:月曜日に=am Montag / O:ピアノを=Klavier', '曜日の「〜に」は am。楽器を弾くのも spielen'],
        ['夜に、私は本を読みます。', 'S:私は=ich / V:読みます=lese{lese|liest|lesen} / M~:夜に=abends / O:本を=ein Buch', 'lesen は du・er のとき liest。Abends lese ich ein Buch. も正解'],
        ['週末、私の兄はテニスをします。', 'S:私の兄は=mein Bruder / V:します=spielt{spiele|spielt|spielen} / M~:週末=am Wochenende / O:テニスを=Tennis', '主語が er なので spielt。Am Wochenende spielt mein Bruder Tennis.'],
      ]],
    ['L2', '部活', 'レナが日本の部活について知りたいって。',
      ['男性名詞の「〜を」（den・einen）を使えるようになろう', 'S:コーチは=der Trainer / V:ほめます=lobt / O:その選手を=den Spieler', '部活のことをドイツ語で話せる'],
      ['Lena', '何部に入ってるの？', 'In welchem Verein bist du?'], ['Lena', '楽しそう！', 'Das klingt lustig!'], [
        ['私はボールを持っています。', 'S:私は=ich / V:持っています=habe / O:ボールを=einen Ball', '「持っている」は haben。Ball は男性名詞なので「〜を」のとき einen', 'hat|bin|ein Ball'],
        ['私たちは毎日走ります。', 'S:私たちは=wir / V:走ります=laufen / M~:毎日=jeden Tag', 'wir のとき動詞は -en の形', 'läuft|laufe|uns'],
        ['コーチはその選手をほめます。', 'S:コーチは=der Trainer / V:ほめます=lobt / O:その選手を=den Spieler', 'Spieler は男性名詞。「〜を」のとき der → den', 'lobe|die Trainer|der Spieler'],
        ['放課後、私たちは体育館で練習します。', 'S:私たちは=wir / V:練習します=trainieren / M~:放課後=nach der Schule / M:体育館で=in der Turnhalle', '「いつ」→「どこ」の順。Nach der Schule trainieren wir … も正解', 'trainiert|trainiere|uns'],
        ['私の友だちはラケットを買います。', 'S:私の友だちは=mein Freund / V:買います=kauft / O:ラケットを=einen Schläger', 'Schläger（ラケット）は男性名詞なので einen', 'kaufe|meinen Freund|ein Schläger'],
      ]],
    ['L3', '週末の予定', '週末にレナと何をするか相談しよう。',
      ['「いつ」→「どこ」の順で、予定を書けるようになろう', 'S:私たちは=wir / V:行きます=gehen / M:土曜日に=am Samstag / M:公園へ=in den Park', '週末の予定をドイツ語で話せる'],
      ['Lena', '週末、何する？', 'Was machen wir am Wochenende?'], ['Lena', 'いいね、そうしよう！', 'Super, so machen wir das!'], [
        ['週末、私たちは公園へ行きます。', 'S:私たちは=wir / V:行きます=gehen / M~:週末=am Wochenende / M:公園へ=in den Park', 'Am Wochenende gehen wir … と、時を前に出しても動詞は2番目'],
        ['私はパンを買います。', 'S:私は=ich / V:買います=kaufe / O:パンを=Brot', 'kaufen は ich のとき kaufe'],
        ['レナはボールを持っています。', 'S:レナは=Lena / V:持っています=hat / O:ボールを=einen Ball', 'haben は er・sie のとき hat'],
        ['日曜日に、私は本を読みます。', 'S:私は=ich / V:読みます=lese / M~:日曜日に=am Sonntag / O:本を=ein Buch', ''],
        ['午後に、私たちはテニスをします。', 'S:私たちは=wir / V:します=spielen / M~:午後に=am Nachmittag / O:テニスを=Tennis', ''],
      ]],
    ['L4', '一日のスケジュール', 'レナに日本の中学生の一日を紹介しよう。',
      ['箱がなくても、動詞を2番目に置いて文を組み立てられるようになろう', 'M:7時に=um sieben Uhr / V:食べます=esse / S:私は=ich / O:朝ごはんを=Frühstück', '一日の流れをドイツ語で書ける'],
      null, ['Lena', '日本の中学生って忙しいね！', 'Japanische Schüler sind aber fleißig!'], [
        ['毎日、私はパンを食べます。', 'S:私は=ich / V:食べます=esse / M~:毎日=jeden Tag / O:パンを=Brot', 'Jeden Tag esse ich Brot. と、時を前に出しても動詞は2番目'],
        ['私はバスで学校へ行きます。', 'S:私は=ich / V:行きます=fahre / M:バスで=mit dem Bus / M:学校へ=zur Schule', '乗り物で行くときは fahren。「どうやって」→「どこへ」の順'],
        ['学校で、私たちは英語を勉強します。', 'S:私たちは=wir / V:勉強します=lernen / M~:学校で=in der Schule / O:英語を=Englisch', 'In der Schule lernen wir Englisch. も正解'],
        ['夕方に、私は宿題をします。', 'S:私は=ich / V:します=mache / M~:夕方に=am Abend / O:宿題を=Hausaufgaben', 'Am Abend mache ich Hausaufgaben.'],
        ['夜に、私はピアノを弾きます。', 'S:私は=ich / V:弾きます=spiele / M~:夜に=abends / O:ピアノを=Klavier', ''],
      ]],
    ['BOSS', 'わたしの一日日記', 'レナに送る「わたしの一日」の日記を仕上げよう！',
      ['ここまでの文を、すばやく正確に書けるようになろう', 'S:私は=ich / V:飲みます=trinke / O:お茶を=Tee', '毎日の生活をドイツ語の日記に書ける'],
      null, ['Lena', '日記ありがとう！', 'Danke für dein Tagebuch!'], [
        ['毎朝、私はお茶を飲みます。', 'S:私は=ich / V:飲みます=trinke / M~:毎朝=jeden Morgen / O:お茶を=Tee', 'Jeden Morgen trinke ich Tee.'],
        ['私の兄はパンを食べます。', 'S:私の兄は=mein Bruder / V:食べます=isst / O:パンを=Brot', 'er isst'],
        ['放課後、私たちはバスケットボールをします。', 'S:私たちは=wir / V:します=spielen / M~:放課後=nach der Schule / O:バスケットボールを=Basketball', 'wir spielen'],
        ['私は犬を飼っています。', 'S:私は=ich / V:飼っています=habe / O:犬を=einen Hund', 'Hund は男性名詞なので einen'],
        ['夜に、私は音楽を聞きます。', 'S:私は=ich / V:聞きます=höre / M~:夜に=abends / O:音楽を=Musik', 'hören（聞く）。Abends höre ich Musik.'],
      ]],
  ],
  3: [
    ['L0', 'しつもんしよう', '今度はケンがレナに質問する番！',
      ['動詞を文の最初に出す疑問文を身に付けよう', 'V:しますか=spielst / S:あなたは=du / O:サッカーを=Fußball', 'ドイツ語で相手に質問できる'],
      ['Lena', 'なんでも聞いて！', 'Frag mich alles!'], ['Lena', '15歳だよ！', 'Ich bin fünfzehn!'], [
        ['あなたはサッカーをしますか？', 'V:しますか=spielst / S:あなたは=du / O:サッカーを=Fußball', 'Do はいらない！ 動詞を先頭に出すだけ。du のとき動詞は -st'],
        ['あなたは日本食が好きですか？', 'V:好きですか=magst / S:あなたは=du / O:日本食が=japanisches Essen', 'mögen は du のとき magst'],
        ['あなたはどこに住んでいますか？', 'W:どこに=wo / V:住んでいますか=wohnst / S:あなたは=du', '疑問詞 → 動詞 → 主語'],
        ['あなたは何を飲みますか？', 'W:何を=was / V:飲みますか=trinkst / S:あなたは=du', 'was（なに）が先頭、すぐ次に動詞'],
        ['あなたは何歳ですか？', 'W:何歳=wie alt / V:ですか=bist / S:あなたは=du', '「何歳」は wie alt。sein は du のとき bist'],
      ]],
    ['L1', '〜じゃないよ', 'レナの質問に「ちがうよ」と答えよう。',
      ['nicht と kein を使い分けて「〜ない」と言えるようになろう', 'S:私は=ich / V:ありません=habe / O:時間が=keine Zeit', '「〜ない」をドイツ語で言える'],
      ['Lena', 'ケンは納豆好き？', 'Magst du Natto?'], ['Lena', 'そうなんだ！', 'Ach so!'], [
        ['その本は高くないです。', 'S:その本は=das Buch / V:です=ist{bin|ist|sind} / M:ない=nicht / C:高く=teuer', 'nicht は形容詞の前'],
        ['私は納豆が好きではありません。', 'S:私は=ich / V:好きでは=mag{mag|magst} / O:納豆が=Natto / M:ありません=nicht', '文全体を打ち消す nicht は最後のほう'],
        ['私は時間がありません。', 'S:私は=ich / V:ありません=habe{habe|hast|hat} / O:時間が=keine Zeit', '「〜がない」は kein＋名詞。Zeit は女性名詞なので keine'],
        ['彼は犬を飼っていません。', 'S:彼は=er / V:飼っていません=hat{habe|hat|haben} / O:犬を=keinen Hund', 'Hund は男性名詞なので「〜を」のとき keinen'],
        ['今日は寒くないです。', 'S:=es / V:です=ist{bin|ist|sind} / M~:今日は=heute / M:ない=nicht / C:寒く=kalt', '天気・寒さの文は主語 es。Heute ist es nicht kalt. も正解'],
      ]],
    ['L2', '〜したい', 'ドイツ旅行の計画！レナに「〜したい」と伝えよう。',
      ['möchte を2番目、もう1つの動詞を最後に置けるようになろう', 'S:私は=ich / V:たいです=möchte / O:お城を=ein Schloss / V:見=sehen', 'したいこと・できることをドイツ語で言える'],
      ['Lena', 'ドイツで何がしたい？', 'Was möchtest du in Deutschland machen?'], ['Lena', '楽しみだね！', 'Ich freue mich schon!'], [
        ['私はお城を見たいです。', 'S:私は=ich / V:たいです=möchte / O:お城を=ein Schloss / V:見=sehen', 'möchte が2番目、sehen は最後。日本語と同じく「見る」が後ろ！', 'möchtest|sehe|siehst'],
        ['私はソーセージを食べたいです。', 'S:私は=ich / V:たいです=möchte / O:ソーセージを=Würstchen||eine Wurst / V:食べ=essen', '2つ目の動詞は原形（essen）で最後', 'esse|möchtest|isst'],
        ['私たちはベルリンへ行きたいです。', 'S:私たちは=wir / V:たいです=möchten / M:ベルリンへ=nach Berlin / V:行き=fahren||gehen', 'wir のときは möchten。都市へ行くは nach', 'möchte|fahre|gehst'],
        ['私はドイツ語を話せます。', 'S:私は=ich / V:せます=kann / O:ドイツ語を=Deutsch / V:話=sprechen', 'kann（できる）も2番目、sprechen は最後', 'kannst|spreche|sprichst'],
        ['レナは日本で寿司を食べたいです。', 'S:レナは=Lena / V:たいです=möchte / M:日本で=in Japan / O:寿司を=Sushi / V:食べ=essen', 'sie のときも möchte', 'möchtest|isst|möchten'],
      ]],
    ['L3', '〜した', '週末にしたことをレナに報告しよう。',
      ['「〜した」を habe ＋ 過去分詞（最後）で言えるようになろう', 'S:私は=ich / V:=habe / O:サッカーを=Fußball / V:しました=gespielt', '過去にしたことをドイツ語で言える'],
      ['Lena', '週末どうだった？', 'Wie war dein Wochenende?'], ['Lena', '楽しそうだね！', 'Das klingt toll!'], [
        ['私はサッカーをしました。', 'S:私は=ich / V:=habe / O:サッカーを=Fußball / V:しました=gespielt', '「〜した」は habe（2番目）＋ gespielt（最後）。habe は日本語にない'],
        ['私はテニスをしました。', 'S:私は=ich / V:=habe / O:テニスを=Tennis / V:しました=gespielt', 'habe（2番目）… gespielt（最後）'],
        ['私は友だちとピザを食べました。', 'S:私は=ich / V:=habe / M:友だちと=mit Freunden / O:ピザを=Pizza / V:食べました=gegessen', 'essen → gegessen'],
        ['私の姉は宿題をしました。', 'S:私の姉は=meine Schwester / V:=hat / O:宿題を=Hausaufgaben||die Hausaufgaben / V:しました=gemacht', '主語が sie なので hat'],
        ['日曜日に、私は本を読みました。', 'S:私は=ich / V:=habe / M~:日曜日に=am Sonntag / O:本を=ein Buch / V:読みました=gelesen', 'lesen → gelesen'],
      ]],
    ['L4', 'インタビュー', 'レナの家族にオンラインでインタビュー！',
      ['箱がなくても、疑問文・否定・2つの動詞の文を組み立てられるようになろう', 'V:好きですか=magst / S:あなたは=du / O:音楽が=Musik', 'ドイツ語でインタビューできる'],
      null, ['Lena', 'みんな喜んでたよ！', 'Alle haben sich gefreut!'], [
        ['あなたは音楽が好きですか？', 'V:好きですか=magst / S:あなたは=du / O:音楽が=Musik', '動詞が先頭。du magst'],
        ['あなたはどこで働いていますか？', 'W:どこで=wo / V:働いていますか=arbeitest / S:あなたは=du', 'arbeiten は du のとき arbeitest'],
        ['私は肉を食べません。', 'S:私は=ich / V:食べません=esse / O:肉を=kein Fleisch', '「〜を食べない」は kein＋名詞でも言える'],
        ['私は日本へ行きたいです。', 'S:私は=ich / V:たいです=möchte / M:日本へ=nach Japan / V:行き=fahren||reisen||fliegen||gehen', 'möchte … fahren。国へ行くは nach'],
        ['あなたは昨日何をしましたか？', 'W:何を=was / V:=hast / S:あなたは=du / M:昨日=gestern / V:しましたか=gemacht', '疑問詞 → hast → 主語 → … → gemacht（最後）'],
      ]],
    ['BOSS', '港の案内所', 'ドイツの港町で迷子！案内所で質問して乗り切ろう。',
      ['ここまでの文を、すばやく正確に書けるようになろう', 'W:どこ=wo / V:ですか=ist / S:駅は=der Bahnhof', '旅先でドイツ語で質問できる'],
      null, ['Lena', '無事に帰れたね！', 'Gut, dass du zurück bist!'], [
        ['駅はどこですか？', 'W:どこ=wo / V:ですか=ist / S:駅は=der Bahnhof', 'Wo ist …?'],
        ['私は時間がありません。', 'S:私は=ich / V:ありません=habe / O:時間が=keine Zeit', '「〜がない」は kein＋名詞'],
        ['私はパンを買いたいです。', 'S:私は=ich / V:たいです=möchte / O:パンを=Brot / V:買い=kaufen', 'möchte … kaufen'],
        ['あなたはテニスをしますか？', 'V:しますか=spielst / S:あなたは=du / O:テニスを=Tennis', 'はい・いいえの質問は動詞から'],
        ['レナはどこに住んでいますか？', 'W:どこに=wo / V:住んでいますか=wohnt / S:レナは=Lena', '疑問詞 → 動詞 → 主語'],
      ]],
  ],
  4: [
    ['L0', '〜と思う', 'レナと「日本とドイツ、どっちがいい？」の話に。意見を言おう。',
      ['dass のかたまりで、動詞を最後に置けるようになろう', 'S:私は=ich / V:思います=denke / O:ドイツ語はおもしろいと=[J:と=dass / S:ドイツ語は=Deutsch / C:おもしろい=interessant / V:=ist]', '自分の意見をドイツ語で言える'],
      ['Lena', '日本語って難しい？', 'Ist Japanisch schwer?'], ['Lena', 'そう言ってくれてうれしい！', 'Das freut mich!'], [
        ['私はドイツ語はおもしろいと思います。', 'S:私は=ich / V:思います=denke / O:ドイツ語はおもしろいと=[J:と=dass / S:ドイツ語は=Deutsch / C:おもしろい=interessant / V:=ist]', 'dass のあとは「主語 … 動詞」。ist は最後！ 日本語と同じ順番'],
        ['私は日本語は難しいと思います。', 'S:私は=ich / V:思います=denke / O:日本語は難しいと=[J:と=dass / S:日本語は=Japanisch / C:難しい=schwer / V:=ist]', 'dass の前にはコンマ'],
        ['私はレナは親切だと思います。', 'S:私は=ich / V:思います=denke / O:レナは親切だと=[J:と=dass / S:レナは=Lena / C:親切=nett / V:=ist]', 'dass Lena nett ist'],
        ['私は彼が正しいと知っています。', 'S:私は=ich / V:知っています=weiß / O:彼が正しいと=[J:と=dass / S:彼が=er / C:正しい=recht / V:=hat]', '「正しい」は recht haben。dass の中で hat は最後'],
        ['私はベルリンは美しいと思います。', 'S:私は=ich / V:思います=denke / O:ベルリンは美しいと=[J:と=dass / S:ベルリンは=Berlin / C:美しい=schön / V:=ist]', 'schön（美しい）'],
      ]],
    ['L1', '〜ので', '「どうして？」とレナに聞かれた。理由を答えよう。',
      ['weil（〜ので）で理由を言えるようになろう', 'S:私は=ich / V:います=bleibe / M:家に=zu Hause / M:雨が降っているので=[J:ので=weil / S:=es / V:雨が降っている=regnet]', '理由をドイツ語で言える'],
      ['Lena', 'どうして今日は来ないの？', 'Warum kommst du heute nicht?'], ['Lena', 'なるほどね！', 'Ach, deshalb!'], [
        ['雨が降っているので、私は家にいます。', 'S:私は=ich / V:います=bleibe{bleibe|bleibst|bleibt} / M:家に=zu Hause / M:雨が降っているので=[J:ので=weil / S:=es / V:雨が降っている=regnet]', 'weil の中は regnet が最後。Weil es regnet, bleibe ich zu Hause. も正解（そのときは bleibe ich の順）'],
        ['おなかがすいているので、私はパンを食べます。', 'S:私は=ich / V:食べます=esse{esse|isst|essen} / O:パンを=Brot / M:おなかがすいているので=[J:ので=weil / S:=ich / V:おなかがすいている=Hunger habe]', '「おなかがすいている」は Hunger haben。weil の中では habe が最後'],
        ['ドイツ語が好きなので、私は毎日勉強します。', 'S:私は=ich / V:勉強します=lerne{lerne|lernst|lernt} / M:毎日=jeden Tag / M:ドイツ語が好きなので=[J:ので=weil / S:=ich / O:ドイツ語が=Deutsch / V:好きな=mag]', 'weil ich Deutsch mag。mag が最後'],
        ['母は忙しいので、私が料理をします。', 'S:私が=ich / V:料理をします=koche{koche|kochst|kocht} / M:母は忙しいので=[J:ので=weil / S:母は=meine Mutter / C:忙しい=beschäftigt / V:=ist]', 'weil meine Mutter beschäftigt ist'],
        ['天気がいいので、私たちは公園へ行きます。', 'S:私たちは=wir / V:行きます=gehen{gehe|geht|gehen} / M:公園へ=in den Park / M:天気がいいので=[J:ので=weil / S:天気が=das Wetter / C:いい=schön / V:=ist]', '天気がいいは das Wetter ist schön'],
      ]],
    ['L2', '〜とき・もし', 'レナと「ひまなときに何する？」の話。',
      ['wenn（〜とき・もし〜なら）を使えるようになろう', 'S:私は=ich / V:読みます=lese / O:本を=Bücher / M:時間があるとき=[J:とき=wenn / S:=ich / O:時間が=Zeit / V:ある=habe]', '「〜とき」「もし〜なら」をドイツ語で言える'],
      ['Lena', 'ひまなときは何してる？', 'Was machst du in deiner Freizeit?'], ['Lena', '私と同じだ！', 'Ich auch!'], [
        ['時間があるとき、私は本を読みます。', 'S:私は=ich / V:読みます=lese / O:本を=Bücher||ein Buch / M:時間があるとき=[J:とき=wenn / S:=ich / O:時間が=Zeit / V:ある=habe]', 'wenn の中では habe が最後。Wenn ich Zeit habe, lese ich Bücher. も正解', 'liest|hast|lesen'],
        ['雨が降るとき、私は家でゲームをします。', 'S:私は=ich / V:します=spiele / M:家で=zu Hause / O:ゲームを=Videospiele / M:雨が降るとき=[J:とき=wenn / S:=es / V:雨が降る=regnet]', 'wenn es regnet', 'spielt|regnen|spielst'],
        ['もし晴れたら、私たちは海へ行きます。', 'S:私たちは=wir / V:行きます=fahren / M:海へ=ans Meer / M:もし晴れたら=[J:もし=wenn / S:=es / C:晴れ=sonnig / V:たら=ist]', '「もし〜なら」も wenn', 'fährt|fahre|sind'],
        ['疲れたとき、私は音楽を聞きます。', 'S:私は=ich / V:聞きます=höre / O:音楽を=Musik / M:疲れたとき=[J:とき=wenn / S:=ich / C:疲れた=müde / V:=bin]', 'wenn ich müde bin', 'hört|hören|bin'],
        ['おなかがすいたとき、私はおにぎりを食べます。', 'S:私は=ich / V:食べます=esse / O:おにぎりを=Onigiri / M:おなかがすいたとき=[J:とき=wenn / S:=ich / V:おなかがすいた=Hunger habe]', 'wenn ich Hunger habe', 'isst|essen|habe'],
      ]],
    ['L3', '日本とドイツ', 'レナとオンラインで「日本とドイツ」についておしゃべり。',
      ['「〜と思う」「〜ので」で、意見と理由を書けるようになろう', 'S:私は=ich / V:思います=finde / O:日本はきれいだと=[J:と=dass / S:日本は=Japan / C:きれい=sauber / V:=ist]', '意見と理由をドイツ語で伝えられる'],
      ['Lena', '日本のどこが好き？', 'Was magst du an Japan?'], ['Lena', 'ドイツで待ってるね！', 'Ich warte in Deutschland auf dich!'], [
        ['私は日本はきれいだと思います。', 'S:私は=ich / V:思います=denke||finde / O:日本はきれいだと=[J:と=dass / S:日本は=Japan / C:きれい=schön / V:=ist]', 'dass のあと、動詞は最後'],
        ['私はドイツのパンはおいしいと思います。', 'S:私は=ich / V:思います=finde||denke / O:ドイツのパンはおいしいと=[J:と=dass / S:ドイツのパンは=deutsches Brot||das deutsche Brot / C:おいしい=lecker / V:=ist]', 'lecker（おいしい）'],
        ['電車は速いので、私は電車が好きです。', 'S:私は=ich / V:好きです=mag / O:電車が=Züge / M:電車は速いので=[J:ので=weil / S:電車は=Züge||die Züge / C:速い=schnell / V:=sind]', '電車（複数）なので sind が最後'],
        ['私はレナが来ると知っています。', 'S:私は=ich / V:知っています=weiß / O:レナが来ると=[J:と=dass / S:レナが=Lena / V:来る=kommt]', 'dass Lena kommt'],
        ['ドイツ語が好きなので、私はドイツへ行きたいです。', 'S:私は=ich / V:たいです=möchte / M:ドイツへ=nach Deutschland / V:行き=fahren||reisen||fliegen / M:ドイツ語が好きなので=[J:ので=weil / S:=ich / O:ドイツ語が=Deutsch / V:好きな=mag]', 'Weil ich Deutsch mag, möchte ich nach Deutschland fahren. も正解'],
      ]],
    ['L4', '手紙を書こう', 'レナに手紙を書こう。理由や気持ちも入れて。',
      ['箱がなくても、dass・weil・wenn の文を組み立てられるようになろう', 'S:私は=ich / V:書きます=schreibe / O:あなたに=dir / O:手紙を=einen Brief', '気持ちや理由をドイツ語の手紙で書ける'],
      null, ['Lena', 'お手紙ありがとう！', 'Danke für deinen Brief!'], [
        ['私はベルリンはきれいだと思います。', 'S:私は=ich / V:思います=finde||denke / O:ベルリンはきれいだと=[J:と=dass / S:ベルリンは=Berlin / C:きれい=schön / V:=ist]', ''],
        ['時間があるとき、私はあなたに手紙を書きます。', 'S:私は=ich / V:書きます=schreibe / O:あなたに=dir / O:手紙を=einen Brief / M:時間があるとき=[J:とき=wenn / S:=ich / O:時間が=Zeit / V:ある=habe]', 'dir（あなたに）→ einen Brief（手紙を）の順'],
        ['雨が降っているので、私は家で本を読みます。', 'S:私は=ich / V:読みます=lese / M:家で=zu Hause / O:本を=ein Buch / M:雨が降っているので=[J:ので=weil / S:=es / V:雨が降っている=regnet]', 'weil es regnet'],
        ['もし雨が降ったら、私たちは家でゲームをします。', 'S:私たちは=wir / V:します=spielen / M:家で=zu Hause / O:ゲームを=Videospiele / M:もし雨が降ったら=[J:もし=wenn / S:=es / V:雨が降ったら=regnet]', 'wenn es regnet'],
        ['私はあなたが元気だと願っています。', 'S:私は=ich / V:願っています=hoffe / O:あなたが元気だと=[J:と=dass / S:あなたが=du / C:元気=gesund / V:=bist]', 'hoffen（願う）。dass du gesund bist'],
      ]],
    ['BOSS', '村のお祭りスピーチ', 'ドイツの村のお祭りで、日本代表としてスピーチ！',
      ['ここまでの文を、すばやく正確に書けるようになろう', 'S:私は=ich / V:思います=finde / O:この村は美しいと=[J:と=dass / S:この村は=dieses Dorf / C:美しい=schön / V:=ist]', '自分の考えと理由をドイツ語で話せる'],
      null, ['Lena', '最高のスピーチだったよ！', 'Das war eine tolle Rede!'], [
        ['私はこの村は美しいと思います。', 'S:私は=ich / V:思います=finde||denke / O:この村は美しいと=[J:と=dass / S:この村は=dieses Dorf||das Dorf / C:美しい=schön / V:=ist]', 'dass … ist'],
        ['レナは親切なので、私はレナが好きです。', 'S:私は=ich / V:好きです=mag / O:レナが=Lena / M:レナは親切なので=[J:ので=weil / S:レナは=Lena / C:親切=nett / V:=ist]', 'weil Lena nett ist'],
        ['時間があるとき、私は手紙を書きます。', 'S:私は=ich / V:書きます=schreibe / O:手紙を=einen Brief / M:時間があるとき=[J:とき=wenn / S:=ich / O:時間が=Zeit / V:ある=habe]', 'wenn ich Zeit habe'],
        ['私はこの村が好きです。', 'S:私は=ich / V:好きです=mag / O:この村が=dieses Dorf', ''],
        ['もし晴れたら、私たちは公園へ行きます。', 'S:私たちは=wir / V:行きます=gehen / M:公園へ=in den Park / M:もし晴れたら=[J:もし=wenn / S:=es / C:晴れ=sonnig / V:たら=ist]', 'wenn es sonnig ist'],
      ]],
  ],
};
// The rule school of each world: [stage where it is practised, rule, example chunks, explanation (\n = new line)]
const RULES = {
  1: [
    [1, 'まず覚える「だれが」の言葉', '', 'ドイツ語の文は「だれが」にあたる言葉から始まることが多い。まずこの6つを覚えよう。\\nsie は「彼女」と「彼ら」の両方の意味。どちらかは動詞の形でわかる（sie ist ＝彼女は、sie sind ＝彼らは）。\\n文の最初では大文字で書く（Ich・Er）。', ['私はケンです。','Ich bin Ken.','Du bist Ken.']],
    [1, '「〜は…です」は 主語 → sein（＝）→ 中身 の順', 'S:私は=ich / V:です=bin / C:ケン=Ken', '日本語は「私は ケン です」と「です」が最後。ドイツ語は「私は です ケン」の順。「私＝ケン」のように、主語と中身を「＝」でつなぐ動詞 sein を、主語のすぐうしろに置く。\\nドイツ語の文は大文字で始め、名詞（Name・Schule など）はいつも大文字で書く。'],
    [2, 'sein（＝）は主語で形が変わる', 'S:私の両親は=meine Eltern / V:です=sind / C:親切=nett', '1人・1つ（mein Vater・das）なら ist、2人以上（meine Eltern）なら sind。英語の am / is / are と同じ考え方。', ['私の両親は親切です。','Meine Eltern sind nett.','Meine Eltern ist nett.']],
    [2, '名詞には「男性・女性・中性」がある', 'S:私の母は=meine Mutter / V:です=ist / C:医者=Ärztin', '名詞は der / die / das といっしょに覚えるのがコツ。', ['私の母は医者です。','Meine Mutter ist Ärztin.','Mein Mutter ist Ärztin.']],
    [3, '主語と動詞を見つけて、動詞を主語に合わせる', 'S:私たちの学校は=unsere Schule / V:です=ist / C:大きい=groß', '日本語の「〜は」「〜が」が主語、文の最後の「です・する」が動詞。ドイツ語ではこの2つが文の頭にならぶ。'],
    [4, 'ふつうの動詞も、主語で語尾が変わる', 'S:彼は=er / V:住んでいます=wohnt / M:ベルリンに=in Berlin', '辞書の形（wohnen）から -en を取って、主語に合う語尾をつける。\\nmögen（好き）→ ich mag・er mag のように、形が大きく変わる動詞もある。', ['彼はベルリンに住んでいます。','Er wohnt in Berlin.','Er wohne in Berlin.']],
  ],
  2: [
    [1, '「〜を」は動詞のうしろ', 'S:私は=ich / V:飲みます=trinke / O:牛乳を=Milch', '日本語は「牛乳を 飲みます」と動詞が最後。ドイツ語は ich trinke Milch と動詞が2番目に来て、「〜を」はそのうしろ。'],
    [1, '「いつ」は動詞のすぐうしろ、「〜を」の前', 'S:私は=ich / V:食べます=esse / M:毎日=jeden Tag / O:リンゴを=einen Apfel', 'ドイツ語は「いつ」→「どこ」→「〜を」の順が多い。英語の I eat an apple every day とは「毎日」の位置がちがう。'],
    [2, '動詞はいつも2番目！', 'M:放課後=nach der Schule / V:します=spiele / S:私は=ich / O:サッカーを=Fußball', 'ドイツ語でいちばん大事なルール。文の最初に何を置いても、動詞は2番目。\\n・Ich spiele nach der Schule Fußball.（主語が1番目）\\n・Nach der Schule spiele ich Fußball.（「放課後」が1番目 → 動詞 → 主語）\\n2番目をゆずった主語は、動詞のすぐうしろに回る。', ['放課後、私はサッカーをします。','Nach der Schule spiele ich Fußball.','Nach der Schule ich spiele Fußball.']],
    [3, '男性名詞の「〜を」は den・einen', 'S:コーチは=der Trainer / V:ほめます=lobt / O:その選手を=den Spieler', '「〜を」になるとき、男性名詞だけ形が変わる：der → den、ein → einen、kein → keinen。\\n女性（die・eine）と中性（das・ein）は変わらない。', ['コーチはその選手をほめます。','Der Trainer lobt den Spieler.','Der Trainer lobt der Spieler.']],
    [4, '「いつ」→「どこ」の順', 'S:私たちは=wir / V:行きます=gehen / M:土曜日に=am Samstag / M:公園へ=in den Park', '英語は「どこ → いつ」（to the park on Saturday）だけど、ドイツ語は「いつ → どこ」。日本語の「土曜日に 公園へ」と同じ順番！'],
  ],
  3: [
    [1, 'はい・いいえの疑問文は、動詞が先頭', 'V:しますか=spielst / S:あなたは=du / O:サッカーを=Fußball', '英語の Do にあたる言葉はない。動詞をそのまま文の最初に出して、そのうしろに主語。\\ndu（あなた）のとき、動詞の語尾は -st。'],
    [1, '疑問詞 → 動詞 → 主語', 'W:どこに=wo / V:住んでいますか=wohnst / S:あなたは=du', 'Was（なに）・Wo（どこ）・Wann（いつ）・Wie（どうやって・どんな）が先頭。ここでも動詞は2番目。'],
    [2, '「〜ない」は nicht と kein', 'S:私は=ich / V:ありません=habe / O:時間が=keine Zeit', '「（名詞）がない」は kein＋名詞（ein の反対）。それ以外は nicht。\\nnicht は形容詞の前（nicht teuer）か、文の最後のほう（Ich mag Natto nicht.）。', ['私は時間がありません。','Ich habe keine Zeit.','Ich habe nicht Zeit.']],
    [3, '2つ目の動詞は、文の最後（わく構造）', 'S:私は=ich / V:たいです=möchte / O:お城を=ein Schloss / V:見=sehen', 'möchte（〜したい）・kann（〜できる）が2番目に来ると、もう1つの動詞は原形のまま文の最後へ。2つの動詞で文をはさむので「わく構造」という。\\n日本語の「お城を 見 たい」と同じで、「見る」がうしろ！', ['私はお城を見たいです。','Ich möchte ein Schloss sehen.','Ich möchte sehen ein Schloss.']],
    [4, '「〜した」は habe ＋ 過去分詞（最後）', 'S:私は=ich / V:=habe / O:サッカーを=Fußball / V:しました=gespielt', '話し言葉の「〜した」は habe（2番目）＋ ge〜t（最後）で作る。これもわく構造。\\nspielen → gespielt、machen → gemacht。sehen → gesehen・essen → gegessen のように形が変わる動詞もある。', ['私はサッカーをしました。','Ich habe Fußball gespielt.','Ich habe gespielt Fußball.']],
  ],
  4: [
    [1, 'dass（〜と）のかたまりでは、動詞は最後', 'S:私は=ich / V:思います=denke / O:ドイツ語はおもしろいと=[J:と=dass / S:ドイツ語は=Deutsch / C:おもしろい=interessant / V:=ist]', 'dass のうしろは「主語 … 動詞」で、動詞がかたまりの最後。「ドイツ語は おもしろい（です）と」という日本語と同じ順番！\\ndass の前にはコンマを打つ。', ['私はドイツ語はおもしろいと思います。','Ich denke, dass Deutsch interessant ist.','Ich denke, dass Deutsch ist interessant.']],
    [2, 'weil（〜ので）のかたまりも、動詞は最後', 'S:私は=ich / V:います=bleibe / M:家に=zu Hause / M:雨が降っているので=[J:ので=weil / S:=es / V:雨が降っている=regnet]', '理由を言う weil のかたまりも、動詞（regnet）が最後。weil の前にもコンマ。', ['雨が降っているので、私は家にいます。','Ich bleibe zu Hause, weil es regnet.','Ich bleibe zu Hause, weil regnet es.']],
    [2, 'かたまりを先頭に出すと、動詞 → 主語', 'M:雨が降っているので=[J:ので=weil / S:=es / V:雨が降っている=regnet] / V:います=bleibe / S:私は=ich / M:家に=zu Hause', 'weil・wenn のかたまり全体で「1番目」の1つ分。だから次は動詞（2番目）、そのあとに主語。\\nWeil es regnet, bleibe ich zu Hause.', ['雨が降っているので、私は家にいます。','Weil es regnet, bleibe ich zu Hause.','Weil es regnet, ich bleibe zu Hause.']],
    [3, 'wenn は「〜とき」も「もし〜なら」も', 'S:私は=ich / V:読みます=lese / O:本を=Bücher / M:時間があるとき=[J:とき=wenn / S:=ich / O:時間が=Zeit / V:ある=habe]', '「〜とき」も「もし〜なら」も wenn で言える。かたまりの中は動詞が最後：wenn ich Zeit habe。', ['時間があるとき、私は本を読みます。','Ich lese Bücher, wenn ich Zeit habe.','Ich lese Bücher, wenn ich habe Zeit.']],
    [4, '動詞の置き場所まとめ', 'S:私は=ich / V:たいです=möchte / M:ドイツへ=nach Deutschland / V:行き=fahren / M:ドイツ語が好きなので=[J:ので=weil / S:=ich / O:ドイツ語が=Deutsch / V:好きな=mag]', '・ふつうの文：動詞は2番目\\n・2つ目の動詞（möchte … fahren ／ habe … gespielt）：最後\\n・weil・dass・wenn の中：最後\\n・疑問文：先頭（疑問詞があれば2番目）\\nこの4つで、ドイツ語の語順はほとんど説明できる！', ['ドイツ語が好きなので、私はドイツへ行きたいです。','Ich möchte nach Deutschland fahren, weil ich Deutsch mag.','Ich möchte fahren nach Deutschland, weil ich mag Deutsch.']],
  ],
};
// Small table of forms shown inside a rule: TABLES[world][rule number] = [title, rows].
// Only forms this world uses. Rows split by ";" and cells by "|"; the first row is the header.
// [form] gets ✓ once a stage practising it is cleared (else that stage's number). [der=der Trainer/…] counts only those phrases.
const TABLES = {
  1: {
    1: ['主語の言葉', '日本語|ドイツ語|例;私|[ich]|Ich bin Ken.;あなた・きみ|[du]|Wie alt bist du?;彼|[er]|Er wohnt in Berlin.;彼女・彼ら|sie|—;それ|[es=es regnet/es sonnig]|Es regnet.;私たち|[wir]|Wir laufen jeden Tag.'],
    3: ['sein（＝）の形', '主語|形|例;ich（私）|[bin]|Ich bin Ken.;du（きみ）|[bist]|Wie alt bist du?;er・sie・es（彼・彼女・それ・1人の人）|[ist]|Mein Vater ist Lehrer.;wir・sie（私たち・彼ら・2人以上）|[sind]|Meine Eltern sind nett.'],
    4: ['「その」「私の」は名詞の性で変わる', '|男性|女性|中性|複数;その|[der=der Trainer/der Bahnhof]|[die=die Mutter/die Schwester]|[das=das Buch/das Klassenzimmer]|[die=die Schüler/die Leute];私の|[mein=mein Vater/mein Bruder/mein Name]|[meine=meine Mutter/meine Schwester/meine Familie/meine Klasse]|[mein=mein Hobby]|[meine=meine Eltern/meine Brüder];私たちの|[unser=unser Klassenlehrer]|[unsere=unsere Schule]|—|—'],
    6: ['動詞の語尾', '主語|語尾|wohnen（住む）|lernen（学ぶ）;ich|-e|[wohne]|[lerne];du|-st|[wohnst]|lernst;er・sie・es|-t|[wohnt]|lernt;wir・sie|-en|wohnen|lernen'],
  },
  2: {
    4: ['「〜を」で変わるのは男性だけ', '|男性|女性|中性;〜は|[der=der Trainer] ・ ein|die ・ eine|das ・ ein;〜を|[den=den Spieler/den Park] ・ [einen=einen Apfel/einen Ball/einen Film/einen Hund/einen Schläger]|die ・ [eine=eine Kamera]|das ・ [ein=ein Buch]'],
  },
  3: {
    1: ['du（きみ）のときの動詞', '辞書の形|du の形|疑問文;spielen|[spielst]|Spielst du Fußball?;wohnen|[wohnst]|Wo wohnst du?;trinken|[trinkst]|Was trinkst du?;mögen|[magst]|Magst du Musik?;sein|[bist]|Wie alt bist du?'],
    3: ['kein（〜ない）の形', '|男性|女性|中性;〜を|[keinen=keinen Hund]|[keine=keine Zeit/keine Karte]|[kein=kein Fleisch]'],
    4: ['2番目に来る動詞', '主語|möchte（〜したい）|kann（〜できる）;ich|[möchte]|[kann];du|möchtest|kannst;er・sie・es|[möchte=Lena möchte]|kann;wir・sie|[möchten]|können'],
    5: ['過去分詞（最後に来る形）', '辞書の形|過去分詞;spielen|[gespielt];machen|[gemacht];sehen|[gesehen];essen|[gegessen];lesen|[gelesen]'],
  },
  4: {
    4: ['3つのつなぎ言葉', 'つなぎ言葉|意味|例（動詞は最後）;[dass]|〜と|Ich denke, dass Deutsch interessant ist.;[weil]|〜ので|…, weil es regnet.;[wenn]|〜とき・もし〜なら|…, wenn ich Zeit habe.'],
  },
};
// とことんドリル: one sentence pattern per stage, filled with topic words (see README "とことんドリル").
// Subjects carry their person; verbs list a form per person and pick a fitting object list with "o".
const vf = (s1, s2, s3, pl) => ({ '1s': s1, '2s': s2, '3s': s3, '1p': pl, '3p': pl });
// students only, for after-school activities
const KIDS = [['私は', 'ich', '1s'], ['きみは', 'du', '2s'], ['彼は', 'er', '3s'], ['彼女は', 'sie', '3s'], ['私の兄は', 'mein Bruder', '3s'], ['私の妹は', 'meine Schwester', '3s'], ['私の友だちは', 'mein Freund', '3s'], ['私たちは', 'wir', '1p']];
const PERSONS = [['私は', 'ich', '1s'], ['きみは', 'du', '2s'], ['彼は', 'er', '3s'], ['彼女は', 'sie', '3s'], ['私の母は', 'meine Mutter', '3s'], ['私の兄は', 'mein Bruder', '3s'], ['私たちは', 'wir', '1p'], ['私の両親は', 'meine Eltern', '3p']];
const SPIELEN = vf('spiele', 'spielst', 'spielt', 'spielen'), TRINKEN = vf('trinke', 'trinkst', 'trinkt', 'trinken'), HABEN = vf('habe', 'hast', 'hat', 'haben'), LERNEN = vf('lerne', 'lernst', 'lernt', 'lernen');
const SPORT = [['サッカーを', 'Fußball'], ['テニスを', 'Tennis'], ['バスケットボールを', 'Basketball'], ['バレーボールを', 'Volleyball'], ['野球を', 'Baseball'], ['卓球を', 'Tischtennis']];
const DRINKS = [['牛乳を', 'Milch'], ['コーヒーを', 'Kaffee'], ['お茶を', 'Tee'], ['水を', 'Wasser'], ['ジュースを', 'Saft'], ['ココアを', 'Kakao']];
const FOOD = [['パンを', 'Brot'], ['ご飯を', 'Reis'], ['リンゴを', 'einen Apfel'], ['チーズを', 'Käse'], ['魚を', 'Fisch'], ['肉を', 'Fleisch'], ['果物を', 'Obst']];
const LANGS = [['ドイツ語を', 'Deutsch'], ['英語を', 'Englisch'], ['日本語を', 'Japanisch'], ['フランス語を', 'Französisch'], ['中国語を', 'Chinesisch']];
const DRILLS = {
  '1-2': { ja: ['S', 'C', 'V'], en: ['S', 'V', 'C'], slots: {
    S: PERSONS.concat([['私の友だちは', 'mein Freund', '3s'], ['私たちの先生は', 'unser Lehrer', '3s']]),
    V: [{ ja: 'です', f: vf('bin', 'bist', 'ist', 'sind') }],
    C: [['親切', 'nett'], ['背が高い', 'groß'], ['眠い', 'müde'], ['幸せ', 'glücklich'], ['おもしろい', 'lustig'], ['静か', 'ruhig'], ['忙しい', 'beschäftigt'], ['元気', 'gesund'], ['病気', 'krank']] } },
  '1-4': { ja: ['S', 'M', 'O', 'V'], en: ['S', 'V', 'M', 'O'], slots: {
    S: PERSONS,
    V: [{ ja: '住んでいます', f: vf('wohne', 'wohnst', 'wohnt', 'wohnen'), o: 'live' }, { ja: '働いています', f: vf('arbeite', 'arbeitest', 'arbeitet', 'arbeiten'), o: 'work' },
      { ja: '出身です', f: vf('komme', 'kommst', 'kommt', 'kommen'), o: 'from' }, { ja: '習っています', f: LERNEN, o: 'learn' }],
    M: { live: [['東京に', 'in Tokio'], ['大阪に', 'in Osaka'], ['ベルリンに', 'in Berlin'], ['ミュンヘンに', 'in München'], ['ウィーンに', 'in Wien'], ['京都に', 'in Kyoto']],
      work: [['東京で', 'in Tokio'], ['病院で', 'im Krankenhaus'], ['銀行で', 'in einer Bank'], ['学校で', 'in einer Schule'], ['ベルリンで', 'in Berlin']],
      from: [['日本の', 'aus Japan'], ['ドイツの', 'aus Deutschland'], ['オーストリアの', 'aus Österreich'], ['スイスの', 'aus der Schweiz'], ['中国の', 'aus China']] },
    O: { learn: LANGS.concat([['ピアノを', 'Klavier'], ['数学を', 'Mathe']]) } } },
  '2-1': { ja: ['S', 'M', 'O', 'V'], en: ['S', 'V', 'M~', 'O'], opt: ['M'], slots: {
    S: PERSONS,
    V: [{ ja: '飲みます', f: TRINKEN, o: 'drink' }, { ja: '食べます', f: vf('esse', 'isst', 'isst', 'essen'), o: 'food' }, { ja: '買います', f: vf('kaufe', 'kaufst', 'kauft', 'kaufen'), o: 'shop' }],
    M: [['毎日', 'jeden Tag'], ['毎朝', 'jeden Morgen'], ['夜に', 'abends'], ['今日', 'heute'], ['よく', 'oft']],
    O: { drink: DRINKS, food: FOOD, shop: [['パンを', 'Brot'], ['本を', 'ein Buch'], ['かばんを', 'eine Tasche'], ['ペンを', 'einen Stift'], ['花を', 'Blumen'], ['ノートを', 'ein Heft']] } } },
  '2-2': { ja: ['M、', 'S', 'O', 'V'], en: ['S', 'V', 'M~', 'O'], note: '「いつ」を先頭にしたら、動詞 → 主語 の順', slots: {
    S: KIDS,
    V: [{ ja: 'します', f: SPIELEN, o: 'sport' }, { ja: '弾きます', f: SPIELEN, o: 'instr' }, { ja: '読みます', f: vf('lese', 'liest', 'liest', 'lesen'), o: 'read' }, { ja: 'します', f: vf('mache', 'machst', 'macht', 'machen'), o: 'do' }],
    M: [['放課後', 'nach der Schule'], ['月曜日に', 'am Montag'], ['週末に', 'am Wochenende'], ['夜に', 'abends'], ['毎日', 'jeden Tag'], ['朝に', 'morgens'], ['日曜日に', 'am Sonntag']],
    O: { sport: SPORT, instr: [['ピアノを', 'Klavier'], ['ギターを', 'Gitarre'], ['バイオリンを', 'Geige'], ['フルートを', 'Flöte']],
      read: [['本を', 'ein Buch'], ['マンガを', 'Comics'], ['新聞を', 'eine Zeitung'], ['メールを', 'eine E-Mail']], do: [['宿題を', 'Hausaufgaben'], ['運動を', 'Sport'], ['ヨガを', 'Yoga']] } } },
  '2-3': { ja: ['S', 'O', 'V'], en: ['S', 'V', 'O'], note: '男性名詞の「〜を」は ein → einen、der → den', slots: {
    S: PERSONS,
    V: [{ ja: '持っています', f: HABEN, o: 'thing' }, { ja: '買います', f: vf('kaufe', 'kaufst', 'kauft', 'kaufen'), o: 'thing' }, { ja: 'さがしています', f: vf('suche', 'suchst', 'sucht', 'suchen'), o: 'thing' }],
    O: { thing: [['ボールを', 'einen Ball'], ['ペンを', 'einen Stift'], ['かさを', 'einen Schirm'], ['かぎを', 'einen Schlüssel'], ['かばんを', 'eine Tasche'], ['時計を', 'eine Uhr'], ['スマホを', 'ein Handy'], ['自転車を', 'ein Fahrrad'], ['そのボールを', 'den Ball'], ['そのかばんを', 'die Tasche'], ['その本を', 'das Buch']] } } },
  '2-4': { ja: ['M、', 'S', 'M2', 'V'], en: ['S', 'V', 'M~', 'M2'], note: '「いつ」→「どこへ」の順', slots: {
    S: PERSONS,
    V: [{ ja: '行きます', f: vf('gehe', 'gehst', 'geht', 'gehen') }],
    M: [['土曜日に', 'am Samstag'], ['日曜日に', 'am Sonntag'], ['週末に', 'am Wochenende'], ['今日', 'heute'], ['明日', 'morgen']],
    M2: [['公園へ', 'in den Park'], ['映画館へ', 'ins Kino'], ['町へ', 'in die Stadt'], ['学校へ', 'zur Schule'], ['プールへ', 'ins Schwimmbad'], ['図書館へ', 'in die Bibliothek'], ['スーパーへ', 'in den Supermarkt'], ['家へ', 'nach Hause']] } },
  '3-1': { ja: ['S', 'O', 'V'], en: ['V', 'S', 'O'], q: true, note: '疑問文は動詞が先頭', slots: {
    S: [['きみは', 'du', '2s'], ['彼は', 'er', '3s'], ['彼女は', 'sie', '3s'], ['レナは', 'Lena', '3s'], ['きみのお兄さんは', 'dein Bruder', '3s']],
    V: [{ ja: 'しますか', f: SPIELEN, o: 'sport' }, { ja: '飲みますか', f: TRINKEN, o: 'drink' }, { ja: '好きですか', f: vf('mag', 'magst', 'mag', 'mögen'), o: 'like' }, { ja: '習っていますか', f: LERNEN, o: 'learn' }],
    O: { sport: SPORT, drink: DRINKS, learn: LANGS,
      like: [['音楽が', 'Musik'], ['サッカーが', 'Fußball'], ['すしが', 'Sushi'], ['ネコが', 'Katzen'], ['日本が', 'Japan'], ['チョコレートが', 'Schokolade']] } } },
  '3-2': { ja: ['S', 'O', 'V'], en: ['S', 'V', 'O'], note: '「〜がない」は kein。男性名詞の「〜を」は keinen', slots: {
    S: PERSONS,
    V: [{ ja: '飼っていません', f: HABEN, o: 'pet' }, { ja: '持っていません', f: HABEN, o: 'thing' }, { ja: 'ありません', f: HABEN, o: 'abs' }],
    O: { pet: [['犬を', 'keinen Hund'], ['ネコを', 'keine Katze'], ['鳥を', 'keinen Vogel'], ['魚を', 'keine Fische']],
      thing: [['かさを', 'keinen Schirm'], ['スマホを', 'kein Handy'], ['自転車を', 'kein Fahrrad'], ['かばんを', 'keine Tasche'], ['ペンを', 'keinen Stift']],
      abs: [['時間が', 'keine Zeit'], ['お金が', 'kein Geld'], ['やる気が', 'keine Lust'], ['宿題が', 'keine Hausaufgaben']] } } },
  '3-3': { ja: ['S', 'O', 'V2', 'V'], en: ['S', 'V', 'O', 'V2'], note: '2つ目の動詞（原形）は最後', slots: {
    S: PERSONS,
    V: [{ ja: 'たいです', f: vf('möchte', 'möchtest', 'möchte', 'möchten') }],
    V2: [{ ja: '見', en: 'sehen', o: 'see' }, { ja: '食べ', en: 'essen', o: 'food' }, { ja: '飲み', en: 'trinken', o: 'drink' }, { ja: '買い', en: 'kaufen', o: 'buy' }, { ja: '訪ね', en: 'besuchen', o: 'visit' }],
    O: { see: [['お城を', 'ein Schloss'], ['大聖堂を', 'den Dom'], ['サッカーの試合を', 'ein Fußballspiel'], ['海を', 'das Meer'], ['山を', 'die Berge']],
      food: [['ソーセージを', 'Würstchen'], ['プレッツェルを', 'Brezeln'], ['ケーキを', 'Kuchen'], ['シュニッツェルを', 'Schnitzel']],
      drink: [['コーヒーを', 'Kaffee'], ['ジュースを', 'Saft'], ['ココアを', 'Kakao']],
      buy: [['チョコレートを', 'Schokolade'], ['Tシャツを', 'ein T-Shirt'], ['絵はがきを', 'Postkarten'], ['本を', 'ein Buch']],
      visit: [['ベルリンを', 'Berlin'], ['祖母を', 'meine Oma'], ['博物館を', 'das Museum'], ['友だちを', 'meine Freunde']] } } },
  '1-1': { ja: ['S', 'C', 'V'], en: ['S', 'V', 'C'], note: '職業や立場には ein をつけない。女性は -in（Lehrerin）', slots: {
    S: [{ ja: '私は', en: 'ich', p: '1s', o: 'any' }, { ja: 'きみは', en: 'du', p: '2s', o: 'any' }, { ja: '彼は', en: 'er', p: '3s', o: 'm' }, { ja: '彼女は', en: 'sie', p: '3s', o: 'f' },
      { ja: '私の父は', en: 'mein Vater', p: '3s', o: 'm' }, { ja: '私の母は', en: 'meine Mutter', p: '3s', o: 'f' }, { ja: '私の兄は', en: 'mein Bruder', p: '3s', o: 'm' },
      { ja: '私の姉は', en: 'meine Schwester', p: '3s', o: 'f' }, { ja: '私たちは', en: 'wir', p: '1p', o: 'pl' }, { ja: '私の両親は', en: 'meine Eltern', p: '3p', o: 'pl' }],
    V: [{ ja: 'です', f: vf('bin', 'bist', 'ist', 'sind') }],
    C: { any: [['生徒', 'Schüler||Schülerin'], ['先生', 'Lehrer||Lehrerin'], ['医者', 'Arzt||Ärztin'], ['日本人', 'Japaner||Japanerin']],
      m: [['生徒', 'Schüler'], ['先生', 'Lehrer'], ['医者', 'Arzt'], ['日本人', 'Japaner'], ['エンジニア', 'Ingenieur']],
      f: [['生徒', 'Schülerin'], ['先生', 'Lehrerin'], ['医者', 'Ärztin'], ['日本人', 'Japanerin'], ['エンジニア', 'Ingenieurin']],
      pl: [['生徒', 'Schüler'], ['先生', 'Lehrer'], ['医者', 'Ärzte'], ['日本人', 'Japaner']] } } },
  // review and boss stages mix the world's patterns
  '1-3': { use: ['1-2'] }, '1-5': { use: ['1-1', '1-2', '1-4'] }, '1-6': { use: ['1-1', '1-2', '1-4'] },
  '2-5': { use: ['2-1', '2-2', '2-3', '2-4'] }, '2-6': { use: ['2-1', '2-2', '2-3', '2-4'] },
  '3-5': { use: ['3-1', '3-2', '3-3', '3-4'] }, '3-6': { use: ['3-1', '3-2', '3-3', '3-4'] },
  '4-4': { use: ['4-1', '4-2'] }, '4-5': { use: ['4-1', '4-2', '4-3'] }, '4-6': { use: ['4-1', '4-2', '4-3'] },
  // world 4: a box inside the sentence (dass / weil / wenn), verb last inside it
  '4-1': { ja: ['S', 'O', 'V'], en: ['S', 'V', 'O'], note: 'dass のかたまりの中では、動詞は最後', slots: {
    S: PERSONS,
    V: [{ ja: '思います', f: vf('denke', 'denkst', 'denkt', 'denken') }],
    O: { in: { ja: ['S', 'C', 'J'], en: ['J', 'S', 'C', 'V'], slots: {
      J: [['と', 'dass']],
      S: [{ ja: 'ドイツ語は', en: 'Deutsch', p: '3s', o: 'study' }, { ja: '数学は', en: 'Mathe', p: '3s', o: 'study' }, { ja: 'この本は', en: 'dieses Buch', p: '3s', o: 'study' },
        { ja: 'ベルリンは', en: 'Berlin', p: '3s', o: 'place' }, { ja: '私の町は', en: 'meine Stadt', p: '3s', o: 'place' }, { ja: 'ネコは', en: 'Katzen', p: '3p', o: 'animal' },
        { ja: 'ソーセージは', en: 'Würstchen', p: '3p', o: 'food' }, { ja: 'ドイツのパンは', en: 'deutsches Brot', p: '3s', o: 'food' }],
      V: [{ ja: '', f: vf('bin', 'bist', 'ist', 'sind') }],
      C: { study: [['おもしろい', 'interessant'], ['難しい', 'schwer'], ['大切だ', 'wichtig']], place: [['美しい', 'schön'], ['静かだ', 'ruhig']],
        animal: [['かわいい', 'süß'], ['かしこい', 'klug']], food: [['おいしい', 'lecker']] } } } } } },
  '4-2': { ja: ['M、', 'S', 'O', 'V'], en: ['S', 'V', 'O', 'M'], note: 'weil の中では動詞は最後。かたまりを先頭にしたら 動詞 → 主語', slots: {
    S: [['私は', 'ich', '1s']], V: [['好きです', 'mag']],
    O: [{ ja: '夏が', en: 'den Sommer', o: 'summer' }, { ja: '冬が', en: 'den Winter', o: 'winter' }, { ja: '犬が', en: 'Hunde', o: 'dogs' }, { ja: 'ドイツ語が', en: 'Deutsch', o: 'de' }, { ja: '土曜日が', en: 'den Samstag', o: 'sat' }],
    M: { in: { ja: ['V', 'J'], en: ['J', 'S', 'V'], slots: {
      J: [['ので', 'weil']], S: [['', 'ich']],
      V: { summer: [['泳げる', 'schwimmen kann'], ['海に行ける', 'ans Meer fahren kann']], winter: [['スキーができる', 'Ski fahren kann'], ['雪が好きな', 'Schnee mag']],
        dogs: [['動物が好きな', 'Tiere mag'], ['犬を飼っている', 'einen Hund habe']], de: [['ドイツの音楽が好きな', 'deutsche Musik mag'], ['ドイツに行きたい', 'nach Deutschland fahren möchte']],
        sat: [['学校がない', 'keine Schule habe'], ['長く寝られる', 'lange schlafen kann']] } } } } } },
  '4-3': { ja: ['M、', 'S', 'O', 'V'], en: ['S', 'V', 'O', 'M'], note: 'wenn のかたまりの中でも、動詞は最後', slots: {
    S: [['私は', 'ich', '1s']],
    V: [{ ja: '読みます', en: 'lese', o: 'read' }, { ja: '聞きます', en: 'höre', o: 'listen' }, { ja: 'します', en: 'spiele', o: 'game' }, { ja: '食べます', en: 'esse', o: 'eat' }],
    O: { read: [['本を', 'Bücher'], ['マンガを', 'Comics']], listen: [['音楽を', 'Musik'], ['ラジオを', 'Radio']], game: [['ゲームを', 'Videospiele'], ['トランプを', 'Karten']], eat: [['チョコレートを', 'Schokolade'], ['アイスを', 'Eis']] },
    M: { in: { ja: ['O', 'V', 'J'], en: ['J', 'S', 'O', 'V'], slots: {
      J: [['とき', 'wenn']], S: [['', 'ich']],
      V: [{ ja: 'ある', en: 'habe', o: 'time' }, { ja: '疲れている', en: 'müde bin' }, { ja: 'ひまな', en: 'frei habe' }, { ja: '悲しい', en: 'traurig bin' }],
      O: { time: [['時間が', 'Zeit']] } } } } } },
  '3-4': { ja: ['M、', 'S', 'O', 'V2'], en: ['S', 'V', 'M~', 'O', 'V2'], opt: ['M'], note: '「〜した」は habe（2番目）＋ 過去分詞（最後）', slots: {
    S: PERSONS,
    V: [{ ja: '', f: HABEN }],
    M: [['昨日', 'gestern'], ['週末に', 'am Wochenende'], ['先週', 'letzte Woche'], ['日曜日に', 'am Sonntag'], ['今朝', 'heute Morgen']],
    V2: [{ ja: 'しました', en: 'gespielt', o: 'sport' }, { ja: '見ました', en: 'gesehen', o: 'watch' }, { ja: '食べました', en: 'gegessen', o: 'food' }, { ja: '買いました', en: 'gekauft', o: 'buy' }, { ja: '読みました', en: 'gelesen', o: 'read' }, { ja: 'しました', en: 'gemacht', o: 'do' }],
    O: { sport: SPORT, food: FOOD, watch: [['映画を', 'einen Film'], ['試合を', 'ein Spiel'], ['アニメを', 'einen Anime']],
      buy: [['本を', 'ein Buch'], ['かばんを', 'eine Tasche'], ['ペンを', 'einen Stift'], ['チョコレートを', 'Schokolade']],
      read: [['本を', 'ein Buch'], ['マンガを', 'Comics'], ['新聞を', 'eine Zeitung']], do: [['宿題を', 'Hausaufgaben'], ['運動を', 'Sport'], ['ヨガを', 'Yoga']] } } },
};
// worlds 5–13 live in their own file
{ const more = require('./worlds-5-13.js')({ vf, PERSONS, KIDS }); Object.assign(W, more.W); Object.assign(RULES, more.RULES); Object.assign(TABLES, more.TABLES); Object.assign(DRILLS, more.DRILLS); }
const q = v => (v == null ? '' : /[",\n]/.test(v) ? '"' + String(v).replace(/"/g, '""') + '"' : String(v));
const HEAD = 'world,stage,level,title,type,speaker,ja,en,chunks,distractors,note';
for (const [w, stages] of Object.entries(W)) {
  const rows = [HEAD];
  const row = (s, lv, title, type, speaker, ja, en, chunks, dis, note) => rows.push([w, s, lv, title, type, speaker, ja, en, chunks, dis, note].map(q).join(','));
  (RULES[w] || []).forEach(([s, text, ex, note, check], i) => {
    row(s, '', check ? check[0] : '', 'RULE', '', text, check ? check[1] : '', ex, check ? check[2] : '', note); // check = [日本語, 正しい文, まちがい文]
    const t = (TABLES[w] || {})[i + 1]; if (t) row(s, '', '', 'TABLE', '', t[0], '', t[1], '', '');
  });
  stages.forEach(([lv, title, intro, goal, before, after, qs], i) => {
    const s = i + 1;
    row(s, lv, title, 'INTRO', '', intro, '', '', '', '');
    row(s, lv, title, 'GOAL', '', goal[0], '', goal[1], '', goal[2]);
    if (before) row(s, lv, title, 'TALK', before[0], before[1], before[2], '', '', '');
    qs.forEach(([ja, ch, note, dis]) => row(s, lv, title, 'Q', 'me', ja, '', ch, dis || '', note));
    if (after) row(s, lv, title, 'TALK', after[0], after[1], after[2], '', '', '');
    const d = DRILLS[`${w}-${s}`]; if (d) row(s, lv, title, 'DRILL', '', '', '', JSON.stringify(d), '', '');
  });
  fs.writeFileSync(path.join(__dirname, `world${w}.csv`), rows.join('\n') + '\n');
}
console.log('wrote', Object.keys(W).length, 'files');
