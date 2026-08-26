/* ============================================================
   SCRIPT.JS
   All personal content lives in the PROFILE object below.
   Edit PROFILE only — every section on the page re-renders
   itself from this data, so you never need to touch index.html
   to update your info, skills, projects, certificates, etc.
   ============================================================ */

/* ------------------------------------------------------------
   1. PROFILE DATA — EDIT THIS OBJECT
   ------------------------------------------------------------ */
const PROFILE = {
  name: "Veera",
  role: "AI & Data Science Student",
  roles: [
    "AI & Data Science Student",
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "AI Systems Builder"
  ],
  tagline: "I build intelligent systems — from voice assistants to computer-vision pipelines — and the interfaces that bring them to life.",
  location: "India",
  profileImage: "assets/images/profile-placeholder.svg",
  resumeFile: "assets/resume.pdf", // replace with your actual resume PDF

  about: {
    paragraphs: [
      "I'm a first-year BSc AI & Data Science student with a strong focus on building real, working systems rather than just studying theory. My interests span Python, web development, UI/UX, databases, problem solving, and artificial intelligence — and I'm especially drawn to the space where machine learning meets thoughtful interface design.",
      "I enjoy building real-world projects end to end: designing the architecture, training and evaluating models, wiring up backends, and shipping a frontend that actually feels good to use. Recent work includes an agentic AI voice assistant with persistent memory and tool use, a network intrusion detection system trained on real traffic data, and a full-stack resume analyzer.",
      "I'm a strong believer in continuous learning and I'm actively exploring cyber security and multimodal retrieval-augmented systems as my next areas of depth. My goal is to become a highly skilled software developer who can take an idea from architecture diagram to production."
    ],
    interests: [
      "Python", "Web Development", "UI/UX", "Databases",
      "Problem Solving", "Artificial Intelligence", "Cyber Security", "New Technologies"
    ],
    stats: [
      { number: 6, suffix: "+", label: "Projects Built" },
      { number: 1, suffix: "st", label: "Year, BSc AI & DS" },
      { number: 10, suffix: "+", label: "Tools & Frameworks" },
      { number: 100, suffix: "%", label: "Self-Driven Learning" }
    ]
  },

  skills: {
    categories: [
      {
        name: "Programming & Core",
        icon: "fa-solid fa-code",
        items: [
          { name: "Python", level: 88, icon: "fa-brands fa-python" },
          { name: "C", level: 70, icon: "fa-solid fa-c" },
          { name: "JavaScript", level: 75, icon: "fa-brands fa-js" },
          { name: "HTML5", level: 90, icon: "fa-brands fa-html5" },
          { name: "CSS3", level: 85, icon: "fa-brands fa-css3-alt" }
        ]
      },
      {
        name: "Backend & Data",
        icon: "fa-solid fa-server",
        items: [
          { name: "FastAPI / Flask", level: 80, icon: "fa-solid fa-bolt" },
          { name: "SQLite", level: 78, icon: "fa-solid fa-database" },
          { name: "MongoDB", level: 65, icon: "fa-solid fa-leaf" },
          { name: "REST APIs", level: 80, icon: "fa-solid fa-diagram-project" }
        ]
      },
      {
        name: "AI / Machine Learning",
        icon: "fa-solid fa-robot",
        items: [
          { name: "Machine Learning", level: 75, icon: "fa-solid fa-brain" },
          { name: "YOLOv8 / Computer Vision", level: 72, icon: "fa-solid fa-eye" },
          { name: "LLM Integration (Claude API)", level: 80, icon: "fa-solid fa-microchip" }
        ]
      },
      {
        name: "Tools & Design",
        icon: "fa-solid fa-wrench",
        items: [
          { name: "Git & GitHub", level: 82, icon: "fa-brands fa-github" },
          { name: "VS Code", level: 90, icon: "fa-solid fa-laptop-code" },
          { name: "Figma", level: 68, icon: "fa-brands fa-figma" },
          { name: "UI/UX & Database Design", level: 78, icon: "fa-solid fa-pen-ruler" },
          { name: "Responsive Design", level: 85, icon: "fa-solid fa-mobile-screen" }
        ]
      }
    ]
  },

  education: [
    {
      degree: "BSc AI & Data Science",
      institution: "Your College Name", // EDIT: add your college name
      duration: "Year 1 (Ongoing)",
      score: "CGPA: —", // EDIT: add CGPA once available
      description: "Core coursework in programming, statistics, machine learning foundations, and data structures, alongside self-driven project work."
    },
    {
      degree: "12th Grade (Higher Secondary)",
      institution: "Your School Name", // EDIT
      duration: "Completed",
      score: "Score: —", // EDIT
      description: "Science stream with a focus on mathematics and computer science."
    },
    {
      degree: "10th Grade (Secondary)",
      institution: "Your School Name", // EDIT
      duration: "Completed",
      score: "Score: —", // EDIT
      description: "Foundational schooling with an early interest in computers and problem solving."
    }
  ],

  certificates: [
    {
      title: "Certificate Title", // EDIT
      issuer: "Issuing Platform", // EDIT
      date: "2026",
      image: "assets/certificates/cert-placeholder.svg",
      link: "#"
    },
    {
      title: "Certificate Title", // EDIT
      issuer: "Issuing Platform", // EDIT
      date: "2026",
      image: "assets/certificates/cert-placeholder.svg",
      link: "#"
    },
    {
      title: "Certificate Title", // EDIT
      issuer: "Issuing Platform", // EDIT
      date: "2025",
      image: "assets/certificates/cert-placeholder.svg",
      link: "#"
    }
  ],

  projects: [
    {
      title: "REX — AI Voice Assistant",
      category: "AI / Full-Stack",
      image: "assets/projects/rex-ai.svg",
      description: "A personal agentic AI voice assistant with a FastAPI + WebSocket backend, Claude API integration, persistent SQLite memory, emotion classification, and tool use — paired with a cyberpunk, video-state reactive frontend (idle / listen / process).",
      technologies: ["Python", "FastAPI", "WebSocket", "Claude API", "SQLite", "React", "Three.js"],
      github: "#",
      demo: "#",
      status: "In Active Development",
      featured: true
    },
    {
      title: "CyberSentinel AI",
      category: "AI / Cyber Security",
      image: "assets/projects/cybersentinel.svg",
      description: "A real-data network intrusion detection system built on the NSL-KDD dataset, combining a YOLOv8 pipeline with a RandomForest classifier, visualized through a live Three.js globe frontend.",
      technologies: ["Python", "YOLOv8", "scikit-learn", "Three.js", "NSL-KDD"],
      github: "#",
      demo: "#",
      status: "Completed",
      featured: true
    },
    {
      title: "CareerAI — Resume Analyzer",
      category: "AI / Full-Stack",
      image: "assets/projects/careerai.svg",
      description: "A full-stack resume analyzer with ATS compatibility scoring, skill-gap analysis against target roles, and personalized learning roadmaps.",
      technologies: ["Python", "FastAPI", "React", "NLP"],
      github: "#",
      demo: "#",
      status: "Completed",
      featured: true
    },
    {
      title: "DOMINATE AI",
      category: "AI Platform",
      image: "assets/projects/dominate-ai.svg",
      description: "An enterprise-scale LLM platform concept built on the Claude API, featuring verified web search, advanced retry logic, circuit breakers, and a premium frontend.",
      technologies: ["Claude API", "Python", "System Design"],
      github: "#",
      demo: "#",
      status: "In Progress",
      featured: false
    },
    {
      title: "SmartTamil AI",
      category: "AI / NLP · Team Project",
      image: "assets/projects/smarttamil.svg",
      description: "A Tamil language input system supporting direct Tamil typing, Tanglish-to-Tamil conversion, and voice-to-Tamil input — built and presented as a 3-person team project.",
      technologies: ["Python", "NLP", "Speech-to-Text"],
      github: "#",
      demo: "#",
      status: "Completed",
      featured: false
    },
    {
      title: "Blood Cell Detection (YOLOv8)",
      category: "Computer Vision",
      image: "assets/projects/bloodcell.svg",
      description: "A YOLOv8-based detection system identifying eight blood cell classes (RBC, WBC, Platelets, Eosinophils, and more), evaluated with mAP50 and mAP50-95 metrics on a Kaggle dataset.",
      technologies: ["Python", "YOLOv8", "OpenCV", "Kaggle Dataset"],
      github: "#",
      demo: "#",
      status: "Completed",
      featured: false
    }
  ],

  experience: [
    {
      title: "Personal Projects",
      period: "Ongoing",
      description: "Designed and shipped multiple full-stack AI systems end to end — from architecture and model training to deployment-ready frontends.",
      icon: "fa-solid fa-laptop-code"
    },
    {
      title: "Hackathons",
      period: "Ongoing",
      description: "Contributed UI/UX and frontend engineering in team hackathon settings, translating product requirements into working prototypes.",
      icon: "fa-solid fa-people-group"
    },
    {
      title: "Self-Directed Learning",
      period: "Ongoing",
      description: "Continuously learning ML engineering, systems design, and interface design through project-based practice rather than courses alone.",
      icon: "fa-solid fa-book-open"
    }
  ],

  hackathons: [
    {
      title: "AI-Powered Career Advisor Platform", // EDIT: add real event name/date if applicable
      event: "Hackathon Prototype", // EDIT
      role: "UI/UX & Frontend",
      description: "Contributed architecture planning, database schema design, and frontend implementation for an AI career advisor platform using FastAPI, React, and the Claude API.",
      tags: ["FastAPI", "React", "Claude API"]
    }
  ],

  achievements: [
    { icon: "fa-solid fa-certificate", number: 0, suffix: "+", label: "Certifications Completed" }, // EDIT count
    { icon: "fa-brands fa-github", number: 0, suffix: "+", label: "GitHub Contributions" }, // EDIT count
    { icon: "fa-solid fa-diagram-project", number: 6, suffix: "+", label: "Projects Delivered" },
    { icon: "fa-solid fa-people-group", number: 1, suffix: "", label: "Team Hackathon Project" }
  ],

  timeline: [
    { title: "Started Programming", description: "Wrote my first lines of code and got hooked on building things.", date: "" },
    { title: "Learned Python", description: "Picked up Python as a primary language for scripting and problem solving.", date: "" },
    { title: "Learned Databases", description: "Explored SQLite and MongoDB to understand structured and unstructured data storage.", date: "" },
    { title: "Started UI/UX", description: "Began designing interfaces in Figma and developing a personal visual style.", date: "" },
    { title: "Built REX v1", description: "Shipped the first version of REX, a personal AI voice assistant.", date: "" },
    { title: "Rebuilt REX (Agentic)", description: "Rebuilt REX with tool use, persistent memory, emotion classification, and streaming WebSockets.", date: "" },
    { title: "Built CyberSentinel AI", description: "Trained a real-data intrusion detection pipeline with YOLOv8 and RandomForest.", date: "" },
    { title: "Built CareerAI", description: "Delivered a full-stack resume analyzer with ATS scoring and skill-gap analysis.", date: "" },
    { title: "Currently Learning", description: "Exploring multimodal RAG systems for a research-assistant project.", date: "Now" },
    { title: "Future Goal", description: "Deepen expertise in AI systems engineering and cyber security.", date: "Next" }
  ],

  socials: {
    github: "#", // EDIT: your GitHub URL
    linkedin: "#", // EDIT: your LinkedIn URL
    email: "you@example.com", // EDIT: your email
    instagram: "#" // EDIT: your Instagram URL
  },

  contact: {
    email: "you@example.com", // EDIT
    location: "India", // EDIT: city, state if you want to be specific
    availability: "Open to internships, collaborations, and hackathon teams"
  }
};

