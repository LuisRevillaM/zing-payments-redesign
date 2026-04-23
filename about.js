import { story } from "./site-data.js";
import { renderChrome } from "./main.js";

renderChrome("about");

const root = document.getElementById("about-content");

root.innerHTML = `
  <div class="about-layout">
    <article class="story-panel">
      <p>${story.intro}</p>
      ${story.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </article>
    <aside class="advantage-panel">
      <p class="eyebrow">The Zing Card Advantage</p>
      <ul class="bullet-list">
        ${story.advantage.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </aside>
  </div>
`;
