import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Paperclip, ExternalLink } from "lucide-react";
import certificationsRaw from "@/data/certifications.json";
import educationsRaw from "@/data/education.json";
import { parseCertifications, parseEducations, Certification, Education } from "@/data/experienceSchema";

// Use local assets for provider logos
const providerLogos: Record<string, string> = {
  Coursera: "coursera_logo.jpeg",
  NPTEL: "nptel.jpeg",
  "Accenture Nordics": "forage.jpeg",
  Oracle: "oracle_logo.jpeg",
};

const educationLogos: Record<string, string> = {
  "SRM Institute of Science and Technology (SRMIST)": "srm_logo.webp",
  "Sunbeam English School Bhagwanpur": "sunbeam_logo.jpeg",
};

export const Experience = () => {
  // Strict validation: parse functions will throw on invalid JSON so CI/tests/build fail fast
  const experiences: Certification[] = parseCertifications(certificationsRaw);
  const education: Education[] = parseEducations(educationsRaw);

  return (
    <section id="experience" className="py-20 px-6 dark:bg-background relative">
      {/* Elegant Section Divider */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/60"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/60"></div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience and educational background
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center dark:text-white">Certifications & Training</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 glass hover:shadow-elegant dark:bg-card/50 dark:border-border/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-primary dark:text-primary flex items-center gap-2">
                        {/* Provider Logo */}
                        <span className={`mr-2 ${exp.logoSize ?? 'w-12 h-12'} rounded-md overflow-hidden flex items-center justify-center bg-transparent`}>
                          <img
                            src={exp.logo ?? providerLogos[exp.company] ?? ""}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain object-center"
                          />
                        </span>
                        {exp.title}
                      </h4>
                      
                      <div className="flex items-center text-sm text-muted-foreground dark:text-muted-foreground mt-2 sm:mt-0">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-foreground dark:text-foreground font-medium mb-2">
                      {exp.company}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground dark:text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                    
                    <p className="text-muted-foreground dark:text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold dark:text-white mb-3">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground dark:text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} dangerouslySetInnerHTML={{
                            __html: achievement
                              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              .replace(/<strong>/g, '<strong class="font-semibold text-foreground dark:text-white">')
                          }} />
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="border-primary/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* View Certificate Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 ml-auto"
                        onClick={() => window.open(exp.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center dark:text-white">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-8 glass hover:shadow-elegant dark:bg-card/50 dark:border-border/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-primary dark:text-primary flex items-center gap-2">
                        {/* Education Logo */}
                        <span className={`mr-2 ${edu.logoSize ?? 'w-12 h-12'} rounded-md overflow-hidden flex items-center justify-center bg-transparent`}>
                          <img
                            src={edu.logo ?? educationLogos[edu.institution] ?? ""}
                            alt={`${edu.institution} logo`}
                            className="w-full h-full object-contain object-center"
                          />
                        </span>
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-foreground font-medium mb-2">
                      {edu.institution}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h5 className="font-semibold dark:text-white mb-3">Highlights:</h5>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground dark:text-muted-foreground">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} dangerouslySetInnerHTML={{
                            __html: achievement
                              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              .replace(/<strong>/g, '<strong class="font-semibold text-foreground dark:text-white">')
                          }} />
                        ))}
                      </ul>
                    </div>
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