const industries = [
  {
    id: "b2b",
    label: "B2B",
    title: "Streamlined B2B and Large Ticket Credit Card Processing!",
    intro: "With Zing Card, we provide your business with a variety of B2B and large ticket processing methods at low rates.",
    paragraphs: [
      "We are committed to increasing the efficiency of your business-to-business and large ticket processing transactions.",
      "Take advantage of our COO Program designed to lower your B2B rates and fees by as much as 25%."
    ],
    bullets: [
      "Customized and accurate reporting",
      "Wide variety of payment options",
      "Experienced with convenient fee requirements",
      "Process all your payment types through One-Portal",
      "AMEX rates are the same as Visa and MasterCard's",
      "AMEX is funded and reported at the same time as Visa and MasterCard",
      "Full PCI compliancy",
      "Re-occuring payment options",
      "Except payments on your website",
      "Send a payment link to your customers to receive payments"
    ],
    quote: "Take advantage of our COO Program designed to lower your B2B rates and fees by as much as 25%.",
    stat: "COO Program"
  },
  {
    id: "parks",
    label: "Parks and Rec",
    title: "Public sector processing for districts that need lower fees and cleaner reporting.",
    intro: "Today, acceptance of payment cards by park districts is increasing. All public sector institutions are facing similar cost control challenges.",
    paragraphs: [
      "Like any business, the critical financial management needs of government entities require a processing partner with expertise, extensive resources and advanced technological capabilities.",
      "Zing Card Payment Systems provides a comprehensive range of reliable financial services and solutions on which your park district can depend on.",
      "Take advantage of lower processing fees, only available to our Public Sector. However, your processor needs to know exactly how to obtain these lower rates."
    ],
    bullets: [
      "Free expert consultations",
      "Tailored solutions only available to your park district",
      "Complete card payment processing including Visa, MasterCard, Discover, American Express, debit and ATM",
      "Electronic Benefit Transfer card processing",
      "Check acceptance guarantee and electronic processing",
      "Real-time, Online reporting",
      "We provide free equipment to park districts",
      "We can connect to VSI - Vermont System integration",
      "Ability to integrate with other parks and rec software"
    ],
    quote: "Take advantage of lower processing fees, only available to our Public Sector.",
    stat: "Public Sector"
  },
  {
    id: "zgov",
    label: "Z-Gov",
    title: "Tax collection and municipality payment services organized under one government-ready offering.",
    intro: "Z-Gov, a division of Zing Card LLC specializes in supporting government agencies and municipalities with their payment services. We specialize in tax collection solutions.",
    paragraphs: [
      "With Z-Gov your municipality, tax office, utilities or any government entity have the following benefits."
    ],
    bullets: [
      "Accept Credit Cards at NO COST to your Municipality",
      "Convenient fee payment options",
      "Accept all major credit cards over-the-counter and/or on your website",
      "Accept Debit Payments over-the-counter and/or on your website",
      "Accept ACH, Checks on your website or over-the-counter",
      "Committed to PCI compliance and SSL Security to ensure data security",
      "Payments are fully integrated with the government agency current data system and/or website",
      "Payment information is updated in the client's system at a designated time each night to ensure accurate account data",
      "Simple yet secure and robust payment system to process your transactions online",
      "Customized payment portals",
      "Free payment equipment and Virtual Terminal",
      "IVR - Interactive Voice Response",
      "Customized reporting tailored to your reporting needs"
    ],
    quote: "We specialize in tax collection solutions.",
    stat: "Government"
  },
  {
    id: "powersports",
    label: "Power Sports",
    title: "Merchant processing cost reduction for powersports dealers and motorcycle businesses.",
    intro: "Zing Racing, a division of Zing Card LLC specializing in servicing the Motor Sports industry.",
    paragraphs: [
      "We are a specialist in the Powersports / Motorcycle industry. If you are a Powersport Dealer, you owe it to yourself to compare Zing to your current provider.",
      "Zing has partnered with the predominant Mergers and Acquisitions firm Powersports Listings M&A. Powersports Listings is the leading intermediary firm in selling top Powersports dealerships across the entire United States.",
      "Zing Racing specializes in merchant processing cost reduction and has been very effective at producing an average cost savings of 20%."
    ],
    bullets: [
      "Specialized processing support for the Powersports / Motorcycle industry",
      "Built for dealers comparing rates and provider fit",
      "Aligned with dealership operations and acquisition activity",
      "Average cost savings of 20%"
    ],
    quote: "Zing Racing specializes in merchant processing cost reduction and has been very effective at producing an average cost savings of 20%.",
    stat: "Average 20% savings"
  },
  {
    id: "nonprofit",
    label: "Non-Profit",
    title: "Donation processing, retention tools, and a giveback program for charity organizations.",
    intro: "We have a number of different non-profit software options for you to choose from.",
    paragraphs: [
      "Special Programs for Non-Profit and Charity Organizations."
    ],
    bullets: [
      "You can streamline donation transactions and process with our virtual terminal and/or virtual mobile",
      "Take advantage of our integration to your existing website and/or our customized payment portal",
      "Maximize donations with electronic payments made with credit, debit cards and ach/checks",
      "Retain existing donors and reduce marketing costs with recurring donation options",
      "Increase payment security through PCI compliant payment processing solutions",
      "Our solutions help you improve your donor retention",
      "Free Virtual Terminal and Mobile device to accept donation"
    ],
    quote: "Inquire about ZingDonate, a program that gives back 35% of the fees to the charity organization.",
    stat: "35% giveback"
  },
  {
    id: "restaurants",
    label: "Restaurants",
    title: "Restaurant and cafe processing aligned with POS, loyalty, and compliance needs.",
    intro: "Zing Card's simple and convenient restaurant merchant account services allow you to focus on your business while increasing profits and improving service.",
    paragraphs: [
      "Restaurants require credit card processing solutions that address their unique needs; Zing Card delivers systems that are comprehensive, efficient and budget friendly for any operation.",
      "We offer comprehensive payment processing solutions to meet your growing needs, with low rates that help you save money while improving your restaurant business.",
      "Need a new system? We have partnered with Clover POS and Talech POS to give you two great options."
    ],
    bullets: [
      "Low cost pricing programs available",
      "Seamless integration to your existing system",
      "New and refurbished POS Systems",
      "Gift card and loyalty card programs",
      "Complete compliance with PCI standards"
    ],
    quote: "We have partnered with Clover POS and Talech POS to give you two great options.",
    stat: "POS ready"
  }
];

