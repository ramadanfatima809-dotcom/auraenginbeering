import { Link } from "react-router-dom";
import { Zap, Building2, Factory, Cable, Network, HardHat } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import AnimatedSection from "@/components/AnimatedSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import ImageWithFallback from "@/components/ImageWithFallback";

import heroBg from "@/assets/hero-bg.jpg";
import engineersTeam from "@/assets/engineers-team.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project4 from "@/assets/project-4.jpg";
import project7 from "@/assets/project-7.jpg";

const services = [
  { icon: Zap, title: "Electrical Installation", desc: "Complete electrical system installations for buildings and facilities." },
  { icon: Building2, title: "Building Wiring", desc: "Professional wiring solutions for residential and commercial buildings." },
  { icon: Factory, title: "Industrial Electrical Works", desc: "Heavy-duty electrical solutions for factories and industrial plants." },
  { icon: Cable, title: "Transformer Installation", desc: "Supply, installation, and commissioning of power transformers." },
  { icon: Network, title: "Networking & Cabling", desc: "Structured cabling and network infrastructure deployment." },
  { icon: HardHat, title: "Construction Services", desc: "General construction services for commercial and residential projects." },
];

const featuredProjects = [
  { img: project1, label: "Industrial Construction", alt: "Steel framework construction for industrial facility with water storage tanks" },
  { img: project2, label: "Steel Structure Installation", alt: "Workers installing steel framework structure at height with safety equipment" },
  { img: project4, label: "Structural Steel Works", alt: "Multi-level steel structure framework installation for industrial building" },
  { img: project7, label: "Commercial Building Construction", alt: "Multi-story commercial building steel framework under construction" },
];

const Index = () => {
  return (
    <Layout>
      <SEO />
      <StructuredData />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          role="img"
          aria-label="AURA Technical Engineering construction site with electrical infrastructure"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-primary-foreground">
          <AnimatedSection>
            <h1 className="text-h1 md:text-hero max-w-3xl mx-auto">
              Powering Reliable Infrastructure
            </h1>
            <p className="text-body-lg mt-6 opacity-90 max-w-2xl mx-auto">
              Professional electrical and construction solutions for residential, commercial, and industrial projects.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-accent text-accent-foreground px-8 py-3 rounded font-heading font-semibold text-body hover:opacity-90 transition-opacity"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded font-heading font-semibold text-body hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <ImageWithFallback
                src={engineersTeam}
                alt="AURA Technical Engineering professional team of engineers and technicians working on electrical installation project"
                className="rounded w-full h-80 object-cover"
                loading="eager"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-h2">About AURA Technical Engineering</h2>
                <p className="text-body-lg text-muted-foreground mt-4 leading-relaxed">
                  AURA Technical Engineering Company is a trusted provider of professional electrical and construction services. With years of experience, we deliver reliable, safe, and high-quality solutions for residential, commercial, and industrial projects across Nigeria.
                </p>
                <Link
                  to="/about"
                  className="inline-block mt-6 bg-accent text-accent-foreground px-6 py-2.5 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-h2 text-center">Our Core Services</h2>
            <p className="text-body-lg text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
              We provide comprehensive engineering solutions tailored to your project needs.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {services.map((svc, index) => (
              <AnimatedSection key={svc.title} delay={index * 0.1}>
                <div className="bg-card border border-border rounded p-6 hover:shadow-lg transition-shadow h-full">
                  <svc.icon size={36} className="text-accent mb-4" aria-hidden="true" />
                  <h3 className="text-h3 text-lg">{svc.title}</h3>
                  <p className="text-body text-muted-foreground mt-2">{svc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Featured Projects */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-h2 text-center">Featured Projects</h2>
            <p className="text-body-lg text-muted-foreground text-center mt-3 max-w-xl mx-auto">
              A selection of our recent engineering and construction work.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {featuredProjects.map((proj, index) => (
              <AnimatedSection key={proj.label} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded">
                  <ImageWithFallback
                    src={proj.img}
                    alt={proj.alt}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-primary-foreground font-heading font-semibold text-sm">
                      {proj.label}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <div className="text-center mt-8">
              <Link
                to="/projects"
                className="inline-block bg-accent text-accent-foreground px-6 py-2.5 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View All Projects
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-h2 text-primary-foreground">Need a reliable engineering partner?</h2>
            <p className="text-body-lg text-primary-foreground/80 mt-3 max-w-xl mx-auto">
              Contact us today to discuss your project requirements.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-6 bg-accent text-accent-foreground px-8 py-3 rounded font-heading font-semibold text-body hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
