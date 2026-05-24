const shoes = [
  "Cloudstep Mary Jane",
  "Founder Loafer",
  "Sunday Slingback",
  "Market Walk Sneaker"
];

const duelPairs = [
  {
    left: shoes[0],
    right: shoes[1],
    leftDetail: "Soft mary jane with cloud-cushion outsole",
    rightDetail: "Polished loafer with founder-signature buckle"
  },
  {
    left: shoes[2],
    right: shoes[3],
    leftDetail: "Dress-up slingback with occasion-ready polish",
    rightDetail: "Comfort-led sneaker for long city days"
  }
];

const duelMetrics = [
  {
    id: "first-impression",
    label: "First impression",
    left: "More charming",
    right: "More elevated"
  },
  {
    id: "purchase-intent",
    label: "Purchase intent",
    left: "I would buy the Mary Jane",
    right: "I would buy the Loafer"
  },
  {
    id: "comfort-belief",
    label: "Comfort belief",
    left: "Feels easier all day",
    right: "Feels more structured"
  },
  {
    id: "premium-signal",
    label: "Premium signal",
    left: "Cute premium",
    right: "Quiet luxury"
  }
];

const impressionTags = ["Instant want", "Looks comfortable", "Feels premium", "Easy to style", "Worth paying more"];

const priceBands = [
  { max: 89, label: "Easy yes" },
  { max: 139, label: "Comfort zone" },
  { max: 189, label: "Premium stretch" },
  { max: 249, label: "Only if obsessed" }
];

const occasionOptions = ["Work meetings", "Weekend brunch", "Travel day", "Dinner date", "School run", "Founder event"];

const founderCards = [
  {
    value: "Prototype the highest-intent shoe first",
    title: "Prototype Sprint",
    detail: "Move the strongest purchase-intent concept into sample development."
  },
  {
    value: "Run a KOL try-on salon before production",
    title: "KOL Salon",
    detail: "Invite tastemakers into a fitting room session before the buy is locked."
  },
  {
    value: "Adjust pricing and retest comfort ceiling",
    title: "Price Retest",
    detail: "Stress-test value perception before finalizing retail price."
  },
  {
    value: "Create occasion-specific campaign concepts",
    title: "Occasion Campaign",
    detail: "Build campaign angles around the moments customers already imagine."
  }
];

const missionData = {
  duel: {
    type: "Mission 1",
    title: "Footwear Duel",
    intro: "Pick the shoe you would rather buy when shown head to head.",
    log: "Head-to-head comparison complete",
    xp: 80,
    deskItem: "duel-card",
    guide: "A clean head-to-head helps the studio see instinct, not overthinking.",
    stake: "Decides which silhouette earns the next sample slot.",
    customerHook: "Your vote can push a contender into the first prototype sprint.",
    estimatedTime: "2 min",
    impactUnit: "sample confidence"
  },
  rank: {
    type: "Mission 2",
    title: "Intent Studio",
    intro: "Rank the shoes by purchase intent, from strongest to weakest.",
    log: "Purchase-intent ranking complete",
    xp: 110,
    deskItem: "rank-notes",
    guide: "Rank with your gut first. The order tells us what deserves the sharper prototype.",
    stake: "Sets the priority order for launch planning.",
    customerHook: "Your order helps the team avoid backing the loudest concept over the most buyable one.",
    estimatedTime: "90 sec",
    impactUnit: "intent clarity"
  },
  price: {
    type: "Mission 3",
    title: "Price Lab",
    intro: "Slide each shoe to the highest comfortable buying price.",
    log: "Comfortable price ceilings submitted",
    xp: 100,
    deskItem: "price-tag",
    guide: "The ceiling matters more than a dream price. Show us where desire meets comfort.",
    stake: "Finds the premium ceiling before pricing is locked.",
    customerHook: "Your ceiling helps protect the launch from being underpriced or overreaching.",
    estimatedTime: "2 min",
    impactUnit: "price confidence"
  },
  occasion: {
    type: "Mission 4",
    title: "Occasion Plaza",
    intro: "Tell the team which occasion each shoe fits best.",
    log: "Occasion fit mapped",
    xp: 90,
    deskItem: "calendar",
    guide: "Occasions reveal the role each shoe can play in real life.",
    stake: "Shapes campaign styling, product copy, and merchandised use cases.",
    customerHook: "Your occasion map tells us where the shoe should live in real wardrobes.",
    estimatedTime: "90 sec",
    impactUnit: "positioning fit"
  },
  founder: {
    type: "Mission 5",
    title: "Founder Desk",
    intro: "Choose what the founder should do next based on your read of the market.",
    log: "Founder action selected",
    xp: 120,
    deskItem: "founder-pin",
    stake: "Turns VIP reads into a concrete founder action.",
    customerHook: "Your call helps decide whether we sample, retest, price, or campaign next.",
    estimatedTime: "1 min",
    impactUnit: "founder priority",
    guide: "This is your direct line to the founder’s next move. Pick the action with highest leverage."
  }
};

const tiers = [
  {
    name: "Founding Signal Partner",
    xp: 0,
    perk: "Invited into the private mission campus"
  },
  {
    name: "Trend Scout",
    xp: 100,
    perk: "Unlocks early reads on emerging customer preferences"
  },
  {
    name: "Category Insider",
    xp: 200,
    perk: "Receives category-specific concept previews"
  },
  {
    name: "Launch Circle",
    xp: 300,
    perk: "Gets early access to launch concepts shaped by VIP signals"
  },
  {
    name: "Product Council Member",
    xp: 400,
    perk: "Can influence priority product and messaging decisions"
  },
  {
    name: "Market Oracle",
    xp: 500,
    perk: "Receives highest-status founder briefings and signal recaps"
  }
];

const accessories = [
  {
    id: "tote",
    name: "Signal Tote",
    tier: "Trend Scout",
    xp: 100,
    className: "has-tote"
  },
  {
    id: "badge",
    name: "Insider Badge",
    tier: "Category Insider",
    xp: 200,
    className: "has-badge"
  },
  {
    id: "glasses",
    name: "Launch Glasses",
    tier: "Launch Circle",
    xp: 300,
    className: "has-glasses"
  },
  {
    id: "spark",
    name: "Council Spark",
    tier: "Product Council Member",
    xp: 400,
    className: "has-spark"
  },
  {
    id: "aura",
    name: "Oracle Aura",
    tier: "Market Oracle",
    xp: 500,
    className: "has-aura"
  }
];

const rewardPerks = [
  {
    id: "points-boost",
    title: "Sunday Points Boost",
    unlockXp: 80,
    detail: "Complete one mission to qualify for bonus Sunday Points during live research waves."
  },
  {
    id: "early-window",
    title: "Early Reservation Window",
    unlockXp: 200,
    detail: "Category Insiders unlock a private reservation window for concepts shaped by VIP signals."
  },
  {
    id: "founder-note",
    title: "Founder Signal Recap",
    unlockXp: 300,
    detail: "Launch Circle members receive the founder recap on what VIP feedback changed."
  },
  {
    id: "launch-credit",
    title: "Launch Circle Credit",
    unlockXp: 400,
    detail: "Product Council Members can be featured as part of the private product council."
  },
  {
    id: "oracle-pass",
    title: "Market Oracle Pass",
    unlockXp: 500,
    detail: "Market Oracles receive first-look access to highest-stakes product decisions."
  }
];

const storageKey = "sundayStaplesVipMissionCampus";
const exportFileName = "sunday-staples-vip-signals.json";
const staffReportFileName = "sunday-staples-staff-signal-report.json";

const missionDestinations = {
  duel: { x: 18, y: 32 },
  rank: { x: 50, y: 30 },
  price: { x: 80, y: 33 },
  occasion: { x: 24, y: 72 },
  founder: { x: 77, y: 72 }
};

const state = {
  player: {
    name: "Amira",
    role: "Paying Customer",
    pointsId: "",
    stylePriority: "Comfort first",
    occasion: "Work and client meetings",
    color: "coral",
    x: 50,
    y: 74,
    direction: "down"
  },
  completed: new Set(),
  responses: {},
  xp: 0,
  activeMission: null,
  destinationMission: null,
  arrivedMission: null,
  walkAnimation: null,
  isWalking: false,
  sound: false,
  audio: null,
  walkTimer: null,
  toastTimer: null,
  tourIndex: 0,
  tourSeen: false
};

