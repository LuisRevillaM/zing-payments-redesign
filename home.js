import { brandStrip, equipment, industries, partners } from "./site-data.js";
import { initContactForms, renderChrome } from "./main.js";

renderChrome("home");
initContactForms();

const industryPreviewGrid = document.getElementById("industry-preview-grid");
const equipmentPreviewGrid = document.getElementById("equipment-preview-grid");
const partnerPreviewGrid = document.getElementById("partner-preview-grid");
const brandStripNode = document.getElementById("brand-strip");

industryPreviewGrid.innerHTML = industries
  .map(
    (item) => `
      <a class="industry-card" href="./industries.html#${item.slug}">
        <img src="${item.image}" alt="${item.label}" loading="lazy" />
        <div class="industry-card__body">
          <span>${item.label}</span>
          <strong>${item.title}</strong>
        </div>
      </a>
    `
  )
  .join("");

equipmentPreviewGrid.innerHTML = equipment
  .slice(0, 5)
  .map(
    (item) => `
      <a class="equipment-spotlight" href="./equipment.html">
        <div class="equipment-spotlight__media">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <strong>${item.name}</strong>
        <span>${item.sublabel}</span>
      </a>
    `
  )
  .join("");

partnerPreviewGrid.innerHTML = partners
  .map(
    (item) => `
      <article class="partner-card">
        <span>${item.title}</span>
        <p>${item.body[0]}</p>
      </article>
    `
  )
  .join("");

brandStripNode.innerHTML = brandStrip.map((brand) => `<span>${brand}</span>`).join("");
