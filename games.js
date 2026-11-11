const GAMES = [
  {
    "id": "parolla",
    "name": "Parolla",
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
    "categories": [
      "history",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://timeguessr.com/",
    "image": "images/timeguessr.png",
    "color": "#A4133C",
    "symbol": "TI"
  },
  {
    "id": "framed",
    "name": "Framed",
    "categories": [
      "film",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://framed.wtf/",
    "image": "images/framed.png",
    "color": "#A4133C",
    "symbol": "FR"
  },
  {
    "id": "bandle",
    "name": "Bandle",
    "categories": [
      "music",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://bandle.app/",
    "image": "images/bandle.png",
    "color": "#A4133C",
    "symbol": "BA"
  },
  {
    "id": "guess-the-game",
    "name": "Guess the Game",
    "categories": [
      "gaming",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://guessthe.game/",
    "image": "images/gtgame.png",
    "color": "#A4133C",
    "symbol": "GU"
  },
  {
    "id": "guess-the-audio",
    "name": "Guess the Audio",
    "categories": [
      "music",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://guesstheaudio.com/",
    "image": "images/gtaudio.png",
    "color": "#A4133C",
    "symbol": "GU"
  },
  {
    "id": "guess-the-movie-name",
    "name": "Guess the Movie Name",
    "categories": [
      "film",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://guessthemovie.name/",
    "image": "images/gtmovie.png",
    "color": "#A4133C",
    "symbol": "GU"
  },
  {
    "id": "guess-the-logo",
    "name": "Guess the Logo",
    "categories": [
      "brands",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://guessthelogo.wtf/",
    "image": "images/gtlogo.png",
    "color": "#A4133C",
    "symbol": "GU"
  },
  {
    "id": "guess-the-house",
    "name": "Guess the House",
    "categories": [
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://guessthe.house/",
    "image": "images/gthouse.png",
    "color": "#A4133C",
    "symbol": "GU"
  },
  {
    "id": "chronophoto",
    "name": "Chronophoto",
    "categories": [
      "history",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://www.chronophoto.app/",
    "image": "images/chronophoto.png",
    "color": "#A4133C",
    "symbol": "CH"
  },
  {
    "id": "originle",
    "name": "Originle",
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
    "categories": [
      "ethnicity",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://hbd.gg/",
    "image": "images/ethno.jpg",
    "color": "#A4133C",
    "symbol": "ET"
  },
  {
    "id": "wenware",
    "name": "Wenware",
    "categories": [
      "history",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://wen-ware.com/",
    "image": "images/wenware.png",
    "color": "#A4133C",
    "symbol": "WE"
  },
  {
    "id": "farflung",
    "name": "Farflung",
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
    "categories": [
      "music",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://songspot.net/",
    "image": "images/songspot.jfif",
    "color": "#A4133C",
    "symbol": "SO"
  },
  {
    "id": "loldle",
    "name": "LoLdle",
    "categories": [
      "gaming",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://loldle.net/",
    "image": "images/loldle.webp",
    "color": "#A4133C",
    "symbol": "LO"
  },
  {
    "id": "pok-dle",
    "name": "Pokédle",
    "categories": [
      "anime",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://pokedle.net/",
    "image": "images/pokedle.png",
    "color": "#A4133C",
    "symbol": "PO"
  },
  {
    "id": "narutodle",
    "name": "Narutodle",
    "categories": [
      "anime",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://narutodle.net/",
    "image": "images/narutodle.png",
    "color": "#A4133C",
    "symbol": "NA"
  },
  {
    "id": "dialed",
    "name": "Dialed",
    "categories": [
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://dialed.gg/",
    "image": "images/dialed.png",
    "color": "#A4133C",
    "symbol": "DI"
  },
  {
    "id": "anthropeum",
    "name": "Anthropeum",
    "categories": [
      "history",
      "general",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://anthropeum.com/",
    "image": "images/anthropeum.jpg",
    "color": "#A4133C",
    "symbol": "AN"
  },
  {
    "id": "letterboxdle",
    "name": "Letterboxdle",
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
    "categories": [
      "gaming",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://bonedle.rito.lol/",
    "image": "images/bonedle.webp",
    "color": "#A4133C",
    "symbol": "BO"
  },
  {
    "id": "whentaken",
    "name": "WhenTaken",
    "categories": [
      "history",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://whentaken.com/",
    "image": "images/whentaken.jfif",
    "color": "#A4133C",
    "symbol": "WH"
  },
  {
    "id": "foodguessr",
    "name": "FoodGuessr",
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
    "categories": [
      "gaming"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://www.gamedle.wtf/?lang=tr",
    "image": "images/gamedle.webp",
    "color": "#A4133C",
    "symbol": "GA"
  },
  {
    "id": "scrandle",
    "name": "Scrandle",
    "categories": [
      "food",
      "guess"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://scrandle.com/",
    "image": "images/scrandle.jpg",
    "color": "#A4133C",
    "symbol": "SC"
  },
  {
    "id": "enclosehorse",
    "name": "Enclose Horse",
    "categories": [
      "strategy"
    ],
    "languages": [
      "gl"
    ],
    "url": "https://enclose.horse/",
    "image": "images/enclosehorse.png",
    "color": "#A4133C",
    "symbol": "EH"
  }
];
