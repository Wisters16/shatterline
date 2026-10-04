// ======================================================
// SHATTERLINE
// Cosmetics Update
// ======================================================


// ======================================================
// DOM
// ======================================================

const canvas =
  document.getElementById("game");

const ctx =
  canvas.getContext("2d");

const timerElement =
  document.getElementById("timer");

const shockwaveElement =
  document.getElementById("shockwave");

const hud =
  document.getElementById("hud");

const mainMenu =
  document.getElementById("main-menu");

const cosmeticsMenu =
  document.getElementById("cosmetics-menu");

const pauseMenu =
  document.getElementById("pause-menu");

const gameOverScreen =
  document.getElementById("game-over");

const playButton =
  document.getElementById("play-button");

const cosmeticsButton =
  document.getElementById("cosmetics-button");

const closeCosmeticsButton =
  document.getElementById("close-cosmetics-button");

const retryButton =
  document.getElementById("retry-button");

const menuButton =
  document.getElementById("menu-button");

const resumeButton =
  document.getElementById("resume-button");

const restartButton =
  document.getElementById("restart-button");

const pauseMenuButton =
  document.getElementById("pause-menu-button");

const soundButton =
  document.getElementById("sound-button");

const pauseSoundButton =
  document.getElementById("pause-sound-button");

const bestTimeElement =
  document.getElementById("best-time");

const bestMedalElement =
  document.getElementById("best-medal");

const deathTitleElement =
  document.getElementById("death-title");

const finalTimeElement =
  document.getElementById("final-time");

const finalEnemiesElement =
  document.getElementById("final-enemies");

const medalDisplayElement =
  document.getElementById("medal-display");

const cosmeticCards =
  document.querySelectorAll(
    ".cosmetic-card"
  );


// ======================================================
// CANVAS
// ======================================================

let width =
  window.innerWidth;

let height =
  window.innerHeight;

canvas.width = width;
canvas.height = height;


// ======================================================
// SAVE DATA
// ======================================================

const BEST_TIME_KEY =
  "shatterline-best-time";

const SOUND_KEY =
  "shatterline-sound";

const COSMETICS_KEY =
  "shatterline-cosmetics";

let bestTime =
  Number(
    localStorage.getItem(
      BEST_TIME_KEY
    )
  ) || 0;

let soundEnabled =
  localStorage.getItem(
    SOUND_KEY
  ) !== "off";


// ======================================================
// COSMETIC THEMES
// ======================================================

const arenaThemes = {

  arctic: {

    oceanTop:
      "#07304a",

    oceanMiddle:
      "#031a2a",

    oceanBottom:
      "#01070c",

    wave:
      "rgba(90,210,240,0.055)",

    iceHealthy:
      "rgba(180,229,243,0.96)",

    iceMedium:
      "rgba(137,200,222,0.96)",

    iceLow:
      "rgba(91,157,188,0.96)",

    iceStroke:
      "rgba(235,255,255,0.5)",

    frost:
      "rgba(235,252,255,0.09)",

    vein:
      "rgba(15,105,135,0.17)",

    edge:
      "rgba(175,242,255,0.76)",

    edgeShadow:
      "#58dfff",

    underGlow:
      "rgba(55,160,195,0.08)",

    underShadow:
      "rgba(74,210,255,0.32)",

    floatingFill:
      "rgba(155,213,228,0.48)",

    floatingStroke:
      "rgba(220,250,255,0.34)",

    holeCenter:
      "rgba(0,8,16,0.85)",

    holeOuter:
      "rgba(2,28,43,0.48)",

    brokenRim:
      "rgba(190,245,255,0.72)",

    brokenShadow:
      "rgba(90,220,255,0.65)",

    ripple:
      "#8be9ff"
  },


  aurora: {

    oceanTop:
      "#07363d",

    oceanMiddle:
      "#092739",

    oceanBottom:
      "#020b16",

    wave:
      "rgba(104,255,221,0.07)",

    iceHealthy:
      "rgba(177,235,220,0.96)",

    iceMedium:
      "rgba(119,199,191,0.96)",

    iceLow:
      "rgba(82,147,161,0.96)",

    iceStroke:
      "rgba(225,255,248,0.5)",

    frost:
      "rgba(210,255,242,0.11)",

    vein:
      "rgba(150,92,255,0.21)",

    edge:
      "rgba(120,255,218,0.82)",

    edgeShadow:
      "#9c72ff",

    underGlow:
      "rgba(50,220,180,0.10)",

    underShadow:
      "rgba(132,94,255,0.34)",

    floatingFill:
      "rgba(116,207,192,0.48)",

    floatingStroke:
      "rgba(210,255,243,0.38)",

    holeCenter:
      "rgba(1,8,17,0.90)",

    holeOuter:
      "rgba(7,48,55,0.50)",

    brokenRim:
      "rgba(135,255,224,0.78)",

    brokenShadow:
      "rgba(158,105,255,0.65)",

    ripple:
      "#72ffdf"
  },


  midnight: {

    oceanTop:
      "#0a1425",

    oceanMiddle:
      "#060b17",

    oceanBottom:
      "#010207",

    wave:
      "rgba(100,143,210,0.06)",

    iceHealthy:
      "rgba(91,132,169,0.96)",

    iceMedium:
      "rgba(68,101,139,0.96)",

    iceLow:
      "rgba(43,67,101,0.96)",

    iceStroke:
      "rgba(175,212,250,0.38)",

    frost:
      "rgba(190,215,255,0.07)",

    vein:
      "rgba(97,72,190,0.20)",

    edge:
      "rgba(130,177,255,0.74)",

    edgeShadow:
      "#625cff",

    underGlow:
      "rgba(48,84,150,0.09)",

    underShadow:
      "rgba(77,78,255,0.30)",

    floatingFill:
      "rgba(83,111,151,0.46)",

    floatingStroke:
      "rgba(180,210,255,0.27)",

    holeCenter:
      "rgba(0,0,5,0.94)",

    holeOuter:
      "rgba(6,11,28,0.62)",

    brokenRim:
      "rgba(124,164,236,0.72)",

    brokenShadow:
      "rgba(91,82,255,0.70)",

    ripple:
      "#798fff"
  },


  ember: {

    oceanTop:
      "#3a1118",

    oceanMiddle:
      "#1f090d",

    oceanBottom:
      "#080204",

    wave:
      "rgba(255,130,91,0.065)",

    iceHealthy:
      "rgba(220,156,146,0.96)",

    iceMedium:
      "rgba(190,112,111,0.96)",

    iceLow:
      "rgba(139,70,78,0.96)",

    iceStroke:
      "rgba(255,222,205,0.46)",

    frost:
      "rgba(255,224,207,0.08)",

    vein:
      "rgba(255,78,42,0.23)",

    edge:
      "rgba(255,178,129,0.82)",

    edgeShadow:
      "#ff5939",

    underGlow:
      "rgba(225,78,45,0.09)",

    underShadow:
      "rgba(255,76,42,0.34)",

    floatingFill:
      "rgba(194,112,101,0.48)",

    floatingStroke:
      "rgba(255,214,195,0.32)",

    holeCenter:
      "rgba(13,1,2,0.94)",

    holeOuter:
      "rgba(55,9,11,0.55)",

    brokenRim:
      "rgba(255,173,122,0.78)",

    brokenShadow:
      "rgba(255,77,43,0.72)",

    ripple:
      "#ff946d"
  }
};


const playerThemes = {

  glacier: {

    core:
      "#073650",

    glow:
      "#5de1ff",

    highlight:
      "#b3f5ff",

    outline:
      "rgba(145,240,255,0.85)"
  },


  rose: {

    core:
      "#541735",

    glow:
      "#ff5da8",

    highlight:
      "#ffd0e6",

    outline:
      "rgba(255,140,195,0.88)"
  },


  violet: {

    core:
      "#28164f",

    glow:
      "#a27cff",

    highlight:
      "#e0d0ff",

    outline:
      "rgba(181,151,255,0.90)"
  },


  gold: {

    core:
      "#5c430c",

    glow:
      "#ffd96a",

    highlight:
      "#fff0ad",

    outline:
      "rgba(255,225,125,0.90)"
  }
};


const trailThemes = {

  frost: {

    color:
      "#8deaff",

    secondary:
      "#dfffff"
  },


  aurora: {

    color:
      "#65ffd7",

    secondary:
      "#a273ff"
  },


  sparks: {

    color:
      "#ffd451",

    secondary:
      "#ff6a44"
  },


  void: {

    color:
      "#986dff",

    secondary:
      "#3d286c"
  }
};


// ======================================================
// COSMETIC UNLOCKS
// ======================================================

const cosmeticUnlocks = {

  arena: {

    arctic:
      0,

    aurora:
      60,

    midnight:
      120,

    ember:
      180
  },


  player: {

    glacier:
      0,

    rose:
      30,

    violet:
      60,

    gold:
      180
  },


  trail: {

    frost:
      0,

    aurora:
      60,

    sparks:
      90,

    void:
      120
  }
};


// ======================================================
// ACTIVE COSMETICS
// ======================================================

let equippedCosmetics = {

  arena:
    "arctic",

  player:
    "glacier",

  trail:
    "frost"
};


function loadCosmetics() {

  try {

    const saved =
      JSON.parse(
        localStorage.getItem(
          COSMETICS_KEY
        )
      );


    if (
      saved &&
      typeof saved === "object"
    ) {

      equippedCosmetics = {

        arena:
          saved.arena ||
          "arctic",

        player:
          saved.player ||
          "glacier",

        trail:
          saved.trail ||
          "frost"
      };
    }
  }

  catch {

    equippedCosmetics = {

      arena:
        "arctic",

      player:
        "glacier",

      trail:
        "frost"
    };
  }


  validateCosmetics();
}


function validateCosmetics() {

  if (
    !isCosmeticUnlocked(
      "arena",
      equippedCosmetics.arena
    )
  ) {

    equippedCosmetics.arena =
      "arctic";
  }


  if (
    !isCosmeticUnlocked(
      "player",
      equippedCosmetics.player
    )
  ) {

    equippedCosmetics.player =
      "glacier";
  }


  if (
    !isCosmeticUnlocked(
      "trail",
      equippedCosmetics.trail
    )
  ) {

    equippedCosmetics.trail =
      "frost";
  }
}


function saveCosmetics() {

  localStorage.setItem(

    COSMETICS_KEY,

    JSON.stringify(
      equippedCosmetics
    )
  );
}


function isCosmeticUnlocked(
  category,
  id
) {

  const threshold =
    cosmeticUnlocks[
      category
    ]?.[id];


  if (
    threshold ===
    undefined
  ) {

    return false;
  }


  return (
    bestTime /
    1000
  ) >=
  threshold;
}


function formatUnlockTime(
  seconds
) {

  const minutes =
    Math.floor(
      seconds /
      60
    );


  const remaining =
    seconds %
    60;


  return (
    String(minutes)
      .padStart(2, "0") +
    ":" +
    String(remaining)
      .padStart(2, "0")
  );
}


function renderCosmetics() {

  validateCosmetics();


  for (
    const card of cosmeticCards
  ) {

    const category =
      card.dataset.category;


    const id =
      card.dataset.id;


    const unlocked =
      isCosmeticUnlocked(
        category,
        id
      );


    const selected =
      equippedCosmetics[
        category
      ] ===
      id;


    card.classList.toggle(
      "locked",
      !unlocked
    );


    card.classList.toggle(
      "selected",
      selected
    );


    const status =
      card.querySelector(
        ".cosmetic-status"
      );


    if (!status) {
      continue;
    }


    if (
      selected
    ) {

      status.textContent =
        "EQUIPPED";
    }


    else if (
      unlocked
    ) {

      status.textContent =
        "UNLOCKED";
    }


    else {

      const threshold =
        cosmeticUnlocks[
          category
        ][id];


      status.textContent =
        `SURVIVE ${formatUnlockTime(threshold)}`;
    }
  }
}


