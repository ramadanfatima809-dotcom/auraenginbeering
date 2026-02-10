import { Link } from "react-router-dom";
import { Shield, HardHat, Award, HeartHandshake } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader
        title="About AURA Engineering Company"
        subtitle="Building trust through quality engineering since our founding."
      />

      {/* Company Profile */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-h2">Who We Are</h2>
              <p className="text-body-lg text-muted-foreground mt-4 leading-relaxed">
                AURA Engineering Company is a leading provider of electrical and construction services based in Kano State, Nigeria. We specialize in electrical installations, building wiring, industrial electrical works, transformer installations, networking, and general construction.
              </p>
              <p className="text-body text-muted-foreground mt-4 leading-relaxed">
                With a dedicated team of experienced engineers and technicians, we are committed to delivering safe, reliable, and high-quality engineering solutions. Our track record spans residential, commercial, and industrial projects across the region.
              </p>
            </div>
            <img
              src={aboutCompany}
              alt="AURA Engineering professional"
              className="rounded w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded p-8">
              <h3 className="text-h3 text-accent">Our Mission</h3>
              <p className="text-body text-muted-foreground mt-3 leading-relaxed">
                To provide reliable, safe, and cost-effective engineering solutions that meet the highest standards of quality, while ensuring customer satisfaction on every project.
              </p>
            </div>
            <div className="bg-card border border-border rounded p-8">
              <h3 className="text-h3 text-accent">Our Vision</h3>
              <p className="text-body text-muted-foreground mt-3 leading-relaxed">
                To become a trusted and leading engineering partner across Nigeria, known for excellence, innovation, and commitment to powering reliable infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-h2 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6">
                <v.icon size={40} className="text-accent mx-auto mb-4" />
                <h3 className="text-h3 text-lg">{v.title}</h3>
                <p className="text-body text-muted-foreground mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team image */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-h2">Our Team</h2>
          <p className="text-body-lg text-muted-foreground mt-3 max-w-xl mx-auto">
            A dedicated team of experienced engineers and technicians committed to excellence.
          </p>
          <img
            src={engineersTeam}
            alt="AURA engineering team"
            className="rounded w-full max-w-3xl mx-auto mt-8 h-72 object-cover"
          />
        </div>
      </section>
    </Layout>
  );
};

export default About;
