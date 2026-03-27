import { Helmet } from "react-helmet-async";

interface SEOProps {
     title?: string;
     description?: string;
     keywords?: string;
     image?: string;
     url?: string;
}

const SEO = ({
     title = "AURA Engineering Company - Professional Electrical & Construction Services",
     description = "Leading provider of electrical installation, building wiring, industrial electrical works, transformer installation, and construction services in Kano, Nigeria.",
     keywords = "electrical installation, building wiring, industrial electrical, transformer installation, construction services, engineering company, Kano Nigeria",
     image = "/placeholder.svg",
     url = "https://auraengineering.com",
}: SEOProps) => {
     return (
          <Helmet>
               <title>{title}</title>
               <meta name="description" content={description} />
               <meta name="keywords" content={keywords} />

               {/* Open Graph */}
               <meta property="og:title" content={title} />
               <meta property="og:description" content={description} />
               <meta property="og:image" content={image} />
               <meta property="og:url" content={url} />
               <meta property="og:type" content="website" />

               {/* Twitter Card */}
               <meta name="twitter:card" content="summary_large_image" />
               <meta name="twitter:title" content={title} />
               <meta name="twitter:description" content={description} />
               <meta name="twitter:image" content={image} />

               {/* Additional SEO */}
               <link rel="canonical" href={url} />
               <meta name="robots" content="index, follow" />
               <meta name="author" content="AURA Engineering Company" />
          </Helmet>
     );
};

export default SEO;
