import React from 'react'
import { Phone, Clock, MapPin, ShieldCheck, Heart, Sparkles, ExternalLink } from 'lucide-react'
import { RESTAURANT_INFO } from '../data/restaurantData'

interface FooterProps {
  onNavigate: (sectionId: string) => void
  onOpenReservation: () => void
  onOpenDesignSystem: () => void
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenReservation,
  onOpenDesignSystem,
}) => {
  return (
    <footer className="bg-[#001f0c] text-surface-muted pt-14 pb-8 border-t border-[#003816] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#003816]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif italic text-2xl font-bold tracking-tight text-brand-mint">
                Village Pantry
              </span>
              <div className="text-[11px] uppercase tracking-[0.25em] font-semibold text-emerald-200">
                OF CASHIERS
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              A premier artisanal gourmet pantry, deli, and mountain market in Cashiers, North Carolina. Serving scratch-made lunches, Croque Monsieur, French Onion soup, and bespoke grazing platters.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-mint font-semibold">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>4.7★ Rated on Tripadvisor • Cashiers, NC</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-brand-mint transition-colors"
                >
                  Welcome
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('chalkboard')}
                  className="hover:text-brand-mint transition-colors"
                >
                  Today's Specials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-brand-mint transition-colors"
                >
                  Lunch Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pantry')}
                  className="hover:text-brand-mint transition-colors"
                >
                  The Pantry Market
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('charcuterie')}
                  className="hover:text-brand-mint transition-colors"
                >
                  Charcuterie Catering
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('atmosphere')}
                  className="hover:text-brand-mint transition-colors"
                >
                  Story & Atmosphere
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-brand-mint transition-colors"
                >
                  Guest Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Hours & Schedule
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-brand-mint shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Kitchen Lunch Menu</div>
                  <div>Mon – Sat: 11:00 AM – 3:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-brand-mint shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Pantry & Grab-and-Go</div>
                  <div>Mon – Sat: 11:00 AM – 5:00 PM</div>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-emerald-200/80">
                Sunday: Closed for private catering & event prep.
              </div>
            </div>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-mint shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Village Pantry of Cashiers</div>
                  <div>32 Village Walk Wy</div>
                  <div>Cashiers, NC 28717</div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-brand-mint shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="text-white font-bold hover:text-brand-mint transition-colors"
                >
                  {RESTAURANT_INFO.phoneFormatted}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenReservation}
                  className="w-full bg-brand-mint hover:bg-[#3d8c6b] text-[#002b11] font-bold text-xs py-2 px-3 rounded-xs shadow-card transition-colors"
                >
                  Direct Table / Catering Booking
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Accessibility & Design System Pill */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} Village Pantry of Cashiers. All rights reserved.
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-[11px] text-gray-400">
              WCAG 2.2 AA Compliant
            </span>
            <span>•</span>
            <button
              onClick={onOpenDesignSystem}
              className="inline-flex items-center gap-1.5 text-brand-mint hover:text-white transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tripadvisor Design Tokens & UI Guidance</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

