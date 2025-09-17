import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering solutions that exceed expectations and drive real business value."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We work closely with clients to understand and fulfill their unique needs."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for modern challenges."
    },
    {
      icon: Rocket,
      title: "Growth Oriented",
      description: "We build scalable solutions that grow with your business and adapt to changing requirements."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Devkron Soft</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate team of developers and innovators dedicated to creating 
              exceptional digital experiences that make a difference.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-4">Our Journey</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded with a vision to bridge the gap between innovative technology and 
                practical business solutions, Devkron Soft has evolved into a trusted partner 
                for businesses seeking digital transformation.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our journey began with a simple belief: that great software should not only 
                function flawlessly but also provide exceptional user experiences. Today, 
                we continue to push boundaries in web development, mobile applications, 
                and AI automation.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From startups to established enterprises, we've helped countless organizations 
                leverage technology to achieve their goals and stay ahead in competitive markets.
              </p>
            </div>

            {/* Right Column - Values */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                <div className="text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">99%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;