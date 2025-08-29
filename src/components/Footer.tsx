import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/rishit-exe",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/the-rishit-srivastava/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:rishit.vns05@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">Rishit Srivastava</div>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300 group"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            {/* <p className="text-muted-foreground flex items-center justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Rishit
            </p> */}
            <p className="text-sm text-muted-foreground/70 mt-1">
              © 2024 All rights reserved
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="mt-8 pt-8 border-t border-border/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};