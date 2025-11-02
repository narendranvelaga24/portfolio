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
        year: "May 2025",
        description: "Built a full-stack web application for booking vehicle maintenance services with secure user authentication (bcryptjs), structured profiles, booking history, and a responsive EJS-based frontend using reusable components. Implemented MVC architecture with modular routes, controllers, and SQLite models; resolved session persistence challenges in multi-service selection by managing query parameters and storing service IDs in sessions.",
        tech: "Node.js, Express, EJS, SQLite3, bcryptjs",
        challenges: "Managed user sessions across multiple service selections using query parameters and session persistence.",
        url: "https://github.com/narendranvelaga24/service-booking-app"
    },
    {
        title: "SchedulAI",
        subtitle: "AI Task Manager",
        year: "August 2025",
        description: "Built a full-stack task management application on the MERN stack that provides AI-powered scheduling, smart task grouping into 'focus sessions,' and a fully responsive, installable PWA interface for seamless offline use with IndexedDB. Implemented secure authentication with JWT and bcrypt, complete CRUD for tasks, and handled concurrent backend/frontend service challenges to ensure seamless real-time operations.",
        tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS, JWT, bcrypt",
        challenges: "Handled concurrent backend/frontend service challenges for seamless real-time operations.",
        url: "https://github.com/narendranvelaga24/AI-Task-Manager"
    },
    {
        title: "Whisper App",
        subtitle: "Real-time Chat App",
        year: "July 2025",
        description: "Developed a full-stack real-time chat app on the MERN stack with private and group conversations, secure authentication, responsive UI, search, chat previews, modals, and toast notifications using React and Tailwind CSS. Integrated Socket.IO for live messaging, typing indicators, and chat room updates; resolved race conditions in message delivery and user status sync with client-side state checks and debounced socket events.",
        tech: "MongoDB, Express.js, React.js, Node.js, Socket.IO, Tailwind CSS",
        challenges: "Resolved race conditions in message delivery and user status synchronization by implementing client-side state checks and debounced socket events.",
        url: "https://github.com/narendranvelaga24/whisper-chat"
    }
];

export const experiencesData = [
    {
        company: "StackZero",
        role: "Web Development Intern",
        period: "July 2025 – Present",
        description: [
            "Contributed to resolving front-end bugs in a production-grade React codebase, using Git for version control and effective collaboration within a multi-developer environment.",
            "Participated in daily Scrum meetings and collaborated closely with team members during Agile sprint cycles to plan, develop, and ship new features under tight deadlines.",
            "Assisted in designing and developing the Dreamz Designz website, focusing on creating an engaging, responsive, and user-friendly UI experience."
        ],
        url: "https://www.stackzero.in/"
    }
];
