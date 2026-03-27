import { Users, Briefcase, Clock, Award } from "lucide-react";

const stats = [
     { icon: Clock, value: "10+", label: "Years Experience" },
     { icon: Briefcase, value: "200+", label: "Projects Completed" },
     { icon: Users, value: "50+", label: "Expert Team Members" },
     { icon: Award, value: "100%", label: "Client Satisfaction" },
];

const WhyChooseUs = () => {
     return (
          <section className="py-16 md:py-20 bg-primary text-primary-foreground">
               <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-h2 text-center">Why Choose AURA Engineering?</h2>
                    <p className="text-body-lg text-center mt-3 max-w-2xl mx-auto opacity-90">
                         Your trusted partner for reliable engineering solutions
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                         {stats.map((stat) => (
                              <div key={stat.label} className="text-center">
                                   <stat.icon size={40} className="mx-auto mb-3 text-accent" />
                                   <p className="text-4xl font-heading font-bold">{stat.value}</p>
                                   <p className="text-body mt-2 opacity-80">{stat.label}</p>
                              </div>
                         ))}
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div className="text-center p-6">
                              <h3 className="text-h3 text-accent mb-2">Licensed & Certified</h3>
                              <p className="text-body opacity-80">
                                   Fully licensed engineering firm with certified professionals
                              </p>
                         </div>
                         <div className="text-center p-6">
                              <h3 className="text-h3 text-accent mb-2">Safety First</h3>
                              <p className="text-body opacity-80">
                                   Strict adherence to safety standards on every project
                              </p>
                         </div>
                         <div className="text-center p-6">
                              <h3 className="text-h3 text-accent mb-2">24/7 Support</h3>
                              <p className="text-body opacity-80">
                                   Emergency support and maintenance services available
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default WhyChooseUs;
