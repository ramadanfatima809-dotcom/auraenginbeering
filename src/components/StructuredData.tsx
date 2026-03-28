import { Helmet } from "react-helmet-async";

const StructuredData = () => {
     const organizationSchema = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AURA Technical Engineering Company",
          "description": "Professional electrical and construction services in Kano, Nigeria",
          "url": "https://auraengineering.com",
          "logo": "https://auraengineering.com/placeholder.svg",
          "address": {
               "@type": "PostalAddress",
               "streetAddress": "Plot 14/27 Naibawa Along NNPC pipeline",
               "addressLocality": "Kumbotso",
               "addressRegion": "Kano State",
               "addressCountry": "NG"
          },
          "contactPoint": {
               "@type": "ContactPoint",
               "telephone": "+234-803-268-5802",
               "contactType": "customer service",
               "areaServed": "NG",
               "availableLanguage": ["en", "ha"]
          },
          "sameAs": []
     };

     const localBusinessSchema = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AURA Technical Engineering Company",
          "image": "https://auraengineering.com/placeholder.svg",
          "priceRange": "$$",
          "address": {
               "@type": "PostalAddress",
               "streetAddress": "Plot 14/27 Naibawa Along NNPC pipeline",
               "addressLocality": "Kumbotso",
               "addressRegion": "Kano State",
               "postalCode": "",
               "addressCountry": "NG"
          },
          "telephone": "+234-803-268-5802",
          "email": "nuhuramadam@yahoo.com",
          "openingHours": "Mo-Fr 08:00-17:00",
          "geo": {
               "@type": "GeoCoordinates",
               "latitude": "12.0022",
               "longitude": "8.5919"
          }
     };

     return (
          <Helmet>
               <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
               </script>
               <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
               </script>
          </Helmet>
     );
};

export default StructuredData;