const equipmentCatalog = [
  {
    id: "clover-go",
    category: "clover",
    name: "Clover Go",
    description: "Compact acceptance for card-present transactions.",
    figureTone: "stone",
    figureShape: "mini"
  },
  {
    id: "clover-flex",
    category: "clover",
    name: "Clover Flex",
    description: "Portable payment options with a handheld reader form factor.",
    figureTone: "copper",
    figureShape: "reader"
  },
  {
    id: "clover-station",
    category: "clover",
    name: "Full Clover Station and Clover Mini",
    description: "Stationary countertop POS options grouped into one flagship system family.",
    figureTone: "charcoal",
    figureShape: "terminal"
  },
  {
    id: "clover-solo",
    category: "clover",
    name: "Clover Solo",
    description: "Single-station countertop setup.",
    figureTone: "stone",
    figureShape: "terminal"
  },
  {
    id: "clover-kiosk",
    category: "clover",
    name: "Clover Kiosk",
    description: "Major savings for your payroll and easy ordering for your clients.",
    figureTone: "charcoal",
    figureShape: "kiosk"
  },
  {
    id: "clover-mobile",
    category: "clover",
    name: "Clover Mobile Point-Of-Sale",
    description: "Mobile point-of-sale built for flexible service environments.",
    figureTone: "stone",
    figureShape: "reader"
  },
  {
    id: "talech-elo-touch",
    category: "talech",
    name: "ELO Touch Screen",
    description: "Retail and restaurant touchscreen hardware for the Talech stack.",
    figureTone: "stone",
    figureShape: "terminal"
  },
  {
    id: "talech-complete",
    category: "talech",
    name: "Complete Talech Set-Up",
    description: "Complete point-of-sale solutions whether yours is a small business or larger enterprise.",
    figureTone: "copper",
    figureShape: "terminal"
  },
  {
    id: "talech-allinone",
    category: "talech",
    name: "All-In-One ELO Station",
    description: "Countertop Talech hardware designed for restaurant and retail workflows.",
    figureTone: "charcoal",
    figureShape: "terminal"
  },
  {
    id: "talech-portable",
    category: "talech",
    name: "Portable Payment Options",
    description: "Portable hardware extensions for mobile payment acceptance.",
    figureTone: "stone",
    figureShape: "reader"
  },
  {
    id: "talech-poynt",
    category: "talech",
    name: "The POYNT",
    description: "Use with the Talech software or to take payments.",
    figureTone: "charcoal",
    figureShape: "kiosk"
  },
  {
    id: "poynt-wireless",
    category: "poynt",
    name: "The Poynt wireless or ethernet Payment Device",
    description: "A flexible payment device with wired or wireless deployment.",
    figureTone: "stone",
    figureShape: "reader"
  },
  {
    id: "poynt-five",
    category: "poynt",
    name: "The Poynt 5 Payment Device",
    description: "The smaller version of the Poynt hardware family.",
    figureTone: "copper",
    figureShape: "reader"
  },
  {
    id: "poynt-facing",
    category: "poynt",
    name: "Customer Facing Feature on the Poynt",
    description: "A customer-facing payment interaction surface.",
    figureTone: "stone",
    figureShape: "mini"
  },
  {
    id: "poynt-terminal",
    category: "poynt",
    name: "Payment Terminal",
    description: "Desktop terminal hardware for in-person payments.",
    figureTone: "charcoal",
    figureShape: "reader"
  },
  {
    id: "poynt-computer",
    category: "poynt",
    name: "Take Payments on your Computer, IPad or any mobile device",
    description: "Software-enabled acceptance across your existing computing surfaces.",
    figureTone: "copper",
    figureShape: "tablet"
  }
];

