export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritise team collaboration and clear, direct communication with engineers and stakeholders",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] md:min-h-[50vh]",
    imgClassName: "w-full h-full object-cover object-center",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to remote, onsite & hybrid roles worldwide",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start items-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always improving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Focused on backend development, software security, and fintech.",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-1 min-h-[160px] md:min-h-[220px]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 5,
    // ✅ UPDATED: Replaced false template text with accurate current project
    title:
      "Currently building a full-stack fintech banking platform with real-time transactions",
    description: "What I'm working on",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-[32rem] w-56",
    // titleClassName: "justify-center md:justify-start lg:justify-center",
    titleClassName: "justify-end",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Open to new opportunities — let's connect.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "NextBank – Fintech Banking Platform",
    des: "A full-stack banking dashboard with real-time transaction tracking, multi-bank account linking via Plaid, and peer-to-peer transfers via Dwolla. Built with Next.js 14, TypeScript, and Appwrite.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/app.svg", "/c.svg"],
    link: "https://github.com/engr-idemudia/NextBank",
    liveLink: "https://nextbank.idemudia.dev",
  },
  {
    id: 2,
    title: "Multi-Tenant Kindergarten Management System",
    des: "A role-based school management platform for admins, teachers, and parents. Features a full REST API backend (Spring Boot, Java), React/TypeScript frontend with MUI, JWT authentication, and PostgreSQL — developed in a team of 6 using Agile practices.",
    img: "/p2-2.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/c.svg"],
    link: "https://github.com/engr-idemudia/kindergarten-app",
    liveLink: "https://kindergarten.idemudia.dev",
  },
  {
    id: 3,
    title: "SaaS Platform with Stripe Payments & Real-Time Chat",
    des: "A full-stack SaaS platform with Stripe subscription payments, Firebase Firestore, and real-time multi-language chat translation. Features NextAuth authentication, Stripe webhooks, Zustand state management, and role-based access for free and pro tiers. Built with Next.js 13, TypeScript, Shadcn UI, and Tailwind CSS.",
    img: "/p3-1.JPG",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/engr-idemudia/saas-translator-app",
    liveLink: "https://translator.idemudia.dev",
  },
  // {
  //   id: 4,
  //   title: "Meal Tracker Application",
  //   des: "A full-stack backend application built with AdonisJS and MySQL. Features user authentication, meal tracking with calorie analysis, paginated meal history, reporting over time periods, and multi-language support including English, French, and Estonian.",
  //   img: "/p4.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/c.svg"],
  //   link: "https://github.com/engr-idemudia/Meal-Tracker-App",
  //   liveLink: "",
  // },
  {
    id: 4,
    title: "Meal Tracker Application",
    des: "A full-stack meal tracking app with user authentication, calorie logging, image uploads via Cloudinary, and detailed reports with date filtering. Built with Node.js, Express, PostgreSQL, and React.",
    img: "/p4.JPG",
    iconLists: ["/re.svg", "/pg.svg", "/ts.svg", "/cloud.svg", "/c.svg"],
    link: "https://github.com/engr-idemudia/meal-tracker",
    liveLink: "https://meal-tracker.idemudia.dev",
  },
];

export const testimonials = [
  {
    quote:
      "Idemudia demonstrated strong technical skills in system architecture, security, and problem-solving during his BSc thesis. His proactive mindset and ability to integrate feedback make him well-prepared to excel in demanding IT roles.",
    name: "Aleksandr Kormiltsyn",
    title: "Lecturer, Estonian Entrepreneurship University of Applied Sciences",
  },
  {
    quote:
      "Idemudia is a results-driven developer who delivers high-quality applications on time. His deep understanding of backend and frontend technologies, combined with a dedication to continuous learning, makes him a top choice for any software development role.",
    name: "Roop Ranjan Khan",
    title: "IT Application Engineer, Kuehne+Nagel",
  },
  {
    quote:
      "Beyond his technical skills, Idemudia is an excellent communicator who aligns projects with business goals. His positive attitude and willingness to support teammates make him a great addition to any development team.",
    name: "Maruf Hossen",
    title: "Founder, Revorium",
  },
  {
    quote:
      "During his time at Swappie, Idemudia consistently demonstrated outstanding performance and strong teamwork. His professionalism and dedication to delivering results make him a valuable asset to any team.",
    name: "Shaibu Kabiru",
    title: "Process Lead, Swappie",
  },
];

export const companies = [
  {
    id: 1,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 2,
    name: "hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 3,
    name: "github",
    img: "/git.svg",
    nameImg: "/githubName.svg",
  },
  {
    id: 4,
    name: "vercel",
    img: "/vercel.svg",
    nameImg: "/vercelName.svg",
  },
  {
    id: 5,
    name: "postgresql",
    img: "/pg.svg",
    nameImg: "/pgName.svg",
  },
  {
    id: 6,
    name: "firebase",
    img: "/firebase.svg",
    nameImg: "/firebaseName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance Software Engineer (2022–present)",
    desc: "Delivering custom backend and full-stack solutions with a focus on security, scalability, and clean architecture. Work includes REST API development, third-party integrations, and frontend builds using Node.js, React, TypeScript, and Next.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Junior Software Engineer – Zazuu Financial Services (2019–2020)",
    desc: "Developed backend features supporting cross-border payment systems. Integrated financial APIs enabling secure digital payment processing. Debugged software defects, supported QA testing, and collaborated with product teams to improve system performance.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Agile Development Bootcamp – AS Proekspert (2022)",
    desc: "Contributed to full-stack web application development across UI design, database schema, CI/CD pipelines, API testing, and sprint grooming. Ranked in the top 16 of 97 participants in a competitive code screening.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "IT Support & Systems Engineer – Ministry of Defence (2007–2019)",
    desc: "Monitored mission-critical RADAR and IT infrastructure systems. Diagnosed hardware and software failures, implemented system upgrades, security monitoring procedures, and maintained technical documentation for operational teams.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/engr-idemudia",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/maximudia",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/engr-idemudia/",
  },
];
