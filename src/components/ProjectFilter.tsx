import { useState } from "react";

export type ProjectCategory = "all" | "electrical" | "construction" | "industrial";

interface ProjectFilterProps {
     activeCategory: ProjectCategory;
     onCategoryChange: (category: ProjectCategory) => void;
}

const categories: { value: ProjectCategory; label: string }[] = [
     { value: "all", label: "All Projects" },
     { value: "electrical", label: "Electrical" },
     { value: "construction", label: "Construction" },
     { value: "industrial", label: "Industrial" },
];

const ProjectFilter = ({ activeCategory, onCategoryChange }: ProjectFilterProps) => {
     return (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
               {categories.map((cat) => (
                    <button
                         key={cat.value}
                         onClick={() => onCategoryChange(cat.value)}
                         className={`px-6 py-2.5 rounded font-heading font-semibold text-sm transition-all ${activeCategory === cat.value
                                   ? "bg-accent text-accent-foreground shadow-md"
                                   : "bg-card border border-border text-foreground hover:border-accent"
                              }`}
                    >
                         {cat.label}
                    </button>
               ))}
          </div>
     );
};

export default ProjectFilter;
