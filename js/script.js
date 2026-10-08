

/* =====================================================
   1. GET HTML ELEMENTS
===================================================== */

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

const projectsContainer =
    document.getElementById("projectsContainer");

const searchInput =
    document.getElementById("searchInput");

const technologyFilter =
    document.getElementById("technologyFilter");

const sortFilter =
    document.getElementById("sortFilter");

const projectCount =
    document.getElementById("projectCount");

const noResults =
    document.getElementById("noResults");


/* =====================================================
   2. PROJECT DATA
===================================================== */

const projects = [
    {
        id: 1,

        title: "E-Commerce Website",

        description:
            "A modern responsive e-commerce website with products, shopping cart and clean UI.",

        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        author: "Suzan Hamdy",

        authorImage:
            "https://i.pravatar.cc/100?img=47",

        likes: 24,

        views: 320,

        date: "2026-09-20",

        liveDemo: "#",

        sourceCode: "#"
    },

    {
        id: 2,

        title: "Developer Portfolio",

        description:
            "A professional developer portfolio showcasing skills, projects and experience.",

        image:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        author: "Ahmed Ali",

        authorImage:
            "https://i.pravatar.cc/100?img=12",

        likes: 41,

        views: 560,

        date: "2026-09-25",

        liveDemo: "#",

        sourceCode: "#"
    },

    {
        id: 3,

        title: "Task Manager",

        description:
            "A simple task management application for creating, completing and organizing tasks.",

        image:
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        author: "Mona Hassan",

        authorImage:
            "https://i.pravatar.cc/100?img=32",

        likes: 18,

        views: 245,

        date: "2026-09-15",

        liveDemo: "#",

        sourceCode: "#"
    },

    {
        id: 4,

        title: "React Dashboard",

        description:
            "A modern admin dashboard with reusable components and responsive layouts.",

        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",

        technologies: [
            "React",
            "JavaScript",
            "CSS"
        ],

        author: "Omar Emad",

        authorImage:
            "https://i.pravatar.cc/100?img=15",

        likes: 67,

        views: 890,

        date: "2026-09-28",

        liveDemo: "#",

        sourceCode: "#"
    },

    {
        id: 5,

        title: "Node API",

        description:
            "A REST API built with Node.js for managing users and application data.",

        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",

        technologies: [
            "Node.js",
            "JavaScript"
        ],

        author: "Karim Hassan",

        authorImage:
            "https://i.pravatar.cc/100?img=11",

        likes: 35,

        views: 430,

        date: "2026-09-22",

        liveDemo: "#",

        sourceCode: "#"
    },

    {
        id: 6,

        title: "MongoDB Blog",

        description:
            "A developer blog application using MongoDB to store posts and user data.",

        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",

        technologies: [
            "MongoDB",
            "Node.js",
            "JavaScript"
        ],

        author: "Sara Mohamed",

        authorImage:
            "https://i.pravatar.cc/100?img=44",

        likes: 52,

        views: 720,

        date: "2026-09-30",

        liveDemo: "#",

        sourceCode: "#"
    }
];


/* =====================================================
   3. DISPLAY PROJECTS
===================================================== */

function displayProjects(projectList) {

    // Make sure the container exists
    if (!projectsContainer) {
        return;
    }

    // Clear old projects
    projectsContainer.innerHTML = "";


    /* =========================
       NO RESULTS
    ========================== */

    if (projectList.length === 0) {

        if (noResults) {
            noResults.style.display = "block";
        }

        if (projectCount) {
            projectCount.textContent = "0 Projects";
        }

        return;
    }


    // Hide no results message
    if (noResults) {
        noResults.style.display = "none";
    }


    /* =========================
       UPDATE PROJECT COUNT
    ========================== */

    if (projectCount) {

        const text =
            projectList.length === 1
                ? "1 Project"
                : `${projectList.length} Projects`;

        projectCount.textContent = text;
    }


    /* =========================
       CREATE PROJECT CARDS
    ========================== */

    projectList.forEach(project => {

        const card =
            document.createElement("article");

        card.className = "project-card";


        /* Technologies */

        const technologyTags =
            project.technologies
                .map(technology => {

                    return `
                        <span class="project-tag">
                            ${technology}
                        </span>
                    `;

                })
                .join("");


        /* Card */

        card.innerHTML = `

            <div class="project-image">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                    loading="lazy"
                >

            </div>


            <div class="project-content">

                <h3>
                    ${project.title}
                </h3>


                <p>
                    ${project.description}
                </p>


                <div class="project-tags ">
                    ${technologyTags} 
                </div><br/>


                <div class="project-info">

                    <div class="project-author">

                        <img
                            src="${project.authorImage}"
                            alt="${project.author}"
                            loading="lazy"
                        >

                        <span>
                            ${project.author}
                        </span>

                    </div>


                    <div class="project-stats">

                        <span>
                            ❤️ ${project.likes}
                        </span>

                        <span>
                            👁️ ${project.views}
                        </span>

                    </div>

                </div>


                <div class="project-actions">

                    <a
                        href="${project.liveDemo}"
                        class="live-demo"
                        target="_blank"
                    >
                        Live Demo
                    </a>

                    <a
                        href="${project.sourceCode}"
                        target="_blank"
                    >
                        Source Code
                    </a>

                </div>

            </div>
        `;


        projectsContainer.appendChild(card);

    });
}


