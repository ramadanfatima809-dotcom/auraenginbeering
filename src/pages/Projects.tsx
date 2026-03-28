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
    label: "Industrial Construction Project",
    category: "construction",
    description: "Steel framework construction for industrial facility with water storage tanks",
    client: "Industrial Client",
    year: "2025",
    alt: "Construction site showing steel framework installation between industrial water storage tanks and blue warehouse building"
  },
  {
    img: project2,
    label: "Steel Structure Installation",
    category: "construction",
    description: "High-level steel framework installation with safety protocols",
    client: "Commercial Development",
    year: "2025",
    alt: "Workers installing steel framework structure at height using ladders and safety equipment"
  },
  {
    img: project3,
    label: "Generator Installation",
    category: "industrial",
    description: "Industrial generator installation and commissioning",
    client: "Manufacturing Facility",
    year: "2024",
    alt: "Large turquoise industrial generator with exhaust system installed at outdoor facility"
  },
  {
    img: project4,
    label: "Structural Steel Works",
    category: "construction",
    description: "Multi-level steel structure framework installation",
    client: "Industrial Complex",
    year: "2024",
    alt: "Workers on ladders installing red and silver steel framework for industrial building structure"
  },
  {
    img: project5,
    label: "Industrial Steel Framework",
    category: "industrial",
    description: "Large-scale industrial steel structure construction",
    client: "Manufacturing Plant",
    year: "2025",
    alt: "Multi-story industrial steel framework structure with platforms and walkways under construction"
  },
  {
    img: project6,
    label: "Electrical Control Panel Installation",
    category: "electrical",
    description: "Industrial electrical control panels and cable management system",
    client: "Industrial Facility",
    year: "2024",
    alt: "Professional electrical control panel installation with organized cable tray system and ACCORD brand switchgear"
  },
  {
    img: project7,
    label: "Commercial Building Steel Structure",
    category: "construction",
    description: "Multi-story commercial building steel framework construction",
    client: "Commercial Development",
    year: "2025",
    alt: "Green commercial building with steel framework structure under construction showing multiple floors"
  },
  {
    img: project8,
    label: "Industrial Plant Construction",
    category: "industrial",
    description: "Large-scale industrial plant steel structure and framework",
    client: "Industrial Client",
    year: "2024",
    alt: "Massive multi-level industrial plant steel structure with complex framework and platforms under construction"
  },
  {
    img: project9,
    label: "Infrastructure Development",
    category: "construction",
    description: "Commercial infrastructure and structural steel installation",
    client: "Development Authority",
    year: "2025",
    alt: "Commercial infrastructure project showing steel framework and construction materials on site"
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
        title="Our Projects - AURA Technical Engineering Company"
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
