import type { IconType } from "react-icons";

export function Icon({
  icon: IconComponent,
  className = "",
}: {
  icon: IconType;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <IconComponent />
    </span>
  );
}
