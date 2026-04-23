import { footerLinks, navItems } from "./site-data.js";

function headerMarkup(pageKey) {
  const nav = navItems
    .map(
      (item) => `
        <a class="${item.key === pageKey ? "is-active" : ""}" href="${item.href}" ${item.key === pageKey ? 'aria-current="page"' : ""}>
          ${item.label}
        </a>
      `
    )
    .join("");

  return `
    <div class="page-shell header-shell">
      <a class="brandmark" href="./index.html" aria-label="Zing Payments home">
        <span class="brandmark__icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="46" height="46" rx="14" fill="url(#brandGradient)" />
            <path d="M15 16H33L17 32H33" stroke="url(#brandStroke)" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
              <linearGradient id="brandGradient" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
                <stop stop-color="#191715" />
                <stop offset="1" stop-color="#302A24" />
              </linearGradient>
              <linearGradient id="brandStroke" x1="12" y1="12" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                <stop stop-color="#D89266" />
                <stop offset="1" stop-color="#B5673C" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="brandmark__copy">
          <strong>Zing</strong>
          <span>Payments</span>
        </span>
      </a>

      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span></span>
        <span></span>
      </button>

      <nav class="site-nav" id="site-nav" aria-label="Primary">
        ${nav}
      </nav>

      <div class="header-cta">
        <a class="header-phone" href="tel:8002491381">800-249-1381</a>
        <a class="button button--primary button--small" href="./contact.html">Contact Us</a>
      </div>
    </div>
  `;
}

function footerMarkup() {
  const columns = Object.entries(footerLinks)
    .map(
      ([title, links]) => `
        <div class="footer-column">
          <span>${title}</span>
          ${links.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
        </div>
      `
    )
    .join("");

  return `
    <div class="page-shell footer-shell">
      <div class="footer-brand">
        <a class="brandmark brandmark--footer" href="./index.html" aria-label="Zing Payments home">
          <span class="brandmark__icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="46" height="46" rx="14" fill="url(#brandGradientFooter)" />
              <path d="M15 16H33L17 32H33" stroke="url(#brandStrokeFooter)" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <linearGradient id="brandGradientFooter" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F6F2EC" />
                  <stop offset="1" stop-color="#EEE6DD" />
                </linearGradient>
                <linearGradient id="brandStrokeFooter" x1="12" y1="12" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#D89266" />
                  <stop offset="1" stop-color="#B5673C" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span class="brandmark__copy">
            <strong>Zing</strong>
            <span>Payments</span>
          </span>
        </a>
        <p>Zing Card, LLC is a Registered MSP/ISO of Elavon, Inc. Georgia.</p>
      </div>
      ${columns}
      <div class="footer-column">
        <span>Contact</span>
        <a href="tel:8002491381">800-249-1381</a>
        <p>Dallas, TX</p>
        <p>Houston, TX</p>
        <p>Santa Rosa Beach, FL</p>
        <p>St. Charles, IL</p>
      </div>
    </div>
  `;
}

export function renderChrome(pageKey) {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  if (header) header.innerHTML = headerMarkup(pageKey);
  if (footer) footer.innerHTML = footerMarkup();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  window.addEventListener(
    "scroll",
    () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 10);
    },
    { passive: true }
  );
}

export function initContactForms() {
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    const status = form.querySelector("[data-form-status]");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        if (status) {
          status.textContent = "Please complete the required fields.";
          status.classList.add("is-visible");
        }
        return;
      }

      const payload = Object.fromEntries(new FormData(form).entries());

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        form.reset();
        if (status) {
          status.textContent = "Thanks. Your inquiry was received and a Zing Payments specialist will follow up shortly.";
          status.classList.add("is-visible");
        }
      } catch {
        if (status) {
          status.textContent = "The form could not be submitted. Please call 800-249-1381.";
          status.classList.add("is-visible");
        }
      }
    });
  });
}
