const GAME_WIDTH = 390;
const GAME_HEIGHT = 844;
const CAMPUS_WORLD_WIDTH = 760;
const CAMPUS_WORLD_HEIGHT = 1040;
const CAMPUS_TOP_UI_HEIGHT = 146;
const CAMPUS_BOTTOM_UI_HEIGHT = 178;
const STORAGE_KEY = "circleOfTrustPhaserProgress";
const AMIRA_POSES = [
  { key: "amiraRight", width: 37, angle: 1.5 },
  { key: "amiraRight", width: 36, angle: 1 },
  { key: "amiraRight", width: 34, angle: 0.5 },
  { key: "amiraFront", width: 31, angle: -0.5 },
  { key: "amiraFront", width: 30, angle: 0 },
  { key: "amiraFront", width: 31, angle: 0.5 },
  { key: "amiraLeft", width: 34, angle: -0.5 },
  { key: "amiraLeft", width: 36, angle: -1 },
  { key: "amiraLeft", width: 37, angle: -1.5 },
  { key: "amiraLeft", width: 35, angle: -1 },
  { key: "amiraLeft", width: 33, angle: -0.5 },
  { key: "amiraBack", width: 31, angle: 0.5 },
  { key: "amiraBack", width: 30, angle: 0 },
  { key: "amiraBack", width: 31, angle: -0.5 },
  { key: "amiraRight", width: 33, angle: 0.5 },
  { key: "amiraRight", width: 35, angle: 1 }
];

function viewportWidth() {
  return Math.ceil(window.visualViewport?.width || document.documentElement.clientWidth || window.innerWidth || GAME_WIDTH);
}

function viewportHeight() {
  return Math.ceil(window.visualViewport?.height || document.documentElement.clientHeight || window.innerHeight || GAME_HEIGHT);
}

const missions = [
  {
    id: "duel",
    title: "Footwear Duel",
    short: "Head to head",
    xp: 80,
    time: "2 min",
    color: 0xd77458,
    x: 110,
    y: 260,
    room: "Boxing Ring",
    prompt: "Which shoe deserves to win the next sample bout?"
  },
  {
    id: "rank",
    title: "Intent Studio",
    short: "Rank intent",
    xp: 110,
    time: "90 sec",
    color: 0x77a7c7,
    x: 328,
    y: 198,
    room: "Atelier",
    prompt: "Stack the concepts by strongest purchase intent."
  },
  {
    id: "price",
    title: "Price Lab",
    short: "Price ceiling",
    xp: 100,
    time: "2 min",
    color: 0xb99adf,
    x: 548,
    y: 438,
    room: "Laboratory",
    prompt: "Find the highest comfortable buying price."
  },
  {
    id: "occasion",
    title: "Occasion Plaza",
    short: "Occasion fit",
    xp: 90,
    time: "90 sec",
    color: 0x72927d,
    x: 212,
    y: 664,
    room: "Styling Plaza",
    prompt: "Match each shoe to the moment where it belongs."
  },
  {
    id: "founder",
    title: "Founder Desk",
    short: "Action call",
    xp: 120,
    time: "1 min",
    color: 0xe5bc58,
    x: 650,
    y: 836,
    room: "Private Office",
    prompt: "Choose what the founder should do next."
  }
];

const tiers = [
  { name: "Founding Signal Partner", xp: 0 },
  { name: "Trend Scout", xp: 100 },
  { name: "Category Insider", xp: 200 },
  { name: "Launch Circle", xp: 300 },
  { name: "Product Council Member", xp: 400 },
  { name: "Market Oracle", xp: 500 }
];

const RANK_META = [
  { short: "Signal", perk: "Your first product votes count.", color: 0xd77458, accent: 0xfff0c7 },
  { short: "Scout", perk: "Spot early design momentum.", color: 0x77a7c7, accent: 0xeaf5fb },
  { short: "Insider", perk: "Unlock category-level recaps.", color: 0x72927d, accent: 0xeef6ef },
  { short: "Launch", perk: "Enter launch-circle rewards.", color: 0xe5bc58, accent: 0xfff0c7 },
  { short: "Council", perk: "Shape founder decisions.", color: 0xb99adf, accent: 0xf4ecff },
  { short: "Oracle", perk: "Top-tier market signal status.", color: 0x26221f, accent: 0xf1eee8 }
];

const SHOE_CONCEPTS = Array.from({ length: 8 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  const palette = ["Cream", "Black", "Blush", "Nude", "Sage", "Light Blue", "Oat", "Rose"];
  const silhouettes = ["Mary Jane", "Loafer", "Ballet Flat", "Slingback", "Mule", "Platform Flat", "Penny Loafer", "Soft Pump"];
  return {
    id: `concept-${number}`,
    name: `Factory Concept ${number}`,
    factoryCode: `SS-FY26-${number}`,
    category: index % 2 ? "Factory Shortlist" : "Comfort Platform",
    material: index % 3 === 0 ? "Mesh upper" : "Soft leather blend",
    colorway: palette[index],
    silhouette: silhouettes[index],
    priceBand: "$139-$169",
    image: `https://raw.githubusercontent.com/chamaurise/sundaystaples-innercircle/main/shoe-concepts/concept-${number}.png`,
    tags: [palette[index], silhouettes[index], index % 2 ? "Work-to-weekend" : "Comfort-led"]
  };
});

const DUEL_PAIRS = [
  ["concept-01", "concept-02"],
  ["concept-03", "concept-04"],
  ["concept-05", "concept-06"],
  ["concept-07", "concept-08"]
];

const DUEL_DRIVER_TAGS = ["Comfort", "Polish", "Versatility", "Newness"];
const DUEL_STORAGE_KEY = "circleOfTrustFootwearDuel";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { xp: 0, completed: [] };
  } catch {
    return { xp: 0, completed: [] };
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function conceptById(id) {
  return SHOE_CONCEPTS.find((concept) => concept.id === id) || SHOE_CONCEPTS[0];
}

function loadDuelState() {
  try {
    return JSON.parse(localStorage.getItem(DUEL_STORAGE_KEY)) || { round: 0, answers: [] };
  } catch {
    return { round: 0, answers: [] };
  }
}

function saveDuelState(state) {
  localStorage.setItem(DUEL_STORAGE_KEY, JSON.stringify(state));
}

function getTier(xp) {
  return tiers.reduce((current, tier) => (xp >= tier.xp ? tier : current), tiers[0]);
}

function getTierIndex(xp) {
  return tiers.reduce((current, tier, index) => (xp >= tier.xp ? index : current), 0);
}

function nextMission(progress) {
  return missions.find((mission) => !progress.completed.includes(mission.id)) || missions[0];
}

function pill(scene, x, y, width, height, fill = 0xfff8eb, stroke = 0x26221f) {
  const g = scene.add.graphics();
  g.fillStyle(fill, 0.9);
  g.lineStyle(1.35, stroke, 0.5);
  g.fillRoundedRect(x, y, width, height, height / 2);
  g.strokeRoundedRect(x, y, width, height, height / 2);
  return g;
}

function panel(scene, x, y, width, height, radius = 18, fill = 0xfff8eb) {
  const g = scene.add.graphics();
  g.fillStyle(fill, 0.82);
  g.lineStyle(1.35, 0x26221f, 0.42);
  g.fillRoundedRect(x, y, width, height, radius);
  g.strokeRoundedRect(x, y, width, height, radius);
  return g;
}

function text(scene, x, y, value, size = 18, color = "#26221f", extra = {}) {
  return scene.add.text(x, y, value, {
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: `${size}px`,
    color,
    fontStyle: extra.weight || "700",
    align: extra.align || "left",
    wordWrap: extra.wordWrap || undefined
  }).setResolution(2);
}

function glassPolygon(scene, points, fill = 0xfffbf2, alpha = 0.82, stroke = 0xffffff) {
  const g = scene.add.graphics();
  g.fillStyle(fill, alpha);
  g.lineStyle(1.2, stroke, 0.76);
  g.fillPoints(points, true);
  g.strokePoints(points, true);
  return g;
}

function ticketPanel(scene, x, y, width, height, fill = 0xfff0c7) {
  const notch = 16;
  return glassPolygon(scene, [
    new Phaser.Geom.Point(x + 18, y),
    new Phaser.Geom.Point(x + width - 18, y),
    new Phaser.Geom.Point(x + width, y + notch),
    new Phaser.Geom.Point(x + width - 10, y + height / 2),
    new Phaser.Geom.Point(x + width, y + height - notch),
    new Phaser.Geom.Point(x + width - 18, y + height),
    new Phaser.Geom.Point(x + 18, y + height),
    new Phaser.Geom.Point(x, y + height - notch),
    new Phaser.Geom.Point(x + 10, y + height / 2),
    new Phaser.Geom.Point(x, y + notch)
  ], fill, 0.86);
}

function mangaPanel(scene, x, y, width, height, options = {}) {
  const skew = options.skew || 0;
  const tail = options.tail || null;
  const points = [
    new Phaser.Geom.Point(x + skew, y),
    new Phaser.Geom.Point(x + width, y + Math.max(0, -skew)),
    new Phaser.Geom.Point(x + width - skew, y + height),
    new Phaser.Geom.Point(x, y + height + Math.min(0, skew))
  ];
  if (tail === "left") {
    points.splice(3, 0, new Phaser.Geom.Point(x + 46, y + height + 22), new Phaser.Geom.Point(x + 70, y + height));
  }
  const g = scene.add.graphics();
  g.fillStyle(options.fill || 0xfffbf2, options.alpha || 0.9);
  g.lineStyle(options.strokeWidth || 3, 0x26221f, 0.88);
  g.fillPoints(points, true);
  g.strokePoints(points, true);
  return g;
}

function screenTone(scene, x, y, width, height, color = 0x26221f, alpha = 0.12) {
  const dots = scene.add.graphics();
  dots.fillStyle(color, alpha);
  for (let dotY = y; dotY < y + height; dotY += 12) {
    for (let dotX = x + ((dotY / 12) % 2) * 6; dotX < x + width; dotX += 12) {
      dots.fillCircle(dotX, dotY, 1.4);
    }
  }
  return dots;
}

function navIcon(scene, kind, x, y, color = 0x26221f, depth = 1) {
  const g = scene.add.graphics().setDepth(depth);
  g.lineStyle(2, color, 0.82);
  g.fillStyle(color, 0.12);
  if (kind === "Missions") {
    g.strokeRoundedRect(x - 7, y - 7, 14, 14, 3);
    g.lineBetween(x - 3, y - 2, x + 4, y - 2);
    g.lineBetween(x - 3, y + 3, x + 4, y + 3);
  } else if (kind === "Profile") {
    g.strokeCircle(x, y - 3, 5);
    g.lineBetween(x - 10, y + 9, x - 6, y + 5);
    g.lineBetween(x - 6, y + 5, x + 6, y + 5);
    g.lineBetween(x + 6, y + 5, x + 10, y + 9);
  } else if (kind === "Ladder") {
    g.lineBetween(x - 8, y + 8, x + 8, y + 8);
    g.lineBetween(x - 4, y + 8, x - 4, y - 8);
    g.lineBetween(x + 4, y + 8, x + 4, y - 4);
    g.lineBetween(x - 8, y, x + 8, y);
  } else if (kind === "Perks") {
    g.strokeRoundedRect(x - 8, y - 3, 16, 12, 3);
    g.lineBetween(x, y - 9, x, y + 9);
    g.strokeCircle(x - 4, y - 7, 4);
    g.strokeCircle(x + 4, y - 7, 4);
  } else {
    g.strokeCircle(x, y, 9);
    g.lineBetween(x, y - 5, x, y + 2);
    g.fillCircle(x, y + 6, 1.7);
  }
  return g;
}

class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    this.load.image("campus", "assets/cartoon-campus.webp");
    this.load.image("library", "assets/library-opening.png");
    this.load.image("avatar", "assets/cartoon-avatar.webp");
    this.load.image("walk", "assets/cartoon-walk.webp");
    this.load.image("walkFrame", "assets/walk-frame.webp");
    this.load.image("amiraFront", "assets/amira-front.png");
    this.load.image("amiraBack", "assets/amira-back.png");
    this.load.image("amiraLeft", "assets/amira-left.png");
    this.load.image("amiraRight", "assets/amira-right.png");
    this.load.image("avatarCloseup", "assets/avatar-closeup.webp");
    this.load.image("minaConfident", "assets/mina-confident-closeup.png");
    this.load.image("minaDialogue", "assets/mina-confident-dialogue.png");
    this.load.image("shoeMaryJane", "assets/shoe-mary-jane.png");
    this.load.image("shoeLoafer", "assets/shoe-loafer.png");
    SHOE_CONCEPTS.forEach((concept) => this.load.image(concept.id, concept.image));
  }

  create() {
    const params = new URLSearchParams(window.location.search);
    const requestedMission = missions.find((mission) => mission.id === params.get("scene"));
    if (requestedMission) {
      this.scene.start("MissionScene", { mission: requestedMission });
      return;
    }
    this.scene.start(params.get("scene") === "campus" ? "CampusScene" : "StartScene");
  }
}

