import Hero from "@/ui/Hero";
import Section from "@/ui/Section";
import ProjectCard from "@/ui/ProjectCard";
import Heading from "@/ui/Heading";
import Text from "@/ui/Text";
import { getPage } from "ditwaru-aws-helpers";

// Interface for the dynamic portfolio data structure
interface PortfolioSection {
  type: string;
  title?: string;
  description?: string;
  variant?: "blue" | "green" | "purple";
  projects?: Project[];
  stats?: Stat[];
  buttonText?: string;
  buttonLink?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  link: string;
  featured?: boolean;
}

interface Stat {
  number: string;
  label: string;
  color: string;
}

interface PortfolioPageData {
  page: string;
  title: string;
  sections: PortfolioSection[];
  updatedAt: string;
}

async function getPortfolioPageData(): Promise<PortfolioPageData> {
  const portfolioData = await getPage("daniel-itwaru", "portfolio");

  if (!portfolioData) {
    throw new Error("Failed to fetch portfolio data from AWS");
  }

  return portfolioData as PortfolioPageData;
}

// Render section based on type
function renderSection(section: PortfolioSection, index: number) {
  switch (section.type) {
    case "hero":
      return (
        <Hero
          key={index}
          title={section.title || ""}
          description={section.description || ""}
          variant={section.variant || "purple"}
        />
      );

    case "projects":
      if (!section.projects) return null;
      return (
        <Section key={index}>
          {section.title && (
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">
                {section.title}
              </Heading>
              {section.description && (
                <Text className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {section.description}
                </Text>
              )}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>
      );

    default:
      return null;
  }
}

export default async function Portfolio() {
  const pageData = await getPortfolioPageData();

  return <div>{pageData.sections.map((section, index) => renderSection(section, index))}</div>;
}
