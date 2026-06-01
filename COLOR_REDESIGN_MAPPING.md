# Gardening Thyme Website - Color Redesign Mapping

## New Color Palette

| Color Name | Hex Code | Usage | Font |
|------------|----------|-------|------|
| **Dark Charcoal** | #252827 | H2, H3, Body Text | Raleway |
| **Sage Green** | #909c98 | Navbar, Accents, Buttons | - |
| **Forest Green** | #314528 | H1 Text | Playfair Display |
| **Light Cream** | #efebe2 | Background | - |
| **Sage Dark** | #7a8682 | Hover states for Sage | - |

## Color Class Mapping (Old → New)

### Text Colors
- `text-teal-900` → `text-forest-green` (H1 headings)
- `text-teal-800` → `text-charcoal` (H2, H3 headings)
- `text-teal-700` → `text-charcoal` (Subheadings, links)
- `text-teal-600` → `text-sage` (Icons, accents, checkmarks)
- `text-teal-200` → `text-cream` (Light text on dark backgrounds)
- `text-teal-300` → `text-sage` (Link hovers on dark backgrounds)
- `hover:text-teal-300` → `hover:text-sage`
- `hover:text-teal-800` → `hover:text-charcoal`

### Background Colors
- `bg-teal-50` → `bg-cream` (Light sections)
- `bg-teal-100` → `bg-cream` (Very light backgrounds, badges)
- `bg-[#003333]` → `bg-forest` (Dark hero sections)
- `from-teal-50` → `from-cream` (Gradients)
- `to-white` → maintain as is or `to-cream`

### Button Classes
- `btn-primary-teal` → `btn-primary-sage`
- `btn-primary-teal-hover` → `btn-primary-sage-hover`
- `hover:btn-primary-teal-hover` → `hover:btn-primary-sage-hover`

### Border Colors
- `border-teal-700` → `border-sage`
- `border-teal-200` → `border-sage`
- `border-teal-100` → `border-sage`

### Badge/Tag Styling
- `bg-teal-100 text-teal-800` → `bg-sage/20 text-charcoal` or `bg-cream text-charcoal border border-sage`

## Implementation Status

### Core Files
- [x] `src/app/globals.css` - Updated with new color system
- [x] `tailwind.config.js` - Added custom colors
- [x] `src/components/Navigation.jsx` - Updated navbar with sage green
- [x] `src/components/HeroSection.jsx` - Updated hero section

### Components to Update
- [ ] `src/components/Footer.jsx`
- [ ] `src/components/ServicesSection.jsx`
- [ ] `src/components/FeaturedProjectSection.jsx`
- [ ] `src/components/BlogCard.jsx`
- [ ] `src/components/CTASection.jsx`
- [ ] `src/components/BlogModal.jsx`
- [ ] `src/components/AboutSection.jsx`
- [ ] `src/components/TestimonialsSection.jsx`

### Page Components
- [ ] `src/app/blog/BlogClient.jsx`
- [ ] `src/app/blog/[slug]/page.jsx`
- [ ] `src/app/contact/ContactClient.jsx`
- [ ] `src/app/portfolio/page.jsx`
- [ ] `src/app/garden-design/GardenDesignClient.jsx`
- [ ] `src/app/garden-design/[location]/GardenDesignLocationClient.jsx`
- [ ] `src/app/groundskeeping/GroundskeepingClient.jsx`
- [ ] `src/app/quarterly-cleanups/QuarterlyCleanupClient.jsx`
- [ ] `src/app/property-enhancement/PropertyEnhancementClient.jsx`
- [ ] `src/app/permaculture-lawns/PermacultureClient.jsx`
- [ ] `src/app/vegetable-garden/VegetableGardenClient.jsx`
- [ ] `src/app/privacy-policy/page.jsx`
- [ ] `src/app/admin/indexing/page.jsx`

## Notes
- All H1 elements should use forest green (#314528) with Playfair Display font
- All H2, H3, and body text should use dark charcoal (#252827) with Raleway font
- Sage green (#909c98) is used for all accent elements (navbar, buttons, links)
- Background is light cream (#efebe2) throughout the site
- Maintain accessibility standards with proper contrast ratios
