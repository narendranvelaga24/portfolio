export const sectionsData = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'works', label: 'Works' },
    { id: 'contact', label: 'Contact' }
];

export const projectsData = [
    {
        title: "AutoCare Hub",
        subtitle: "Vehicle Maintenance Service",
        year: "2025",
        description: "A full-stack web application for booking vehicle maintenance services, combining user education, service listings, and a booking system with real-time interaction and secure authentication.",
        tech: "Node.js, Express, EJS, SQLite3, bcryptjs",
        challenges: "Managed user sessions across multiple service selections using query parameters and session persistence."
    },
    {
        title: "OfficeZero",
        subtitle: "Document Management System",
        year: "2025",
        description: "Co-developed during a company hackathon at StackZero, enabling file uploads, internal version tracking, and secure sharing within teams using modern web technologies.",
        tech: "React, Node.js, Git, Agile Development",
        challenges: "Collaborated in Agile sprints with daily Scrums to deliver features under tight deadlines."
    },
    {
        title: "Etch-a-Sketch",
        subtitle: "Interactive Drawing App",
        year: "2025",
        description: "An interactive browser-based sketchpad with dynamic 16×16 grid generation, featuring mouse hover effects and real-time drawing simulation with responsive design.",
        tech: "HTML, CSS, JavaScript, DOM Manipulation",
        challenges: "Resolved grid alignment issues using box-sizing: border-box and dynamic dimension calculations."
    },
    {
        title: "Simon Game",
        subtitle: "Memory Challenge Game",
        year: "2025",
        description: "Web-based version of the classic Simon game with growing color sequences, keyboard input, responsive interactions, and synchronized audio-visual feedback.",
        tech: "HTML, CSS, JavaScript, jQuery",
        challenges: "Implemented sequence synchronization using setTimeout() and chaining delays for smooth feedback."
    }
];

export const experiencesData = [
    {
        company: "StackZero",
        role: "Web Development Intern",
        period: "July 2025 - Present",
        description: [
            "Contributed to resolving front-end bugs in a production-grade React codebase, using Git for version control and effective collaboration.",
            "Participated in daily Scrum meetings and collaborated closely with team members during Agile sprint cycles to plan, develop, and ship new features.",
            "Co-developed OfficeZero, a document management system built during a company-wide hackathon, enabling file uploads, version tracking, and secure sharing."
        ]
    }
];