/* ------------------------------------------------------------
   2. SMALL HELPERS
   ------------------------------------------------------------ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

/* ------------------------------------------------------------
   3. LOADING SCREEN
   ------------------------------------------------------------ */
window.addEventListener("load", () => {
  const loader = $("#loader");
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add("loader--hidden");
    document.body.classList.remove("no-scroll");
    setTimeout(() => loader.remove(), 700);
  }, 600);
});

/* ------------------------------------------------------------
   4. DARK MODE TOGGLE
   ------------------------------------------------------------ */
function initThemeToggle() {
  const toggleButtons = $$(".theme-toggle");
  const root = document.documentElement;
  const stored = localStorageSafeGet("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (systemDark ? "dark" : "light");
  root.setAttribute("data-theme", initial);

  toggleButtons.forEach(btn => {
    btn.setAttribute("aria-pressed", initial === "dark");
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorageSafeSet("theme", next);
      toggleButtons.forEach(b => b.setAttribute("aria-pressed", next === "dark"));
    });
  });
}

// Artifacts / sandboxed environments can block localStorage — fail silently.
function localStorageSafeGet(key) {
  try { return window.localStorage.getItem(key); } catch (e) { return null; }
}
function localStorageSafeSet(key, value) {
  try { window.localStorage.setItem(key, value); } catch (e) { /* no-op */ }
}

