import profileImg from "../assets/kishorkumar.jpeg";
import cert1 from "../assets/cert/10.jpeg";
import cert2 from "../assets/cert/6.jpeg";
import cert3 from "../assets/cert/8.jpeg";
import cert4 from "../assets/cert/5.jpeg";
import cert5 from "../assets/cert/1.jpeg";
import cert7 from "../assets/cert/3.jpeg";
import cert8 from "../assets/cert/4.jpeg";
import cert9 from "../assets/cert/7.jpeg";
import cert11 from "../assets/cert/11.jpeg";
import cert12 from "../assets/cert/12.jpg";
import resumePdf from "../assets/Kishor_Kumar_Resume.pdf";

export const PROFILE_IMAGE = profileImg;
export const RESUME_PDF = resumePdf;

export const NAV = ["Home", "About", "Projects", "Resume", "Certificates", "Contact"];

export const SKILLS = [
  { name: "Java", level: 80 },
  { name: "React.js", level: 88 },
  { name: "HTML5 / CSS3 / Bootstrap / Tailwind", level: 90 },
  { name: "Spring Boot & Hibernate", level: 72 },
  { name: "PostgreSQL / MySQL / MongoDB", level: 78 },
  { name: "Docker & GitHub Actions", level: 70 },
];

export const EXPERTISE = [
  { emoji: "🌐", title: "Frontend", tech: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { emoji: "⚙️", title: "Backend", tech: ["Spring Boot", "Hibernate", "Python Flask", "Node.js", "Express.js"] },
  { emoji: "🚀", title: "DevOps & Cloud", tech: ["Docker", "GitHub Actions", "Render", "Vercel", "Linux"] },
  { emoji: "🗄️", title: "Databases", tech: ["PostgreSQL", "MySQL", "MongoDB"] },
];

export const PROJECTS = [
  {
    icon: "💼",
    title: "Task Manager Web Application",
    desc: "Built RBAC-based task manager using Spring Boot and PostgreSQL. Manager assigns tasks; employees update progress via Kanban board. Implemented REST APIs, authentication, and drag-and-drop UI",
    tech: ["React.js", "SpringBoot", "PostgreSQL"],
    liveUrl: "https://task-manager-17.vercel.app/",
    githubUrl: "",
  },
  {
    icon: "🧑🏻‍💻",
    title: "TalentSphere",
    desc: "A full-stack job recruitment platform connecting Job Seekers, Recruiters, and Admins. Features role-based authentication, job posting & application management, resume upload, and interactive dashboards for platform monitoring.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL"],
    liveUrl: "https://talent-sphere-qqrm.vercel.app/",
    githubUrl: "",
  },
  {
    icon: "📝",
    title: "Feedback System",
    desc: "A web-based student feedback system to collect and analyze faculty performance. Features interactive dashboards with real-time data visualization using Chart.js.",
    tech: ["React.js", "Node.js", "MySQL", "Express.js"],
    liveUrl: "https://feedback.ssmiet.ac.in/",
    githubUrl: "",
  },
  {
    icon: "🏫",
    title: "College Website",
    desc: "Designed and deployed the official website for SSM Institute of Engineering and Technology. Fully responsive and production-ready.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://ssmiet.ac.in/",
    githubUrl: "",
  },
  {
    icon: "💰",
    title: "Wallet Wise",
    desc: "Full-stack web app to manage lent and returned money efficiently. Features user authentication, responsive UI, and clear financial insights for better money management.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "https://wallet-wise-one.vercel.app/",
    githubUrl: "https://github.com/Kishor1703/WalletWise",
  },
  {
    icon: "🤖",
    title: "Face Recognition System",
    desc: "Developed a real-time gesture recognition system using OpenCV.",
    tech: ["Python", "OpenCV"],
    liveUrl: "",
    githubUrl: "https://github.com/Kishor1703/Face-Recognition",
  },
  {
    icon: "📱",
    title: "Calculator App",
    desc: "Developed a full-featured calculator app using Flutter and Dart.",
    tech: ["Flutter", "Dart"],
    liveUrl: "",
    githubUrl: "https://github.com/Kishor1703/Calculator",
  },
  {
    icon: "📱",
    title: "To-Do List App",
    desc: "Developed a full-featured to-do list app using Flutter and Dart.",
    tech: ["Flutter", "Dart"],
    liveUrl: "",
    githubUrl: "https://github.com/Kishor1703/todo_list",
  },
];