function selectCosmetic(
  category,
  id
) {

  if (
    !isCosmeticUnlocked(
      category,
      id
    )
  ) {

    return;
  }


  equippedCosmetics[
    category
  ] =
    id;


  saveCosmetics();

  renderCosmetics();
}


function getArenaTheme() {

  return (
    arenaThemes[
      equippedCosmetics.arena
    ] ||
    arenaThemes.arctic
  );
}


function getPlayerTheme() {

  return (
    playerThemes[
      equippedCosmetics.player
    ] ||
    playerThemes.glacier
  );
}


function getTrailTheme() {

  return (
    trailThemes[
      equippedCosmetics.trail
    ] ||
    trailThemes.frost
  );
}


// ======================================================
// AUDIO
// ======================================================

let audioContext =
  null;

let noiseBuffer =
  null;

let lastIceSoundAt =
  0;


function ensureAudio() {

  if (!soundEnabled) {
    return;
  }


  if (!audioContext) {

    audioContext =
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();


    createNoiseBuffer();
  }


  if (
    audioContext.state ===
    "suspended"
  ) {

    audioContext.resume();
  }
}


function createNoiseBuffer() {

  if (
    !audioContext
  ) {
    return;
  }


  const duration =
    0.5;


  const sampleRate =
    audioContext.sampleRate;


  noiseBuffer =
    audioContext.createBuffer(

      1,

      sampleRate *
      duration,

      sampleRate
    );


  const data =
    noiseBuffer.getChannelData(
      0
    );


  for (
    let i = 0;
    i < data.length;
    i++
  ) {

    data[i] =
      Math.random() * 2 - 1;
  }
}


function playTone(
  startFrequency,
  endFrequency,
  duration,
  volume = 0.06,
  type = "sine"
) {

  if (!soundEnabled) {
    return;
  }


  ensureAudio();


  const now =
    audioContext.currentTime;


  const oscillator =
    audioContext.createOscillator();


  const gain =
    audioContext.createGain();


  oscillator.type =
    type;


  oscillator.frequency.setValueAtTime(
    startFrequency,
    now
  );


  oscillator.frequency.exponentialRampToValueAtTime(

    Math.max(
      20,
      endFrequency
    ),

    now +
    duration
  );


  gain.gain.setValueAtTime(
    volume,
    now
  );


  gain.gain.exponentialRampToValueAtTime(

    0.001,

    now +
    duration
  );


  oscillator.connect(
    gain
  );


  gain.connect(
    audioContext.destination
  );


  oscillator.start(
    now
  );


  oscillator.stop(
    now +
    duration
  );
}


function playNoise(
  duration = 0.15,
  volume = 0.03
) {

  if (!soundEnabled) {
    return;
  }


  ensureAudio();


  if (!noiseBuffer) {
    return;
  }


  const source =
    audioContext.createBufferSource();


  const filter =
    audioContext.createBiquadFilter();


  const gain =
    audioContext.createGain();


  source.buffer =
    noiseBuffer;


  filter.type =
    "lowpass";


  filter.frequency.value =
    1700;


  gain.gain.setValueAtTime(
    volume,
    audioContext.currentTime
  );


  gain.gain.exponentialRampToValueAtTime(

    0.001,

    audioContext.currentTime +
    duration
  );


  source.connect(
    filter
  );


  filter.connect(
    gain
  );


  gain.connect(
    audioContext.destination
  );


  source.start();


  source.stop(
    audioContext.currentTime +
    duration
  );
}


// ======================================================
// SOUND EFFECTS
// ======================================================

function soundIceBreak() {

  const now =
    performance.now();


  if (
    now -
    lastIceSoundAt <
    60
  ) {
    return;
  }


  lastIceSoundAt =
    now;


  playNoise(
    0.1,
    0.018
  );


  playTone(
    330,
    95,
    0.1,
    0.018,
    "triangle"
  );
}


function soundShockwave() {

  playTone(
    150,
    38,
    0.45,
    0.085,
    "sine"
  );


  playNoise(
    0.22,
    0.04
  );
}


function soundEnemyFall() {

  playTone(
    260,
    75,
    0.18,
    0.032,
    "square"
  );
}


function soundPickup(
  type
) {

  if (
    type ===
    "repair"
  ) {

    playTone(
      420,
      760,
      0.22,
      0.05
    );
  }


  else if (
    type ===
    "recharge"
  ) {

    playTone(
      550,
      1100,
      0.18,
      0.05,
      "square"
    );
  }


  else {

    playTone(
      320,
      620,
      0.28,
      0.05,
      "triangle"
    );
  }
}


function soundShieldBreak() {

  playTone(
    600,
    120,
    0.28,
    0.055,
    "triangle"
  );
}


function soundGameOver() {

  playTone(
    220,
    60,
    0.65,
    0.06
  );
}


function toggleSound() {

  soundEnabled =
    !soundEnabled;


  localStorage.setItem(

    SOUND_KEY,

    soundEnabled
      ? "on"
      : "off"
  );


  updateSoundButtons();


  if (
    soundEnabled
  ) {

    ensureAudio();


    playTone(
      440,
      660,
      0.12,
      0.04
    );
  }
}


function updateSoundButtons() {

  const text =
    soundEnabled
      ? "SOUND: ON"
      : "SOUND: OFF";


  soundButton.textContent =
    text;


  pauseSoundButton.textContent =
    text;
}


// ======================================================
// GAME STATE
// ======================================================

let gameState =
  "menu";


let startTime =
  performance.now();


let totalPausedTime =
  0;


let pauseStartedAt =
  0;


let finalTime =
  0;


let deathReason =
  "THE ICE GAVE WAY";


let lastTileKey =
  null;


let enemiesDefeated =
  0;


let runWasNewBest =
  false;


// ======================================================
// TIME
// ======================================================

function getElapsedTime() {

  if (
    gameState ===
    "gameover"
  ) {

    return finalTime;
  }


  let paused =
    totalPausedTime;


  if (
    gameState ===
    "paused"
  ) {

    paused +=
      performance.now() -
      pauseStartedAt;
  }


  return Math.max(

    0,

    performance.now() -
    startTime -
    paused
  );
}


function getSurvivalSeconds() {

  return (
    getElapsedTime() /
    1000
  );
}


function formatTime(
  milliseconds
) {

  const secondsTotal =
    Math.floor(
      milliseconds /
      1000
    );


  const minutes =
    Math.floor(
      secondsTotal /
      60
    );


  const seconds =
    secondsTotal %
    60;


  return (
    String(minutes)
      .padStart(2, "0") +
    ":" +
    String(seconds)
      .padStart(2, "0")
  );
}


// ======================================================
// MEDALS
// ======================================================

function getMedal(
  milliseconds
) {

  const seconds =
    milliseconds /
    1000;


  if (
    seconds >= 300
  ) {
    return "DIAMOND";
  }


  if (
    seconds >= 180
  ) {
    return "GOLD";
  }


  if (
    seconds >= 120
  ) {
    return "SILVER";
  }


  if (
    seconds >= 60
  ) {
    return "BRONZE";
  }


  return "UNRANKED";
}


// ======================================================
// INPUT
// ======================================================

const keys = {};


function clearKeys() {

  for (
    const key in keys
  ) {

    keys[key] =
      false;
  }
}


window.addEventListener(
  "keydown",
  (event) => {

    const key =
      event.key.toLowerCase();


    keys[key] =
      true;


    if (
      key === "arrowup" ||
      key === "arrowdown" ||
      key === "arrowleft" ||
      key === "arrowright" ||
      event.code === "Space"
    ) {

      event.preventDefault();
    }


    if (
      gameState ===
        "menu" &&
      event.code ===
        "Enter"
    ) {

      startGame();
      return;
    }


    if (
      gameState ===
        "cosmetics" &&
      key ===
        "escape"
    ) {

      showMainMenu();
      return;
    }


    if (
      gameState ===
        "playing" &&
      key ===
        "escape"
    ) {

      pauseGame();
      return;
    }


    if (
      gameState ===
        "paused" &&
      key ===
        "escape"
    ) {

      resumeGame();
      return;
    }


    if (
      gameState ===
        "playing" &&
      event.code ===
        "Space" &&
      !event.repeat
    ) {

      activateShockwave();
      return;
    }


    if (
      gameState ===
        "gameover" &&
      key ===
        "r"
    ) {

      startGame();
      return;
    }


    if (
      gameState ===
        "gameover" &&
      key ===
        "escape"
    ) {

      showMainMenu();
    }
  }
);


window.addEventListener(
  "keyup",
  (event) => {

    keys[
      event.key.toLowerCase()
    ] =
      false;
  }
);


window.addEventListener(
  "blur",
  () => {

    clearKeys();


    if (
      gameState ===
      "playing"
    ) {

      pauseGame();
    }
  }
);


// ======================================================
// BUTTONS
// ======================================================

playButton.addEventListener(
  "click",
  () => {

    ensureAudio();

    startGame();
  }
);


cosmeticsButton.addEventListener(
  "click",
  showCosmetics
);


closeCosmeticsButton.addEventListener(
  "click",
  showMainMenu
);


retryButton.addEventListener(
  "click",
  startGame
);


menuButton.addEventListener(
  "click",
  showMainMenu
);


resumeButton.addEventListener(
  "click",
  resumeGame
);


restartButton.addEventListener(
  "click",
  startGame
);


pauseMenuButton.addEventListener(
  "click",
  showMainMenu
);


soundButton.addEventListener(
  "click",
  toggleSound
);


pauseSoundButton.addEventListener(
  "click",
  toggleSound
);


for (
  const card of cosmeticCards
) {

  card.addEventListener(
    "click",
    () => {

      selectCosmetic(

        card.dataset.category,

        card.dataset.id
      );
    }
  );
}


// ======================================================
// ICE WORLD
// ======================================================

const TILE_SIZE =
  58;


const ICE_MARGIN =
  70;


let tiles =
  [];


let columns =
  0;


let rows =
  0;


let iceLeft =
  0;


let iceTop =
  0;


let iceWidth =
  0;


let iceHeight =
  0;


let floatingIceChunks =
  [];


let iceVeins =
  [];


// ======================================================
// HASH
// ======================================================

function hash2D(
  row,
  col,
  salt = 0
) {

  const value =
    Math.sin(

      row *
      127.1 +

      col *
      311.7 +

      salt *
      91.7

    ) *
    43758.5453;


  return (
    value -
    Math.floor(value)
  );
}


// ======================================================
// BUILD ARENA
// ======================================================

function buildIce() {

  tiles =
    [];


  const availableWidth =
    width -
    ICE_MARGIN *
    2;


  const availableHeight =
    height -
    ICE_MARGIN *
    2;


  columns =
    Math.max(

      4,

      Math.floor(
        availableWidth /
        TILE_SIZE
      )
    );


  rows =
    Math.max(

      4,

      Math.floor(
        availableHeight /
        TILE_SIZE
      )
    );


  iceWidth =
    columns *
    TILE_SIZE;


  iceHeight =
    rows *
    TILE_SIZE;


  iceLeft =
    (
      width -
      iceWidth
    ) /
    2;


  iceTop =
    (
      height -
      iceHeight
    ) /
    2;


  for (
    let row = 0;
    row < rows;
    row++
  ) {

    for (
      let col = 0;
      col < columns;
      col++
    ) {

      tiles.push({

        row,

        col,


        x:
          iceLeft +
          col *
          TILE_SIZE,


        y:
          iceTop +
          row *
          TILE_SIZE,


        active:
          true,


        health:
          100,


        fractureTimer:
          0,


        fractureDuration:
          0,


        shimmer:
          Math.random() *
          Math.PI *
          2,


        frostSeed:
          hash2D(
            row,
            col,
            2
          ),


        frostType:
          Math.floor(
            hash2D(
              row,
              col,
              6
            ) *
            4
          )
      });
    }
  }


  carveCoastline();

  buildFloatingIce();

  buildIceVeins();
}


