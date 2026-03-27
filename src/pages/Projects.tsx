import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import ProjectFilter, { ProjectCategory } from "@/components/ProjectFilter";
import ImageWithFallback from "@/components/ImageWithFallback";
import AnimatedSection from "@/components/AnimatedSection";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";
import project9 from "@/assets/project-9.jpg";

interface Project {
  img: string;
  label: string;
  category: ProjectCategory;
  description: string;
  client: string;
  year: string;
  alt: string;
}

const projects: Project[] = [
  {
    img: project1,
    label: "Commercial Electrical Wiring",
    category: "electrical",
    description: "Complete electrical system installation for 5-story commercial building",
    client: "Greenfield Properties",
    year: "2025",
    alt: "Modern commercial building electrical wiring installation with organized cable management"
  },
  {
    img: project2,
    label: "Industrial Switchgear Installation",
    category: "industrial",
    description: "High-voltage switchgear installation for manufacturing facility",
    client: "Kano Industrial Complex",
    year: "2025",
    alt: "High-voltage industrial switchgear installation in manufacturing facility"
  },
  {
    img: project3,
    label: "Residential Wiring Project",
    category: "electrical",
    description: "Full electrical wiring for luxury residential estate",
    client: "Private Client",
    year: "2024",
    alt: "Luxury residential home electrical wiring with modern fixtures and smart home integration"
  },
  {
    img: project4,
    label: "Transformer Substation Setup",
    category: "industrial",
    description: "500KVA transformer installation and substation commissioning",
    client: "Northern Power Distribution",
    year: "2024",
    alt: "500KVA transformer substation setup for industrial power distribution"
  },
  {
    img: project5,
    label: "Data Center Cabling",
    category: "electrical",
    description: "Structured cabling and network infrastructure for data center",
    client: "TechHub Kano",
    year: "2025",
    alt: "Professional data center structured cabling with fiber optic and ethernet infrastructure"
  },
  {
    img: project6,
    label: "Commercial Building Construction",
    category: "construction",
    description: "Ground-up construction of 3-story commercial plaza",
    client: "Kano Development Authority",
    year: "2024",
    alt: "Modern commercial plaza construction project with steel and concrete structure"
  },
  {
    img: project7,
    label: "Street Lighting Installation",
    category: "electrical",
    description: "LED street lighting system for 5km urban road network",
    client: "Kano State Government",
    year: "2025",
    alt: "Energy-efficient LED street lighting system installation on urban roads"
  },
  {
    img: project8,
    label: "Solar Panel Installation",
    category: "electrical",
    description: "50KW solar power system for commercial facility",
    client: "Eco Solutions Ltd",
    year: "2024",
    alt: "Commercial rooftop solar panel installation with inverter and battery backup system"
  },
  {
    img: project9,
    label: "High-Rise Construction",
    category: "construction",
    description: "Structural and electrical work for 10-story residential tower",
    client: "Urban Living Developments",
    year: "2025",
    alt: "High-rise residential tower construction with modern architectural design"
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((proj) => proj.category === activeCategory);

  return (
    <Layout>
      <SEO
        title="Our Projects - AURA Engineering Company"
        description="Explore our portfolio of completed electrical, construction, and industrial engineering projects across Nigeria. Quality work delivered on time."
        keywords="engineering projects, electrical projects, construction portfolio, industrial projects, Kano projects"
      />
      <PageHeader
        title="Our Projects"
        subtitle="A showcase of our engineering and construction work across Nigeria."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ProjectFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj, index) => (
              <AnimatedSection key={proj.label} delay={index * 0.05}>
                <div className="group bg-card border border-border rounded overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={proj.img}
                      alt={proj.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-heading font-semibold">
                      {proj.year}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-h3 text-lg mb-2">{proj.label}</h3>
                    <p className="text-body text-muted-foreground text-sm mb-3 flex-1">
                      {proj.description}
                    </p>
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-heading font-semibold">Client:</span> {proj.client}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-body-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
