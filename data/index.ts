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
      "Currently building full-stack web applications with secure authentication and real-time features",
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
    des: "A full-stack banking platform: multi-bank linking via Plaid, peer-to-peer transfers via Dwolla, and real-time transaction tracking.",
    img: "/nextbank.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/app.svg", "/c.svg"],
    link: "https://github.com/engr-idemudia/NextBank",
    liveLink: "https://nextbank.idemudia.dev",
    demoVideo: "/demos/nextbank-demo",
  },
  {
    id: 2,
    title: "Multi-Tenant Kindergarten Management System",
    des: "A multi-tenant school platform for admins, teachers and parents, built by a team of 5. My focus: DevOps, JWT auth, Spring Security and CI/CD.",
    img: "/p2-2.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/c.svg"],
    link: "https://github.com/engr-idemudia/kindergarten-app",
    liveLink: "https://kindergarten.idemudia.dev",
    demoVideo: "/demos/kindergarten-demo",
  },
  {
    id: 3,
    title: "SaaS Platform with Stripe Payments & Real-Time Chat",
    des: "A SaaS platform with Stripe subscription billing, Firebase Firestore, and real-time multi-language chat translation.",
    img: "/p3-1.JPG",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/engr-idemudia/saas-translator-app",
    liveLink: "https://translator.idemudia.dev",
  },
  {
    id: 4,
    title: "Meal Tracker Application",
    des: "A full-stack meal-tracking app with token-based auth, calorie logging, Cloudinary image uploads, and date-filtered reports.",
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
  {
    id: 7,
    name: "render",
    img: "/render.svg",
    nameImg: "/renderName.svg",
  },
  {
    id: 8,
    name: "netlify",
    img: "/netlify.svg",
    nameImg: "/netlifyName.svg",
  },
  {
    id: 9,
    name: "githubactions",
    img: "/githubactions.svg",
    nameImg: "/githubactionsName.svg",
  },
];

// Harmonised with the CV: Freelance → Swappie → Zazuu → Ministry of Defence.
export const workExperience = [
  {
    id: 1,
    title: "Freelance Software Engineer (2024–present)",
    desc: "Design, build, and deploy full-stack web applications for clients, with a focus on performance, security, and maintainability. Integrate third-party REST APIs and payment gateways, apply secure authentication and input validation, and manage delivery end-to-end — requirements, sprint planning, testing, and deployment. Stack: Node.js, React, TypeScript, and Next.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Senior Production Specialist – Eippa WS / Swappie (2022–2024)",
    desc: "Diagnosed, tested, and reactivated iOS devices using specialised tools (2uTool, 3uTool, Blancco) to strict quality standards. Worked within Agile workflows, consistently meeting throughput targets and quality-control metrics, while providing technical support and coordinating logistics across device distribution pipelines.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Junior Software Engineer – Zazuu Financial Services (2019–2020)",
    desc: "Developed and optimised cross-border payment features for a London-based fintech (remote), improving transaction throughput for African markets. Integrated local payment APIs to extend coverage across several African countries, implemented measures to safeguard transactions and reduce fraud, and shipped features on schedule alongside product managers and senior engineers in an Agile team.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "IT Support & Systems Engineer – Ministry of Defence (2007–2019)",
    desc: "Maintained and monitored mission-critical RADAR and IT infrastructure, ensuring continuous operational availability. Diagnosed and resolved complex hardware and software faults to minimise downtime in high-stakes environments, performed system upgrades, security patching, and configuration management, and improved reliability through proactive monitoring and fault analysis.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// Education & university programmes — newest first, forms a clean 2x2 grid
export const education = [
  {
    id: 1,
    degree: "From Junior Software Developer to Senior Developer",
    institution: "Tallinn University of Technology (TalTech)",
    location: "",
    period: "2026",
    note: "A 250-hour ICT specialists programme covering software architecture, automated testing, CI/CD and DevOps, version control, sprint planning, code quality, security, and mentoring junior developers.",
  },
  {
    id: 2,
    degree: "BSc Software Development & Entrepreneurship",
    institution:
      "Estonian Entrepreneurship University of Applied Sciences (EUAS)",
    location: "Tallinn, Estonia",
    period: "2020 – 2023",
    note: "Sole African graduate in the programme. Thesis on system architecture and application security.",
  },
  {
    id: 3,
    degree: "BSc Mathematics & Computer Science",
    institution: "Rivers State University (RSU)",
    location: "Port Harcourt, Rivers State, Nigeria",
    period: "2011 – 2014",
    note: "",
  },
  {
    id: 4,
    degree: "National Diploma in Computer Engineering",
    institution: "University of Benin (UNIBEN)",
    location: "Benin City, Edo State, Nigeria",
    period: "2004 – 2006",
    note: "",
  },
];

// Certifications & training — full titles, dated by year earned, with descriptions
export const certifications = [
  {
    id: 1,
    name: "Agile Development Crash Course",
    issuer: "AS Proekspert, Tallinn",
    year: "2022",
    note: "One-week intensive bootcamp spanning software engineering, QA, DevOps, Scrum, and agile practices (Java, JavaScript, React, Jira, Jenkins, Git, Docker), culminating in a team-built application (Kudos App).",
  },
  {
    id: 2,
    name: "Quality Assurance Industry Training",
    issuer: "Brainnest, Germany",
    year: "2022",
    note: "Hands-on QA training (20 hours plus individual work) covering manual and automated testing with Jira, Qase, JMeter, and Postman.",
  },
  {
    id: 3,
    name: "Fortinet NSE 1 – Network Security Associate",
    issuer: "Fortinet",
    year: "2020",
    note: "Foundational network-security certification covering the cybersecurity threat landscape and the core principles of network defence.",
  },
  {
    id: 4,
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    year: "2015",
    note: "Professional certification in ethical-hacking and penetration-testing methodology, including reconnaissance, system and network security, and vulnerability assessment.",
  },
];

// Awards & recognition — distinctions, newest first (2x2 grid)
export const awards = [
  {
    id: 1,
    title: "Sole African Graduate",
    context: "EUAS — BSc Software Development & Entrepreneurship",
    year: "2023",
  },
  {
    id: 2,
    title: "Top 16 of 97",
    context: "Intensive Agile Development Bootcamp — AS Proekspert",
    year: "2022",
  },
  {
    id: 3,
    title: "Top 200 of 3,300",
    context: "GO-Reloaded Selection Sprint — Kood/Jõhvi, Estonia",
    year: "2021",
  },
  {
    id: 4,
    title: "Best All-Round Student",
    context: "Nigerian Army School of Electronics",
    year: "2009 & 2011",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/engr-idemudia/",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/engr-idemudia",
  },
  {
    id: 3,
    img: "/twit.svg",
    link: "https://x.com/maximudia",
  },
];
