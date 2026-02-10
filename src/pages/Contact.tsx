import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch for inquiries, quotes, or project discussions."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-h2">Get In Touch</h2>
              <p className="text-body text-muted-foreground mt-3 leading-relaxed">
                We'd love to hear from you. Reach out to us for any inquiries about our engineering and construction services.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded">
                    <MapPin size={22} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-body">Address</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Plot 14/27 Naibawa Along NNPC pipeline,<br />
                      Kumbotso LGA, Kano State
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded">
                    <Phone size={22} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-body">Phone</h4>
                    <p className="text-sm text-muted-foreground mt-1">+2348032685802</p>
                    <p className="text-sm text-muted-foreground">+2348065456330</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded">
                    <Mail size={22} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-body">Email</h4>
                    <a href="mailto:nuhuramadam@yahoo.com" className="text-sm text-accent hover:underline">
                      nuhuramadam@yahoo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
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
                    <label className="block font-heading font-medium text-sm mb-1">Name *</label>
                    <input
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
                    <label className="block font-heading font-medium text-sm mb-1">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-input bg-background rounded px-4 py-2.5 text-body focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your phone number"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-medium text-sm mb-1">Email *</label>
                    <input
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
                    <label className="block font-heading font-medium text-sm mb-1">Message *</label>
                    <textarea
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
                    className="w-full bg-accent text-accent-foreground py-3 rounded font-heading font-semibold text-body hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