// ======================================================
// RAW TILE
// ======================================================

function getRawTile(
  row,
  col
) {

  if (
    row < 0 ||
    row >= rows ||
    col < 0 ||
    col >= columns
  ) {

    return null;
  }


  return tiles[
    row *
    columns +
    col
  ];
}


// ======================================================
// COASTLINE
// ======================================================

function carveCoastline() {

  for (
    const tile of tiles
  ) {

    const {
      row,
      col
    } =
      tile;


    const edgeDistance =
      Math.min(

        row,

        rows - 1 - row,

        col,

        columns - 1 - col
      );


    const centerDistance =
      Math.hypot(

        col -
        columns /
        2,

        row -
        rows /
        2
      );


    if (
      centerDistance <
      4
    ) {

      continue;
    }


    const cornerDistance =
      Math.min(

        row +
        col,


        row +
        (
          columns -
          1 -
          col
        ),


        (
          rows -
          1 -
          row
        ) +
        col,


        (
          rows -
          1 -
          row
        ) +
        (
          columns -
          1 -
          col
        )
      );


    if (
      cornerDistance <=
      1
    ) {

      tile.active =
        false;

      continue;
    }


    const noise =
      hash2D(
        row,
        col,
        14
      );


    if (
      edgeDistance ===
        0 &&
      noise <
        0.26
    ) {

      tile.active =
        false;

      continue;
    }


    if (
      edgeDistance ===
        1 &&
      noise <
        0.055
    ) {

      tile.active =
        false;
    }
  }


  const middleRow =
    Math.floor(
      rows /
      2
    );


  const middleCol =
    Math.floor(
      columns /
      2
    );


  for (
    let rowOffset = -2;
    rowOffset <= 2;
    rowOffset++
  ) {

    for (
      let colOffset = -2;
      colOffset <= 2;
      colOffset++
    ) {

      const tile =
        getRawTile(

          middleRow +
          rowOffset,

          middleCol +
          colOffset
        );


      if (
        tile
      ) {

        tile.active =
          true;
      }
    }
  }
}


// ======================================================
// FLOATING ICE
// ======================================================

function buildFloatingIce() {

  floatingIceChunks =
    [];


  const chunkCount =
    Math.max(

      14,

      Math.floor(
        width /
        100
      )
    );


  let attempts =
    0;


  while (
    floatingIceChunks.length <
      chunkCount &&
    attempts <
      chunkCount *
      20
  ) {

    attempts++;


    const x =
      Math.random() *
      width;


    const y =
      Math.random() *
      height;


    const padding =
      35;


    const insideArena =

      x >
      iceLeft -
      padding &&

      x <
      iceLeft +
      iceWidth +
      padding &&

      y >
      iceTop -
      padding &&

      y <
      iceTop +
      iceHeight +
      padding;


    if (
      insideArena
    ) {

      continue;
    }


    floatingIceChunks.push({

      x,

      y,


      baseX:
        x,


      baseY:
        y,


      radius:
        5 +
        Math.random() *
        13,


      rotation:
        Math.random() *
        Math.PI,


      rotationSpeed:
        (
          Math.random() -
          0.5
        ) *
        0.08,


      drift:
        2 +
        Math.random() *
        4,


      phase:
        Math.random() *
        Math.PI *
        2,


      points:
        5 +
        Math.floor(
          Math.random() *
          3
        )
    });
  }
}


// ======================================================
// ICE VEINS
// ======================================================

function buildIceVeins() {

  iceVeins =
    [];


  const veinCount =
    Math.max(

      5,

      Math.floor(
        columns /
        6
      )
    );


  for (
    let i = 0;
    i < veinCount;
    i++
  ) {

    let row =
      2 +
      Math.floor(

        Math.random() *
        Math.max(
          1,
          rows -
          4
        )
      );


    let col =
      1 +
      Math.floor(

        Math.random() *
        Math.max(
          1,
          columns -
          2
        )
      );


    const length =
      5 +
      Math.floor(
        Math.random() *
        9
      );


    const path =
      [];


    for (
      let step = 0;
      step < length;
      step++
    ) {

      const tile =
        getRawTile(
          row,
          col
        );


      if (
        !tile ||
        !tile.active
      ) {

        break;
      }


      path.push({
        row,
        col
      });


      if (
        Math.random() <
        0.55
      ) {

        col +=
          Math.random() <
          0.5

            ? 1

            : -1;
      }


      else {

        row +=
          Math.random() <
          0.5

            ? 1

            : -1;
      }


      row =
        Math.max(

          1,

          Math.min(
            rows -
            2,
            row
          )
        );


      col =
        Math.max(

          1,

          Math.min(
            columns -
            2,
            col
          )
        );
    }


    if (
      path.length >=
      3
    ) {

      iceVeins.push(
        path
      );
    }
  }
}


// ======================================================
// TILE HELPERS
// ======================================================

function getTileAt(
  x,
  y
) {

  const col =
    Math.floor(

      (
        x -
        iceLeft
      ) /
      TILE_SIZE
    );


  const row =
    Math.floor(

      (
        y -
        iceTop
      ) /
      TILE_SIZE
    );


  const tile =
    getRawTile(
      row,
      col
    );


  if (
    !tile ||
    !tile.active
  ) {

    return null;
  }


  return tile;
}


function getTile(
  row,
  col
) {

  const tile =
    getRawTile(
      row,
      col
    );


  if (
    !tile ||
    !tile.active
  ) {

    return null;
  }


  return tile;
}


function isCoastTile(
  tile
) {

  if (
    !tile ||
    !tile.active
  ) {

    return false;
  }


  const neighbors = [

    [
      tile.row - 1,
      tile.col
    ],

    [
      tile.row + 1,
      tile.col
    ],

    [
      tile.row,
      tile.col - 1
    ],

    [
      tile.row,
      tile.col + 1
    ]
  ];


  for (
    const [
      row,
      col
    ] of neighbors
  ) {

    const neighbor =
      getRawTile(
        row,
        col
      );


    if (
      !neighbor ||
      !neighbor.active
    ) {

      return true;
    }
  }


  return false;
}


// ======================================================
// PLAYER
// ======================================================

const player = {

  x:
    width /
    2,


  y:
    height /
    2,


  radius:
    13,


  vx:
    0,


  vy:
    0,


  acceleration:
    1300,


  maxSpeed:
    372,


  drag:
    1.52,


  shield:
    0,


  invulnerableTimer:
    0
};


let trailTimer =
  0;


// ======================================================
// SHOCKWAVE
// ======================================================

const SHOCKWAVE_RADIUS =
  145;


const SHOCKWAVE_SAFE_RADIUS =
  45;


const SHOCKWAVE_ENEMY_RADIUS =
  190;


const SHOCKWAVE_COOLDOWN =
  5;


let shockwaveCooldown =
  0;


let shockwaveRings =
  [];


// ======================================================
// ENEMIES
// ======================================================

let enemies =
  [];


let enemySpawnTimer =
  0;


const FIRST_ENEMY_DELAY =
  5.5;


const ENEMY_RADIUS =
  12;


function getEnemyCap() {

  const time =
    getSurvivalSeconds();


  if (
    time <
    30
  ) {
    return 2;
  }


  if (
    time <
    60
  ) {
    return 3;
  }


  if (
    time <
    90
  ) {
    return 4;
  }


  if (
    time <
    120
  ) {
    return 5;
  }


  return 6;
}


function getEnemySpawnInterval() {

  const time =
    getSurvivalSeconds();


  return Math.max(

    2.15,

    5.3 -
    time *
    0.028
  );
}


// ======================================================
// POWER UPS
// ======================================================

let powerUps =
  [];


let powerUpSpawnTimer =
  11;


const POWERUP_LIFETIME =
  12;


const POWERUP_RADIUS =
  12;


// ======================================================
// FRACTURES
// ======================================================

let fractureEventTimer =
  7;


let fractureFlash =
  0;


// ======================================================
// EFFECTS
// ======================================================

let iceParticles =
  [];


let waterRipples =
  [];


let enemyParticles =
  [];


let pickupParticles =
  [];


let notificationTexts =
  [];


let playerTrails =
  [];


let enemySpawnRings =
  [];


let snowflakes =
  [];


let screenShake =
  0;


let impactFlash =
  0;


const MAX_ICE_PARTICLES =
  180;


const MAX_ENEMY_PARTICLES =
  80;


const MAX_PICKUP_PARTICLES =
  80;


const MAX_RIPPLES =
  60;


function pushCapped(
  array,
  item,
  max
) {

  array.push(
    item
  );


  if (
    array.length >
    max
  ) {

    array.splice(

      0,

      array.length -
      max
    );
  }
}


// ======================================================
// SNOW
// ======================================================

function buildSnow() {

  snowflakes =
    [];


  const amount =
    Math.floor(

      Math.min(

        120,

        width *
        height /
        10500
      )
    );


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    snowflakes.push({

      x:
        Math.random() *
        width,


      y:
        Math.random() *
        height,


      size:
        0.8 +
        Math.random() *
        2,


      speed:
        15 +
        Math.random() *
        35,


      drift:
        6 +
        Math.random() *
        18,


      phase:
        Math.random() *
        Math.PI *
        2
    });
  }
}


function updateSnow(
  dt
) {

  const time =
    performance.now() *
    0.001;


  for (
    const snow of
    snowflakes
  ) {

    snow.y +=
      snow.speed *
      dt;


    snow.x +=
      Math.sin(
        time +
        snow.phase
      ) *
      snow.drift *
      dt;


    if (
      snow.y >
      height +
      5
    ) {

      snow.y =
        -5;


      snow.x =
        Math.random() *
        width;
    }


    if (
      snow.x <
      -10
    ) {

      snow.x =
        width +
        10;
    }


    if (
      snow.x >
      width +
      10
    ) {

      snow.x =
        -10;
    }
  }
}


// ======================================================
// FLOATING ICE
// ======================================================

function updateFloatingIce(
  dt
) {

  const time =
    performance.now() *
    0.001;


  for (
    const chunk of
    floatingIceChunks
  ) {

    chunk.rotation +=
      chunk.rotationSpeed *
      dt;


    chunk.x =
      chunk.baseX +
      Math.sin(

        time *
        0.25 +
        chunk.phase

      ) *
      chunk.drift;


    chunk.y =
      chunk.baseY +
      Math.cos(

        time *
        0.2 +
        chunk.phase

      ) *
      chunk.drift;
  }
}


// ======================================================
// MENUS
// ======================================================

function updateMenuStats() {

  bestTimeElement.textContent =
    formatTime(
      bestTime
    );


  bestMedalElement.textContent =
    getMedal(
      bestTime
    );
}


function showMainMenu() {

  clearKeys();


  gameState =
    "menu";


  mainMenu.classList.remove(
    "hidden"
  );


  cosmeticsMenu.classList.add(
    "hidden"
  );


  pauseMenu.classList.add(
    "hidden"
  );


  gameOverScreen.classList.add(
    "hidden"
  );


  hud.classList.add(
    "hidden"
  );


  buildIce();


  enemies =
    [];


  powerUps =
    [];


  iceParticles =
    [];


  waterRipples =
    [];


  enemyParticles =
    [];


  pickupParticles =
    [];


  notificationTexts =
    [];


  playerTrails =
    [];


  enemySpawnRings =
    [];


  shockwaveRings =
    [];


  updateMenuStats();

  renderCosmetics();
}


