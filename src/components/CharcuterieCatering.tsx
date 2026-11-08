import React, { useState } from 'react'
import { Sparkles, Users, Wine, Calendar, Check, ArrowRight, ShieldCheck } from 'lucide-react'
import { IMAGES } from '../assets/images'

interface CharcuterieCateringProps {
  onOpenReservationWithDetails: (details: { guestCount: number; boardType: string }) => void
}

export const CharcuterieCatering: React.FC<CharcuterieCateringProps> = ({
  onOpenReservationWithDetails,
}) => {
  const [guests, setGuests] = useState<number>(4)
  const [boardType, setBoardType] = useState<string>('classic')
  const [includeWine, setIncludeWine] = useState<boolean>(true)

  const boardOptions = [
    {
      id: 'classic',
      name: 'The Blue Ridge Signature',
      description: 'Prosciutto di Parma, Spanish chorizo, aged sharp white cheddar, triple-cream brie, fresh mountain figs, blackberries, walnuts, honeycomb & artisan crackers.',
      basePricePerGuest: 14,
    },
    {
      id: 'french',
      name: 'French Countryside Selection',
      description: 'Saucisson sec, duck rillettes, Camembert, Roquefort, cornichons, Dijon mustard, crusty sourdough baguette & gourmet butter.',
      basePricePerGuest: 16,
    },
    {
      id: 'mountain-veggie',
      name: 'Artisan Fromagerie & Orchard',
      description: 'Five artisanal farmstead cheeses, spiced roasted pecans, dried apricots, marinated olives, rosemary crackers, and local mountain clover honey.',
      basePricePerGuest: 13,
    },
  ]

  const selectedBoard = boardOptions.find((b) => b.id === boardType) || boardOptions[0]
  const winePrice = includeWine ? 28 : 0
  const totalPrice = guests * selectedBoard.basePricePerGuest + winePrice

  const handleInquire = () => {
    onOpenReservationWithDetails({
      guestCount: guests,
      boardType: selectedBoard.name,
    })
  }

  return (
    <section id="charcuterie" className="py-14 sm:py-20 bg-surface-strong border-b border-surface-raised/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Showcase featuring the generated charcuterie image */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-lg overflow-hidden shadow-elevated border-4 border-surface-muted bg-black">
              <img
                src={IMAGES.charcuterieBoard}
                alt="Exquisite artisanal charcuterie and cheese board created for Village Pantry of Cashiers"
                className="w-full h-[360px] sm:h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-brand-primary/90 backdrop-blur-xs text-brand-mint text-xs font-bold px-3 py-1.5 rounded-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Board Artistry</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 text-left text-white">
                <p className="text-xs text-emerald-200 uppercase tracking-wider font-semibold">
                  Prepared on Solid Slate & Wood Paddle Boards
                </p>
                <h3 className="font-serif italic text-xl sm:text-2xl font-bold text-white mt-0.5">
                  Handcrafted for Mountain Cabins & Gatherings
                </h3>
              </div>
            </div>

            {/* Quick Badges below image */}
            <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
              <div className="bg-surface-muted p-2.5 rounded-xs border border-surface-raised/60">
                <div className="font-bold text-brand-primary">Imported & Local</div>
                <div className="text-[10px] text-text-tertiary">Aged Meats & Cheeses</div>
              </div>
              <div className="bg-surface-muted p-2.5 rounded-xs border border-surface-raised/60">
                <div className="font-bold text-brand-primary">Custom Sizes</div>
                <div className="text-[10px] text-text-tertiary">2 to 50+ Guests</div>
              </div>
              <div className="bg-surface-muted p-2.5 rounded-xs border border-surface-raised/60">
                <div className="font-bold text-brand-primary">24h Advance</div>
                <div className="text-[10px] text-text-tertiary">Or Pick Up Same Day</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Catering & Grazing Builder */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary bg-surface-muted px-3 py-1 rounded-full border border-surface-raised/60 mb-2">
                <Users className="w-3.5 h-3.5 text-brand-mint" />
                <span>Bespoke Mountain Catering</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002b11] tracking-tight">
                Private Grazing Boards & Event Platter Engine
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Whether entertaining guests on Lake Glenville, hosting an intimate family dinner, or celebrating in a mountain lodge, our custom grazing platters create an unforgettable centerpiece.
              </p>
            </div>

            {/* Interactive Customizer Card */}
            <div className="bg-surface-muted p-5 sm:p-6 rounded-md shadow-card border border-surface-raised/70 space-y-5">
              {/* Board Style Selector */}
              <div>
                <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                  1. Choose Platter Style:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {boardOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setBoardType(opt.id)}
                      className={`p-2.5 text-left rounded-xs border transition-all ${
                        boardType === opt.id
                          ? 'border-brand-primary bg-emerald-50 text-brand-primary font-bold shadow-xs'
                          : 'border-surface-raised/60 bg-surface-strong text-text-secondary hover:border-brand-primary/50'
                      }`}
                    >
                      <div className="text-xs font-bold">{opt.name}</div>
                      <div className="text-[11px] text-text-tertiary">${opt.basePricePerGuest}/person</div>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-text-secondary mt-2 bg-surface-strong p-2 rounded-xs border border-surface-raised/30">
                  {selectedBoard.description}
                </p>
              </div>

              {/* Guest Count Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-text-primary uppercase tracking-wider">
                    2. Guest Count / Party Size:
                  </label>
                  <span className="text-xs font-bold text-brand-primary bg-surface-strong px-2 py-0.5 rounded-xs border border-surface-raised/50">
                    {guests} Guests
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {[2, 4, 6, 8, 12, 16].map((num) => (
                    <button
                      key={num}
                      onClick={() => setGuests(num)}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-xs border transition-colors ${
                        guests === num
                          ? 'bg-brand-primary text-white border-brand-primary'
                          : 'bg-surface-strong text-text-secondary border-surface-raised/60 hover:bg-surface-raised/40'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wine Pairing Toggle */}
              <div className="flex items-center justify-between p-3 rounded-xs bg-surface-strong border border-surface-raised/50">
                <div className="flex items-center gap-2.5">
                  <Wine className="w-4 h-4 text-brand-primary" />
                  <div>
                    <div className="text-xs font-bold text-text-primary">
                      Add Sommelier Wine Pairing (+$28)
                    </div>
                    <div className="text-[11px] text-text-tertiary">
                      Includes 1 chilled bottle matched to your selected cheeses
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={includeWine}
                  onChange={(e) => setIncludeWine(e.target.checked)}
                  className="w-4 h-4 text-brand-primary rounded-xs focus:ring-brand-primary"
                  aria-label="Add sommelier wine pairing"
                />
              </div>

              {/* Price Calculation & Inquiry CTA */}
              <div className="pt-3 border-t border-surface-raised/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-text-tertiary">
                    Estimated Platter Price
                  </div>
                  <div className="text-2xl font-extrabold text-brand-primary">
                    ${totalPrice.toFixed(2)}
                  </div>
                </div>

                <button
                  onClick={handleInquire}
                  className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#00471c] active:bg-[#001f0c] text-surface-muted font-bold text-xs sm:text-sm px-5 py-3 rounded-md shadow-card hover-lift transition-all"
                >
                  <Calendar className="w-4 h-4 text-brand-mint" />
                  <span>Inquire for This Date</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

