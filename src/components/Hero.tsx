import React from 'react'
import { Star, ShieldCheck, ArrowRight, Utensils, HeartHandshake, MapPin } from 'lucide-react'
import { RESTAURANT_INFO } from '../data/restaurantData'
import { IMAGES } from '../assets/images'

interface HeroProps {
  onExploreMenu: () => void
  onOpenReservation: () => void
  onViewSpecials: () => void
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onOpenReservation,
  onViewSpecials,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-surface-muted pt-6 pb-12 lg:py-16 border-b border-surface-raised/40">
      {/* Decorative background grid and warm ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f8f5] via-surface-strong/60 to-surface-muted -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Story, Title, Actions, Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tripadvisor Trust Badge */}
            <div className="inline-flex items-center gap-2.5 bg-surface-muted py-1.5 px-3 rounded-full border border-surface-raised/70 shadow-subtle flex-wrap">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-text-primary">
                {RESTAURANT_INFO.rating} ★
              </span>
              <span className="text-xs text-text-tertiary">|</span>
              <span className="text-xs font-semibold text-text-secondary flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                Tripadvisor Recommended • Cashiers, NC
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002b11] tracking-tight leading-[1.15]">
              Artisanal Delights & Mountain Hospitality in <span className="text-brand-mint font-serif italic font-normal">Cashiers</span>
            </h1>

            {/* Narrative Subhead */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-normal">
              Welcome to <strong>Village Pantry of Cashiers</strong>, nestled on Village Walk Way in the Blue Ridge mountains. Savor scratch-made Southern lunches, our signature Croque Monsieur with bubbling French Onion soup, curated boutique olive oils, and bespoke grazing boards.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2 bg-[#002b11] hover:bg-[#00421a] active:bg-[#001f0c] text-surface-muted font-bold text-sm sm:text-base px-6 py-3.5 rounded-md shadow-card hover-lift transition-all duration-fast"
              >
                <Utensils className="w-4 h-4 text-brand-mint" />
                <span>Explore Lunch Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center gap-2 bg-surface-muted hover:bg-surface-strong text-text-primary font-bold text-sm sm:text-base px-6 py-3.5 rounded-md border-2 border-brand-primary transition-all duration-fast"
              >
                <HeartHandshake className="w-4 h-4 text-brand-primary" />
                <span>Direct Table & Catering Inquiries</span>
              </button>
            </div>

            {/* Feature Highlights Pills */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-surface-raised/40">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                <span className="text-xs font-semibold text-text-secondary">Lunch 11am – 3pm Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-mint"></div>
                <span className="text-xs font-semibold text-text-secondary">Pantry & Grab-and-Go</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                <span className="text-xs font-semibold text-text-secondary">Bespoke Grazing Boards</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Hero Image: Generated Charcuterie Feast & Interior Display */}
              <div className="relative rounded-lg overflow-hidden shadow-elevated border-4 border-surface-muted bg-surface-strong group">
                <img
                  src={IMAGES.charcuterieBoard}
                  alt="Artisanal charcuterie and cheese grazing board with fresh figs and honey at Village Pantry of Cashiers"
                  className="w-full h-[340px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-brand-mint/90 text-[#002b11] text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-xs">
                      House Specialty
                    </span>
                    <span className="text-xs font-medium text-emerald-100">Handcrafted Daily</span>
                  </div>
                  <h3 className="font-serif italic text-xl font-bold text-white drop-shadow-sm">
                    Blue Ridge Charcuterie & Gourmet Cheeses
                  </h3>
                  <p className="text-xs text-white/90 line-clamp-2 mt-0.5">
                    Prosciutto di Parma, triple-cream brie, fresh mountain figs, honeycomb, and artisan crackers.
                  </p>
                </div>
              </div>

              {/* Floating Chalkboard Special Card */}
              <div
                onClick={onViewSpecials}
                className="cursor-pointer -mt-8 sm:-mt-10 mx-4 sm:mx-6 relative z-10 bg-surface-muted rounded-md p-3.5 shadow-card border border-surface-raised/70 hover:border-brand-primary transition-all duration-fast flex items-center gap-3.5"
              >
                <div className="w-14 h-14 rounded-xs overflow-hidden shrink-0 border border-surface-raised/50">
                  <img
                    src={IMAGES.croqueFrenchOnion}
                    alt="Croque Monsieur with French Onion Soup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-mint">
                      Today's Feature
                    </span>
                    <span className="text-xs font-bold text-brand-primary">$16.50</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-text-primary truncate">
                    Croque Monsieur & French Onion Soup
                  </div>
                  <div className="text-[11px] text-text-tertiary truncate">
                    Bubbled Gruyere cheese & 18-hour bone broth
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-primary shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

