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
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to remote, onsite, and hybrid roles across time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
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
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    // ✅ UPDATED: Replaced false template text with accurate current project
    title:
      "Currently building a full-stack fintech banking platform with real-time transactions",
    description: "What I'm working on",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
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
    // ✅ REAL PROJECT: Banking App (your original fintech project)
    title: "Horizon – Fintech Banking Platform",
    des: "A full-stack banking dashboard with real-time transaction tracking, multi-bank account linking via Plaid, and peer-to-peer transfers via Dwolla. Built with Next.js 14, TypeScript, and Appwrite.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/app.svg", "/c.svg"],
    // TODO: Replace with the actual GitHub repo URL for your Banking App
    link: "https://github.com/engr-idemudia/NextBank",
  },
  {
    id: 2,
    // ✅ REAL PROJECT: TalTech Kindergarten Application (team project)
    title: "Multi-Tenant Kindergarten Management System",
    des: "A role-based school management platform for admins, teachers, and parents. Features a full REST API backend (Spring Boot, Java), React/TypeScript frontend with MUI, JWT authentication, and PostgreSQL — developed in a team of 6 using Agile practices.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/c.svg"],
    link: "https://github.com/taltech-vanemarendajaks/team29-kindergarten-application",
  },
  {
    id: 3,
    // ✅ REAL PROJECT: BSc Thesis (your security-focused academic project)
    title: "Secure Distributed Healthcare Data Collection System",
    des: "BSc thesis project: a secure distributed system for collecting patient data across healthcare nodes, incorporating encryption, access control, and system architecture best practices. Supervised at the Estonian Entrepreneurship University of Applied Sciences.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    // TODO: Replace with GitHub repo URL if the thesis project is public, otherwise link to your main GitHub
    link: "https://github.com/engr-idemudia/saas-translator-app",
  },
  {
    id: 4,
    // ✅ REAL PROJECT: Location & Time Tracker (your existing GitHub project)
    title: "Location & Time Tracker",
    des: "A real-time location and session time tracking application with an interactive UI and backend integration, built with React and Node.js.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/c.svg"],
    link: "https://github.com/engr-idemudia/Location_Time_Tracker",
  },
];

export const testimonials = [
  {
    // ✅ Removed "Proven Expertise..." label — let the quote speak for itself
    quote:
      "Under my supervision for his 2023 BSc thesis, Idemudia demonstrated strong technical skills in system architecture, security, and problem-solving. His project on secure distributed data collection in healthcare showcased his proficiency, dedication, and ability to integrate feedback effectively. He stands out as a highly capable professional with a proactive mindset and innovative approach. Idemudia is well-prepared to excel in IT roles that demand technical expertise, problem-solving, and secure system development.",
    name: "Aleksandr Kormiltsyn",
    title: "Lecturer, Estonian Entrepreneurship University of Applied Sciences",
  },
  {
    quote:
      "Having worked with Idemudia on several projects, I can confidently say that he is a results-driven developer who delivers high-quality applications on time. His problem-solving skills and deep understanding of backend and frontend technologies enable him to create seamless, user-friendly experiences. His dedication to continuous learning ensures he stays ahead of industry trends, making him a top choice for any software development role.",
    name: "Roop Ranjan Khan",
    title: "IT Application Engineer, Kuehne+Nagel",
  },
  {
    // ✅ Removed repeated sentence ("Idemudia's enthusiasm... truly stands out" appeared twice)
    quote:
      "Collaborating with Idemudia was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Idemudia's enthusiasm for every facet of development truly stands out. If you're seeking a reliable software engineer who takes ownership and delivers, Idemudia is the right choice.",
    name: "Basil Akpan",
    title: "Senior Software Engineer, Solita",
  },
  {
    quote:
      "Beyond his technical expertise, Idemudia is an excellent communicator who works well with teams and stakeholders. He actively participates in discussions, provides insightful suggestions, and ensures that projects align with business goals. His positive attitude and willingness to support others make him a great addition to any development team.",
    name: "Maruf Hossen",
    title: "Founder, Revorium",
  },
  {
    // ✅ Removed email address from title — unprofessional in a public portfolio
    quote:
      "Idemudia's professionalism, promptness, and dedication to delivering exceptional results stood out throughout our work together. His enthusiasm for development and teamwork contributed significantly to our project's success. During his time at Swappie, he showcased outstanding performance and a strong ability to collaborate effectively. I am confident he will excel in any role and strongly recommend him.",
    name: "Shaibu Kabiru",
    title: "Process Lead, Swappie",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer – Team Project (TalTech, 2025)",
    desc: "Built and maintained the KINDERGARTEN_ADMIN dashboard for a multi-tenant school management system. Delivered backend REST endpoints using Spring Boot and Java, built React/TypeScript frontend components with MUI, and conducted peer code reviews. Worked in a team of 6 using Agile practices with Git branching and PR workflows.",
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
