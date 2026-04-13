export const site = {
  name: "Guardian Service Center",
  shortName: "Guardian",
  tagline: "Premium large-format digital printing since 2001.",
  phone: "+91 9879826779",
  phoneRaw: "919879826779",
  phoneAlt: "+91 7984394354",
  phoneAltRaw: "917984394354",
  email: "guardianjuzar@gmail.com",
  addressLine1: "25 Celler, Janpath Complex",
  addressLine2: "Opp. Capital Commercial, Ashram Road",
  addressLine3: "Ahmedabad 380009, Gujarat",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  whatsappMessage:
    "Hello Guardian Service Center, I would like to get a quote for printing services.",
  socials: {
    facebook: "#",
    instagram: "#",
  },
};

export const heroSlides = [
  {
    eyebrow: "Since 2001",
    heading: "Premium large-format digital printing.",
    content:
      "Precision, vibrancy, and unmatched quality — trusted by businesses across Ahmedabad for over 25 years.",
    image: "/gallery/vinyl/wall-4.jpg",
  },
  {
    eyebrow: "HP Latex Technology",
    heading: "Vibrant prints. Odorless. Built to last.",
    content:
      "State-of-the-art HP Latex printers and Summa cutting plotters deliver colour accuracy and durability, every job.",
    image: "/gallery/wallpaper/wp-7.jpg",
  },
  {
    eyebrow: "3M · Avery · LG Hausys · Technova",
    heading: "Only the best materials make the cut.",
    content:
      "We exclusively use globally trusted brands — because your brand deserves prints that don't fade, peel, or compromise.",
    image: "/gallery/signage/acrylic-6.jpg",
  },
];

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  subServices?: { title: string; description: string }[];
  features: { title: string; description: string }[];
  featureHeading?: string;
  featureSubheading?: string;
};

