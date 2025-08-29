import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-background/50"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-40 right-32 w-24 h-24 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Rishit</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Computer Science Student & Software Developer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto">
            Currently pursuing BTech in Computer Science at SRMIST. 
            Passionate about software engineering and gaining hands-on experience through certifications and projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* <Button variant="hero" size="xl" className="group">
              View My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button> */}
            <Button
  variant="hero"
  size="xl"
  className="group"
  onClick={() => {
    const section = document.getElementById("experience");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }}
>
  View My Work
  <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
</Button>
            {/* <Button variant="glass" size="xl">
              Get In Touch
            </Button> */}
            <Button
  variant="glass"
  size="xl"
  onClick={() => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }}
>
  Get In Touch
</Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com/rishit-exe" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:shadow-glow transition-all duration-300 group">
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/the-rishit-srivastava/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:shadow-glow transition-all duration-300 group">
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:rishit.vns05@gmail.com" className="p-4 glass rounded-full hover:shadow-glow transition-all duration-300 group">
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};