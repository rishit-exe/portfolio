import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Experienced in both frontend and backend technologies"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about finding innovative solutions to complex challenges"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Strong communication skills and experience in agile environments"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Focused",
      description: "Committed to writing clean, efficient, and scalable code"
    }
  ];

  const skills = [
    "C++", "Java", "JavaScript", "HTML5", "CSS3",
    "Object Oriented Programming", "Data Structures", "MATLAB", 
    "Oracle Cloud", "Agile Methodologies", "Debugging", "Data Analysis"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with experience in creating robust web applications 
            and solving complex technical challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently pursuing my Bachelor of Technology in Computer Science at SRM Institute 
              of Science and Technology (SRMIST). My journey 
              in tech began with a strong foundation in programming fundamentals and has evolved 
              through various certifications and hands-on projects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying updated with industry trends. Through 
              platforms like Accenture, Oracle, Coursera, and NPTEL, I've gained certifications 
              in software engineering, cloud computing, and web development. I'm passionate about 
              building efficient solutions and contributing to the tech community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 glass hover:shadow-card transition-all duration-300">
                <div className="text-primary mb-3">{highlight.icon}</div>
                <h4 className="font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 glass">
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};