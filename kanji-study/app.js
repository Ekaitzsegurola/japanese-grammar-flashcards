// Kanji data
const kanjiData = {
  "title": "Guía de Estudio de Kanjis: Lecturas SHU, JU, SHO y JO",
  "description": "Colección completa de kanjis organizados por lecturas similares para estudio sistemático",
  "lists": {
    "SHU (しゅ)": {
      "kanjis": [
        {"kanji": "手", "onyomi": "シュ", "kunyomi": "て、た", "significado": "mano"},
        {"kanji": "首", "onyomi": "シュ", "kunyomi": "くび", "significado": "cuello"},
        {"kanji": "酒", "onyomi": "シュ", "kunyomi": "さけ、さか", "significado": "alcohol, sake"},
        {"kanji": "守", "onyomi": "シュ、ス", "kunyomi": "まもる、もり", "significado": "proteger, guardar"},
        {"kanji": "主", "onyomi": "シュ、ス", "kunyomi": "おも、ぬし", "significado": "principal, maestro, señor"},
        {"kanji": "取", "onyomi": "シュ", "kunyomi": "とる", "significado": "tomar"},
        {"kanji": "種", "onyomi": "シュ", "kunyomi": "たね", "significado": "semilla"},
        {"kanji": "朱", "onyomi": "シュ、ス", "kunyomi": "あか、あけ", "significado": "rojo brillante"},
        {"kanji": "株", "onyomi": "シュ", "kunyomi": "かぶ", "significado": "tocón, acciones"},
        {"kanji": "殊", "onyomi": "シュ", "kunyomi": "こと", "significado": "especial, entre otros"},
        {"kanji": "狩", "onyomi": "シュ", "kunyomi": "かる、かり", "significado": "caza"},
        {"kanji": "粛", "onyomi": "シュク", "kunyomi": "つつしむ", "significado": "solemne, austero"},
        {"kanji": "腫", "onyomi": "シュ、ショウ", "kunyomi": "はれる、はらす", "significado": "hinchazón"},
        {"kanji": "舟", "onyomi": "シュウ、シュ", "kunyomi": "ふね、ふな", "significado": "barco"},
        {"kanji": "衆", "onyomi": "シュウ、シュ", "kunyomi": "おおい", "significado": "masas, multitud"},
        {"kanji": "諮", "onyomi": "シ、ス", "kunyomi": "はかる、とう", "significado": "consultar"},
        {"kanji": "趣", "onyomi": "シュ、ソク", "kunyomi": "おもむき、おもむく", "significado": "carácter, dirigirse"}
      ],
      "description": "Vocal corta"
    },
    "SHUU (しゅう)": {
      "kanjis": [
        {"kanji": "週", "onyomi": "シュウ", "kunyomi": "-", "significado": "semana"},
        {"kanji": "秋", "onyomi": "シュウ", "kunyomi": "あき", "significado": "otoño"},
        {"kanji": "習", "onyomi": "シュウ", "kunyomi": "ならう", "significado": "aprender"},
        {"kanji": "拾", "onyomi": "シュウ、ジュウ", "kunyomi": "ひろう", "significado": "recoger"},
        {"kanji": "集", "onyomi": "シュウ", "kunyomi": "あつまる、あつめる、つどう", "significado": "reunir, recopilar"},
        {"kanji": "終", "onyomi": "シュウ", "kunyomi": "おえる、おわる", "significado": "terminar, finalizar"},
        {"kanji": "州", "onyomi": "シュウ", "kunyomi": "す", "significado": "estado, provincia"},
        {"kanji": "周", "onyomi": "シュウ", "kunyomi": "まわり", "significado": "alrededor, periferia"},
        {"kanji": "祝", "onyomi": "シュウ、シュク", "kunyomi": "いわう", "significado": "celebrar, felicitar"},
        {"kanji": "修", "onyomi": "シュウ", "kunyomi": "おさめる、おさまる", "significado": "practicar, estudiar, reparar"},
        {"kanji": "収", "onyomi": "シュウ", "kunyomi": "おさめる、おさまる", "significado": "ingresos, obtener"},
        {"kanji": "羞", "onyomi": "シュウ", "kunyomi": "はじる、はずかしめる", "significado": "avergonzado"},
        {"kanji": "臭", "onyomi": "シュウ", "kunyomi": "くさい、におい", "significado": "apestoso, maloliente"},
        {"kanji": "襲", "onyomi": "シュウ", "kunyomi": "おそう", "significado": "atacar, avanzar"},
        {"kanji": "愁", "onyomi": "シュウ", "kunyomi": "うれえ、うれえる", "significado": "angustia, afligir"},
        {"kanji": "酬", "onyomi": "シュウ", "kunyomi": "むくいる", "significado": "recompensar"},
        {"kanji": "蹴", "onyomi": "シュウ", "kunyomi": "ける", "significado": "patear"},
        {"kanji": "醜", "onyomi": "シュウ", "kunyomi": "みにくい", "significado": "feo"},
        {"kanji": "就", "onyomi": "ジュ、シュウ", "kunyomi": "つく、つける", "significado": "emprender trabajo"},
        {"kanji": "鷲", "onyomi": "ジュ、シュウ", "kunyomi": "わし", "significado": "águila"},
        {"kanji": "洲", "onyomi": "シュウ", "kunyomi": "しま、す", "significado": "banco de arena, isla pequeña"}
      ],
      "description": "Vocal larga"
    },
    "JU (じゅ)": {
      "kanjis": [
        {"kanji": "受", "onyomi": "ジュ", "kunyomi": "うける、うかる", "significado": "recibir, aceptar"},
        {"kanji": "授", "onyomi": "ジュ", "kunyomi": "さずける、さずかる", "significado": "otorgar, impartir"},
        {"kanji": "樹", "onyomi": "ジュ", "kunyomi": "-", "significado": "árbol"},
        {"kanji": "就", "onyomi": "ジュ、シュウ", "kunyomi": "つく、つける", "significado": "emprender, conseguir trabajo"},
        {"kanji": "従", "onyomi": "ジュ、ジュウ、ショウ", "kunyomi": "したがう、したがえる", "significado": "obedecer, seguir"},
        {"kanji": "需", "onyomi": "ジュ", "kunyomi": "-", "significado": "demanda, necesidad"},
        {"kanji": "寿", "onyomi": "ジュ", "kunyomi": "ことぶき", "significado": "longevidad"},
        {"kanji": "儒", "onyomi": "ジュ", "kunyomi": "-", "significado": "confucianismo"},
        {"kanji": "呪", "onyomi": "ジュ", "kunyomi": "のろう", "significado": "maldición"},
        {"kanji": "嬬", "onyomi": "ジュ", "kunyomi": "つま、よわい", "significado": "esposa, débil"},
        {"kanji": "竪", "onyomi": "ジュ", "kunyomi": "こども、こもの、たつ、たて", "significado": "vertical, altura"},
        {"kanji": "綬", "onyomi": "ジュ", "kunyomi": "くみひも、ひも", "significado": "cinta, cordón"},
        {"kanji": "鷲", "onyomi": "ジュ、シュウ", "kunyomi": "わし", "significado": "águila"},
        {"kanji": "孺", "onyomi": "ジュ", "kunyomi": "おさない、ちのみご", "significado": "bebé, infantil"}
      ],
      "description": "Vocal corta"
    },
    "JUU (じゅう)": {
      "kanjis": [
        {"kanji": "十", "onyomi": "ジッ、ジュウ", "kunyomi": "と、とお", "significado": "diez"},
        {"kanji": "中", "onyomi": "ジュウ、チュウ", "kunyomi": "なか", "significado": "medio, dentro"},
        {"kanji": "拾", "onyomi": "シュウ、ジュウ", "kunyomi": "ひろう", "significado": "recoger"},
        {"kanji": "重", "onyomi": "ジュウ、チョウ", "kunyomi": "え、おもい、かさなる", "significado": "pesado, duplicar"},
        {"kanji": "住", "onyomi": "ジュウ", "kunyomi": "すまう、すむ", "significado": "vivir, residir"},
        {"kanji": "従", "onyomi": "ジュ、ジュウ、ショウ", "kunyomi": "したがう、したがえる", "significado": "obedecer, acompañar"},
        {"kanji": "縦", "onyomi": "ジュウ", "kunyomi": "たて", "significado": "vertical, longitud"},
        {"kanji": "柔", "onyomi": "ジュウ、ニュウ", "kunyomi": "やわらか、やわらかい", "significado": "suave"},
        {"kanji": "獣", "onyomi": "ジュウ", "kunyomi": "けもの", "significado": "bestia, animal"},
        {"kanji": "銃", "onyomi": "ジュウ", "kunyomi": "-", "significado": "pistola, rifle"},
        {"kanji": "渋", "onyomi": "ジュウ", "kunyomi": "しぶ、しぶい、しぶる", "significado": "astringente, reacio"},
        {"kanji": "充", "onyomi": "ジュウ", "kunyomi": "あてる", "significado": "llenar, asignar"},
        {"kanji": "汁", "onyomi": "ジュウ", "kunyomi": "しる", "significado": "jugo, sopa, caldo"},
        {"kanji": "廿", "onyomi": "ジュウ", "kunyomi": "にじゅう", "significado": "veinte"},
        {"kanji": "戎", "onyomi": "ジュウ", "kunyomi": "いくさ、えびす、おおきい", "significado": "guerrero, bárbaro"},
        {"kanji": "紐", "onyomi": "ジュウ、チュウ", "kunyomi": "ひも", "significado": "cuerda, cordón"}
      ],
      "description": "Vocal larga"
    },
    "SHO (しょ)": {
      "kanjis": [
        {"kanji": "書", "onyomi": "ショ", "kunyomi": "かく", "significado": "escribir, libro"},
        {"kanji": "暑", "onyomi": "ショ", "kunyomi": "あつい", "significado": "calor (clima)"},
        {"kanji": "所", "onyomi": "ショ", "kunyomi": "ところ", "significado": "lugar"},
        {"kanji": "初", "onyomi": "ショ", "kunyomi": "はじめ、はつ、うい", "significado": "principio, comienzo"},
        {"kanji": "商", "onyomi": "ショウ", "kunyomi": "あきな", "significado": "comercio"},
        {"kanji": "唱", "onyomi": "ショウ", "kunyomi": "となえる", "significado": "cantar, recitar"},
        {"kanji": "将", "onyomi": "ショウ", "kunyomi": "まさに", "significado": "general, comandante"},
        {"kanji": "床", "onyomi": "ショウ", "kunyomi": "とこ、ゆか", "significado": "piso, cama"},
        {"kanji": "焼", "onyomi": "ショウ", "kunyomi": "やく、やける", "significado": "quemar, hornear"},
        {"kanji": "照", "onyomi": "ショウ", "kunyomi": "てる、てらす", "significado": "iluminar, brillar"},
        {"kanji": "症", "onyomi": "ショウ", "kunyomi": "-", "significado": "síntoma"},
        {"kanji": "省", "onyomi": "ショウ、セイ", "kunyomi": "かえりみる、はぶく", "significado": "ministerio, reflexionar"},
        {"kanji": "礁", "onyomi": "ショウ", "kunyomi": "-", "significado": "arrecife"},
        {"kanji": "詔", "onyomi": "ショウ", "kunyomi": "みことのり", "significado": "edicto imperial"},
        {"kanji": "奨", "onyomi": "ショウ", "kunyomi": "すすめる", "significado": "estimular, alentar"},
        {"kanji": "渉", "onyomi": "ショウ", "kunyomi": "わたる", "significado": "vadear, cruzar"},
        {"kanji": "訟", "onyomi": "ショウ", "kunyomi": "-", "significado": "litigio, demanda"},
        {"kanji": "衝", "onyomi": "ショウ", "kunyomi": "-", "significado": "colisión, choque"},
        {"kanji": "鐘", "onyomi": "ショウ", "kunyomi": "かね", "significado": "campana"}
      ],
      "description": "Vocal corta"
    },
    "SHOU (しょう)": {
      "kanjis": [
        {"kanji": "小", "onyomi": "ショウ", "kunyomi": "ちいさい、こ、お", "significado": "pequeño"},
        {"kanji": "正", "onyomi": "ショウ、セイ", "kunyomi": "ただしい、まさ", "significado": "correcto"},
        {"kanji": "少", "onyomi": "ショウ", "kunyomi": "すくない、すこし", "significado": "poco"},
        {"kanji": "松", "onyomi": "ショウ", "kunyomi": "まつ", "significado": "pino"},
        {"kanji": "勝", "onyomi": "ショウ", "kunyomi": "かつ", "significado": "victoria, ganar"},
        {"kanji": "章", "onyomi": "ショウ", "kunyomi": "-", "significado": "capítulo"},
        {"kanji": "昭", "onyomi": "ショウ", "kunyomi": "-", "significado": "brillante, claro"},
        {"kanji": "消", "onyomi": "ショウ", "kunyomi": "きえる、けす", "significado": "extinguir, borrar"},
        {"kanji": "笑", "onyomi": "ショウ", "kunyomi": "わらう、えむ", "significado": "reír, sonreír"},
        {"kanji": "生", "onyomi": "ショウ、セイ", "kunyomi": "いきる、うまれる", "significado": "vida, nacer"},
        {"kanji": "声", "onyomi": "ショウ、セイ", "kunyomi": "こえ", "significado": "voz"},
        {"kanji": "上", "onyomi": "ショウ、ジョウ", "kunyomi": "うえ、あげる", "significado": "arriba, subir"},
        {"kanji": "証", "onyomi": "ショウ", "kunyomi": "あかし", "significado": "prueba, evidencia"},
        {"kanji": "賞", "onyomi": "ショウ", "kunyomi": "ほめる", "significado": "premio, recompensa"},
        {"kanji": "晶", "onyomi": "ショウ", "kunyomi": "-", "significado": "cristal, brillante"},
        {"kanji": "掌", "onyomi": "ショウ", "kunyomi": "てのひら", "significado": "palma (de la mano)"},
        {"kanji": "升", "onyomi": "ショウ", "kunyomi": "ます", "significado": "medida de volumen"}
      ],
      "description": "Vocal larga"
    },
    "JO (じょ)": {
      "kanjis": [
        {"kanji": "助", "onyomi": "ジョ", "kunyomi": "たすける", "significado": "ayudar, asistir"},
        {"kanji": "序", "onyomi": "ジョ", "kunyomi": "-", "significado": "prólogo, orden"},
        {"kanji": "除", "onyomi": "ジョ", "kunyomi": "のぞく", "significado": "eliminar, quitar"},
        {"kanji": "女", "onyomi": "ジョ", "kunyomi": "おんな、め", "significado": "mujer"},
        {"kanji": "如", "onyomi": "ジョ", "kunyomi": "ごとし", "significado": "como, similar a"},
        {"kanji": "徐", "onyomi": "ジョ", "kunyomi": "おもむろに", "significado": "lento, gradual"},
        {"kanji": "叙", "onyomi": "ジョ", "kunyomi": "-", "significado": "describir, narrar"},
        {"kanji": "署", "onyomi": "ジョ", "kunyomi": "-", "significado": "oficina, firmar"},
        {"kanji": "緒", "onyomi": "ジョ、ショ", "kunyomi": "お", "significado": "comienzo, extremo"},
        {"kanji": "諸", "onyomi": "ジョ、ショ", "kunyomi": "もろ", "significado": "varios, muchos"},
        {"kanji": "鋤", "onyomi": "ジョ、ソ", "kunyomi": "すき", "significado": "arado"},
        {"kanji": "恕", "onyomi": "ジョ", "kunyomi": "-", "significado": "perdonar"},
        {"kanji": "汝", "onyomi": "ジョ", "kunyomi": "なんじ", "significado": "tú (formal)"},
        {"kanji": "余", "onyomi": "ジョ、ヨ", "kunyomi": "あまる、あまり", "significado": "sobra, resto"},
        {"kanji": "与", "onyomi": "ジョ、ヨ", "kunyomi": "あたえる", "significado": "dar, otorgar"},
        {"kanji": "処", "onyomi": "ジョ、ショ", "kunyomi": "ところ", "significado": "lugar, sitio"}
      ],
      "description": "Vocal corta"
    },
    "JOU (じょう)": {
      "kanjis": [
        {"kanji": "情", "onyomi": "ジョウ、セイ", "kunyomi": "なさけ", "significado": "sentimiento, emoción"},
        {"kanji": "常", "onyomi": "ジョウ", "kunyomi": "つね、とこ", "significado": "usual, normal"},
        {"kanji": "状", "onyomi": "ジョウ", "kunyomi": "-", "significado": "estado, condición"},
        {"kanji": "条", "onyomi": "ジョウ", "kunyomi": "えだ", "significado": "artículo, cláusula"},
        {"kanji": "城", "onyomi": "ジョウ", "kunyomi": "しろ", "significado": "castillo"},
        {"kanji": "乗", "onyomi": "ジョウ", "kunyomi": "のる、のせる", "significado": "montar, subir"},
        {"kanji": "場", "onyomi": "ジョウ", "kunyomi": "ば", "significado": "lugar, sitio"},
        {"kanji": "静", "onyomi": "ジョウ、セイ", "kunyomi": "しずか", "significado": "quieto, tranquilo"},
        {"kanji": "浄", "onyomi": "ジョウ、セイ", "kunyomi": "きよい", "significado": "puro, limpio"},
        {"kanji": "畳", "onyomi": "ジョウ", "kunyomi": "たたみ", "significado": "tatami, doblar"},
        {"kanji": "蒸", "onyomi": "ジョウ", "kunyomi": "むす、むれる", "significado": "vapor, cocer al vapor"},
        {"kanji": "錠", "onyomi": "ジョウ", "kunyomi": "-", "significado": "cerradura"},
        {"kanji": "譲", "onyomi": "ジョウ", "kunyomi": "ゆずる", "significado": "ceder, transferir"},
        {"kanji": "醸", "onyomi": "ジョウ", "kunyomi": "かもす", "significado": "fermentar, elaborar"},
        {"kanji": "冗", "onyomi": "ジョウ", "kunyomi": "-", "significado": "redundante, superfluo"},
        {"kanji": "嬢", "onyomi": "ジョウ", "kunyomi": "むすめ", "significado": "señorita"},
        {"kanji": "壌", "onyomi": "ジョウ", "kunyomi": "つち", "significado": "suelo, tierra"},
        {"kanji": "穣", "onyomi": "ジョウ", "kunyomi": "ゆたか", "significado": "abundante, fértil"},
        {"kanji": "襄", "onyomi": "ジョウ", "kunyomi": "たすける", "significado": "ayudar, asistir"},
        {"kanji": "丈", "onyomi": "ジョウ", "kunyomi": "たけ", "significado": "altura, longitud"},
        {"kanji": "杖", "onyomi": "ジョウ", "kunyomi": "つえ", "significado": "bastón"},
        {"kanji": "定", "onyomi": "ジョウ、テイ", "kunyomi": "さだめる", "significado": "determinar, fijar"},
        {"kanji": "成", "onyomi": "ジョウ、セイ", "kunyomi": "なる", "significado": "convertirse en, completar"}
      ],
      "description": "Vocal larga"
    }
  },
  "stats": {
    "total_lists": 8,
    "total_kanjis": 143,
    "by_category": {
      "SHU (しゅ)": 17,
      "SHUU (しゅう)": 21,
      "JU (じゅ)": 14,
      "JUU (じゅう)": 16,
      "SHO (しょ)": 19,
      "SHOU (しょう)": 17,
      "JO (じょ)": 16,
      "JOU (じょう)": 23
    }
  }
};