class StartScene extends Phaser.Scene {
  constructor() {
    super("StartScene");
  }

  create() {
    const { width, height } = this.scale;
    this.add.rectangle(width / 2, height / 2, width, height, 0xcdefff);
    this.add.circle(width * 0.5, 120, 150, 0xfff0c7, 0.82);
    panel(this, 22, 56, width - 44, height - 112, 28, 0xfffbf2);

    text(this, 44, 92, "PRIVATE MOBILE RPG BETA", 12, "#d77458", { weight: "900" });
    text(this, 44, 122, "Circle of\nTrust", 46, "#26221f", { weight: "900" });
    text(this, 44, 232, "Enter the Sunday Staples VIP Campus with Mina. Walk to mission rooms, earn EXP, and shape what gets sampled next.", 16, "#6f655c", {
      wordWrap: { width: width - 88 }
    });

    panel(this, 44, 318, width - 88, 116, 22, 0xfff0c7);
    this.add.image(92, 376, "avatar").setDisplaySize(72, 112).setOrigin(0.5, 0.65);
    text(this, 140, 340, "Circle Pass", 23, "#26221f", { weight: "900" });
    text(this, 140, 372, "Your VIP campus pass is ready. Mina will guide you inside.", 11, "#6f655c", {
      weight: "900",
      wordWrap: { width: width - 220 }
    });
    const comicFlow = this.add.graphics();
    comicFlow.lineStyle(2, 0xd77458, 0.38);
    comicFlow.lineBetween(92, 434, 92, 458);
    comicFlow.fillStyle(0xd77458, 0.48);
    comicFlow.fillCircle(92, 446, 4);

    panel(this, 44, 458, width - 88, 134, 22, 0xfff0c7);
    const portraitBg = this.add.graphics();
    portraitBg.fillStyle(0xffffff, 0.62);
    portraitBg.fillCircle(82, 524, 42);
    portraitBg.lineStyle(1.2, 0xffffff, 0.9);
    portraitBg.strokeCircle(82, 524, 42);
    const minaDialogue = this.add.image(82, 526, "minaDialogue").setOrigin(0.5, 0.58);
    minaDialogue.setScale(88 / minaDialogue.width);
    this.add.circle(114, 508, 4, 0xfffbf2, 0.92);
    this.add.circle(124, 500, 3, 0xfffbf2, 0.82);
    [
      "Walk the campus",
      "Complete design missions",
      "Earn status points",
      "Win Sunday Staples Gift cards & more"
    ].forEach((item, index) => {
      this.add.circle(128, 486 + index * 20, 3, 0xd77458, 0.95);
      text(this, 138, 479 + index * 20, item, 10, "#26221f", {
        weight: "900",
        wordWrap: { width: width - 190 }
      });
    });

    const button = panel(this, 44, height - 122, width - 88, 58, 18, 0xd77458);
    text(this, width / 2, height - 104, "Tap to enter campus", 18, "#ffffff", { weight: "900", align: "center" }).setOrigin(0.5, 0);
    button.setInteractive(new Phaser.Geom.Rectangle(44, height - 122, width - 88, 58), Phaser.Geom.Rectangle.Contains);
    button.on("pointerdown", () => this.scene.start("CampusScene"));
  }
}

class CampusScene extends Phaser.Scene {
  constructor() {
    super("CampusScene");
  }

  create() {
    this.progress = loadProgress();
    this.selectedMission = null;
    this.target = null;

    const { width, height } = this.scale;
    this.add.rectangle(width / 2, height / 2, width, height, 0xbfe0a7);
    this.add.image(width / 2, height / 2 - 6, "campus").setDisplaySize(width * 1.5, height * 0.9).setAlpha(0.95);

    this.createHud();
    this.createQuest();
    this.createMissionPins();
    this.createPlayer();
    this.createMina();
    this.createPreview();
    this.createBottomMenu();
    this.createControls();

    this.input.on("pointerdown", (pointer, objects) => {
      if (objects.length) return;
      if (pointer.y < 150 || pointer.y > height - 178) return;
      this.moveTo(pointer.x, pointer.y);
      this.hidePreview();
      this.say("Tap a mission room when you want a guided objective.");
    });
  }

  createHud() {
    const tier = getTier(this.progress.xp);
    const hud = this.add.graphics().setDepth(30);
    hud.fillStyle(0xfffbf2, 0.84);
    hud.lineStyle(1.2, 0xffffff, 0.7);
    hud.fillRoundedRect(14, 14, this.scale.width - 28, 72, 20);
    hud.strokeRoundedRect(14, 14, this.scale.width - 28, 72, 20);
    this.add.image(50, 50, "avatar").setDisplaySize(42, 66).setDepth(31);
    text(this, 78, 26, "Amira", 18, "#26221f", { weight: "900" }).setDepth(31);
    text(this, 78, 50, tier.name, 11, "#6f655c", { weight: "900" }).setDepth(31);
    text(this, this.scale.width - 100, 25, `${this.progress.xp} XP`, 14, "#d77458", { weight: "900" }).setDepth(31);
    pill(this, this.scale.width - 112, 50, 88, 14, 0xffffff, 0x26221f).setDepth(31);
    const fill = this.add.graphics().setDepth(32);
    const percent = Math.min(1, (this.progress.xp % 100) / 100);
    fill.fillStyle(0xe5bc58, 1).fillRoundedRect(this.scale.width - 108, 54, 80 * percent, 6, 3);
  }

  createQuest() {
    const mission = nextMission(this.progress);
    panel(this, 16, this.scale.height - 168, this.scale.width - 32, 58, 18, 0xfff8eb).setDepth(28);
    text(this, 34, this.scale.height - 157, "CURRENT QUEST", 10, "#d77458", { weight: "900" }).setDepth(29);
    this.questText = text(this, 34, this.scale.height - 138, `${mission.title}: ${mission.short}`, 15, "#26221f", {
      weight: "900",
      wordWrap: { width: this.scale.width - 68 }
    }).setDepth(29);
  }

  createMissionPins() {
    this.pins = missions.map((mission) => {
      const container = this.add.container(mission.x, mission.y).setDepth(10);
      const base = this.add.graphics();
      base.fillStyle(0xfffbf2, 0.96);
      base.lineStyle(3, 0x26221f, 1);
      base.fillRoundedRect(-54, -42, 108, 84, 15);
      base.strokeRoundedRect(-54, -42, 108, 84, 15);
      const icon = this.add.circle(-30, -12, 18, mission.color).setStrokeStyle(3, 0x26221f);
      const title = text(this, -6, -32, mission.title, 11, "#26221f", { weight: "900", wordWrap: { width: 52 } });
      const xp = text(this, -6, 16, `+${mission.xp} XP`, 10, "#d77458", { weight: "900" });
      const bang = this.add.circle(47, -37, 15, this.progress.completed.includes(mission.id) ? 0x72927d : 0xd77458).setStrokeStyle(3, 0x26221f);
      const bangText = text(this, 47, -46, this.progress.completed.includes(mission.id) ? "✓" : "!", 17, "#ffffff", { weight: "900" }).setOrigin(0.5, 0);
      container.add([base, icon, title, xp, bang, bangText]);
      container.setSize(108, 84).setInteractive();
      container.on("pointerdown", () => this.goToMission(mission));
      this.tweens.add({ targets: bang, y: bang.y - 4, yoyo: true, repeat: -1, duration: 700, ease: "Sine.inOut" });
      return { mission, container };
    });
  }

  createPlayer() {
    this.player = this.add.image(195, 568, "avatar").setDisplaySize(54, 98).setDepth(20);
    this.playerShadow = this.add.ellipse(195, 618, 52, 15, 0x26221f, 0.18).setDepth(19);
  }

  createMina() {
    this.mina = this.add.container(20, this.scale.height - 236).setDepth(40);
    panel(this, 14, this.scale.height - 244, this.scale.width - 28, 62, 18, 0xfff0c7).setDepth(39);
    this.add.image(48, this.scale.height - 212, "avatar").setDisplaySize(38, 62).setDepth(41);
    this.minaText = text(this, 78, this.scale.height - 230, "I am Mina. Tap any mission room and I will walk you there.", 13, "#26221f", {
      weight: "900",
      wordWrap: { width: this.scale.width - 100 }
    }).setDepth(41);
  }

  createPreview() {
    this.preview = this.add.container(18, this.scale.height - 352).setDepth(45).setVisible(false);
    const bg = panel(this, 18, this.scale.height - 360, this.scale.width - 36, 122, 20, 0xfffbf2).setDepth(44);
    this.previewTitle = text(this, 38, this.scale.height - 344, "", 20, "#26221f", { weight: "900" }).setDepth(46);
    this.previewMeta = text(this, 38, this.scale.height - 316, "", 12, "#d77458", { weight: "900" }).setDepth(46);
    this.previewBody = text(this, 38, this.scale.height - 294, "", 13, "#6f655c", {
      weight: "800",
      wordWrap: { width: this.scale.width - 76 }
    }).setDepth(46);
    const enter = panel(this, this.scale.width - 128, this.scale.height - 276, 92, 36, 14, 0x26221f).setDepth(46);
    const enterText = text(this, this.scale.width - 82, this.scale.height - 268, "Enter", 14, "#ffffff", { weight: "900" }).setOrigin(0.5, 0).setDepth(47);
    enter.setInteractive(new Phaser.Geom.Rectangle(this.scale.width - 128, this.scale.height - 276, 92, 36), Phaser.Geom.Rectangle.Contains);
    enter.on("pointerdown", () => {
      if (this.selectedMission) this.scene.start("MissionScene", { mission: this.selectedMission });
    });
    this.preview.add([bg, this.previewTitle, this.previewMeta, this.previewBody, enter, enterText]);
  }

  createControls() {
    [["▲", 326, 656, 0, -38], ["◀", 286, 700, -38, 0], ["▼", 326, 700, 0, 38], ["▶", 366, 700, 38, 0]].forEach(([label, x, y, dx, dy]) => {
      const b = pill(this, x - 20, y - 20, 40, 40, 0xfffbf2).setDepth(35);
      text(this, x, y - 10, label, 15, "#26221f", { weight: "900" }).setOrigin(0.5, 0).setDepth(36);
      b.setInteractive(new Phaser.Geom.Rectangle(x - 20, y - 20, 40, 40), Phaser.Geom.Rectangle.Contains);
      b.on("pointerdown", () => this.moveTo(this.player.x + dx, this.player.y + dy));
    });
  }

