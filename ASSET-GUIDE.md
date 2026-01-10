# Asset Integration Guide

## 📸 Photos

### Hero Background

- **File:** `/public/hero-bg.jpg`
- **Recommended Size:** 1920x1080px
- **Format:** JPG (optimized for web)
- **Usage:** Uncomment lines 28-32 in `src/pages/index.astro`

### Photo Gallery

- **Folder:** `/public/photos/`
- **Naming:** `couple-1.jpg`, `couple-2.jpg`, etc.
- **Recommended Size:** 800x800px (square)
- **Format:** JPG or WebP
- **Count:** 8 placeholders ready
- **Usage:** Uncomment the `<img>` tags in the gallery section (lines ~185-280 in `index.astro`)

### Open Graph Share Image

- **File:** `/public/og-image.jpg`
- **Size:** 1200x630px (Facebook/Telegram standard)
- **Format:** JPG
- **Content:** Should include couple names, date, and decorative elements

## 🎵 Music

### Wedding Music File

- **File:** `/public/music/wedding-song.mp3`
- **Format:** MP3 (best browser compatibility)
- **Recommended:** Traditional Cambodian wedding music or instrumental
- **File Size:** Keep under 5MB for faster loading
- **Optional:** Add `.ogg` format for better compression

### Music Player Usage

- Fixed button at bottom-right corner
- Click to play/pause
- Loops automatically
- Gracefully handles autoplay restrictions

## 🗺️ Google Maps

### Current Setup

- Generic embed with placeholder coordinates
- Search query for "Koh Dach Village, Phnom Penh"

### To Update with Real Location

1. Go to [Google Maps](https://maps.google.com)
2. Find the exact venue location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace the src in `index.astro` (line ~295)

### Waze Deep Link

- Update the query parameter with the exact address
- Format: `https://waze.com/ul?q=EXACT_ADDRESS`

## 📁 Directory Structure

```
public/
├── photos/               # Gallery images (8 needed)
│   ├── couple-1.jpg
│   ├── couple-2.jpg
│   └── ...
├── music/
│   └── wedding-song.mp3  # Background music
├── hero-bg.jpg           # Hero section background
└── og-image.jpg          # Social media share image
```

## ✅ Quick Checklist

- [ ] Add 8 photos to `/public/photos/`
- [ ] Uncomment gallery `<img>` tags in `index.astro`
- [ ] Add hero background image to `/public/hero-bg.jpg`
- [ ] Uncomment hero background code (lines 28-32)
- [ ] Add music file to `/public/music/wedding-song.mp3`
- [ ] Create OG image at `/public/og-image.jpg`
- [ ] Update Google Maps embed with real coordinates
- [ ] Update Waze link with exact address

## 🎨 Image Optimization Tips

- Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images
- Convert large JPGs to WebP for better performance
- Ensure photos are properly oriented (EXIF data)
- Consider using progressive JPEGs for faster perceived loading

## 🚀 After Adding Assets

Run the development server to test:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```
