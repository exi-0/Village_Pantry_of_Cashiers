import React from 'react'
import { Sparkles, ShoppingBag, BookOpen, Droplets, CheckCircle, ArrowRight } from 'lucide-react'
import { IMAGES } from '../assets/images'
import { MenuItem } from '../types'

interface PantryMarketProps {
  onAddToCart: (item: MenuItem) => void
  onExploreFullMenu: () => void
}

export const PantryMarket: React.FC<PantryMarketProps> = ({
  onAddToCart,
  onExploreFullMenu,
}) => {
  const pantryHighlights = [
    {
      title: "Artisanal Olive Oils & Vinegars",
      description: "Small-batch cold-pressed oils including White Truffle, Crushed Garlic, and aged Peach Balsamic from Texas Olive Oil Co. Displayed prominently on our center tasting table.",
      image: IMAGES.photo1ArtisanOils,
      tag: "Center Table Feature",
      icon: Droplets,
    },
    {
      title: "Southern Culinary Literature",
      description: "Hardcover culinary guides including 'For the Love of the South' and 'The British Baking Book'. Curated by our culinary team to celebrate heirloom Southern cooking.",
      image: IMAGES.photo1Cookbooks,
      tag: "Cookbook Collection",
      icon: BookOpen,
    },
    {
      title: "Grab & Go Provisions",
      description: "In a hurry? We got ya! Freshly packaged sandwiches, house caramelized French onion dips, artisan cheeses, and cold drinks ready for your lake or hiking adventure.",
      image: IMAGES.photo1EnhancedInterior,
      tag: "Fresh Prepared Daily",
      icon: ShoppingBag,
    },
  ]

  return (
    <section id="pantry" className="py-14 sm:py-20 bg-surface-muted border-b border-surface-raised/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-mint bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-brand-mint" />
              <span>Gourmet Provisions & Kitchen Curios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b11] tracking-tight">
              The Pantry & Mountain Market
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Step inside our Cashiers store where crystal chandeliers hang above solid butcher block tables filled with curated Southern treats, artisan bread dipping spices, rare olive oils, and local preserves.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <button
              onClick={onExploreFullMenu}
              className="inline-flex items-center justify-center gap-2 bg-brand-primary text-surface-muted text-xs sm:text-sm font-bold px-5 py-3 rounded-md hover:bg-[#00471c] transition-colors"
            >
              <span>Browse All Pantry Goods</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Featured Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pantryHighlights.map((col, idx) => {
            const IconComponent = col.icon
            return (
              <div
                key={idx}
                className="bg-surface-strong rounded-md overflow-hidden border border-surface-raised/60 hover:border-brand-primary transition-all duration-fast flex flex-col justify-between group"
              >
                <div>
                  <div className="h-56 relative overflow-hidden bg-gray-200">
                    <img
                      src={col.image}
                      alt={col.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#002b11]/90 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-xs backdrop-blur-xs flex items-center gap-1.5">
                      <IconComponent className="w-3 h-3 text-brand-mint" />
                      <span>{col.tag}</span>
                    </div>
                  </div>

                  <div className="p-5 text-left">
                    <h3 className="font-bold text-lg text-text-primary mb-2">
                      {col.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {col.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-surface-raised/40 flex items-center gap-2 text-xs text-brand-primary font-semibold">
                    <CheckCircle className="w-4 h-4 text-brand-mint shrink-0" />
                    <span>Available daily 11:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Grab & Go Announcement Banner */}
        <div className="bg-[#002b11] text-surface-muted rounded-md p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-brand-mint font-bold">
              Lake Glenville & Whiteside Mountain Visitors
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Planning a Day on the Water or the Trails?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100">
              Our refrigerated grab-and-go cases are stocked fresh each morning with artisan sandwiches, chilled pasta salads, dips, and refreshments so you can pack the ultimate mountain picnic basket.
            </p>
          </div>

          <a
            href="tel:+18285470345"
            className="w-full sm:w-auto shrink-0 bg-brand-mint hover:bg-[#3d8c6b] active:bg-[#2d7355] text-[#002b11] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-md shadow-card transition-colors text-center"
          >
            Call Ahead for Group Packs: (828) 547-0345
          </a>
        </div>
      </div>
    </section>
  )
}

