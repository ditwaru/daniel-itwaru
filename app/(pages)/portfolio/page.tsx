import Hero from "@/ui/Hero";
import Section from "@/ui/Section";
import ProjectCard from "@/ui/ProjectCard";

// Simulate CMS data fetching at build time
async function getPortfolioPageData() {
  // In real implementation, this would be:
  // const response = await fetch('https://your-cms.com/api/portfolio');
  // return response.json();

  return {
    hero: {
      title: "Portfolio",
      description: "Bugs are just features that haven't been documented yet ✨",
    },
    projects: [
      {
        id: 1,
        title: "E-commerce Platform",
        description:
          "A modern, scalable e-commerce solution built with Next.js and Stripe integration.",
        category: "Web Application",
        technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
        image: "/api/placeholder/400/300",
        link: "#",
      },
      {
        id: 2,
        title: "Mobile Banking App",
        description:
          "Secure and intuitive mobile banking application with real-time transaction updates.",
        category: "Mobile App",
        technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
        image: "/api/placeholder/400/300",
        link: "#",
      },
      {
        id: 3,
        title: "Corporate Website",
        description: "Professional corporate website with content management system and analytics.",
        category: "Website",
        technologies: ["Next.js", "Contentful", "Framer Motion", "Vercel"],
        image: "/api/placeholder/400/300",
        link: "#",
      },
    ],
    stats: [
      { number: "50+", label: "Projects Completed", color: "text-blue-600" },
      { number: "25+", label: "Happy Clients", color: "text-green-600" },
      { number: "5+", label: "Years Experience", color: "text-purple-600" },
      { number: "99%", label: "Client Satisfaction", color: "text-orange-600" },
    ],
    cta: {
      title: "Ready to Start Your Project?",
      description:
        "Let's discuss how we can bring your vision to life with our expertise and creativity.",
    },
  };
}

export default async function Portfolio() {
  const pageData = await getPortfolioPageData();

  return (
    <div>
      <Hero title={pageData.hero.title} description={pageData.hero.description} variant="purple" />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pageData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
