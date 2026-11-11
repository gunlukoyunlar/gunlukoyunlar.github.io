/* OYUN EKLEME: Aşağıdaki GAMES listesine yeni nesne ekleyin.
   url: bağlantı, image: 16:9 resim yolu, languages: ['en'] veya ['tr'].
   Boş url olan kartlar bilerek tıklanamaz; bağlantıyı siz dolduracaksınız. */
const GAMES = [
  {
    "id": "parolla",
    "name": "Parolla",
    "description": {
      "tr": "Kelime bulmacası."
    },
    "categories": [
      "word"
    ],
    "languages": [
      "tr"
    ],
    "url": "https://www.parolla.app/",
    "image": "images/parolla.png",
    "color": "#A4133C",
    "symbol": "PA"
  },
  {
    "id": "krillion",
    "name": "Krillion",
    "description": {
      "tr": "Günlük mantık bulmacası."
    },
    "categories": [
      "general"
    ],
    "languages": [
      "en"
    ],
    "url": "https://krillion.io/",
    "image": "images/krillion.png",
    "color": "#A4133C",
    "symbol": "KR"
  },
  {
    "id": "worldle",
    "name": "Worldle",
    "description": {
      "tr": "Ülkeyi siluetinden tahmin et."
    },
    "categories": [
      "geography",
      "country"
    ],
    "languages": [
      "en"
    ],
    "url": "https://worldle.teuteuf.fr/",
    "image": "images/worldle.jpg",
    "color": "#A4133C",
    "symbol": "WO"
  },
  {
    "id": "globle",
    "name": "Globle",
    "description": {
      "tr": "Gizli ülkeyi bul."
    },
    "categories": [
      "geography",
      "country"
    ],
    "languages": [
      "en"
    ],
    "url": "https://globle-game.com/game",
    "image": "images/globle.png",
    "color": "#A4133C",
    "symbol": "GL"
  },
  {
    "id": "travle",
    "name": "Travle",
    "description": {
      "tr": "Ülkeler arasında rota kur."
    },
    "categories": [
      "geography",
      "country"
    ],
    "languages": [
      "tr"
    ],
    "url": "https://travle.earth/",
    "image": "images/travle.png",
    "color": "#A4133C",
    "symbol": "TR"
  },
  {
    "id": "flagle",
    "name": "Flagle",
    "description": {
      "tr": "Bayraktan ülkeyi tahmin et."
    },
    "categories": [
      "country"
    ],
    "languages": [
      "en"
    ],
    "url": "https://www.flagle.io/",
    "image": "images/flagle.png",
    "color": "#A4133C",
    "symbol": "FL"
  },
  {
    "id": "wonderhop",
    "name": "Wonderhop",
    "description": {
      "tr": "Görseller ve ipuçlarıyla yer keşfet."
    },
    "categories": [
      "general"
    ],
    "languages": [
      "tr"
    ],
    "url": "https://wonderhop.io/tr/",
    "image": "images/wonderhop.png",
    "color": "#A4133C",
    "symbol": "WO"
  },
  {
    "id": "timeguessr",
    "name": "Timeguessr",
    "description": {
      "tr": "Fotoğrafın yerini ve tarihini tahmin et."
    },
    "categories": [
      "history",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://timeguessr.com/",
    "image": "images/timeguessr.png",
    "color": "#A4133C",
    "symbol": "TI"
  },
  {
    "id": "framed",
    "name": "Framed",
    "description": {
      "tr": "Film karesinden filmi bul."
    },
    "categories": [
      "film",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://framed.wtf/",
    "image": "images/framed.png",
    "color": "#A4133C",
    "symbol": "FR"
  },
  {
    "id": "bandle",
    "name": "Bandle",
    "description": {
      "tr": "Şarkıyı ses ipuçlarından tanı."
    },
    "categories": [
      "music",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://bandle.app/",
    "image": "images/bandle.png",
    "color": "#A4133C",
    "symbol": "BA"
  },
  {
    "id": "guess-the-game",
    "name": "Guess the Game",
    "description": {
      "tr": "Ekran görüntüsünden oyunu bul."
    },
    "categories": [
      "gaming",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://guessthe.game/",
    "image": "images/gtgame.png",
    "color": "#A4133C",
    "symbol": "GU"
  },
  {
    "id": "guess-the-audio",
    "name": "Guess the Audio",
    "description": {
      "tr": "Ses kaydından tahmin yap."
    },
    "categories": [
      "music",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://guesstheaudio.com/",
    "image": "images/gtaudio.png",
    "color": "#A4133C",
    "symbol": "GU"
  },
  {
    "id": "guess-the-movie-name",
    "name": "Guess the Movie Name",
    "description": {
      "tr": "Film adını tahmin et."
    },
    "categories": [
      "film",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://guessthemovie.name/",
    "image": "images/gtmovie.png",
    "color": "#A4133C",
    "symbol": "GU"
  },
  {
    "id": "guess-the-logo",
    "name": "Guess the Logo",
    "description": {
      "tr": "Logodan markayı tanı."
    },
    "categories": [
      "brands",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://guessthelogo.wtf/",
    "image": "images/gtlogo.png",
    "color": "#A4133C",
    "symbol": "GU"
  },
  {
    "id": "guess-the-house",
    "name": "Guess the House",
    "description": {
      "tr": "Ev görsellerinden tahmin yap."
    },
    "categories": [
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://guessthe.house/",
    "image": "images/gthouse.png",
    "color": "#A4133C",
    "symbol": "GU"
  },
  {
    "id": "chronophoto",
    "name": "Chronophoto",
    "description": {
      "tr": "Fotoğrafın yılını tahmin et."
    },
    "categories": [
      "history",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://www.chronophoto.app/",
    "image": "images/chronophoto.png",
    "color": "#A4133C",
    "symbol": "CH"
  },
  {
    "id": "originle",
    "name": "Originle",
    "description": {
      "tr": "Kökenlerle ilgili tahmin oyunu."
    },
    "categories": [
      "ethnicity",
      "guess"
    ],
    "languages": [
      "en"
    ],
    "url": "https://originle.io/",
    "image": "images/originle.png",
    "color": "#A4133C",
    "symbol": "OR"
  },
  {
    "id": "ethnoguessr",
    "name": "Ethnoguessr",
    "description": {
      "tr": "Kültür ve coğrafya tahmini."
    },
    "categories": [
      "ethnicity",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://hbd.gg/",
    "image": "images/ethno.jpg",
    "color": "#A4133C",
    "symbol": "ET"
  },
  {
    "id": "wenware",
    "name": "Wenware",
    "description": {
      "tr": "Zaman ve yer tahmini."
    },
    "categories": [
      "history",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://wen-ware.com/",
    "image": "images/wenware.png",
    "color": "#A4133C",
    "symbol": "WE"
  },
  {
    "id": "farflung",
    "name": "Farflung",
    "description": {
      "tr": "Coğrafya tahmin oyunu."
    },
    "categories": [
      "country",
      "general"
    ],
    "languages": [
      "en"
    ],
    "url": "https://farflung.game/",
    "image": "images/farflung.png",
    "color": "#A4133C",
    "symbol": "FA"
  },
  {
    "id": "songspot",
    "name": "Songspot",
    "description": {
      "tr": "Müzik tahmin oyunu."
    },
    "categories": [
      "music",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://songspot.net/",
    "image": "images/songspot.jfif",
    "color": "#A4133C",
    "symbol": "SO"
  },
  {
    "id": "loldle",
    "name": "LoLdle",
    "description": {
      "tr": "League of Legends karakterlerini tahmin et."
    },
    "categories": [
      "gaming",
      "guess"
    ],
    "languages": [
      "tr"
    ],
    "url": "https://loldle.net/",
    "image": "images/loldle.webp",
    "color": "#A4133C",
    "symbol": "LO"
  },
  {
    "id": "pok-dle",
    "name": "Pokédle",
    "description": {
      "tr": "Pokémon tahmin oyunu."
    },
    "categories": [
      "anime",
      "guess"
    ],
    "languages": [
      "tr"
    ],
    "url": "https://pokedle.net/",
    "image": "images/pokedle.png",
    "color": "#A4133C",
    "symbol": "PO"
  },
  {
    "id": "narutodle",
    "name": "Narutodle",
    "description": {
      "tr": "Naruto karakterlerini tahmin et."
    },
    "categories": [
      "anime",
      "guess"
    ],
    "languages": [
      "tr"
    ],
    "url": "https://narutodle.net/",
    "image": "images/narutodle.png",
    "color": "#A4133C",
    "symbol": "NA"
  },
  {
    "id": "dialed",
    "name": "Dialed",
    "description": {
      "tr": "Sayı ve mantık temalı oyun."
    },
    "categories": [
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://dialed.gg/",
    "image": "images/dialed.png",
    "color": "#A4133C",
    "symbol": "DI"
  },
  {
    "id": "anthropeum",
    "name": "Anthropeum",
    "description": {
      "tr": "İnsanlık tarihi ve kültür temalı tahmin."
    },
    "categories": [
      "history",
      "general",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://anthropeum.com/",
    "image": "images/anthropeum.jpg",
    "color": "#A4133C",
    "symbol": "AN"
  },
  {
    "id": "letterboxdle",
    "name": "Letterboxdle",
    "description": {
      "tr": "Film bilgisi tahmin oyunu."
    },
    "categories": [
      "film",
      "guess"
    ],
    "languages": [
      "en"
    ],
    "url": "https://letterboxdle.net/",
    "image": "images/letterboxdle.png",
    "color": "#A4133C",
    "symbol": "LE"
  },
  {
    "id": "bonedle",
    "name": "Bonedle",
    "description": {
      "tr": "Kemik ve anatomi tahmin oyunu."
    },
    "categories": [
      "gaming",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://bonedle.rito.lol/",
    "image": "images/bonedle.webp",
    "color": "#A4133C",
    "symbol": "BO"
  },
  {
    "id": "whentaken",
    "name": "WhenTaken",
    "description": {
      "tr": "Fotoğrafın tarihini ve yerini bul."
    },
    "categories": [
      "history",
      "guess"
    ],
    "languages": [
      "en",
      "tr"
    ],
    "url": "https://whentaken.com/",
    "image": "images/whentaken.jfif",
    "color": "#A4133C",
    "symbol": "WH"
  },
  {
    "id": "foodguessr",
    "name": "FoodGuessr",
    "description": {
      "tr": "Yemekten ülkeyi veya mutfağı tahmin et."
    },
    "categories": [
      "food",
      "guess"
    ],
    "languages": [
      "en"
    ],
    "url": "https://www.foodguessr.com/",
    "image": "images/foodguessr.png",
    "color": "#A4133C",
    "symbol": "FO"
  },
  {
    "id": "gamedle",
    "name": "Gamedle",
    "description": {
      "tr": "Video oyunlarını ipuçlarından tahmin et."
    },
    "categories": [
      "gaming"
    ],
    "languages": [
      "tr"
    ],
    "url": "https://www.gamedle.wtf/?lang=tr",
    "image": "images/gamedle.webp",
    "color": "#A4133C",
    "symbol": "GA"
  }
];