/* =====================================================
   4. SEARCH + FILTER
===================================================== */

function filterProjects() {

    let filteredProjects = [...projects];


    /* =========================
       SEARCH
    ========================== */

    const searchValue =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    if (searchValue !== "") {

        filteredProjects =
            filteredProjects.filter(project => {

                const title =
                    project.title.toLowerCase();

                const description =
                    project.description.toLowerCase();

                const author =
                    project.author.toLowerCase();

                const technologies =
                    project.technologies
                        .join(" ")
                        .toLowerCase();


                return (
                    title.includes(searchValue) ||
                    description.includes(searchValue) ||
                    author.includes(searchValue) ||
                    technologies.includes(searchValue)
                );

            });
    }


    /* =========================
       TECHNOLOGY FILTER
    ========================== */

    const selectedTechnology =
        technologyFilter
            ? technologyFilter.value
            : "all";


    if (selectedTechnology !== "all") {

        filteredProjects =
            filteredProjects.filter(project => {

                return project.technologies.includes(
                    selectedTechnology
                );

            });
    }


    /* =========================
       SORT
    ========================== */

    const selectedSort =
        sortFilter
            ? sortFilter.value
            : "latest";


    if (selectedSort === "likes") {

        filteredProjects.sort(
            (a, b) => b.likes - a.likes
        );

    } else if (selectedSort === "views") {

        filteredProjects.sort(
            (a, b) => b.views - a.views
        );

    } else {

        filteredProjects.sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        );

    }


    /* =========================
       DISPLAY
    ========================== */

    displayProjects(filteredProjects);
}


/* =====================================================
   5. SEARCH EVENT
===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterProjects
    );
}


/* =====================================================
   6. TECHNOLOGY FILTER EVENT
===================================================== */

if (technologyFilter) {

    technologyFilter.addEventListener(
        "change",
        filterProjects
    );
}


/* =====================================================
   7. SORT EVENT
===================================================== */

if (sortFilter) {

    sortFilter.addEventListener(
        "change",
        filterProjects
    );
}


/* =====================================================
   8. DARK / LIGHT MODE
===================================================== */

function setTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

        if (themeBtn) {
            themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        }

    } else {

        document.body.classList.remove("dark");

        if (themeBtn) {
            themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        }
    }
}


/* Load saved theme */

function loadTheme() {

    const savedTheme =
        localStorage.getItem("nexus-theme");


    if (savedTheme) {

        setTheme(savedTheme);

        return;
    }


    /* Check system theme */

    const prefersDark =
        window.matchMedia &&
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    setTheme(
        prefersDark
            ? "dark"
            : "light"
    );
}


/* Toggle theme */

function toggleTheme() {

    const isDark =
        document.body.classList.contains("dark");


    const newTheme =
        isDark
            ? "light"
            : "dark";


    setTheme(newTheme);

    localStorage.setItem(
        "nexus-theme",
        newTheme
    );
}


if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        toggleTheme
    );
}


/* =====================================================
   9. MOBILE MENU
===================================================== */

if (menuBtn && navLinks) {

    menuBtn.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "mobile-open"
            );


            const isOpen =
                navLinks.classList.contains(
                    "mobile-open"
                );


            menuBtn.textContent =
                isOpen
                    ? "✕"
                    : "☰";

        }
    );


    /* Close menu after clicking link */

    const navItems =
        navLinks.querySelectorAll("a");


    navItems.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "mobile-open"
                );

                menuBtn.textContent = "☰";

            }
        );

    });
}


/* =====================================================
   10. INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadTheme();

        /*
            displayProjects() works for
            both index.html and projects.html.
        */

        if (searchInput ||
            technologyFilter ||
            sortFilter) {

            filterProjects();

        } else {

            displayProjects(projects);

        }

    }
);

