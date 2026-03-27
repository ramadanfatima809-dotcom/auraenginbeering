import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";
import project9 from "@/assets/project-9.jpg";

export interface Project {
     id: number;
     img: string;
     label: string;
     category: "electrical" | "construction" | "industrial";
     description: string;
     client: string;
     completionDate: string;
     challenge: string;
}

export const projects: Project[] = [
     {
          id: 1,
          img: project1,
          label: "Commercial Electrical Wiring",
          category: "electrical",
          description: "Complete electrical system installation for a 5-story commercial building including power distribution, lighting, and backup systems.",
          client: "Greenfield Properties Ltd",
          completionDate: "January 2026",
          challenge: "Coordinating installation with ongoing construction while maintaining strict safety protocols.",
     },
     {
          id: 2,
          img: project2,
          label: "Industrial Switchgear Installation",
          category: "industrial",
          description: "High-voltage switchgear installation and commissioning for a manufacturing facility with redundant power systems.",
          client: "Kano Industrial Complex",
          completionDate: "December 2025",
          challenge: "Installing equipment without disrupting existing production operations.",
     },
     {
          id: 3,
          img: project3,
          label: "Residential Wiring Project",
          category: "electrical",
          description: "Modern electrical wiring system for a luxury residential estate with smart home integration capabilities.",
          client: "Private Client",
          completionDate: "November 2025",
          challenge: "Integrating traditional electrical systems with modern smart home technology.",
     },
     {
          id: 4,
          img: project4,
          label: "Transformer Substation Setup",
          category: "industrial",
          description: "Supply, installation, and commissioning of 500KVA transformer substation for industrial park.",
          client: "Northern Power Distribution",
          completionDate: "October 2025",
          challenge: "Meeting strict utility company standards and completing installation within tight deadline.",
     },
     {
          id: 5,
          img: project5,
          label: "Data Center Cabling",
          category: "electrical",
          description: "Structured cabling and network infrastructure for a Tier-2 data center facility.",
          client: "TechHub Nigeria",
          completionDate: "September 2025",
          challenge: "Ensuring zero downtime during migration from old infrastructure.",
     },
     {
          id: 6,
          img: project6,
          label: "Commercial Building Construction",
          category: "construction",
          description: "Ground-up construction of a 3-story office complex including all electrical and mechanical systems.",
          client: "Kano Business Center",
          completionDate: "August 2025",
          challenge: "Managing multiple trades and ensuring project completion within budget.",
     },
     {
          id: 7,
          img: project7,
          label: "Street Lighting Installation",
          category: "electrical",
          description: "Installation of energy-efficient LED street lighting system across 5km of urban roads.",
          client: "Kano State Government",
          completionDate: "July 2025",
          challenge: "Working on active roadways while minimizing traffic disruption.",
     },
     {
          id: 8,
          img: project8,
          label: "Solar Panel Installation",
          category: "electrical",
          description: "Rooftop solar panel installation with battery backup system for commercial facility.",
          client: "Eco-Friendly Enterprises",
          completionDate: "June 2025",
          challenge: "Designing system to handle variable power loads and maximize energy efficiency.",
     },
     {
          id: 9,
          img: project9,
          label: "High-Rise Construction",
          category: "construction",
          description: "Electrical and construction services for a 12-story residential tower including all utilities.",
          client: "Skyline Developers",
          completionDate: "May 2025",
          challenge: "Coordinating vertical construction logistics and ensuring safety at height.",
     },
];