// Application state
let currentList = "SHU (しゅ)";
let currentView = "cards"; // 'cards' or 'table'
let filteredKanjis = [];
let searchTerm = "";
let readingFilter = "all";

// DOM elements
const navTabs = document.getElementById('nav-tabs');
const kanjiContainer = document.getElementById('kanji-container');
const searchInput = document.getElementById('search-input');
const readingFilterSelect = document.getElementById('reading-filter');
const viewToggle = document.getElementById('view-toggle');
const viewToggleText = document.getElementById('view-toggle-text');
const currentListTitle = document.getElementById('current-list-title');
const currentListDescription = document.getElementById('current-list-description');
const showingCount = document.getElementById('showing-count');
const currentCount = document.getElementById('current-count');
const noResults = document.getElementById('no-results');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    loadCurrentList();
});

// Event listeners
function setupEventListeners() {
    // Navigation tabs
    navTabs.addEventListener('click', function(e) {
        const tab = e.target.closest('.nav__tab');
        if (tab) {
            const listName = tab.getAttribute('data-list');
            switchToList(listName);
        }
    });

    // Search functionality
    searchInput.addEventListener('input', function(e) {
        searchTerm = e.target.value.toLowerCase();
        filterAndDisplayKanjis();
    });

    // Reading filter
    readingFilterSelect.addEventListener('change', function(e) {
        readingFilter = e.target.value;
        filterAndDisplayKanjis();
    });

    // View toggle
    viewToggle.addEventListener('click', function() {
        currentView = currentView === 'cards' ? 'table' : 'cards';
        viewToggleText.textContent = currentView === 'cards' ? 'Vista de Tabla' : 'Vista de Tarjetas';
        displayKanjis(filteredKanjis);
    });
}