/* ------------------------------------------------------------
   5. STICKY NAV + MOBILE MENU + ACTIVE LINK HIGHLIGHTING
   ------------------------------------------------------------ */
function initNav() {
  const header = $(".site-header");
  const navToggle = $(".nav-toggle");
  const navList = $(".nav-list");

  window.addEventListener("scroll", () => {
    header.classList.toggle("site-header--scrolled", window.scrollY > 30);
  }, { passive: true });

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("nav-list--open");
      navToggle.setAttribute("aria-expanded", isOpen);
      document.body.classList.toggle("no-scroll", isOpen);
    });

    $$(".nav-list a").forEach(link => {
      link.addEventListener("click", () => {
        navList.classList.remove("nav-list--open");
        navToggle.setAttribute("aria-expanded", false);
        document.body.classList.remove("no-scroll");
      });
    });
  }

  // Active section highlighting
  const sections = $$("main section[id]");
  const navLinks = $$(".nav-list a");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      const link = navLinks.find(a => a.getAttribute("href") === `#${id}`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove("nav-list__link--active"));
        link.classList.add("nav-list__link--active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
  sections.forEach(s => spy.observe(s));
}

/* ------------------------------------------------------------
   6. TYPING EFFECT
   ------------------------------------------------------------ */
function initTypingEffect() {
  const target = $("#typingText");
  if (!target || !PROFILE.roles.length) return;
  if (prefersReducedMotion) { target.textContent = PROFILE.roles[0]; return; }

  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = PROFILE.roles[roleIndex];
    if (!deleting) {
      charIndex++;
      target.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      target.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % PROFILE.roles.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 65);
  }
  tick();
}

