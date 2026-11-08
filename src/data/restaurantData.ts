import { MenuItem, Review, DesignToken } from '../types'
import { IMAGES } from '../assets/images'

export const RESTAURANT_INFO = {
  name: "Village Pantry of Cashiers",
  tagline: "Gourmet Deli, Artisan Market & Mountain Catering",
  address: "32 Village Walk Wy, Cashiers, NC 28717, United States",
  phone: "+1 828-547-0345",
  phoneFormatted: "(828) 547-0345",
  email: "hello@villagepantrycashiers.com",
  mapsUrl: "https://www.google.com/maps/place/Village+Pantry+of+Cashiers/data=!4m7!3m6!1s0x88591b001ed82f8b:0xccaa02c826736095!8m2!3d35.1128894!4d-83.1001444!16s%2Fg%2F11w3ny_ydr!19sChIJiy_YHgAbWYgRlWBzJsgCqsw?authuser=0&hl=en&g_ep=EgoyMDI2MTEwMy4wIJJjKgBIAVAD&rclk=1",
  rating: 4.7,
  reviewCount: 48,
  tripadvisorRank: "#1 Deli & Specialty Pantry in Cashiers",
  hours: {
    lunch: "Monday – Saturday: 11:00 AM – 3:00 PM",
    pantry: "Monday – Saturday: 11:00 AM – 5:00 PM",
    sunday: "Closed (Available for Private Catering & Events)",
  },
  atmosphere: [
    "Upscale Mountain Village Hospitality",
    "Crystal Chandeliers & Reclaimed Wood",
    "Locally Sourced Southern Pantry Staples",
    "Curated Wine, Craft Beer & Artisanal Olive Oils",
    "Pet-Friendly Porch & Free Village Walk Parking"
  ]
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "croque-monsieur",
    name: "Classic Croque Monsieur & French Onion Soup",
    category: "sandwiches",
    price: 16.50,
    description: "Thick artisan sourdough layered with French ham, creamy bechamel, and bubbled Gruyere cheese, served with a piping-hot cup of our signature scratch-made French Onion soup.",
    image: IMAGES.croqueFrenchOnion,
    isChalkboardSpecial: true,
    isStaffPick: true,
    pairing: "Chilled Pinot Grigio or Iced Mountain Tea",
    calories: "740 cal",
    prepTime: "8-10 mins"
  },
  {
    id: "chicken-bacon-avocado",
    name: "Grilled Chicken, Applewood Bacon & Avocado",
    category: "sandwiches",
    price: 15.00,
    description: "Tender herb-marinated grilled chicken breast, thick-cut applewood bacon, fresh avocado slices, butter leaf lettuce, and homemade herb aioli on toasted artisanal brioche.",
    image: IMAGES.southernSandwichFries,
    isChalkboardSpecial: true,
    isStaffPick: true,
    pairing: "Craft Citra IPA",
    calories: "680 cal",
    prepTime: "8 mins"
  },
  {
    id: "shrimp-oyster-poboy",
    name: "Crispy Fried Shrimp & Oyster Po'Boy",
    category: "sandwiches",
    price: 17.50,
    description: "Golden fried Carolina shrimp and gulf oysters on crusty French baguette with shredded iceberg lettuce, vine-ripened tomatoes, and house Creole remoulade sauce.",
    image: IMAGES.gourmetDeliSandwich,
    isChalkboardSpecial: true,
    isStaffPick: false,
    pairing: "Mason's Root Beer or Crisp Pilsner",
    calories: "710 cal",
    prepTime: "10 mins"
  },
  {
    id: "southern-blt",
    name: "Heritage Southern BLT & Sweet Potato Fries",
    category: "sandwiches",
    price: 14.00,
    description: "Extra-thick double-smoked bacon, mountain heirloom tomatoes, crisp hydroponic greens, and cracked black pepper duke's mayo on thick-cut toasted multigrain bread.",
    image: IMAGES.southernSandwichFries,
    isChalkboardSpecial: false,
    isStaffPick: true,
    isGlutenFreeAvailable: true,
    calories: "590 cal",
    prepTime: "6 mins"
  },
  {
    id: "gourmet-grilled-cheese",
    name: "Artisan Three-Cheese Melt with Fig Jam",
    category: "sandwiches",
    price: 13.50,
    description: "Aged sharp white cheddar, creamy fontina, and mild goat cheese with sweet fig spread on rustic butter-grilled sourdough. Served with seasoned sweet potato fries.",
    image: IMAGES.croqueFrenchOnion,
    isChalkboardSpecial: false,
    isVegetarian: true,
    calories: "620 cal",
    prepTime: "7 mins"
  },
  {
    id: "french-onion-soup",
    name: "Village Pantry Scratch French Onion Soup",
    category: "soups",
    price: 9.00,
    description: "Slow-caramelized sweet mountain onions simmered for 18 hours in rich beef bone broth, topped with sourdough crouton and a thick blanket of broiled Swiss & Gruyere.",
    image: IMAGES.soupFrenchOnion,
    isChalkboardSpecial: true,
    isStaffPick: true,
    calories: "380 cal",
    prepTime: "5 mins"
  },
  {
    id: "roasted-tomato-basil",
    name: "Fire-Roasted Tomato Basil Bisque",
    category: "soups",
    price: 8.50,
    description: "Vine-ripened tomatoes roasted with garlic and fresh garden basil, finished with heavy mountain cream and shaved aged parmesan.",
    image: IMAGES.soupFrenchOnion,
    isVegetarian: true,
    isGlutenFreeAvailable: true,
    calories: "310 cal",
    prepTime: "4 mins"
  },
  {
    id: "signature-charcuterie-board",
    name: "The Blue Ridge Artisan Charcuterie Board",
    category: "charcuterie",
    price: 34.00,
    description: "Prosciutto di Parma, Spanish chorizo, aged sharp white cheddar, triple-cream brie, fresh mountain figs, blackberries, roasted walnuts, honeycomb, and artisan seed crackers.",
    image: IMAGES.charcuterieBoard,
    isStaffPick: true,
    pairing: "Sonoma Cabernet or Willamette Pinot Noir",
    calories: "Serves 2-4",
    prepTime: "12 mins"
  },
  {
    id: "hiker-picnic-box",
    name: "Cashiers Hiker & Boater Picnic Hamper",
    category: "grab-and-go",
    price: 19.50,
    description: "Perfect for Lake Glenville outings or Panthertown hiking! Handcrafted sandwich of your choice, gourmet chips, local artisan cookie, and fresh fruit cup in an insulated tote.",
    image: IMAGES.pantryMarketProduce,
    isStaffPick: true,
    calories: "650 cal",
    prepTime: "Ready to Grab"
  },
  {
    id: "french-onion-dip-chips",
    name: "Caramelized French Onion Dip & Kettle Chips",
    category: "grab-and-go",
    price: 9.50,
    description: "House-made sour cream & chive caramelized French onion dip served with extra-crisp thick-cut sea salt kettle potato chips.",
    image: IMAGES.photo1EnhancedInterior,
    isVegetarian: true,
    calories: "450 cal",
    prepTime: "Ready to Grab"
  },
  {
    id: "texas-olive-oil-truffle",
    name: "Texas Olive Oil Co. White Truffle Olive Oil",
    category: "pantry-goods",
    price: 24.00,
    description: "Cold-pressed extra virgin olive oil infused with Italian white truffles. The identical culinary bottle featured on our boutique center display table.",
    image: IMAGES.photo1ArtisanOils,
    isVegetarian: true,
    calories: "Bottle (250ml)",
    prepTime: "In-Store / Online"
  },
  {
    id: "italian-bread-dipping-spices",
    name: "Artisanal Italian Bread Dipping Herb Blend",
    category: "pantry-goods",
    price: 11.50,
    description: "Hand-blended Mediterranean herbs, sun-dried tomatoes, coarse sea salt, and crushed red pepper. Perfectly formulated to mix with our gourmet extra virgin olive oils.",
    image: IMAGES.photo1ArtisanOils,
    isVegetarian: true,
    calories: "Pouch (4 oz)",
    prepTime: "In-Store / Online"
  },
  {
    id: "southern-culinary-cookbooks",
    name: "Southern Gourmet Hardcover Cookbook Collection",
    category: "pantry-goods",
    price: 32.00,
    description: "Featuring 'For the Love of the South' and 'The British Baking Book'. Curated by our chefs for authentic home culinary inspiration.",
    image: IMAGES.photo1Cookbooks,
    calories: "Hardcover Edition",
    prepTime: "Gift Wrapped"
  },
  {
    id: "masons-root-beer",
    name: "Mason's Handcrafted Pure Cane Sugar Root Beer",
    category: "beverages",
    price: 4.00,
    description: "Vintage recipe brewed in small batches with pure cane sugar and natural sassafras roots. Served ice cold.",
    image: IMAGES.photo1EnhancedInterior,
    calories: "170 cal",
    prepTime: "Chilled"
  },
  {
    id: "curated-mountain-wine",
    name: "Curated Estate Reserve Wine (Glass / Bottle)",
    category: "beverages",
    price: 12.00,
    description: "Selected vintages rotating weekly: Crisp Sauvignon Blanc, buttery Sonoma Chardonnay, or silky French Pinot Noir.",
    image: IMAGES.wineAndCheeses,
    calories: "140 cal / glass",
    prepTime: "Served Cellar Temp"
  }
]

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Sarah Montgomery",
    location: "Atlanta, GA",
    date: "October 2026",
    rating: 5,
    title: "Best Croque Monsieur & French Onion Soup anywhere in WNC!",
    content: "We stopped by Village Pantry of Cashiers after a morning hike at Whiteside Mountain. The Croque Monsieur paired with their 18-hour French Onion soup was an absolute dream—crunchy, bubbly gruyere, and so deeply flavorful. We also bought a bottle of their garlic-infused olive oil and dipping spices to take back to our cabin. Unbelievably charming atmosphere!",
    tripType: "Traveled as a couple",
    verifiedTripadvisor: true
  },
  {
    id: "rev-2",
    author: "Dr. David & Ellen K.",
    location: "Charlotte, NC",
    date: "September 2026",
    rating: 5,
    title: "A Hidden Gem on Village Walk Way",
    content: "If you are staying in Cashiers or Highlands, do not miss this pantry. The grab-and-go case saved our boat day on Lake Glenville with delicious sandwiches and dips. The interior with the chandeliers and reclaimed wooden tables feels like a boutique market in the French countryside nestled in the Blue Ridge mountains.",
    tripType: "Traveled with family",
    verifiedTripadvisor: true
  },
  {
    id: "rev-3",
    author: "Amanda & Robert Chen",
    location: "Tampa, FL",
    date: "August 2026",
    rating: 5,
    title: "Exquisite Charcuterie & Impeccable Hospitality",
    content: "We ordered the Blue Ridge Charcuterie board for an intimate sunset gathering on our porch. The honeycomb, prosciutto, cheeses, and figs were so fresh and stunningly arranged. The staff is genuinely welcoming. 5 stars all the way!",
    tripType: "Traveled with friends",
    verifiedTripadvisor: true
  },
  {
    id: "rev-4",
    author: "Markus V.",
    location: "Knoxville, TN",
    date: "July 2026",
    rating: 4,
    title: "Top-tier sandwiches and gourmet pantry items",
    content: "The shrimp and oyster po'boy had the perfect crunch and remoulade. Don't forget to grab a chilled Mason's Root Beer. Only downside is lunch ends at 3 PM, so get there early before items sell out!",
    tripType: "Traveled solo",
    verifiedTripadvisor: true
  }
]

