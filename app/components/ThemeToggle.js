"use client";

export default function ThemeToggle() {
  function toggleTheme() {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <svg
        className="theme-icon-sun"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
      <svg
        className="theme-icon-moon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z" />
      </svg>
      <span className="theme-toggle-light-label">Light</span>
      <span className="theme-toggle-dark-label">Dark</span>
    </button>
  );
}