  say(value) {
    this.minaText.setText(value);
  }

  goToMission(mission) {
    if (this.selectedMission?.id === mission.id && this.preview?.visible) {
      this.scene.start("MissionScene", { mission });
      return;
    }
    this.selectedMission = mission;
    this.say(`Walking to ${mission.title}. Tap Enter when we arrive.`);
    this.moveTo(mission.x, mission.y + 58, () => this.showPreview(mission));
  }

  moveTo(x, y, onComplete) {
    this.tweens.killTweensOf([this.player, this.playerShadow]);
    const duration = Phaser.Math.Distance.Between(this.player.x, this.player.y, x, y) * 5.4;
    const safeDuration = Phaser.Math.Clamp(duration, 220, 1200);
    this.tweens.add({
      targets: [this.player, this.playerShadow],
      x,
      y: (_, target) => target === this.playerShadow ? y + 52 : y,
      duration: safeDuration,
      ease: "Sine.easeInOut",
      onComplete
    });
  }

  showPreview(mission) {
    this.preview.setVisible(true);
    this.previewTitle.setText(mission.title);
    this.previewMeta.setText(`${mission.room} | ${mission.time} | +${mission.xp} XP`);
    this.previewBody.setText(mission.prompt);
    this.say(`This is ${mission.room}. Tap Enter, or tap ${mission.title} again to begin.`);
  }

  hidePreview() {
    this.preview.setVisible(false);
  }
}

class MissionScene extends Phaser.Scene {
  constructor() {
    super("MissionScene");
  }

  init(data) {
    this.mission = data.mission || missions[0];
    this.duelState = loadDuelState();
    this.selectedDuelChoice = null;
    this.selectedDuelDriver = null;
  }

  create() {
    const { width, height } = this.scale;
    this.add.rectangle(width / 2, height / 2, width, height, this.mission.color).setAlpha(0.22);
    panel(this, 18, 42, width - 36, height - 84, 28, 0xfffbf2);
    text(this, 42, 72, this.mission.room.toUpperCase(), 12, "#d77458", { weight: "900" });
    text(this, 42, 104, this.mission.title, 34, "#26221f", { weight: "900", wordWrap: { width: width - 84 } });
    text(this, 42, 178, this.mission.prompt, 16, "#6f655c", { weight: "800", wordWrap: { width: width - 84 } });

    this.drawMiniGame();

    const submit = panel(this, 42, height - 128, width - 84, 56, 18, 0x26221f);
    text(this, width / 2, height - 111, "Submit signal", 18, "#ffffff", { weight: "900" }).setOrigin(0.5, 0);
    submit.setInteractive(new Phaser.Geom.Rectangle(42, height - 128, width - 84, 56), Phaser.Geom.Rectangle.Contains);
    submit.on("pointerdown", () => this.completeMission());
  }

  drawMiniGame() {
    const y = 292;
    if (this.mission.id === "duel") {
      text(this, 52, y - 8, "Tap the shoe with stronger purchase pull.", 13, "#26221f", { weight: "900" });

      const ring = this.add.graphics();
      ring.fillStyle(0xfff8eb, 0.95);
      ring.lineStyle(3, 0x26221f, 0.78);
      ring.fillRoundedRect(36, y + 34, 318, 248, 18);
      ring.strokeRoundedRect(36, y + 34, 318, 248, 18);
      ring.lineStyle(4, 0xd77458, 0.9);
      ring.lineBetween(48, y + 74, 342, y + 74);
      ring.lineBetween(48, y + 108, 342, y + 108);
      ring.lineStyle(4, 0x77a7c7, 0.9);
      ring.lineBetween(48, y + 212, 342, y + 212);
      ring.lineBetween(48, y + 246, 342, y + 246);
      ring.fillStyle(0x26221f, 0.88);
      [[48, y + 54], [342, y + 54], [48, y + 260], [342, y + 260]].forEach(([px, py]) => ring.fillRoundedRect(px - 6, py - 18, 12, 36, 4));

      text(this, 195, y + 50, "FOOTWEAR DUEL", 12, "#d77458", { weight: "900" }).setOrigin(0.5, 0);
      text(this, 195, y + 154, "VS", 34, "#26221f", { weight: "900" }).setOrigin(0.5);

      const contenders = [
        { name: "Cloudstep\nMary Jane", x: 110, color: 0xd77458, shoe: 0xfff0c7 },
        { name: "Founder\nLoafer", x: 280, color: 0x77a7c7, shoe: 0x72927d }
      ];
      const outlines = [];
      contenders.forEach((item, index) => {
        const card = this.add.container(item.x, y + 162);
        const bg = this.add.graphics();
        bg.fillStyle(0xffffff, 0.92);
        bg.lineStyle(2.2, item.color, 0.95);
        bg.fillRoundedRect(-58, -68, 116, 148, 18);
        bg.strokeRoundedRect(-58, -68, 116, 148, 18);
        const stripe = this.add.rectangle(0, -56, 92, 8, item.color, 0.86).setOrigin(0.5);
        const mat = this.add.ellipse(0, 2, 88, 44, 0xfff8eb, 1).setStrokeStyle(2, 0x26221f, 0.32);
        const shoe = this.add.image(0, -4, index ? "shoeLoafer" : "shoeMaryJane").setDisplaySize(94, 58);
        const name = text(this, 0, 38, item.name, 12, "#26221f", {
          weight: "900",
          align: "center",
          wordWrap: { width: 96 }
        }).setOrigin(0.5, 0);
        const vote = text(this, 0, 92, "Tap to vote", 9, "#d77458", { weight: "900", align: "center" }).setOrigin(0.5, 0);
        const outline = this.add.graphics();
        outline.lineStyle(0, item.color, 0);
        outline.strokeRoundedRect(-63, -73, 126, 158, 22);
        outlines.push(outline);
        card.add([bg, stripe, mat, shoe, name, vote, outline]);
        card.setSize(126, 158).setInteractive(new Phaser.Geom.Rectangle(-63, -73, 126, 158), Phaser.Geom.Rectangle.Contains);
        card.on("pointerdown", () => {
          this.selectedDuelChoice = index;
          outlines.forEach((entry, outlineIndex) => {
            entry.clear();
            entry.lineStyle(outlineIndex === index ? 4 : 0, contenders[outlineIndex].color, outlineIndex === index ? 1 : 0);
            entry.strokeRoundedRect(-63, -73, 126, 158, 22);
          });
        });
      });
      return;
    }

    if (this.mission.id === "price") {
      [0, 1, 2].forEach((_, index) => {
        pill(this, 58, y + 54 + index * 58, 260, 26, 0xffffff);
        this.add.rectangle(74 + index * 58, y + 67 + index * 58, 64 + index * 28, 12, this.mission.color).setOrigin(0, 0.5);
        text(this, 58, y + 30 + index * 58, `$${99 + index * 35} comfort ceiling`, 14, "#26221f", { weight: "900" });
      });
      return;
    }

    ["A", "B", "C"].forEach((label, index) => {
      panel(this, 54, y + 34 + index * 76, 282, 54, 16, 0xffffff);
      text(this, 78, y + 48 + index * 76, `${label}. ${["Strongest", "Needs proof", "Founder action"][index]}`, 16, "#26221f", { weight: "900" });
    });
  }

  completeMission() {
    if (this.mission.id === "duel" && this.selectedDuelChoice) {
      const round = Math.min(this.duelState.round || 0, DUEL_PAIRS.length - 1);
      const pair = DUEL_PAIRS[round];
      this.duelState.answers = (this.duelState.answers || []).filter((item) => item.round !== round);
      this.duelState.answers.push({
        round,
        pair,
        winner: this.selectedDuelChoice,
        loser: pair.find((id) => id !== this.selectedDuelChoice),
        driver: this.selectedDuelDriver || "No driver selected",
        submittedAt: new Date().toISOString()
      });
      saveDuelState(this.duelState);
    }
    const progress = loadProgress();
    if (!progress.completed.includes(this.mission.id)) {
      progress.completed.push(this.mission.id);
      progress.xp += this.mission.xp;
      saveProgress(progress);
    }
    this.scene.start("ResultScene", { mission: this.mission, progress });
  }
}

MissionScene.prototype.create = function createMissionResponsive() {
  const height = this.scale.height;
  const width = Math.min(this.scale.width, GAME_WIDTH);
  const left = Math.max(18, (this.scale.width - width) / 2 + 18);
  const center = left + (width - 36) / 2;
  this.safeLeft = left;
  this.safeWidth = width;
  this.safeCenter = center;

  this.add.rectangle(this.scale.width / 2, height / 2, this.scale.width, height, this.mission.color).setAlpha(0.22);
  panel(this, left, 42, width - 36, height - 84, 28, 0xfffbf2);
  text(this, left + 24, 72, this.mission.room.toUpperCase(), 12, "#d77458", { weight: "900" });
  text(this, left + 24, 104, this.mission.title, 34, "#26221f", { weight: "900", wordWrap: { width: width - 84 } });
  text(this, left + 24, 178, this.mission.prompt, 16, "#6f655c", { weight: "800", wordWrap: { width: width - 84 } });

  this.drawMiniGame();

  const submit = panel(this, left + 24, height - 128, width - 84, 56, 18, 0x26221f);
  text(this, center, height - 111, "Submit signal", 18, "#ffffff", { weight: "900" }).setOrigin(0.5, 0);
  submit.setInteractive(new Phaser.Geom.Rectangle(left + 24, height - 128, width - 84, 56), Phaser.Geom.Rectangle.Contains);
  submit.on("pointerdown", () => this.completeMission());
};

