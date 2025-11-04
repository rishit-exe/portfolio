import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import projectsRaw from "@/data/projects.json";
import { parseProjects, Project } from "@/data/projectsSchema";

const bShow = false;

export const Projects = () => {
  // Strict validation: throw on invalid JSON so build/tests fail fast
  const projects: Project[] = parseProjects(projectsRaw);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in various technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden glass hover:shadow-elegant transition-all duration-500 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.logo ?? project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="default" size="sm" asChild>
                      <a href={project.liveUrl} className="flex items-center" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} className="flex items-center" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {bShow && (
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-center">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden glass hover:shadow-card transition-all duration-300 group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3 text-primary">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="default" size="sm" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          <Github className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
