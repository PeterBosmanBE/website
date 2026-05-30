const SKILLS = {
  // Languages
  typescript: "TypeScript",
  javascript: "JavaScript",
  java: "Java",
  csharp: "C#",
  // Markup & Styling
  html: "HTML",
  css: "CSS",
  tailwind: "Tailwind CSS",
  bootstrap: "Bootstrap",
  shadcn: "shadcn/ui",
  antd: "Ant Design",
  primeng: "PrimeNG",
  // Frameworks
  nextjs: "Next.js",
  angular: "Angular",
  spring: "Spring Boot",
  aspnet: "ASP.NET Core",
  // Build Tools
  vite: "Vite",
  // Full-stack
  coldfusion: "ColdFusion",
  // SQL (Databases)
  postgres: "PostgreSQL",
  mongo: "MongoDB",
  mysql: "MySQL",
  mssql: "Microsoft SQL Server",
  h2: "H2 Database",
  firebase: "Firebase",
  // ORM
  efcore: "Entity Framework Core",
  drizzle: "Drizzle ORM",
  hibernate: "Hibernate",
  // Cloud Services
  google: "Google Cloud",
  cloudflare: "Cloudflare",
  vercel: "Vercel",
  s3: "S3",
  // DevOps & Tools
  docker: "Docker",
  vm: "Virtual Machines",
  gitlab: "GitLab",
  github: "GitHub",
  linux: "Linux",
  windowsserver: "Windows Server",
  // Other
  seo: "SEO",
} as const;

const organizations = {
  thomasMore: {
    name: "Thomas More University of Applied Sciences",
    url: "https://thomasmore.be",
  },
  oostVlaanderen: {
    name: "Oost-Vlaanderen",
    url: "https://oost-vlaanderen.be",
  },
  politie: {
    name: "Police",
    url: "https://politie.be",
  },
} as const;

const certifications = {
  nextjsseo: {
    name: "Next.js SEO Fundamentals",
    company: "Vercel",
    url: "https://nextjs.org/learn/certificate?course=seo&user=144227&certId=seo-144227-1770338859533",
    date: "February 2026",
  },
  introToHTML: {
    name: "Introduction to HTML",
    company: "Sololearn",
    url: "https://www.sololearn.com/certificates/CC-QVKOYD6X",
    date: "February 2026",
  },
  introToCSS: {
    name: "Introduction to CSS",
    company: "Sololearn",
    url: "https://www.sololearn.com/certificates/CC-VV5XCZ6X",
    date: "January 2026",
  },
  basicSQL: {
    name: "SQL (Basic) Certificate",
    company: "HackerRank",
    url: "https://www.hackerrank.com/certificates/5f364d5ec1e4",
    date: "December 2025",
  },
  englishCertificate: {
    name: "EF SET English Certificate 67/100 (C1 Advanced)",
    company: "EF SET",
    url: "https://cert.efset.org/en/xo9sym",
    date: "December 2025",
  },
  dockerFoundations: {
    name: "Docker Foundations",
    company: "Docker",
    url: "https://www.linkedin.com/learning/certificates/be570933a1abb65911733e61434380be46988127c06248fa14487a9ba7a09f45",
    date: "November 2025",
  },
  gitAndGitHubCourse: {
    name: "Learn Git & GitHub",
    company: "Codecademy",
    url: "https://www.codecademy.com/profiles/PeterBosmanBE/certificates/a8ab218d5950c29861635cc0bf12fd13",
    date: "June 2025",
  },
} as const;

const employmentTypes = ["Internship", "Part-time", "Full-time"] as const;

export const userInfo = {
  name: "Peter Bosman",
  email: "info@peterbosman.be",
  location: "Belgium",
  bio: "",
  picture: "/assets/profilepicture.jpeg",
  userName: "PeterBosmanBE",
  yearsOfExperience: 1,
  github: "https://github.com/PeterBosmanBE",
  linkedin: "https://linkedin.com/in/peterbosmanbe",
  youtube: "https://youtube.com/@TypicalPeter",
  instagram: "https://instagram.com/PeterBosmanBE",
};

