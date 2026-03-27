// Google Analytics utility
// To enable: Add your GA4 Measurement ID and uncomment the script in index.html

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID

declare global {
     interface Window {
          gtag?: (...args: unknown[]) => void;
     }
}

// Track page views
export const pageview = (url: string) => {
     if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('config', GA_MEASUREMENT_ID, {
               page_path: url,
          });
     }
};

// Track custom events
export const event = ({ action, category, label, value }: {
     action: string;
     category: string;
     label?: string;
     value?: number;
}) => {
     if (typeof window !== 'undefined' && window.gtag) {
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
          action: 'form_submission',
          category: 'engagement',
          label: formName,
     });
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
     event({
          action: 'button_click',
          category: 'engagement',
          label: buttonName,
     });
};
