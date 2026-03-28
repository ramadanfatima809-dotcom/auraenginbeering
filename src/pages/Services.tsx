import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import ImageWithFallback from "@/components/ImageWithFallback";

import electricalInstallation from "@/assets/electrical-installation.jpg";
import buildingWiring from "@/assets/building-wiring.jpg";
import industrialElectrical from "@/assets/industrial-electrical.jpg";
import transformerInstallation from "@/assets/transformer-installation.jpg";
import networkingCabling from "@/assets/networking-cabling.jpg";
import constructionServices from "@/assets/construction-services.jpg";
import maintenanceRepairs from "@/assets/maintenance-repairs.jpg";

const services = [
  {
    title: "Electrical Installation",
    desc: "We provide complete electrical system design and installation for new builds, renovations, and upgrades. Our team ensures all installations meet safety standards and regulatory requirements.",
    img: electricalInstallation,
    alt: "Professional electrical installation with circuit breakers, wiring, and safety equipment in modern building",
  },
  {
    title: "Building Wiring",
    desc: "Professional wiring solutions for residential, commercial, and institutional buildings. We handle everything from planning and layout to final testing and certification.",
    img: buildingWiring,
    alt: "Organized building electrical wiring system with conduits and junction boxes in commercial property",
  },
  {
    title: "Industrial Electrical Works",
    desc: "Heavy-duty electrical solutions for factories, industrial plants, and manufacturing facilities. We handle high-voltage systems, motor controls, and power distribution.",
    img: industrialElectrical,
    alt: "Industrial electrical control panel installation with PLCs and motor starters in factory setting",
  },
  {
    title: "Transformer Installation",
    desc: "Supply, installation, testing, and commissioning of power and distribution transformers. We work with utility companies and private clients to ensure reliable power delivery.",
    img: transformerInstallation,
    alt: "Large power transformer installation on concrete pad with high-voltage connections and safety fencing",
  },
  {
    title: "Networking & Cabling",
    desc: "Structured cabling and network infrastructure deployment for offices, data centers, and commercial buildings. We deliver reliable connectivity solutions.",
    img: networkingCabling,
    alt: "Professional network cabling installation with fiber optic and ethernet cables in server room",
  },
  {
    title: "Construction Services",
    desc: "General construction services including building construction, renovation, and structural works for commercial and residential projects.",
    img: constructionServices,
    alt: "Construction site with steel framework and concrete structure for commercial building project",
  },
  {
    title: "Maintenance & Repairs",
    desc: "Ongoing maintenance and emergency repair services for electrical systems, ensuring continuous operation and minimizing downtime for your facilities.",
    img: maintenanceRepairs,
    alt: "Electrical maintenance technician performing safety inspection and repairs on industrial equipment",
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Our Services - AURA Technical Engineering Company"
        description="Professional electrical installation, building wiring, industrial electrical works, transformer installation, networking, construction, and maintenance services in Nigeria."
        keywords="electrical installation, building wiring, industrial electrical, transformer installation, networking cabling, construction services, maintenance repairs"
      />
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive engineering solutions tailored to your project needs."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 space-y-16">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.1}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
              >
                <ImageWithFallback
                  src={svc.img}
                  alt={svc.alt}
                  className={`rounded w-full h-72 object-cover ${i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="text-h2">{svc.title}</h2>
                  <p className="text-body-lg text-muted-foreground mt-4 leading-relaxed">
                    {svc.desc}
                  </p>
                  <Link
                    to="/contact"
                    state={{ service: svc.title }}
                    className="inline-block mt-6 bg-accent text-accent-foreground px-6 py-2.5 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