/* ------------------------------------------------------------
   7. RENDER: HERO / ABOUT / CONTACT / SOCIALS / FOOTER (static-ish)
   ------------------------------------------------------------ */
function renderIdentity() {
  $$(".js-name").forEach(node => node.textContent = PROFILE.name);
  $$(".js-role").forEach(node => node.textContent = PROFILE.role);
  $$(".js-tagline").forEach(node => node.textContent = PROFILE.tagline);
  $$(".js-location").forEach(node => node.textContent = PROFILE.location);
  $$(".js-profile-image").forEach(node => node.src = PROFILE.profileImage);
  $$(".js-resume-link").forEach(node => node.href = PROFILE.resumeFile);
  $$(".js-year").forEach(node => node.textContent = new Date().getFullYear());

  const socialSets = $$(".js-social-links");
  const icons = {
    github: "fa-brands fa-github",
    linkedin: "fa-brands fa-linkedin-in",
    email: "fa-solid fa-envelope",
    instagram: "fa-brands fa-instagram"
  };
  socialSets.forEach(container => {
    container.innerHTML = "";
    Object.entries(PROFILE.socials).forEach(([key, value]) => {
      if (!value) return;
      const href = key === "email" ? `mailto:${value}` : value;
      const a = el("a", "social-icon", `<i class="${icons[key] || 'fa-solid fa-link'}"></i>`);
      a.href = href;
      a.setAttribute("aria-label", key);
      a.target = key === "email" ? "_self" : "_blank";
      a.rel = "noopener noreferrer";
      container.appendChild(a);
    });
  });

  const aboutParas = $("#aboutParagraphs");
  if (aboutParas) {
    aboutParas.innerHTML = "";
    PROFILE.about.paragraphs.forEach(p => aboutParas.appendChild(el("p", null, p)));
  }

  const interestTags = $("#interestTags");
  if (interestTags) {
    interestTags.innerHTML = "";
    PROFILE.about.interests.forEach(tag => interestTags.appendChild(el("span", "tag", tag)));
  }

  const aboutStats = $("#aboutStats");
  if (aboutStats) {
    aboutStats.innerHTML = "";
    PROFILE.about.stats.forEach(stat => {
      const card = el("div", "stat-card");
      card.innerHTML = `<span class="stat-card__number" data-count="${stat.number}">0</span><span class="stat-card__suffix">${stat.suffix}</span><span class="stat-card__label">${stat.label}</span>`;
      aboutStats.appendChild(card);
    });
  }

  const contactEmail = $("#contactEmail");
  if (contactEmail) { contactEmail.textContent = PROFILE.contact.email; contactEmail.href = `mailto:${PROFILE.contact.email}`; }
  const contactLocation = $("#contactLocation");
  if (contactLocation) contactLocation.textContent = PROFILE.contact.location;
  const contactAvailability = $("#contactAvailability");
  if (contactAvailability) contactAvailability.textContent = PROFILE.contact.availability;
}

