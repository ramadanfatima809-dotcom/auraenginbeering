interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-h1 md:text-hero">{title}</h1>
        {subtitle && (
          <p className="text-body-lg mt-4 opacity-80 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