MissionScene.prototype.drawMiniGame = function drawMiniGameResponsive() {
  const y = 292;
  const left = this.safeLeft || 18;
  const width = this.safeWidth || GAME_WIDTH;
  const center = this.safeCenter || 195;

  if (this.mission.id === "duel") {
    const round = Math.min(this.duelState.round || 0, DUEL_PAIRS.length - 1);
    const pair = DUEL_PAIRS[round];
    const contenders = pair.map(conceptById);
    text(this, left + 34, y - 10, `Bout ${round + 1} of ${DUEL_PAIRS.length}: tap the design with stronger purchase pull.`, 12, "#26221f", {
      weight: "900",
      wordWrap: { width: width - 92 }
    });

    const ringX = left + 18;
    const ringW = width - 72;
    const ring = this.add.graphics();
    ring.fillStyle(0xfff8eb, 0.95);
    ring.lineStyle(3, 0x26221f, 0.78);
    ring.fillRoundedRect(ringX, y + 34, ringW, 248, 18);
    ring.strokeRoundedRect(ringX, y + 34, ringW, 248, 18);
    ring.lineStyle(4, 0xd77458, 0.9);
    ring.lineBetween(ringX + 12, y + 74, ringX + ringW - 12, y + 74);
    ring.lineBetween(ringX + 12, y + 108, ringX + ringW - 12, y + 108);
    ring.lineStyle(4, 0x77a7c7, 0.9);
    ring.lineBetween(ringX + 12, y + 212, ringX + ringW - 12, y + 212);
    ring.lineBetween(ringX + 12, y + 246, ringX + ringW - 12, y + 246);
    ring.fillStyle(0x26221f, 0.88);
    [[ringX + 12, y + 54], [ringX + ringW - 12, y + 54], [ringX + 12, y + 260], [ringX + ringW - 12, y + 260]].forEach(([px, py]) => ring.fillRoundedRect(px - 6, py - 18, 12, 36, 4));

    text(this, center, y + 50, "FOOTWEAR DUEL", 12, "#d77458", { weight: "900" }).setOrigin(0.5, 0);
    text(this, center, y + 154, "VS", 34, "#26221f", { weight: "900" }).setOrigin(0.5);

    const outlines = [];
    const cardColors = [0xd77458, 0x77a7c7];
    contenders.forEach((item, index) => {
      const card = this.add.container(center + (index === 0 ? -86 : 86), y + 162);
      const itemColor = cardColors[index];
      const bg = this.add.graphics();
      bg.fillStyle(0xffffff, 0.92);
      bg.lineStyle(2.2, itemColor, 0.95);
      bg.fillRoundedRect(-58, -68, 116, 148, 18);
      bg.strokeRoundedRect(-58, -68, 116, 148, 18);
      const stripe = this.add.rectangle(0, -56, 92, 8, itemColor, 0.86).setOrigin(0.5);
      const mat = this.add.ellipse(0, 2, 88, 44, 0xfff8eb, 1).setStrokeStyle(2, 0x26221f, 0.32);
      const shoe = this.add.image(0, -6, item.id).setDisplaySize(92, 62);
      const name = text(this, 0, 35, item.name.replace("Factory ", "F."), 10, "#26221f", {
        weight: "900",
        align: "center",
        wordWrap: { width: 96 }
      }).setOrigin(0.5, 0);
      const tags = text(this, 0, 68, `${item.colorway} | ${item.silhouette}`, 7.4, "#6f655c", {
        weight: "900",
        align: "center",
        wordWrap: { width: 96 }
      }).setOrigin(0.5, 0);
      const vote = text(this, 0, 96, "Choose", 9, "#d77458", { weight: "900", align: "center" }).setOrigin(0.5, 0);
      const outline = this.add.graphics();
      outline.strokeRoundedRect(-63, -73, 126, 158, 22);
      outlines.push(outline);
      card.add([bg, stripe, mat, shoe, name, tags, vote, outline]);
      card.setSize(126, 158).setInteractive(new Phaser.Geom.Rectangle(-63, -73, 126, 158), Phaser.Geom.Rectangle.Contains);
      card.on("pointerdown", () => {
        this.selectedDuelChoice = item.id;
        outlines.forEach((entry, outlineIndex) => {
          entry.clear();
          entry.lineStyle(outlineIndex === index ? 4 : 0, cardColors[outlineIndex], outlineIndex === index ? 1 : 0);
          entry.strokeRoundedRect(-63, -73, 126, 158, 22);
        });
      });
    });
    text(this, left + 34, y + 306, "Why did it win?", 12, "#26221f", { weight: "900" });
    DUEL_DRIVER_TAGS.forEach((driver, index) => {
      const tagX = left + 34 + (index % 2) * 142;
      const tagY = y + 330 + Math.floor(index / 2) * 34;
      const tag = pill(this, tagX, tagY, 124, 25, 0xffffff);
      const tagText = text(this, tagX + 62, tagY + 6, driver, 9, "#26221f", { weight: "900", align: "center" }).setOrigin(0.5, 0);
      const zone = this.add.zone(tagX, tagY, 124, 25).setOrigin(0, 0).setInteractive({
        hitArea: new Phaser.Geom.Rectangle(0, 0, 124, 25),
        hitAreaCallback: Phaser.Geom.Rectangle.Contains,
        useHandCursor: true
      });
      zone.on("pointerdown", () => {
        this.selectedDuelDriver = driver;
        tag.clear();
        tag.fillStyle(0xfff0c7, 0.96);
        tag.lineStyle(1.6, 0xd77458, 0.9);
        tag.fillRoundedRect(tagX, tagY, 124, 25, 13);
        tag.strokeRoundedRect(tagX, tagY, 124, 25, 13);
        tagText.setColor("#d77458");
      });
    });
    const nextLabel = round < DUEL_PAIRS.length - 1 ? "Lock Bout + Next" : "Lock Final Bout";
    const next = panel(this, left + 34, y + 404, width - 104, 38, 14, 0xd77458);
    text(this, center, y + 414, nextLabel, 13, "#ffffff", { weight: "900", align: "center" }).setOrigin(0.5, 0);
    next.setInteractive(new Phaser.Geom.Rectangle(left + 34, y + 404, width - 104, 38), Phaser.Geom.Rectangle.Contains);
    next.on("pointerdown", () => this.lockDuelBout());
    return;
  }

  if (this.mission.id === "price") {
    [0, 1, 2].forEach((_, index) => {
      pill(this, left + 40, y + 54 + index * 58, width - 130, 26, 0xffffff);
      this.add.rectangle(left + 56 + index * 58, y + 67 + index * 58, 64 + index * 28, 12, this.mission.color).setOrigin(0, 0.5);
      text(this, left + 40, y + 30 + index * 58, `$${99 + index * 35} comfort ceiling`, 14, "#26221f", { weight: "900" });
    });
    return;
  }

  ["A", "B", "C"].forEach((label, index) => {
    panel(this, left + 36, y + 34 + index * 76, width - 108, 54, 16, 0xffffff);
    text(this, left + 60, y + 48 + index * 76, `${label}. ${["Strongest", "Needs proof", "Founder action"][index]}`, 16, "#26221f", { weight: "900" });
  });
};

MissionScene.prototype.lockDuelBout = function lockDuelBout() {
  if (this.mission.id !== "duel" || !this.selectedDuelChoice) return;
  const round = Math.min(this.duelState.round || 0, DUEL_PAIRS.length - 1);
  const pair = DUEL_PAIRS[round];
  const answer = {
    round,
    pair,
    winner: this.selectedDuelChoice,
    loser: pair.find((id) => id !== this.selectedDuelChoice),
    driver: this.selectedDuelDriver || "No driver selected",
    submittedAt: new Date().toISOString()
  };
  this.duelState.answers = (this.duelState.answers || []).filter((item) => item.round !== round);
  this.duelState.answers.push(answer);
  this.duelState.round = Math.min(round + 1, DUEL_PAIRS.length - 1);
  saveDuelState(this.duelState);

  if (round >= DUEL_PAIRS.length - 1) {
    this.completeMission();
    return;
  }

  this.scene.restart({ mission: this.mission });
};

class ResultScene extends Phaser.Scene {
  constructor() {
    super("ResultScene");
  }

  init(data) {
    this.mission = data.mission;
    this.progress = data.progress;
  }

  create() {
    const { width, height } = this.scale;
    this.add.rectangle(width / 2, height / 2, width, height, 0xfff0c7);
    panel(this, 22, 72, width - 44, height - 144, 28, 0xfffbf2);
    text(this, 48, 104, "SIGNAL CAPTURED", 12, "#d77458", { weight: "900" });
    text(this, 48, 140, `+${this.mission.xp} XP`, 48, "#26221f", { weight: "900" });
    text(this, 48, 212, `${this.mission.title} is now part of the founder brief.`, 20, "#26221f", {
      weight: "900",
      wordWrap: { width: width - 96 }
    });
    text(this, 48, 296, `New status: ${getTier(this.progress.xp).name}`, 16, "#6f655c", {
      weight: "900",
      wordWrap: { width: width - 96 }
    });

    const next = panel(this, 48, height - 150, width - 96, 58, 18, 0x26221f);
    text(this, width / 2, height - 132, "Return to campus", 18, "#ffffff", { weight: "900" }).setOrigin(0.5, 0);
    next.setInteractive(new Phaser.Geom.Rectangle(48, height - 150, width - 96, 58), Phaser.Geom.Rectangle.Contains);
    next.on("pointerdown", () => this.scene.start("CampusScene"));
  }
}

StartScene.prototype.create = function create() {
  const { width, height } = this.scale;
  this.add.rectangle(width / 2, height / 2, width, height, 0xcdefff);
  this.add.image(width / 2, height / 2, "campus").setDisplaySize(width * 1.28, height).setAlpha(0.82);

  const veil = this.add.graphics();
  veil.fillGradientStyle(0xfff8eb, 0xfff8eb, 0xcdefff, 0xcdefff, 0.74, 0.38, 0.1, 0.34);
  veil.fillRect(0, 0, width, height);

  this.add.circle(width - 58, 104, 76, 0xfff0c7, 0.52);
  this.add.circle(42, 590, 48, 0xd77458, 0.16);
  this.add.circle(width - 34, 528, 36, 0x77a7c7, 0.18);

  glassPolygon(this, [
    new Phaser.Geom.Point(22, 56),
    new Phaser.Geom.Point(width - 34, 42),
    new Phaser.Geom.Point(width - 18, 284),
    new Phaser.Geom.Point(36, 306)
  ], 0xfffbf2, 0.76).setDepth(2);

  text(this, 44, 88, "SUNDAY STAPLES VIP RPG", 11, "#d77458", { weight: "900" }).setDepth(3);
  text(this, 42, 120, "Circle of\nTrust", 48, "#26221f", { weight: "900" }).setDepth(3);
  text(this, 44, 238, "Step into the VIP Campus with Mina. Your choices become design signals for what gets sampled next.", 14, "#6f655c", {
    weight: "900",
    wordWrap: { width: width - 88 }
  }).setDepth(3);

  ticketPanel(this, 38, 330, width - 76, 118, 0xfff0c7).setDepth(4);
  this.add.circle(94, 390, 42, 0xffffff, 0.58).setDepth(5);
  this.add.image(94, 394, "avatar").setDisplaySize(64, 102).setOrigin(0.5, 0.66).setDepth(6);
  text(this, 146, 356, "Circle Pass", 23, "#26221f", { weight: "900" }).setDepth(6);
  text(this, 146, 388, "VIP access ready. Mina opens the campus.", 11, "#6f655c", {
    weight: "900",
    wordWrap: { width: width - 216 }
  }).setDepth(6);
  const beam = this.add.graphics().setDepth(4);
  beam.lineStyle(2, 0xd77458, 0.42);
  beam.lineBetween(98, 448, 98, 474);
  beam.fillStyle(0xd77458, 0.58);
  beam.fillCircle(98, 462, 4);

  glassPolygon(this, [
    new Phaser.Geom.Point(46, 480),
    new Phaser.Geom.Point(width - 42, 466),
    new Phaser.Geom.Point(width - 28, 596),
    new Phaser.Geom.Point(42, 612),
    new Phaser.Geom.Point(54, 544)
  ], 0xfff0c7, 0.88).setDepth(4);
  this.add.circle(88, 540, 46, 0xffffff, 0.6).setDepth(5);
  const minaDialogue = this.add.image(84, 540, "minaDialogue").setOrigin(0.5, 0.58).setDepth(6);
  minaDialogue.setScale(88 / minaDialogue.width);

  [
    "Walk the campus",
    "Complete design missions",
    "Earn status points",
    "Win Sunday Staples Gift cards & more"
  ].forEach((item, index) => {
    this.add.circle(130, 502 + index * 22, 3, 0xd77458, 0.95).setDepth(6);
    text(this, 140, 494 + index * 22, item, 10, "#26221f", {
      weight: "900",
      wordWrap: { width: width - 188 }
    }).setDepth(6);
  });

  const startBg = glassPolygon(this, [
    new Phaser.Geom.Point(48, height - 126),
    new Phaser.Geom.Point(width - 58, height - 138),
    new Phaser.Geom.Point(width - 38, height - 78),
    new Phaser.Geom.Point(58, height - 64),
    new Phaser.Geom.Point(38, height - 98)
  ], 0xd77458, 0.94).setDepth(8);
  text(this, width / 2, height - 111, "Enter VIP Campus", 18, "#ffffff", { weight: "900", align: "center" }).setOrigin(0.5, 0).setDepth(9);
  startBg.setInteractive(new Phaser.Geom.Polygon([48, height - 126, width - 58, height - 138, width - 38, height - 78, 58, height - 64, 38, height - 98]), Phaser.Geom.Polygon.Contains);
  startBg.on("pointerdown", () => this.scene.start("CampusScene"));

  this.tweens.add({ targets: startBg, alpha: 0.86, yoyo: true, repeat: -1, duration: 900, ease: "Sine.inOut" });
};