const staffState = {
  selectedId: "vip-001",
  mission: "all",
  segment: "all",
  search: ""
};

const seededParticipants = [
  {
    id: "vip-001",
    name: "Clara Tan",
    role: "Paying Customer",
    tier: "Product Council Member",
    xp: 420,
    stylePriority: "Polished versatility",
    occasion: "Work and client meetings",
    sundayPointsLinked: true,
    lastActive: "Today",
    responses: {
      duel: {
        mission: "Footwear Duel",
        insight: {
          title: "Founder Loafer is winning premium intent",
          body: "Founder Loafer beat Cloudstep Mary Jane in final selection with premium and workwear tags."
        },
        response: { winner: "Founder Loafer", confidence: 5, tags: ["Feels premium", "Easy to style"] }
      },
      price: {
        mission: "Price Lab",
        insight: {
          title: "$158 average comfort ceiling",
          body: "Founder Loafer sustains the highest ceiling at $189, suggesting room for premium positioning."
        },
        response: { ceilings: [{ shoe: "Founder Loafer", price: 189 }] }
      },
      founder: {
        mission: "Founder Desk",
        insight: {
          title: "Founder action has a mandate",
          body: "Recommended next action: Prototype the highest-intent shoe first."
        },
        response: { action: "Prototype the highest-intent shoe first" }
      }
    }
  },
  {
    id: "vip-002",
    name: "Mei Laurent",
    role: "KOL Collaborator",
    tier: "Launch Circle",
    xp: 330,
    stylePriority: "Statement details",
    occasion: "Events and dinners",
    sundayPointsLinked: true,
    lastActive: "Yesterday",
    responses: {
      duel: {
        mission: "Footwear Duel",
        insight: {
          title: "Sunday Slingback wins occasion desire",
          body: "Sunday Slingback reads as the most editorial option among KOLs for dinners and events."
        },
        response: { winner: "Sunday Slingback", confidence: 4, tags: ["Instant want", "Feels premium"] }
      },
      occasion: {
        mission: "Occasion Plaza",
        insight: {
          title: "Occasion map is now segmented",
          body: "Slingback is clustering around dinner and launch-event use cases."
        },
        response: { occasions: [{ shoe: "Sunday Slingback", occasion: "Dinner date" }] }
      }
    }
  },
  {
    id: "vip-003",
    name: "Ariel Lim",
    role: "Paying Customer",
    tier: "Category Insider",
    xp: 230,
    stylePriority: "Comfort first",
    occasion: "Travel and long walking days",
    sundayPointsLinked: true,
    lastActive: "2 days ago",
    responses: {
      duel: {
        mission: "Footwear Duel",
        insight: {
          title: "Market Walk Sneaker owns comfort credibility",
          body: "Comfort-first customers are choosing Market Walk Sneaker for long walking days."
        },
        response: { winner: "Market Walk Sneaker", confidence: 5, tags: ["Looks comfortable", "Worth paying more"] }
      },
      rank: {
        mission: "Intent Studio",
        insight: {
          title: "Market Walk Sneaker leads purchase intent",
          body: "Top-to-bottom intent order: Market Walk Sneaker, Cloudstep Mary Jane, Founder Loafer, Sunday Slingback."
        },
        response: { ranking: [{ shoe: "Market Walk Sneaker", rank: 1 }] }
      }
    }
  },
  {
    id: "vip-004",
    name: "Nadia Chua",
    role: "Paying Customer",
    tier: "Trend Scout",
    xp: 160,
    stylePriority: "Comfort first",
    occasion: "Weekend brunch",
    sundayPointsLinked: false,
    lastActive: "4 days ago",
    responses: {
      duel: {
        mission: "Footwear Duel",
        insight: {
          title: "Cloudstep Mary Jane has everyday emotional pull",
          body: "Cloudstep Mary Jane is winning on charming and easy-to-style impressions."
        },
        response: { winner: "Cloudstep Mary Jane", confidence: 4, tags: ["Instant want", "Easy to style"] }
      }
    }
  }
];

const campaignWaves = [
  {
    id: "june-footwear-sprint",
    name: "June Footwear Sprint",
    status: "Live",
    audience: "Paying customers + KOLs",
    dates: "Jun 03 - Jun 17",
    goal: "Validate first footwear capsule winners before sampling.",
    missions: ["duel", "rank", "price"],
    marketingHook: "Shape the first Sunday Staples footwear capsule.",
    reward: "2x Sunday Points on completed missions"
  },
  {
    id: "kol-launch-circle",
    name: "KOL Launch Circle",
    status: "Recruiting",
    audience: "KOL collaborators",
    dates: "Jun 20 - Jul 04",
    goal: "Stress-test event styling, content angles, and founder messaging.",
    missions: ["duel", "occasion", "founder"],
    marketingHook: "Enter the private styling room before the public launch.",
    reward: "Founder preview and launch-credit feature"
  },
  {
    id: "pricing-confidence-wave",
    name: "Pricing Confidence Wave",
    status: "Draft",
    audience: "Repeat purchasers",
    dates: "Jul 08 - Jul 15",
    goal: "Find premium stretch limits by customer segment.",
    missions: ["price", "founder"],
    marketingHook: "Help set the price before the first production decision.",
    reward: "Early access reservation window"
  }
];

const creatorModal = document.querySelector("#creatorModal");
const creatorForm = document.querySelector("#creatorForm");
const player = document.querySelector("#player");
const playerName = document.querySelector("#playerName");
const playerRole = document.querySelector("#playerRole");
const playerTier = document.querySelector("#playerTier");
const sundayPointsMeta = document.querySelector("#sundayPointsMeta");
const avatarMini = document.querySelector("#avatarMini");
const soundToggle = document.querySelector("#soundToggle");
const campus = document.querySelector("#campus");
const questLog = document.querySelector("#questLog");
const completedCount = document.querySelector("#completedCount");
const progressFill = document.querySelector("#progressFill");
const tierName = document.querySelector("#tierName");
const tierMeta = document.querySelector("#tierMeta");
const xpFill = document.querySelector("#xpFill");
const nextTier = document.querySelector("#nextTier");
const tierLadder = document.querySelector("#tierLadder");
const nextBestMission = document.querySelector("#nextBestMission");
const influenceRecap = document.querySelector("#influenceRecap");
const rewardWallet = document.querySelector("#rewardWallet");
const accessoryCase = document.querySelector("#accessoryCase");
const studioDesk = document.querySelector("#studioDesk");
const founderBriefing = document.querySelector("#founderBriefing");
const exportSignals = document.querySelector("#exportSignals");
const missionModal = document.querySelector("#missionModal");
const missionType = document.querySelector("#missionType");
const missionTitle = document.querySelector("#missionTitle");
const missionIntro = document.querySelector("#missionIntro");
const missionContent = document.querySelector("#missionContent");
const closeMission = document.querySelector("#closeMission");
const guideLine = document.querySelector("#guideLine");
const toast = document.querySelector("#toast");
const celebration = document.querySelector("#celebration");
const startTour = document.querySelector("#startTour");
const focusLadder = document.querySelector("#focusLadder");
const tourModal = document.querySelector("#tourModal");
const closeTour = document.querySelector("#closeTour");
const tourStep = document.querySelector("#tourStep");
const tourTitle = document.querySelector("#tourTitle");
const tourBody = document.querySelector("#tourBody");
const tourDestinations = document.querySelector("#tourDestinations");
const tourBack = document.querySelector("#tourBack");
const tourNext = document.querySelector("#tourNext");
const gameShell = document.querySelector(".game-shell");
const staffConsole = document.querySelector("#staffConsole");
const staffConsoleToggle = document.querySelector("#staffConsoleToggle");
const backToCampus = document.querySelector("#backToCampus");
const staffExport = document.querySelector("#staffExport");
const staffKpis = document.querySelector("#staffKpis");
const staffSearch = document.querySelector("#staffSearch");
const staffMissionFilter = document.querySelector("#staffMissionFilter");
const staffSegmentFilter = document.querySelector("#staffSegmentFilter");
const campaignWavesEl = document.querySelector("#campaignWaves");
const staffInsights = document.querySelector("#staffInsights");
const staffTable = document.querySelector("#staffTable");
const staffDetail = document.querySelector("#staffDetail");
const bottomNavButtons = document.querySelectorAll("[data-view-target]");

