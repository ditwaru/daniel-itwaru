# Modern Website

A beautiful, modern website built with Next.js 15, TypeScript, and Tailwind CSS. This project features a landing page, about page, and portfolio page with reusable components designed for easy customization and CMS integration.

## Features

- **Modern Design**: Clean, responsive design with beautiful gradients and modern UI elements
- **Reusable Components**: Built with modular, reusable components using Tailwind CSS
- **TypeScript**: Full TypeScript support for better development experience
- **Server-Side Rendering**: Optimized for performance with Next.js 15
- **Mobile Responsive**: Fully responsive design that works on all devices
- **CMS Ready**: Structured for easy integration with remote CMS systems

## Pages

### Landing Page (`/`)

- Hero section with call-to-action buttons
- Features showcase with icons
- Call-to-action section

### About Page (`/about`)

- Company story and mission
- Core values presentation
- Team member profiles

### Portfolio Page (`/portfolio`)

- Project showcase grid
- Category filtering (ready for implementation)
- Project details with technologies
- Statistics section

## Components

### UI Components

- **Button**: Versatile button component with multiple variants and sizes
- **Card**: Flexible card component with customizable padding

### Layout Components

- **Header**: Navigation header with mobile menu
- **Footer**: Comprehensive footer with links and information

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## CMS Integration

The website is structured to easily integrate with remote CMS systems. The data layer is centralized in `app/lib/data.ts` where you can:

1. Replace static data with API calls to your CMS
2. Implement data fetching functions for each page
3. Add environment variables for CMS configuration

### Example CMS Integration

```typescript
// In app/lib/data.ts
export const getProjectsFromCMS = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${process.env.CMS_API_URL}/projects`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects from CMS:", error);
    return [];
  }
};
```

### Environment Variables

Create a `.env.local` file for your CMS configuration:

```env
CMS_API_URL=https://your-cms.com/api
CMS_API_KEY=your-api-key
```

## Customization

### Styling

- All styling is done with Tailwind CSS classes
- Color schemes can be easily modified in the component files
- Gradients and backgrounds can be adjusted in the section components

### Content

- Update text content in the page components
- Modify the data structure in `app/lib/data.ts`
- Add new pages by creating new directories in `app/`

### Branding

- Update the brand name in `app/components/layout/Header.tsx`
- Modify the logo and branding elements
- Update the footer information

## Project Structure

```
website/
├── app/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   └── layout/       # Layout components
│   ├── lib/              # Data utilities and helpers
│   ├── about/            # About page
│   ├── portfolio/        # Portfolio page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── public/               # Static assets
├── package.json          # Dependencies
└── README.md            # This file
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React 19**: Latest React features
- **ESLint**: Code quality and consistency

## Performance Features

- **Turbopack**: Fast development builds
- **Server Components**: Optimized rendering
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based code splitting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue in the repository or contact the development team.
