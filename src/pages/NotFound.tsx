import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <Layout>
      <SEO
        title="Page Not Found - Aura technical and general enterprises limited"
        description="The page you're looking for doesn't exist."
      />
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-heading font-bold text-accent">404</h1>
          <h2 className="text-h2 mt-4">Page Not Found</h2>
          <p className="text-body text-muted-foreground mt-3 leading-relaxed">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded font-heading font-semibold text-body hover:opacity-90 transition-opacity"
            >
              <Home size={18} />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border-2 border-border text-foreground px-6 py-3 rounded font-heading font-semibold text-body hover:bg-muted transition-colors"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