export const DESIGN_TOKENS: DesignToken[] = [
  {
    name: "Text Primary",
    token: "color.text.primary",
    value: "#002b11",
    description: "Deep luxury spruce/forest green. Primary headline and high-contrast text color."
  },
  {
    name: "Text Secondary",
    token: "color.text.secondary",
    value: "#38443a",
    description: "Refined slate evergreen. Subheadings, metadata, and supporting narrative."
  },
  {
    name: "Text Tertiary",
    token: "color.text.tertiary",
    value: "#888484",
    description: "Neutral stone gray. Captions, placeholder text, and secondary tags."
  },
  {
    name: "Surface Strong",
    token: "color.surface.strong",
    value: "#f7f7f7",
    description: "Crisp clean light background surface for containers and sections."
  },
  {
    name: "Surface Base",
    token: "color.surface.base",
    value: "#000000",
    description: "Deep black for high-contrast accents and inverted banners."
  },
  {
    name: "Surface Muted",
    token: "color.surface.muted",
    value: "#ffffff",
    description: "Pure white surface token for cards, modals, and sheets."
  },
  {
    name: "Surface Raised",
    token: "color.surface.raised",
    value: "#b9b7b7",
    description: "Border definition and elevated card outlines."
  },
  {
    name: "Primary Font",
    token: "font.family.primary",
    value: "Trip Sans VF, Trip Sans, Arial, sans-serif",
    description: "Clean, functional, implementation-oriented typography stack."
  },
  {
    name: "Typography Base",
    token: "font.size.base / font.weight.base",
    value: "16px / 400 (normal)",
    description: "Baseline legible text sizing with 1.5 line height."
  },
  {
    name: "Motion Fast",
    token: "motion.duration.fast",
    value: "200ms",
    description: "Cubic-bezier interaction duration for hover lifts and tab switches."
  }
]

