import { equipment } from "./site-data.js";
import { renderChrome } from "./main.js";

renderChrome("equipment");

const filtersNode = document.getElementById("equipment-filters");
const contentNode = document.getElementById("equipment-content");

const filters = [
  { id: "all", label: "All Equipment" },
  { id: "clover", label: "Clover" },
  { id: "talech", label: "Talech" },
  { id: "poynt", label: "Poynt" }
];

let activeFilter = "all";

function renderFilters() {
  filtersNode.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-chip ${filter.id === activeFilter ? "is-active" : ""}" type="button" data-filter="${filter.id}">
          ${filter.label}
        </button>
      `
    )
    .join("");

  filtersNode.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderEquipment();
    });
  });
}

function renderEquipment() {
  const visible = activeFilter === "all" ? equipment : equipment.filter((item) => item.category === activeFilter);

  contentNode.innerHTML = visible
    .map(
      (item) => `
        <article class="equipment-card">
          <div class="equipment-card__image">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
          </div>
          <span>${item.category.toUpperCase()}</span>
          <h2>${item.name}</h2>
          <p>${item.sublabel}</p>
        </article>
      `
    )
    .join("");
}

renderFilters();
renderEquipment();