/* ------------------------------------------------------------
   8. RENDER: SKILLS
   ------------------------------------------------------------ */
function renderSkills() {
  const container = $("#skillsGrid");
  if (!container) return;
  container.innerHTML = "";
  PROFILE.skills.categories.forEach(category => {
    const card = el("div", "skill-category glass-card reveal");
    const itemsHtml = category.items.map(item => `
      <div class="skill-item">
        <div class="skill-item__head">
          <span><i class="${item.icon}"></i> ${item.name}</span>
          <span class="skill-item__percent">${item.level}%</span>
        </div>
        <div class="skill-bar"><div class="skill-bar__fill" data-level="${item.level}"></div></div>
      </div>`).join("");
    card.innerHTML = `<h3 class="skill-category__title"><i class="${category.icon}"></i> ${category.name}</h3>${itemsHtml}`;
    container.appendChild(card);
  });
}

/* ------------------------------------------------------------
   9. RENDER: EDUCATION TIMELINE
   ------------------------------------------------------------ */
function renderEducation() {
  const container = $("#educationTimeline");
  if (!container) return;
  container.innerHTML = "";
  PROFILE.education.forEach((edu) => {
    const item = el("div", "v-timeline__item reveal");
    item.innerHTML = `
      <div class="v-timeline__dot"><i class="fa-solid fa-graduation-cap"></i></div>
      <div class="v-timeline__content glass-card">
        <span class="v-timeline__date">${edu.duration}</span>
        <h3>${edu.degree}</h3>
        <p class="v-timeline__org">${edu.institution} &middot; ${edu.score}</p>
        <p>${edu.description}</p>
      </div>`;
    container.appendChild(item);
  });
}

/* ------------------------------------------------------------
   10. RENDER: CERTIFICATES
   ------------------------------------------------------------ */
function renderCertificates() {
  const container = $("#certificatesGrid");
  if (!container) return;
  container.innerHTML = "";
  PROFILE.certificates.forEach(cert => {
    const card = el("div", "cert-card glass-card reveal");
    card.innerHTML = `
      <div class="cert-card__image"><img src="${cert.image}" alt="${cert.title}" loading="lazy"></div>
      <div class="cert-card__body">
        <h3>${cert.title}</h3>
        <p class="cert-card__meta">${cert.issuer} &middot; ${cert.date}</p>
        <a href="${cert.link}" class="btn btn--ghost btn--small" target="_blank" rel="noopener noreferrer">View Certificate <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>`;
    container.appendChild(card);
  });
}

/* ------------------------------------------------------------
   11. RENDER: PROJECTS (with filtering)
   ------------------------------------------------------------ */
