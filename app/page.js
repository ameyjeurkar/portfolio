import Image from "next/image";
import {
  PortraitCarousel,
  ProjectGrid,
} from "./components/PortfolioInteractions";
import ArrowIcon from "./components/ArrowIcon";
import ThemeToggle from "./components/ThemeToggle";

const projects = [
  {
    number: "01",
    name: "Daily Progress Tracking Checklist",
    category: "Productivity · React",
    description:
      "A simple checklist application to track daily progress and stay on course toward monthly goals.",
    href: "https://progress-checklist.netlify.app/login",
    visual: "visual-checklist",
    label: "Small steps, steady progress.",
  },
  {
    number: "02",
    name: "Extrocial - Social App MERN App with AWS S3",
    category: "Social · MERN stack",
    description:
      "A social app for sharing posts and connecting with people, with image storage powered by AWS S3.",
    href: "https://extrocial.netlify.app/",
    visual: "visual-social",
    label: "Stay a little closer.",
  },
  {
    number: "03",
    name: "SIP Calculator",
    category: "Personal finance · React",
    description:
      "A simple, responsive tool for exploring how a monthly investment can grow over time.",
    href: "https://sip-calc.netlify.app/",
    visual: "visual-sip",
    label: "Growth, made clear.",
  },
  {
    number: "04",
    name: "Infinite Scroll Giphy",
    category: "Discovery · React",
    description:
      "A playful GIF discovery experience built around the Intersection Observer API and efficient rendering.",
    href: "https://infinite-scroll-giphy.netlify.app/",
    visual: "visual-giphy",
    label: "A little more of everything.",
  },
  {
    number: "05",
    name: "MERN Stack Job Portal",
    category: "Recruiting · MERN stack",
    description:
      "A recruiter-focused job portal for creating, updating, and managing job listings across a full-stack application.",
    href: "https://github.com/ahhmay/CRUD-Operations-React",
    visual: "visual-jobs",
    label: "Good work, found.",
  },
  {
    number: "06",
    name: "TV Schedule WebApp",
    category: "Entertainment · React",
    description:
      "Find what is on in the US right now, or search for a favorite show in a clean, focused interface.",
    href: "https://tv-schedule.netlify.app/",
    visual: "visual-tv",
    label: "What's on tonight?",
  },
];

const experience = [
  {
    role: "Senior Consultant",
    company: "CES Limited",
    place: "Hyderabad, India",
    dates: "Oct 2026 — Present",
    detail:
      "Building Next.js storefront experiences and AI-assisted engineering workflows. Recent work includes reusable Claude Code skills, GitHub PR review agents, Contentstack–Smartling localization, and performance improvements.",
  },
  {
    role: "Consultant",
    company: "Deloitte USI",
    place: "Hyderabad, India",
    dates: "Nov 2023 — Sep 2026",
    detail:
      "Led frontend delivery and modernization with React and Next.js, improving performance, accessibility, testing, and CI/CD across enterprise applications.",
  },
  {
    role: "Software Development Engineer",
    company: "Accenture",
    place: "Bengaluru, India",
    dates: "Dec 2020 — Oct 2023",
    detail:
      "Developed React applications and Node.js/Express APIs, advanced microfrontend adoption, and improved accessibility, bundle size, and test coverage.",
  },
];