function showCosmetics() {

  clearKeys();


  gameState =
    "cosmetics";


  mainMenu.classList.add(
    "hidden"
  );


  cosmeticsMenu.classList.remove(
    "hidden"
  );


  pauseMenu.classList.add(
    "hidden"
  );


  gameOverScreen.classList.add(
    "hidden"
  );


  hud.classList.add(
    "hidden"
  );


  renderCosmetics();
}


// ======================================================
// START GAME
// ======================================================

function startGame() {

  ensureAudio();

  clearKeys();

  buildIce();


  player.x =
    width /
    2;


  player.y =
    height /
    2;


  player.vx =
    0;


  player.vy =
    0;


  player.shield =
    0;


  player.invulnerableTimer =
    1;


  trailTimer =
    0;


  playerTrails =
    [];


  lastTileKey =
    null;


  enemiesDefeated =
    0;


  finalTime =
    0;


  runWasNewBest =
    false;


  shockwaveCooldown =
    0;


  shockwaveRings =
    [];


  enemies =
    [];


  enemySpawnRings =
    [];


  enemySpawnTimer =
    FIRST_ENEMY_DELAY;


  powerUps =
    [];


  powerUpSpawnTimer =
    11;


  fractureEventTimer =
    7;


  fractureFlash =
    0;


  iceParticles =
    [];


  waterRipples =
    [];


  enemyParticles =
    [];


  pickupParticles =
    [];


  notificationTexts =
    [];


  screenShake =
    0;


  impactFlash =
    0;


  totalPausedTime =
    0;


  pauseStartedAt =
    0;


  startTime =
    performance.now();


  timerElement.textContent =
    "00:00";


  shockwaveElement.textContent =
    "READY";


  mainMenu.classList.add(
    "hidden"
  );


  cosmeticsMenu.classList.add(
    "hidden"
  );


  pauseMenu.classList.add(
    "hidden"
  );


  gameOverScreen.classList.add(
    "hidden"
  );


  hud.classList.remove(
    "hidden"
  );


  gameState =
    "playing";
}


// ======================================================
// PAUSE
// ======================================================

function pauseGame() {

  if (
    gameState !==
    "playing"
  ) {
    return;
  }


  clearKeys();


  gameState =
    "paused";


  pauseStartedAt =
    performance.now();


  pauseMenu.classList.remove(
    "hidden"
  );
}


function resumeGame() {

  if (
    gameState !==
    "paused"
  ) {
    return;
  }


  clearKeys();


  totalPausedTime +=
    performance.now() -
    pauseStartedAt;


  pauseStartedAt =
    0;


  pauseMenu.classList.add(
    "hidden"
  );


  gameState =
    "playing";
}


// ======================================================
// GAME OVER
// ======================================================

function endGame(
  reason =
    "THE ICE GAVE WAY"
) {

  if (
    gameState !==
    "playing"
  ) {
    return;
  }


  finalTime =
    getElapsedTime();


  deathReason =
    reason;


  player.vx =
    0;


  player.vy =
    0;


  screenShake =
    Math.max(
      screenShake,
      12
    );


  impactFlash =
    Math.max(
      impactFlash,
      0.45
    );


  soundGameOver();


  runWasNewBest =
    finalTime >
    bestTime;


  if (
    runWasNewBest
  ) {

    bestTime =
      finalTime;


    localStorage.setItem(
      BEST_TIME_KEY,
      bestTime
    );
  }


  gameState =
    "gameover";


  deathTitleElement.textContent =
    deathReason;


  finalTimeElement.textContent =
    formatTime(
      finalTime
    );


  finalEnemiesElement.textContent =
    enemiesDefeated;


  const medal =
    getMedal(
      finalTime
    );


  medalDisplayElement.textContent =

    runWasNewBest

      ? `NEW BEST · ${medal}`

      : medal;


  hud.classList.add(
    "hidden"
  );


  gameOverScreen.classList.remove(
    "hidden"
  );


  updateMenuStats();

  renderCosmetics();
}


// ======================================================
// SHATTER TILE
// ======================================================

function shatterTile(
  tile,
  options = {}
) {

  if (
    !tile ||
    !tile.active ||
    tile.health <= 0
  ) {
    return;
  }


  const {

    strength = 8,

    playSound = true,

    particleCount = 10,

    createRipple = true

  } =
    options;


  tile.health =
    0;


  tile.fractureTimer =
    -1;


  if (
    playSound
  ) {

    soundIceBreak();
  }


  const centerX =
    tile.x +
    TILE_SIZE /
    2;


  const centerY =
    tile.y +
    TILE_SIZE /
    2;


  for (
    let i = 0;
    i < particleCount;
    i++
  ) {

    const angle =
      Math.random() *
      Math.PI *
      2;


    const speed =
      70 +
      Math.random() *
      145;


    pushCapped(

      iceParticles,

      {

        x:
          centerX,


        y:
          centerY,


        vx:
          Math.cos(
            angle
          ) *
          speed,


        vy:
          Math.sin(
            angle
          ) *
          speed,


        size:
          3 +
          Math.random() *
          7,


        rotation:
          Math.random() *
          Math.PI *
          2,


        rotationSpeed:
          (
            Math.random() -
            0.5
          ) *
          8,


        life:
          1
      },

      MAX_ICE_PARTICLES
    );
  }


  if (
    createRipple
  ) {

    pushCapped(

      waterRipples,

      {

        x:
          centerX,


        y:
          centerY,


        radius:
          8,


        life:
          1
      },

      MAX_RIPPLES
    );
  }


  screenShake =
    Math.max(
      screenShake,
      strength
    );
}


// ======================================================
// SHOCKWAVE
// ======================================================

function activateShockwave() {

  if (
    gameState !==
      "playing" ||
    shockwaveCooldown >
      0
  ) {
    return;
  }


  soundShockwave();


  shockwaveCooldown =
    SHOCKWAVE_COOLDOWN;


  shockwaveRings.push({

    x:
      player.x,


    y:
      player.y,


    radius:
      5,


    maxRadius:
      SHOCKWAVE_ENEMY_RADIUS,


    life:
      1
  });


  impactFlash =
    0.22;


  screenShake =
    Math.max(
      screenShake,
      12
    );


  const playerTile =
    getTileAt(
      player.x,
      player.y
    );


  for (
    const tile of tiles
  ) {

    if (
      !tile.active ||
      tile.health <= 0 ||
      tile === playerTile
    ) {
      continue;
    }


    const x =
      tile.x +
      TILE_SIZE /
      2;


    const y =
      tile.y +
      TILE_SIZE /
      2;


    const distance =
      Math.hypot(

        x -
        player.x,

        y -
        player.y
      );


    if (
      distance <=
        SHOCKWAVE_RADIUS &&
      distance >
        SHOCKWAVE_SAFE_RADIUS
    ) {

      shatterTile(

        tile,

        {

          strength:
            2,

          playSound:
            false,

          particleCount:
            3,

          createRipple:
            false
        }
      );
    }
  }


  for (
    const enemy of
    enemies
  ) {

    const dx =
      enemy.x -
      player.x;


    const dy =
      enemy.y -
      player.y;


    const distance =
      Math.hypot(
        dx,
        dy
      );


    if (
      distance >
      SHOCKWAVE_ENEMY_RADIUS
    ) {
      continue;
    }


    const safeDistance =
      Math.max(
        distance,
        1
      );


    const nx =
      dx /
      safeDistance;


    const ny =
      dy /
      safeDistance;


    const force =
      540 *
      (
        1 -
        distance /
        (
          SHOCKWAVE_ENEMY_RADIUS *
          1.25
        )
      );


    enemy.vx +=
      nx *
      force;


    enemy.vy +=
      ny *
      force;


    enemy.stun =
      0.42;
  }


  pushCapped(

    waterRipples,

    {

      x:
        player.x,


      y:
        player.y,


      radius:
        15,


      life:
        1.4
    },

    MAX_RIPPLES
  );
}


// ======================================================
// POWER UPS
// ======================================================

function spawnPowerUp() {

  const possible =
    tiles.filter(
      (tile) => {

        if (
          !tile.active ||
          tile.health <= 50 ||
          tile.fractureTimer > 0
        ) {
          return false;
        }


        const x =
          tile.x +
          TILE_SIZE /
          2;


        const y =
          tile.y +
          TILE_SIZE /
          2;


        return (
          Math.hypot(

            x -
            player.x,

            y -
            player.y
          ) >
          150
        );
      }
    );


  if (
    possible.length ===
    0
  ) {
    return;
  }


  const tile =
    possible[
      Math.floor(
        Math.random() *
        possible.length
      )
    ];


  const roll =
    Math.random();


  let type;


  if (
    roll <
    0.42
  ) {

    type =
      "repair";
  }


  else if (
    roll <
    0.72
  ) {

    type =
      "recharge";
  }


  else {

    type =
      "shield";
  }


  powerUps.push({

    type,


    x:
      tile.x +
      TILE_SIZE /
      2,


    y:
      tile.y +
      TILE_SIZE /
      2,


    radius:
      POWERUP_RADIUS,


    lifetime:
      POWERUP_LIFETIME,


    pulse:
      Math.random() *
      Math.PI *
      2,


    rotation:
      0
  });
}


function repairNearbyIce() {

  const radius =
    190;


  for (
    const tile of
    tiles
  ) {

    if (
      !tile.active ||
      tile.health <= 0
    ) {
      continue;
    }


    const x =
      tile.x +
      TILE_SIZE /
      2;


    const y =
      tile.y +
      TILE_SIZE /
      2;


    if (
      Math.hypot(

        x -
        player.x,

        y -
        player.y
      ) <=
      radius
    ) {

      tile.health =
        Math.min(

          100,

          tile.health +
          60
        );


      tile.fractureTimer =
        0;


      tile.fractureDuration =
        0;
    }
  }


  shockwaveRings.push({

    x:
      player.x,


    y:
      player.y,


    radius:
      10,


    maxRadius:
      radius,


    life:
      0.65
  });
}


function addNotification(
  text,
  color
) {

  notificationTexts.push({

    text,

    color,

    life:
      1.2,

    yOffset:
      0
  });
}


function collectPowerUp(
  powerUp
) {

  soundPickup(
    powerUp.type
  );


  if (
    powerUp.type ===
    "repair"
  ) {

    repairNearbyIce();


    addNotification(
      "ICE REPAIRED",
      "#8df7ff"
    );
  }


  else if (
    powerUp.type ===
    "recharge"
  ) {

    shockwaveCooldown =
      0;


    shockwaveElement.textContent =
      "READY";


    addNotification(
      "SHOCKWAVE READY",
      "#fff2a8"
    );
  }


  else {

    player.shield =
      1;


    addNotification(
      "SHIELD ACTIVE",
      "#c59cff"
    );
  }


  for (
    let i = 0;
    i < 14;
    i++
  ) {

    const angle =
      Math.random() *
      Math.PI *
      2;


    const speed =
      35 +
      Math.random() *
      90;


    pushCapped(

      pickupParticles,

      {

        x:
          powerUp.x,


        y:
          powerUp.y,


        vx:
          Math.cos(
            angle
          ) *
          speed,


        vy:
          Math.sin(
            angle
          ) *
          speed,


        life:
          1,


        size:
          2 +
          Math.random() *
          3,


        type:
          powerUp.type
      },

      MAX_PICKUP_PARTICLES
    );
  }
}


