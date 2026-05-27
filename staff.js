const concepts = Array.from({ length: 8 }, (_, index) => {
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

const pairs = [
  ["concept-01", "concept-02"],
  ["concept-03", "concept-04"],
  ["concept-05", "concept-06"],
  ["concept-07", "concept-08"]
];

function concept(id) {
  return concepts.find((item) => item.id === id);
}

function duelState() {
  try {
    return JSON.parse(localStorage.getItem("circleOfTrustFootwearDuel")) || { answers: [] };
  } catch {
    return { answers: [] };
  }
}

function renderConcepts() {
  document.querySelector("#concept-list").innerHTML = concepts.map((item) => `
    <article class="concept-card">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <strong>${item.name}</strong>
        <span>${item.factoryCode}</span>
        <p>${item.category} | ${item.material} | ${item.priceBand}</p>
        <div class="tags">${item.tags.map((tag) => `<em>${tag}</em>`).join("")}</div>
      </div>
    </article>
  `).join("");
}

function renderPairs() {
  document.querySelector("#pair-list").innerHTML = pairs.map((pair, index) => {
    const left = concept(pair[0]);
    const right = concept(pair[1]);
    return `
      <article class="pair-card">
        <span>Bout ${index + 1}</span>
        <div>
          <strong>${left.name}</strong>
          <b>vs</b>
          <strong>${right.name}</strong>
        </div>
        <p>${left.colorway} ${left.silhouette} against ${right.colorway} ${right.silhouette}</p>
      </article>
    `;
  }).join("");
}

function renderResults() {
  const answers = duelState().answers || [];
  document.querySelector("#results-list").innerHTML = answers.length ? answers.map((answer) => {
    const winner = concept(answer.winner);
    const loser = concept(answer.loser);
    return `
      <article class="result-card">
        <span>Round ${answer.round + 1}</span>
        <strong>${winner?.name || answer.winner}</strong>
        <p>Beat ${loser?.name || answer.loser} on ${answer.driver}</p>
      </article>
    `;
  }).join("") : `<p class="empty">No local duel answers yet. Complete Footwear Duel in the VIP Campus to populate this panel.</p>`;
}

document.querySelector("#concept-count").textContent = concepts.length;
document.querySelector("#pair-count").textContent = pairs.length;
document.querySelector("#answer-count").textContent = (duelState().answers || []).length;
renderConcepts();
renderPairs();
renderResults();
