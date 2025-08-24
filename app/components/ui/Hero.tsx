import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  description: string | string[];
  children?: ReactNode;
  variant?: "blue" | "green" | "purple";
  fullHeight?: boolean;
}

export default function Hero({
  title,
  description,
  children,
  variant = "blue",
  fullHeight = false,
}: HeroProps) {
  const variants = {
    blue: "bg-gradient-to-br from-blue-50 to-indigo-100",
    green: "bg-gradient-to-br from-green-50 to-emerald-100",
    purple: "bg-gradient-to-br from-purple-50 to-pink-100",
  };

  const heightClass = fullHeight ? "flex-1" : "py-20";

  return (
    <section
      className={`${variants[variant]} ${heightClass} flex items-center justify-center w-full relative`}
    >
      <Image src="/background.jpg" alt="Hero" layout="fill" objectFit="cover" />
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 text-center backdrop-blur-xs bg-black/20 px-6 py-3 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h1>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto">{description}</p>
        {children && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">{children}</div>
        )}
      </div>
    </section>
  );
}
