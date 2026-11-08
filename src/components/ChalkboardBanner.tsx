import React from 'react'
import { Sparkles, Plus, Clock, Check } from 'lucide-react'
import { MenuItem } from '../types'
import { IMAGES } from '../assets/images'

interface ChalkboardBannerProps {
  onAddToCart: (item: MenuItem) => void
  onOpenReservation: () => void
  chalkboardItems: MenuItem[]
}

export const ChalkboardBanner: React.FC<ChalkboardBannerProps> = ({
  onAddToCart,
  onOpenReservation,
  chalkboardItems,
}) => {
  return (
    <section id="chalkboard" className="py-12 bg-[#1a231d] text-surface-muted relative overflow-hidden border-y border-surface-base">
      {/* Texture background representing artisanal mountain slate chalkboard */}
      <div className="absolute inset-0 bg-[radial-gradient(#2d3e33_1px,transparent_1px)] [background-size:16px_16px] opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-mint text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handwritten Daily on Village Walk Way</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Today's Chalkboard Features & Lunch Specials
            </h2>
            <p className="text-xs sm:text-sm text-surface-raised mt-1">
              Served hot and fresh from 11:00 AM to 3:00 PM. Quantities prepared fresh each morning.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto bg-black/40 px-3.5 py-2 rounded-md border border-[#2d4a36]">
            <Clock className="w-4 h-4 text-brand-mint" />
            <span className="text-xs font-semibold text-emerald-200">
              Lunch Hours: 11:00 AM – 3:00 PM
            </span>
          </div>
        </div>

        {/* Chalkboard Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chalkboardItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#243128] rounded-md p-5 border border-[#395040] shadow-card flex flex-col justify-between hover:border-brand-mint transition-all duration-fast"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#395040]">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-brand-mint bg-[#18231c] px-2.5 py-1 rounded-xs">
                    Chef's Feature
                  </span>
                  <span className="font-bold text-lg text-white">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <div className="h-44 rounded-xs overflow-hidden mb-4 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {item.pairing && (
                    <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-xs text-[11px] text-emerald-200 px-2 py-1 rounded-xs truncate">
                      Pairs with: {item.pairing}
                    </div>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-1.5 text-left">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed text-left line-clamp-3 mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#395040] flex items-center justify-between gap-2">
                <span className="text-[11px] text-gray-400 font-medium">
                  {item.prepTime || 'Freshly Prepared'}
                </span>
                <button
                  onClick={() => onAddToCart(item)}
                  className="inline-flex items-center gap-1.5 bg-brand-mint hover:bg-[#3d8c6b] active:bg-[#2e7054] text-[#002b11] font-bold text-xs px-3.5 py-2 rounded-xs transition-colors duration-fast"
                  aria-label={`Add ${item.name} to pickup bag`}
                >
                  <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Real Storefront Chalkboard Verification Note */}
        <div className="mt-8 bg-[#18231c] rounded-md p-4 border border-[#2d4a36] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-primary/80 flex items-center justify-center shrink-0 border border-brand-mint/50">
              <Check className="w-5 h-5 text-brand-mint" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                Authentic Cashiers Recipe Standard
              </div>
              <div className="text-[11px] text-gray-400">
                All daily features are prepared from scratch in our Village Walk kitchen using mountain farm ingredients.
              </div>
            </div>
          </div>
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto text-xs font-bold uppercase tracking-wider text-brand-mint hover:text-white px-4 py-2 border border-brand-mint/60 hover:border-white rounded-xs transition-colors"
          >
            Inquire for Group Lunch Catering
          </button>
        </div>
      </div>
    </section>
  )
}