export const usedSkills = [
  {
    name: "Frontend",
    skills: [
      {
        icon: "/assets/icons/frontend/typescript.png",
        name: SKILLS.typescript,
        description:
          "TypeScript is a strongly typed programming language that builds on JavaScript, adding static type definitions to improve code quality and developer productivity.",
      },
      {
        icon: "/assets/icons/frontend/javascript.png",
        name: SKILLS.javascript,
        description:
          "JavaScript is a high-level, interpreted programming language primarily used for creating interactive web pages and dynamic user experiences.",
      },
      {
        icon: "/assets/icons/frontend/html.png",
        name: SKILLS.html,
        description:
          "HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web, providing the basic building blocks for web pages.",
        certifications: [certifications.introToHTML],
      },
      {
        icon: "/assets/icons/frontend/css.png",
        name: SKILLS.css,
        description:
          "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and layout of a web page, allowing developers to control the visual appearance of HTML elements.",
        certifications: [certifications.introToCSS],
      },
      {
        icon: "/assets/icons/frontend/nextjs.svg",
        name: SKILLS.nextjs,
        description:
          "Next.js is a powerful React framework that enables developers to build fast and scalable web applications with features like server-side rendering, static site generation, and API routes, making it an excellent choice for modern web development.",
      },
      {
        icon: "/assets/icons/frontend/angular.svg",
        name: SKILLS.angular,
        description:
          "Angular is a popular JavaScript framework for building single-page applications, offering a comprehensive solution for developing dynamic web applications with features like two-way data binding, dependency injection, and a modular architecture.",
      },
      {
        icon: "/assets/icons/frontend/primeng.png",
        name: SKILLS.primeng,
        description:
          "PrimeNG is a collection of rich UI components for Angular applications, providing a wide range of pre-built components that enhance the user experience and accelerate development.",
      },
      {
        icon: "/assets/icons/frontend/shadcn.svg",
        name: SKILLS.shadcn,
        description:
          "shadcn/ui is a collection of accessible and customizable components built with Radix UI and Tailwind CSS, designed to help developers create beautiful and functional user interfaces.",
      },
      {
        icon: "/assets/icons/frontend/tailwind.svg",
        name: SKILLS.tailwind,
        description:
          "Tailwind CSS is a utility-first CSS framework that enables developers to build custom designs quickly by providing low-level utility classes for styling elements.",
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        icon: "/assets/icons/backend/csharp.png",
        name: SKILLS.csharp,
        description:
          "C# is a modern, object-oriented programming language developed by Microsoft, commonly used for building Windows applications and web services.",
      },
      {
        icon: "/assets/icons/backend/spring.svg",
        name: SKILLS.spring,
        description:
          "Spring is a popular Java framework for building enterprise-level applications, offering a comprehensive solution for developing scalable and maintainable software.",
      },
      {
        icon: "/assets/icons/backend/aspnet.svg",
        name: SKILLS.aspnet,
        description:
          "ASP.NET is a free and open-source web application framework developed by Microsoft for building dynamic web applications and services.",
      },
      {
        icon: "/assets/icons/backend/coldfusion.svg",
        name: SKILLS.coldfusion,
        description:
          "ColdFusion is a server-side scripting language and development environment for creating dynamic web applications and services.",
      },
      {
        icon: "/assets/icons/backend/java.png",
        name: SKILLS.java,
        description:
          "Java is a class-based, object-oriented programming language designed for portability and platform independence, widely used for enterprise software development.",
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        icon: "/assets/icons/database/postgres.png",
        name: SKILLS.postgres,
        description:
          "PostgreSQL is a powerful, open-source relational database system known for its reliability, feature-richness, and standards compliance.",
        certifications: [certifications.basicSQL],
      },
      {
        icon: "/assets/icons/database/mongodb.png",
        name: SKILLS.mongo,
        description:
          "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents, making it easy to work with unstructured data.",
      },
      {
        icon: "/assets/icons/database/mysql.png",
        name: SKILLS.mysql,
        description:
          "MySQL is a widely-used open-source relational database management system known for its speed, reliability, and ease of use.",
        certifications: [certifications.basicSQL],
      },
      {
        icon: "/assets/icons/database/mssql.png",
        name: SKILLS.mssql,
        description:
          "Microsoft SQL Server is a relational database management system developed by Microsoft, offering robust features for enterprise applications.",
        certifications: [certifications.basicSQL],
      },
      {
        icon: "/assets/icons/database/h2.png",
        name: SKILLS.h2,
        description:
          "H2 is an in-memory database written in Java, commonly used for testing and development purposes.",
      },
      {
        icon: "/assets/icons/database/firebase.png",
        name: SKILLS.firebase,
        description:
          "Firebase is a backend-as-a-service platform that provides real-time database capabilities, authentication, and hosting for web and mobile applications.",
      },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      {
        icon: "/assets/icons/tools/docker.png",
        name: SKILLS.docker,
        description:
          "Docker is a containerization platform that allows developers to package their applications and dependencies into lightweight, portable containers.",
        certifications: [certifications.dockerFoundations],
      },
      {
        icon: "/assets/icons/tools/vm.png",
        name: SKILLS.vm,
        description:
          "Virtual Machines (VMs) are simulated computers that run on top of a physical machine, allowing for efficient resource utilization and isolation.",
      },
      {
        icon: "/assets/icons/tools/gitlab.png",
        name: SKILLS.gitlab,
        description:
          "GitLab is a web-based DevOps lifecycle tool that provides a complete CI/CD pipeline for software development.",
        certifications: [certifications.gitAndGitHubCourse],
      },
      {
        icon: "/assets/icons/tools/github.png",
        name: SKILLS.github,
        description:
          "GitHub is a web-based platform for version control and collaboration, widely used for hosting and managing software projects.",
        certifications: [certifications.gitAndGitHubCourse],
      },
      {
        icon: "/assets/icons/tools/linux.png",
        name: SKILLS.linux,
        description:
          "Linux is a free and open-source operating system kernel, widely used for servers, desktops, and embedded systems.",
      },
      {
        icon: "/assets/icons/tools/windows.png",
        name: SKILLS.windowsserver,
        description:
          "Windows Server is a server operating system developed by Microsoft, designed for hosting applications and services in enterprise environments.",
      },
    ],
  },
];

