const skills = [
  {
    title: "Front-End Development",
    description: "HTML, CSS, JavaScript, Bootstrap, and responsive design.",
    tags: ["UI", "UX", "Accessibility"],
  },
  {
    title: "Back-End Collaboration",
    description: "Comfortable working with APIs and server-side teams.",
    tags: ["REST", "Node", "Databases"],
  },
  {
    title: "Product Mindset",
    description: "Focused on business goals and user outcomes.",
    tags: ["Strategy", "Agile", "Testing"],
  },
  {
    title: "Creative Direction",
    description: "Designing cohesive brand experiences.",
    tags: ["Figma", "Branding", "Motion"],
  },
];

const projects = [
  {
    title: "E-commerce Dashboard",
    description:
      "Analytics-focused dashboard with live charts, sales tracking, and inventory insights.",
    meta: "Role: UI Engineer · 2024",
  },
  {
    title: "Travel Planner App",
    description:
      "Mobile-first planner that helps users craft itineraries, budgets, and packing lists.",
    meta: "Role: Front-End Lead · 2023",
  },
  {
    title: "Creative Agency Site",
    description:
      "High-impact landing page highlighting services, testimonials, and a conversion funnel.",
    meta: "Role: Web Designer · 2022",
  },
];

const skillsGrid = document.getElementById("skillsGrid");
const projectsGrid = document.getElementById("projectsGrid");
const refreshSkillsButton = document.getElementById("refreshSkills");

const renderSkills = (items) => {
  skillsGrid.innerHTML = "";
  items.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-3";
    card.innerHTML = `
      <div class="skill-card h-100">
        <h3 class="h5">${skill.title}</h3>
        <p class="text-muted">${skill.description}</p>
        <div class="d-flex flex-wrap gap-2">
          ${skill.tags
            .map((tag) => `<span class="skill-pill">${tag}</span>`)
            .join("")}
        </div>
      </div>
    `;
    skillsGrid.appendChild(card);
  });
};

const renderProjects = () => {
  projectsGrid.innerHTML = "";
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4";
    card.innerHTML = `
      <article class="project-card h-100">
        <h3 class="h5">${project.title}</h3>
        <p class="text-muted">${project.description}</p>
        <span class="text-uppercase small text-primary">${project.meta}</span>
      </article>
    `;
    projectsGrid.appendChild(card);
  });
};

const shuffleSkills = () => {
  const shuffled = [...skills].sort(() => Math.random() - 0.5);
  renderSkills(shuffled);
};

refreshSkillsButton.addEventListener("click", shuffleSkills);

renderSkills(skills);
renderProjects();
