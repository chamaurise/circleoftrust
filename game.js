const GAME_WIDTH = 390;
const GAME_HEIGHT = 780;
const STORAGE_KEY = "circleOfTrustPhaserProgress";

const missions = [
  {
    id: "duel",
    title: "Footwear Duel",
    short: "Head to head",
    xp: 80,
    time: "2 min",
    color: 0xd77458,
    x: 100,
    y: 218,
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
    x: 284,
    y: 204,
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
    x: 286,
    y: 350,
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
    x: 104,
    y: 452,
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
    x: 288,
    y: 500,
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

function getTier(xp) {
  return tiers.reduce((current, tier) => (xp >= tier.xp ? tier : current), tiers[0]);
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

class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    this.load.image("campus", "assets/cartoon-campus.webp");
    this.load.image("avatar", "assets/cartoon-avatar.webp");
    this.load.image("walk", "assets/cartoon-walk.webp");
  }

  create() {
    const params = new URLSearchParams(window.location.search);
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
    text(this, 140, 342, "Circle Pass", 23, "#26221f", { weight: "900" });
    text(this, 140, 374, "VIP campus access ready", 14, "#6f655c", { weight: "900" });
    pill(this, width - 116, 390, 58, 32, 0xd77458);
    text(this, width - 101, 397, "Lv. 01", 13, "#ffffff", { weight: "900" });

    panel(this, 44, 458, width - 88, 134, 22, 0xfff0c7);
    this.add.image(82, 528, "avatar").setDisplaySize(48, 78).setOrigin(0.5, 0.68);
    text(
      this,
      116,
      480,
      "Walk the campus and complete the design missions to earn status points. Collect Sunday Staples gift cards and even Krisflyer miles from our monthly lucky draws!",
      12,
      "#26221f",
      {
        weight: "900",
        wordWrap: { width: width - 172 }
      }
    );

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
    this.selectedMission = mission;
    this.say(`Walking to ${mission.title}. Tap Enter when we arrive.`);
    this.moveTo(mission.x, mission.y + 58, () => this.showPreview(mission));
  }

  moveTo(x, y, onComplete) {
    this.tweens.killTweensOf([this.player, this.playerShadow]);
    const duration = Phaser.Math.Distance.Between(this.player.x, this.player.y, x, y) * 5.4;
    this.tweens.add({
      targets: [this.player, this.playerShadow],
      x,
      y: (_, target) => target === this.playerShadow ? y + 52 : y,
      duration: Phaser.Math.Clamp(duration, 220, 1200),
      ease: "Sine.easeInOut",
      onComplete
    });
    this.tweens.add({ targets: this.player, y: this.player.y - 8, yoyo: true, repeat: -1, duration: 180, ease: "Sine.inOut" });
    this.time.delayedCall(Phaser.Math.Clamp(duration, 220, 1200), () => this.tweens.killTweensOf(this.player));
  }

  showPreview(mission) {
    this.preview.setVisible(true);
    this.previewTitle.setText(mission.title);
    this.previewMeta.setText(`${mission.room} | ${mission.time} | +${mission.xp} XP`);
    this.previewBody.setText(mission.prompt);
    this.say(`This is ${mission.room}. Your choice here becomes a founder-ready signal.`);
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
      text(this, 52, y, "Tap the contender with stronger purchase pull.", 14, "#26221f", { weight: "900" });
      [88, 260].forEach((x, index) => {
        panel(this, x - 58, y + 54, 116, 140, 18, index ? 0xfff0c7 : 0xffffff);
        this.add.ellipse(x, y + 132, 76, 36, index ? 0x72927d : 0xd77458).setStrokeStyle(3, 0x26221f);
        text(this, x, y + 204, index ? "Founder Loafer" : "Cloudstep Mary Jane", 12, "#26221f", {
          weight: "900",
          align: "center",
          wordWrap: { width: 100 }
        }).setOrigin(0.5, 0);
      });
      text(this, 194, y + 116, "VS", 28, "#d77458", { weight: "900" }).setOrigin(0.5);
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
    const progress = loadProgress();
    if (!progress.completed.includes(this.mission.id)) {
      progress.completed.push(this.mission.id);
      progress.xp += this.mission.xp;
      saveProgress(progress);
    }
    this.scene.start("ResultScene", { mission: this.mission, progress });
  }
}

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

CampusScene.prototype.createControls = function createControls() {
  this.tapHint = null;
};

CampusScene.prototype.createMissionPins = function createMissionPins() {
  this.pins = missions.map((mission) => {
    const container = this.add.container(mission.x, mission.y).setDepth(10);
    const glow = this.add.circle(0, 0, 38, mission.color, 0.18);
    const marker = this.add.circle(0, 0, 8, mission.color, 0.98).setStrokeStyle(2, 0xfffbf2);
    const labelBg = this.add.graphics();
    labelBg.fillStyle(0xfffbf2, 0.78);
    labelBg.lineStyle(1.1, 0xffffff, 0.75);
    labelBg.fillRoundedRect(-54, 15, 108, 28, 10);
    labelBg.strokeRoundedRect(-54, 15, 108, 28, 10);
    const title = text(this, 0, 21, mission.title, 10, "#26221f", {
      weight: "900",
      align: "center",
      wordWrap: { width: 96 }
    }).setOrigin(0.5, 0);
    const bang = this.add.circle(48, 10, 10, this.progress.completed.includes(mission.id) ? 0x72927d : 0xd77458).setStrokeStyle(1.5, 0xfffbf2);
    const bangText = text(this, 48, 3, this.progress.completed.includes(mission.id) ? "✓" : "!", 12, "#ffffff", { weight: "900" }).setOrigin(0.5, 0);
    container.add([glow, marker, labelBg, title, bang, bangText]);
    container.setSize(120, 76).setInteractive(new Phaser.Geom.Rectangle(-60, -10, 120, 76), Phaser.Geom.Rectangle.Contains);
    container.on("pointerdown", () => this.goToMission(mission));
    this.tweens.add({ targets: glow, alpha: 0.32, scale: 1.08, yoyo: true, repeat: -1, duration: 900, ease: "Sine.inOut" });
    this.tweens.add({ targets: bang, y: bang.y - 3, yoyo: true, repeat: -1, duration: 700, ease: "Sine.inOut" });
    return { mission, container };
  });
};

CampusScene.prototype.createQuest = function createQuest() {
  const mission = nextMission(this.progress);
  const strip = this.add.graphics().setDepth(28);
  strip.fillStyle(0xfffbf2, 0.78);
  strip.lineStyle(1.1, 0xffffff, 0.7);
  strip.fillRoundedRect(18, 102, this.scale.width - 36, 38, 13);
  strip.strokeRoundedRect(18, 102, this.scale.width - 36, 38, 13);
  text(this, 34, 113, "NEXT", 10, "#d77458", { weight: "900" }).setDepth(29);
  this.questText = text(this, 76, 109, `${mission.title}: ${mission.short}`, 13, "#26221f", {
    weight: "900",
    wordWrap: { width: this.scale.width - 104 }
  }).setDepth(29);
};

CampusScene.prototype.createMina = function createMina() {
  const speech = this.add.graphics().setDepth(39);
  speech.fillStyle(0xfff0c7, 0.84);
  speech.lineStyle(1.2, 0xffffff, 0.72);
  speech.fillRoundedRect(14, this.scale.height - 166, this.scale.width - 28, 60, 18);
  speech.strokeRoundedRect(14, this.scale.height - 166, this.scale.width - 28, 60, 18);
  this.add.image(48, this.scale.height - 134, "avatar").setDisplaySize(36, 58).setDepth(41);
  this.minaText = text(this, 78, this.scale.height - 152, "I am Mina. Tap any mission room and I will walk you there.", 13, "#26221f", {
    weight: "900",
    wordWrap: { width: this.scale.width - 106 }
  }).setDepth(41);
};

CampusScene.prototype.createBottomMenu = function createBottomMenu() {
  const nav = this.add.graphics().setDepth(50);
  nav.fillStyle(0xfffbf2, 0.86);
  nav.lineStyle(1.2, 0xffffff, 0.72);
  nav.fillRoundedRect(14, this.scale.height - 86, this.scale.width - 28, 64, 20);
  nav.strokeRoundedRect(14, this.scale.height - 86, this.scale.width - 28, 64, 20);
  const items = [
    ["Missions", 58],
    ["Profile", 126],
    ["Ladder", 194],
    ["Perks", 262],
    ["Guide", 330]
  ];
  items.forEach(([label, x]) => {
    const active = label === "Missions";
    const circle = this.add.circle(x, this.scale.height - 58, 14, active ? 0xfff0c7 : 0xffffff, active ? 0.98 : 0.5).setStrokeStyle(1.25, active ? 0xd77458 : 0x26221f, active ? 0.85 : 0.35).setDepth(51);
    text(this, x, this.scale.height - 41, label, 9, "#26221f", { weight: "900", align: "center" }).setOrigin(0.5, 0).setDepth(51);
    circle.setInteractive();
    circle.on("pointerdown", () => {
      if (label === "Guide") this.say("Tap a building, wait for Mina to arrive, then press Enter.");
      if (label === "Ladder") this.say(`Current rank: ${getTier(this.progress.xp).name}. Earn EXP from missions to climb.`);
      if (label === "Perks") this.say("Perks unlock through EXP. Founder recaps and early access come later.");
      if (label === "Profile") this.say("Your VIP profile is linked to your mission signals.");
      if (label === "Missions") this.say("Choose a mission room on the campus map.");
    });
  });
};

CampusScene.prototype.moveTo = function moveTo(x, y, onComplete) {
  this.tweens.killTweensOf([this.player, this.playerShadow]);
  const clampedX = Phaser.Math.Clamp(x, 34, this.scale.width - 34);
  const clampedY = Phaser.Math.Clamp(y, 120, this.scale.height - 190);
  const shadowY = clampedY + 50;
  const duration = Phaser.Math.Distance.Between(this.player.x, this.player.y, clampedX, clampedY) * 4.3;
  const safeDuration = Phaser.Math.Clamp(duration, 220, 1200);
  this.tweens.add({
    targets: this.player,
    x: clampedX,
    y: clampedY,
    duration: safeDuration,
    ease: "Sine.easeInOut",
    onComplete
  });
  this.tweens.add({
    targets: this.playerShadow,
    x: clampedX,
    y: shadowY,
    duration: safeDuration,
    ease: "Sine.easeInOut"
  });
  this.tweens.add({ targets: this.player, scaleY: 0.96, yoyo: true, repeat: -1, duration: 160, ease: "Sine.inOut" });
  this.time.delayedCall(safeDuration, () => {
    this.tweens.killTweensOf(this.player);
    this.player.setScale(1);
    this.player.setDisplaySize(54, 98);
  });
};

const config = {
  type: Phaser.AUTO,
  parent: "phaser-game",
  backgroundColor: "#fff8eb",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.NO_CENTER,
    width: GAME_WIDTH,
    height: GAME_HEIGHT
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