StartScene.prototype.create = function createMangaOpening() {
  const { width, height } = this.scale;
  this.add.image(width / 2, height / 2, "library").setDisplaySize(width, height);

  const shade = this.add.graphics();
  shade.fillGradientStyle(0xfff8eb, 0xfff8eb, 0x26221f, 0x26221f, 0.44, 0.26, 0.16, 0.34);
  shade.fillRect(0, 0, width, height);
  screenTone(this, 0, 0, width, height, 0x26221f, 0.07);

  mangaPanel(this, 24, 52, width - 48, 238, { skew: -10, fill: 0xfffbf2, alpha: 0.88, strokeWidth: 3.2 }).setDepth(2);
  screenTone(this, width - 126, 72, 82, 82, 0xd77458, 0.16).setDepth(3);
  text(this, 44, 88, "SUNDAY STAPLES VIP ARCHIVES", 10, "#d77458", { weight: "900" }).setDepth(4);
  text(this, 42, 124, "Inner\nCircle", 46, "#26221f", { weight: "900" }).setDepth(4);
  text(this, 44, 236, "Enter the archive with Mina. Your taste shapes what Sunday Staples designs next.", 12, "#6f655c", {
    weight: "900",
    wordWrap: { width: width - 96 }
  }).setDepth(4);

  mangaPanel(this, 38, 324, width - 76, 116, { skew: 8, fill: 0xfff0c7, alpha: 0.92, strokeWidth: 2.8 }).setDepth(5);
  this.add.circle(92, 386, 40, 0xffffff, 0.72).setDepth(6);
  this.add.image(92, 390, "avatar").setDisplaySize(62, 100).setOrigin(0.5, 0.66).setDepth(7);
  text(this, 146, 354, "Circle Pass", 22, "#26221f", { weight: "900" }).setDepth(7);
  text(this, 146, 385, "VIP access ready. Mina opens the archive.", 10, "#6f655c", {
    weight: "900",
    wordWrap: { width: width - 226 }
  }).setDepth(7);

  const flow = this.add.graphics().setDepth(5);
  flow.lineStyle(3, 0x26221f, 0.72);
  flow.lineBetween(94, 440, 94, 466);
  flow.fillStyle(0xfffbf2, 0.96);
  flow.fillCircle(94, 454, 5);
  flow.lineStyle(1.2, 0xd77458, 0.8);
  flow.strokeCircle(94, 454, 5);

  mangaPanel(this, 42, 474, width - 82, 128, { skew: -7, fill: 0xfffbf2, alpha: 0.92, strokeWidth: 2.8, tail: "left" }).setDepth(5);
  this.add.circle(86, 538, 44, 0xfff0c7, 0.82).setDepth(6);
  const minaDialogue = this.add.image(82, 540, "minaDialogue").setOrigin(0.5, 0.58).setDepth(7);
  minaDialogue.setScale(86 / minaDialogue.width);
  screenTone(this, 106, 492, 220, 82, 0xd77458, 0.09).setDepth(6);

  [
    "Walk the campus",
    "Complete design missions",
    "Earn status points",
    "Win gift cards, vouchers & more",
    "Unlock bonus founder content"
  ].forEach((item, index) => {
    this.add.circle(128, 494 + index * 19, 2.7, 0xd77458, 0.95).setDepth(7);
    text(this, 138, 488 + index * 19, item, 8, "#26221f", {
      weight: "900",
      wordWrap: { width: width - 196 }
    }).setDepth(7);
  });

  const startY = height - 82;
  const start = mangaPanel(this, 40, startY, width - 80, 58, { skew: 8, fill: 0xd77458, alpha: 0.96, strokeWidth: 3 }).setDepth(9);
  screenTone(this, 48, startY + 8, width - 96, 42, 0xffffff, 0.13).setDepth(10);
  text(this, width / 2, startY + 18, "Enter VIP Archive", 18, "#ffffff", { weight: "900", align: "center" }).setOrigin(0.5, 0).setDepth(11);
  start.setInteractive(new Phaser.Geom.Rectangle(40, startY, width - 80, 58), Phaser.Geom.Rectangle.Contains);
  start.on("pointerdown", () => this.scene.start("CampusScene"));
  this.tweens.add({ targets: start, alpha: 0.86, yoyo: true, repeat: -1, duration: 860, ease: "Sine.inOut" });
};

CampusScene.prototype.create = function create() {
  this.progress = loadProgress();
  this.selectedMission = null;
  this.target = null;
  this.worldWidth = CAMPUS_WORLD_WIDTH;
  const { width, height } = this.scale;
  this.worldHeight = Math.max(CAMPUS_WORLD_HEIGHT, height + 240);
  this.topUiHeight = CAMPUS_TOP_UI_HEIGHT;
  this.bottomUiHeight = CAMPUS_BOTTOM_UI_HEIGHT;
  this.dragStart = null;
  this.isDraggingMap = false;

  this.cameras.main.setBounds(0, 0, this.worldWidth, this.worldHeight);
  this.cameras.main.setScroll(0, 0);
  const params = new URLSearchParams(window.location.search);
  if (params.get("view") === "right") this.cameras.main.setScroll(this.worldWidth - width, 0);

  this.add.rectangle(this.worldWidth / 2, this.worldHeight / 2, this.worldWidth, this.worldHeight, 0xbfe0a7);
  this.add.image(this.worldWidth / 2, this.worldHeight / 2, "campus").setDisplaySize(this.worldWidth, this.worldHeight).setAlpha(0.96);
  const path = this.add.graphics().setDepth(3);
  path.lineStyle(18, 0xfff0c7, 0.22);
  path.beginPath();
  path.moveTo(80, 210);
  path.lineTo(330, 220);
  path.lineTo(548, 438);
  path.lineTo(214, 664);
  path.lineTo(650, 836);
  path.strokePath();
  path.lineStyle(3, 0xffffff, 0.38);
  path.strokePath();
  this.createCampusLighting();

  this.createHud();
  this.createQuest();
  this.createViewportChrome();
  this.createMissionPins();
  this.createRankTotem();
  this.createPlayer();
  this.createMina();
  this.createPreview();
  this.createLadderView();
  this.createBottomMenu();
  this.createControls();
  this.pinHudToCamera();

  this.input.on("pointerdown", (pointer, objects) => {
    if (objects.length) return;
    if (!this.isMapTouch(pointer)) return;
    this.dragStart = {
      x: pointer.x,
      y: pointer.y,
      cameraX: this.cameras.main.scrollX,
      cameraY: this.cameras.main.scrollY
    };
    this.isDraggingMap = false;
  });

  this.input.on("pointermove", (pointer) => {
    if (!this.dragStart || !pointer.isDown) return;
    const dx = pointer.x - this.dragStart.x;
    const dy = pointer.y - this.dragStart.y;
    if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
    this.isDraggingMap = true;
    this.cameras.main.scrollX = Phaser.Math.Clamp(this.dragStart.cameraX - dx, 0, this.worldWidth - width);
    this.cameras.main.scrollY = Phaser.Math.Clamp(this.dragStart.cameraY - dy, 0, this.worldHeight - height);
  });

  this.input.on("pointerup", (pointer, objects) => {
    if (!this.dragStart) return;
    const moved = Phaser.Math.Distance.Between(pointer.x, pointer.y, this.dragStart.x, this.dragStart.y);
    const shouldWalk = !this.isDraggingMap && moved < 10 && this.isMapTouch(pointer) && !objects.length;
    this.dragStart = null;
    this.isDraggingMap = false;
    if (!shouldWalk) return;
    this.moveTo(pointer.worldX, pointer.worldY);
    this.hidePreview();
    this.hideLadder();
    this.say("Drag the campus to explore. Tap a mission room and I will walk you there.");
  });

  this.say("Drag the campus to explore. Tap any mission room and I will walk you there.");
};

CampusScene.prototype.isMapTouch = function isMapTouch(pointer) {
  return pointer.y >= this.topUiHeight && pointer.y <= this.scale.height - this.bottomUiHeight;
};

CampusScene.prototype.pinHudToCamera = function pinHudToCamera() {
  this.children.each((child) => {
    if (child.depth >= 28 && child.setScrollFactor) child.setScrollFactor(0);
  });
};

CampusScene.prototype.createCampusLighting = function createCampusLighting() {
  const ambience = this.add.graphics().setDepth(4);
  ambience.setBlendMode(Phaser.BlendModes.ADD);
  ambience.fillStyle(0xfff0c7, 0.12);
  ambience.fillEllipse(132, 218, 260, 150);
  ambience.fillStyle(0x77a7c7, 0.1);
  ambience.fillEllipse(418, 226, 300, 170);
  ambience.fillStyle(0xb99adf, 0.1);
  ambience.fillEllipse(548, 448, 260, 190);
  ambience.fillStyle(0x72927d, 0.1);
  ambience.fillEllipse(214, 674, 280, 180);
  ambience.fillStyle(0xe5bc58, 0.12);
  ambience.fillEllipse(642, 834, 270, 190);
  ambience.fillStyle(0xffffff, 0.12);
  ambience.fillEllipse(354, 78, 430, 110);

  const shade = this.add.graphics().setDepth(4.2);
  shade.fillStyle(0x26221f, 0.06);
  shade.fillEllipse(384, this.worldHeight - 22, this.worldWidth * 1.1, 140);
  shade.fillStyle(0x26221f, 0.035);
  shade.fillRect(0, this.worldHeight - 140, this.worldWidth, 140);

  const glints = this.add.graphics().setDepth(5);
  glints.setBlendMode(Phaser.BlendModes.ADD);
  [
    [98, 176, 7, 0xfff0c7],
    [286, 188, 5, 0xffffff],
    [515, 368, 8, 0xb99adf],
    [252, 594, 6, 0x72927d],
    [618, 760, 7, 0xe5bc58],
    [682, 270, 5, 0x77a7c7]
  ].forEach(([x, y, radius, color]) => {
    glints.fillStyle(color, 0.2);
    glints.fillCircle(x, y, radius);
    glints.fillStyle(0xffffff, 0.26);
    glints.fillCircle(x - radius * 0.28, y - radius * 0.28, radius * 0.38);
  });

  this.tweens.add({ targets: ambience, alpha: 0.82, yoyo: true, repeat: -1, duration: 2200, ease: "Sine.inOut" });
};

