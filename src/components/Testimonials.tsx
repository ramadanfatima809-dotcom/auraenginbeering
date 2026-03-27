import { Star } from "lucide-react";

const testimonials = [
     {
          name: "Musa Ibrahim",
          company: "Kano Industrial Complex",
          text: "AURA Engineering delivered exceptional electrical installation for our factory. Professional, timely, and reliable service.",
          rating: 5,
     },
     {
          name: "Fatima Abdullahi",
          company: "Greenfield Properties",
          text: "Their building wiring services exceeded our expectations. The team was knowledgeable and completed the project on schedule.",
          rating: 5,
     },
     {
          name: "Ahmed Suleiman",
          company: "Northern Power Distribution",
          text: "Outstanding transformer installation work. AURA Engineering's technical expertise and safety standards are top-notch.",
          rating: 5,
     },
];

const Testimonials = () => {
     return (
          <section className="py-16 md:py-20 bg-muted/30">
               <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-h2 text-center">What Our Clients Say</h2>
                    <p className="text-body-lg text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
                         Trusted by businesses and organizations across Nigeria
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                         {testimonials.map((testimonial) => (
                              <div
                                   key={testimonial.name}
                                   className="bg-card border border-border rounded p-6 hover:shadow-lg transition-shadow"
                              >
                                   <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                             <Star key={i} size={18} className="fill-accent text-accent" />
                                        ))}
                                   </div>
                                   <p className="text-body text-muted-foreground italic leading-relaxed">
                                        "{testimonial.text}"
                                   </p>
                                   <div className="mt-4 pt-4 border-t border-border">
                                        <p className="font-heading font-semibold text-sm">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default Testimonials;
