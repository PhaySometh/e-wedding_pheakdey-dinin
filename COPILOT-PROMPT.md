# Cambodian Wedding E-Invitation Website - Complete Build Prompt

## Project Overview

Create a beautiful, animated static website for a traditional Cambodian wedding e-invitation. The website should replicate the elegance of physical Cambodian wedding invitations with modern web animations and interactions.

## Technical Stack (Already Set Up)

- **Framework**: Astro (static site)
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP (already installed)
- **Fonts**: Local fonts stored in `/public/fonts/` (see font list below)

## Available Local Fonts

The following fonts are already downloaded in `/public/fonts/`:

- **Khmer Fonts**: Moul.ttf, Moulpali.ttf, KhKantumruy-Regular.ttf, KhKantumruy-Bold.ttf, KhKantumruy-Light.ttf, Koulen.ttf, Niradei-Bold.ttf
- **English Fonts**: GoogleSans-Regular.ttf, GoogleSans-Medium.ttf, GoogleSans-SemiBold.ttf, GoogleSans-Bold.ttf, and italic variants

**IMPORTANT**: Use `@font-face` declarations to import these local fonts. Do NOT use Google Fonts CDN.

## Wedding Information

**Couple**:

- Khmer: ល្មុត ភក្តី (Groom) & ស្រ៊ន ឌីនីន (Bride)
- English: Lmut Pheakdey & Srorn Dinin

**Parents**:

- Groom's Parents: Mr. LMUT SOMKA (ឡ្មុត សុខ សម្កា) & Mrs. SUK SENGTEANG (ឈុុន សេង ធាង)
- Bride's Parents: Mr. SET NARITH (ស៊ែត ណារិទ្ធ) & Mrs. SIV SITHA (ស៊ីវ សុីធា)

**Event Details**:

- **Date**: Friday, February 27th, 2026 (ថ្ងៃសុក្រ ទី២៧ ខែកុម្ភៈ ឆ្នាំ២០២៦)
- **Time**: 5:00 PM (ម៉ោង ៥:០០នាទីល្ងាច) onwards
- **Location**: At the bride's house, Koh Dach Village, Sang Kat Koh Dach, Khan Chroy Changvar, Phnom Penh
  - Khmer: ឯទេវដ្ឋាន កន្លែងអធិកាយ សង្កាត់កោះដាច់ ខណ្ឌជ្រោយចង្វារ រាជធានីភ្នំពេញ

## Design Requirements

### 1. Color Scheme (Traditional Cambodian Wedding)

- **Primary Gold**: #D4AF37 (royal gold)
- **Accent Gold**: Various shades from #B8860B to #FFD700
- **Cream/Beige**: #F5E6D3, #FFF8DC (background)
- **Deep Red Accents**: #8B0000, #DC143C (traditional wedding red)
- **Brown/Tan**: #8B4513, #D2691E (earthy tones)
- **White**: For clean backgrounds and text contrast

### 2. Typography Strategy

**Mix these fonts thoughtfully for visual hierarchy:**

**For Khmer Text:**

- **Moul**: Main headings, couple names (ornate, traditional)
- **Kantumruy Pro (Regular/Bold)**: Body text, paragraphs, details
- **Niradei Bold**: Subheadings, important information
- **Koulen**: Optional for emphasis or decorative elements

**For English Text:**

- **Google Sans Bold/SemiBold**: Main headings
- **Google Sans Medium**: Subheadings
- **Google Sans Regular**: Body text, details

**Implementation**:

```css
/* Add @font-face declarations for all fonts in global.css */
@font-face {
  font-family: "Moul";
  src: url("/fonts/Moul.ttf") format("truetype");
}
/* ... repeat for all fonts */
```

### 3. Layout Sections (In Order)

#### A. Opening Animation (Gate Effect)

- Two ornate gate panels that split open horizontally
- Each gate should have:
  - Traditional Cambodian ornamental patterns (SVG or CSS)
  - Gold filigree borders
  - Monogram or initials (ភស or LS) in the center of each panel
  - Smooth GSAP animation: gates open after 1 second, reveal main content
- Behind gates: subtle glow/light effect
- Duration: 2-3 seconds total

#### B. Hero Section

- **Background**: Subtle Cambodian pattern overlay (low opacity)
- **Center Content**:
  - "Wedding Invitation" in stylized Khmer (សំពិសមង្គលការ)
  - Couple names in large, elegant Moul font (Khmer)
  - Couple names in English (Google Sans)
  - Monogram/Logo between names (gold ornamental design)
  - Date in both languages
  - Scroll indicator (animated arrow or text)

#### C. Parents Section

- "Request the pleasure of your presence..." text in English
- "Parents of the Groom" heading with both names (Khmer + English)
- "Parents of the Bride" heading with both names (Khmer + English)
- Traditional Cambodian decorative divider between sections
- Respectful, formal layout with gold accents

#### D. Event Details Section

- Two-column or card layout:
  - **Ceremony Details**:
    - Date & time (both languages)
    - Location (both languages)
    - Traditional ceremony description
  - **Reception Details**:
    - Time onwards (ម៉ោង ៥:០០នាទីល្ងាច ជាបន្តបន្ទាប់)
    - Venue details
- Icons or small illustrations for each detail
- Embed interactive map (Google Maps) for location

#### E. Schedule/Timeline Section