CampusScene.prototype.createHud = function createHud() {
  const tier = getTier(this.progress.xp);
  const percent = Math.min(1, (this.progress.xp % 100) / 100);
  const hud = this.add.graphics().setDepth(30);
  hud.fillStyle(0xfffbf2, 1);
  hud.fillRect(0, 0, this.scale.width, 92);
  hud.fillStyle(0x26221f, 1);
  hud.fillRoundedRect(12, 12, this.scale.width - 24, 68, 22);
  hud.fillStyle(0xffffff, 0.08);
  hud.fillRoundedRect(22, 20, this.scale.width - 44, 20, 10);
  hud.fillStyle(0xd77458, 0.16);
  hud.fillCircle(this.scale.width - 82, 45, 50);
  hud.fillStyle(0x77a7c7, 0.12);
  hud.fillCircle(110, 76, 44);
  hud.fillStyle(0xfff0c7, 1);
  hud.fillRoundedRect(22, 22, 48, 48, 16);
  hud.lineStyle(1.5, 0xffffff, 0.68);
  hud.strokeRoundedRect(22, 22, 48, 48, 16);
  hud.lineStyle(2, 0x26221f, 0.18);
  hud.lineBetween(0, 91, this.scale.width, 91);
  hud.lineStyle(1, 0xffffff, 0.5);
  hud.lineBetween(20, 13, this.scale.width - 20, 13);
  this.add.image(46, 54, "amiraFront").setDisplaySize(27, 50).setDepth(31);
  text(this, 82, 21, "Amira", 17, "#ffffff", { weight: "900" }).setDepth(31);
  text(this, 82, 45, tier.name, 9.5, "#fff0c7", {
    weight: "900",
    wordWrap: { width: this.scale.width - 196 }
  }).setDepth(31);
  const xpPill = this.add.graphics().setDepth(31);
  xpPill.fillStyle(0xfffbf2, 1);
  xpPill.fillRoundedRect(this.scale.width - 116, 22, 92, 26, 13);
  xpPill.lineStyle(1.4, 0xe5bc58, 0.8);
  xpPill.strokeRoundedRect(this.scale.width - 116, 22, 92, 26, 13);
  text(this, this.scale.width - 70, 28, `${this.progress.xp} XP`, 12, "#d77458", { weight: "900", align: "center" }).setOrigin(0.5, 0).setDepth(32);
  const bar = this.add.graphics().setDepth(31);
  bar.fillStyle(0xffffff, 1);
  bar.fillRoundedRect(this.scale.width - 116, 54, 92, 12, 6);
  const fill = this.add.graphics().setDepth(32);
  fill.fillStyle(0xe5bc58, 1).fillRoundedRect(this.scale.width - 112, 57, 84 * percent, 6, 3);
};

CampusScene.prototype.createPlayer = function createPlayer() {
  this.playerPoseIndex = 4;
  this.playerBaseHeight = 58;
  this.player = this.add.image(112, 570, "amiraFront").setDisplaySize(30, 58).setDepth(20);
  this.playerShadow = this.add.ellipse(112, 600, 30, 9, 0x26221f, 0.18).setDepth(19);
};

CampusScene.prototype.getPlayerPose = function getPlayerPose(x, y) {
  const dx = x - this.player.x;
  const dy = y - this.player.y;
  if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return AMIRA_POSES[this.playerPoseIndex || 4];
  const degrees = Phaser.Math.RadToDeg(Math.atan2(dy, dx));
  const normalized = (degrees + 360) % 360;
  const index = Math.round(normalized / 22.5) % 16;
  return { ...AMIRA_POSES[index], index };
};

CampusScene.prototype.setPlayerDirection = function setPlayerDirection(x, y) {
  const pose = this.getPlayerPose(x, y);
  if (pose.index === this.playerPoseIndex) return pose;
  this.playerPoseIndex = pose.index;
  this.player.setTexture(pose.key);
  this.player.setDisplaySize(pose.width, this.playerBaseHeight);
  this.player.setAngle(pose.angle);
  return pose;
};

CampusScene.prototype.createControls = function createControls() {
  this.tapHint = null;
};

CampusScene.prototype.createMissionPins = function createMissionPins() {
  this.pins = missions.map((mission) => {
    const container = this.add.container(mission.x, mission.y).setDepth(10);
    const cast = this.add.ellipse(4, 47, 110, 26, 0x26221f, 0.16);
    const glow = this.add.circle(0, 0, 34, mission.color, 0.16);
    glow.setBlendMode(Phaser.BlendModes.ADD);
    const post = this.add.rectangle(0, 24, 7, 34, 0x6f655c, 0.8).setOrigin(0.5, 0);
    const marker = this.add.circle(0, 0, 9, mission.color, 0.98).setStrokeStyle(2.5, 0xfffbf2);
    const labelBg = this.add.graphics();
    labelBg.fillStyle(0xfffbf2, 0.9);
    labelBg.lineStyle(2.2, 0x26221f, 0.72);
    labelBg.fillRoundedRect(-58, 17, 116, 32, 8);
    labelBg.strokeRoundedRect(-58, 17, 116, 32, 8);
    labelBg.fillStyle(0xffffff, 0.42);
    labelBg.fillRoundedRect(-50, 21, 100, 8, 4);
    labelBg.lineStyle(1, mission.color, 0.3);
    labelBg.lineBetween(-44, 44, 44, 44);
    const title = text(this, 0, 24, mission.title, 9, "#26221f", {
      weight: "900",
      align: "center",
      wordWrap: { width: 96 }
    }).setOrigin(0.5, 0);
    const bang = this.add.circle(52, 16, 10, this.progress.completed.includes(mission.id) ? 0x72927d : 0xd77458).setStrokeStyle(1.5, 0xfffbf2);
    const bangText = text(this, 52, 9, this.progress.completed.includes(mission.id) ? "✓" : "!", 12, "#ffffff", { weight: "900" }).setOrigin(0.5, 0);
    container.add([cast, glow, post, marker, labelBg, title, bang, bangText]);
    container.setSize(126, 86).setInteractive(new Phaser.Geom.Rectangle(-63, -12, 126, 88), Phaser.Geom.Rectangle.Contains);
    container.on("pointerdown", () => this.goToMission(mission));
    this.tweens.add({ targets: glow, alpha: 0.32, scale: 1.08, yoyo: true, repeat: -1, duration: 900, ease: "Sine.inOut" });
    this.tweens.add({ targets: bang, y: bang.y - 3, yoyo: true, repeat: -1, duration: 700, ease: "Sine.inOut" });
    return { mission, container };
  });
};

CampusScene.prototype.createRankTotem = function createRankTotem() {
  const x = this.worldWidth - 76;
  const baseY = this.worldHeight - 214;
  const currentIndex = getTierIndex(this.progress.xp);
  const monument = this.add.container(0, 0).setDepth(8);
  const backGlow = this.add.ellipse(x, baseY - 116, 150, 300, 0xfff0c7, 0.17);
  const ground = this.add.ellipse(x, baseY + 46, 154, 26, 0x26221f, 0.13);
  const pedestal = this.add.graphics();
  pedestal.fillStyle(0xfffbf2, 0.92);
  pedestal.lineStyle(2.2, 0x26221f, 0.55);
  pedestal.fillRoundedRect(x - 58, baseY + 18, 116, 38, 12);
  pedestal.strokeRoundedRect(x - 58, baseY + 18, 116, 38, 12);
  pedestal.fillStyle(0xd77458, 0.88);
  pedestal.fillRoundedRect(x - 42, baseY + 27, 84, 8, 4);

  const mast = this.add.graphics();
  mast.fillStyle(0x6f655c, 0.84);
  mast.fillRoundedRect(x - 8, baseY - 236, 16, 264, 8);
  mast.fillStyle(0xffffff, 0.28);
  mast.fillRoundedRect(x - 3, baseY - 226, 3, 236, 2);
  const crown = this.add.star(x, baseY - 256, 7, 13, 30, 0xe5bc58, 0.96).setStrokeStyle(2.6, 0xfffbf2, 0.95);
  const crownHalo = this.add.circle(x, baseY - 256, 42, 0xe5bc58, 0.12);
  monument.add([backGlow, ground, pedestal, mast, crownHalo, crown]);

  tiers.forEach((tier, index) => {
    const y = baseY - index * 42;
    const reached = index <= currentIndex;
    const active = index === currentIndex;
    const meta = RANK_META[index];
    const side = index % 2 === 0 ? -1 : 1;
    const badgeX = x + side * 24;
    const badge = this.add.graphics().setDepth(9 + index / 10);
    if (active) {
      badge.fillStyle(0xe5bc58, 0.18);
      badge.fillCircle(badgeX, y, 28);
    }
    badge.fillStyle(reached ? meta.color : 0xfffbf2, reached ? 0.95 : 0.82);
    badge.lineStyle(active ? 3 : 1.6, active ? 0xfffbf2 : 0x26221f, active ? 0.95 : 0.45);
    badge.fillCircle(badgeX, y, active ? 21 : 17);
    badge.strokeCircle(badgeX, y, active ? 21 : 17);
    badge.fillStyle(0xffffff, reached ? 0.22 : 0.48);
    badge.fillCircle(badgeX - 5, y - 6, active ? 7 : 5);
    badge.lineStyle(2, reached ? 0xfffbf2 : 0x6f655c, reached ? 0.72 : 0.32);
    badge.lineBetween(x, y, badgeX - side * 16, y);
    const number = text(this, badgeX, y - 8, `${index + 1}`, 13, reached ? "#ffffff" : "#6f655c", {
      weight: "900",
      align: "center"
    }).setOrigin(0.5, 0).setDepth(10 + index / 10);
    if (active) {
      this.tweens.add({ targets: badge, alpha: 0.72, yoyo: true, repeat: -1, duration: 900, ease: "Sine.inOut" });
    }
    monument.add([badge, number]);
  });

  const sign = this.add.graphics().setDepth(12);
  sign.fillStyle(0x26221f, 0.92);
  sign.lineStyle(2, 0xfffbf2, 0.84);
  sign.fillRoundedRect(x - 62, baseY + 62, 124, 40, 13);
  sign.strokeRoundedRect(x - 62, baseY + 62, 124, 40, 13);
  text(this, x, baseY + 70, "Ascension Tower", 10, "#ffffff", { weight: "900", align: "center" }).setOrigin(0.5, 0).setDepth(13);
  text(this, x, baseY + 86, `${this.progress.xp} XP`, 9, "#fff0c7", { weight: "900", align: "center" }).setOrigin(0.5, 0).setDepth(13);
  const zone = this.add.zone(x, baseY - 80, 128, 330).setInteractive({ useHandCursor: true }).setDepth(14);
  zone.on("pointerdown", () => this.openLadder());
  this.rankTotem = monument;
};

CampusScene.prototype.createQuest = function createQuest() {
  const mission = nextMission(this.progress);
  const strip = this.add.graphics().setDepth(28);
  strip.fillStyle(0xfffbf2, 1);
  strip.fillRect(0, 92, this.scale.width, CAMPUS_TOP_UI_HEIGHT - 92);
  strip.fillStyle(0xfff0c7, 1);
  strip.fillRoundedRect(14, 102, this.scale.width - 28, 34, 15);
  strip.fillStyle(0xffffff, 0.72);
  strip.fillRoundedRect(20, 108, this.scale.width - 40, 10, 5);
  strip.lineStyle(2, 0x26221f, 0.18);
  strip.lineBetween(0, CAMPUS_TOP_UI_HEIGHT - 1, this.scale.width, CAMPUS_TOP_UI_HEIGHT - 1);
  strip.lineStyle(1.4, 0x26221f, 0.22);
  strip.strokeRoundedRect(14, 102, this.scale.width - 28, 34, 15);
  text(this, 30, 113, "NEXT", 9, "#d77458", { weight: "900" }).setDepth(29);
  this.questText = text(this, 76, 109, `${mission.title}: ${mission.short}`, 12.5, "#26221f", {
    weight: "900",
    wordWrap: { width: this.scale.width - 104 }
  }).setDepth(29);
};

