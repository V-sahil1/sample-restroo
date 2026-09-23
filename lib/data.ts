export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/experience", label: "Experience" },
  { href: "/gallery", label: "Gallery" },
  { href: "/private-dining", label: "Private Dining" },
  { href: "/contact", label: "Contact" },
] as const;

export const IMAGES = {
  interior: "/images/interior.png",
  cocktail: "/images/cocktail.png",
  butterChicken: "/images/butter-chicken.png",
  spices: "/images/spices.png",
  map: "/images/map.png",
} as const;

export type MenuItem = {
  name: string;
  price: number;
  description: string;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    items: [
      {
        name: "Tandoori Paneer Tikka",
        price: 18,
        description:
          "Smoked cottage cheese marinated in yellow mustard, served with aeration of mountain mint.",
        tags: ["V", "GF"],
      },
      {
        name: "Malai Broccoli Florets",
        price: 16,
        description:
          "Cream cheese and toasted green cardamom crumble with sweet pomegranate relish.",
        tags: ["V", "GF"],
      },
      {
        name: "Truffle Dahi Kebab",
        price: 19,
        description:
          "Crisp hung curd croquettes filled with black winter truffle and saffron drops.",
        tags: ["V"],
      },
      {
        name: "Lamb Seekh Gilafi",
        price: 24,
        description:
          "Minced highland lamb skewer crusted with bell peppers, smoked pomegranate molasses.",
        tags: ["HALAL", "GF"],
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      {
        name: "Smoked Butter Chicken",
        price: 34,
        description:
          "Charcoal-grilled chicken breast, 24-hr tomato makhani sauce, fenugreek lattice tuile.",
        tags: ["SIGNATURE", "GF"],
      },
      {
        name: "Kashmiri Mutton Rogan Josh",
        price: 38,
        description:
          "Slow-braised lamb shanks, ratan jot infusion, dried ginger, and cold-pressed fennel oil.",
        tags: ["HALAL", "GF"],
      },
      {
        name: "36-Hour Dal Makhani",
        price: 24,
        description:
          "Slowly simmering black urad lentils over charcoals, whipped white butter, dried fenugreek.",
        tags: ["V", "GF"],
      },
      {
        name: "Awadhi Dum Biryani",
        price: 32,
        description:
          "Fragrant aged basmati rice sealed with flaky pastry dough, saffron essence, kewra dew.",
        tags: ["GF"],
      },
    ],
  },
  {
    id: "breads",
    label: "Breads",
    items: [
      {
        name: "Truffle Garlic Naan",
        price: 9,
        description:
          "Charcoal-fired blistered bread brushed with Périgord truffle ghee and roasted garlic chips.",
      },
      {
        name: "Smoked Cheddar & Chilli Naan",
        price: 10,
        description: "Aged molten cheddar with charred green chilies and nigella seeds.",
      },
      {
        name: "Burnt Butter Naan",
        price: 7,
        description: "Crisp clay oven flatbread basted with caramelized nutty noisette butter.",
      },
      {
        name: "Crisp Tandoori Roti",
        price: 6,
        description: "Whole-wheat stoneground flour, charred over clay embers.",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        name: "Gold Leaf Gulab Jamun Tart",
        price: 16,
        description:
          "Pistachio sablé crust, warm rum-soaked reduced milk dumpling, 24k edible gold leaf.",
      },
      {
        name: "Saffron Pot Kulfi",
        price: 15,
        description:
          "Dense frozen whole milk cream with Iranian saffron threads and silver leaf varq.",
      },
      {
        name: "Cardamom & Rose Basque",
        price: 18,
        description:
          "Burnt basque cheesecake infused with Damascus rose petals and Malabar cardamom.",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      {
        name: "Twilight in Jodhpur",
        price: 22,
        description:
          "Botanical gin, blue pea flower liqueur, saffron smoke aroma bubble, tonic mist.",
      },
      {
        name: "Smoked Tamarind Sour",
        price: 20,
        description: "Aged bourbon, roasted tamarind paste, jaggery syrup, smoked rosemary.",
      },
      {
        name: "Royal Gulab Spritz (0.0%)",
        price: 14,
        description:
          "Distilled non-alcoholic botanicals, wild rose infusion, sparkling spring water.",
      },
    ],
  },
];

export const EXPERIENCES = [
  {
    icon: "restaurant",
    title: "Authentic Flavours",
    body: "Centuries-old regional techniques paired with precise molecular clarity and house-churned makhan.",
    tag: "01 / Gastronomy",
  },
  {
    icon: "local_bar",
    title: "Botanical Spirits",
    body: "Cocktails infused with smoke cloches, vetiver shrubs, dried citrus, and 24-carat saffron mist.",
    tag: "02 / Mixology",
  },
  {
    icon: "wb_twilight",
    title: "Modern Ambience",
    body: "Warm architectural fluting, Italian Carrara marble tables, low amber sconces, and sound curated by deep house selectors.",
    tag: "03 / Interior",
  },
  {
    icon: "celebration",
    title: "Celebrations",
    body: "Unrivalled private alcoves and high-energy party tables crafted for milestone gatherings and celebrations.",
    tag: "04 / Moments",
  },
];

export const MOODS = [
  {
    badgeIcon: "favorite",
    badge: "Mood 01",
    title: "Date Night",
    body: "Warm fluted wood corners, intimate low lighting, flickering candles, and unhurried shared dishes crafted for long conversation.",
    footer: "Intimate & Sensory",
    footerIcon: "candle",
    tint: false,
  },
  {
    badgeIcon: "group",
    badge: "Mood 02",
    title: "Friends & Food",
    body: "Generous round marble tops, vibrant shareable banquets, dynamic dining beats, and laughter that carries past midnight.",
    footer: "Social Platters & High Energy",
    footerIcon: "tapas",
    tint: true,
  },
  {
    badgeIcon: "stars",
    badge: "Mood 03",
    title: "Celebrations",
    body: "Promotions, milestone birthdays, and private triumphs toasted with illuminated dry-ice botanical flutes and bespoke tasting courses.",
    footer: "Milestone Moments",
    footerIcon: "wine_bar",
    tint: false,
  },
];

export const REVIEWS = [
  {
    quote:
      "Sambhar has achieved what few modern Indian dining rooms manage: honoring age-old soul without a shred of pretension.",
    name: "Aarav Mehta",
    role: "Culinary Critic & Editor",
  },
  {
    quote:
      "The smoked butter chicken with the tuile is pure theatre, and the twilight cocktail bubble makes the table gasp every single time.",
    name: "Tanya Kapoor",
    role: "Lifestyle Creator",
  },
  {
    quote:
      "Flawless table service. The 36-hour dal makhani tastes just like ancestral royal hearths in Punjab, but in Mayfair opulence.",
    name: "Rohan Sengupta",
    role: "Michelin Guide Diner",
  },
];

export const LOCATIONS = [
  {
    id: "new-delhi",
    title: "New Delhi • Lodhi Promenade",
    city: "New Delhi",
    address: "48 Lodhi Promenade, New Delhi, DL 110003",
    hours: "Dinner: Mon–Sun, 6:00 PM – 1:00 AM • Valet Available",
  },
  {
    id: "london",
    title: "London • Mayfair",
    city: "London Mayfair",
    address: "12 Berkeley Square, Mayfair, London W1J 6ES",
    hours: "Dinner: Tue–Sun, 5:30 PM – Midnight • Concierge Valet",
  },
];

export const CONCIERGE = {
  phone: "+1 (800) 555-SAMBHAR",
  phoneHref: "tel:+18005557262427",
  email: "reservations@sambhar.dining",
};

export const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=12+Berkeley+Square+Mayfair+London+W1J+6ES";
