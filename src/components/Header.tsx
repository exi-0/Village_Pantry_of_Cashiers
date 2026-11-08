import React, { useState, useEffect } from 'react'
import { Phone, Clock, MapPin, ShoppingBag, Menu, X, Sparkles, Calendar, ChevronRight } from 'lucide-react'
import { RESTAURANT_INFO } from '../data/restaurantData'

interface HeaderProps {
  cartCount: number
  onOpenCart: () => void
  onOpenReservation: () => void
  onOpenDesignSystem: () => void
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  onOpenDesignSystem,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { id: 'menu', label: 'Lunch Menu' },
    { id: 'chalkboard', label: "Daily Specials" },
    { id: 'pantry', label: 'The Pantry & Market' },
    { id: 'charcuterie', label: 'Grazing & Catering' },
    { id: 'atmosphere', label: 'Atmosphere' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Hours & Visit' },
  ]

  const handleNavClick = (id: string) => {
    onNavigate(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-fast">
      {/* Top Utility Bar (Tripadvisor implementation-ready design) */}
      <div className="bg-[#002b11] text-surface-muted text-xs py-2 px-4 sm:px-8 border-b border-[#003d18]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-medium flex-wrap">
            <span className="flex items-center gap-1.5 text-brand-mint font-semibold">
              <Clock className="w-3.5 h-3.5 text-brand-mint" aria-hidden="true" />
              Lunch: 11am–3pm • Pantry: 11am–5pm
            </span>
            <span className="hidden md:inline-block text-[#888484]">•</span>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-brand-mint transition-colors duration-fast focus-visible:ring-1 focus-visible:ring-brand-mint"
              aria-label={`Call restaurant at ${RESTAURANT_INFO.phoneFormatted}`}
            >
              <Phone className="w-3.5 h-3.5 text-brand-mint" aria-hidden="true" />
              <span>{RESTAURANT_INFO.phoneFormatted}</span>
            </a>
            <span className="hidden lg:inline-block text-[#888484]">•</span>
            <a
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 hover:text-brand-mint transition-colors duration-fast"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-mint" aria-hidden="true" />
              <span>32 Village Walk Wy, Cashiers, NC</span>
            </a>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onOpenDesignSystem}
              className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold bg-[#00421a] hover:bg-[#005722] text-[#d1e7dd] px-2.5 py-1 rounded-sm border border-[#005722] transition-colors duration-fast"
              title="Inspect Tripadvisor Design System Tokens"
            >
              <Sparkles className="w-3 h-3 text-brand-mint" />
              Theme Tokens
            </button>
            <div className="hidden sm:flex items-center gap-1 text-xs text-[#d1e7dd]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open Today for Lunch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-fast ${
          isScrolled
            ? 'bg-surface-muted/95 backdrop-blur-md shadow-card border-b border-surface-raised/40 py-2.5'
            : 'bg-surface-muted border-b border-surface-raised/30 py-3.5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Link */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex flex-col text-left group focus-visible:ring-2 focus-visible:ring-brand-primary rounded-xs p-1"
            aria-label="Village Pantry of Cashiers - Return to top"
          >
            <span className="font-serif italic text-xl sm:text-2xl font-bold tracking-tight text-brand-mint group-hover:text-brand-primary transition-colors duration-fast">
              Village Pantry
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold text-text-primary -mt-1">
              OF CASHIERS
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-xs transition-colors duration-fast ${
                    isActive
                      ? 'text-brand-primary font-bold bg-surface-strong border-b-2 border-brand-primary'
                      : 'text-text-secondary hover:text-brand-primary hover:bg-surface-strong/70'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 sm:px-3 sm:py-2 flex items-center gap-2 text-text-primary bg-surface-strong hover:bg-brand-primary hover:text-surface-muted rounded-md border border-surface-raised/60 transition-all duration-fast"
              aria-label={`View order bag with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:inline text-xs font-semibold">Order Ahead</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-primary text-surface-muted text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct Reservation CTA */}
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-1.5 bg-brand-primary hover:bg-[#00441b] active:bg-[#001f0c] text-surface-muted text-xs md:text-sm font-semibold px-4 py-2.5 rounded-md transition-all duration-fast shadow-subtle hover:shadow-card"
            >
              <Calendar className="w-4 h-4 text-brand-mint" aria-hidden="true" />
              <span>Reserve / Inquire</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-md text-text-primary hover:bg-surface-strong border border-surface-raised/40 transition-colors duration-fast"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Accessible, responsive, touch-friendly) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[92px] z-50 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-surface-muted w-full max-w-sm ml-auto h-full p-6 shadow-modal overflow-y-auto flex flex-col justify-between">
            <div className="space-y-4">
              <div className="pb-3 border-b border-surface-raised/40 flex items-center justify-between">
                <div>
                  <div className="font-serif italic font-bold text-lg text-brand-mint">Village Pantry</div>
                  <div className="text-[10px] tracking-widest text-text-secondary uppercase">Cashiers, NC</div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-text-tertiary hover:text-text-primary rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-2 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="w-full flex items-center justify-between py-3 px-3 text-left font-medium text-text-primary hover:bg-surface-strong rounded-md transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-text-tertiary" />
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-surface-raised/40 space-y-2.5">
                <button
                  onClick={() => {
                    onOpenReservation()
                    setMobileMenuOpen(false)
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-brand-primary text-surface-muted font-semibold py-3 px-4 rounded-md shadow-card"
                >
                  <Calendar className="w-4 h-4 text-brand-mint" />
                  <span>Reserve Table / Private Catering</span>
                </button>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-surface-strong text-text-primary font-semibold py-3 px-4 rounded-md border border-surface-raised/60"
                >
                  <Phone className="w-4 h-4 text-brand-mint" />
                  <span>Call (828) 547-0345</span>
                </a>
              </div>
            </div>

            <div className="pt-6 text-xs text-text-tertiary text-center border-t border-surface-raised/30">
              <p>32 Village Walk Wy, Cashiers, NC 28717</p>
              <p className="mt-1">Lunch 11am–3pm • Pantry 11am–5pm</p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