CampusScene.prototype.createViewportChrome = function createViewportChrome() {
  const frame = this.add.graphics().setDepth(27).setScrollFactor(0);
  const top = CAMPUS_TOP_UI_HEIGHT;
  const bottom = this.scale.height - CAMPUS_BOTTOM_UI_HEIGHT;
  frame.lineStyle(2, 0xffffff, 0.78);
  frame.lineBetween(0, top + 1, this.scale.width, top + 1);
  frame.lineStyle(2, 0x26221f, 0.13);
  frame.lineBetween(0, bottom - 1, this.scale.width, bottom - 1);
  frame.fillStyle(0x26221f, 0.1);
  frame.fillRect(0, top, this.scale.width, 8);
  frame.fillStyle(0xffffff, 0.16);
  frame.fillRect(0, bottom - 8, this.scale.width, 8);
};

CampusScene.prototype.createMina = function createMina() {
  const speech = this.add.graphics().setDepth(39);
  const y = this.scale.height - CAMPUS_BOTTOM_UI_HEIGHT;
  speech.fillStyle(0xfffbf2, 1);
  speech.fillRect(0, y, this.scale.width, CAMPUS_BOTTOM_UI_HEIGHT);
  speech.lineStyle(2, 0x26221f, 0.18);
  speech.lineBetween(0, y, this.scale.width, y);
  speech.fillStyle(0xfff0c7, 1);
  speech.lineStyle(2, 0x26221f, 0.34);
  speech.fillRoundedRect(14, y + 10, this.scale.width - 28, 62, 20);
  speech.strokeRoundedRect(14, y + 10, this.scale.width - 28, 62, 20);
  speech.fillStyle(0xd77458, 0.08);
  speech.fillCircle(this.scale.width - 64, y + 44, 50);
  speech.fillStyle(0x77a7c7, 0.07);
  speech.fillCircle(60, y + 70, 38);
  speech.fillStyle(0xffffff, 0.52);
  speech.fillRoundedRect(88, y + 19, this.scale.width - 124, 12, 6);
  speech.fillPoints([
    new Phaser.Geom.Point(58, y + 72),
    new Phaser.Geom.Point(78, y + 72),
    new Phaser.Geom.Point(64, y + 88)
  ], true);
  speech.lineBetween(58, y + 72, 64, y + 88);
  speech.lineBetween(64, y + 88, 78, y + 72);
  this.add.circle(50, y + 42, 25, 0xfffbf2, 1).setStrokeStyle(1.4, 0xd77458, 0.44).setDepth(40);
  this.add.image(50, y + 44, "minaConfident").setDisplaySize(46, 46).setDepth(41);
  this.minaText = text(this, 84, y + 25, "Drag the campus in any direction. Tap a mission room when you are ready.", 11.5, "#26221f", {
    weight: "900",
    wordWrap: { width: this.scale.width - 118 }
  }).setDepth(41);
};

CampusScene.prototype.createPreview = function createPreview() {
  const width = this.scale.width - 36;
  const top = this.scale.height - 342;
  this.preview = this.add.container(18, top).setDepth(45).setScrollFactor(0).setVisible(false);

  const bg = this.add.graphics();
  bg.fillStyle(0xfffbf2, 0.94);
  bg.lineStyle(2.2, 0x26221f, 0.7);
  bg.fillRoundedRect(0, 0, width, 148, 18);
  bg.strokeRoundedRect(0, 0, width, 148, 18);
  bg.lineStyle(1, 0xffffff, 0.82);
  bg.lineBetween(20, 12, width - 20, 12);

  this.previewTitle = text(this, 18, 16, "", 19, "#26221f", { weight: "900" });
  this.previewMeta = text(this, 18, 45, "", 11, "#d77458", { weight: "900" });
  this.previewBody = text(this, 18, 68, "", 12, "#6f655c", {
    weight: "800",
    wordWrap: { width: width - 36 }
  });

  const enterX = 18;
  const enterY = 100;
  const enterW = width - 36;
  const enterH = 36;
  const enterBg = this.add.graphics();
  enterBg.fillStyle(0x26221f, 0.96);
  enterBg.lineStyle(1.6, 0xffffff, 0.72);
  enterBg.fillRoundedRect(enterX, enterY, enterW, enterH, 13);
  enterBg.strokeRoundedRect(enterX, enterY, enterW, enterH, 13);
  const enterText = text(this, width / 2, enterY + 9, "Enter Mission", 13, "#ffffff", { weight: "900", align: "center" }).setOrigin(0.5, 0);
  const enterZone = this.add.zone(enterX, enterY, enterW, enterH).setOrigin(0, 0).setInteractive({
    hitArea: new Phaser.Geom.Rectangle(0, 0, enterW, enterH),
    hitAreaCallback: Phaser.Geom.Rectangle.Contains,
    useHandCursor: true
  });
  enterZone.on("pointerdown", () => this.enterMission());

  this.preview.add([bg, this.previewTitle, this.previewMeta, this.previewBody, enterBg, enterText, enterZone]);
};

CampusScene.prototype.createLadderView = function createLadderView() {
  const width = this.scale.width - 28;
  const height = Math.min(620, this.scale.height - 148);
  const x = 14;
  const y = 82;
  const currentIndex = getTierIndex(this.progress.xp);
  const currentTier = tiers[currentIndex];
  const nextTier = tiers[currentIndex + 1];
  const maxXp = tiers[tiers.length - 1].xp;
  const progressRatio = Phaser.Math.Clamp(this.progress.xp / maxXp, 0, 1);

  this.ladderView = this.add.container(0, 0).setDepth(60).setScrollFactor(0).setVisible(false);

  const shade = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x171412, 0.48).setOrigin(0, 0);
  shade.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.scale.width, this.scale.height), Phaser.Geom.Rectangle.Contains);
  const bg = this.add.graphics();
  bg.fillStyle(0x1f1b19, 0.98);
  bg.lineStyle(3, 0xfff0c7, 0.72);
  bg.fillRoundedRect(x, y, width, height, 24);
  bg.strokeRoundedRect(x, y, width, height, 24);
  bg.fillStyle(0xd77458, 0.18);
  bg.fillCircle(x + 42, y + 64, 82);
  bg.fillStyle(0x77a7c7, 0.13);
  bg.fillCircle(x + width - 46, y + 142, 92);
  bg.fillStyle(0xe5bc58, 0.12);
  bg.fillCircle(x + width - 68, y + height - 90, 106);
  bg.fillStyle(0xfffbf2, 0.08);
  bg.fillRoundedRect(x + 12, y + 12, width - 24, 86, 22);
  bg.lineStyle(1, 0xffffff, 0.18);
  bg.lineBetween(x + 28, y + 24, x + width - 28, y + 24);
  bg.fillStyle(0xd77458, 0.86);
  bg.fillRoundedRect(x + 26, y + 83, width - 52, 5, 3);
  const headerTone = screenTone(this, x + 16, y + 14, width - 32, 78, 0xffffff, 0.05);

  const title = text(this, x + 26, y + 25, "Ascension Path", 22, "#ffffff", { weight: "900" });
  const sub = text(this, x + 26, y + 55, `${currentTier.name} | ${this.progress.xp} XP`, 10.5, "#fff0c7", {
    weight: "900",
    wordWrap: { width: width - 116 }
  });
  const progressShell = this.add.graphics();
  progressShell.fillStyle(0xfffbf2, 0.14);
  progressShell.fillRoundedRect(x + 26, y + 102, width - 52, 14, 7);
  progressShell.lineStyle(1, 0xffffff, 0.22);
  progressShell.strokeRoundedRect(x + 26, y + 102, width - 52, 14, 7);
  progressShell.fillStyle(0xe5bc58, 0.96);
  progressShell.fillRoundedRect(x + 30, y + 106, (width - 60) * progressRatio, 6, 3);
  const crown = this.add.star(x + width - 58, y + 54, 7, 11, 24, 0xe5bc58, 0.98).setStrokeStyle(2, 0xfffbf2, 0.78);
  const closeBg = this.add.graphics();
  closeBg.fillStyle(0xfffbf2, 0.18);
  closeBg.lineStyle(1.4, 0xfffbf2, 0.45);
  closeBg.fillRoundedRect(x + width - 42, y + 20, 26, 26, 9);
  closeBg.strokeRoundedRect(x + width - 42, y + 20, 26, 26, 9);
  const closeText = text(this, x + width - 29, y + 25, "X", 11, "#ffffff", { weight: "900" }).setOrigin(0.5, 0);
  const closeZone = this.add.zone(x + width - 52, y + 24, 30, 30).setOrigin(0, 0).setInteractive({
    hitArea: new Phaser.Geom.Rectangle(0, 0, 30, 30),
    hitAreaCallback: Phaser.Geom.Rectangle.Contains,
    useHandCursor: true
  });
  closeZone.on("pointerdown", () => this.hideLadder());

  const pathTop = y + 154;
  const pathBottom = y + height - 124;
  const pathH = pathBottom - pathTop;
  const pathPoints = tiers.map((tier, index) => {
    const t = index / (tiers.length - 1);
    return {
      x: x + 66 + (index % 2) * 44,
      y: pathBottom - pathH * t
    };
  });
  const track = this.add.graphics();
  track.lineStyle(13, 0xfffbf2, 0.16);
  pathPoints.forEach((point, index) => {
    if (!index) return;
    const prev = pathPoints[index - 1];
    track.lineBetween(prev.x, prev.y, point.x, point.y);
  });
  track.lineStyle(7, 0xd77458, 0.82);
  pathPoints.forEach((point, index) => {
    if (!index || index > currentIndex) return;
    const prev = pathPoints[index - 1];
    track.lineBetween(prev.x, prev.y, point.x, point.y);
  });
  track.lineStyle(2, 0xffffff, 0.42);
  pathPoints.forEach((point, index) => {
    if (!index || index > currentIndex) return;
    const prev = pathPoints[index - 1];
    track.lineBetween(prev.x - 2, prev.y - 2, point.x - 2, point.y - 2);
  });
  const rungItems = [];

  tiers.forEach((tier, tierIndex) => {
    const point = pathPoints[tierIndex];
    const reached = tierIndex <= currentIndex;
    const active = tierIndex === currentIndex;
    const meta = RANK_META[tierIndex];
    const block = this.add.graphics();
    const cardX = x + 126;
    const cardY = point.y - 28;
    const cardW = width - 156;
    const cardH = active ? 60 : 52;
    if (active) {
      block.fillStyle(0xe5bc58, 0.18);
      block.fillRoundedRect(x + 34, point.y - 36, width - 62, 72, 22);
      block.fillStyle(meta.color, 0.18);
      block.fillCircle(point.x, point.y, 42);
    }
    block.fillStyle(reached ? meta.color : 0xfffbf2, reached ? 0.98 : 0.28);
    block.lineStyle(active ? 3 : 1.4, active ? 0xe5bc58 : 0xfffbf2, active ? 0.95 : 0.32);
    if (tierIndex >= 4) {
      block.fillRoundedRect(point.x - 24, point.y - 24, 48, 48, 13);
      block.strokeRoundedRect(point.x - 24, point.y - 24, 48, 48, 13);
    } else {
      block.fillCircle(point.x, point.y, active ? 25 : 20);
      block.strokeCircle(point.x, point.y, active ? 25 : 20);
    }
    block.fillStyle(0xffffff, reached ? 0.22 : 0.5);
    block.fillCircle(point.x - 7, point.y - 8, active ? 8 : 6);
    block.fillStyle(active ? 0xfff0c7 : reached ? meta.accent : 0xfffbf2, active ? 0.97 : reached ? 0.86 : 0.16);
    block.lineStyle(active ? 2 : 1, active ? 0xe5bc58 : 0xfffbf2, active ? 0.88 : 0.22);
    block.fillRoundedRect(cardX, cardY, cardW, cardH, 16);
    block.strokeRoundedRect(cardX, cardY, cardW, cardH, 16);
    block.fillStyle(0xffffff, active ? 0.34 : 0.16);
    block.fillRoundedRect(cardX + 12, cardY + 8, cardW - 24, 8, 4);
    const icon = reached ? "ON" : "LOCK";
    const badge = text(this, point.x, point.y - 7, icon, reached ? 7.5 : 6.5, reached ? "#ffffff" : "#fff0c7", {
      weight: "900",
      align: "center"
    }).setOrigin(0.5, 0);
    const name = text(this, cardX + 14, cardY + 13, tier.name, tier.name.length > 22 ? 10.5 : 11.5, active ? "#26221f" : reached ? "#453f39" : "#fff0c7", {
      weight: "900",
      wordWrap: { width: cardW - 28 }
    });
    const xp = text(this, cardX + 14, cardY + 34, `${tier.xp} XP - ${meta.short}`, 8.2, active ? "#d77458" : reached ? "#756b62" : "#d7c9b6", {
      weight: "900",
      wordWrap: { width: cardW - 28 }
    });
    const reward = this.add.graphics();
    reward.fillStyle(reached ? 0xe5bc58 : 0x6f655c, reached ? 0.94 : 0.42);
    reward.lineStyle(1.2, reached ? 0xfffbf2 : 0xfffbf2, reached ? 0.8 : 0.28);
    reward.fillRoundedRect(cardX + cardW - 34, cardY + cardH - 26, 22, 18, 5);
    reward.strokeRoundedRect(cardX + cardW - 34, cardY + cardH - 26, 22, 18, 5);
    reward.lineBetween(cardX + cardW - 23, cardY + cardH - 26, cardX + cardW - 23, cardY + cardH - 8);
    reward.lineBetween(cardX + cardW - 34, cardY + cardH - 18, cardX + cardW - 12, cardY + cardH - 18);
    rungItems.push(block, badge, name, xp);
    rungItems.push(reward);
    if (active) {
      const glow = this.add.circle(point.x, point.y, 42, 0xe5bc58, 0.16);
      glow.setBlendMode(Phaser.BlendModes.ADD);
      this.tweens.add({ targets: glow, alpha: 0.34, scale: 1.08, yoyo: true, repeat: -1, duration: 900, ease: "Sine.inOut" });
      rungItems.push(glow);
      const avatar = this.add.image(point.x - 36, point.y + 4, "amiraFront").setDisplaySize(21, 40);
      rungItems.push(avatar);
    }
  });

  const footer = this.add.graphics();
  footer.fillStyle(0x26221f, 0.92);
  footer.lineStyle(1.4, 0xe5bc58, 0.66);
  footer.fillRoundedRect(x + 18, y + height - 72, width - 36, 52, 17);
  footer.strokeRoundedRect(x + 18, y + height - 72, width - 36, 52, 17);
  const footerText = nextTier
    ? `${nextTier.xp - this.progress.xp} XP to reach ${nextTier.name}`
    : "You are at the top of the Inner Circle.";
  const footerCopy = text(this, x + 34, y + height - 58, footerText, 12, "#ffffff", {
    weight: "900",
    wordWrap: { width: width - 68 }
  });
  const footerSmall = text(this, x + 34, y + height - 37, "Complete campus missions to climb the tower.", 8.5, "#fff0c7", {
    weight: "900",
    wordWrap: { width: width - 68 }
  });

  this.ladderView.add([shade, bg, headerTone, title, sub, crown, closeBg, closeText, closeZone, track, ...rungItems, footer, footerCopy, footerSmall]);
};