const tourSteps = [
  {
    title: "Welcome to your mission campus",
    body: "This is your VIP research world. Walk to any destination, complete a mission, and turn your taste into a useful market signal.",
    destinations: ["Footwear Duel", "Intent Studio", "Price Lab", "Occasion Plaza", "Founder Desk"]
  },
  {
    title: "Every studio has a research job",
    body: "Footwear Duel captures head-to-head preference, Intent Studio ranks purchase intent, Price Lab finds price comfort, Occasion Plaza maps use cases, and Founder Desk gathers strategic advice.",
    destinations: ["Comparison", "Ranking", "Price sensitivity", "Occasion fit", "Founder action"]
  },
  {
    title: "Missions award EXP",
    body: "Each completed mission gives EXP once. EXP unlocks status, accessories, Sunday Points opportunities, early access, and a richer role in the Sunday Staples co-creation circle.",
    destinations: Object.values(missionData).map((mission) => `${mission.title}: +${mission.xp} XP`)
  },
  {
    title: "Your choices change the brief",
    body: "After each mission, you see the founder-ready signal your answer created. Later, that recap can become the customer proof that Sunday Staples listened.",
    destinations: ["Signal recap", "Founder action", "Launch proof", "VIP follow-up"]
  },
  {
    title: "Climb the VIP career ladder",
    body: "Your rank moves from Founding Signal Partner to Market Oracle. The ladder shows what is unlocked and what comes next.",
    destinations: tiers.map((tier) => `${tier.name} - ${tier.xp} XP`)
  }
];

function updatePlayerUi() {
  const tier = getCurrentTier();
  player.style.left = `${state.player.x}%`;
  player.style.top = `${state.player.y}%`;
  const unlockedClasses = accessories
    .filter((accessory) => state.xp >= accessory.xp)
    .map((accessory) => accessory.className)
    .join(" ");
  player.className = `player ${state.player.color} facing-${state.player.direction} ${state.isWalking ? "walking" : ""} ${unlockedClasses}`;
  avatarMini.className = `avatar-mini ${state.player.color}`;
  avatarMini.innerHTML = "<span></span>";
  playerName.textContent = state.player.name;
  playerRole.textContent = state.player.role;
  playerTier.textContent = tier.name;
  sundayPointsMeta.textContent = state.player.pointsId ? "Sunday Points linked" : "Sunday Points not linked";
}

function saveProgress() {
  const payload = {
    player: state.player,
    completed: Array.from(state.completed),
    responses: state.responses,
    xp: state.xp,
    tourSeen: state.tourSeen
  };
  localStorage.setItem(storageKey, JSON.stringify(payload));
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.player) state.player = { ...state.player, ...saved.player };
    if (state.player.y < 68) state.player.y = 72;
    if (Array.isArray(saved.completed)) state.completed = new Set(saved.completed);
    if (saved.responses && typeof saved.responses === "object") state.responses = saved.responses;
    if (Number.isFinite(saved.xp)) state.xp = saved.xp;
    state.tourSeen = Boolean(saved.tourSeen);
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function getCurrentTier() {
  return tiers.reduce((current, tier) => (state.xp >= tier.xp ? tier : current), tiers[0]);
}

function getNextTier() {
  return tiers.find((tier) => tier.xp > state.xp);
}

function renderProgression() {
  const current = getCurrentTier();
  const next = getNextTier();
  const previousXp = current.xp;
  const nextXp = next ? next.xp : current.xp;
  const range = Math.max(1, nextXp - previousXp);
  const progress = next ? ((state.xp - previousXp) / range) * 100 : 100;

  tierName.textContent = current.name;
  tierMeta.textContent = `${state.xp} XP earned`;
  xpFill.style.width = `${progress}%`;
  nextTier.textContent = next ? `Next: ${next.name} at ${next.xp} XP` : "Top tier reached";
  playerTier.textContent = current.name;

  tierLadder.innerHTML = tiers
    .map((tier) => {
      const unlocked = state.xp >= tier.xp;
      const currentClass = tier.name === current.name ? "current" : "";
      return `
        <li class="${unlocked ? "unlocked" : ""} ${currentClass}">
          <span>${tier.xp} XP</span>
          ${tier.name}
          <small>${tier.perk}</small>
        </li>
      `;
    })
    .join("");
  renderAccessories();
  renderStudioDesk();
  renderFounderBriefing();
}

function renderQuestLog() {
  questLog.innerHTML = Object.entries(missionData)
    .map(([id, mission]) => {
      const done = state.completed.has(id);
      return `
        <li class="${done ? "done" : ""}">
          ${done ? "Done: " : ""}${mission.log}
          <small>${mission.stake}</small>
          <small>+${mission.xp} XP | ${mission.estimatedTime}</small>
        </li>
      `;
    })
    .join("");

  completedCount.textContent = `${state.completed.size}/5 missions`;
  progressFill.style.width = `${(state.completed.size / 5) * 100}%`;

  document.querySelectorAll(".station").forEach((station) => {
    station.classList.toggle("done", state.completed.has(station.dataset.mission));
  });

  renderProgression();
  renderNextBestMission();
  renderInfluenceRecap();
  renderRewardWallet();
}

function getNextOpenMissionId() {
  return Object.keys(missionData).find((id) => !state.completed.has(id));
}

function renderNextBestMission() {
  if (!nextBestMission) return;
  const nextId = getNextOpenMissionId();
  if (!nextId) {
    nextBestMission.innerHTML = `
      <article class="next-mission-card complete">
        <span>All departments reporting</span>
        <strong>Founder brief is ready</strong>
        <p>You have completed the full VIP research loop. Your signal set is ready for staff review.</p>
      </article>
    `;
    return;
  }
  const mission = missionData[nextId];
  const nextTier = getNextTier();
  const xpGap = nextTier ? Math.max(0, nextTier.xp - state.xp) : 0;
  nextBestMission.innerHTML = `
    <button class="next-mission-card" type="button" data-jump-mission="${nextId}">
      <span>${mission.estimatedTime} | +${mission.xp} XP</span>
      <strong>${mission.title}</strong>
      <p>${mission.customerHook}</p>
      <small>${nextTier ? `${xpGap} XP to ${nextTier.name}` : "Top tier reached"}</small>
    </button>
  `;
}

function getInfluenceScore() {
  const completedScore = state.completed.size * 14;
  const xpScore = Math.min(30, Math.round(state.xp / 18));
  const profileScore = state.player.pointsId ? 8 : 0;
  return Math.min(100, completedScore + xpScore + profileScore);
}

function renderInfluenceRecap() {
  if (!influenceRecap) return;
  const completed = Object.keys(state.responses);
  const latestId = completed.at(-1);
  const latest = latestId ? state.responses[latestId] : null;
  const score = getInfluenceScore();
  const moved = latestId ? missionData[latestId].impactUnit : "launch confidence";
  influenceRecap.innerHTML = `
    <article class="influence-card">
      <div class="influence-ring" style="--score:${score}%">
        <strong>${score}</strong>
        <span>influence</span>
      </div>
      <div>
        <span>${completed.length}/5 signal rooms complete</span>
        <strong>${latest ? latest.insight.title : "No product signal yet"}</strong>
        <p>${latest ? `Your latest answer increased ${moved} for the staff read.` : "Complete one mission to see how your response changes the product read."}</p>
      </div>
    </article>
  `;
}

function renderRewardWallet() {
  if (!rewardWallet) return;
  rewardWallet.innerHTML = rewardPerks
    .map((perk) => {
      const unlocked = state.xp >= perk.unlockXp;
      return `
        <article class="perk-card ${unlocked ? "unlocked" : ""}">
          <span>${unlocked ? "Unlocked" : `${perk.unlockXp} XP`}</span>
          <strong>${perk.title}</strong>
          <p>${perk.detail}</p>
        </article>
      `;
    })
    .join("");
}

function renderAccessories() {
  accessoryCase.innerHTML = accessories
    .map((accessory) => {
      const unlocked = state.xp >= accessory.xp;
      return `
        <article class="accessory ${unlocked ? "unlocked" : ""}">
          <span class="accessory-icon ${accessory.id}"></span>
          <strong>${accessory.name}</strong>
          <small>${unlocked ? "Equipped" : `${accessory.tier} unlock`}</small>
        </article>
      `;
    })
    .join("");
}

