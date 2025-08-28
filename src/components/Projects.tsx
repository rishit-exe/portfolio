import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced features like real-time inventory management, secure payment processing, and admin analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Handles 10k+ concurrent users",
        "Integrated payment gateway",
        "Real-time inventory tracking",
        "Mobile-responsive design"
      ]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Real-time collaboration",
        "Drag & drop interface",
        "Team performance analytics",
        "Mobile app available"
      ]
    },
    {
      title: "Weather Analytics Dashboard",
      description: "A comprehensive weather analytics platform that visualizes climate data with interactive charts and provides detailed weather forecasting.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "D3.js", "Python", "Flask", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      highlights: [
        "Interactive data visualization",
        "7-day weather forecasting",
        "Historical data analysis",
        "API integration"
      ]
    },
    {
      title: "Social Media Analytics",
      description: "An analytics tool for social media managers to track engagement, analyze trends, and generate comprehensive reports across multiple platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["Angular", "Node.js", "Express", "Chart.js", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      highlights: [
        "Multi-platform integration",
        "Automated report generation",
        "Trend analysis algorithms",
        "Custom dashboard creation"
      ]
    },
    {
      title: "Learning Management System",
      description: "A modern LMS platform for educational institutions with course management, student progress tracking, and interactive learning modules.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "GraphQL", "Node.js", "MongoDB", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      highlights: [
        "Video conferencing integration",
        "Progress tracking system",
        "Interactive quizzes",
        "Certificate generation"
      ]
    },
    {
      title: "IoT Device Monitor",
      description: "A real-time monitoring system for IoT devices with data visualization, alert management, and predictive maintenance capabilities.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Python", "MQTT", "InfluxDB", "Grafana"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      highlights: [
        "Real-time data streaming",
        "Predictive maintenance alerts",
        "Custom dashboard widgets",
        "Historical data analysis"
      ]
    }
  ];

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
                    src={project.image} 
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
                      <a href={project.liveUrl} className="flex items-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} className="flex items-center">
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
                      <a href={project.liveUrl}>
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl}>
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