function updatePowerUps(
  dt
) {

  powerUpSpawnTimer -=
    dt;


  if (
    powerUpSpawnTimer <=
    0
  ) {

    if (
      powerUps.length <
      2
    ) {

      spawnPowerUp();
    }


    powerUpSpawnTimer =
      12 +
      Math.random() *
      5;
  }


  for (
    let i =
      powerUps.length -
      1;

    i >= 0;

    i--
  ) {

    const powerUp =
      powerUps[i];


    powerUp.lifetime -=
      dt;


    powerUp.pulse +=
      dt *
      5;


    powerUp.rotation +=
      dt *
      2;


    const tile =
      getTileAt(

        powerUp.x,

        powerUp.y
      );


    if (
      !tile ||
      tile.health <= 0 ||
      powerUp.lifetime <= 0
    ) {

      powerUps.splice(
        i,
        1
      );


      continue;
    }


    if (
      Math.hypot(

        player.x -
        powerUp.x,

        player.y -
        powerUp.y
      ) <
      player.radius +
      powerUp.radius +
      4
    ) {

      collectPowerUp(
        powerUp
      );


      powerUps.splice(
        i,
        1
      );
    }
  }
}


// ======================================================
// NATURAL FRACTURES
// ======================================================

function triggerFractureEvent() {

  const playerTile =
    getTileAt(
      player.x,
      player.y
    );


  const candidates =
    tiles.filter(
      (tile) => {

        if (
          !tile.active ||
          tile.health <= 0 ||
          tile.fractureTimer > 0 ||
          tile === playerTile
        ) {

          return false;
        }


        const x =
          tile.x +
          TILE_SIZE /
          2;


        const y =
          tile.y +
          TILE_SIZE /
          2;


        return (
          Math.hypot(

            x -
            player.x,

            y -
            player.y
          ) >
          175
        );
      }
    );


  if (
    candidates.length ===
    0
  ) {

    return;
  }


  const origin =
    candidates[
      Math.floor(
        Math.random() *
        candidates.length
      )
    ];


  const survival =
    getSurvivalSeconds();


  let clusterSize =
    1;


  if (
    survival >=
    35
  ) {

    clusterSize =
      2;
  }


  if (
    survival >=
    70
  ) {

    clusterSize =
      3;
  }


  if (
    survival >=
    115
  ) {

    clusterSize =
      4;
  }


  const offsets = [

    [0, 0],

    [1, 0],

    [-1, 0],

    [0, 1],

    [0, -1],

    [1, 1],

    [-1, -1],

    [1, -1],

    [-1, 1]
  ];


  offsets.sort(
    () =>
      Math.random() -
      0.5
  );


  let scheduled =
    0;


  for (
    const [
      rowOffset,
      colOffset
    ] of
    offsets
  ) {

    if (
      scheduled >=
      clusterSize
    ) {
      break;
    }


    const tile =
      getTile(

        origin.row +
        rowOffset,

        origin.col +
        colOffset
      );


    if (
      !tile ||
      tile.health <= 0 ||
      tile.fractureTimer > 0 ||
      tile === playerTile
    ) {
      continue;
    }


    const delay =
      Math.max(

        1.15,

        1.55 -
        survival *
        0.0015
      ) +
      scheduled *
      0.14;


    tile.fractureTimer =
      delay;


    tile.fractureDuration =
      delay;


    scheduled++;
  }


  fractureFlash =
    1;
}


function updateNaturalFractures(
  dt
) {

  fractureEventTimer -=
    dt;


  const survival =
    getSurvivalSeconds();


  if (
    fractureEventTimer <=
    0
  ) {

    triggerFractureEvent();


    fractureEventTimer =
      Math.max(

        2.35,

        6.7 -
        survival *
        0.032
      );
  }


  for (
    const tile of
    tiles
  ) {

    if (
      !tile.active ||
      tile.health <= 0 ||
      tile.fractureTimer <= 0
    ) {
      continue;
    }


    tile.fractureTimer -=
      dt;


    if (
      tile.fractureTimer <=
      0
    ) {

      tile.fractureTimer =
        0;


      shatterTile(

        tile,

        {

          strength:
            5,

          playSound:
            true,

          particleCount:
            7,

          createRipple:
            true
        }
      );
    }
  }


  fractureFlash -=
    dt *
    2.5;


  fractureFlash =
    Math.max(
      0,
      fractureFlash
    );
}


// ======================================================
// ENEMIES
// ======================================================

function getSpawnCandidates() {

  return tiles.filter(
    (tile) => {

      if (
        !tile.active ||
        tile.health <= 0 ||
        !isCoastTile(tile)
      ) {

        return false;
      }


      const x =
        tile.x +
        TILE_SIZE /
        2;


      const y =
        tile.y +
        TILE_SIZE /
        2;


      return (
        Math.hypot(

          x -
          player.x,

          y -
          player.y
        ) >
        300
      );
    }
  );
}


function spawnEnemy() {

  if (
    enemies.length >=
    getEnemyCap()
  ) {
    return;
  }


  const candidates =
    getSpawnCandidates();


  if (
    candidates.length ===
    0
  ) {
    return;
  }


  const tile =
    candidates[
      Math.floor(
        Math.random() *
        candidates.length
      )
    ];


  const x =
    tile.x +
    TILE_SIZE /
    2;


  const y =
    tile.y +
    TILE_SIZE /
    2;


  const survival =
    getSurvivalSeconds();


  const speedBonus =
    Math.min(

      32,

      survival *
      0.18
    );


  enemySpawnRings.push({

    x,

    y,

    radius:
      6,

    life:
      1
  });


  enemies.push({

    x,

    y,


    radius:
      ENEMY_RADIUS,


    speed:
      70 +
      Math.random() *
      16 +
      speedBonus,


    vx:
      0,


    vy:
      0,


    stun:
      0,


    pulse:
      Math.random() *
      Math.PI *
      2,


    spawnLife:
      0.7
  });
}


function destroyEnemy(
  index
) {

  const enemy =
    enemies[
      index
    ];


  enemiesDefeated++;


  soundEnemyFall();


  for (
    let i = 0;
    i < 7;
    i++
  ) {

    const angle =
      Math.random() *
      Math.PI *
      2;


    const speed =
      45 +
      Math.random() *
      90;


    pushCapped(

      enemyParticles,

      {

        x:
          enemy.x,


        y:
          enemy.y,


        vx:
          Math.cos(
            angle
          ) *
          speed,


        vy:
          Math.sin(
            angle
          ) *
          speed,


        radius:
          2 +
          Math.random() *
          3,


        life:
          0.8
      },

      MAX_ENEMY_PARTICLES
    );
  }


  pushCapped(

    waterRipples,

    {

      x:
        enemy.x,


      y:
        enemy.y,


      radius:
        5,


      life:
        0.7
    },

    MAX_RIPPLES
  );


  screenShake =
    Math.max(
      screenShake,
      2
    );


  enemies.splice(
    index,
    1
  );
}


function updateEnemies(
  dt
) {

  enemySpawnTimer -=
    dt;


  if (
    enemySpawnTimer <=
    0
  ) {

    spawnEnemy();


    enemySpawnTimer =
      getEnemySpawnInterval();
  }


  for (
    let i =
      enemies.length -
      1;

    i >= 0;

    i--
  ) {

    const enemy =
      enemies[i];


    enemy.spawnLife -=
      dt;


    if (
      enemy.stun >
      0
    ) {

      enemy.stun -=
        dt;
    }


    else if (
      enemy.spawnLife <=
      0
    ) {

      const dx =
        player.x -
        enemy.x;


      const dy =
        player.y -
        enemy.y;


      const distance =
        Math.hypot(
          dx,
          dy
        );


      if (
        distance >
        0
      ) {

        enemy.vx +=
          (
            dx /
            distance
          ) *
          enemy.speed *
          3 *
          dt;


        enemy.vy +=
          (
            dy /
            distance
          ) *
          enemy.speed *
          3 *
          dt;
      }
    }


    const velocity =
      Math.hypot(
        enemy.vx,
        enemy.vy
      );


    const maxSpeed =

      enemy.stun >
      0

        ? 520

        : enemy.speed;


    if (
      velocity >
      maxSpeed
    ) {

      enemy.vx =
        (
          enemy.vx /
          velocity
        ) *
        maxSpeed;


      enemy.vy =
        (
          enemy.vy /
          velocity
        ) *
        maxSpeed;
    }


    enemy.x +=
      enemy.vx *
      dt;


    enemy.y +=
      enemy.vy *
      dt;


    const drag =
      Math.exp(
        -2.3 *
        dt
      );


    enemy.vx *=
      drag;


    enemy.vy *=
      drag;


    enemy.pulse +=
      dt *
      5;


    const tile =
      getTileAt(
        enemy.x,
        enemy.y
      );


    if (
      !tile ||
      tile.health <= 0
    ) {

      destroyEnemy(
        i
      );


      continue;
    }


    if (
      enemy.spawnLife >
        0 ||
      player.invulnerableTimer >
        0
    ) {

      continue;
    }


    const playerDistance =
      Math.hypot(

        player.x -
        enemy.x,

        player.y -
        enemy.y
      );


    if (
      playerDistance <
      player.radius +
      enemy.radius
    ) {

      if (
        player.shield >
        0
      ) {

        player.shield =
          0;


        player.invulnerableTimer =
          0.8;


        soundShieldBreak();


        const dx =
          enemy.x -
          player.x;


        const dy =
          enemy.y -
          player.y;


        const distance =
          Math.max(

            Math.hypot(
              dx,
              dy
            ),

            1
          );


        enemy.vx =
          (
            dx /
            distance
          ) *
          430;


        enemy.vy =
          (
            dy /
            distance
          ) *
          430;


        enemy.stun =
          0.55;


        addNotification(
          "SHIELD BROKEN",
          "#c59cff"
        );


        impactFlash =
          0.22;


        screenShake =
          Math.max(
            screenShake,
            8
          );


        continue;
      }


      endGame(
        "CAUGHT"
      );


      return;
    }
  }
}


// ======================================================
// PLAYER UPDATE
// ======================================================

function updatePlayer(
  dt
) {

  player.invulnerableTimer =
    Math.max(

      0,

      player.invulnerableTimer -
      dt
    );


  let inputX =
    0;


  let inputY =
    0;


  if (
    keys["a"] ||
    keys["arrowleft"]
  ) {

    inputX -=
      1;
  }


  if (
    keys["d"] ||
    keys["arrowright"]
  ) {

    inputX +=
      1;
  }


  if (
    keys["w"] ||
    keys["arrowup"]
  ) {

    inputY -=
      1;
  }


  if (
    keys["s"] ||
    keys["arrowdown"]
  ) {

    inputY +=
      1;
  }


  const inputLength =
    Math.hypot(
      inputX,
      inputY
    );


  if (
    inputLength >
    0
  ) {

    inputX /=
      inputLength;


    inputY /=
      inputLength;


    player.vx +=
      inputX *
      player.acceleration *
      dt;


    player.vy +=
      inputY *
      player.acceleration *
      dt;
  }


  const speed =
    Math.hypot(
      player.vx,
      player.vy
    );


  if (
    speed >
    player.maxSpeed
  ) {

    player.vx =
      (
        player.vx /
        speed
      ) *
      player.maxSpeed;


    player.vy =
      (
        player.vy /
        speed
      ) *
      player.maxSpeed;
  }


  const drag =
    Math.exp(
      -player.drag *
      dt
    );


  player.vx *=
    drag;


  player.vy *=
    drag;


  player.x +=
    player.vx *
    dt;


  player.y +=
    player.vy *
    dt;


  trailTimer -=
    dt;


  const realSpeed =
    Math.hypot(
      player.vx,
      player.vy
    );


  if (
    trailTimer <=
      0 &&
    realSpeed >
      60
  ) {

    playerTrails.push({

      x:
        player.x,


      y:
        player.y,


      radius:
        7,


      life:
        1
    });


    if (
      playerTrails.length >
      40
    ) {

      playerTrails.shift();
    }


    trailTimer =
      0.05;
  }


  const tile =
    getTileAt(
      player.x,
      player.y
    );


  if (
    !tile
  ) {

    endGame(
      "LOST TO THE WATER"
    );


    return;
  }


  if (
    tile.health <=
    0
  ) {

    endGame(
      "THE ICE GAVE WAY"
    );


    return;
  }


  const tileKey =
    `${tile.row}-${tile.col}`;


  if (
    tileKey !==
    lastTileKey
  ) {

    tile.health -=
      34;


    lastTileKey =
      tileKey;
  }


  tile.health -=
    7.2 *
    dt;


  if (
    tile.health <=
    0
  ) {

    tile.health =
      1;


    shatterTile(

      tile,

      {

        strength:
          8,

        playSound:
          true,

        particleCount:
          10,

        createRipple:
          true
      }
    );


    endGame(
      "THE ICE GAVE WAY"
    );
  }
}


