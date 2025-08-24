import { Project } from '../../lib/data';
import Card from './Card';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {project.description}
        </p>
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
      
      <Button href={project.link} variant="outline" size="sm" className="w-full">
        View Project
      </Button>
    </Card>
  );
}
