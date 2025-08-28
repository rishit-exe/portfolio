import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Paperclip } from "lucide-react";

// Use local assets for provider logos (relative to public folder for Vite/React)
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
  // Certifications & Training (ordered as requested)
  const experiences = [
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      link: "https://www.coursera.org/verify/EA7ZNWKRKQE6",
      company: "Coursera",
      location: "Online Course",
      period: "March 2025",
      description: "Completed comprehensive programming foundations course covering JavaScript, HTML, and CSS fundamentals with hands-on projects and real-world applications.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Web Development"],
      achievements: [
        "Built multiple web development projects",
        "Mastered front-end development fundamentals",
        "Gained proficiency in responsive web design"
      ]
    },
    {
      title: "Fundamentals of OOPS",
      link: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS34S64320498804310976",
      company: "NPTEL",
      location: "Online Certification",
      period: "April 2025",
      description: "Completed NPTEL's Fundamentals of Object Oriented Programming course, covering core OOPS concepts and their practical applications.",
      technologies: ["OOPS", "Java", "Programming Fundamentals"],
      achievements: [
        "Mastered object-oriented programming concepts",
        "Applied OOPS principles in coding assignments",
        "Earned NPTEL certification"
      ]
    },
    {
      title: "Software Engineering Job Simulation",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_6YQp48h8Ray6ddgu4_1748442579399_completion_certificate.pdf",
      company: "Accenture Nordics",
      location: "Virtual Program",
      period: "May 2025",
      description: "Completed a comprehensive software engineering job simulation focusing on agile methodologies, debugging techniques, and data analysis practices used in real-world enterprise environments.",
      technologies: ["Agile Methodologies", "Debugging Code", "Data Analysis"],
      achievements: [
        "Learned industry-standard agile development practices",
        "Gained experience in systematic debugging approaches",
        "Developed skills in data analysis and interpretation"
      ]
    },
    {
      title: "Oracle Cloud Infrastructure Foundations (OCI)",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=90E444943AD952D5EB39755A6CE0DE3B1519004E33CB1C627EAAC473BC3C95E5",
      company: "Oracle",
      location: "Online Certification",
      period: "March 2025",
      description: "Achieved Oracle Cloud Infrastructure 2025 Certified Foundations Associate certification, demonstrating understanding of cloud computing fundamentals and Oracle's cloud services.",
      technologies: ["Oracle Cloud", "Cloud Infrastructure", "Cloud Computing"],
      achievements: [
        "Mastered Oracle Cloud Infrastructure fundamentals",
        "Understanding of cloud service models and deployment",
        "Knowledge of security and compliance in cloud environments"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology - Computer Science",
      institution: "SRM Institute of Science and Technology (SRMIST)",
      location: "Tamil Nadu, India",
      period: "June 2024 - May 2028",
      description: "Currently pursuing BTech in Computer Science with focus on programming fundamentals, data structures, and software engineering principles. Active participant in coding competitions and technical workshops.",
      achievements: [
        "CGPA: 9.34 (1st Year)",
        "Proficient in MATLAB programming",
        "Strong foundation in Computer Science fundamentals"
      ]
    },
    {
      degree: "High School Diploma - Science",
      institution: "Sunbeam English School Bhagwanpur",
      location: "Bhagwanpur, India", 
      period: "April 2007 - December 2023",
      description: "Completed high school education with specialization in Science stream, building strong analytical and problem-solving skills.",
      achievements: [
        "Science stream specialization",
        "Strong foundation in Mathematics and Physics",
        "Developed analytical thinking skills"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience and educational background
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center">Certifications & Training</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 glass hover:shadow-elegant transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-primary flex items-center gap-2">
                        {/* Provider Logo */}
                        <span>
                          <img
                            src={providerLogos[exp.company] || ""}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 object-contain mr-2"
                            style={{ background: "white", borderRadius: "4px", display: "inline-block" }}
                          />
                        </span>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-blue-600 flex items-center gap-1"
                        >
                          {exp.title}
                          <Paperclip className="w-4 h-4 text-gray-400" aria-label="Hyperlink attached" />
                        </a>
                      </h4>
                      <div className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-foreground font-medium mb-2">
                      {exp.company}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-8 glass hover:shadow-elegant transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-primary flex items-center gap-2">
                        {/* Education Logo */}
                        <span>
                          <img
                            src={educationLogos[edu.institution] || ""}
                            alt={`${edu.institution} logo`}
                            className="w-12 h-12 object-contain mr-2"
                            style={{ background: "white", borderRadius: "4px", display: "inline-block" }}
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
                      <h5 className="font-semibold mb-3">Highlights:</h5>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
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