// ======================================================
// SHOCKWAVE UPDATE
// ======================================================

function updateShockwave(
  dt
) {

  shockwaveCooldown =
    Math.max(

      0,

      shockwaveCooldown -
      dt
    );


  shockwaveElement.textContent =

    shockwaveCooldown <=
    0

      ? "READY"

      : `${shockwaveCooldown.toFixed(1)}s`;


  for (
    let i =
      shockwaveRings.length -
      1;

    i >= 0;

    i--
  ) {

    const ring =
      shockwaveRings[i];


    ring.radius +=
      500 *
      dt;


    ring.life -=
      1.8 *
      dt;


    ring.radius =
      Math.min(

        ring.radius,

        ring.maxRadius
      );


    if (
      ring.life <=
      0
    ) {

      shockwaveRings.splice(
        i,
        1
      );
    }
  }
}


// ======================================================
// EFFECT UPDATE
// ======================================================

function updateEffects(
  dt
) {

  updateSnow(
    dt
  );


  updateFloatingIce(
    dt
  );


  for (
    let i =
      playerTrails.length -
      1;

    i >= 0;

    i--
  ) {

    const trail =
      playerTrails[i];


    trail.life -=
      dt *
      1.7;


    trail.radius +=
      dt *
      5;


    if (
      trail.life <=
      0
    ) {

      playerTrails.splice(
        i,
        1
      );
    }
  }


  for (
    let i =
      enemySpawnRings.length -
      1;

    i >= 0;

    i--
  ) {

    const ring =
      enemySpawnRings[i];


    ring.radius +=
      dt *
      75;


    ring.life -=
      dt *
      1.5;


    if (
      ring.life <=
      0
    ) {

      enemySpawnRings.splice(
        i,
        1
      );
    }
  }


  const groups = [

    iceParticles,

    enemyParticles,

    pickupParticles
  ];


  for (
    const group of
    groups
  ) {

    for (
      let i =
        group.length -
        1;

      i >= 0;

      i--
    ) {

      const particle =
        group[i];


      particle.x +=
        particle.vx *
        dt;


      particle.y +=
        particle.vy *
        dt;


      if (
        particle.rotation !==
        undefined
      ) {

        particle.rotation +=
          particle.rotationSpeed *
          dt;
      }


      const drag =
        Math.exp(
          -3 *
          dt
        );


      particle.vx *=
        drag;


      particle.vy *=
        drag;


      particle.life -=
        dt *
        1.8;


      if (
        particle.life <=
        0
      ) {

        group.splice(
          i,
          1
        );
      }
    }
  }


  for (
    let i =
      notificationTexts.length -
      1;

    i >= 0;

    i--
  ) {

    const note =
      notificationTexts[i];


    note.life -=
      dt;


    note.yOffset +=
      22 *
      dt;


    if (
      note.life <=
      0
    ) {

      notificationTexts.splice(
        i,
        1
      );
    }
  }


  for (
    let i =
      waterRipples.length -
      1;

    i >= 0;

    i--
  ) {

    const ripple =
      waterRipples[i];


    ripple.radius +=
      80 *
      dt;


    ripple.life -=
      1.5 *
      dt;


    if (
      ripple.life <=
      0
    ) {

      waterRipples.splice(
        i,
        1
      );
    }
  }


  screenShake *=
    Math.exp(
      -8 *
      dt
    );


  if (
    screenShake <
    0.05
  ) {

    screenShake =
      0;
  }


  impactFlash =
    Math.max(

      0,

      impactFlash -
      dt *
      2.5
    );
}


// ======================================================
// UPDATE
// ======================================================

function update(
  dt
) {

  if (
    gameState !==
    "playing"
  ) {

    return;
  }


  updatePlayer(
    dt
  );


  if (
    gameState !==
    "playing"
  ) {

    return;
  }


  updateEnemies(
    dt
  );


  if (
    gameState !==
    "playing"
  ) {

    return;
  }


  updatePowerUps(
    dt
  );


  updateNaturalFractures(
    dt
  );


  updateShockwave(
    dt
  );


  updateEffects(
    dt
  );


  timerElement.textContent =
    formatTime(
      getElapsedTime()
    );
}


// ======================================================
// OCEAN
// ======================================================

function drawOcean() {

  const theme =
    getArenaTheme();


  const gradient =
    ctx.createLinearGradient(
      0,
      0,
      0,
      height
    );


  gradient.addColorStop(
    0,
    theme.oceanTop
  );


  gradient.addColorStop(
    0.5,
    theme.oceanMiddle
  );


  gradient.addColorStop(
    1,
    theme.oceanBottom
  );


  ctx.fillStyle =
    gradient;


  ctx.fillRect(
    0,
    0,
    width,
    height
  );


  const time =
    performance.now() *
    0.001;


  ctx.strokeStyle =
    theme.wave;


  ctx.lineWidth =
    1;


  for (
    let y = 20;
    y < height;
    y += 34
  ) {

    ctx.beginPath();


    for (
      let x = 0;
      x <= width;
      x += 20
    ) {

      const wave =
        y +
        Math.sin(

          x *
          0.022 +

          time *
          1.2 +

          y *
          0.025

        ) *
        3;


      if (
        x ===
        0
      ) {

        ctx.moveTo(
          x,
          wave
        );
      }


      else {

        ctx.lineTo(
          x,
          wave
        );
      }
    }


    ctx.stroke();
  }
}


// ======================================================
// FLOATING ICE DRAW
// ======================================================

function drawFloatingIce() {

  const theme =
    getArenaTheme();


  for (
    const chunk of
    floatingIceChunks
  ) {

    ctx.save();


    ctx.translate(
      chunk.x,
      chunk.y
    );


    ctx.rotate(
      chunk.rotation
    );


    ctx.shadowColor =
      theme.underShadow;


    ctx.shadowBlur =
      14;


    ctx.fillStyle =
      theme.floatingFill;


    ctx.strokeStyle =
      theme.floatingStroke;


    ctx.lineWidth =
      1;


    ctx.beginPath();


    for (
      let i = 0;
      i < chunk.points;
      i++
    ) {

      const angle =
        (
          i /
          chunk.points
        ) *
        Math.PI *
        2;


      const variation =
        0.72 +
        hash2D(

          i,

          chunk.points,

          33

        ) *
        0.35;


      const radius =
        chunk.radius *
        variation;


      const x =
        Math.cos(
          angle
        ) *
        radius;


      const y =
        Math.sin(
          angle
        ) *
        radius *
        0.72;


      if (
        i ===
        0
      ) {

        ctx.moveTo(
          x,
          y
        );
      }


      else {

        ctx.lineTo(
          x,
          y
        );
      }
    }


    ctx.closePath();

    ctx.fill();

    ctx.stroke();


    ctx.restore();
  }
}


// ======================================================
// UNDER GLOW
// ======================================================

function drawArenaUnderGlow() {

  const theme =
    getArenaTheme();


  ctx.save();


  ctx.shadowColor =
    theme.underShadow;


  ctx.shadowBlur =
    26;


  ctx.fillStyle =
    theme.underGlow;


  for (
    const tile of
    tiles
  ) {

    if (
      !tile.active
    ) {
      continue;
    }


    ctx.fillRect(

      tile.x +
      5,

      tile.y +
      5,

      TILE_SIZE -
      10,

      TILE_SIZE -
      10
    );
  }


  ctx.restore();
}


// ======================================================
// BROKEN HOLES
// ======================================================

function drawBrokenHoles() {

  const theme =
    getArenaTheme();


  for (
    const tile of
    tiles
  ) {

    if (
      !tile.active ||
      tile.health >
      0
    ) {

      continue;
    }


    const gradient =
      ctx.createRadialGradient(

        tile.x +
        TILE_SIZE /
        2,

        tile.y +
        TILE_SIZE /
        2,

        3,


        tile.x +
        TILE_SIZE /
        2,

        tile.y +
        TILE_SIZE /
        2,

        TILE_SIZE *
        0.6
      );


    gradient.addColorStop(
      0,
      theme.holeCenter
    );


    gradient.addColorStop(
      1,
      theme.holeOuter
    );


    ctx.fillStyle =
      gradient;


    ctx.fillRect(

      tile.x +
      1,

      tile.y +
      1,

      TILE_SIZE -
      2,

      TILE_SIZE -
      2
    );
  }
}


// ======================================================
// CRACKS
// ======================================================

function drawCracks(
  tile,
  severity
) {

  ctx.strokeStyle =

    severity ===
    1

      ? "rgba(15,80,105,0.52)"

      : "rgba(0,25,48,0.90)";


  ctx.lineWidth =

    severity ===
    1

      ? 1.25

      : 2;


  const centerX =
    tile.x +
    TILE_SIZE /
    2;


  const centerY =
    tile.y +
    TILE_SIZE /
    2;


  const count =

    severity ===
    1

      ? 3

      : 7;


  for (
    let i = 0;
    i < count;
    i++
  ) {

    const seed =
      tile.row *
      97 +

      tile.col *
      131 +

      i *
      67;


    const angle =
      (
        seed %
        628
      ) /
      100;


    const length =
      TILE_SIZE *
      (
        0.18 +
        (
          seed %
          17
        ) /
        100
      );


    const endX =
      centerX +
      Math.cos(
        angle
      ) *
      length;


    const endY =
      centerY +
      Math.sin(
        angle
      ) *
      length;


    ctx.beginPath();


    ctx.moveTo(
      centerX,
      centerY
    );


    ctx.lineTo(
      endX,
      endY
    );


    if (
      severity ===
      2
    ) {

      ctx.lineTo(

        endX +
        Math.cos(
          angle +
          1
        ) *
        8,

        endY +
        Math.sin(
          angle +
          1
        ) *
        8
      );
    }


    ctx.stroke();
  }
}


// ======================================================
// FROST PATTERNS
// ======================================================

function drawFrostPattern(
  tile
) {

  if (
    tile.health <=
    35
  ) {
    return;
  }


  const theme =
    getArenaTheme();


  ctx.save();


  ctx.translate(
    tile.x,
    tile.y
  );


  ctx.strokeStyle =
    theme.frost;


  ctx.lineWidth =
    1;


  const seed =
    tile.frostSeed;


  const x =
    8 +
    seed *
    25;


  const y =
    9 +
    (
      1 -
      seed
    ) *
    19;


  ctx.beginPath();


  if (
    tile.frostType ===
    0
  ) {

    ctx.moveTo(
      x,
      y
    );


    ctx.lineTo(
      x +
      12,
      y +
      8
    );


    ctx.lineTo(
      x +
      18,
      y +
      4
    );
  }


  else if (
    tile.frostType ===
    1
  ) {

    ctx.arc(
      x +
      8,
      y +
      8,
      9,
      0.3,
      2.4
    );
  }


  else if (
    tile.frostType ===
    2
  ) {

    ctx.moveTo(
      x,
      y +
      10
    );


    ctx.lineTo(
      x +
      20,
      y
    );
  }


  else {

    ctx.moveTo(
      x +
      3,
      y
    );


    ctx.lineTo(
      x +
      10,
      y +
      14
    );


    ctx.lineTo(
      x +
      18,
      y +
      5
    );
  }


  ctx.stroke();


  ctx.restore();
}