function renderStudioDesk() {
  const completedItems = Object.entries(missionData).filter(([id]) => state.completed.has(id));
  studioDesk.innerHTML = `
    <span class="desk-table"></span>
    ${completedItems
      .map(([, mission]) => `<span class="desk-item ${mission.deskItem}" title="${mission.log}"></span>`)
      .join("")}
    ${completedItems.length === 0 ? '<p>Complete missions to fill your desk with research artifacts.</p>' : ""}
  `;
}

function renderFounderBriefing() {
  const responseCount = Object.keys(state.responses).length;
  const latestId = Object.keys(state.responses).at(-1);
  const latest = latestId ? state.responses[latestId] : null;
  const topSignal = latest ? latest.insight.title : "Awaiting first signal";
  const nextId = getNextOpenMissionId();
  const profileLine = state.player.pointsId
    ? `${state.player.role} | ${state.player.stylePriority} | ${state.player.occasion}`
    : "Link Sunday Points to connect profile and mission signals.";

  founderBriefing.innerHTML = `
    <p>${profileLine}</p>
    <strong>${topSignal}</strong>
    <small>${responseCount}/5 research departments reporting</small>
    ${latest ? `<span>${latest.insight.body}</span>` : "<span>Complete Footwear Duel first to generate the first founder-ready read.</span>"}
    <em>${nextId ? `Next founder update unlocks after ${missionData[nextId].title}.` : "Full VIP brief ready: sampling, pricing, positioning, and founder action are all covered."}</em>
  `;
}

function buildExportPayload() {
  return {
    exportedAt: new Date().toISOString(),
    participant: {
      displayName: state.player.name,
      role: state.player.role,
      sundayPointsLinked: Boolean(state.player.pointsId),
      sundayPointsId: state.player.pointsId,
      stylePriority: state.player.stylePriority,
      occasion: state.player.occasion,
      tier: getCurrentTier().name,
      xp: state.xp,
      influenceScore: getInfluenceScore()
    },
    completed: Array.from(state.completed),
    unlockedPerks: rewardPerks.filter((perk) => state.xp >= perk.unlockXp).map((perk) => perk.title),
    responses: state.responses
  };
}

function getCurrentParticipantRecord() {
  return {
    id: "local-current",
    name: state.player.name,
    role: state.player.role,
    tier: getCurrentTier().name,
    xp: state.xp,
    stylePriority: state.player.stylePriority,
    occasion: state.player.occasion,
    sundayPointsLinked: Boolean(state.player.pointsId),
    lastActive: "Live session",
    responses: state.responses
  };
}

function getStaffDataset() {
  const current = getCurrentParticipantRecord();
  return Object.keys(current.responses).length > 0 ? [current, ...seededParticipants] : seededParticipants;
}

function getParticipantMissionCount(participant) {
  return Object.keys(participant.responses).length;
}

function getFilteredStaffParticipants() {
  const query = staffState.search.trim().toLowerCase();
  return getStaffDataset().filter((participant) => {
    const missionMatch = staffState.mission === "all" || Boolean(participant.responses[staffState.mission]);
    const segmentMatch = staffState.segment === "all" || participant.role === staffState.segment;
    const haystack = [
      participant.name,
      participant.role,
      participant.tier,
      participant.stylePriority,
      participant.occasion,
      ...Object.values(participant.responses).flatMap((entry) => [entry.mission, entry.insight?.title, entry.insight?.body])
    ]
      .join(" ")
      .toLowerCase();
    return missionMatch && segmentMatch && (!query || haystack.includes(query));
  });
}

function getStaffSignals(participants = getFilteredStaffParticipants()) {
  return participants.flatMap((participant) =>
    Object.entries(participant.responses)
      .filter(([missionId]) => staffState.mission === "all" || staffState.mission === missionId)
      .map(([missionId, entry]) => ({ participant, missionId, ...entry }))
  );
}

function getSignalReliability(signal, participants = getFilteredStaffParticipants()) {
  const missionParticipants = participants.filter((person) => Boolean(person.responses[signal.missionId]));
  const segmentCount = new Set(missionParticipants.map((person) => person.role)).size;
  const confidenceValues = missionParticipants
    .map((person) => person.responses[signal.missionId]?.response?.confidence)
    .filter(Number.isFinite);
  const avgConfidence = confidenceValues.length
    ? confidenceValues.reduce((sum, value) => sum + value, 0) / confidenceValues.length
    : 3;
  const score = Math.min(100, Math.round(missionParticipants.length * 16 + segmentCount * 12 + avgConfidence * 8));
  const label = score >= 72 ? "High confidence" : score >= 46 ? "Directional" : "Early read";
  return {
    score,
    label,
    sample: missionParticipants.length,
    segments: segmentCount,
    confidence: avgConfidence.toFixed(1)
  };
}

function buildStaffReport() {
  return {
    exportedAt: new Date().toISOString(),
    filters: { mission: staffState.mission, segment: staffState.segment, search: staffState.search },
    participants: getFilteredStaffParticipants(),
    signals: getStaffSignals()
  };
}

function renderStaffConsole() {
  const participants = getFilteredStaffParticipants();
  const allParticipants = getStaffDataset();
  const signals = getStaffSignals(participants);
  const averageXp = Math.round(participants.reduce((sum, person) => sum + person.xp, 0) / Math.max(1, participants.length));
  const completionRate = Math.round(
    (participants.reduce((sum, person) => sum + getParticipantMissionCount(person), 0) /
      Math.max(1, participants.length * Object.keys(missionData).length)) *
      100
  );

  if (!participants.some((person) => person.id === staffState.selectedId)) {
    staffState.selectedId = participants[0]?.id || allParticipants[0]?.id;
  }

  staffKpis.innerHTML = [
    ["Participants", participants.length, `${allParticipants.length} total visible records`],
    ["Mission signals", signals.length, "Structured responses captured"],
    ["Completion", `${completionRate}%`, "Average mission coverage"],
    ["Avg. status", `${averageXp} XP`, "Filtered participant average"]
  ]
    .map(
      ([label, value, note]) => `
        <article class="staff-kpi">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${note}</small>
        </article>
      `
    )
    .join("");

  campaignWavesEl.innerHTML = campaignWaves
    .map(
      (wave) => `
        <article class="campaign-card ${wave.status.toLowerCase()}">
          <div>
            <span>${wave.status}</span>
            <strong>${wave.name}</strong>
            <small>${wave.dates} | ${wave.audience}</small>
          </div>
          <p>${wave.goal}</p>
          <div class="campaign-hook">
            <small>Customer hook</small>
            <strong>${wave.marketingHook}</strong>
          </div>
          <div class="campaign-meta">
            ${wave.missions.map((missionId) => `<span>${missionData[missionId].title}</span>`).join("")}
          </div>
          <em>${wave.reward}</em>
        </article>
      `
    )
    .join("");

  staffInsights.innerHTML = signals
    .slice(0, 6)
    .map((signal) => {
      const reliability = getSignalReliability(signal, participants);
      return `
        <article class="staff-insight-card">
          <span>${signal.mission}</span>
          <strong>${escapeHtml(signal.insight?.title || "Signal pending")}</strong>
          <p>${escapeHtml(signal.insight?.body || "No detail captured yet.")}</p>
          <div class="reliability-chip" title="Sample size, segment coverage, and decision confidence">
            <span>${reliability.label}</span>
            <strong>${reliability.score}%</strong>
            <small>n=${reliability.sample} | ${reliability.segments} segments | ${reliability.confidence}/5 confidence</small>
          </div>
          <small>${signal.participant.name} | ${signal.participant.role}</small>
        </article>
      `;
    })
    .join("") || `<p class="empty-state">No matching signals. Adjust filters to broaden the view.</p>`;

  staffTable.innerHTML = `
    <div class="staff-table-head">
      <span>Participant</span><span>Segment</span><span>Tier</span><span>Missions</span><span>Last active</span>
    </div>
    ${participants
      .map(
        (participant) => `
          <button class="staff-row ${participant.id === staffState.selectedId ? "selected" : ""}" data-staff-id="${participant.id}" type="button">
            <span><strong>${participant.name}</strong><small>${participant.stylePriority}</small></span>
            <span>${participant.role}</span>
            <span>${participant.tier}</span>
            <span>${getParticipantMissionCount(participant)}/5</span>
            <span>${participant.lastActive}</span>
          </button>
        `
      )
      .join("")}
  `;

  const selected = allParticipants.find((participant) => participant.id === staffState.selectedId) || participants[0];
  renderStaffDetail(selected);
}

