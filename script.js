const bookstores = [
    {
        name: "Ashgrove Books",
        neighborhood: "Downtown",
        genre: "general",
        description: "A cozy two-story shop with a reading nook in the front window.",
        established: 1994,
        tags: ["Ficiton", "Local Authors", "Coffee Bar"]
    },
    {
        name: "Marrow & Pine",
        neighborhood: "Riverside",
        genre: "used",
        description: "Used and rare books, floor to ceiling.",
        established: 1978,
        tags: ["Used", "Rare Editions", "Trade-Ins"]
    }
];

function cardTemplate(store) {
    const tagsHTML = store.tags.map(tag => `<span class="card-tag">${tag}</span>`).join("");
    
    return `
        <article class="store-card">
            <h3 class="card-name">${store.name}</h3>
            <p class="card-neighborhood">${store.neighborhood}</p>
            <p class="card-desc">${store.description}</p>
            <div class="card-tags">${tagsHTML}</div>
            <p class="card-established">Est. ${store.established}</p>
        </article>
    `;
}

const grid = document.getElementById("catalogGrid");

function renderCards() {
    grid.innerHTML = bookstores.map(cardTemplate).join("");
}

renderCards();