const solutionCards = [
  {
    id: "ecommerce",
    eyebrow: "E-Commerce",
    title: "Fast-growing online payment support, reorganized as a modern product card.",
    summary:
      "Internet credit card processing has been the fastest growing sector in the merchant service industry over the last 10 years.",
    paragraphs: [
      "Zing Card specializes in helping web based businesses get their start on the internet with our E-Commerce Merchant Services. We understand the unique payment processing needs of your internet-based businesses.",
      "Zing Card helps merchants bring their business online, with secure e-commerce payment gateways and services that make accepting electronic payments quick, easy and safe.",
      "Zing Card is your one-source solution for all your credit card processing and e-commerce needs."
    ],
    bullets: [
      "Increase online sales by accepting credit cards, debit cards and ACH payments on your website",
      "Simplify the checkout process by integrating with major shopping carts and providing fast, secure transactions",
      "All major shopping carts",
      "All major payment gateways",
      "All hosting companies"
    ]
  },
  {
    id: "quickbooks",
    eyebrow: "QuickBooks",
    title: "Integrated ACH and credit card processing for accounting workflows.",
    summary: "Process in QuickBooks with Your Merchant Account. On average save 20% on your processing fees.",
    paragraphs: [
      "The plug-in for QuickBooks is quick and easy to process ACH and credit cards, debit cards using any merchant account.",
      "Integrated Credit Card and ACH Transaction for QuickBooks."
    ],
    bullets: [
      "Process Credit Cards",
      "Process ACH transactions",
      "Process paper checks electronically",
      "Real-time transactions",
      "Never drive to the bank again",
      "Reduce accounting stress and time",
      "Batch processing for Credit Cards and ACH checks through QuickBooks",
      "Process payments directly from invoices or receipts",
      "Automatically applies payments",
      "Pulls and posts data to and from QuickBooks with no double entry",
      "Receipt printing for face-to-face or shipping slips",
      "Works with Pro, Premier, Enterprise",
      "QuickBooks multi-user support"
    ]
  },
  {
    id: "mobile",
    eyebrow: "Mobile Payment / Virtual Terminal",
    title: "A cleaner way to present mobile and virtual terminal capabilities.",
    summary:
      "It is the complete payment solution that transforms your IPhone, IPad, or other mobile device into a secure payment portal.",
    paragraphs: [
      "You will never miss a sale again. The Ultimate Convenience for Your Card Processing Needs."
    ],
    bullets: [
      "Accomodates the many customers who want to pay with credit cards",
      "Helps you save on the cost of accepting credit cards",
      "Speeds transactions and eliminates manual-entry errors by swiping cards",
      "Reduces cash, decreasing the risk of theft and simplifying cash-handling and reconciliation",
      "Turns any PC into a payment terminal",
      "Supports all payment environments including retail face-to-face, mail order, telephone order and e-commerce",
      "Accomodates an unlimited number of users and merchant numbers to grow with you as your business grows"
    ]
  },
  {
    id: "ivr",
    eyebrow: "IVR",
    title: "Interactive Voice Response grouped as a service feature set.",
    summary:
      "Zing Card's IVR systems increase convenience for merchants and customers with secure touchtone and voice activated technology.",
    paragraphs: [
      "Our Interactive Voice Response service allows you to process credit card or ACH eCheck transactions using any standard touchtone phone or cell phone.",
      "With IVR, customers are allowed to pay their bills without having to speak with a live representative.",
      "Payments can be submitted over any touchtone phone easily, instantly and securely and does not require any type of internet connection."
    ],
    bullets: [
      "Improve customer service by allowing customers to make payments and manage accounts via touchtone phone",
      "IVR is highly flexible to the specific needs of your business",
      "All your payments are managed in the same place in the same reporting tool",
      "Customized and deploy IVR for no additional upfront investment or setup fee",
      "We make it easy to accept IVR payments through our payment gateway and to increase your profits"
    ]
  },
  {
    id: "ach",
    eyebrow: "ACH",
    title: "ACH payment processing moved into a scannable service detail card.",
    summary:
      "Zing Card offers ACH payment processing services that allow you to accept electronic check payments, increase sales and reduce the costs associated with paper check processing.",
    paragraphs: [
      "Our ACH processing allows you to process account receivables and account payables of all types.",
      "This includes direct invoicing, bill pay, setting up one time or recurring debit and credit transactions, direct deposit payroll, and State and Federal taxes.",
      "Transferring funds nationwide has never been more efficient."
    ],
    bullets: [
      "Process ACH transactions with our virtual terminal, website integration and/or a terminal",
      "Recurring Billing by electronic ACH debits your customers bank accounts on an automatic schedule",
      "Online Payments accept ACH payments online through your e-commerce website or through your customer management or inventory application",
      "ACH Processing Funds are debited directly from your customer's bank account and deposited into yours",
      "Payment Security Industry standard SSL encrypted communication and multi-stage user credential authentication verification",
      "Fully Integrated API",
      "Easily add a Pay Now link to your existing website",
      "Seamless integration into your existing management or accounting software",
      "Customizable API features, operational support included"
    ]
  }
];

