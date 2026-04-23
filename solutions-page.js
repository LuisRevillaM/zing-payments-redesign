import { solutions } from "./site-data.js";
import { renderChrome } from "./main.js";

renderChrome("solutions");

const root = document.getElementById("solutions-content");

root.innerHTML = solutions
  .map(
    (item) => `
      <article class="solution-card-block" id="${item.id}">
        <div class="solution-card-block__head">
          <div>
            <p class="eyebrow">${item.eyebrow}</p>
            <h2>${item.title}</h2>
          </div>
          <p>${item.summary}</p>
        </div>
        <div class="solution-card-block__body">
          <div class="stacked-copy">
            ${item.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </div>
          <ul class="bullet-list">
            ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </div>
      </article>
    `
  )
  .join("");
