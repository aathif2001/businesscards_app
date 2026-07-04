# Interior Design Agency Template — Variable Mapping & Color Palette

## Template Structure Overview

The `sample6vite2next` template is composed of **15 components** assembled in [PageView.tsx](file:///c:/Users/Aathif%20Ahamed/Desktop/BUSINESSCARDS.LK/Websites/businesscards_app/components/templates/sample6vite2next/PageView.tsx). Each maps cleanly to an interior design agency context.

---

## Variables to Change Per Component

### 🏷️ Brand / Contact Constants
*(currently in `BannerCarousel.tsx` and `Header.tsx` — ideally moved to a shared config)*

| Variable | Current (Building Supplies) | Interior Design Equivalent |
|---|---|---|
| `PHONE` | `+94112345678` | e.g. `+94 77 123 4567` |
| `EMAIL` | `info@colombobs.lk` | e.g. `hello@studiova.lk` |
| `WHATSAPP` | `94112345678` | e.g. `94771234567` |
| Logo initials | `CBS` | e.g. `SVA` |
| Brand line 1 | `Colombo Building` | e.g. `Studio VA` |
| Brand line 2 (accent) | `Supplies` | e.g. `Interiors` |

---

### 🖼️ BannerCarousel — `slides[]`
Each slide has: `url`, `tag`, `title`, `description`

| Field | Current theme | Interior Design |
|---|---|---|
| `url` | Construction site photos | Styled living rooms, luxury kitchens, bedrooms |
| `tag` | "Active Project", "Completed", "Bulk Delivery" | "Residential", "Completed", "Commercial", "Featured" |
| `title` | Building project names | Room/project names e.g. "Modern Minimalist Living,\nColombo 7" |
| `description` | Concrete supply details | Design brief summaries |

---

### 🦸 HeroSection
| Variable | Current | Interior Design |
|---|---|---|
| Badge label | "Premium Building Materials" | "Award-Winning Interior Design" |
| `<h1>` text | "Your Trusted Source for Quality Building Supplies" | e.g. "We Design Spaces That\nTell Your Story" |
| Body text | Construction delivery copy | Tagline about bespoke interiors, luxury living |
| CTA 1 label | "Explore Our Products" | "View Our Portfolio" |
| CTA 1 `href` | `#products` | `#portfolio` or `#services` |
| CTA 2 label | "Request a Quote" | "Book a Consultation" |
| Trust badge 1 | "4.9/5 Customer Rating" | "4.9/5 Client Rating" |
| Trust badge 2 | "208+ Projects Delivered" | "120+ Spaces Designed" |
| Trust badge 3 | "Trusted Since 1989" | "Est. 2010" / "15+ Years" |

---

### 🗂️ CoreOfferings — `offerings[]`
Each card: `icon`, `title`, `description`, `tag`

| Lucide Icon | Current offering | Interior Design Service |
|---|---|---|
| `Sofa` | Ready Mix Concrete | **Living Room Design** |
| `BedDouble` | Aggregate & Sand | **Bedroom & Suite Design** |
| `ChefHat` | Bulk Delivery | **Kitchen & Dining Design** |
| `Building2` | Construction Tools | **Commercial Interiors** |
| `Paintbrush` | Waterproofing Solutions | **Color & Material Consulting** |
| `Package` | Building Materials | **Furniture & Decor Sourcing** |

> CTA buttons: "View" (opens gallery) stays the same; "Download Pricing" → "Download Brochure" or "Request Pricing"

---

### 📊 StatsSection — `stats[]`
Each stat: `icon`, `value`, `label`, `sub`

| Icon | Current | Interior Design |
|---|---|---|
| `Award` | 208+ Projects Completed | 120+ Spaces Designed |
| `Users` | 3,400+ Happy Clients | 850+ Happy Clients |
| `Clock` | 35+ Years of Experience | 15+ Years of Experience |
| `ThumbsUp` | 4.9/5 Customer Rating | 4.9/5 Client Rating |

Section eyebrow: "Trusted For Decades" → "Our Achievements"  
Section heading: "Numbers That Speak" → stays or "By the Numbers"

---

### 🤝 TrustedSection (Testimonials) — `testimonials[]`
Each: `name`, `role`, `rating`, `text`, `initials`

Replace with interior design client testimonials:
- Homeowners, property developers, hospitality clients
- Roles: "Homeowner, Colombo 3", "Villa Owner, Weligama", "Hotel GM, Galle"

Section heading: "Trusted For Decades" → "What Our Clients Say"
Eyebrow: "Client Stories" → stays same ✅

---

### ❓ FAQ — `faqs[]`
Each: `q`, `a`

Replace Q&A with interior design FAQs:
- How long does an interior design project take?
- Do you offer 3D visualization before work begins?
- What is included in your full-service package?
- Do you work with client-supplied furniture?
- What areas do you serve?
- How is pricing structured?

---

### 🔗 Header & Footer — `navItems[]` / `footerItems[]`

| Current label | Interior Design label |
|---|---|
| Products | Services |
| Trust | Portfolio |
| Quote | Consult |
| FAQ | FAQ |
| Payment | Process |

Footer "Our Products" column → "Our Services"

---

### 💳 BillingSection
Current content: Payment modes, bank details, billing process for building materials  
→ Replace with: **Design Process / How It Works** steps or **Package Tiers** (e.g. Consultation Only, Full Design, Turnkey)

---

## Color Palette — Interior Design Agency

The original template uses a **dark navy + gold** palette (industrial/professional).  
For an interior design agency, the palette should feel **warm, luxurious, aspirational, and editorial**.

### Recommended Palette: "Warm Stone & Sage"

| Role | Hex | Usage |
|---|---|---|
| **Primary Dark** | `#2C2416` | Header bg, dark sections, footer |
| **Secondary Dark** | `#3D3120` | Hero gradient, card icon bg |
| **Accent (Warm Gold)** | `#B8935A` | Highlights, badges, icons, CTAs |
| **Accent Light** | `#D4A96A` | Hover states, star fills |
| **Background Light** | `#FAF8F5` | Section backgrounds (replaces `#F7F8FA`) |
| **Surface White** | `#FFFFFF` | Cards, testimonial cards |
| **Surface Warm** | `#F5F0E8` | Alternate section bg (replaces `#FAFAFA`) |
| **Text Primary** | `#2C2416` | Headings |
| **Text Secondary** | `#6B6054` | Body, descriptions |
| **Text Muted** | `#A09080` | Placeholder, metadata |

### Alternative Palette: "Sage & Cream" (cooler, more editorial)

| Role | Hex | Usage |
|---|---|---|
| **Primary Dark** | `#1A2420` | Header, footer, dark sections |
| **Secondary Dark** | `#2A3830` | Hero gradient |
| **Accent (Sage Gold)** | `#8FA67A` | Highlights, badges, icons |
| **Accent Warm** | `#C8A96E` | CTAs, buttons, star fills |
| **Background Light** | `#F9F8F4` | Light sections |
| **Surface Warm** | `#F3EFE6` | Card backgrounds |
| **Text Primary** | `#1A2420` | Headings |
| **Text Secondary** | `#5C6660` | Body text |

### Mapping to current code variables

```
OLD                    →  NEW (Warm Stone & Sage)
─────────────────────────────────────────────────
#0F1C33  (darkest bg)  →  #2C2416
#1C2B4A  (dark bg)     →  #3D3120
#C9A227  (gold accent) →  #B8935A
#F7F8FA  (light bg)    →  #FAF8F5
#FAFAFA  (card bg)     →  #F5F0E8
```

---

## Suggested Section Rename Map

| Original section ID | New ID | Component |
|---|---|---|
| `#products` | `#services` | CoreOfferings |
| `#stats` | `#about` | StatsSection |
| `#quote` | `#consult` | QuoteForm |
| `#faq` | `#faq` | FAQ |
| `#billing` | `#process` | BillingSection |

---

## Recommended Fonts (instead of browser defaults)
For premium interior design feel:
- **Headings:** `Cormorant Garamond` (serif, editorial) or `Playfair Display`
- **Body:** `Inter` or `DM Sans` (clean, readable)

Load via Google Fonts and apply in global CSS.

---

> [!TIP]
> The **"Warm Stone & Sage"** palette most closely mirrors the dark-bg + warm-accent pattern already in the template, making it a near drop-in swap with minimal structural change.
