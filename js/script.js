// Smooth scrolling and active link management
const links = document.querySelectorAll("nav ul.nav-menu li a, .contact-btn a");
const navMenu = document.querySelector(".nav-menu");
const burgerMenu = document.getElementById("burgerMenu");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

// Smooth scroll function
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }
}

// Update active link based on scroll position
function updateActiveLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const link = document.querySelector(`nav ul.nav-menu li a[href="#${sectionId}"]`);

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      links.forEach((l) => l.classList.remove("active"));
      if (link) {
        link.classList.add("active");
      }
    }
  });
}

// Handle navigation link clicks
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      smoothScroll(href);
      
      // Update active state
      if (link.classList.contains("custom-btn")) {
        // For contact button, remove active from nav links
        document.querySelectorAll("nav ul.nav-menu li a").forEach((l) => l.classList.remove("active"));
      } else {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
      
      // Close mobile menu if open
      closeMobileMenu();
    }
  });
});

// Burger menu toggle
function toggleMobileMenu() {
  navMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  mobileMenuOverlay.classList.toggle("active");
  document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
}

function closeMobileMenu() {
  navMenu.classList.remove("active");
  burgerMenu.classList.remove("active");
  mobileMenuOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Event listeners
if (burgerMenu) {
  burgerMenu.addEventListener("click", toggleMobileMenu);
}

if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener("click", closeMobileMenu);
}

// Update active link on scroll
window.addEventListener("scroll", updateActiveLink);


function getYear() {
  return new Date().getFullYear();
}
document.querySelector(
  ".footer p"
).innerHTML = `© ${getYear()} NetVion. All rights reserved.`;

const projects = [
  {
    id: 1,
    name: "AutoParts SaaS Platform",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M14.31 8l5.74 9.94M9.69 8l-5.74 9.94M12 2v20M2 12h20"/>
  </svg>`,
    tech: ["Laravel", "JS", "MySQL", "Twilio API"],
    industry: "Automotive & Spare Parts",
    overview:
      "A complete multi-vendor SaaS platform for the auto spare parts industry, connecting suppliers and buyers across UAE,Oman and Georgia. The system allows suppliers to open their own digital stores, manage inventory, receive inquiries through both dashboards and WhatsApp, and handle invoices and CRM functionalities.",
    challenge:
      "The automotive spare parts sector in UAE operates mostly offline, making it difficult for workshops and car owners to quickly locate parts or compare prices. Suppliers struggle with manual order management, inconsistent communication, and lack of visibility outside their local markets.",
    solution:
      "Built a centralized SaaS platform where thousands of suppliers can create stores, post product listings, and handle inquiries directly from buyers. Buyers can either browse stores or submit a part request that’s broadcasted automatically to all relevant active suppliers based on make, model, and city. Admins manage supplier access, product categories, city-based visibility, and inquiry permissions through an advanced multi-domain control system.",
    results: [
      { value: "1000+", label: "Suppliers Onboarded" },
      { value: "70%", label: "Reduction in Inquiry Response Time" },
      { value: "95%", label: "Supplier Retention Rate" },
    ],
    images: 5,
  },
  {
    id: 2,
    name: "Real Estate CRM",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
    <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
    <path d="M7 16h2M15 16h2"/>
  </svg>`,
    tech: ["Laravel", "Blade", "JS", "MySQL"],
    industry: "Real Estate",
    overview:
      "A simplified property management system initially built for my father’s real estate office to eliminate manual registers and digitize everyday operations. Now used by multiple small agencies across Faisalabad to manage clients, listings, and profits seamlessly.",
    challenge:
      "Most local real estate offices in Pakistan still rely on paper registers to record client details, property listings, expenses, and profits. This manual system led to lost opportunities, poor data tracking, and time-consuming record searches.",
    solution:
      "I designed and developed a user-friendly CRM tailored for non-technical real estate agents. It includes modules for Rent, Sale, and Investment properties, along with an Expense & Profit Tracker, Client Management, and Disposal History. The system runs locally with zero setup complexity—just plug and use.",
    results: [
      { value: "90%", label: "Reduced Stationery Costs" },
      { value: "80%", label: "Faster Record Searches" },
      { value: "100%", label: "Client Satisfaction" },
    ],
    images: 4,
  },
  {
    id: 3,
    name: "Plant Recognition System",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 2C10 6 4 6 4 12s6 6 8 10c2-4 8-4 8-10s-6-6-8-10z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`,
    tech: ["PHP", "Python", "TensorFlow", "NumPy", "Pillow", "scikit-learn"],
    industry: "University / Research Project",
    overview:
      "A mini project that predicts plant names from leaf images. Combines a PHP backend with a Python-trained ML model to provide a smooth browser-based prediction workflow.",
    challenge:
      "Learning how to integrate a machine learning model with a PHP-based web app, while keeping the interface simple for users to upload images and get predictions.",
    solution:
      "Built a lightweight system where users can upload leaf images and receive predicted plant names. The PHP backend handles uploads and interacts with the Python ML model for prediction, demonstrating basic image classification and backend–model integration.",
    results: [
      { value: "1", label: "Functional Prototype" },
      { value: "100%", label: "Browser-Based Workflow" },
      { value: "Enhanced Skills", label: "ML + PHP Integration" },
    ],
    images: 3,
  },
];
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projects
    .map(
      (project) => `
        <div class="project-card" onclick="openCaseStudy(${project.id})">
          <div class="project-icon" style="color: var(--accent);">
            ${project.icon}
          </div>
          <h3>${project.name}</h3>
          <div class="tags">
            ${project.tech
              .map((tech) => `<span class="tag tech">${tech}</span>`)
              .join("")}
            <span class="tag industry">${project.industry}</span>
          </div>
        </div>
      `
    )
    .join("");
}

function openCaseStudy(id) {
  const project = projects.find((p) => p.id === id);
  const modal = document.getElementById("caseStudyModal");
  const content = document.getElementById("caseStudyContent");

  content.innerHTML = `
        <div class="case-study-header">
          <h2>${project.name}</h2>
          <div class="tags">
            ${project.tech
              .map((tech) => `<span class="tag tech">${tech}</span>`)
              .join("")}
            <span class="tag industry">${project.industry}</span>
          </div>
        </div>

        <div class="case-study-section">
          <h3>Overview</h3>
          <p>${project.overview}</p>
        </div>

        <div class="case-study-section">
          <h3>The Challenge</h3>
          <p>${project.challenge}</p>
        </div>

        <div class="case-study-section">
          <h3>Our Solution</h3>
          <p>${project.solution}</p>
        </div>

        <div class="case-study-section">
          <h3>Results</h3>
          <div class="metrics">
            ${project.results
              .map(
                (metric) => `
              <div class="metric">
                <div class="metric-value">${metric.value}</div>
                <div class="metric-label">${metric.label}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("caseStudyModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

window.onclick = function (e) {
  const modal = document.getElementById("caseStudyModal");
  if (e.target === modal) {
    closeModal();
  }
};

renderProjects();

