import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  centered?: boolean;
}

export default function Heading({
  children,
  level = 2,
  size = "lg",
  className = "",
  centered = false,
}: HeadingProps) {
  const sizes = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-6xl",
  };

  const baseClasses = "font-bold text-gray-900";
  const sizeClasses = sizes[size];
  const alignmentClasses = centered ? "text-center" : "";
  const classes = `${baseClasses} ${sizeClasses} ${alignmentClasses} ${className}`;

  if (level === 1) return <h1 className={classes}>{children}</h1>;
  if (level === 3) return <h3 className={classes}>{children}</h3>;
  return <h2 className={classes}>{children}</h2>;
}
