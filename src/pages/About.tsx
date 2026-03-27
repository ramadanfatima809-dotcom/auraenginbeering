import { Shield, HardHat, Award, HeartHandshake } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import ImageWithFallback from "@/components/ImageWithFallback";
import CertificationsSection from "@/components/CertificationsSection";
import aboutCompany from "@/assets/about-company.jpg";
import engineersTeam from "@/assets/engineers-team.jpg";

const values = [
  { icon: Shield, title: "Integrity", desc: "We conduct business with honesty and transparency." },
  { icon: HardHat, title: "Safety", desc: "Safety is our top priority on every project." },
  { icon: Award, title: "Quality", desc: "We deliver excellence in every project we undertake." },
  { icon: HeartHandshake, title: "Reliability", desc: "Our clients trust us to deliver on time, every time." },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us - AURA Engineering Company"
        description="Learn about AURA Engineering Company, a leading provider of electrical and construction services in Kano, Nigeria. Our mission, vision, and core values."
        keywords="about AURA Engineering, engineering company Kano, electrical services Nigeria, construction company"
      />
      <PageHeader
        title="About AURA Engineering Company"
        subtitle="Building trust through quality engineering since our founding."
      />

      {/* Company Profile */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-h2">Who We Are</h2>
                <p className="text-body-lg text-muted-foreground mt-4 leading-relaxed">
                  AURA Engineering Company is a leading provider of electrical and construction services based in Kano State, Nigeria. We specialize in electrical installations, building wiring, industrial electrical works, transformer installations, networking, and general construction.
                </p>
                <p className="text-body text-muted-foreground mt-4 leading-relaxed">
                  With a dedicated team of experienced engineers and technicians, we are committed to delivering safe, reliable, and high-quality engineering solutions. Our track record spans residential, commercial, and industrial projects across the region.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <ImageWithFallback
                src={aboutCompany}
                alt="AURA Engineering professional engineer inspecting electrical installation with safety equipment"
                className="rounded w-full h-80 object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-card border border-border rounded p-8 h-full">
                <h3 className="text-h3 text-accent">Our Mission</h3>
                <p className="text-body text-muted-foreground mt-3 leading-relaxed">
                  To provide reliable, safe, and cost-effective engineering solutions that meet the highest standards of quality, while ensuring customer satisfaction on every project.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-card border border-border rounded p-8 h-full">
                <h3 className="text-h3 text-accent">Our Vision</h3>
                <p className="text-body text-muted-foreground mt-3 leading-relaxed">
                  To become a trusted and leading engineering partner across Nigeria, known for excellence, innovation, and commitment to powering reliable infrastructure.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-h2 text-center">Our Core Values</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {values.map((v, index) => (
              <AnimatedSection key={v.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <v.icon size={40} className="text-accent mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-h3 text-lg">{v.title}</h3>
                  <p className="text-body text-muted-foreground mt-2">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team image */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-h2">Our Team</h2>
            <p className="text-body-lg text-muted-foreground mt-3 max-w-xl mx-auto">
              A dedicated team of experienced engineers and technicians committed to excellence.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ImageWithFallback
              src={engineersTeam}
              alt="AURA Engineering team of professional engineers and technicians at construction site"
              className="rounded w-full max-w-3xl mx-auto mt-8 h-72 object-cover"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <CertificationsSection />
    </Layout>
  );
};

export default About;
