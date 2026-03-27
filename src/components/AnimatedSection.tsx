import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
     children: ReactNode;
     delay?: number;
     className?: string;
}

const AnimatedSection = ({ children, delay = 0, className = "" }: AnimatedSectionProps) => {
     const [isVisible, setIsVisible] = useState(false);
     const ref = useRef<HTMLDivElement>(null);

     useEffect(() => {
          const observer = new IntersectionObserver(
               ([entry]) => {
                    if (entry.isIntersecting) {
                         setTimeout(() => setIsVisible(true), delay * 1000);
                         observer.disconnect();
                    }
               },
               { threshold: 0.1 }
          );

          if (ref.current) {
               observer.observe(ref.current);
          }

          return () => observer.disconnect();
     }, [delay]);

     return (
          <div
               ref={ref}
               className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    } ${className}`}
          >
               {children}
          </div>
     );
};

export default AnimatedSection;
