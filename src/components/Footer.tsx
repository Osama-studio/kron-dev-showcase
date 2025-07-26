import { Github, Linkedin, Instagram, MessageCircle, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/devkronsoft",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/company/devkronsoft",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      url: "https://instagram.com/devkronsoft",
      label: "Instagram"
    },
    {
      icon: MessageCircle,
      url: "https://wa.me/1234567890",
      label: "WhatsApp"
    },
    {
      icon: Facebook,
      url: "https://facebook.com/devkronsoft",
      label: "Facebook"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "SaaS Solutions",
    "E-commerce",
    "AI Automation"
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-background/95 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold gradient-text mb-4">Devkron Soft</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Transforming ideas into digital reality through innovative web solutions, 
                  mobile applications, and AI-powered systems. Your trusted partner for 
                  cutting-edge technology solutions.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <span className="font-medium mr-2">Email:</span>
                  <a 
                    href="mailto:devkronsoft@gmail.com"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    devkronsoft@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <span className="font-medium mr-2">Location:</span>
                  <span>Remote & Global</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-medium mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:shadow-glow transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="block text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="text-muted-foreground">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="glass-card p-8 rounded-3xl mb-12">
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest updates on technology trends, 
                project insights, and exclusive content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none"
                />
                <button className="glow-button bg-gradient-primary hover:opacity-90 px-6 py-3 rounded-lg font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Devkron Soft. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;