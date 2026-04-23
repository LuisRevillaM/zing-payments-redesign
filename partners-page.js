import { partners } from "./site-data.js";
import { renderChrome } from "./main.js";

renderChrome("partners");

const root = document.getElementById("partners-content");

root.innerHTML = partners
  .map(
    (item) => `
      <article class="partner-card partner-card--page">
        <span>${item.title}</span>
        ${item.body.map((entry) => `<p>${entry}</p>`).join("")}
        <ul class="bullet-list">
          ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
      </article>
    `
  )
  .join("");
