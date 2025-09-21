import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch("https://formspree.io/f/meolajgp", { // <-- replace with your Formspree endpoint
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again later.",
    });
  }
};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "rishit.vns05@gmail.com",
      href: "mailto:rishit.vns05@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Location",
      content: "India",
      href: "#"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Available for",
      content: "Remote Work & Internships",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 dark:bg-background relative">
      {/* Elegant Section Divider */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/60"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/60"></div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-8 glass dark:bg-card/50 dark:border-border/20">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">Let's Connect</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium">{info.title}</div>
                      <div className="text-muted-foreground">{info.content}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 glass text-center">
              <h4 className="text-xl font-semibold mb-4 dark:text-white">Available for Work</h4>
              <p className="text-muted-foreground dark:text-muted-foreground mb-6">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <div className="w-3 h-3 bg-green-500 rounded-full mx-auto animate-pulse"></div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 glass dark:bg-card/50 dark:border-border/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="dark:text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="dark:bg-input/50 dark:border-border/30 dark:text-white dark:placeholder-muted-foreground"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};