export const usedCertifications = [
  {
    name: certifications.dockerFoundations.name,
    company: certifications.dockerFoundations.company,
    url: certifications.dockerFoundations.url,
    date: certifications.dockerFoundations.date,
  },
  {
    name: certifications.gitAndGitHubCourse.name,
    company: certifications.gitAndGitHubCourse.company,
    url: certifications.gitAndGitHubCourse.url,
    date: certifications.gitAndGitHubCourse.date,
  },
];

export const experiences = [
  {
    organization: organizations.oostVlaanderen.name,
    url: organizations.oostVlaanderen.url,
    roles: [
      {
        title: "Full-Stack Developer",
        startDate: "April 2026",
        endDate: "June 2026",
        employment: employmentTypes[0],
        location: "Ghent, Belgium",
        description: "",
        technologies: [
          SKILLS.coldfusion,
          SKILLS.csharp,
          SKILLS.typescript,
          SKILLS.angular,
          SKILLS.primeng,
          SKILLS.gitlab,
          SKILLS.mssql,
          SKILLS.vm,
          SKILLS.linux,
          SKILLS.html,
          SKILLS.css,
        ],
      },
    ],
  },
  {
    organization: organizations.politie.name,
    url: organizations.politie.url,
    roles: [
      {
        title: "Full-Stack Developer",
        startDate: "April 2025",
        endDate: "November 2025",
        employment: employmentTypes[0],
        location: "Belgium",
        description:
          "Developed an internal field application for police officers using Next.js, TypeScript, REST APIs, and GitHub (Version Control), while managing Windows Server to host and maintain the application in production.",
        technologies: [
          SKILLS.nextjs,
          SKILLS.antd,
          SKILLS.windowsserver,
          SKILLS.github,
          SKILLS.mysql,
          SKILLS.drizzle,
          SKILLS.s3,
          SKILLS.typescript,
          SKILLS.html,
        ],
      },
    ],
  },
];

