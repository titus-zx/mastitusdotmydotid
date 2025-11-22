# Personal Website

A modern, responsive single-page personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

✅ **Responsive Design** - Fully responsive for desktop and mobile devices
✅ **Burger Menu** - Mobile-friendly navigation with animated burger menu
✅ **Markdown Support** - Content rendered from Markdown using react-markdown
✅ **Single Page** - Smooth scrolling single-page application
✅ **Static Export** - Pre-rendered static HTML for fast loading
✅ **Dark Mode Support** - Automatic dark mode support
✅ **Modern Stack** - Next.js 14, TypeScript, Tailwind CSS

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
```

This will generate a static export in the `out` directory.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind configuration
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Main page component
├── components/
│   ├── Navigation.tsx    # Responsive navigation with burger menu
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section with Markdown content
│   ├── Projects.tsx      # Projects section with Markdown descriptions
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer component
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Customization

### Update Content

Edit the components in the `components/` directory to customize your content:

- **About Section**: Edit `components/About.tsx` - supports Markdown formatting
- **Projects**: Edit `components/Projects.tsx` - add/remove projects with Markdown descriptions
- **Contact**: Edit `components/Contact.tsx` - customize form fields

### Markdown Features

The website supports GitHub Flavored Markdown including:

- **Bold** and *italic* text
- Headers (H1-H6)
- Lists (ordered and unordered)
- Links
- Code blocks and inline code
- Blockquotes
- And more!

### Styling

- Edit `app/globals.css` to customize global styles
- Edit `tailwind.config.js` to customize Tailwind theme
- Modify component classes to adjust styling

## Technologies Used

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **react-markdown** - Markdown renderer for React
- **remark-gfm** - GitHub Flavored Markdown support

## Deployment

This website is configured as a static export and can be deployed to:

- **Vercel** - Connect your GitHub repo and deploy automatically
- **Netlify** - Deploy the `out` directory after running `npm run build`
- **GitHub Pages** - Upload the contents of `out` directory
- **Any static hosting** - Upload the `out` directory

## License

MIT License - feel free to use this template for your own portfolio!
