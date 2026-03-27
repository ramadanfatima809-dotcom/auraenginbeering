// Google Analytics helper functions
// Uncomment and configure when GA is set up

declare global {
     interface Window {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          gtag?: (...args: any[]) => void;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          dataLayer?: any[];
     }
}

export const pageview = (url: string) => {
     if (typeof window.gtag !== 'undefined') {
          window.gtag('config', 'G-XXXXXXXXXX', {
               page_path: url,
          });
     }
};

export const event = ({ action, category, label, value }: {
     action: string;
     category: string;
     label?: string;
     value?: number;
}) => {
     if (typeof window.gtag !== 'undefined') {
          window.gtag('event', action, {
               event_category: category,
               event_label: label,
               value: value,
          });
     }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
     event({
          action: 'submit',
          category: 'Form',
          label: formName,
     });
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
     event({
          action: 'click',
          category: 'Button',
          label: buttonName,
     });
};

// Track project filter usage
export const trackProjectFilter = (category: string) => {
     event({
          action: 'filter',
          category: 'Projects',
          label: category,
     });
};

// Track service quote requests
export const trackQuoteRequest = (service: string) => {
     event({
          action: 'request_quote',
          category: 'Services',
          label: service,
     });
};