function renderStaffDetail(participant) {
  if (!participant) {
    staffDetail.innerHTML = `<p class="empty-state">Select a participant to inspect mission history.</p>`;
    return;
  }
  const missionEntries = Object.entries(participant.responses);
  staffDetail.innerHTML = `
    <div class="profile-summary">
      <span class="profile-initial">${participant.name.slice(0, 1)}</span>
      <div>
        <strong>${participant.name}</strong>
        <small>${participant.role} | ${participant.tier}</small>
      </div>
    </div>
    <dl class="profile-facts">
      <div><dt>Sunday Points</dt><dd>${participant.sundayPointsLinked ? "Linked" : "Not linked"}</dd></div>
      <div><dt>Style priority</dt><dd>${participant.stylePriority}</dd></div>
      <div><dt>Main occasion</dt><dd>${participant.occasion}</dd></div>
      <div><dt>EXP</dt><dd>${participant.xp}</dd></div>
    </dl>
    <div class="mission-history">
      ${missionEntries
        .map(
          ([missionId, entry]) => {
            const reliability = getSignalReliability({ missionId, ...entry });
            return `
            <article>
              <span>${missionData[missionId]?.title || entry.mission}</span>
              <strong>${escapeHtml(entry.insight?.title || "Insight pending")}</strong>
              <p>${escapeHtml(entry.insight?.body || "No detailed signal captured.")}</p>
              <small>${reliability.label} | ${reliability.score}% | n=${reliability.sample}</small>
            </article>
          `;
          }
        )
        .join("") || `<p class="empty-state">No mission responses yet.</p>`}
    </div>
  `;
}

function showStaffConsole() {
  gameShell.hidden = true;
  staffConsole.hidden = false;
  creatorModal.classList.remove("open");
  missionModal.classList.remove("open");
  tourModal.classList.remove("open");
  renderStaffConsole();
  staffSearch.focus();
}