// ////////////////////////////////////////////////////////////////////////////////////////////

/* =====================================================
   11. ADD PROJECT
===================================================== */

const projectForm =
    document.getElementById("projectForm");

const technologyError =
    document.getElementById("technologyError");

const formMessage =
    document.getElementById("formMessage");


/* =====================================================
   GET SAVED PROJECTS
===================================================== */

function getSavedProjects() {

    const savedProjects =
        localStorage.getItem("nexus-projects");

    if (!savedProjects) {
        return [];
    }

    try {

        return JSON.parse(savedProjects);

    } catch (error) {

        console.error(
            "Could not read saved projects:",
            error
        );

        return [];
    }
}


/* =====================================================
   SAVE PROJECTS
===================================================== */

function saveProjects(projectList) {

    localStorage.setItem(
        "nexus-projects",
        JSON.stringify(projectList)
    );
}


/* =====================================================
   ADD PROJECT TO STORAGE
===================================================== */

function addProject(project) {

    const savedProjects =
        getSavedProjects();

    savedProjects.unshift(project);

    saveProjects(savedProjects);
}


/* =====================================================
   ADD PROJECT FORM
===================================================== */

if (projectForm) {

    projectForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* =========================
               GET VALUES
            ========================== */

            const title =
                document
                    .getElementById("projectTitle")
                    .value
                    .trim();


            const description =
                document
                    .getElementById("projectDescription")
                    .value
                    .trim();


            const liveDemo =
                document
                    .getElementById("liveDemo")
                    .value
                    .trim();


            const sourceCode =
                document
                    .getElementById("sourceCode")
                    .value
                    .trim();


            const image =
                document
                    .getElementById("projectImage")
                    .value
                    .trim();



            /* =========================
               GET TECHNOLOGIES
            ========================== */

            const selectedTechnologies =
                Array.from(
                    document.querySelectorAll(
                        'input[name="technology"]:checked'
                    )
                ).map(
                    checkbox => checkbox.value
                );


            /* =========================
               CLEAR OLD ERRORS
            ========================== */

            technologyError.textContent = "";

            formMessage.className = "form-message";

            formMessage.textContent = "";


            /* =========================
               VALIDATION
            ========================== */

            if (title.length < 3) {

                showFormError(
                    "Project name must contain at least 3 characters."
                );

                return;
            }


            if (description.length < 10) {

                showFormError(
                    "Description must contain at least 10 characters."
                );

                return;
            }


            if (selectedTechnologies.length === 0) {

                technologyError.textContent =
                    "Please select at least one technology.";

                return;
            }


            /* =========================
               CREATE PROJECT
            ========================== */

            const newProject = {

                id: Date.now(),

                title: title,

                description: description,

                image:
                    image ||
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",

                technologies:
                    selectedTechnologies,

                author: "You",

                authorImage:
                    "https://i.pravatar.cc/100?img=47",

                likes: 0,

                views: 0,

                date:
                    new Date()
                        .toISOString()
                        .split("T")[0],

                liveDemo:
                    liveDemo || "#",

                sourceCode:
                    sourceCode || "#"
            };


            /* =========================
               SAVE PROJECT
            ========================== */

            addProject(newProject);


            /* =========================
               SUCCESS MESSAGE
            ========================== */

            formMessage.className =
                "form-message success";

            formMessage.textContent =
                "🎉 Your project has been published successfully!";


            /* =========================
               RESET FORM
            ========================== */

            projectForm.reset();


            /* =========================
               REDIRECT
            ========================== */

            setTimeout(
                () => {

                    window.location.href =
                        "projects.html";

                },
                1200
            );

        }
    );
}


/* =====================================================
   FORM ERROR
===================================================== */

function showFormError(message) {

    if (!formMessage) {
        return;
    }

    formMessage.className =
        "form-message error";

    formMessage.textContent =
        `⚠️ ${message}`;
}
// ///////////////////////////////////////////////////////////

/* =====================================================
   1. DEVELOPERS DATA
===================================================== */

