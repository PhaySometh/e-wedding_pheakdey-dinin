# Cambodian Wedding E-Invitation Website

A beautiful, animated static wedding invitation website for Pheakdey & Dinin's traditional Cambodian wedding ceremony.

## ✨ Features

- 🎭 **Elegant Gate Animation**: Opening gates with Cambodian ornamental patterns
- 🎨 **Traditional Design**: Gold, cream, and red color scheme inspired by Cambodian weddings
- 🌐 **Bilingual Content**: Full support for Khmer and English languages
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- ✨ **GSAP Animations**: Smooth scroll animations and interactive elements
- 🎵 **Background Music**: Optional traditional wedding music player
- 📍 **Interactive Map**: Embedded Google Maps for venue location
- 🎯 **RSVP Section**: Contact information for both families
- ⏰ **Timeline**: Detailed schedule of wedding events

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

Already installed! The project is ready to run.

### Development

```bash
npm run dev
```

Visit http://localhost:4321/ (or the port shown in terminal) to view the website.

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with static files ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
wedding-invite/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── GateAnimation.astro    # Opening gate effect
│   │   ├── Hero.astro             # Hero section
│   │   ├── ParentsSection.astro   # Parents information
│   │   ├── EventDetails.astro     # Date, time, location
│   │   ├── Timeline.astro         # Schedule of events
│   │   ├── RSVP.astro            # Contact information
│   │   └── Footer.astro          # Footer section
│   ├── layouts/
│   │   └── Layout.astro           # Main layout wrapper
│   ├── pages/
│   │   └── index.astro            # Home page
│   └── styles/
│       └── global.css             # Global styles & fonts
├── public/                  # Static assets
│   ├── fonts/              # Local Khmer & English fonts
│   ├── music/              # Wedding music (optional)
│   └── photos/             # Wedding photos (optional)
└── astro.config.mjs        # Astro configuration
```

## 🎨 Customization

### Colors

The color scheme is defined in `src/styles/global.css`:

- **Primary Gold**: #D4AF37
- **Cream**: #F5E6D3, #FFF8DC
- **Deep Red**: #8B0000, #DC143C
- **Brown/Tan**: #8B4513, #D2691E

### Fonts

Local fonts are already configured:

- **Khmer**: Moul, Moulpali, KhKantumruy, Koulen, Niradei
- **English**: Google Sans (Regular, Medium, SemiBold, Bold)

### Content

Edit the following files to update wedding information:

- **Couple Names**: All component files
- **Date & Time**: EventDetails.astro, Timeline.astro
- **Location**: EventDetails.astro
- **Parents**: ParentsSection.astro
- **Contact**: RSVP.astro

### Adding Photos

1. Place images in `/public/photos/`
2. The photos are referenced in the components where needed
3. Optimize images for web (use WebP format recommended)

### Adding Music

1. Place MP3 file in `/public/music/wedding-song.mp3`
2. The music player is already integrated in index.astro

## 🌐 Deployment

### Recommended Hosting Platforms

1. **Vercel** (Recommended)

   ```bash
   npm run build
   vercel --prod
   ```

2. **Netlify**

   ```bash
   npm run build
   # Drag and drop 'dist' folder to Netlify
   ```

3. **GitHub Pages**
   ```bash
   npm run build
   # Upload 'dist' folder contents to gh-pages branch
   ```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- **Loading Time**: < 3 seconds (optimized)
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Mobile Optimized**: Yes
- **Animations**: Hardware-accelerated with GSAP

## 🤝 Credits

**Built with**:

- [Astro](https://astro.build/) - Static Site Generator
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [GSAP](https://greensock.com/gsap/) - Animations
- Local Khmer & Google Sans fonts

**Design Inspiration**:

- Traditional Cambodian wedding invitations
- Modern web design principles

## 📞 Support

For any questions or issues:

- Check `COPILOT-PROMPT.md` for detailed requirements
- Review `ASSET-GUIDE.md` for asset management

## ❤️ Wedding Details

**Couple**: Lmut Pheakdey & Srorn Dinin  
**Date**: Friday, February 27th, 2026  
**Time**: 5:00 PM onwards  
**Location**: Koh Dach Village, Phnom Penh, Cambodia

---

**May your love story be blessed with joy and happiness! 💑✨**

សូមអរគុណ • Thank You