const partnerCards = [
  {
    eyebrow: "Banking Partnership",
    title: "Building a partnership with teamwork.",
    paragraphs: [
      "At Zing Card Payment Systems we are always available to meet clients, answer questions, address issues and support your clients.",
      "Working together to increase revenue and increasing your deposits are positioned as part of the overall program."
    ],
    bullets: [
      "Account Manager support for your branch and/or bank",
      "Online Merchant Account Access and Reporting for payment activity, residuals, bonuses, and full reporting capabilities",
      "Branded solutions with marketing material and merchant statements using your bank name",
      "Customized partnership program to fit your needs",
      "Additional training with account representatives at each bank branch",
      "Quarterly strategy meetings to increase merchant processing accounts",
      "Providing your clients with the right merchant processing company will increase customer loyalty and help retain your DDA business"
    ]
  },
  {
    eyebrow: "CPA's and Accounting Professionals",
    title: "Partner with Zing Payments to assist your clients.",
    paragraphs: [
      "CPA's are increasingly asked to assist their business clients with their financial services needs.",
      "Partner with Zing and know that your clients will get personalized service and support. They will get the number one rated customer service and they will be able to rely on the number one rated service for network reliability.",
      "On top of that, we will save them money by lowering their processing rates."
    ],
    bullets: [
      "Count on someone that you can trust",
      "Provide your client's name and contact information, your name and contact information, and any special notes",
      "For clients with existing service, have ready 2 concurrent months of statements"
    ]
  },
  {
    eyebrow: "Agent / ISO Program",
    title: "Welcome to Zing Card's Agent / ISO Program.",
    paragraphs: [
      "Interested in working as an independent contractor selling merchant services? Looking for a more reputable and responsive processor to work with?",
      "Zing Card has the program you have been looking for. We pride ourselves on integrity and knowledge of the business.",
      "Our program is designed for individuals or companies interested in offering a wide variety of services and solutions.",
      "We perform the underwriting, installation, billing, statement creation, customer support and risk management for your accounts."
    ],
    bullets: [
      "Marketing support to build your business",
      "Residual based income and residual reports",
      "Dedicated in-house support from highly experienced industry experts",
      "Special pricing on equipment and software",
      "Opportunity to sell point-of sale systems",
      "Zero Liability",
      "Unprecedented Customer Support 24/7"
    ]
  }
];

const industryTabs = document.getElementById("industry-tabs");
const industryPanel = document.getElementById("industry-panel");
const equipmentGrid = document.getElementById("equipment-grid");
const equipmentFilters = document.getElementById("equipment-filters");
const solutionGrid = document.getElementById("solution-grid");
const programGrid = document.getElementById("program-grid");
const siteHeader = document.getElementById("site-header");
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

let activeIndustry = industries[0].id;
let activeEquipmentCategory = "all";

function renderBulletList(items, light = false) {
  return `<ul class="bullet-list${light ? " bullet-list--light" : ""}">${items
    .map((item) => `<li>${item}</li>`)
    .join("")}</ul>`;
}

