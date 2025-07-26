import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Redis"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveUrl: "https://ecommerce-demo.devkronsoft.com",
      githubUrl: "https://github.com/devkronsoft/ecommerce-platform",
      category: "Web Development"
    },
    {
      title: "AI-Powered Mobile App",
      description: "Cross-platform mobile application with integrated AI features for image recognition and natural language processing.",
      technologies: ["React Native", "Firebase", "TensorFlow", "Python", "Google Cloud"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      liveUrl: "https://ai-app.devkronsoft.com",
      githubUrl: "https://github.com/devkronsoft/ai-mobile-app",
      category: "Mobile Development"
    },
    {
      title: "SaaS Analytics Dashboard",
      description: "Comprehensive analytics platform for businesses with real-time data visualization and automated reporting features.",
      technologies: ["Next.js", "PostgreSQL", "Chart.js", "AWS", "Docker"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "https://analytics.devkronsoft.com",
      githubUrl: "https://github.com/devkronsoft/saas-analytics",
      category: "SaaS"
    },
    {
      title: "Ignite Fuels App",
      description: "A contemporary fuel delivery solution that enables users to conveniently order gasoline, diesel, or other fuels to be delivered directly to their locations.",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Google Maps"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      liveUrl: "https://ignitefuels.example.com",
      githubUrl: "https://github.com/devkronsoft/ignite-fuels",
      category: "Mobile Development"
    },
    {
      title: "Vector Search Engine",
      description: "Advanced semantic search platform using vector embeddings for intelligent document retrieval and recommendation systems.",
      technologies: ["Python", "Pinecone", "OpenAI", "FastAPI", "React"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      liveUrl: "https://vector-search.devkronsoft.com",
      githubUrl: "https://github.com/devkronsoft/vector-search",
      category: "AI/ML"
    },
    {
      title: "Real Estate Platform",
      description: "Comprehensive real estate platform with property listings, virtual tours, mortgage calculators, and agent matching.",
      technologies: ["React.js", "Express.js", "MongoDB", "Mapbox", "WebRTC"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      liveUrl: "https://realestate.devkronsoft.com",
      githubUrl: "https://github.com/devkronsoft/real-estate-platform",
      category: "Web Development"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "SaaS", "AI/ML"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses 
              transform their digital presence with innovative solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                    : 'glass-card hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="glass-card rounded-3xl overflow-hidden group hover:shadow-elevation transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Quick Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-8 h-8 bg-background/80 hover:bg-background"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-8 h-8 bg-background/80 hover:bg-background"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-accent px-3 py-1 bg-accent/10 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 bg-muted/50 rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to bring your vision to life with cutting-edge technology and innovative design.
              </p>
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="glow-button bg-gradient-primary hover:opacity-90 group"
              >
                Let's Work Together
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;