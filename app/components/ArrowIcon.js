export default function ArrowIcon({ diagonal = false, direction = "right" }) {
  const path = diagonal
    ? "M4 12 12 4M5 4h7v7"
    : direction === "left"
      ? "M13.5 8h-10m4 4-4-4 4-4"
      : "M2.5 8h10m-4-4 4 4-4 4";

  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d={path} />
    </svg>
  );
}