function renderProjects(filter = "All") {
  const container = $("#projectsGrid");
  if (!container) return;
  container.innerHTML = "";
  const filtered = filter === "All" ? PROFILE.projects : PROFILE.projects.filter(p => p.category === filter);

  filtered.forEach(project => {
    const card = el("div", `project-card glass-card reveal${project.featured ? " project-card--featured" : ""}`);
    const techTags = project.technologies.map(t => `<span class="tag tag--small">${t}</span>`).join("");
    card.innerHTML = `
      <div class="project-card__image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <span class="project-card__status">${project.status}</span>
      </div>
      <div class="project-card__body">
        <span class="project-card__category">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-card__tags">${techTags}</div>
        <div class="project-card__actions">
          <a href="${project.github}" class="btn btn--ghost btn--small" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> GitHub</a>
          <a href="${project.demo}" class="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>`;
    container.appendChild(card);
  });

  initReveal();
}

function initProjectFilters() {
  const filterBar = $("#projectFilters");
  if (!filterBar) return;
  const categories = ["All", ...new Set(PROFILE.projects.map(p => p.category))];
  filterBar.innerHTML = categories.map((cat, i) =>
    `<button class="filter-btn${i === 0 ? " filter-btn--active" : ""}" data-filter="${cat}">${cat}</button>`).join("");

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn", filterBar).forEach(b => b.classList.remove("filter-btn--active"));
    btn.classList.add("filter-btn--active");
    renderProjects(btn.dataset.filter);
  });
}

/* ------------------------------------------------------------
   12. RENDER: EXPERIENCE
   ------------------------------------------------------------ */
function renderExperience() {
  const container = $("#experienceGrid");
  if (!container) return;
  container.innerHTML = "";
  PROFILE.experience.forEach(exp => {
    const card = el("div", "experience-card glass-card reveal");
    card.innerHTML = `
      <div class="experience-card__icon"><i class="${exp.icon}"></i></div>
      <h3>${exp.title}</h3>
      <span class="experience-card__period">${exp.period}</span>
      <p>${exp.description}</p>`;
    container.appendChild(card);
  });
}

/* ------------------------------------------------------------
   13. RENDER: HACKATHONS
   ------------------------------------------------------------ */
function renderHackathons() {
  const container = $("#hackathonsGrid");
  if (!container) return;
  container.innerHTML = "";
  PROFILE.hackathons.forEach(hack => {
    const card = el("div", "hackathon-card glass-card reveal");
    const tags = hack.tags.map(t => `<span class="tag tag--small">${t}</span>`).join("");
    card.innerHTML = `
      <div class="hackathon-card__head">
        <i class="fa-solid fa-flag-checkered"></i>
        <div>
          <h3>${hack.title}</h3>
          <span class="hackathon-card__event">${hack.event} &middot; ${hack.role}</span>
        </div>
      </div>
      <p>${hack.description}</p>
      <div class="project-card__tags">${tags}</div>`;
    container.appendChild(card);
  });
}

/* ------------------------------------------------------------
   14. RENDER: ACHIEVEMENTS
   ------------------------------------------------------------ */
function renderAchievements() {
  const container = $("#achievementsGrid");
  if (!container) return;
  container.innerHTML = "";
  PROFILE.achievements.forEach(item => {
    const card = el("div", "achievement-card glass-card reveal");
    card.innerHTML = `
      <i class="${item.icon}"></i>
      <div class="achievement-card__number"><span data-count="${item.number}">0</span>${item.suffix}</div>
      <p>${item.label}</p>`;
    container.appendChild(card);
  });
}

/* ------------------------------------------------------------
   15. RENDER: TIMELINE (learning journey)
   ------------------------------------------------------------ */
function renderTimeline() {
  const container = $("#journeyTimeline");
  if (!container) return;
  container.innerHTML = "";
  PROFILE.timeline.forEach((step, i) => {
    const item = el("div", "v-timeline__item reveal");
    item.innerHTML = `
      <div class="v-timeline__dot">${i + 1}</div>
      <div class="v-timeline__content glass-card">
        ${step.date ? `<span class="v-timeline__date">${step.date}</span>` : ""}
        <h3>${step.title}</h3>
        <p>${step.description}</p>
      </div>`;
    container.appendChild(item);
  });
}

