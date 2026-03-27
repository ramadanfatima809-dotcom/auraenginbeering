import { Award, Shield, CheckCircle, FileCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const certifications = [
     {
          icon: Award,
          title: "Licensed Engineering Firm",
          desc: "Fully licensed by Nigerian regulatory authorities"
     },
     {
          icon: Shield,
          title: "Safety Certified",
          desc: "Compliant with international safety standards"
     },
     {
          icon: CheckCircle,
          title: "Quality Assurance",
          desc: "ISO-compliant quality management systems"
     },
     {
          icon: FileCheck,
          title: "Insured & Bonded",
          desc: "Comprehensive insurance coverage for all projects"
     }
];

const CertificationsSection = () => {
     return (
          <section className="py-16 md:py-20 bg-muted/30">
               <div className="container mx-auto px-4 lg:px-8">
                    <AnimatedSection>
                         <h2 className="text-h2 text-center">Certifications & Compliance</h2>
                         <p className="text-body-lg text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
                              Trusted and certified to deliver excellence
                         </p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                         {certifications.map((cert, index) => (
                              <AnimatedSection key={cert.title} delay={index * 0.1}>
                                   <div className="bg-card border border-border rounded p-6 text-center hover:shadow-lg transition-shadow">
                                        <cert.icon size={40} className="text-accent mx-auto mb-4" aria-hidden="true" />
                                        <h3 className="text-h3 text-base font-semibold mb-2">{cert.title}</h3>
                                        <p className="text-sm text-muted-foreground">{cert.desc}</p>
                                   </div>
                              </AnimatedSection>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default CertificationsSection;
