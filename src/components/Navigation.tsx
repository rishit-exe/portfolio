import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { scrollToTop, scrollToSection } from "@/lib/scroll-utils";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToTopNav = () => {
    scrollToTop();
  };
  const gotoHome = () => {
    window.location.href = "/portfolio/";
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass shadow-card dark:bg-card/80 dark:shadow-card" : "bg-background/80 dark:bg-background/80 backdrop-blur-sm"
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<button 
  onClick={gotoHome}
  className="flex items-center text-2xl font-bold text-gradient hover:scale-105 transition-transform"
>
  <img
    src={ theme === 'dark' ? "favicon.ico" : "favicon-black.ico"}
    alt="Logo"
    className="w-8 h-8 rounded-full align-middle"
    style={{ marginRight: 0, padding: 0 }}
  />
  ishit
</button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-foreground hover:text-primary transition-colors relative group bg-transparent border-none cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative overflow-hidden group"
              aria-label="Toggle dark mode"
            >
              <Sun className={`w-5 h-5 transition-all duration-300 ${
                theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
              }`} />
              <Moon className={`absolute w-5 h-5 transition-all duration-300 ${
                theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
              }`} />
            </Button>
            
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.open("https://www.linkedin.com/in/the-rishit-srivastava", "_blank")}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass dark:bg-card/80 border-t border-border/20 dark:border-border/10">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    scrollToSection(item.href.substring(1));
                    setIsMenuOpen(false);
                  }}
                  className="text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Dark Mode Toggle for Mobile */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative overflow-hidden group w-fit"
                aria-label="Toggle dark mode"
              >
                <Sun className={`w-5 h-5 transition-all duration-300 ${
                  theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
                }`} />
                <Moon className={`absolute w-5 h-5 transition-all duration-300 ${
                  theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
                }`} />
              </Button>
              
              <Button 
                variant="hero" 
                size="sm" 
                className="w-fit"
                onClick={() => window.open("https://www.linkedin.com/in/the-rishit-srivastava", "_blank")}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};