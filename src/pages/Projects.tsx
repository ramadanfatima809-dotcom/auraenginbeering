import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";
import project9 from "@/assets/project-9.jpg";

const projects = [
  { img: project1, label: "Commercial Electrical Wiring" },
  { img: project2, label: "Industrial Switchgear Installation" },
  { img: project3, label: "Residential Wiring Project" },
  { img: project4, label: "Transformer Substation Setup" },
  { img: project5, label: "Data Center Cabling" },
  { img: project6, label: "Commercial Building Construction" },
  { img: project7, label: "Street Lighting Installation" },
  { img: project8, label: "Solar Panel Installation" },
  { img: project9, label: "High-Rise Construction" },
];

const Projects = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Projects"
        subtitle="A showcase of our engineering and construction work across Nigeria."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.label}
                className="group relative overflow-hidden rounded"
              >
                <img
                  src={proj.img}
                  alt={proj.label}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-primary-foreground font-heading font-semibold text-sm">
                    {proj.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