export const services: Service[] = [
  {
    slug: "vinyl-printing",
    name: "Vinyl Printing",
    tagline: "Transform any surface",
    shortDescription:
      "High-performance vinyl printing for walls, windows, vehicles, and more. Durable, vibrant, and precision-cut with Summa cutting technology.",
    image: "/gallery/vinyl/wall-2.jpg",
    gallery: [
      "/gallery/vinyl/wall-1.jpg",
      "/gallery/vinyl/wall-3.jpg",
      "/gallery/vinyl/wall-4.jpg",
      "/gallery/vinyl/wall-5.jpg",
      "/gallery/vinyl/frosted-1.jpg",
      "/gallery/vinyl/frosted-2.jpg",
      "/gallery/vinyl/cut-1.jpg",
      "/gallery/vinyl/cut-3.jpg",
      "/gallery/vinyl/window-cut-1.jpg",
    ],
    subServices: [
      {
        title: "Wall Vinyl",
        description:
          "Premium wall vinyl graphics that transform interiors and exteriors. Ideal for offices, retail spaces, and residential decor with easy application and removal.",
      },
      {
        title: "Frosted Film",
        description:
          "Elegant frosted film solutions for glass partitions and windows. Add privacy while maintaining natural light with custom patterns and branding.",
      },
      {
        title: "One Way Vision",
        description:
          "Perforated one-way vision vinyl that displays graphics on one side while maintaining clear visibility from the other. Perfect for storefronts and vehicle windows.",
      },
    ],
    features: [
      {
        title: "HP Latex Printing",
        description:
          "Vibrant, odorless prints with excellent indoor air quality — safe for any environment.",
      },
      {
        title: "Premium 3M & Avery Materials",
        description:
          "Only the highest quality vinyl, ensuring long-lasting durability and colour retention.",
      },
      {
        title: "Precision Cutting",
        description:
          "Summa cutting plotters deliver precise, clean cuts for even the most complex shapes.",
      },
      {
        title: "Indoor & Outdoor Options",
        description:
          "Whether it's a climate-controlled office or harsh outdoor conditions, we have a vinyl solution.",
      },
    ],
  },
  {
    slug: "wallpaper-printing",
    name: "Wallpaper Printing",
    tagline: "Walls that tell your story",
    shortDescription:
      "Custom-printed wallpapers with stunning clarity and colour. From residential interiors to commercial spaces, create environments that inspire.",
    image: "/gallery/wallpaper/wp-3.jpg",
    gallery: [
      "/gallery/wallpaper/wp-1.jpg",
      "/gallery/wallpaper/wp-2.jpg",
      "/gallery/wallpaper/wp-4.jpg",
      "/gallery/wallpaper/wp-5.jpg",
      "/gallery/wallpaper/wp-6.jpg",
      "/gallery/wallpaper/wp-7.jpg",
      "/gallery/wallpaper/wp-8.jpg",
    ],
    features: [
      {
        title: "Custom Designs",
        description:
          "Bring your own artwork or let us help design custom wallpaper patterns that match your brand.",
      },
      {
        title: "Vivid Colour Reproduction",
        description:
          "HP Latex technology delivers rich, true-to-life colours that pop on every wall.",
      },
      {
        title: "Durable & Washable",
        description:
          "Scratch-resistant, washable, and fade-proof — built for high-traffic environments.",
      },
      {
        title: "Easy Installation",
        description:
          "Engineered for straightforward application with minimal bubbling. Professional installation available.",
      },
      {
        title: "Eco-Friendly Printing",
        description:
          "Water-based, odorless HP Latex inks — safe for bedrooms, hospitals, and children's spaces.",
      },
      {
        title: "Any Size, Any Space",
        description:
          "From accent walls to full-room coverage, we print to any dimension with seamless panel matching.",
      },
    ],
    featureSubheading: "Premium wallpapers, made your way",
  },
  {
    slug: "sticker-labels",
    name: "Sticker & Labels",
    tagline: "Stick with quality",
    shortDescription:
      "Premium stickers and labels for branding, packaging, and promotions. Die-cut precision, vibrant prints, and adhesives that last.",
    image: "/gallery/stickers/sticker-3.jpg",
    gallery: [
      "/gallery/stickers/sticker-1.jpg",
      "/gallery/stickers/sticker-2.jpg",
      "/gallery/stickers/sticker-4.jpg",
      "/gallery/stickers/sticker-5.jpg",
      "/gallery/vinyl/cut-2.jpg",
      "/gallery/vinyl/cut-4.jpg",
      "/gallery/vinyl/cut-5.jpg",
    ],
    subServices: [
      {
        title: "Die-Cut Stickers",
        description:
          "Custom-shaped stickers cut precisely to your design contours. Perfect for logos, product labels, and promotional materials.",
      },
      {
        title: "Vinyl Stickers",
        description:
          "Weather-resistant vinyl stickers built for outdoor use, vehicle branding, and applications that demand longevity.",
      },
      {
        title: "Clear Stickers",
        description:
          "Transparent stickers that blend seamlessly with any surface for an elegant, label-less look.",
      },
    ],
    features: [
      {
        title: "Premium Adhesives",
        description:
          "Industrial-strength adhesives that stay put — no peeling, no residue.",
      },
      {
        title: "Full Colour Printing",
        description:
          "CMYK and spot colour for accurate brand colour matching across every label.",
      },
      {
        title: "Any Shape & Size",
        description:
          "Tiny product labels to large vehicle decals — we handle every dimension with precision.",
      },
      {
        title: "Bulk & Custom Orders",
        description:
          "Competitive pricing for bulk orders with fast turnaround.",
      },
    ],
  },
  {
    slug: "canvas-printing",
    name: "Canvas Printing",
    tagline: "Art-quality prints",
    shortDescription:
      "Gallery-grade canvas prints that transform photos, artwork, and designs into stunning wall pieces. Sharp details, rich colours, museum-quality finishing.",
    image: "/gallery/canvas/canvas-7.jpg",
    gallery: [
      "/gallery/canvas/canvas-3.jpg",
      "/gallery/canvas/canvas-5.jpg",
      "/gallery/canvas/canvas-9.jpg",
      "/gallery/wallpaper/wp-4.jpg",
      "/gallery/wallpaper/wp-6.jpg",
      "/gallery/wallpaper/wp-8.jpg",
    ],
    features: [
      {
        title: "Gallery-Wrapped Finish",
        description:
          "Professionally stretched over wooden frames with clean, wrapped edges — ready to hang.",
      },
      {
        title: "Archival Quality",
        description:
          "HP Latex inks on premium canvas deliver prints that resist fading for years.",
      },
      {
        title: "Perfect for Any Space",
        description:
          "Living rooms, offices, restaurants, galleries — canvas adds warmth to any environment.",
      },
      {
        title: "Attention to Detail",
        description:
          "Every print is colour-calibrated and quality-checked before finishing.",
      },
      {
        title: "Custom Sizes",
        description:
          "Standard and custom dimensions — from small desk prints to massive wall installations.",
      },
      {
        title: "Photo & Art Reproduction",
        description:
          "Family photos, digital artwork, brand graphics — reproduced with stunning fidelity.",
      },
    ],
    featureSubheading: "Prints that deserve a frame",
  },
  {
    slug: "signage",
    name: "Signage",
    tagline: "Signs that speak volumes",
    shortDescription:
      "Professional indoor and outdoor signage solutions. From ACP boards to acrylic letters, we build signs that elevate your brand presence.",
    image: "/gallery/signage/acrylic-5.jpg",
    gallery: [
      "/gallery/signage/acrylic-1.jpg",
      "/gallery/signage/acrylic-2.jpg",
      "/gallery/signage/acrylic-3.jpg",
      "/gallery/signage/acrylic-4.jpg",
      "/gallery/signage/acrylic-6.jpg",
      "/gallery/signage/auto-1.jpg",
      "/gallery/signage/auto-3.jpg",
      "/gallery/signage/auto-4.jpg",
    ],
    subServices: [
      {
        title: "ACP Board Signs",
        description:
          "Aluminum composite panel signage for a sleek, professional look. Weather-resistant and ideal for building facades.",
      },
      {
        title: "Acrylic & 3D Letters",
        description:
          "Custom-cut acrylic and 3D letter signage that adds depth and dimension to your storefront or office.",
      },
      {
        title: "Vehicle Branding",
        description:
          "Turn your fleet into mobile billboards with durable vehicle wraps and graphics.",
      },
    ],
    features: [
      {
        title: "Retail & Storefronts",
        description:
          "Eye-catching signage that draws customers in and reinforces your brand.",
      },
      {
        title: "Corporate Offices",
        description:
          "Professional lobby signs, wayfinding, and branded environments.",
      },
      {
        title: "Hospitality & Restaurants",
        description:
          "Menu boards, directional signs, and ambiance-creating graphics.",
      },
      {
        title: "Healthcare & Education",
        description:
          "Clear, compliant signage for hospitals, clinics, schools, and universities.",
      },
      {
        title: "Events & Exhibitions",
        description:
          "Stage backdrops, directional signs, and branded displays for every event.",
      },
      {
        title: "Industrial & Warehousing",
        description:
          "Safety signs, labeling, and branding for factories and warehouses.",
      },
    ],
    featureHeading: "Industries we serve",
    featureSubheading: "Signage for every sector",
  },
  {
    slug: "banners",
    name: "Banners",
    tagline: "Make a bold statement",
    shortDescription:
      "High-impact banners for events, promotions, and storefronts. Flex, fabric, and standee options with vivid, weather-resistant printing.",
    image: "/gallery/banners/event-2.jpg",
    gallery: [
      "/gallery/banners/event-1.jpg",
      "/gallery/banners/event-4.jpg",
      "/gallery/signage/acrylic-3.jpg",
      "/gallery/signage/auto-4.jpg",
      "/gallery/wallpaper/wp-7.jpg",
    ],
    subServices: [
      {
        title: "Flex Banners",
        description:
          "Durable flex banners for outdoor advertising, building wraps, and event promotions. UV-resistant and built to last.",
      },
      {
        title: "Fabric Banners",
        description:
          "Premium fabric banners with a soft, luxurious feel. Ideal for indoor events and retail displays.",
      },
      {
        title: "Standees & Rollups",
        description:
          "Portable rollup standees for exhibitions, conferences, and point-of-sale displays.",
      },
    ],
    features: [
      {
        title: "Large Format Capability",
        description:
          "From compact table-top displays to massive building-wide installations.",
      },
      {
        title: "Vibrant, Fade-Proof Colours",
        description:
          "HP Latex inks deliver bold colours that stay vivid after months of outdoor exposure.",
      },
      {
        title: "Quick Turnaround",
        description:
          "Fast production without compromising quality. Rush orders available.",
      },
      {
        title: "Finishing Options",
        description:
          "Eyelets, hemming, pole pockets, and custom finishing to suit your installation.",
      },
    ],
  },
];

