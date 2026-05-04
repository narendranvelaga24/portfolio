export const sectionsData = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'works', label: 'Works' },
    { id: 'contact', label: 'Contact' }
];

export const projectsData = [
    {
        title: "Cittilenz",
        subtitle: "AI-Powered Civic Issue Reporting Platform",
        year: "2025",
        description: "Built an end-to-end civic complaint platform enabling citizens to report issues with images and GPS, using PostGIS for ward-based routing, duplicate detection, and SLA-driven workflows across roles. Integrated AI image classification (YOLO, MobileNetV2) and contributed to responsive UI and backend API validation.",
        tech: "React.js, Spring Boot, PostgreSQL, FastAPI, YOLO, MobileNetV2, PostGIS",
        challenges: "Implemented ward-based routing and duplicate detection using spatial queries and AI-assisted image classification.",
        url: "https://github.com/narendranvelaga24/cittilenz-ui"
    },
    {
        title: "AutoCare Hub",
        subtitle: "Vehicle Maintenance Service",
        year: "2025",
        description: "Built a comprehensive booking platform that allows users to schedule vehicle maintenance, featuring secure authentication via bcryptjs, structured profiles, and booking histories. Designed a responsive frontend with reusable EJS components and a modular MVC backend using SQLite3.",
        tech: "Node.js, Express, EJS, SQLite3, bcryptjs",
        challenges: "Maintained session persistence across multi-service flows and ensured secure authentication.",
        url: "https://github.com/narendranvelaga24/service-booking-app"
    },
    {
        title: "NewsFlow",
        subtitle: "Personalized News Aggregator",
        year: "2025",
        description: "Architected a news aggregator that ranks and delivers personalized content based on user preferences and reading history. Built a backend ingestion engine with scheduled workers to fetch, normalize, and store articles from multiple external APIs while handling rate limits and reliability.",
        tech: "Next.js, Fastify, PostgreSQL, Prisma",
        challenges: "Designed resilient ingestion workers and personalized ranking pipelines to handle varying API rate limits and content normalization.",
        url: "https://github.com/narendranvelaga24/Personalized-News-Aggregator"
    }
];

export const experiencesData = [
    {
        company: "StackZero",
        role: "Web Development Intern",
        period: "July 2025 – November 2025",
        description: [
            "Resolved front-end bugs in a production-grade React codebase and collaborated using Git in a multi-developer environment.",
            "Designed and developed the Dreamz Designz website, delivering an engaging, responsive, and user-friendly interface.",
            "Participated in Agile sprint cycles and worked closely with team members to plan and ship features."
        ],
        url: "https://www.stackzero.in/"
    }
];

export const educationData = [
    {
        institution: "Dayananda Sagar College of Engineering",
        program: "Bachelor of Engineering in Information Science",
        period: "November 2022 – Present",
        detail: "CGPA: 8.7",
        location: "Bangalore, Karnataka"
    },
    {
        institution: "Little Woods School",
        program: "PCM (CBSE) – Higher Secondary (Senior School)",
        period: "May 2021 – April 2022",
        detail: "Score: 85.4%",
        location: "Kakinada, Andhra Pradesh"
    }
];
