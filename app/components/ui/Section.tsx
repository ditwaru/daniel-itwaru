import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray";
  padding?: "sm" | "md" | "lg";
}

export default function Section({
  children,
  className = "",
  background = "white",
  padding = "lg",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
  };

  const classes = `${backgrounds[background]} ${className}`;

  return (
    <section className={classes}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">{children}</div>
    </section>
  );
}