/* ------------------------------------------------------------
   16. SCROLL REVEAL (custom, no external library)
   ------------------------------------------------------------ */
function initReveal() {
  const items = $$(".reveal:not(.reveal--visible)");
  if (prefersReducedMotion) {
    items.forEach(i => i.classList.add("reveal--visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}

/* ------------------------------------------------------------
   17. ANIMATED COUNTERS + SKILL BARS (trigger on view)
   ------------------------------------------------------------ */
function initCountersAndBars() {
  const counters = $$("[data-count]");
  const bars = $$(".skill-bar__fill");
  if (prefersReducedMotion) {
    counters.forEach(c => c.textContent = c.dataset.count);
    bars.forEach(b => b.style.width = `${b.dataset.level}%`);
    return;
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      const target = parseInt(node.dataset.count, 10);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        node.textContent = current;
      }, 30);
      counterObserver.unobserve(node);
    });
  }, { threshold: 0.4 });
  counters.forEach(c => counterObserver.observe(c));

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.width = `${entry.target.dataset.level}%`;
      barObserver.unobserve(entry.target);
    });
  }, { threshold: 0.3 });
  bars.forEach(b => barObserver.observe(b));
}

/* ------------------------------------------------------------
   18. SCROLL TO TOP BUTTON
   ------------------------------------------------------------ */
function initScrollTop() {
  const btn = $("#scrollTopBtn");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("scroll-top--visible", window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

/* ------------------------------------------------------------
   19. CONTACT FORM (front-end only — wire up to your backend
       or a service like Formspree by editing the fetch call)
   ------------------------------------------------------------ */
function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;
  const status = $("#contactFormStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#formName").value.trim();
    const email = $("#formEmail").value.trim();
    const message = $("#formMessage").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill in every field before sending.";
      status.className = "form-status form-status--error";
      return;
    }

    // No backend is wired up yet — this opens the visitor's email client
    // pre-filled with their message. Replace with a fetch() call to your
    // own backend or a form service (e.g. Formspree) when ready.
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${PROFILE.contact.email}?subject=${subject}&body=${body}`;

    status.textContent = "Opening your email client to send the message...";
    status.className = "form-status form-status--success";
    form.reset();
  });
}

/* ------------------------------------------------------------
   20. LIGHT PARTICLE BACKGROUND (hero canvas)
   ------------------------------------------------------------ */
function initParticles() {
  const canvas = $("#particleCanvas");
  if (!canvas || prefersReducedMotion) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let width, height;

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    const count = Math.min(60, Math.floor((width * height) / 18000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.6
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const dotColor = isDark ? "rgba(94,200,250,0.55)" : "rgba(42,99,255,0.35)";
    const lineColor = isDark ? "rgba(94,200,250,0.12)" : "rgba(42,99,255,0.08)";

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(step);
  }

  resize();
  createParticles();
  window.addEventListener("resize", () => { resize(); createParticles(); });
  requestAnimationFrame(step);
}

/* ------------------------------------------------------------
   21. SUBTLE CURSOR GLOW (desktop only, professional/understated)
   ------------------------------------------------------------ */
function initCursorGlow() {
  if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
  const glow = el("div", "cursor-glow");
  document.body.appendChild(glow);
  window.addEventListener("mousemove", (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }, { passive: true });
}

/* ------------------------------------------------------------
   22. SMOOTH SCROLL FOR IN-PAGE ANCHOR LINKS
   ------------------------------------------------------------ */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length < 2) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      const headerOffset = 76;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });
}

/* ------------------------------------------------------------
   23. INIT
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("no-scroll"); // released once loader hides
  initThemeToggle();
  initNav();
  renderIdentity();
  initTypingEffect();
  renderSkills();
  renderEducation();
  renderCertificates();
  initProjectFilters();
  renderProjects();
  renderExperience();
  renderHackathons();
  renderAchievements();
  renderTimeline();
  initReveal();
  initCountersAndBars();
  initScrollTop();
  initContactForm();
  initParticles();
  initCursorGlow();
  initSmoothScroll();
});
