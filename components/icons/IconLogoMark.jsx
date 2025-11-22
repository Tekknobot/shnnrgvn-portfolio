export function IconLogoMark({ className = "", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label="SR logo"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="9.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 14.5c.8 1 1.9 1.5 3.2 1.5 2.1 0 3.8-1.4 3.8-3.4 0-1.8-1.3-3.1-3.3-3.1-1 0-1.8.3-2.5.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.5 6.5L8 9h3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
