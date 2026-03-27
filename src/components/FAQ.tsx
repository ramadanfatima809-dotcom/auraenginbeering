import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
     {
          question: "What areas do you serve?",
          answer: "We primarily serve Kano State and surrounding regions in Northern Nigeria. For larger projects, we can extend our services to other parts of Nigeria.",
     },
     {
          question: "How long does a typical electrical installation project take?",
          answer: "Project timelines vary based on scope and complexity. Residential wiring typically takes 1-2 weeks, while commercial and industrial projects can range from several weeks to months. We provide detailed timelines during the consultation phase.",
     },
     {
          question: "Do you provide free quotes?",
          answer: "Yes, we offer free initial consultations and project quotes. Contact us with your project details, and our team will assess your requirements and provide a comprehensive estimate.",
     },
     {
          question: "Are your engineers licensed and certified?",
          answer: "Absolutely. All our engineers and technicians are fully licensed, certified, and regularly trained on the latest industry standards and safety protocols.",
     },
     {
          question: "Do you offer maintenance services after project completion?",
          answer: "Yes, we provide ongoing maintenance contracts and emergency repair services to ensure your electrical systems continue to operate safely and efficiently.",
     },
     {
          question: "What safety standards do you follow?",
          answer: "We strictly adhere to Nigerian Electrical Code standards, international safety protocols, and industry best practices. Safety is our top priority on every project.",
     },
     {
          question: "Can you handle both residential and commercial projects?",
          answer: "Yes, we have extensive experience with residential, commercial, and industrial projects of all sizes. Our team is equipped to handle diverse engineering challenges.",
     },
     {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, checks, and cash payments. Payment terms are typically structured with an initial deposit, progress payments, and final payment upon project completion.",
     },
];

const FAQ = () => {
     return (
          <section className="py-16 md:py-20">
               <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-h2 text-center">Frequently Asked Questions</h2>
                    <p className="text-body-lg text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
                         Find answers to common questions about our services
                    </p>
                    <div className="max-w-3xl mx-auto mt-10">
                         <Accordion type="single" collapsible className="space-y-4">
                              {faqs.map((faq, index) => (
                                   <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="bg-card border border-border rounded px-6"
                                   >
                                        <AccordionTrigger className="text-left font-heading font-semibold hover:text-accent">
                                             {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-body text-muted-foreground leading-relaxed">
                                             {faq.answer}
                                        </AccordionContent>
                                   </AccordionItem>
                              ))}
                         </Accordion>
                    </div>
               </div>
          </section>
     );
};

export default FAQ;
