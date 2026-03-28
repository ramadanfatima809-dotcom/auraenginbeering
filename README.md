# AURA Technical Engineering Company Website

Professional website for AURA Technical Engineering Company - a leading provider of electrical and construction services in Kano, Nigeria.

## 🌟 Features

- **Modern Design** - Clean, professional interface with smooth animations
- **Fully Responsive** - Mobile-first design that works on all devices
- **SEO Optimized** - Complete meta tags, structured data, and sitemap
- **Contact Form** - Integrated with EmailJS for reliable message delivery
- **Project Portfolio** - Filterable showcase of completed projects
- **Fast Performance** - Optimized images and lazy loading
- **Accessible** - WCAG 2.1 compliant with keyboard navigation support

## 📁 Project Structure

```
auraengineering/
├── public/
│   ├── sitemap.xml          # SEO sitemap
│   └── robots.txt           # Search engine directives
├── src/
│   ├── assets/              # Images and media files
│   ├── components/          # Reusable React components
│   │   ├── ui/             # shadcn/ui component library
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Homepage
│   │   ├── About.tsx       # About page
│   │   ├── Services.tsx    # Services page
│   │   ├── Projects.tsx    # Projects portfolio
│   │   └── Contact.tsx     # Contact page
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Root component
│   └── main.tsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd auraengineering
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## ⚙️ Configuration

### Email Service Setup (EmailJS)

The contact form uses EmailJS for email delivery. To configure:

1. **Create an account** at [emailjs.com](https://emailjs.com)

2. **Set up email service**
   - Add your email provider (Gmail, Outlook, etc.)
   - Create an email template
   - Get your credentials

3. **Update configuration**
   
   Edit `src/utils/emailService.ts`:
   ```typescript
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   ```

### Google Analytics Setup

1. **Get GA4 Measurement ID** from [analytics.google.com](https://analytics.google.com)

2. **Update index.html**
   
   Uncomment the Google Analytics section and replace `G-XXXXXXXXXX` with your ID:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

3. **Update analytics utility**
   
   Edit `src/utils/analytics.ts` and replace the measurement ID.

### Domain Configuration

Update your domain in these files:
- `src/components/SEO.tsx` - Default URL
- `src/components/StructuredData.tsx` - Organization URLs
- `public/sitemap.xml` - All URL entries

## 🎨 Customization

### Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary: 220 37% 19%;    /* Dark blue */
  --accent: 207 54% 41%;     /* Blue accent */
  /* ... other colors */
}
```

### Content

- **Homepage**: `src/pages/Index.tsx`
- **About**: `src/pages/About.tsx`
- **Services**: `src/pages/Services.tsx`
- **Projects**: `src/pages/Projects.tsx`
- **Contact Info**: `src/components/Footer.tsx`

### Images

1. Place images in `src/assets/`
2. Import in your component:
   ```typescript
   import myImage from "@/assets/myimage.jpg";
   ```
3. Use in JSX:
   ```jsx
   <img src={myImage} alt="Description" />
   ```

## 🏗️ Building for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Test production build locally**
   ```bash
   npm run preview
   ```

3. **Deploy**
   
   Upload the `dist` folder to your hosting provider.

## 🚀 Deployment

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Manual Deployment

1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui)
- **Routing**: React Router
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Email**: EmailJS
- **SEO**: React Helmet Async

## 📱 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security

- Input validation on all forms
- XSS protection (React default)
- HTTPS recommended for production
- Environment variables for sensitive data

## 📊 Performance

- Lazy loading for images
- Code splitting
- Optimized bundle size
- Fast page transitions
- Minimal re-renders

## ♿ Accessibility

- WCAG 2.1 compliant structure
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels
- Semantic HTML

## 📞 Contact Information

**AURA Technical Engineering Company**

- **Address**: Plot 14/27 Naibawa Along NNPC pipeline, Kumbotso LGA, Kano State, Nigeria
- **Phone**: 0803 268 5802, 0802 236 2816
- **Email**: nuhuramadam@yahoo.com

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For technical support or questions about the website, please contact the development team.

---

**Built with ❤️ for AURA Technical Engineering Company**