// ======================================================
// ICE DRAW
// ======================================================

function drawIce() {

  const theme =
    getArenaTheme();


  const gap =
    1.4;


  const time =
    performance.now() *
    0.001;


  for (
    const tile of
    tiles
  ) {

    if (
      !tile.active ||
      tile.health <=
      0
    ) {

      continue;
    }


    let fill;


    if (
      tile.health >
      70
    ) {

      fill =
        theme.iceHealthy;
    }


    else if (
      tile.health >
      35
    ) {

      fill =
        theme.iceMedium;
    }


    else {

      fill =
        theme.iceLow;
    }


    if (
      tile.fractureTimer >
      0
    ) {

      const pulse =
        (
          Math.sin(
            performance.now() *
            0.025
          ) +
          1
        ) /
        2;


      fill =
        `rgba(
          ${190 + pulse * 45},
          ${205 + pulse * 35},
          ${220 + pulse * 30},
          0.98
        )`;
    }


    ctx.fillStyle =
      fill;


    ctx.fillRect(

      tile.x +
      gap,

      tile.y +
      gap,

      TILE_SIZE -
      gap *
      2,

      TILE_SIZE -
      gap *
      2
    );


    ctx.strokeStyle =
      theme.iceStroke;


    ctx.lineWidth =
      1;


    ctx.strokeRect(

      tile.x +
      gap,

      tile.y +
      gap,

      TILE_SIZE -
      gap *
      2,

      TILE_SIZE -
      gap *
      2
    );


    const shimmer =
      (
        Math.sin(

          time *
          1.3 +

          tile.shimmer
        ) +
        1
      ) /
      2;


    ctx.fillStyle =
      `rgba(
        255,
        255,
        255,
        ${0.02 + shimmer * 0.035}
      )`;


    ctx.fillRect(

      tile.x +
      5,

      tile.y +
      5,

      TILE_SIZE -
      10,

      5
    );


    drawFrostPattern(
      tile
    );


    if (
      tile.fractureTimer >
      0
    ) {

      const progress =
        1 -
        tile.fractureTimer /
        tile.fractureDuration;


      ctx.save();


      ctx.shadowColor =
        "#ffffff";


      ctx.shadowBlur =
        12 +
        progress *
        18;


      ctx.strokeStyle =
        `rgba(
          255,
          255,
          255,
          ${0.45 + progress * 0.55}
        )`;


      ctx.lineWidth =
        2 +
        progress *
        2;


      ctx.strokeRect(

        tile.x +
        3,

        tile.y +
        3,

        TILE_SIZE -
        6,

        TILE_SIZE -
        6
      );


      ctx.restore();


      drawCracks(
        tile,
        2
      );
    }


    else if (
      tile.health <=
        70 &&
      tile.health >
        35
    ) {

      drawCracks(
        tile,
        1
      );
    }


    else if (
      tile.health <=
      35
    ) {

      drawCracks(
        tile,
        2
      );
    }
  }
}


// ======================================================
// ICE VEINS
// ======================================================

function drawIceVeins() {

  const theme =
    getArenaTheme();


  ctx.save();


  ctx.strokeStyle =
    theme.vein;


  ctx.lineWidth =
    1.4;


  for (
    const path of
    iceVeins
  ) {

    for (
      let i = 0;
      i <
      path.length -
      1;
      i++
    ) {

      const a =
        getTile(
          path[i].row,
          path[i].col
        );


      const b =
        getTile(
          path[i + 1].row,
          path[i + 1].col
        );


      if (
        !a ||
        !b ||
        a.health <= 0 ||
        b.health <= 0
      ) {

        continue;
      }


      ctx.beginPath();


      ctx.moveTo(

        a.x +
        TILE_SIZE /
        2,

        a.y +
        TILE_SIZE /
        2
      );


      ctx.lineTo(

        b.x +
        TILE_SIZE /
        2,

        b.y +
        TILE_SIZE /
        2
      );


      ctx.stroke();
    }
  }


  ctx.restore();
}


// ======================================================
// ARENA EDGE
// ======================================================

function drawArenaEdgeGlow() {

  const theme =
    getArenaTheme();


  ctx.save();


  ctx.strokeStyle =
    theme.edge;


  ctx.lineWidth =
    2.2;


  ctx.shadowColor =
    theme.edgeShadow;


  ctx.shadowBlur =
    16;


  for (
    const tile of
    tiles
  ) {

    if (
      !tile.active ||
      tile.health <=
      0
    ) {

      continue;
    }


    const top =
      getRawTile(
        tile.row -
        1,
        tile.col
      );


    const bottom =
      getRawTile(
        tile.row +
        1,
        tile.col
      );


    const left =
      getRawTile(
        tile.row,
        tile.col -
        1
      );


    const right =
      getRawTile(
        tile.row,
        tile.col +
        1
      );


    if (
      !top ||
      !top.active
    ) {

      ctx.beginPath();

      ctx.moveTo(
        tile.x,
        tile.y
      );

      ctx.lineTo(
        tile.x +
        TILE_SIZE,
        tile.y
      );

      ctx.stroke();
    }


    if (
      !bottom ||
      !bottom.active
    ) {

      ctx.beginPath();

      ctx.moveTo(
        tile.x,
        tile.y +
        TILE_SIZE
      );

      ctx.lineTo(
        tile.x +
        TILE_SIZE,
        tile.y +
        TILE_SIZE
      );

      ctx.stroke();
    }


    if (
      !left ||
      !left.active
    ) {

      ctx.beginPath();

      ctx.moveTo(
        tile.x,
        tile.y
      );

      ctx.lineTo(
        tile.x,
        tile.y +
        TILE_SIZE
      );

      ctx.stroke();
    }


    if (
      !right ||
      !right.active
    ) {

      ctx.beginPath();

      ctx.moveTo(
        tile.x +
        TILE_SIZE,
        tile.y
      );

      ctx.lineTo(
        tile.x +
        TILE_SIZE,
        tile.y +
        TILE_SIZE
      );

      ctx.stroke();
    }
  }


  ctx.restore();
}


// ======================================================
// BROKEN HOLE RIMS
// ======================================================

function drawBrokenHoleRims() {

  const theme =
    getArenaTheme();


  ctx.save();


  ctx.strokeStyle =
    theme.brokenRim;


  ctx.lineWidth =
    1.7;


  ctx.shadowColor =
    theme.brokenShadow;


  ctx.shadowBlur =
    7;


  for (
    const tile of
    tiles
  ) {

    if (
      !tile.active ||
      tile.health >
      0
    ) {

      continue;
    }


    const top =
      getRawTile(
        tile.row -
        1,
        tile.col
      );


    const bottom =
      getRawTile(
        tile.row +
        1,
        tile.col
      );


    const left =
      getRawTile(
        tile.row,
        tile.col -
        1
      );


    const right =
      getRawTile(
        tile.row,
        tile.col +
        1
      );


    if (
      top &&
      top.active &&
      top.health >
      0
    ) {

      ctx.beginPath();

      ctx.moveTo(
        tile.x +
        3,
        tile.y +
        2
      );

      ctx.lineTo(
        tile.x +
        TILE_SIZE -
        3,
        tile.y +
        2
      );

      ctx.stroke();
    }


    if (
      bottom &&
      bottom.active &&
      bottom.health >
      0
    ) {

      ctx.beginPath();

      ctx.moveTo(
        tile.x +
        3,
        tile.y +
        TILE_SIZE -
        2
      );

      ctx.lineTo(
        tile.x +
        TILE_SIZE -
        3,
        tile.y +
        TILE_SIZE -
        2
      );

      ctx.stroke();
    }


    if (
      left &&
      left.active &&
      left.health >
      0
    ) {

      ctx.beginPath();

      ctx.moveTo(
        tile.x +
        2,
        tile.y +
        3
      );

      ctx.lineTo(
        tile.x +
        2,
        tile.y +
        TILE_SIZE -
        3
      );

      ctx.stroke();
    }


    if (
      right &&
      right.active &&
      right.health >
      0
    ) {

      ctx.beginPath();

      ctx.moveTo(
        tile.x +
        TILE_SIZE -
        2,
        tile.y +
        3
      );

      ctx.lineTo(
        tile.x +
        TILE_SIZE -
        2,
        tile.y +
        TILE_SIZE -
        3
      );

      ctx.stroke();
    }
  }


  ctx.restore();
}


// ======================================================
// TRAIL
// ======================================================

function drawPlayerTrail() {

  const theme =
    getTrailTheme();


  for (
    let i = 0;
    i <
    playerTrails.length;
    i++
  ) {

    const trail =
      playerTrails[i];


    ctx.save();


    ctx.globalAlpha =
      trail.life *
      0.28;


    ctx.shadowColor =
      theme.secondary;


    ctx.shadowBlur =
      10;


    ctx.fillStyle =
      i % 2 === 0

        ? theme.color

        : theme.secondary;


    ctx.beginPath();


    ctx.arc(

      trail.x,

      trail.y,

      trail.radius,

      0,

      Math.PI *
      2
    );


    ctx.fill();


    ctx.restore();
  }
}


// ======================================================
// POWER UPS
// ======================================================

function drawPowerUps() {

  for (
    const powerUp of
    powerUps
  ) {

    ctx.save();


    ctx.translate(
      powerUp.x,
      powerUp.y
    );


    ctx.rotate(
      powerUp.rotation
    );


    const pulse =
      1 +
      Math.sin(
        powerUp.pulse
      ) *
      0.13;


    ctx.scale(
      pulse,
      pulse
    );


    let color =
      "#8df7ff";


    if (
      powerUp.type ===
      "recharge"
    ) {

      color =
        "#ffe784";
    }


    if (
      powerUp.type ===
      "shield"
    ) {

      color =
        "#c59cff";
    }


    ctx.shadowColor =
      color;


    ctx.shadowBlur =
      26;


    ctx.fillStyle =
      color;


    ctx.beginPath();


    ctx.moveTo(
      0,
      -14
    );


    ctx.lineTo(
      12,
      0
    );


    ctx.lineTo(
      0,
      14
    );


    ctx.lineTo(
      -12,
      0
    );


    ctx.closePath();


    ctx.fill();


    ctx.restore();
  }
}


// ======================================================
// WATER RIPPLES
// ======================================================

function drawWaterRipples() {

  const theme =
    getArenaTheme();


  for (
    const ripple of
    waterRipples
  ) {

    ctx.save();


    ctx.globalAlpha =
      Math.max(
        0,
        ripple.life
      );


    ctx.strokeStyle =
      theme.ripple;


    ctx.lineWidth =
      2;


    ctx.beginPath();


    ctx.arc(

      ripple.x,

      ripple.y,

      ripple.radius,

      0,

      Math.PI *
      2
    );


    ctx.stroke();


    ctx.restore();
  }
}


// ======================================================
// ENEMY SPAWN RINGS
// ======================================================

function drawEnemySpawnRings() {

  for (
    const ring of
    enemySpawnRings
  ) {

    ctx.save();


    ctx.globalAlpha =
      ring.life;


    ctx.strokeStyle =
      "#ff5d78";


    ctx.lineWidth =
      3;


    ctx.shadowColor =
      "#ff304e";


    ctx.shadowBlur =
      18;


    ctx.beginPath();


    ctx.arc(

      ring.x,

      ring.y,

      ring.radius,

      0,

      Math.PI *
      2
    );


    ctx.stroke();


    ctx.restore();
  }
}