function renderIndustryTabs() {
  industryTabs.innerHTML = industries
    .map(
      (industry) => `
        <button
          type="button"
          class="industry-tab${industry.id === activeIndustry ? " is-active" : ""}"
          data-industry-id="${industry.id}"
        >
          ${industry.label}
        </button>
      `
    )
    .join("");

  industryPanel.innerHTML = industries
    .filter((industry) => industry.id === activeIndustry)
    .map(
      (industry) => `
        <div class="industry-panel__header">
          <div class="industry-panel__title">
            <p class="eyebrow">${industry.label}</p>
            <h3>${industry.title}</h3>
            <p>${industry.intro}</p>
          </div>
          <span class="stat-pill">${industry.stat}</span>
        </div>
        <div class="panel-paragraphs">
          ${industry.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
        <div class="panel-columns">
          ${renderBulletList(industry.bullets)}
          <aside class="quote-block">
            <span>Section pull quote</span>
            <strong>${industry.quote}</strong>
            <p>${industry.intro}</p>
          </aside>
        </div>
      `
    )
    .join("");

  document.querySelectorAll("[data-industry-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activeIndustry = button.dataset.industryId;
      renderIndustryTabs();
    });
  });
}

function renderEquipmentFilters() {
  const filters = [
    { id: "all", label: "All equipment" },
    { id: "clover", label: "Clover POS" },
    { id: "talech", label: "Talech POS" },
    { id: "poynt", label: "Poynt" }
  ];

  equipmentFilters.innerHTML = filters
    .map(
      (filter) => `
        <button
          type="button"
          class="filter-chip${filter.id === activeEquipmentCategory ? " is-active" : ""}"
          data-equipment-filter="${filter.id}"
        >
          ${filter.label}
        </button>
      `
    )
    .join("");

  document.querySelectorAll("[data-equipment-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeEquipmentCategory = button.dataset.equipmentFilter;
      renderEquipmentFilters();
      renderEquipmentGrid();
    });
  });
}

function renderEquipmentGrid() {
  const visibleCatalog =
    activeEquipmentCategory === "all"
      ? equipmentCatalog
      : equipmentCatalog.filter((item) => item.category === activeEquipmentCategory);

  equipmentGrid.innerHTML = visibleCatalog
    .map(
      (item) => `
        <article class="product-card reveal is-visible">
          <div class="product-figure product-figure--${item.figureTone}">
            <div class="figure-device shape-${item.figureShape}"></div>
          </div>
          <div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSolutions() {
  solutionGrid.innerHTML = solutionCards
    .map(
      (card, index) => `
        <details class="solution-card reveal is-visible"${index === 0 ? " open" : ""}>
          <summary>
            <span>${card.eyebrow}</span>
            <strong>${card.title}</strong>
            <p>${card.summary}</p>
            <span class="solution-cta">Read details</span>
          </summary>
          <div class="solution-content">
            ${card.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            ${renderBulletList(card.bullets)}
          </div>
        </details>
      `
    )
    .join("");
}

function renderPrograms() {
  programGrid.innerHTML = partnerCards
    .map(
      (card) => `
        <article class="program-card reveal is-visible">
          <span>${card.eyebrow}</span>
          <h3>${card.title}</h3>
          ${card.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          ${renderBulletList(card.bullets)}
        </article>
      `
    )
    .join("");
}

function handleHeaderState() {
  if (window.scrollY > 18) {
    siteHeader.classList.add("is-scrolled");
  } else {
    siteHeader.classList.remove("is-scrolled");
  }
}

function setupRevealObserver() {
  const revealNodes = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealNodes.forEach((node) => {
    if (!node.classList.contains("is-visible")) {
      observer.observe(node);
    }
  });
}

function setupNavState() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".site-nav a")];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", isCurrent);
        });
      });
    },
    {
      threshold: 0.45
    }
  );

  sections.forEach((section) => observer.observe(section));

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupMobileNav() {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupForm() {
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      formStatus.textContent = "Please complete the required fields.";
      formStatus.classList.add("is-visible");
      return;
    }

    form.reset();
    formStatus.textContent = "Thanks. A Payment Specialist will contact you shortly.";
    formStatus.classList.add("is-visible");
  });
}

function init() {
  renderIndustryTabs();
  renderEquipmentFilters();
  renderEquipmentGrid();
  renderSolutions();
  renderPrograms();
  handleHeaderState();
  setupRevealObserver();
  setupNavState();
  setupMobileNav();
  setupForm();

  window.addEventListener("scroll", handleHeaderState, { passive: true });
}

init();
