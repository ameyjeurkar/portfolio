"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ArrowIcon from "./ArrowIcon";
import portraitOne from "../../src/assets/images/portrait-carousel/portrait-1.jpg";
import portraitTwo from "../../src/assets/images/portrait-carousel/portrait-2.jpg";
import portraitThree from "../../src/assets/images/portrait-carousel/portrait-3.jpg";
import portraitFour from "../../src/assets/images/portrait-carousel/portrait-4.jpg";

const portraitImages = [
  {
    src: portraitOne,
    alt: "Amey sitting among flowers in a mirrored greenhouse",
  },
  {
    src: portraitTwo,
    alt: "Amey standing in front of a historic Japanese temple",
  },
  {
    src: portraitThree,
    alt: "Amey in a green shirt beside a quiet street in Japan",
  },
  {
    src: portraitFour,
    alt: "Amey enjoying the golden evening light on a Japanese street",
  },
];

export function PortraitCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);

    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % portraitImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const showImage = (index) => {
    setActiveIndex((index + portraitImages.length) % portraitImages.length);
  };

  return (
    <div
      className="hero-portrait"
      role="region"
      aria-label="Portrait carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="portrait-frame">
        {portraitImages.map((image, index) => (
          <div
            className={`portrait-slide${index === activeIndex ? " is-active" : ""}`}
            key={image.src.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${portraitImages.length}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading={index === 0 ? "eager" : "lazy"}
              sizes="(max-width: 760px) 86vw, (max-width: 1100px) 42vw, 430px"
              className="portrait-image"
            />
          </div>
        ))}
      </div>
      <div className="portrait-caption">
        <span>Curious by nature. Engineer by choice.</span>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(portraitImages.length).padStart(2, "0")}
        </span>
      </div>
      <div className="portrait-controls" aria-label="Portrait navigation">
        <button
          className="portrait-control"
          type="button"
          aria-label="Previous portrait"
          onClick={() => showImage(activeIndex - 1)}
        >
          <ArrowIcon direction="left" />
        </button>
        <div className="portrait-dots">
          {portraitImages.map((image, index) => (
            <button
              className={`portrait-dot${index === activeIndex ? " is-active" : ""}`}
              key={image.src.src}
              type="button"
              aria-label={`Show portrait ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => showImage(index)}
            />
          ))}
        </div>
        <button
          className="portrait-control"
          type="button"
          aria-label="Next portrait"
          onClick={() => showImage(activeIndex + 1)}
        >
          <ArrowIcon />
        </button>
      </div>
      <span className="portrait-stamp" aria-hidden="true">
        AJ
      </span>
    </div>
  );
}

export function ProjectGrid({ projects }) {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? projects : projects.slice(0, 4);

  return (
    <>
      <div className="project-grid" id="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.number}>
            <a
              className={`project-visual ${project.visual}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name}`}
            >
              <span className="project-visual-label">{project.label}</span>
              <span className="project-visual-window" aria-hidden="true">
                <span className="window-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="window-content">
                  <span className="window-line window-line-short" />
                  <span className="window-line" />
                  <span className="window-line window-line-medium" />
                  <span className="window-chart">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                </span>
              </span>
              <span className="project-open">
                <ArrowIcon diagonal />
              </span>
            </a>
            <div className="project-meta">
              <span>
                {project.number} / {String(projects.length).padStart(2, "0")}
              </span>
              <span>{project.category}</span>
            </div>
            <h3>
              <a href={project.href} target="_blank" rel="noreferrer">
                {project.name} <ArrowIcon diagonal />
              </a>
            </h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
      {projects.length > 4 ? (
        <div className="projects-toggle-wrap">
          <button
            className="projects-toggle"
            type="button"
            aria-controls="project-grid"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "View fewer projects" : "View more projects"}
            <span className={expanded ? "toggle-arrow is-expanded" : "toggle-arrow"}>
              ↓
            </span>
          </button>
        </div>
      ) : null}
    </>
  );
}
