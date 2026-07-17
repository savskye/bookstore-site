const bookstores = [
    {
        name: "Ashgrove Books",
        neighborhood: "Downtown",
        genre: "general",
        description: "A cozy two-story shop with a reading nook in the front window.",
        established: 1994
    },
    {
        name: "Marrow & Pine",
        neighborhood: "Riverside",
        genre: "used",
        description: "Used and rare books, floor to ceiling.",
        established: 1978
    }
];

function cardTemplate(store) {
    return `
        <article class="store-card">
            <h3 class="card-name">${store.name}</h3>
            <p class="card-neighborhood">${store.neighborhood}</p>
            <p class="card-desc">${store.description}</p>
        </article>
    `;
}

const grid = document.getElementById("catalogGrid");

function renderCards() {
    grid.innerHTML = bookstores.map(cardTemplate).join("");
}

renderCards();