// ======================================================
// SHOCKWAVE DRAW
// ======================================================

function drawShockwaves() {

  const theme =
    getPlayerTheme();


  for (
    const ring of
    shockwaveRings
  ) {

    ctx.save();


    const alpha =
      Math.max(
        0,
        ring.life
      );


    ctx.globalAlpha =
      alpha;


    ctx.strokeStyle =
      theme.highlight;


    ctx.lineWidth =
      8 *
      alpha;


    ctx.shadowColor =
      theme.glow;


    ctx.shadowBlur =
      35;


    ctx.beginPath();


    ctx.arc(

      ring.x,

      ring.y,

      ring.radius,

      0,

      Math.PI *
      2
    );


    ctx.stroke();


    ctx.restore();
  }
}


// ======================================================
// PARTICLES
// ======================================================

function drawParticles() {

  const arena =
    getArenaTheme();


  for (
    const particle of
    iceParticles
  ) {

    ctx.save();


    ctx.translate(
      particle.x,
      particle.y
    );


    ctx.rotate(
      particle.rotation
    );


    ctx.globalAlpha =
      particle.life;


    ctx.fillStyle =
      arena.edge;


    ctx.beginPath();


    ctx.moveTo(
      -particle.size,
      particle.size
    );


    ctx.lineTo(
      0,
      -particle.size
    );


    ctx.lineTo(
      particle.size,
      particle.size
    );


    ctx.closePath();


    ctx.fill();


    ctx.restore();
  }


  for (
    const particle of
    enemyParticles
  ) {

    ctx.save();


    ctx.globalAlpha =
      particle.life;


    ctx.fillStyle =
      "#ff5b72";


    ctx.beginPath();


    ctx.arc(

      particle.x,

      particle.y,

      particle.radius,

      0,

      Math.PI *
      2
    );


    ctx.fill();


    ctx.restore();
  }


  for (
    const particle of
    pickupParticles
  ) {

    ctx.save();


    ctx.globalAlpha =
      particle.life;


    ctx.fillStyle =

      particle.type ===
      "repair"

        ? "#8df7ff"

        : particle.type ===
          "recharge"

        ? "#fff2a8"

        : "#c59cff";


    ctx.beginPath();


    ctx.arc(

      particle.x,

      particle.y,

      particle.size,

      0,

      Math.PI *
      2
    );


    ctx.fill();


    ctx.restore();
  }
}


// ======================================================
// ENEMIES DRAW
// ======================================================

function drawEnemies() {

  for (
    const enemy of
    enemies
  ) {

    ctx.save();


    let alpha =
      1;


    if (
      enemy.spawnLife >
      0
    ) {

      alpha =
        Math.max(

          0.25,

          1 -
          enemy.spawnLife /
          0.7
        );
    }


    ctx.globalAlpha =
      alpha;


    const pulse =
      1 +
      Math.sin(
        enemy.pulse
      ) *
      0.08;


    ctx.translate(
      enemy.x,
      enemy.y
    );


    ctx.scale(
      pulse,
      pulse
    );


    ctx.shadowColor =
      "#ff304e";


    ctx.shadowBlur =
      24;


    ctx.fillStyle =
      "#8f1830";


    ctx.beginPath();


    ctx.arc(

      0,

      0,

      enemy.radius,

      0,

      Math.PI *
      2
    );


    ctx.fill();


    ctx.fillStyle =
      "#ff7185";


    ctx.beginPath();


    ctx.arc(

      -3,

      -3,

      4,

      0,

      Math.PI *
      2
    );


    ctx.fill();


    ctx.fillStyle =
      "#ffffff";


    ctx.shadowBlur =
      0;


    ctx.beginPath();


    ctx.arc(

      -4,

      -4,

      1.5,

      0,

      Math.PI *
      2
    );


    ctx.fill();


    ctx.restore();
  }
}


// ======================================================
// PLAYER DRAW
// ======================================================

function drawPlayer() {

  if (
    gameState ===
      "menu" ||
    gameState ===
      "cosmetics"
  ) {

    return;
  }


  const theme =
    getPlayerTheme();


  ctx.save();


  if (
    player.shield >
    0
  ) {

    const pulse =
      1 +
      Math.sin(
        performance.now() *
        0.008
      ) *
      0.08;


    ctx.strokeStyle =
      "#c59cff";


    ctx.lineWidth =
      3;


    ctx.shadowColor =
      "#c59cff";


    ctx.shadowBlur =
      22;


    ctx.beginPath();


    ctx.arc(

      player.x,

      player.y,

      22 *
      pulse,

      0,

      Math.PI *
      2
    );


    ctx.stroke();
  }


  if (
    player.invulnerableTimer >
    0
  ) {

    ctx.globalAlpha =

      Math.sin(
        performance.now() *
        0.04
      ) >
      0

        ? 0.45

        : 1;
  }


  ctx.shadowColor =
    theme.glow;


  ctx.shadowBlur =
    25;


  ctx.fillStyle =
    theme.core;


  ctx.beginPath();


  ctx.arc(

    player.x,

    player.y,

    player.radius,

    0,

    Math.PI *
    2
  );


  ctx.fill();


  ctx.strokeStyle =
    theme.outline;


  ctx.lineWidth =
    1.5;


  ctx.stroke();


  ctx.fillStyle =
    theme.highlight;


  ctx.beginPath();


  ctx.arc(

    player.x -
    4,

    player.y -
    4,

    4,

    0,

    Math.PI *
    2
  );


  ctx.fill();


  ctx.restore();
}


// ======================================================
// SNOW
// ======================================================

function drawSnow() {

  ctx.save();


  for (
    const snow of
    snowflakes
  ) {

    ctx.globalAlpha =
      0.25 +
      snow.size *
      0.12;


    ctx.fillStyle =
      "#e7fbff";


    ctx.beginPath();


    ctx.arc(

      snow.x,

      snow.y,

      snow.size,

      0,

      Math.PI *
      2
    );


    ctx.fill();
  }


  ctx.restore();
}


// ======================================================
// NOTIFICATIONS
// ======================================================

function drawNotifications() {

  if (
    gameState !==
      "playing" &&
    gameState !==
      "paused"
  ) {

    return;
  }


  for (
    let i = 0;
    i < notificationTexts.length;
    i++
  ) {

    const note =
      notificationTexts[
        i
      ];


    ctx.save();


    ctx.globalAlpha =
      Math.min(
        1,
        note.life
      );


    ctx.textAlign =
      "center";


    ctx.font =
      "bold 15px Arial";


    ctx.fillStyle =
      note.color;


    ctx.fillText(

      note.text,

      player.x,

      player.y -
      35 -
      note.yOffset -
      i *
      18
    );


    ctx.restore();
  }
}


// ======================================================
// HUD INFO
// ======================================================

function getThreatLevel() {

  const time =
    getSurvivalSeconds();


  if (
    time <
    30
  ) {
    return "LOW";
  }


  if (
    time <
    60
  ) {
    return "RISING";
  }


  if (
    time <
    100
  ) {
    return "HIGH";
  }


  return "EXTREME";
}


function drawInfoHUD() {

  if (
    gameState !==
      "playing" &&
    gameState !==
      "paused"
  ) {

    return;
  }


  ctx.save();


  ctx.textAlign =
    "right";


  ctx.font =
    "12px Arial";


  ctx.fillStyle =
    "rgba(160,225,245,0.80)";


  ctx.fillText(

    `SHATTERED ${enemiesDefeated}`,

    width -
    24,

    32
  );


  const threat =
    getThreatLevel();


  ctx.fillStyle =

    threat ===
    "EXTREME"

      ? "#ff7185"

      : "rgba(160,225,245,0.80)";


  ctx.fillText(

    `THREAT ${threat}`,

    width -
    24,

    51
  );


  if (
    player.shield >
    0
  ) {

    ctx.fillStyle =
      "#c59cff";


    ctx.fillText(

      "SHIELD ACTIVE",

      width -
      24,

      70
    );
  }


  ctx.restore();
}


// ======================================================
// VIGNETTE
// ======================================================

function drawVignette() {

  const gradient =
    ctx.createRadialGradient(

      width /
      2,

      height /
      2,

      Math.min(
        width,
        height
      ) *
      0.25,


      width /
      2,

      height /
      2,

      Math.max(
        width,
        height
      ) *
      0.72
    );


  gradient.addColorStop(
    0,
    "rgba(0,0,0,0)"
  );


  gradient.addColorStop(
    1,
    "rgba(0,5,12,0.48)"
  );


  ctx.fillStyle =
    gradient;


  ctx.fillRect(
    0,
    0,
    width,
    height
  );
}


// ======================================================
// FLASH
// ======================================================

function drawImpactFlash() {

  if (
    impactFlash <=
    0
  ) {

    return;
  }


  ctx.save();


  ctx.globalAlpha =
    impactFlash *
    0.4;


  ctx.fillStyle =
    "#dffbff";


  ctx.fillRect(
    0,
    0,
    width,
    height
  );


  ctx.restore();
}


// ======================================================
// DRAW
// ======================================================

function draw() {

  ctx.clearRect(
    0,
    0,
    width,
    height
  );


  drawOcean();

  drawFloatingIce();

  drawArenaUnderGlow();

  drawBrokenHoles();


  ctx.save();


  if (
    screenShake >
    0
  ) {

    ctx.translate(

      (
        Math.random() -
        0.5
      ) *
      screenShake *
      2,

      (
        Math.random() -
        0.5
      ) *
      screenShake *
      2
    );
  }


  drawWaterRipples();

  drawIce();

  drawIceVeins();

  drawArenaEdgeGlow();

  drawBrokenHoleRims();

  drawPlayerTrail();

  drawPowerUps();

  drawEnemySpawnRings();

  drawShockwaves();

  drawParticles();

  drawEnemies();

  drawPlayer();

  drawNotifications();


  ctx.restore();


  drawSnow();

  drawVignette();

  drawImpactFlash();

  drawInfoHUD();
}


// ======================================================
// LOOP
// ======================================================

let previousTime =
  performance.now();


const MAX_PHYSICS_STEP =
  1 /
  60;


function gameLoop(
  currentTime
) {

  let deltaTime =
    (
      currentTime -
      previousTime
    ) /
    1000;


  previousTime =
    currentTime;


  deltaTime =
    Math.min(
      deltaTime,
      0.1
    );


  if (
    gameState ===
    "playing"
  ) {

    let remaining =
      deltaTime;


    while (
      remaining >
      0
    ) {

      const step =
        Math.min(

          MAX_PHYSICS_STEP,

          remaining
        );


      update(
        step
      );


      remaining -=
        step;


      if (
        gameState !==
        "playing"
      ) {

        break;
      }
    }
  }


  else {

    updateSnow(
      deltaTime
    );


    updateFloatingIce(
      deltaTime
    );
  }


  draw();


  requestAnimationFrame(
    gameLoop
  );
}


// ======================================================
// RESIZE
// ======================================================

window.addEventListener(
  "resize",
  () => {

    width =
      window.innerWidth;


    height =
      window.innerHeight;


    canvas.width =
      width;


    canvas.height =
      height;


    buildSnow();


    if (
      gameState ===
        "playing" ||
      gameState ===
        "paused"
    ) {

      startGame();
    }


    else {

      buildIce();
    }
  }
);


// ======================================================
// START
// ======================================================

loadCosmetics();

buildIce();

buildSnow();

updateMenuStats();

updateSoundButtons();

renderCosmetics();

showMainMenu();

requestAnimationFrame(
  gameLoop
);