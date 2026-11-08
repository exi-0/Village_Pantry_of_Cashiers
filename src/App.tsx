import React, { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ChalkboardBanner } from './components/ChalkboardBanner'
import { MenuSection } from './components/MenuSection'
import { PantryMarket } from './components/PantryMarket'
import { CharcuterieCatering } from './components/CharcuterieCatering'
import { StoryAtmosphere } from './components/StoryAtmosphere'
import { ReviewsSection } from './components/ReviewsSection'
import { LocationContact } from './components/LocationContact'
import { Footer } from './components/Footer'
import { ReservationModal } from './components/ReservationModal'
import { CartDrawer } from './components/CartDrawer'
import { DesignSystemModal } from './components/DesignSystemModal'

import { MENU_ITEMS, RESTAURANT_INFO } from './data/restaurantData'
import { MenuItem, CartItem } from './types'
import { Phone, Utensils, Calendar, ShoppingBag } from 'lucide-react'

export function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isReservationOpen, setIsReservationOpen] = useState(false)
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState(false)

  // Initial reservation parameters for pre-filling
  const [reservationParams, setReservationParams] = useState<{
    guestCount: number
    boardType: string
  }>({
    guestCount: 2,
    boardType: '',
  })

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { item, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => {
          if (i.item.id === id) {
            const newQ = i.quantity + delta
            return newQ > 0 ? { ...i, quantity: newQ } : null
          }
          return i
        })
        .filter(Boolean) as CartItem[]
    )
  }

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.item.id !== id))
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId)
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleOpenReservationWithDetails = (details: {
    guestCount: number
    boardType: string
  }) => {
    setReservationParams(details)
    setIsReservationOpen(true)
  }

  const chalkboardSpecials = MENU_ITEMS.filter((i) => i.isChalkboardSpecial)
  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0)

  return (
    <div className="min-h-screen bg-surface-strong text-text-primary flex flex-col font-primary selection:bg-brand-primary selection:text-surface-muted">
      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => {
          setReservationParams({ guestCount: 2, boardType: '' })
          setIsReservationOpen(true)
        }}
        onOpenDesignSystem={() => setIsDesignSystemOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => handleNavigate('menu')}
          onOpenReservation={() => {
            setReservationParams({ guestCount: 2, boardType: '' })
            setIsReservationOpen(true)
          }}
          onViewSpecials={() => handleNavigate('chalkboard')}
        />

        {/* Authentic Storefront Chalkboard Specials */}
        <ChalkboardBanner
          chalkboardItems={chalkboardSpecials}
          onAddToCart={handleAddToCart}
          onOpenReservation={() => {
            setReservationParams({ guestCount: 6, boardType: 'Group Lunch Catering' })
            setIsReservationOpen(true)
          }}
        />

        {/* Full Interactive Menu with Search & Dietary Filters */}
        <MenuSection
          items={MENU_ITEMS}
          onAddToCart={handleAddToCart}
        />

        {/* Gourmet Pantry & Artisan Market */}
        <PantryMarket
          onAddToCart={handleAddToCart}
          onExploreFullMenu={() => handleNavigate('menu')}
        />

        {/* Charcuterie & Private Event Grazing Engine */}
        <CharcuterieCatering
          onOpenReservationWithDetails={handleOpenReservationWithDetails}
        />

        {/* Story, Heritage & Authentic Enhanced Photographs */}
        <StoryAtmosphere />

        {/* Tripadvisor 4.7★ Reviews & Guest Acclaim */}
        <ReviewsSection />

        {/* Map, Directions, Hours & Visit Details */}
        <LocationContact
          onOpenReservation={() => {
            setReservationParams({ guestCount: 2, boardType: '' })
            setIsReservationOpen(true)
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReservation={() => {
          setReservationParams({ guestCount: 2, boardType: '' })
          setIsReservationOpen(true)
        }}
        onOpenDesignSystem={() => setIsDesignSystemOpen(true)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-surface-muted/95 backdrop-blur-md border-t border-surface-raised/60 p-2.5 flex items-center justify-around shadow-modal">
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="flex flex-col items-center text-text-primary hover:text-brand-primary p-1"
          aria-label="Call restaurant"
        >
          <Phone className="w-5 h-5 text-brand-mint" />
          <span className="text-[10px] font-semibold mt-0.5">Call</span>
        </a>

        <button
          onClick={() => handleNavigate('menu')}
          className="flex flex-col items-center text-text-primary hover:text-brand-primary p-1"
        >
          <Utensils className="w-5 h-5 text-brand-primary" />
          <span className="text-[10px] font-semibold mt-0.5">Menu</span>
        </button>

        <button
          onClick={() => {
            setReservationParams({ guestCount: 2, boardType: '' })
            setIsReservationOpen(true)
          }}
          className="flex flex-col items-center text-text-primary hover:text-brand-primary p-1"
        >
          <Calendar className="w-5 h-5 text-brand-primary" />
          <span className="text-[10px] font-semibold mt-0.5">Reserve</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center text-text-primary hover:text-brand-primary p-1"
        >
          <ShoppingBag className="w-5 h-5 text-brand-primary" />
          <span className="text-[10px] font-semibold mt-0.5">Order ({totalCartCount})</span>
          {totalCartCount > 0 && (
            <span className="absolute -top-1 right-2 w-4 h-4 bg-brand-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              {totalCartCount}
            </span>
          )}
        </button>
      </div>

      {/* Modals & Drawers */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        initialGuests={reservationParams.guestCount}
        initialBoardType={reservationParams.boardType}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <DesignSystemModal
        isOpen={isDesignSystemOpen}
        onClose={() => setIsDesignSystemOpen(false)}
      />
    </div>
  )
}

export default App

