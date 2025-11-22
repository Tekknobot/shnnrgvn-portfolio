export function IconLocation({ className = "", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 20c-2.5-3.4-4.5-6.5-4.5-9A4.5 4.5 0 0112 6.5 4.5 4.5 0 0116.5 11c0 2.5-2 5.6-4.5 9z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="11"
        r="1.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
