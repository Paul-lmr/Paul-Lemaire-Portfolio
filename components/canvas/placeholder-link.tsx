/**
 * Renders a real link when `href` is provided, otherwise a visually similar
 * but clearly inert placeholder (per the no-invented-URLs content rule).
 */
export function PlaceholderLink({
  href,
  label,
  unavailableLabel,
  className = "",
}: {
  href: string | null;
  label: string;
  unavailableLabel?: string;
  className?: string;
}) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }
  return (
    <span
      className={`cursor-not-allowed opacity-50 ${className}`}
      aria-disabled="true"
      title={unavailableLabel ?? `${label} — link coming soon`}
    >
      {label}
    </span>
  );
}
