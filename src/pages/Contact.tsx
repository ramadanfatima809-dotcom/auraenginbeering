import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";
import { sendContactEmail } from "@/utils/emailService";

const Contact = () => {
  const location = useLocation();
  const serviceFromState = location.state?.service || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: serviceFromState,
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (serviceFromState) {
      setForm(prev => ({ ...prev, service: serviceFromState }));
    }
  }, [serviceFromState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      });

      setSubmitted(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Us - Aura technical and general enterprises limited"
        description="Get in touch with Aura technical and general enterprises limited for electrical, construction, and engineering services. Located in Kano, Nigeria. Call 0803 268 5802"
        keywords="contact Aura technical and general enterprises limited, engineering company Kano, electrical services contact, construction quote"
      />
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch for inquiries, quotes, or project discussions."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div>
                <h2 className="text-h2">Get In Touch</h2>
                <p className="text-body text-muted-foreground mt-3 leading-relaxed">
                  We'd love to hear from you. Reach out to us for any inquiries about our engineering and construction services.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded">
                      <MapPin size={22} className="text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-body">Address</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Plot 14/27 Naibawa Along NNPC pipeline,<br />
                        Kumbotso LGA, Kano State, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded">
                      <Phone size={22} className="text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-body">Phone</h4>
                      <a href="tel:+2348032685802" className="text-sm text-muted-foreground hover:text-accent transition-colors block mt-1">
                        0803 268 5802
                      </a>
                      <a href="tel:+2348022362816" className="text-sm text-muted-foreground hover:text-accent transition-colors block">
                        0802 236 2816
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded">
                      <Mail size={22} className="text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-body">Email</h4>
                      <a href="mailto:nuhuramadam@yahoo.com" className="text-sm text-accent hover:underline mt-1 block">
                        nuhuramadam@yahoo.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded">
                  <h4 className="font-heading font-semibold text-body mb-2">Business Hours</h4>
                  <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  <p className="text-sm text-accent mt-2">Emergency services available 24/7</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-card border border-border rounded p-6 md:p-8">
                <h3 className="text-h3 mb-6">Send Us a Message</h3>
                {submitted ? (
                  <div className="text-center py-12">
                    <Send size={40} className="text-accent mx-auto mb-4" />
                    <p className="text-body-lg font-heading font-semibold">Thank you!</p>
                    <p className="text-body text-muted-foreground mt-2">Your message has been sent. We'll be in touch soon.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 bg-accent text-accent-foreground px-6 py-2.5 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block font-heading font-medium text-sm mb-1">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-input bg-background rounded px-4 py-2.5 text-body focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your full name"
                        required
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-heading font-medium text-sm mb-1">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-input bg-background rounded px-4 py-2.5 text-body focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your phone number"
                        maxLength={20}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-heading font-medium text-sm mb-1">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-input bg-background rounded px-4 py-2.5 text-body focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your email address"
                        required
                        maxLength={255}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block font-heading font-medium text-sm mb-1">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full border border-input bg-background rounded px-4 py-2.5 text-body focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="Electrical Installation">Electrical Installation</option>
                        <option value="Building Wiring">Building Wiring</option>
                        <option value="Industrial Electrical Works">Industrial Electrical Works</option>
                        <option value="Transformer Installation">Transformer Installation</option>
                        <option value="Networking & Cabling">Networking & Cabling</option>
                        <option value="Construction Services">Construction Services</option>
                        <option value="Maintenance & Repairs">Maintenance & Repairs</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-heading font-medium text-sm mb-1">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-input bg-background rounded px-4 py-2.5 text-body focus:outline-none focus:ring-2 focus:ring-ring h-32 resize-none"
                        placeholder="Tell us about your project..."
                        required
                        maxLength={1000}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-accent-foreground py-3 rounded font-heading font-semibold text-body hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
