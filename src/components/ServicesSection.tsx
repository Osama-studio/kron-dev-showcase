import { Globe, Smartphone, Cloud, ShoppingCart, Bot, Database } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Node.js, and cutting-edge technologies.",
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "Content Management"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "Firebase Integration"]
    },
    {
      icon: Cloud,
      title: "SaaS Solutions",
      description: "Scalable Software-as-a-Service platforms designed for modern business needs.",
      features: ["Cloud Architecture", "Multi-tenant Systems", "API Development", "Real-time Analytics"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Complete e-commerce solutions that drive sales and enhance customer experiences.",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Order Processing"]
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline processes and boost productivity.",
      features: ["Process Automation", "Chatbots", "Machine Learning", "Data Analytics"]
    },
    {
      icon: Database,
      title: "Vector Embeddings",
      description: "Advanced vector database solutions for semantic search and AI-powered applications.",
      features: ["Semantic Search", "Recommendation Systems", "Document Processing", "AI Integration"]
    },
    {
      icon: Globe,
      title: "Customized Apps & Web Solutions",
      description: "Tailored digital solutions designed specifically for your unique business requirements.",
      features: ["Custom Development", "Business Logic Integration", "Scalable Architecture", "User-Centric Design"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive 
              in the modern technological landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-3xl hover:shadow-elevation transition-all duration-300 group hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Gradient Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help bring your ideas to life with our expertise and innovation.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="glow-button bg-gradient-primary hover:opacity-90 px-8 py-3 rounded-full font-semibold"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;