import { industries } from "./site-data.js";
import { renderChrome } from "./main.js";

renderChrome("industries");

const root = document.getElementById("industries-content");

root.innerHTML = industries
  .map(
    (item) => `
      <article class="industry-detail" id="${item.slug}">
        <div class="industry-detail__media">
          <img src="${item.image}" alt="${item.label}" loading="lazy" />
        </div>
        <div class="industry-detail__body">
          <p class="eyebrow">${item.label}</p>
          <h2>${item.title}</h2>
          <p>${item.intro}</p>
          ${item.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          <ul class="bullet-list">
            ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
          <blockquote>${item.quote}</blockquote>
        </div>
      </article>
    `
  )
  .join("");