CampusScene.prototype.openLadder = function openLadder() {
  this.hidePreview();
  if (this.ladderView) this.ladderView.setVisible(true);
  const targetScrollX = Phaser.Math.Clamp(this.worldWidth - this.scale.width, 0, this.worldWidth - this.scale.width);
  const targetScrollY = Phaser.Math.Clamp(this.worldHeight - this.scale.height, 0, this.worldHeight - this.scale.height);
  this.tweens.add({ targets: this.cameras.main, scrollX: targetScrollX, scrollY: targetScrollY, duration: 420, ease: "Sine.easeInOut" });
  this.say("This is your VIP Rank Totem. Complete missions to climb toward Market Oracle.");
};

CampusScene.prototype.hideLadder = function hideLadder() {
  if (this.ladderView) this.ladderView.setVisible(false);
};

CampusScene.prototype.createBottomMenu = function createBottomMenu() {
  const nav = this.add.graphics().setDepth(50);
  nav.fillStyle(0xfffbf2, 1);
  nav.fillRect(0, this.scale.height - 92, this.scale.width, 92);
  nav.lineStyle(2, 0x26221f, 0.16);
  nav.lineBetween(0, this.scale.height - 92, this.scale.width, this.scale.height - 92);
  nav.fillStyle(0x26221f, 1);
  nav.fillRoundedRect(12, this.scale.height - 78, this.scale.width - 24, 58, 20);
  nav.fillStyle(0xffffff, 0.08);
  nav.fillRoundedRect(22, this.scale.height - 70, this.scale.width - 44, 10, 5);
  nav.fillStyle(0xd77458, 0.14);
  nav.fillCircle(56, this.scale.height - 50, 42);
  nav.fillStyle(0x77a7c7, 0.1);
  nav.fillCircle(this.scale.width - 70, this.scale.height - 46, 50);
  nav.lineStyle(1, 0xffffff, 0.32);
  nav.lineBetween(28, this.scale.height - 77, this.scale.width - 28, this.scale.height - 77);
  const items = [
    ["Missions", 58],
    ["Profile", 126],
    ["Ladder", 194],
    ["Perks", 262],
    ["Guide", 330]
  ];
  items.forEach(([label, x]) => {
    const active = label === "Missions";
    const hit = this.add.zone(x, this.scale.height - 50, 62, 54).setInteractive({
      hitArea: new Phaser.Geom.Rectangle(-31, -27, 62, 54),
      hitAreaCallback: Phaser.Geom.Rectangle.Contains,
      useHandCursor: true
    }).setDepth(54);
    if (active) {
      const activeBg = this.add.graphics().setDepth(51);
      activeBg.fillStyle(0xfff0c7, 1);
      activeBg.fillRoundedRect(x - 27, this.scale.height - 70, 54, 38, 15);
      activeBg.lineStyle(1.3, 0xe5bc58, 0.82);
      activeBg.strokeRoundedRect(x - 27, this.scale.height - 70, 54, 38, 15);
    }
    navIcon(this, label, x, this.scale.height - 56, active ? 0xd77458 : 0xfffbf2, 52).setScrollFactor(0);
    text(this, x, this.scale.height - 39, label, 8.6, active ? "#fff0c7" : "#ffffff", { weight: "900", align: "center" }).setOrigin(0.5, 0).setDepth(53);
    hit.on("pointerdown", () => {
      if (label === "Guide") this.say("Tap a building, wait for Mina to arrive, then press Enter.");
      if (label === "Ladder") this.openLadder();
      if (label === "Perks") this.say("Perks unlock through EXP. Founder recaps and early access come later.");
      if (label === "Profile") this.say("Your VIP profile is linked to your mission signals.");
      if (label === "Missions") {
        this.hideLadder();
        this.say("Choose a mission room on the campus map.");
      }
    });
  });
};

CampusScene.prototype.moveTo = function moveTo(x, y, onComplete) {
  this.tweens.killTweensOf([this.player, this.playerShadow]);
  const clampedX = Phaser.Math.Clamp(x, 34, this.worldWidth - 34);
  const clampedY = Phaser.Math.Clamp(y, 120, this.worldHeight - 90);
  const pose = this.setPlayerDirection(clampedX, clampedY);
  const shadowY = clampedY + 30;
  const duration = Phaser.Math.Distance.Between(this.player.x, this.player.y, clampedX, clampedY) * 4.3;
  const safeDuration = Phaser.Math.Clamp(duration, 220, 1200);
  const viewHeight = this.scale.height - this.topUiHeight - this.bottomUiHeight;
  const targetScrollX = Phaser.Math.Clamp(clampedX - this.scale.width / 2, 0, this.worldWidth - this.scale.width);
  const targetScrollY = Phaser.Math.Clamp(clampedY - this.topUiHeight - viewHeight / 2, 0, this.worldHeight - this.scale.height);
  this.player.setScale(1);
  this.player.setAngle(pose?.angle || 0);
  this.player.setDisplaySize(pose.width, this.playerBaseHeight);
  this.player.setDepth(20 + clampedY / 1000);
  this.tweens.add({
    targets: this.player,
    x: clampedX,
    y: clampedY,
    duration: safeDuration,
    ease: "Sine.easeInOut",
    onUpdate: () => {
      this.player.setDepth(20 + this.player.y / 1000);
      this.playerShadow.setDepth(this.player.depth - 0.01);
    },
    onComplete: () => {
      const currentPose = AMIRA_POSES[this.playerPoseIndex || 4];
      this.player.setScale(1);
      this.player.setAngle(currentPose.angle);
      this.player.setDisplaySize(currentPose.width, this.playerBaseHeight);
      if (onComplete) onComplete();
    }
  });
  this.tweens.add({
    targets: this.playerShadow,
    x: clampedX,
    y: shadowY,
    duration: safeDuration,
    ease: "Sine.easeInOut"
  });
  this.tweens.add({
    targets: this.cameras.main,
    scrollX: targetScrollX,
    scrollY: targetScrollY,
    duration: safeDuration,
    ease: "Sine.easeInOut"
  });
};

CampusScene.prototype.enterMission = function enterMission(mission = this.selectedMission) {
  if (!mission) return;
  this.scene.start("MissionScene", { mission });
};

CampusScene.prototype.goToMission = function goToMission(mission) {
  if (this.selectedMission?.id === mission.id && this.preview?.visible) {
    this.enterMission(mission);
    return;
  }
  this.selectedMission = mission;
  this.hidePreview();
  this.say(`Walking to ${mission.title}. Tap Enter, or tap ${mission.title} again when we arrive.`);
  this.moveTo(mission.x, mission.y + 58, () => this.showPreview(mission));
};

CampusScene.prototype.showPreview = function showPreview(mission) {
  this.selectedMission = mission;
  this.preview.setVisible(true);
  this.previewTitle.setText(mission.title);
  this.previewMeta.setText(`${mission.room} | ${mission.time} | +${mission.xp} XP`);
  this.previewBody.setText(mission.prompt);
  this.say(`This is ${mission.room}. Tap Enter, or tap ${mission.title} again to begin.`);
};

const config = {
  type: Phaser.AUTO,
  parent: "phaser-game",
  backgroundColor: "#fff8eb",
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.NO_CENTER,
    width: Math.max(GAME_WIDTH, viewportWidth()),
    height: Math.max(GAME_HEIGHT, viewportHeight())
  },
  input: {
    activePointers: 3
  },
  scene: [BootScene, StartScene, CampusScene, MissionScene, ResultScene]
};

function startGame() {
  if (window.circleOfTrustGameStarted) return;
  window.circleOfTrustGameStarted = true;
  try {
    if (!window.Phaser) throw new Error("Phaser runtime was not loaded.");
    new Phaser.Game(config);
    document.body.classList.add("game-ready");
  } catch (error) {
    const fallback = document.querySelector("#fallback-screen p");
    if (fallback) fallback.textContent = `Game failed to start: ${error.message}`;
    console.error(error);
  }
}

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", startGame, { once: true });
} else {
  startGame();
}