// Switch to a different list
function switchToList(listName) {
    currentList = listName;
    
    // Update active tab
    document.querySelectorAll('.nav__tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-list="${listName}"]`).classList.add('active');
    
    // Reset filters and search
    searchTerm = "";
    readingFilter = "all";
    searchInput.value = "";
    readingFilterSelect.value = "all";
    
    loadCurrentList();
}

// Load current list data
function loadCurrentList() {
    const listData = kanjiData.lists[currentList];
    
    // Update header
    currentListTitle.textContent = currentList;
    currentListDescription.textContent = listData.description;
    
    // Update current count in footer
    currentCount.textContent = listData.kanjis.length;
    
    filterAndDisplayKanjis();
}

// Filter and display kanjis based on search and filter criteria
function filterAndDisplayKanjis() {
    const listData = kanjiData.lists[currentList];
    let kanjis = listData.kanjis;
    
    // Apply search filter
    if (searchTerm) {
        kanjis = kanjis.filter(kanji => {
            return kanji.kanji.toLowerCase().includes(searchTerm) ||
                   kanji.onyomi.toLowerCase().includes(searchTerm) ||
                   kanji.kunyomi.toLowerCase().includes(searchTerm) ||
                   kanji.significado.toLowerCase().includes(searchTerm);
        });
    }
    
    // Apply reading filter
    if (readingFilter === 'onyomi') {
        kanjis = kanjis.filter(kanji => kanji.onyomi && kanji.onyomi !== '-');
    } else if (readingFilter === 'kunyomi') {
        kanjis = kanjis.filter(kanji => kanji.kunyomi && kanji.kunyomi !== '-');
    }
    
    filteredKanjis = kanjis;
    
    // Update showing count
    const total = listData.kanjis.length;
    const showing = filteredKanjis.length;
    showingCount.textContent = `Mostrando ${showing} de ${total} kanjis`;
    
    displayKanjis(filteredKanjis);
}

// Display kanjis in current view mode
function displayKanjis(kanjis) {
    if (kanjis.length === 0) {
        kanjiContainer.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    
    if (currentView === 'cards') {
        displayCardsView(kanjis);
    } else {
        displayTableView(kanjis);
    }
}

// Display kanjis in cards view
function displayCardsView(kanjis) {
    kanjiContainer.className = 'kanji-grid';
    
    const cardsHTML = kanjis.map(kanji => {
        const onyomiDisplay = kanji.onyomi === '-' ? 'Sin lectura On\'yomi' : highlightText(kanji.onyomi);
        const kunyomiDisplay = kanji.kunyomi === '-' ? 'Sin lectura Kun\'yomi' : highlightText(kanji.kunyomi);
        
        return `
            <div class="kanji-card">
                <div class="kanji-card__character">${highlightText(kanji.kanji)}</div>
                <div class="kanji-card__readings">
                    <div class="reading-group">
                        <span class="reading-label">On'yomi (音読み)</span>
                        <div class="reading-value reading-value--onyomi">${onyomiDisplay}</div>
                    </div>
                    <div class="reading-group">
                        <span class="reading-label">Kun'yomi (訓読み)</span>
                        <div class="reading-value reading-value--kunyomi">${kunyomiDisplay}</div>
                    </div>
                </div>
                <div class="kanji-card__meaning">${highlightText(kanji.significado)}</div>
            </div>
        `;
    }).join('');
    
    kanjiContainer.innerHTML = cardsHTML;
}

// Display kanjis in table view
function displayTableView(kanjis) {
    kanjiContainer.className = 'kanji-table-container';
    
    const tableHTML = `
        <table class="kanji-table">
            <thead>
                <tr>
                    <th>Kanji</th>
                    <th>On'yomi</th>
                    <th>Kun'yomi</th>
                    <th>Significado</th>
                </tr>
            </thead>
            <tbody>
                ${kanjis.map(kanji => {
                    const onyomiDisplay = kanji.onyomi === '-' ? '-' : highlightText(kanji.onyomi);
                    const kunyomiDisplay = kanji.kunyomi === '-' ? '-' : highlightText(kanji.kunyomi);
                    
                    return `
                        <tr>
                            <td class="kanji-character">${highlightText(kanji.kanji)}</td>
                            <td class="reading-onyomi">${onyomiDisplay}</td>
                            <td class="reading-kunyomi">${kunyomiDisplay}</td>
                            <td>${highlightText(kanji.significado)}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
    `;
    
    kanjiContainer.innerHTML = tableHTML;
}

// Highlight search term in text
function highlightText(text) {
    if (!searchTerm || searchTerm.length === 0) {
        return text;
    }
    
    const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
    return text.replace(regex, '<mark class="highlight">$1</mark>');
}

// Escape special regex characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Utility function to get kanji count for a list
function getKanjiCountForList(listName) {
    return kanjiData.lists[listName] ? kanjiData.lists[listName].kanjis.length : 0;
}