- Vertical timeline of events throughout the day
- Khmer and English for each time slot:
  - Morning: Traditional ceremonies (if applicable)
  - 5:00 PM: Main ceremony begins
  - 6:00 PM: Reception/dinner
  - Evening: Entertainment, dancing
- Animated reveal as user scrolls

#### F. Gallery/Photo Preview (Optional)

- Small decorative section with placeholder for engagement photos
- Ornate gold frames around images
- Elegant carousel or grid

#### G. RSVP/Contact Section

- QR code for location/digital RSVP
- Contact information for both families
- "We look forward to celebrating with you" message in both languages
- Phone numbers with decorative icons

#### H. Footer

- Thank you message: "សូមអរគុណ! / Thank You!"
- Small decorative Cambodian motif
- Date reminder

### 4. Animation Requirements (GSAP)

**Gate Opening Animation**:

```javascript
// Split gates horizontally with elegant timing
gsap.to("#gate-left", {
  x: "-100%",
  duration: 1.5,
  ease: "power2.inOut",
  delay: 0.5,
});
gsap.to("#gate-right", {
  x: "100%",
  duration: 1.5,
  ease: "power2.inOut",
  delay: 0.5,
});
```

**Scroll Animations**:

- Fade in sections as they enter viewport
- Parallax effects on background patterns
- Floating/gentle bounce on decorative elements
- Stagger animations for timeline items

**Interactive Elements**:

- Hover effects on cards with gentle lift and shadow
- Smooth transitions on all buttons
- Pulse animation on important dates/times

### 5. Decorative Elements

**Cambodian Traditional Motifs**:

- Use SVG for scalable ornamental designs
- Patterns inspired by Angkor Wat architecture
- Floral motifs (lotus flowers - sacred in Khmer culture)
- Traditional wedding symbols
- Gold filigree borders and dividers

**Visual Elements**:

- Subtle curtain/draping effects (like physical invitation)
- Gold embossed text effects (CSS text-shadow)
- Elegant dividers between sections
- Corner decorations (ornate brackets)

### 6. Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px+
- Stack sections vertically on mobile
- Adjust font sizes appropriately
- Ensure gate animation works well on mobile (maybe slide from top/bottom instead of left/right)

### 7. Performance & Best Practices

- Optimize all images (use WebP format)
- Lazy load images below the fold
- Preload critical fonts
- Minify CSS and JS for production
- Ensure fast loading (target <3 seconds)
- Add loading animation if needed

### 8. Additional Features

**Background Music** (Optional but traditional):

- Add a music player toggle button (bottom right)
- Use traditional Cambodian wedding music (MP3)
- Autoplay disabled (require user interaction)
- Elegant control design

**Language Toggle** (Optional):

- Button to switch between Khmer-primary and English-primary views
- Smooth transition between languages

**Download/Share**:

- Button to save date to calendar
- Share buttons for social media
- QR code for easy sharing

## File Structure

```
wedding-invite/
├── src/
│   ├── components/
│   │   ├── GateAnimation.astro      # Opening gate component
│   │   ├── Hero.astro               # Hero section
│   │   ├── ParentsSection.astro     # Parents section
│   │   ├── EventDetails.astro       # Event details
│   │   ├── Timeline.astro           # Schedule
│   │   ├── RSVP.astro              # Contact/RSVP section
│   │   └── Footer.astro            # Footer
│   ├── layouts/
│   │   └── Layout.astro            # Main layout
│   ├── pages/
│   │   └── index.astro             # Home page
│   └── styles/
│       └── global.css              # Global styles, font imports
├── public/
│   ├── fonts/                      # Local fonts (already exists)
│   ├── music/                      # Wedding music
│   └── photos/                     # Wedding photos
└── astro.config.mjs
```

## Reference Website

Inspired by: https://daranika.my.canva.site/wedding-invitation

- Study the elegant transitions
- Note the balance of text and imagery
- Observe the scrolling experience
- Learn from the color harmony

## Key Implementation Notes

1. **Start with the gate animation** - this sets the tone for the entire experience
2. **Import all fonts first** in global.css using @font-face
3. **Create a design system** with Tailwind custom classes for consistent gold colors, shadows, and borders
4. **Build section by section** - ensure each looks perfect before moving to next
5. **Test animations** thoroughly - they should be smooth, not janky
6. **Bilingual content** should be balanced - not English-heavy or Khmer-heavy
7. **Traditional meets modern** - keep traditional aesthetic but with modern web standards

## Success Criteria

✅ Gate animation is smooth and elegant
✅ All text is displayed in both Khmer and English
✅ Fonts are properly loaded (Moul for Khmer headings, Google Sans for English)
✅ Color scheme matches traditional Cambodian wedding aesthetic (gold, cream, red)
✅ Responsive on all devices
✅ Smooth scroll animations
✅ All wedding information is clearly displayed
✅ Decorative elements enhance (not overwhelm) the content
✅ Website loads quickly (<3 seconds)
✅ Professional, elegant, celebratory feel

## Final Notes

This is a special occasion website - every detail matters. The goal is to create a digital experience that honors Cambodian wedding traditions while providing a modern, accessible, and shareable invitation. The website should feel luxurious, elegant, and joyful.

**Balance is key**: Traditional design + Modern web tech + Excellent UX = Perfect wedding invitation website.
