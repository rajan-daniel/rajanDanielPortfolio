export const about = {
  name: "Rajan Daniel",
  role: "Full Stack Web Developer",
  about:
    "hello! I’m Rajan, a full-stack web developer building modern, production-ready applications using Typescript, React, Next.js, Tailwind CSS, and Supabase. I develop full-stack applications coding frontend, backends, APIs, authentication, and databases—while focusing on performance, scalability, and clean architecture and design. I focus on building out-of-the-box applications and services that users can start using right away.",
  email: "me@rajandaniel.com",
};
3
export const seo = {
  title: `${about.name} | ${about.role}`,
  description:
    "Minimal, clean Next.js portfolio template for developers seeking a simple, professional online presence without extra complexity.",
  keywords:
    "portfolio, web developer, Next.js, developer portfolio, minimal portfolio",
};

export const forms = {
  formspreeUrl: "https://formspree.io/f/xykokwby",
};

export const skills = [
  { name: "HTML", alt: "html logo", icon: "/html.svg" },
  { name: "CSS", alt: "css logo", icon: "/css.svg" },
  { name: "JS", alt: "js logo", icon: "/js.svg" },
  { name: "React JS", alt: "react logo", icon: "/react.svg" },
  { name: "TypeScript", alt: "typscript logo", icon: "/typscript.svg" },
  { name: "Next JS", alt: "nextjs logo", icon: "/nextjs.svg" },
  { name: "Tailwind", alt: "tailwind logo", icon: "/tailwind.svg" },
  { name: "SupaBase", alt: "supabase logo", icon: "/supabase.svg" },
];

export const tools = [
  { name: "Git", alt: "html logo", icon: "/git.svg" },
  { name: "VS Code", alt: "css logo", icon: "/vscode.svg" },
  { name: "Git Hub", alt: "js logo", icon: "/github.svg" },
  { name: "Teams", alt: "react logo", icon: "/teams.svg" },
  { name: "Zendesk", alt: "typscript logo", icon: "/zendesk.svg" },
  { name: "Git Bash", alt: "nextjs logo", icon: "/gitbash.svg" },
];

export const socials = {
  github: "https://github.com/rajan-daniel",
  twitter: "",
  linkedin: "https://www.linkedin.com/in/rajandaniel/",
  facebook: "",
};

export const projects = {
  pinProjects: [
    {
      title: "Personal Portfolio",
      description:
        "A sleek, modern portfolio site to showcasing my work and skills. Responsive design with smooth navigation and SEO optimization.",
      tags: ["Javascript", "Next JS", "Tailwind CSS", "Vercel"],
      link: "",
    },
    {
      title: "siteSprout",
      description:
        "siteSprout is known for delivering a premium website scaffold that make building a professional brand presence simple and fast.",
      tags: ["TypeScript", "React", "NextJS", "Tailwind CSS", "Vercel"],
      link: "https://site-sprout-beta.vercel.app/",
    },
    {
      title: "myBillTracker",
      description:
        "myBillTracker is a lightweight expense tracking application that helps users quickly log bills, monitor spending, and stay on top of their personal finances with a simple, clean workflow.",
      tags: ["TypeScript", "React", "NextJS", "Tailwind CSS", "Supabase", "Vercel"],
      link: "https://my-bill-tracker-alpha.vercel.app/",
    },
  ],
  otherProjects: [],
};

export const roadmap = [
  {
    title: "Introduction to Software Development",
    description:
      "First introduced to software development by scaffolding fundamental programming concepts using C++, Java & Discord.js. First small project was a discord bot made using Discord.js a Node.js library for developing Discord bots.",
    date: "12/27/2015",
  },
  {
    title: "Bachelor of Science in Computer Information Systems",
    description:
      "Focused on full-stack development using C++ and Java (NetBeans), with hands-on experience in MySQL databases. Coursework included object-oriented programming, backend development, database design, web security, cloud computing, and networking fundamentals.",
    date: "02/24/2024",
  },
  {
    title: "freeCodeCamp Certifications",
    description: (
      <>
        <ul className="space-y-1">
          <li>
            <strong>Responsive Web Design:</strong> HTML5, CSS3, Flexbox, Grid,
            accessibility, responsive layouts
          </li>
          <li>
            <strong>JavaScript Algorithms and Data Structures:</strong> ES6+,
            OOP, functional programming, data structures, algorithmic problem
            solving
          </li>
          <li>
            <strong>Front-End Development Libraries:</strong> React, Redux,
            Bootstrap, jQuery, SASS, component-based UI development
          </li>
          <li>
            <strong>Front-End:</strong> Capstone Certification
          </li>
        </ul>
      </>
    ),
    date: "12/14/2025 - 04/18/2026",
  },
  {
    title: "Project: siteSprout",
    description:
      "Built an open-source website template using Next.js and Tailwind CSS with a centralized data structure that keeps all site content easy to manage from one file. Focused on responsive design, reusable components, scalability, and clean project organization while applying real-world development practices like maintainability, version control, and building developer-friendly systems.",
    date: "5/11/2026 - Present",
  },
  {
    title: "Project: myBillTracker",
    description:
      "Built a full-stack lightweight bill tracking application designed to help users easily manage recurring expenses, payment dates, and upcoming bills in a clean, distraction-free interface. The application is production-ready and deployed on Vercel, with a frontend built using Next.js, TypeScript, and Tailwind CSS, and authentication and backend powered by Supabase. Set up a CI/CD pipeline to automate builds, testing, and deployment, ensuring consistent and reliable releases.",
    date: "5/20/2026 - Present",
  },
  {
    title: "Developing Websites for Businesses",
    description: "In progress...",
    date: "🔴 IN PROGRESS 5/19/2026 - Present",
  },
];

export const blogs = [
  {
    title: "Understand React Compnents",
    date: "12/03/2025",
    link: "#",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which",
    date: "25/12/2024",
    link: "#",
  },
  {
    title: "Next.js SEO Best Practices",
    date: "10/07/2024",
    link: "#",
  },
];
