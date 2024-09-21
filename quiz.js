//クイズ配列 グローバル変数
const quizlist = [
    {
      id: "00",
      question: "しぐれ？",
      answer: "1",
      explain: "うい",
      image: "",
    },
    {
      id: "",
      question: "返事は？",
      answer: "1",
      explain: "Oui!",
      image: "",
    },
    {
      id: "01",
      question: "通貨は€",
      answer: "1",
      explain: "2002年よりフランスはユーロ(€)を通貨として導入している",
      image: "./img/Euro_Series_Banknotes_(2019).jpg",
    },
    {
      id: "a01",
      question: "通貨は￡",
      answer: "2",
      explain: "スターリング・ポンドはイギリスの通貨単位",
      image: "./img/pound.jpg",
    },
    {
      id: "02",
      question: "電話番号 01-XX-XX-XX-XX",
      answer: "1",
      explain: "01はフランス・パリの市外局番",
      image: "",
    },
    {
      id: "03",
      question: "このナンバープレートは？",
      answer: "1",
      explain: "フランスはEU式プレートを採用している",
      image: "./img/plate.jpg",
    },
    {
      id: "04",
      question: "このボラードは？",
      answer: "1",
      explain: "フランス式のボラード",
      image: "./img/French_bollards.jpg",
    },
    {
      id: "05",
      question: "このボラードは？",
      answer: "2",
      explain: "ポーランド式のボラード",
      image: "./img/Polish_bollards.jpg",
    },
    {
      id: "06",
      question: "http://○○○○.fr",
      answer: "1",
      explain: ".frはフランスの国別ドメイン(TLD)",
      image: "",
    },
    {
      id: "07",
      question: "北大西洋条約機構(NATO)",
      answer: "1",
      explain: "フランスは1949年よりNATOに加盟している",
      image: "./img/Flag_of_NATO.png",
    },
    {
      id: "08",
      question: "道路は右側通行",
      answer: "1",
      explain: "フランスは右側通行の国である",
      image: "./img/right.png",
    },
    {
      id: "09",
      question: "道路は左側通行",
      answer: "2",
      explain: "フランスは右側通行の国である",
      image: "./img/left.png",
    },
    {
      id: "10",
      question: "グアドループ",
      answer: "1",
      explain: "カリブ海に位置するフランスの海外県である",
      image: "./img/Guadeloupe.png",
    },
    {
      id: "11",
      question: "マルティニーク",
      answer: "1",
      explain: "カリブ海に位置するフランスの海外県である",
      image: "./img/Martinique.png",
    },
    {
      id: "12",
      question: "",
      answer: "1",
      explain: "フランス領ギアナ。南アメリカ北東部に位置するフランスの海外県である",
      image: "./img/French_Guiana.png",
    },
    {
      id: "13",
      question: "レユニオン",
      answer: "1",
      explain: "インド洋に位置するフランスの海外県である",
      image: "./img/Reunion.png",
    },
    {
      id: "14",
      question: "マヨット",
      answer: "1",
      explain: "モザンビーク海峡に位置するフランスの海外県である",
      image: "./img/Mayotte.png",
    },
    {
      id: "15",
      question: "",
      answer: "1",
      explain: "フランス領ポリネシア。フランスの海外準県である。タヒチ島が有名",
      image: "./img/French_Polynesia.png",
    },
    {
      id: "16",
      question: "サンピエール島・ミクロン島",
      answer: "1",
      explain: "北アメリカにある群島。フランスの海外準県である",
      image: "./img/Saint_Pierre_and_Miquelon.png",
    },
    {
      id: "17",
      question: "ウォリス・フツナ",
      answer: "1",
      explain: "南太平洋に位置するフランスの海外準県である",
      image: "./img/Wallis_and_Futuna.png",
    },
    {
      id: "88",
      question: "サン・マルタン",
      answer: "1",
      explain: "カリブ海に位置するフランスの海外準県である",
      image: "./img/Saint_Martin.png",
    },
    {
      id: "18",
      question: "サン・バルテルミー島",
      answer: "1",
      explain: "カリブ海に位置するフランスの海外準県である",
      image: "./img/Saint_Barthelemy.png",
    },
    {
      id: "19",
      question: "ニューカレドニア",
      answer: "1",
      explain: "フランスの海外領土(特別共同体)である",
      image: "./img/New_Caledonia.png",
    },
    {
      id: "20",
      question: "",
      answer: "1",
      explain: "フランス領南方・南極地域。インド洋南部に位置するフランスの海外領土である",
      image: "./img/French_Southern_and_Antarctic_Lands.png",
    },
    {
      id: "21",
      question: "クリッパートン島",
      answer: "1",
      explain: "太平洋のメキシコ沖に位置する、フランス領の絶海の孤島。無人島",
      image: "./img/Clipperton_Island.png",
    },
    {
      id: "22",
      question: "ジャージー",
      answer: "2",
      explain: "コタンタン半島(ノルマンディー半島)沖に位置する、イギリス王室属領",
      image: "./img/Jersey.png",
    },
    {
      id: "23",
      question: "ガラパゴス諸島",
      answer: "2",
      explain: "東太平洋上の赤道下にあるエクアドル領の諸島",
      image: "./img/Galapagos_Islands.png",
    },
    {
      id: "24",
      question: "イースター島",
      answer: "2",
      explain: "太平洋に位置するチリ領の島。モアイ像で有名",
      image: "./img/Easter_Island.png",
    },
    {
      id: "25",
      question: "アゾレス諸島",
      answer: "2",
      explain: "大西洋に位置するポルトガル領の群島",
      image: "./img/Azores.png",
    },
    {
      id: "26",
      question: "",
      answer: "2",
      explain: "アメリカ領ヴァージン諸島。カリブ海に位置するアメリカ合衆国の保護領",
      image: "./img/United_States_Virgin_Islands.png",
    },
    {
      id: "27",
      question: "キュラソー",
      answer: "2",
      explain: "カリブ海に位置するオランダ王国の構成国",
      image: "./img/Curacao.png",
    },
    {
      id: "28",
      question: "シント・マールテン",
      answer: "2",
      explain: "カリブ海に位置するオランダ王国の構成国",
      image: "./img/Sint_Maarten.png",
    },
    {
      id: "29",
      question: "スヴァールバル諸島",
      answer: "2",
      explain: "北極圏にあるノルウェー領の群島",
      image: "./img/Svalbard.png",
    },
    {
      id: "30",
      question: "コルス島(コルシカ島)",
      answer: "1",
      explain: "地中海、イタリア半島の西に位置するフランス領の島",
      image: "./img/Corse.png",
    },
    {
      id: "31",
      question: "サルデーニャ島",
      answer: "2",
      explain: "地中海に位置するイタリア領の島",
      image: "./img/Sardegna.png",
    },
    {
      id: "32",
      question: "バレアレス諸島",
      answer: "2",
      explain: "西地中海に位置するスペインの自治州",
      image: "./img/Baleares.png",
    },
    {
      id: "33",
      question: "",
      answer: "1",
      explain: "フランス国旗",
      image: "./img/Flag_of_France.png",
    },
    {
      id: "34",
      question: "",
      answer: "2",
      explain: "オランダ国旗",
      image: "./img/Flag_of_the_Netherlands.png",
    },
    {
      id: "35",
      question: "",
      answer: "2",
      explain: "ルクセンブルク国旗",
      image: "./img/Flag_of_Luxembourg.png",
    },
    {
      id: "36",
      question: "",
      answer: "2",
      explain: "イタリア国旗",
      image: "./img/Flag_of_Italy.png",
    },
    {
      id: "37",
      question: "",
      answer: "1",
      explain: "中近世のフランス王家の紋章。フルール・ド・リスと呼ばれるアヤメの花の意匠は、フランス王家の象徴的意味合いがある",
      image: "./img/Bannière_de_France.png",
    },
    {
      id: "38",
      question: "マルセイユ",
      answer: "1",
      explain: "マルセイユ(Marseille)は地中海沿いに位置する、フランス最大の港湾都市",
      image: "",
    },
    {
      id: "39",
      question: "リヨン",
      answer: "1",
      explain: "リヨン(Lyon)はフランスの南東部に位置する、フランス第2の都市。古くから金融業が盛ん",
      image: "",
    },
    {
      id: "40",
      question: "トゥールーズ",
      answer: "1",
      explain: "トゥールーズ(Toulouse)はフランスの南西部に位置する都市。航空宇宙産業が盛んで、エアバスの本社がある",
      image: "",
    },
    {
      id: "41",
      question: "ニース",
      answer: "1",
      explain: "ニース(Nice)はフランス南東部の地中海沿いに位置する観光都市。文化的にイタリアに近い特徴がある",
      image: "",
    },
    {
      id: "42",
      question: "ストラスブール",
      answer: "1",
      explain: "ストラスブール(Strasbourg)はフランス北東部、ライン川左岸に位置する都市。歴史的にドイツと領有権を争ってきた土地",
      image: "",
    },
    {
      id: "43",
      question: "メートル原器",
      answer: "1",
      explain: "1879年にフランスで作られた。現在もフランスのセーヴルに保存されている",
      image: "./img/Platinum-Iridium_meter_bar.jpg",
    },
    {
      id: "44",
      question: "ボルドー",
      answer: "1",
      explain: "ボルドー(Bordeaux)はフランス南西部の中心的な都市。ボルドーワインの産地として世界的に有名",
      image: "",
    },
    {
      id: "45",
      question: "リール",
      answer: "1",
      explain: "リール(Lille)はフランス北部の、ベルギーと国境を接する都市。歴史的にフランドル伯の領地だった",
      image: "",
    },
    {
      id: "46",
      question: "ランス",
      answer: "1",
      explain: "ランス(Reims)はフランス北部に位置する都市。かつてフランス歴代国王の戴冠式が行われたノートルダム大聖堂がある",
      image: "",
    },
    {
      id: "47",
      question: "ル・アーヴル",
      answer: "1",
      explain: "ル・アーヴル(Le Havre)はフランス北西部のイギリス海峡沿いに位置する港湾都市",
      image: "",
    },
    {
      id: "48",
      question: "トゥーロン",
      answer: "1",
      explain: "トゥーロン(Toulon)はフランス南東部の地中海沿いに位置する都市。フランス最大の軍港がある",
      image: "",
    },
    {
      id: "49",
      question: "ブレスト",
      answer: "1",
      explain: "ブレスト(Brest)はフランス西部、ブルターニュ半島西端に位置する港湾都市。フランス海軍第2の拠点",
      image: "",
    },
    {
      id: "50",
      question: "ブリストル",
      answer: "2",
      explain: "ブリストル(Bristol)は、イギリス西部の港湾都市。製造業が盛ん",
      image: "",
    },
    {
      id: "51",
      question: "エディンバラ",
      answer: "2",
      explain: "エディンバラ(Edinburgh)はイギリス北部に位置する、スコットランドの首都",
      image: "",
    },
    {
      id: "52",
      question: "ドレスデン",
      answer: "2",
      explain: "ドレスデン(Dresden)はドイツ東部、エルベ川沿いの都市。WW2での爆撃で大部分が破壊されたが、工業都市として再生した",
      image: "",
    },
    {
      id: "53",
      question: "フィレンツェ",
      answer: "2",
      explain: "フィレンツェ(Firenze)はイタリア中部にある都市。メディチ家による統治時代、ルネサンスの文化的な中心地となった",
      image: "",
    },
    {
      id: "54",
      question: "バーリ",
      answer: "2",
      explain: "バーリ(Bari)はイタリア南部、アドリア海沿岸に位置する都市",
      image: "",
    },
    {
      id: "55",
      question: "リーズ",
      answer: "2",
      explain: "リーズ(Leeds)はイギリス中部、イングランド北部のヨークシャー地方に位置する都市。羊毛工業が盛ん",
      image: "",
    },
    {
      id: "56",
      question: "アンダルシア",
      answer: "2",
      explain: "アンダルシア(Andalucía)はスペイン南部の地方・自治州。歴史的に長くイスラム王朝に支配されていて、文化的影響を残している",
      image: "",
    },
    {
      id: "57",
      question: "グダニスク",
      answer: "2",
      explain: "グダニスク(Gdańsk)はポーランド北部、バルト海沿いに位置する港湾都市。ドイツ語名のダンツィヒ(Danzig)でも知られる",
      image: "",
    },
    {
      id: "58",
      question: "ローザンヌ",
      answer: "2",
      explain: "ローザンヌ(Lausanne)はスイス西部に位置する都市。フランス語圏に属する",
      image: "",
    },
    {
      id: "59",
      question: "ブルゴーニュ",
      answer: "1",
      explain: "ブルゴーニュ(Bourgogne)はフランス中東部の地方。温暖な気候と平坦な土地で、古くから農耕が盛ん",
      image: "",
    },
    {
      id: "60",
      question: "アキテーヌ",
      answer: "1",
      explain: "アキテーヌ(Aquitaine)は、フランスの地方。農業が盛んで、特にブドウの生産量が多い",
      image: "",
    },
    {
      id: "61",
      question: "アルデンヌ",
      answer: "1",
      explain: "ベルギー南東部、フランスにまたがる地域名、およびフランスの県名。WW2ではドイツ軍がこの地域を通ってフランスに侵攻した",
      image: "",
    },
    {
      id: "62",
      question: "セーヌ川",
      answer: "1",
      explain: "セーヌ川(Seine)はフランス北部を流れる河川。パリの歴史に深くかかわっており、パリのセーヌ河岸は世界文化遺産に登録されている",
      image: "",
    },
    {
      id: "63",
      question: "ロワール川",
      answer: "1",
      explain: "ロワール川(Loire)はフランス中央部を流れ大西洋に注ぐ、フランス最長の川。流域面積はフランスの面積の5分の1を占める",
      image: "",
    },
    {
      id: "64",
      question: "ローヌ川",
      answer: "1",
      explain: "ローヌ川(Rhône)はスイスのローヌ氷河に発し、フランス南東部を流れ地中海に注ぐ川。フランス4大河川のひとつ",
      image: "",
    },
    {
      id: "65",
      question: "ガロンヌ川",
      answer: "1",
      explain: "ガロンヌ川(Garonne)はピレネー山脈に発し、フランス南西部を流れ大西洋に注ぐ川。フランス4大河川のひとつ",
      image: "",
    },
    {
      id: "66",
      question: "ドナウ川",
      answer: "2",
      explain: "ドナウ川(Donau)はドイツ南部に発し、中欧・東欧10ヶ国以上を通って黒海に注ぐ大河",
      image: "",
    },
    {
      id: "67",
      question: "ヴォルガ川",
      answer: "2",
      explain: "ヴォルガ川(Во́лга)はロシア西部を流れカスピ海に注ぐ、ヨーロッパ最長の川",
      image: "",
    },
    {
      id: "68",
      question: "ボジョレーワイン",
      answer: "1",
      explain: "フランス中東部のボジョレー地方で生産されるワイン。その年の新酒はボジョレー・ヌーヴォーと呼ばれる",
      image: "",
    },
    {
      id: "69",
      question: "キャンティ(ワイン)",
      answer: "2",
      explain: "イタリア・トスカーナ州のキャンティ地方で生産されるワイン",
      image: "",
    },
    {
      id: "70",
      question: "Ce texte est-il en français?",
      answer: "1",
      explain: "フランス語で「この文章はフランス語ですか？」",
      image: "",
    },
    {
      id: "71",
      question: "Questo testo è in francese?",
      answer: "2",
      explain: "イタリア語で「この文章はフランス語ですか？」",
      image: "",
    },
    {
      id: "a19",
      question: "¿Este texto está en francés?",
      answer: "2",
      explain: "スペイン語で「この文章はフランス語ですか？」",
      image: "",
    },
    {
      id: "72",
      question: "",
      answer: "1",
      explain: "アクサはフランスの保険・金融グループ。売上高は1000億ユーロを超える世界的企業である",
      image: "./img/AXA_Logo.png",
    },
    {
      id: "73",
      question: "",
      answer: "1",
      explain: "ルノーは1898年に設立されたフランスの自動車メーカー。大戦時には戦車なども生産した歴史的企業",
      image: "./img/Renault.png",
    },
    {
      id: "74",
      question: "",
      answer: "1",
      explain: "Ubisoftはフランスに本社を置くゲーム開発・販売会社。約2万人の従業員を抱える世界有数のパブリッシャー",
      image: "./img/Ubisoft.png",
    },
    {
      id: "75",
      question: "ビザンツ帝国",
      answer: "2",
      explain: "東ローマ帝国。395年～1453年に存在した帝国。コンスタンティノープル(旧独語名ビザンツ)に首都を置いたことから史学者からそう呼ばれた",
      image: "",
    },
    {
      id: "76",
      question: "カノッサの屈辱",
      answer: "2",
      explain: "1077年1月25日から3日間、ローマ教皇グレゴリウス7世と聖職叙任権をめぐって対立し破門されたローマ王ハインリヒ4世が、イタリア北部のカノッサ城で許しを請うた事件。教皇権の優位性を示した",
      image: "",
    },
    {
      id: "77",
      question: "ワールシュタットの戦い",
      answer: "2",
      explain: "1241年4月9日にポーランド西部で、モンゴル帝国のヨーロッパ遠征軍がポーランド・ドイツ連合軍を破った戦い。レグニツァの戦いとも",
      image: "",
    },
    {
      id: "78",
      question: "アヴィニョン捕囚",
      answer: "1",
      explain: "1309年～1377年、ローマ教皇の座がローマからフランス・アヴィニョンに移されていた事を指す。教皇権に対する王権の優位を確立した",
      image: "",
    },
    {
      id: "79",
      question: "ポワティエの戦い",
      answer: "1",
      explain: "百年戦争中の1356年9月19日、フランス中西部のポワティエ近郊にて、エドワード黒太子率いるイングランド軍がフランス軍を破った戦い。フランス王ジャン2世を捕虜にする決定的勝利を得た",
      image: "",
    },
    {
      id: "80",
      question: "ナントの勅令",
      answer: "1",
      explain: "1598年4月13日にフランス王アンリ4世がナントで発布した勅令。プロテスタント信徒に対してカトリック信徒とほぼ同じ権利を与えた",
      image: "",
    },
    {
      id: "81",
      question: "三十年戦争",
      answer: "1",
      explain: "1618年～1648年に起きた諸戦争の総称。宗教対立に端を発し、フランスのブルボン家とオーストリア・スペインのハプスブルク家の対立を軸に国際的戦争になった。最終的にフランスに優位な和平となった",
      image: "",
    },
    {
      id: "82",
      question: "清教徒革命(ピューリタン革命)",
      answer: "2",
      explain: "1642年～1649年にイングランド・スコットランド・アイルランドで起きた内戦・革命。国王派と改革派プロテスタント(清教徒)などが争い、最終的に絶対王政が打倒された",
      image: "",
    },
    {
      id: "83",
      question: "大洪水時代",
      answer: "2",
      explain: "1654年～1660年頃にフメリニツキーの乱、ロシア・ポーランド戦争、北方戦争など戦乱が続き、強国であったポーランド・リトアニア共和国を大きく弱体化させた時代",
      image: "",
    },
    {
      id: "84",
      question: "1789年7月14日",
      answer: "1",
      explain: "パリ市民がバスティーユ牢獄を襲撃した日。ここからフランス革命が始まっていった。毎年7月14日はフランス共和国の建国記念日として祝われている",
      image: "",
    },
    {
      id: "85",
      question: "アウステルリッツの戦い",
      answer: "1",
      explain: "1805年12月2日に現チェコ領の町アウステルリッツ郊外で、ナポレオン率いるフランス軍(大陸軍)がロシア・オーストリア連合軍を破った戦い。第三次対仏大同盟を崩壊させた",
      image: "",
    },
    {
      id: "86",
      question: "1917年10月25日",
      answer: "2",
      explain: "ロシア革命の10月革命が起きた日(旧暦)。ソヴィエトへの権力移行が宣言された。ソ連時代には新暦での毎年11月7日に、赤の広場で記念パレードが開催された",
      image: "",
    },
    {
      id: "87",
      question: "2024年夏季オリンピック",
      answer: "1",
      explain: "フランス・パリでの開催",
      image: "",
    },
    {
      id: "89",
      question: "2028年夏季オリンピック",
      answer: "2",
      explain: "アメリカ合衆国・ロサンゼルスで開催される予定",
      image: "",
    },
    {
      id: "90",
      question: "2030年冬季オリンピック",
      answer: "1",
      explain: "フランス・アルプス地方での開催が内定している",
      image: "",
    },
    {
      id: "91",
      question: "",
      answer: "1",
      explain: "エトワール凱旋門。パリのシャルル・ド・ゴール広場にある。ナポレオンが戦勝記念に建設した",
      image: "./img/Paris_Arc_de_Triomphe.jpg",
    },
    {
      id: "92",
      question: "",
      answer: "1",
      explain: "ルーヴル美術館。パリ中心部にあり、世界最大級かつ世界で最も入場者数の多い美術館である",
      image: "./img/Louvre_Museum.jpg",
    },
    {
      id: "93",
      question: "",
      answer: "1",
      explain: "モン・サン＝ミシェル。フランスのノルマンディー地方の小島にある修道院",
      image: "./img/mont-saint-michel.jpg",
    },
    {
      id: "94",
      question: "",
      answer: "1",
      explain: "ヌフ＝ブリザック。フランス東部のアルザス地方にある城郭都市。「ヴォーバンの防衛施設群」の1つとして世界遺産に登録されている",
      image: "./img/NeufBrisach.jpg",
    },
    {
      id: "95",
      question: "",
      answer: "2",
      explain: "ブランデンブルク門。ドイツ・ベルリンのシンボル的存在",
      image: "./img/brandenburg-gate.jpg",
    },
    {
      id: "96",
      question: "",
      answer: "2",
      explain: "ケルン大聖堂。ドイツのケルンにあるゴシック様式の大聖堂",
      image: "./img/Kölner_Dom.jpg",
    },
    {
      id: "97",
      question: "",
      answer: "2",
      explain: "シェーンブルン宮殿。オーストリア・ウィーンにある、ハプスブルク王家が夏の離宮として建設した宮殿",
      image: "./img/schonbrunn.jpg",
    },
    {
      id: "98",
      question: "シャンティイ競馬場",
      answer: "1",
      explain: "パリ近郊・シャンティイ(Chantilly)にある競馬場",
      image: "",
    },
    {
      id: "99",
      question: "シャティン競馬場",
      answer: "2",
      explain: "沙田競馬場は香港の沙田(Sha Tin)にある競馬場",
      image: "",
    },
    {
      id: "a02",
      question: "",
      answer: "2",
      explain: "チェコ国旗",
      image: "./img/Flag_of_the_Czech_Republic.png",
    },
    {
      id: "a03",
      question: "ナント",
      answer: "1",
      explain: "ナント(Nantes)はフランス西部、ロワール川河畔に位置する都市",
      image: "",
    },
    {
      id: "a04",
      question: "バレンシア",
      answer: "2",
      explain: "バレンシア(València)はスペイン東部、地中海沿いに位置する港湾都市",
      image: "",
    },
    {
      id: "a05",
      question: "レンヌ",
      answer: "1",
      explain: "レンヌ(Rennes)はフランス西部、ブルターニュ地方の中心都市",
      image: "",
    },
    {
      id: "a06",
      question: "モンペリエ",
      answer: "1",
      explain: "モンペリエ(Montpellier)はフランス南部、地中海沿いに位置する都市",
      image: "",
    },
    {
      id: "a07",
      question: "ケルン",
      answer: "2",
      explain: "ケルン(Köln)はドイツ西部のライン川沿いに位置する都市。近隣都市とライン＝ルール大都市圏を形成している",
      image: "",
    },
    {
      id: "a08",
      question: "クロワッサン",
      answer: "1",
      explain: "フランス発祥の、バターをパン生地に折りこんで焼き上げるパン。フランス語で「三日月」を意味する",
      image: "./img/Croissant.jpg",
    },
    {
      id: "a09",
      question: "レ・ミゼラブル",
      answer: "1",
      explain: "1862年に出版されたフランスの歴史小説。映画やミュージカルとしても人気を博している",
      image: "./img/les_misérables.jpg",
    },
    {
      id: "a10",
      question: "",
      answer: "1",
      explain: "エマニュエル・マクロン。フランスの現大統領",
      image: "./img/Emmanuel_Macron.jpg",
    },
    {
      id: "a11",
      question: "",
      answer: "2",
      explain: "オラフ・ショルツ。ドイツの現首相",
      image: "./img/Olaf_Scholz.jpg",
    },
    {
      id: "a12",
      question: "",
      answer: "2",
      explain: "キア・スターマー。イギリスの現首相",
      image: "./img/Keir_Starmer.jpg",
    },
    {
      id: "a13",
      question: "キッシュ",
      answer: "1",
      explain: "フランス、アルザス＝ロレーヌ地方の郷土料理。パイ生地・タルト生地で作った器の中に卵、生クリーム、具材を入れて焼く",
      image: "./img/quiche.jpg",
    },
    {
      id: "a14",
      question: "",
      answer: "1",
      explain: "アレクサンドル3世橋はフランス、パリのセーヌ川に架かる橋。1900年のパリ万国博覧会に合わせて建設された",
      image: "./img/Pont_Alexandre_III.jpg",
    },
    {
      id: "a15",
      question: "",
      answer: "2",
      explain: "タワーブリッジは、イギリスのロンドン市内を流れるテムズ川に架かる跳開橋。1894年に完成した",
      image: "./img/Tower_Bridge.jpg",
    },
    {
      id: "a16",
      question: "",
      answer: "1",
      explain: "フランスの職人、ルイ・ヴィトンが創始したファッションブランド。グループ企業全体の時価総額はフランス最大",
      image: "./img/Louis_Vuitton_logo_and_wordmark.png",
    },
    {
      id: "a17",
      question: "",
      answer: "2",
      explain: "アフラックはアメリカ・ジョージア州で1955年に設立された保険会社。日本と米国で事業を展開している",
      image: "./img/Aflac.jpg",
    },
    {
      id: "a18",
      question: "",
      answer: "2",
      explain: "H&Mはスウェーデンで創立されたファッションブランド。世界各国に4000以上の店舗を持つ",
      image: "./img/H&M-Logo.png",
    },
    {
      id: "a20",
      question: "",
      answer: "1",
      explain: "エアバスはフランスとオランダに本社を置く航空宇宙企業。旅客機市場で大きなシェアを占める",
      image: "./img/Airbus_Logo.png",
    },
    {
      id: "a21",
      question: "",
      answer: "2",
      explain: "ボーイングはアメリカ・イリノイ州に本社を置く世界最大の航空宇宙企業。旅客機や軍用機などを幅広く手掛ける",
      image: "./img/Boeing_logo.png",
    },
    {
      id: "--",
      question: "",
      answer: "",
      explain: "",
      image: "./img/",
    },
  ];