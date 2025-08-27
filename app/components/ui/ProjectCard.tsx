import Image from "next/image";

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
import Card from "./Card";
import Button from "./Button";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full mb-2">
        <Image
          className="absolute"
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          priority={project.featured}
        />
      </div>

      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4">
        <Button href={project.link} variant="outline" size="sm" className="w-full">
          View
        </Button>
      </div>
    </Card>
  );
}