function showCustomerCampus() {
  staffConsole.hidden = true;
  gameShell.hidden = false;
  campus.focus();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stationCenter(station) {
  const campusRect = campus.getBoundingClientRect();
  const rect = station.getBoundingClientRect();
  return {
    x: ((rect.left + rect.width / 2 - campusRect.left) / campusRect.width) * 100,
    y: ((rect.top + rect.height / 2 - campusRect.top) / campusRect.height) * 100
  };
}

function updateNearbyStations() {
  document.querySelectorAll(".station").forEach((station) => {
    const center = stationCenter(station);
    const distance = Math.hypot(center.x - state.player.x, center.y - state.player.y);
    station.classList.toggle("near", distance < 17);
    station.classList.toggle("selected", station.dataset.mission === state.destinationMission);
    station.classList.toggle("arrived", station.dataset.mission === state.arrivedMission);
  });
}

function movePlayer(direction) {
  stopAutoWalk();
  state.destinationMission = null;
  state.arrivedMission = null;
  const step = 4;
  state.player.direction = direction;
  if (direction === "up") state.player.y -= step;
  if (direction === "down") state.player.y += step;
  if (direction === "left") state.player.x -= step;
  if (direction === "right") state.player.x += step;
  state.player.x = Math.max(4, Math.min(96, state.player.x));
  state.player.y = Math.max(6, Math.min(94, state.player.y));
  updatePlayerUi();
  updateNearbyStations();
  state.isWalking = true;
  updatePlayerUi();
  window.clearTimeout(state.walkTimer);
  state.walkTimer = window.setTimeout(() => {
    state.isWalking = false;
    updatePlayerUi();
  }, 240);
  playTone(210, 0.025, "triangle", 0.015);
}

function stopAutoWalk() {
  if (state.walkAnimation) {
    cancelAnimationFrame(state.walkAnimation);
    state.walkAnimation = null;
  }
  state.isWalking = false;
  updatePlayerUi();
}

function directionFromDelta(dx, dy) {
  if (Math.abs(dx) > Math.abs(dy)) return dx < 0 ? "left" : "right";
  return dy < 0 ? "up" : "down";
}

function walkingDirectionFromDelta(dx, target) {
  if (Math.abs(dx) > 0.35) return dx < 0 ? "left" : "right";
  if (state.player.direction === "left" || state.player.direction === "right") {
    return state.player.direction;
  }
  return target.x < state.player.x ? "left" : "right";
}

function walkToMission(id) {
  const target = missionDestinations[id];
  if (!target) return;

  stopAutoWalk();
  state.destinationMission = id;
  state.arrivedMission = null;
  updateNearbyStations();
  showToast(`Walking to ${missionData[id].title}. Click again when she arrives.`);

  const route = buildRoute(target);
  let routeIndex = 0;
  let lastStepAt = 0;
  const speed = 0.62;
  state.isWalking = true;

  function finishWalk() {
    state.player.x = target.x;
    state.player.y = target.y;
    state.player.direction = "down";
    state.arrivedMission = id;
    state.walkAnimation = null;
    state.isWalking = false;
    updatePlayerUi();
    updateNearbyStations();
    saveProgress();
    showToast(`Arrived at ${missionData[id].title}. Click again to enter.`);
    playTone(480, 0.08, "sine", 0.035);
  }

  function tick(now) {
    const waypoint = route[routeIndex];
    if (!waypoint) {
      finishWalk();
      return;
    }

    const dx = waypoint.x - state.player.x;
    const dy = waypoint.y - state.player.y;
    const distance = Math.hypot(dx, dy);

    if (distance <= speed) {
      state.player.x = waypoint.x;
      state.player.y = waypoint.y;
      routeIndex += 1;
      if (routeIndex >= route.length) {
        finishWalk();
        return;
      }
    } else {
      state.player.direction = walkingDirectionFromDelta(dx, target);
      state.player.x += (dx / distance) * speed;
      state.player.y += (dy / distance) * speed;
      if (now - lastStepAt > 180) {
        playTone(210, 0.025, "triangle", 0.012);
        lastStepAt = now;
      }
    }

    updatePlayerUi();
    updateNearbyStations();
    state.walkAnimation = requestAnimationFrame(tick);
  }

  state.walkAnimation = requestAnimationFrame(tick);
}

function buildRoute(target) {
  const current = { x: state.player.x, y: state.player.y };
  const hub = { x: 50, y: 58 };
  const route = [];

  if (Math.abs(current.x - hub.x) > 2) route.push({ x: hub.x, y: current.y });
  if (Math.abs(current.y - hub.y) > 2) route.push(hub);
  if (Math.abs(target.x - hub.x) > 2) route.push({ x: target.x, y: hub.y });
  route.push(target);

  return route;
}

function handleStationClick(id) {
  const target = missionDestinations[id];
  const isAtDestination =
    target && Math.hypot(target.x - state.player.x, target.y - state.player.y) < 2.2;

  if (!state.walkAnimation && (state.arrivedMission === id || isAtDestination)) {
    state.destinationMission = id;
    state.arrivedMission = id;
    updateNearbyStations();
    openMission(id);
    return;
  }

  walkToMission(id);
}

function openMission(id) {
  const mission = missionData[id];
  state.activeMission = id;
  missionType.textContent = mission.type;
  missionTitle.textContent = mission.title;
  missionIntro.textContent = mission.intro;
  guideLine.textContent = mission.guide;
  missionContent.innerHTML = renderMissionValuePanel(id) + renderMissionContent(id);
  missionModal.classList.add("open");
  playTone(420, 0.08, "sine", 0.04);
}

function collectMissionResponse(id, form) {
  const data = new FormData(form);
  if (id === "duel") {
    const metrics = Object.fromEntries(duelMetrics.map((metric) => [metric.label, data.get(metric.id)]));
    return {
      winner: data.get("shoe-choice"),
      bouts: duelPairs.map((pair, index) => ({
        matchup: [pair.left, pair.right],
        winner: data.get(`bout-${index}`)
      })),
      metrics,
      reason: data.get("duel-reason"),
      tags: data.getAll("impression-tags"),
      confidence: Number(data.get("duel-confidence"))
    };
  }
  if (id === "rank") {
    return {
      ranking: shoes
        .map((shoe, index) => ({ shoe, rank: Number(data.get(`rank-${index}`)) }))
        .sort((a, b) => a.rank - b.rank)
    };
  }
  if (id === "price") {
    return {
      ceilings: shoes.map((shoe, index) => {
        const price = Number(data.get(`price-${index}`));
        return { shoe, price, band: renderPriceBand(price) };
      })
    };
  }
  if (id === "occasion") {
    return {
      occasions: shoes.map((shoe, index) => ({ shoe, occasion: data.get(`occasion-${index}`) }))
    };
  }
  return {
    action: data.get("founder-action")
  };
}

function getMissionInsight(id, response) {
  if (id === "duel") {
    return {
      title: `${response.winner} is winning the first duel`,
      body: `${response.bouts.map((bout) => bout.winner).join(" and ")} reached the final. ${response.tags.join(", ") || "No tags selected"} with ${response.confidence}/5 confidence. Reason: "${response.reason || "No reason provided."}"`
    };
  }
  if (id === "rank") {
    return {
      title: `${response.ranking[0].shoe} leads purchase intent`,
      body: `Top-to-bottom intent order: ${response.ranking.map((item) => item.shoe).join(", ")}.`
    };
  }
  if (id === "price") {
    const average = Math.round(response.ceilings.reduce((sum, item) => sum + item.price, 0) / response.ceilings.length);
    const highest = response.ceilings.reduce((top, item) => (item.price > top.price ? item : top), response.ceilings[0]);
    return {
      title: `$${average} average comfort ceiling`,
      body: `${highest.shoe} has the highest reported comfort ceiling at $${highest.price} (${highest.band}).`
    };
  }
  if (id === "occasion") {
    const occasions = response.occasions.map((item) => item.occasion).join(", ");
    return {
      title: "Occasion map is now segmented",
      body: `The current use-case spread: ${occasions}.`
    };
  }
  return {
    title: "Founder action has a mandate",
    body: `Recommended next action: ${response.action}.`
  };
}

function renderInsightCard(id, insight, wasAlreadyComplete) {
  const noteEl = missionContent.querySelector(".mission-note");
  if (!noteEl) return;
  const xpNote = wasAlreadyComplete ? "XP already claimed." : `+${missionData[id].xp} XP awarded.`;
  const score = getInfluenceScore();
  const nextId = getNextOpenMissionId();
  noteEl.innerHTML = `
    <span class="insight-card">
      <small>Founder-ready insight</small>
      <strong>${escapeHtml(insight.title)}</strong>
      <span>${escapeHtml(insight.body)}</span>
      <em>${xpNote}</em>
      <b>${score}/100 influence score. ${nextId ? `Next best mission: ${missionData[nextId].title}.` : "Full founder brief unlocked."}</b>
    </span>
  `;
}

function completeMission(note, response) {
  const wasAlreadyComplete = state.completed.has(state.activeMission);
  const tierBefore = getCurrentTier().name;
  const insight = getMissionInsight(state.activeMission, response);
  state.responses[state.activeMission] = {
    mission: missionData[state.activeMission].title,
    capturedAt: new Date().toISOString(),
    profile: {
      role: state.player.role,
      stylePriority: state.player.stylePriority,
      occasion: state.player.occasion
    },
    response,
    insight
  };
  state.completed.add(state.activeMission);
  if (!wasAlreadyComplete) {
    state.xp += missionData[state.activeMission].xp;
  }
  renderQuestLog();
  updatePlayerUi();
  const tierAfter = getCurrentTier().name;
  renderInsightCard(state.activeMission, insight, wasAlreadyComplete);
  saveProgress();
  if (!wasAlreadyComplete) {
    showToast(`Mission complete. +${missionData[state.activeMission].xp} XP`);
    burstConfetti();
    playSuccess();
  }
  if (tierAfter !== tierBefore) {
    showToast(`New status unlocked: ${tierAfter}`);
    document.querySelector(".xp-status").classList.remove("level-up");
    window.requestAnimationFrame(() => document.querySelector(".xp-status").classList.add("level-up"));
    playLevelUp();
  }
}

function shoeCard(name, index, inputName = "shoe-choice", detail = "") {
  return `
    <label class="shoe-card">
      <span class="shoe-art shoe-${index}" aria-hidden="true"></span>
      <strong>${name}</strong>
      <span>${detail || (index === 0 ? "Soft everyday icon" : index === 1 ? "Polished founder pick" : index === 2 ? "Dress-up favorite" : "Comfort-led staple")}</span>
      <input type="radio" name="${inputName}" value="${name}" ${index === 0 ? "checked" : ""} />
    </label>
  `;
}

function renderDuelMetricRow(metric) {
  return `
    <fieldset class="duel-metric">
      <legend>${metric.label}</legend>
      <label>
        <input type="radio" name="${metric.id}" value="${duelPairs[0].left}" checked />
        <span>${metric.left}</span>
      </label>
      <label>
        <input type="radio" name="${metric.id}" value="${duelPairs[0].right}" />
        <span>${metric.right}</span>
      </label>
    </fieldset>
  `;
}

function renderDuelContender(name, detail, shoeIndex, inputName, checked = false) {
  return `
    <label class="duel-contender ${checked ? "selected" : ""}">
      <span class="duel-corner">${checked ? "A" : "B"}</span>
      <span class="shoe-art shoe-${shoeIndex}" aria-hidden="true"></span>
      <strong>${name}</strong>
      <span>${detail}</span>
      <input type="radio" name="${inputName}" value="${name}" ${checked ? "checked" : ""} />
    </label>
  `;
}

function renderPriceBand(value) {
  return priceBands.find((band) => value <= band.max)?.label || priceBands.at(-1).label;
}

function renderMissionValuePanel(id) {
  const mission = missionData[id];
  const completed = state.completed.has(id);
  return `
    <section class="mission-value-panel">
      <div>
        <span>Why this matters</span>
        <strong>${mission.stake}</strong>
        <p>${mission.customerHook}</p>
      </div>
      <dl>
        <div><dt>Reward</dt><dd>${completed ? "XP claimed" : `+${mission.xp} XP`}</dd></div>
        <div><dt>Time</dt><dd>${mission.estimatedTime}</dd></div>
      </dl>
    </section>
  `;
}

function renderMissionContent(id) {
  if (id === "duel") {
    const finalists = duelPairs.map((pair) => pair.left);
    return `
      <form class="mission-form duel-mission" data-complete="duel">
        <section class="duel-tournament">
          <div class="mission-game-header">
            <span>Footwear Duel bracket</span>
            <strong>Pick each bout winner, then crown the shoe you would most want to buy.</strong>
          </div>
          <div class="duel-bracket" aria-label="Head to head footwear impressions">
            ${duelPairs
              .map(
                (pair, index) => `
                  <article class="duel-bout" data-bout="${index}">
                    <span class="bout-label">Bout ${index + 1}</span>
                    <div class="duel-stage">
                      ${renderDuelContender(pair.left, pair.leftDetail, index * 2, `bout-${index}`, true)}
                      <div class="duel-vs" aria-hidden="true">VS</div>
                      ${renderDuelContender(pair.right, pair.rightDetail, index * 2 + 1, `bout-${index}`)}
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
          <section class="duel-final">
            <span class="bout-label">Final</span>
            <div class="duel-finalists" data-finalists>
              ${finalists
                .map(
                  (shoe, index) => `
                    <label class="${index === 0 ? "selected" : ""}">
                      <input type="radio" name="shoe-choice" value="${shoe}" ${index === 0 ? "checked" : ""} />
                      <strong>${shoe}</strong>
                      <span>${index === 0 ? "Current champion" : "Final challenger"}</span>
                    </label>
                  `
                )
                .join("")}
            </div>
          </section>
        </section>
        <section class="duel-impressions">
          <div class="duel-panel">
            <span class="duel-eyebrow">Head-to-head impressions</span>
            <h3>Choose which signal feels stronger.</h3>
            ${duelMetrics.map(renderDuelMetricRow).join("")}
          </div>
          <aside class="duel-readout" aria-live="polite">
            <span>Signal read</span>
            <strong data-duel-winner>${finalists[0]}</strong>
            <p data-duel-summary>Leaning toward charm, comfort, and everyday emotional pull.</p>
          </aside>
        </section>
        <label class="duel-note">
          <span>One-line reason</span>
          <textarea name="duel-reason" rows="3" placeholder="What made your winner feel more buyable?">Feels easier to imagine wearing often.</textarea>
        </label>
        <fieldset class="impression-tags">
          <legend>Impression tags</legend>
          ${impressionTags.map((tag, index) => `<label><input type="checkbox" name="impression-tags" value="${tag}" ${index < 2 ? "checked" : ""} />${tag}</label>`).join("")}
        </fieldset>
        <label class="confidence-meter">
          <span>Decision confidence</span>
          <input name="duel-confidence" type="range" min="1" max="5" value="4" data-confidence-slider />
          <output>Strong signal</output>
        </label>
        <button class="mission-submit" type="submit">Submit head-to-head impressions</button>
        <p class="mission-note"></p>
      </form>
    `;
  }

  if (id === "rank") {
    return `
      <form class="mission-form mini-game-form" data-complete="rank">
        <div class="mission-game-header">
          <span>Intent stack</span>
          <strong>Place each shoe on the purchase-intent ladder.</strong>
        </div>
        <div class="intent-board">
          <div class="intent-lane" aria-hidden="true">
            <span>Highest intent</span>
            <span>Needs more proof</span>
          </div>
          ${shoes
            .map(
              (shoe, index) => `
                <label class="rank-row">
                  <span class="tiny-shoe tiny-${index}"></span>
                  <strong>${shoe}</strong>
                  <span>Purchase intent rank</span>
                  <select name="rank-${index}">
                    <option ${index === 0 ? "selected" : ""}>1</option>
                    <option ${index === 1 ? "selected" : ""}>2</option>
                    <option ${index === 2 ? "selected" : ""}>3</option>
                    <option ${index === 3 ? "selected" : ""}>4</option>
                  </select>
                </label>
              `
            )
            .join("")}
        </div>
        <button class="mission-submit" type="submit">Submit ranking</button>
        <p class="mission-note"></p>
      </form>
    `;
  }

  if (id === "price") {
    return `
      <form class="mission-form mini-game-form" data-complete="price">
        <div class="mission-game-header">
          <span>Price Lab console</span>
          <strong>Tune each comfort ceiling until it feels honest.</strong>
        </div>
        ${shoes
          .map(
            (shoe, index) => `
              <label class="price-row">
                <strong>${shoe}</strong>
                <input name="price-${index}" type="range" min="49" max="249" step="5" value="${99 + index * 20}" data-price-slider />
                <output>$${99 + index * 20}</output>
                <small data-price-band>${renderPriceBand(99 + index * 20)}</small>
              </label>
            `
          )
          .join("")}
        <button class="mission-submit" type="submit">Send price ceilings</button>
        <p class="mission-note"></p>
      </form>
    `;
  }

  if (id === "occasion") {
    return `
      <form class="mission-form mini-game-form" data-complete="occasion">
        <div class="mission-game-header">
          <span>Occasion Plaza sorter</span>
          <strong>Assign each shoe to the moment where it earns its place.</strong>
        </div>
        <div class="occasion-grid">
          ${shoes
            .map(
              (shoe, index) => `
                <label>
                  <span class="tiny-shoe tiny-${index}"></span>
                  <strong>${shoe}</strong>
                  <select name="occasion-${index}">
                    ${occasionOptions.map((option) => `<option ${(
                      (index === 0 && option === "Work meetings") ||
                      (index === 1 && option === "Weekend brunch") ||
                      (index === 2 && option === "Dinner date") ||
                      (index === 3 && option === "Travel day")
                    ) ? "selected" : ""}>${option}</option>`).join("")}
                  </select>
                </label>
              `
            )
            .join("")}
        </div>
        <button class="mission-submit" type="submit">Map occasions</button>
        <p class="mission-note"></p>
      </form>
    `;
  }

  return `
    <form class="mission-form mini-game-form" data-complete="founder">
      <div class="mission-game-header">
        <span>Founder action room</span>
        <strong>Choose the decision you would put on the founder's desk.</strong>
      </div>
      <div class="founder-actions">
        ${founderCards.map((card, index) => `
          <label class="founder-card ${index === 0 ? "selected" : ""}">
            <input type="radio" name="founder-action" value="${card.value}" ${index === 0 ? "checked" : ""} />
            <span>${card.title}</span>
            <strong>${card.value}</strong>
            <small>${card.detail}</small>
          </label>
        `).join("")}
      </div>
      <button class="mission-submit" type="submit">Send founder action</button>
      <p class="mission-note"></p>
    </form>
  `;
}

creatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(creatorForm);
  state.player.name = form.get("name").trim() || "VIP";
  state.player.pointsId = form.get("pointsId").trim();
  state.player.color = form.get("color");
  state.player.role = form.get("role");
  state.player.stylePriority = form.get("stylePriority");
  state.player.occasion = form.get("occasion");
  creatorModal.classList.remove("open");
  updatePlayerUi();
  saveProgress();
  showToast(`Welcome, ${state.player.name}. Sunday Points linked.`);
  playTone(360, 0.08, "sine", 0.04);
  openTour(0);
});

function renderTour() {
  const step = tourSteps[state.tourIndex];
  tourStep.textContent = `VIP walkthrough ${state.tourIndex + 1}/${tourSteps.length}`;
  tourTitle.textContent = step.title;
  tourBody.textContent = step.body;
  tourDestinations.innerHTML = step.destinations.map((item) => `<span>${item}</span>`).join("");
  tourBack.disabled = state.tourIndex === 0;
  tourNext.textContent = state.tourIndex === tourSteps.length - 1 ? "Enter campus" : "Next";
}

function openTour(index = 0) {
  state.tourIndex = index;
  renderTour();
  tourModal.classList.add("open");
}

function closeTourModal() {
  tourModal.classList.remove("open");
  state.tourSeen = true;
  saveProgress();
  campus.focus();
}

startTour.addEventListener("click", () => openTour(0));

focusLadder.addEventListener("click", () => {
  document.querySelector(".tier-ladder").scrollIntoView({ behavior: "smooth", block: "center" });
  document.querySelector(".tier-ladder").classList.remove("spotlight");
  window.requestAnimationFrame(() => document.querySelector(".tier-ladder").classList.add("spotlight"));
});

closeTour.addEventListener("click", closeTourModal);

tourBack.addEventListener("click", () => {
  state.tourIndex = Math.max(0, state.tourIndex - 1);
  renderTour();
});

tourNext.addEventListener("click", () => {
  if (state.tourIndex >= tourSteps.length - 1) {
    closeTourModal();
    showToast("VIP map unlocked. Choose your first mission.");
    return;
  }
  state.tourIndex += 1;
  renderTour();
});

soundToggle.addEventListener("click", () => {
  state.sound = !state.sound;
  soundToggle.setAttribute("aria-pressed", String(state.sound));
  soundToggle.textContent = state.sound ? "Sound on" : "Sound off";
  if (state.sound) {
    ensureAudio();
    playLevelUp();
    showToast("Sound on");
  }
});

campus.addEventListener("keydown", (event) => {
  const keyMap = {
    ArrowUp: "up",
    w: "up",
    W: "up",
    ArrowDown: "down",
    s: "down",
    S: "down",
    ArrowLeft: "left",
    a: "left",
    A: "left",
    ArrowRight: "right",
    d: "right",
    D: "right"
  };
  const direction = keyMap[event.key];
  if (!direction) return;
  event.preventDefault();
  movePlayer(direction);
});

document.querySelectorAll("[data-move]").forEach((button) => {
  button.addEventListener("click", () => movePlayer(button.dataset.move));
});

document.querySelectorAll(".station").forEach((station) => {
  station.addEventListener("click", () => handleStationClick(station.dataset.mission));
});

missionContent.addEventListener("input", (event) => {
  if (event.target.matches("[data-price-slider]")) {
    event.target.nextElementSibling.textContent = `$${event.target.value}`;
    const band = event.target.parentElement.querySelector("[data-price-band]");
    if (band) band.textContent = renderPriceBand(Number(event.target.value));
    return;
  }
  if (event.target.matches("[data-confidence-slider]")) {
    const labels = ["Soft read", "Directional", "Useful", "Strong signal", "Must act"];
    event.target.nextElementSibling.textContent = labels[Number(event.target.value) - 1];
  }
});

missionContent.addEventListener("change", (event) => {
  const card = event.target.closest(".shoe-card");
  if (card) {
    card.parentElement.querySelectorAll(".shoe-card").forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
  }

  const contender = event.target.closest(".duel-contender");
  if (contender) {
    contender.parentElement.querySelectorAll(".duel-contender").forEach((item) => item.classList.remove("selected"));
    contender.classList.add("selected");
    const bout = contender.closest(".duel-bout");
    if (bout) {
      bout.classList.remove("spar");
      window.requestAnimationFrame(() => bout.classList.add("spar"));
    }
  }

  const finalist = event.target.closest(".duel-finalists label");
  if (finalist) {
    finalist.parentElement.querySelectorAll("label").forEach((item) => item.classList.remove("selected"));
    finalist.classList.add("selected");
  }

  const founderCard = event.target.closest(".founder-card");
  if (founderCard) {
    founderCard.parentElement.querySelectorAll(".founder-card").forEach((item) => item.classList.remove("selected"));
    founderCard.classList.add("selected");
  }

  if (event.target.closest(".duel-mission")) {
    updateDuelSummary();
  }
});

function updateDuelSummary() {
  const form = missionContent.querySelector(".duel-mission");
  if (!form) return;
  const data = new FormData(form);
  const finalists = duelPairs.map((pair, index) => data.get(`bout-${index}`) || pair.left);
  const finalistWrap = form.querySelector("[data-finalists]");
  if (finalistWrap) {
    const currentChampion = data.get("shoe-choice");
    finalistWrap.innerHTML = finalists
      .map((shoe, index) => {
        const checked = currentChampion ? currentChampion === shoe : index === 0;
        return `
          <label class="${checked ? "selected" : ""}">
            <input type="radio" name="shoe-choice" value="${shoe}" ${checked ? "checked" : ""} />
            <strong>${shoe}</strong>
            <span>${checked ? "Current champion" : "Final challenger"}</span>
          </label>
        `;
      })
      .join("");
  }
  const winner = data.get("shoe-choice") || duelPairs[0].left;
  const values = duelMetrics.map((metric) => data.get(metric.id));
  const leftScore = values.filter((value) => value === duelPairs[0].left).length;
  const rightScore = values.filter((value) => value === duelPairs[0].right).length;
  const winnerEl = form.querySelector("[data-duel-winner]");
  const summaryEl = form.querySelector("[data-duel-summary]");
  if (winnerEl) winnerEl.textContent = winner;
  if (!summaryEl) return;
  if (leftScore > rightScore) {
    summaryEl.textContent = "Leaning toward charm, comfort, and everyday emotional pull.";
  } else if (rightScore > leftScore) {
    summaryEl.textContent = "Leaning toward polish, premium signal, and founder-status styling.";
  } else {
    summaryEl.textContent = "Signals are split. The chosen winner should explain the deciding reason.";
  }
}

missionContent.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = event.target.dataset.complete;
  const response = collectMissionResponse(id, event.target);
  const notes = {
    duel: "Head-to-head impressions captured.",
    rank: "Purchase intent order captured for ranking analytics.",
    price: "Price comfort range captured for sensitivity analytics.",
    occasion: "Occasion fit captured for positioning analytics.",
    founder: "Founder action captured for next-step planning."
  };
  completeMission(notes[id], response);
});

exportSignals.addEventListener("click", async () => {
  const payload = JSON.stringify(buildExportPayload(), null, 2);
  try {
    await navigator.clipboard.writeText(payload);
    showToast("Local signal export copied to clipboard.");
  } catch {
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = exportFileName;
    link.click();
    URL.revokeObjectURL(url);
    showToast("Local signal export downloaded.");
  }
});

staffConsoleToggle.addEventListener("click", showStaffConsole);
backToCampus.addEventListener("click", showCustomerCampus);

staffSearch.addEventListener("input", (event) => {
  staffState.search = event.target.value;
  renderStaffConsole();
});

staffMissionFilter.addEventListener("change", (event) => {
  staffState.mission = event.target.value;
  renderStaffConsole();
});

staffSegmentFilter.addEventListener("change", (event) => {
  staffState.segment = event.target.value;
  renderStaffConsole();
});

staffTable.addEventListener("click", (event) => {
  const row = event.target.closest("[data-staff-id]");
  if (!row) return;
  staffState.selectedId = row.dataset.staffId;
  renderStaffConsole();
});

staffExport.addEventListener("click", async () => {
  const payload = JSON.stringify(buildStaffReport(), null, 2);
  try {
    await navigator.clipboard.writeText(payload);
    showToast("Staff report copied to clipboard.");
  } catch {
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = staffReportFileName;
    link.click();
    URL.revokeObjectURL(url);
    showToast("Staff report downloaded.");
  }
});

bottomNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    bottomNavButtons.forEach((item) => item.classList.toggle("active", item === button));
    const target = button.dataset.viewTarget;
    const targetMap = {
      missions: document.querySelector(".campus-panel"),
      profile: document.querySelector(".player-card"),
      ladder: document.querySelector(".tier-ladder"),
      briefing: document.querySelector(".founder-briefing"),
      settings: document.querySelector(".briefing-actions")
    };
    const element = targetMap[target];
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    element.classList.remove("section-pulse");
    window.requestAnimationFrame(() => element.classList.add("section-pulse"));
    if (target === "settings") showToast("Settings: walkthrough, ladder, sound, and staff console are available from here.");
  });
});

document.addEventListener("click", (event) => {
  const missionJump = event.target.closest("[data-jump-mission]");
  if (!missionJump) return;
  const missionId = missionJump.dataset.jumpMission;
  if (!missionData[missionId]) return;
  handleStationClick(missionId);
});

closeMission.addEventListener("click", () => {
  missionModal.classList.remove("open");
  playTone(240, 0.05, "sine", 0.025);
  campus.focus();
});

missionModal.addEventListener("click", (event) => {
  if (event.target === missionModal) {
    missionModal.classList.remove("open");
    playTone(240, 0.05, "sine", 0.025);
    campus.focus();
  }
});

function ensureAudio() {
  if (!state.audio) {
    state.audio = new AudioContext();
  }
  if (state.audio.state === "suspended") {
    state.audio.resume();
  }
  return state.audio;
}

function playTone(frequency, duration, type = "sine", gain = 0.035, delay = 0) {
  if (!state.sound) return;
  const audio = ensureAudio();
  const oscillator = audio.createOscillator();
  const volume = audio.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  volume.gain.value = 0;
  oscillator.connect(volume);
  volume.connect(audio.destination);
  const start = audio.currentTime + delay;
  volume.gain.linearRampToValueAtTime(gain, start + 0.01);
  volume.gain.exponentialRampToValueAtTime(0.001, start + duration);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function playSuccess() {
  playTone(523, 0.08, "sine", 0.045, 0);
  playTone(659, 0.08, "sine", 0.045, 0.07);
  playTone(784, 0.12, "sine", 0.045, 0.14);
}

function playLevelUp() {
  playTone(392, 0.09, "triangle", 0.045, 0);
  playTone(523, 0.09, "triangle", 0.045, 0.09);
  playTone(784, 0.16, "triangle", 0.045, 0.18);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function burstConfetti() {
  const colors = ["#d77458", "#d2a443", "#b99adf", "#77a7c7", "#72927d", "#fff0c7"];
  celebration.innerHTML = "";
  for (let index = 0; index < 34; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.18}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    celebration.append(piece);
  }
  window.setTimeout(() => {
    celebration.innerHTML = "";
  }, 1200);
}

updatePlayerUi();
loadProgress();
if (state.completed.size > 0 || state.xp > 0 || state.tourSeen || state.player.pointsId) {
  creatorModal.classList.remove("open");
}
updatePlayerUi();
renderQuestLog();
renderStaffConsole();
setTimeout(updateNearbyStations, 100);

document.querySelectorAll(".station").forEach((station) => {
  const id = station.dataset.mission;
  if (missionData[id]) {
    station.setAttribute("aria-label", `${missionData[id].title}. Click to walk there. Click again to enter.`);
  }
});
