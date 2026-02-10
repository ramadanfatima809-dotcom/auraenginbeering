import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

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
  },
  {
    title: "Building Wiring",
    desc: "Professional wiring solutions for residential, commercial, and institutional buildings. We handle everything from planning and layout to final testing and certification.",
    img: buildingWiring,
  },
  {
    title: "Industrial Electrical Works",
    desc: "Heavy-duty electrical solutions for factories, industrial plants, and manufacturing facilities. We handle high-voltage systems, motor controls, and power distribution.",
    img: industrialElectrical,
  },
  {
    title: "Transformer Installation",
    desc: "Supply, installation, testing, and commissioning of power and distribution transformers. We work with utility companies and private clients to ensure reliable power delivery.",
    img: transformerInstallation,
  },
  {
    title: "Networking & Cabling",
    desc: "Structured cabling and network infrastructure deployment for offices, data centers, and commercial buildings. We deliver reliable connectivity solutions.",
    img: networkingCabling,
  },
  {
    title: "Construction Services",
    desc: "General construction services including building construction, renovation, and structural works for commercial and residential projects.",
    img: constructionServices,
  },
  {
    title: "Maintenance & Repairs",
    desc: "Ongoing maintenance and emergency repair services for electrical systems, ensuring continuous operation and minimizing downtime for your facilities.",
    img: maintenanceRepairs,
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive engineering solutions tailored to your project needs."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 space-y-16">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <img
                src={svc.img}
                alt={svc.title}
                className={`rounded w-full h-72 object-cover ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="text-h2">{svc.title}</h2>
                <p className="text-body-lg text-muted-foreground mt-4 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