export const sectors = [
  {
    name: "Retail & Storefronts",
    content:
      "Window graphics, in-store signage, and point-of-sale displays that move product.",
  },
  {
    name: "Corporate Offices",
    content:
      "Lobby signs, branded environments, and wayfinding that impresses every visitor.",
  },
  {
    name: "Hospitality",
    content:
      "Menu boards, directional signs, and ambiance graphics for hotels and restaurants.",
  },
  {
    name: "Events & Exhibitions",
    content:
      "Stage backdrops, standees, and branded displays ready for any event.",
  },
];

export const processSteps = [
  {
    title: "Consult",
    content:
      "Share your brief — size, material, timeline. We review everything and recommend the best approach.",
  },
  {
    title: "Design",
    content:
      "Send us your artwork or let our team help refine it. We colour-calibrate before a single pixel is printed.",
  },
  {
    title: "Print",
    content:
      "HP Latex printing on premium 3M, Avery, LG Hausys, or Technova substrates — made to last.",
  },
  {
    title: "Deliver",
    content:
      "Precision-cut, quality-checked, and delivered on schedule. Installation available on request.",
  },
];

export const whyUs = [
  {
    title: "Cutting-Edge Technology",
    content:
      "HP Latex printers and Summa cutting plotters deliver unmatched precision and vibrant output on every job.",
    color: "#8ECAE6",
  },
  {
    title: "Premium Materials",
    content:
      "We exclusively use 3M, Avery, LG Hausys, and Technova — brands trusted worldwide for durability.",
    color: "#FBD5C2",
  },
  {
    title: "25+ Years of Excellence",
    content:
      "Since 2001, Guardian has been Ahmedabad's trusted name in large-format printing.",
    color: "#D4EBD6",
  },
  {
    title: "Reliable Delivery",
    content:
      "A streamlined production workflow means fast turnaround without ever cutting corners on quality.",
    color: "#F9D9E0",
  },
];

export const stats = [
  { label: "Years in Business", value: "25+" },
  { label: "Services Offered", value: "6+" },
  { label: "Premium Materials", value: "4+" },
  { label: "Satisfied Clients", value: "1000+" },
];

export const materialBrands = [
  "3M",
  "Avery",
  "LG Hausys",
  "Technova",
  "HP Latex",
  "Summa",
];

export const faqs = [
  {
    question: "What types of printing services do you offer?",
    answer:
      "We offer a comprehensive range of large-format digital printing services including vinyl printing, wallpaper printing, sticker & labels, canvas printing, signage, and banners — all printed using state-of-the-art HP Latex technology.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We use only premium materials from trusted brands including 3M, Avery, LG Hausys, and Technova. This ensures vibrant colours, durability, and a professional finish on every print.",
  },
  {
    question: "How can I place an order or get a quote?",
    answer:
      "Call us at +91 9879826779, email guardianjuzar@gmail.com, or visit our contact page to fill out a quote request form. We're happy to discuss your project requirements.",
  },
];
