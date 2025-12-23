import { Cloud, Code, Database, Lock, Server, Workflow } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless cloud migration and optimization services across AWS, Azure, and Google Cloud platforms.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions built with modern technologies to address your unique business challenges.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics and BI solutions.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Comprehensive security assessments and implementations to protect your digital assets.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Design and implement scalable, resilient infrastructure that grows with your business.",
  },
  {
    icon: Workflow,
    title: "Digital Strategy",
    description: "Strategic consulting to align technology investments with your business objectives.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            End-to-End <span className="text-gradient">Technology Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From strategy to execution, we provide comprehensive technology services 
            that drive innovation and growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