export const educations = [
  {
    organization: organizations.thomasMore.name,
    url: organizations.thomasMore.url,
    degree: "Full Stack Development",
    typeOfDegree: "Associate Degree",
    startDate: "September 2023",
    endDate: "June 2026",
    description:
      "Pursuing a Associate Degree at Thomas More University of Applied Sciences. The program covers software development, programming languages, and core computer science principles.",
    skills: [
      SKILLS.typescript,
      SKILLS.nextjs,
      SKILLS.tailwind,
      SKILLS.postgres,
      SKILLS.drizzle,
      SKILLS.github,
      SKILLS.vercel,
      SKILLS.docker,
      SKILLS.linux,
      SKILLS.vite,
      SKILLS.mongo,
      SKILLS.firebase,
      SKILLS.html,
      SKILLS.css,
      SKILLS.bootstrap,
      SKILLS.javascript,
      SKILLS.java,
      SKILLS.spring,
      SKILLS.h2,
    ],
  },
];

export const projects = [
  {
    title: "Arboretum Management",
    startDate: "April 2026",
    endDate: "June 2026",
    description:
      "A web application for managing an arboretum's plant collection, built with Next.js, TypeScript, and PostgreSQL. Features include plant cataloging, care scheduling, and a public-facing plant encyclopedia.",
    associated: [organizations.oostVlaanderen.name],
    image: "/assets/images/ArboretumManagement.png",
    technologies: [
      SKILLS.angular,
      SKILLS.typescript,
      SKILLS.csharp,
      SKILLS.aspnet,
      SKILLS.mssql,
      SKILLS.efcore,
      SKILLS.gitlab,
      SKILLS.coldfusion,
      SKILLS.primeng
    ],
  },
  {
    title: "Chapter",
    startDate: "March 2026",
    endDate: "April 2026",
    description: "",
    associated: [organizations.thomasMore.name],
    image: "/assets/images/Chapter.png",
    technologies: [
      SKILLS.nextjs,
      SKILLS.typescript,
      SKILLS.tailwind,
      SKILLS.postgres,
      SKILLS.drizzle,
      SKILLS.github,
      SKILLS.vercel,
    ],
    github: "https://github.com/PeterBosmanBE/peter-bosman-hybrid-eindopdracht",
    live: "https://chapter.peterbosman.be",
  },
  {
    title: "Local Police Application",
    startDate: "April 2025",
    endDate: "November 2025",
    description: "",
    associated: [organizations.politie.name],
    image: "/assets/images/LocalPoliceApplication.png",
    technologies: [
      SKILLS.nextjs,
      SKILLS.antd,
      SKILLS.windowsserver,
      SKILLS.github,
      SKILLS.mysql,
      SKILLS.drizzle,
      SKILLS.s3,
      SKILLS.typescript,
      SKILLS.html,
    ],
  },
  {
    title: "DishCover",
    startDate: "April 2024",
    endDate: "June 2024",
    description:
      "DishCover is my first team project made by Peter, Carolina, Rob and Mohamed. This website was built using Java, Spring Boot, Basic JavaScript, HTML, CSS and Bootstrap. Given a limited amount of time (1.5 months), we created an amazing website to showcase our teamwork, skills, communication and dedication to delivering a fantastic product in a short amount of time.",
    associated: [organizations.thomasMore.name],
    image: "/assets/images/DishCover.png",
    video: "https://www.youtube.com/watch?v=5rSmR26AZDg",
    technologies: [
      SKILLS.java,
      SKILLS.spring,
      SKILLS.html,
      SKILLS.css,
      SKILLS.bootstrap,
      SKILLS.javascript,
      SKILLS.github,
      SKILLS.google,
    ],
  },
  {
    title: "VRHeaven",
    startDate: "December 2023",
    endDate: "January 2024",
    description:
      "This is my first project that I made for school. I had to create a website about something I was interested in. A hobby, sport, film, book, etc... I chose Virtual Reality, more specifically VRChat, something I had been very interested in for over 3 years when I made the website.",
    associated: [organizations.thomasMore.name],
    image: "/assets/images/VRHeaven.png",
    technologies: [SKILLS.html, SKILLS.css, SKILLS.bootstrap],
    github: "https://github.com/PeterBosmanBE/VRHeaven",
    live: "https://themasite.peterbosman.be/index.html",
  },
];

export const clients = [];