const skillGroups = [
  {
    label: "Languages & frontend",
    skills: [
      { name: "JavaScript", icon: "javascript.png", mark: "JS" },
      { name: "TypeScript", icon: "typescript.png", mark: "TS" },
      { name: "React", icon: "react.png", mark: "R" },
      { name: "Next.js", icon: "react.png", mark: "N" },
      { name: "Angular", icon: "angular.png", mark: "A" },
      { name: "HTML5", icon: "html5.png", mark: "H5" },
      { name: "CSS3", icon: "css3.png", mark: "C3" },
      { name: "SCSS / Sass", icon: "sass.png", mark: "S" },
      { name: "Tailwind CSS", icon: "tailwind-css.png", mark: "TW" },
      { name: "Bootstrap", icon: "bootstrap.png", mark: "B" },
      { name: "Accessibility · WCAG", mark: "A11Y" },
      { name: "Micro Frontends", mark: "MF" },
    ],
  },
  {
    label: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: "nodejs.png", mark: "N" },
      { name: "Express.js", icon: "express.png", mark: "Ex" },
      { name: "GraphQL", mark: "GQL" },
      { name: "Apollo Client", mark: "Ap" },
      { name: "Federated Graphs", mark: "FG" },
      { name: "MongoDB", icon: "mongodb.png", mark: "M" },
      { name: "Redux Toolkit", icon: "redux.png", mark: "R" },
      { name: "RxJS", mark: "Rx" },
    ],
  },
  {
    label: "Cloud & delivery",
    skills: [
      { name: "AWS Lambda", icon: "aws.png", mark: "AWS" },
      { name: "AWS S3", icon: "aws.png", mark: "S3" },
      { name: "Azure Cloud", icon: "azure_devops.png", mark: "Az" },
      { name: "Azure Pipelines", icon: "azure_devops.png", mark: "Az" },
      { name: "CI/CD · YAML", mark: "CI" },
      { name: "Docker", mark: "D" },
    ],
  },
  {
    label: "Testing & security",
    skills: [
      { name: "Jest", mark: "J" },
      { name: "React Testing Library", mark: "RTL" },
      { name: "Karma / Jasmine", mark: "KJ" },
      { name: "Snyk", mark: "S" },
      { name: "Fortify Scan", mark: "F" },
    ],
  },
  {
    label: "AI-assisted engineering",
    skills: [
      { name: "LLM Agents", mark: "AI" },
      { name: "MCP", mark: "MCP" },
      { name: "Tool Calling", mark: "TC" },
      { name: "Prompt Engineering", mark: "PE" },
      { name: "Workflow Automation", mark: "WA" },
      { name: "GitHub Copilot", icon: "github.png", mark: "GH" },
      { name: "Claude Code", mark: "CC" },
    ],
  },
  {
    label: "Tools & platforms",
    skills: [
      { name: "Git", icon: "github.png", mark: "G" },
      { name: "GitHub", icon: "github.png", mark: "GH" },
      { name: "VS Code", mark: "VS" },
      { name: "Webpack", icon: "webpack.png", mark: "W" },
      { name: "Babel", mark: "B" },
      { name: "Vite", icon: "Vitejs.png", mark: "V" },
      { name: "Postman", icon: "postman.png", mark: "P" },
      { name: "npm", icon: "npm.png", mark: "npm" },
      { name: "Jira", mark: "J" },
      { name: "Contentstack", mark: "CS" },
      { name: "Smartling", mark: "S" },
      { name: "Shopify", mark: "Sh" },
      { name: "Algolia", mark: "Al" },
    ],
  },
];