export const EXPERIENCE = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "Apr 2025 - Present",
    points: [
      "Currently building full-stack web applications for clients using modern frontend and backend technologies.",
      "Handling end-to-end development including UI implementation, API integration, database design, and deployment.",
      "Collaborating directly with clients to translate requirements into scalable and responsive digital products.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "MailerJobs, Bangalore",
    period: "Jan 2025 - Mar 2025",
    points: [
      "Contributed to the development and enhancement of the MailerJobs recruitment portal.",
      "Developed frontend and backend features using React.js, MySQL, and Python Flask.",
      "Handled deployment and hosting using Hostinger and managed integrations with WordPress.",
    ],
  },
  {
    role: "Intern",
    company: "Maxelerator Foundation, Madurai",
    period: "July 2023",
    points: [
      "Gained hands-on experience in AI systems using computer vision.",
      "Designed applications for face recognition and image processing.",
      "Built a virtual mouse with hand gesture recognition.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "BE in Computer Science",
    school: "SSM Institute of Engineering and Technology",
    period: "2021 - May 2025",
    detail: "GPA: 8.01 / 10",
  },
  {
    degree: "HSC & SSLC",
    school: "MSP Solainadar Memorial Hr Sec School",
    period: "2017 - May 2021",
    detail: "HSC: 86.8% | SSLC: 85.8%",
  },
];

export const CERTS = [
  { title: "Full Stack Developer Intern", org: "MailerJobs, Bangalore", type: "Internship", emoji: "💼", image: cert1 },
  { title: "AI & Computer Vision Intern", org: "Maxelerator Foundation", type: "Internship", emoji: "🤖", image: cert2 },
  { title: "College Website", org: "SSM IET", type: "Project", emoji: "🎓", image: cert3 },
  { title: "Feedback System", org: "SSM IET", type: "Project", emoji: "📝", image: cert4 },
  { title: "Designing Course", org: "Qaroo Learnings India PVT", type: "Course", emoji: "📝", image: cert7 },
  { title: "Python", org: "CADD TECHNOLOGIES", type: "Course", emoji: "📝", image: cert8 },
  { title: "Web Technologies", org: "SILICON software services", type: "Course", emoji: "📝", image: cert9 },
  { title: "Internal SIH", org: "SSM IET", type: "Project", emoji: "📝", image: cert11 },
  { title: "Award", org: "SSM IET", type: "Project", emoji: "📝", image: cert5 },
  { title: "College Website", org: "SSM IET", type: "Project", emoji: "🏆", image: cert12 },
];

export const STATS = [
  { icon: "⏱", val: 300, suffix: "+", label: "Hours Worked" },
  { icon: "💻", val: 3, suffix: "+", label: "Projects Shipped" },
  { icon: "🏢", val: 2, suffix: "", label: "Internships" },
  { icon: "🎓", val: 8, suffix: ".01", label: "GPA" },
];

export const CERT_TABS = ["All", "Internship", "Course", "Project"];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kishor-kumar-s-6806a125b" },
  { label: "GitHub", href: "https://github.com/Kishor1703" },
  { label: "Email", href: "mailto:pskishor196@gmail.com" },
];

export const ABOUT_TAGS = ["Full Stack", "DevOps", "Cloud"];

export const TECHNICAL_SKILLS = [
  "Java",
  "React.js",
  "Spring Boot",
  "Python Flask",
  "Node.js",
  "Docker",
  "GitHub Actions",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Linux",
  "Git",
];

export const CONTACT_INFO = [
  { icon: "📧", label: "Email", val: "pskishor196@gmail.com", color: "#00e5ff" },
  { icon: "📱", label: "Phone", val: "+91 9659844778", color: "#ff6b35" },
  { icon: "📍", label: "Location", val: "Dindigul, Tamil Nadu", color: "#a855f7" },
];
