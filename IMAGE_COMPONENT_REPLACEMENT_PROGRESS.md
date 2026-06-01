# ImageComponent Replacement Progress - Critical LCP Fix

**Goal:** Replace all 29 ImageComponent wrapper usages with direct Next.js Image components to eliminate 15+ seconds of JavaScript overhead.

**Target:** LCP ≤ 2,010 ms → Performance Score 90+

---

## ✅ Completed (6/29 - 21%)

### Components Fixed:
1. ✅ **ServicesSection.jsx** (3 instances) - All replaced with direct Image
2. ✅ **FeaturedProjectSection.jsx** (1 instance) - Replaced with direct Image  
3. ✅ **BlogCard.jsx** (1 instance) - Replaced with direct Image
4. ✅ **HeroSection.jsx** - Already using direct Image (added loading="eager")

---

## 🚧 Remaining (23/29 - 79%)

### High Priority (Homepage/LCP Critical):
- [ ] **BlogModal.jsx** (1 instance)

### Client Components (15+ instances):
- [ ] **GroundskeepingClient.jsx** (4 instances)
- [ ] **QuarterlyCleanupClient.jsx** (1 instance)
- [ ] **PropertyEnhancementClient.jsx** (1 instance)
- [ ] **GardenDesignClient.jsx** (1 instance)
- [ ] **GardenDesignLocationClient.jsx** (1 instance)

### Content Pages:
- [ ] **Portfolio page.jsx** (multiple instances)
- [ ] **Blog [slug] page.jsx** (1 instance)

---

## 🔧 Replacement Pattern

**FROM (Slow - ImageComponent wrapper):**
```jsx
<ImageComponent
  src="https://res.cloudinary.com/..."
  alt="..."
  priority={true}
  sizes="..."
  objectFit="cover"
  aspectRatio="16/9"
/>
```

**TO (Fast - Direct Next.js Image):**
```jsx
<Image
  src="https://res.cloudinary.com/..."
  alt="..."
  fill
  priority={true}  // For LCP images
  loading="eager"  // For LCP images
  sizes="..."
  className="object-cover"
  quality={85}
/>
```

---

## 📊 Performance Impact

**Before:** 17.8s LCP (ImageComponent wrapper overhead)  
**Expected After:** <2,010ms LCP (direct optimized images)  
**Estimated Improvement:** ~15 seconds faster!

---

## 🎯 Next Steps

Continue systematic replacement of remaining 23 ImageComponent usages across all client components and pages.