const socialLinks = [
  { name: "LinkedIn", mark: "in", href: "https://www.linkedin.com/in/ameyjeurkar" },
  { name: "GitHub", mark: "GH", href: "https://github.com/ameyjeurkar" },
  { name: "Facebook", mark: "f", href: "https://m.facebook.com/100007024458087/" },
  { name: "Instagram", mark: "ig", href: "https://www.instagram.com/ahh.may/" },
  { name: "LeetCode", mark: "LC", href: "https://leetcode.com/u/ameyjeurkar/" },
];

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-intro">{children}</div> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <header className="site-header page-shell">
          <a className="wordmark" href="#home" aria-label="Amey Jeurkar home">
            <span className="wordmark-mark">AJ</span>
            <span className="wordmark-name">Amey Jeurkar</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
          </nav>
          <a className="header-contact" href="#contact">
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
          <ThemeToggle />
        </header>

        <div className="hero-content page-shell">
          <div className="hero-copy">
            <p className="availability">
              <span className="availability-dot" />
              Senior frontend engineer · CES Limited
            </p>
            <h1>
              I make the
              <br />
              <span>digital feel</span>
              <br />
              a little more human.
            </h1>
            <p className="hero-description">
              I&apos;m Amey, a senior frontend engineer building thoughtful,
              high-performance web experiences and the systems behind them.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#work">
                Explore my work <ArrowIcon />
              </a>
              <a className="text-link hero-secondary" href="#about">
                A bit about me <ArrowIcon />
              </a>
            </div>
            <nav className="hero-social-links" aria-label="Social profiles">
              {socialLinks.map((link) => (
                <a
                  className="social-profile"
                  href={link.href}
                  key={link.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-mark" aria-hidden="true">
                    {link.mark}
                  </span>
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="hero-footnote">
              <span>6+ years building for the web</span>
              <span className="footnote-line" />
              <span>Scroll to explore</span>
            </div>
          </div>
          <PortraitCarousel />
        </div>
        <a className="hero-scroll" href="#about" aria-label="Scroll to about">
          <span />
        </a>
      </section>

      <section className="about section-pad" id="about">
        <div className="page-shell about-layout">
          <div className="about-side">
            <p className="eyebrow">A little introduction</p>
            <span className="about-index">01 / ABOUT</span>
          </div>
          <div className="about-main">
            <h2>
              Senior frontend engineer with 6+ years building scalable,
              accessible web products.
            </h2>
            <div className="about-columns">
              <p>
                I lead frontend delivery from architecture through release,
                working across React, Next.js, Angular, TypeScript, and Node.js.
                I enjoy turning complex product needs into fast, reliable
                experiences that work for people.
              </p>
              <p>
                Recently, I&apos;ve been exploring AI-assisted engineering,
                reusable design systems, application security, and performance
                improvements for global storefronts.
              </p>
            </div>
            <a
              className="text-link about-resume"
              href="/AmeyJeurkar_FrontendEngineer.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View updated resume <ArrowIcon diagonal />
            </a>
          </div>
        </div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="page-shell">
          <SectionHeading eyebrow="What I work with" title="Tools of the trade">
            A well-stocked toolkit, and an open mind about what comes next.
          </SectionHeading>
          <div className="skills-list">
            {skillGroups.map((group, index) => (
              <div className="skill-row" key={group.label}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.label}</h3>
                <ul className="skill-token-list">
                  {group.skills.map((skill) => (
                    <li className="skill-token" key={skill.name}>
                      {skill.icon ? (
                        <Image
                          className="skill-token-icon"
                          src={`/skill-icons/${skill.icon}`}
                          alt=""
                          width={20}
                          height={20}
                        />
                      ) : (
                        <span className="skill-token-mark" aria-hidden="true">
                          {skill.mark}
                        </span>
                      )}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section section-pad" id="experience">
        <div className="page-shell">
          <SectionHeading
            eyebrow="The journey so far"
            title="Experience that adds up."
          >
            Different teams, new challenges, one constant: make it better.
          </SectionHeading>
          <div className="experience-list">
            {experience.map((job, index) => (
              <article
                className="experience-item"
                key={`${job.company}-${job.dates}`}
              >
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-role">
                  <h3>{job.role}</h3>
                  <p>
                    {job.company} <span>·</span> {job.place}
                  </p>
                  <p className="experience-detail">{job.detail}</p>
                </div>
                <p className="experience-dates">{job.dates}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="page-shell">
          <div className="work-heading">
            <SectionHeading
              eyebrow="Selected projects"
              title="A few things I’ve made."
            >
              Small experiments and useful products, built with care.
            </SectionHeading>
            <a
              className="text-link github-link"
              href="https://github.com/ameyjeurkar"
              target="_blank"
              rel="noreferrer"
            >
              More on GitHub <ArrowIcon diagonal />
            </a>
          </div>
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="page-shell contact-inner">
          <p className="eyebrow">Have something in mind?</p>
          <h2>
            Let&apos;s make
            <br />
            something <em>matter.</em>
          </h2>
          <a
            className="button button-light contact-button"
            href="mailto:jeurkaramey@gmail.com"
          >
            Start a conversation <ArrowIcon diagonal />
          </a>
          <div className="contact-bottom">
            <a href="mailto:jeurkaramey@gmail.com">jeurkaramey@gmail.com</a>
            <nav className="social-links" aria-label="Social profiles">
              {socialLinks.map((link) => (
                <a href={link.href} key={link.name} target="_blank" rel="noreferrer">
                  {link.name} <ArrowIcon diagonal />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell site-footer-inner">
          <a className="wordmark footer-wordmark" href="#home">
            <span className="wordmark-mark">AJ</span>
            <span className="wordmark-name">Amey Jeurkar</span>
          </a>
          <p>Designed with intention. Built with care.</p>
          <a className="back-to-top" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