const developers = [
    {
        id: 1,
        name: "Suzan Hamdy",
        role: "Frontend Developer",
        avatar: "https://i.pravatar.cc/150?img=47",

        bio: "Frontend developer passionate about creating modern and responsive web experiences.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],

        projects: 12,
        views: 450
    },

    {
        id: 2,
        name: "Ahmed Ali",
        role: "Full Stack Developer",
        avatar: "https://i.pravatar.cc/150?img=12",

        bio: "Full stack developer building scalable web applications and modern digital products.",

        skills: [
            "JavaScript",
            "React",
            "Node.js"
        ],

        projects: 18,
        views: 720
    },

    {
        id: 3,
        name: "Mona Hassan",
        role: "JavaScript Developer",
        avatar: "https://i.pravatar.cc/150?img=32",

        bio: "JavaScript developer who loves building interactive and user-friendly applications.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        projects: 9,
        views: 310
    },

    {
        id: 4,
        name: "Omar Emad",
        role: "React Developer",
        avatar: "https://i.pravatar.cc/150?img=11",

        bio: "React developer focused on building clean interfaces and reusable components.",

        skills: [
            "React",
            "JavaScript",
            "CSS"
        ],

        projects: 15,
        views: 890
    },

    {
        id: 5,
        name: "Karim Hassan",
        role: "Backend Developer",
        avatar: "https://i.pravatar.cc/150?img=68",

        bio: "Backend developer interested in APIs, databases and server-side development.",

        skills: [
            "Node.js",
            "MongoDB",
            "JavaScript"
        ],

        projects: 11,
        views: 520
    },

    {
        id: 6,
        name: "Sara Mohamed",
        role: "Web Developer",
        avatar: "https://i.pravatar.cc/150?img=44",

        bio: "Web developer creating beautiful and accessible websites for modern users.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB"
        ],

        projects: 14,
        views: 640
    }
];


/* =====================================================
   2. GET DEVELOPERS PAGE ELEMENTS
===================================================== */

const developerSearch = document.getElementById("developerSearch");
const developersContainer = document.getElementById("developersContainer");
const developerCount = document.getElementById("developerCount");
const noDevelopers = document.getElementById("noDevelopers");


/* =====================================================
   3. DISPLAY DEVELOPERS
===================================================== */

function displayDevelopers(developerList) {

    // Make sure we are on Developers page
    if (!developersContainer) return;

    developersContainer.innerHTML = "";

    developerList.forEach((developer) => {

        const card = document.createElement("article");

        card.className = "developer-card";

        card.innerHTML = `
            <img
                src="${developer.avatar}"
                alt="${developer.name}"
                class="developer-avatar"
            >

            <h3>${developer.name}</h3>

            <p class="developer-role">
                ${developer.role}
            </p>

            <p class="developer-bio">
                ${developer.bio}
            </p>

            <div class="developer-skills">
                ${developer.skills
                  .map(
                    (skill) => `
                        <span class="developer-skill">
                            ${skill}
                        </span>
                    `,
                  )
                  .join("")}
            </div>

            <div class="developer-stats">

                <div class="developer-stat">
                    <span>🚀</span>
                    <span>Projects</span>
                    <strong>${developer.projects}</strong>
                </div>

                <div class="developer-stat">
                    <span>  👁️</span>
                    <span>Views</span>
                    <strong>${developer.views}</strong>
                </div>

            </div>

            <a
                href="profile.html?id=${developer.id}"
                class="developer-profile-btn"
            >
                View Profile →
            </a>
        `;

        developersContainer.appendChild(card);
    });


    /* =================================================
       UPDATE COUNT
    ================================================= */

    if (developerCount) {

        developerCount.textContent =
            `${developerList.length} Developer${developerList.length !== 1 ? "s" : ""}`;

    }


    /* =================================================
       NO RESULTS
    ================================================= */

    if (noDevelopers) {

        if (developerList.length === 0) {

            noDevelopers.classList.add("show");

        } else {

            noDevelopers.classList.remove("show");

        }
    }
}


/* =====================================================
   4. SEARCH DEVELOPERS
===================================================== */

function searchDevelopers() {

    if (!developerSearch) return;

    const searchValue =
        developerSearch.value.trim().toLowerCase();


    const filteredDevelopers = developers.filter((developer) => {

        const name =
            developer.name.toLowerCase();

        const role =
            developer.role.toLowerCase();

        const bio =
            developer.bio.toLowerCase();

        const skills =
            developer.skills
                .join(" ")
                .toLowerCase();


        return (
            name.includes(searchValue) ||
            role.includes(searchValue) ||
            bio.includes(searchValue) ||
            skills.includes(searchValue)
        );
    });


    displayDevelopers(filteredDevelopers);
}


/* =====================================================
   5. SEARCH EVENT
===================================================== */

if (developerSearch) {

    developerSearch.addEventListener(
        "input",
        searchDevelopers
    );

}


/* =====================================================
   6. INITIALIZE DEVELOPERS PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (developersContainer) {

        displayDevelopers(developers);

    }

});

