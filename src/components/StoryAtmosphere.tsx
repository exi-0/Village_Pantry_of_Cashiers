import React, { useState } from 'react'
import { Sparkles, MapPin, Eye, Camera, CheckCircle2, ChevronRight, Image as ImageIcon } from 'lucide-react'
import { IMAGES } from '../assets/images'
import { RESTAURANT_INFO } from '../data/restaurantData'

export const StoryAtmosphere: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number>(0)

  const gallery = [
    {
      title: "Storefront on Village Walk Way",
      subtitle: "Enhanced & Decluttered Exterior",
      description: "Picturesque mountain facade featuring hand-split cedar shake shingles, sage-green signage, and welcoming holiday wreath at 32 Village Walk Way.",
      image: IMAGES.photo2EnhancedEntrance,
      tag: "Storefront Entrance",
    },
    {
      title: "Gourmet Tasting Tables & Chandeliers",
      subtitle: "Enhanced Authentic Interior",
      description: "Our signature butcher-block farm tables bathed in warm chandelier light, stocked with small-batch olive oils, dipping spices, and grab-and-go coolers.",
      image: IMAGES.photo1EnhancedInterior,
      tag: "Pantry Interior",
    },
    {
      title: "Boutique Artisan Olive Oils",
      subtitle: "Culinary Ingredient Focus",
      description: "Texas Olive Oil Co. cold-pressed extra virgin oils infused with white truffle, roasted garlic, and aged peach balsamic with Italian bread seasonings.",
      image: IMAGES.photo1ArtisanOils,
      tag: "Specialty Provisions",
    },
    {
      title: "Today's Chalkboard Features",
      subtitle: "Daily Scratch Kitchen Board",
      description: "Our authentic chalkboard menu announcing today's Croque Monsieur, French Onion soup, and artisanal Po'Boys, handwritten each morning.",
      image: IMAGES.photo2ChalkboardMenu,
      tag: "Daily Blackboard",
    },
    {
      title: "The Blue Ridge Charcuterie Board",
      subtitle: "Signature Culinary Artistry",
      description: "Handcrafted grazing board featuring prosciutto di Parma, aged white cheddar, triple-cream brie, fresh figs, honeycomb, and artisan crackers.",
      image: IMAGES.charcuterieBoard,
      tag: "House Specialty",
    },
  ]

  return (
    <section id="atmosphere" className="py-14 sm:py-20 bg-surface-muted border-b border-surface-raised/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-mint bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <Camera className="w-3.5 h-3.5 text-brand-mint" />
              <span>Authentic Atmosphere & Mountain Roots</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b11] tracking-tight">
              A Warm Mountain Retreat on Village Walk Way
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Located off the main crossroads in Cashiers, North Carolina, <strong>Village Pantry of Cashiers</strong> was created to give locals and mountain travelers an honest culinary haven. Here, French culinary technique meets generous Southern mountain hospitality.
            </p>
          </div>

          <div className="lg:col-span-5 bg-surface-strong p-4 sm:p-5 rounded-md border border-surface-raised/60 text-left space-y-2">
            <div className="text-xs font-bold uppercase text-brand-primary flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-mint" />
              <span>Cashiers, North Carolina 28717</span>
            </div>
            <p className="text-xs text-text-secondary leading-normal">
              Surrounded by hemlocks, Whiteside Mountain, and Lake Glenville, our pantry is the preferred stop for hikers, boaters, and food enthusiasts seeking scratch-made lunches and curated provisions.
            </p>
          </div>
        </div>

        {/* Gallery Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Large Viewer */}
          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden shadow-elevated border-4 border-surface-muted bg-black aspect-4/3 sm:aspect-16/10">
              <img
                src={gallery[selectedPhoto].image}
                alt={gallery[selectedPhoto].title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-6 text-left text-white">
                <span className="bg-brand-mint text-[#002b11] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-xs w-max mb-1.5">
                  {gallery[selectedPhoto].tag}
                </span>
                <h3 className="font-serif italic text-xl sm:text-2xl font-bold text-white">
                  {gallery[selectedPhoto].title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 mt-1 max-w-xl">
                  {gallery[selectedPhoto].description}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnails List */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-text-tertiary text-left mb-2">
              Select Photograph to Inspect:
            </div>
            {gallery.map((item, idx) => {
              const isSelected = selectedPhoto === idx
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedPhoto(idx)}
                  className={`w-full flex items-center gap-3.5 p-2.5 rounded-md border text-left transition-all duration-fast ${
                    isSelected
                      ? 'border-brand-primary bg-emerald-50/70 shadow-xs'
                      : 'border-surface-raised/50 bg-surface-strong hover:bg-surface-raised/30'
                  }`}
                >
                  <div className="w-16 h-12 rounded-xs overflow-hidden shrink-0 border border-surface-raised/50 bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-text-primary truncate">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-text-secondary truncate">
                      {item.subtitle}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-brand-primary translate-x-1' : 'text-text-tertiary'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Photography Quality Commitment */}
        <div className="mt-10 p-4 rounded-md bg-surface-strong border border-surface-raised/60 flex items-center gap-3 text-left">
          <CheckCircle2 className="w-5 h-5 text-brand-mint shrink-0" />
          <p className="text-xs text-text-secondary">
            <strong>Authentic Heritage:</strong> All photographs showcased on this site directly represent our genuine storefront, dining room, artisanal olive oil tables, and daily kitchen preparations at 32 Village Walk Way in Cashiers, NC.
          </p>
        </div>
      </div>
    </section>
  )
}

