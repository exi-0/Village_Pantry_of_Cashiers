import React, { useState, useMemo } from 'react'
import { Search, Plus, Check, Star, Filter, Sparkles } from 'lucide-react'
import { MenuItem, MenuItemCategory } from '../types'

interface MenuSectionProps {
  items: MenuItem[]
  onAddToCart: (item: MenuItem) => void
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterVegetarian, setFilterVegetarian] = useState(false)
  const [filterGlutenFree, setFilterGlutenFree] = useState(false)
  const [filterStaffPicks, setFilterStaffPicks] = useState(false)
  const [addedItemIds, setAddedItemIds] = useState<{ [id: string]: boolean }>({})

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'sandwiches', label: 'Sandwiches & Po’Boys' },
    { id: 'soups', label: 'Soups & Bowls' },
    { id: 'charcuterie', label: 'Charcuterie Boards' },
    { id: 'grab-and-go', label: 'Grab & Go Cases' },
    { id: 'pantry-goods', label: 'Pantry Essentials' },
    { id: 'beverages', label: 'Wine & Beverages' },
  ]

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false
      }
      // Search match
      if (
        searchQuery &&
        !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }
      // Dietary filters
      if (filterVegetarian && !item.isVegetarian) return false
      if (filterGlutenFree && !item.isGlutenFreeAvailable) return false
      if (filterStaffPicks && !item.isStaffPick) return false

      return true
    })
  }, [items, selectedCategory, searchQuery, filterVegetarian, filterGlutenFree, filterStaffPicks])

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item)
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }))
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }))
    }, 1500)
  }

  return (
    <section id="menu" className="py-14 sm:py-20 bg-surface-strong border-b border-surface-raised/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary bg-surface-muted px-3 py-1 rounded-full border border-surface-raised/60 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-mint" />
            <span>Seasonal Mountain Fare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b11] tracking-tight">
            Artisanal Lunch & Pantry Menu
          </h2>
          <p className="mt-2 text-sm sm:text-base text-text-secondary">
            Freshly prepared daily with prime provisions from Cashiers, Highlands, and the Carolina Blue Ridge mountains.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="bg-surface-muted p-4 sm:p-5 rounded-md shadow-card border border-surface-raised/60 mb-8 space-y-4">
          {/* Top row: Category Pills (Wrap naturally on mobile per mobile-responsive skill) */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pb-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-xs whitespace-nowrap transition-all duration-fast ${
                    isSelected
                      ? 'bg-brand-primary text-surface-muted shadow-sm'
                      : 'bg-surface-strong text-text-secondary hover:text-text-primary hover:bg-surface-raised/40'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Bottom row: Search and Dietary Toggles */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-surface-raised/40">
            {/* Search input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-text-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search sandwiches, soups, cheeses, or pantry goods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xs border border-surface-raised/70 bg-surface-strong focus:bg-surface-muted focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-hidden transition-colors"
                aria-label="Search menu items"
              />
            </div>

            {/* Quick Dietary Filters */}
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="text-text-tertiary flex items-center gap-1 font-medium hidden sm:inline">
                <Filter className="w-3.5 h-3.5" /> Filters:
              </span>
              <button
                onClick={() => setFilterStaffPicks(!filterStaffPicks)}
                className={`px-2.5 py-1.5 rounded-xs font-medium border flex items-center gap-1 transition-colors ${
                  filterStaffPicks
                    ? 'bg-brand-primary text-surface-muted border-brand-primary'
                    : 'bg-surface-strong text-text-secondary border-surface-raised/60 hover:bg-surface-raised/30'
                }`}
              >
                <Star className="w-3 h-3 fill-current text-amber-400" />
                <span>Staff Picks</span>
              </button>

              <button
                onClick={() => setFilterVegetarian(!filterVegetarian)}
                className={`px-2.5 py-1.5 rounded-xs font-medium border transition-colors ${
                  filterVegetarian
                    ? 'bg-brand-primary text-surface-muted border-brand-primary'
                    : 'bg-surface-strong text-text-secondary border-surface-raised/60 hover:bg-surface-raised/30'
                }`}
              >
                Vegetarian
              </button>

              <button
                onClick={() => setFilterGlutenFree(!filterGlutenFree)}
                className={`px-2.5 py-1.5 rounded-xs font-medium border transition-colors ${
                  filterGlutenFree
                    ? 'bg-brand-primary text-surface-muted border-brand-primary'
                    : 'bg-surface-strong text-text-secondary border-surface-raised/60 hover:bg-surface-raised/30'
                }`}
              >
                Gluten-Free Opt.
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-surface-muted p-12 text-center rounded-md border border-surface-raised/60">
            <p className="text-text-secondary text-base font-semibold">
              No menu items match your current filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
                setFilterVegetarian(false)
                setFilterGlutenFree(false)
                setFilterStaffPicks(false)
              }}
              className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-brand-primary underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAdded = addedItemIds[item.id]
              return (
                <div
                  key={item.id}
                  className="bg-surface-muted rounded-md overflow-hidden border border-surface-raised/60 shadow-subtle hover-lift flex flex-col justify-between transition-all duration-fast"
                >
                  <div>
                    {/* Item Image with Badges */}
                    <div className="relative h-48 w-full bg-surface-strong overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                        {item.isChalkboardSpecial && (
                          <span className="bg-[#002b11] text-brand-mint text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-xs shadow-xs">
                            Daily Special
                          </span>
                        )}
                        {item.isStaffPick && (
                          <span className="bg-amber-600 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-xs shadow-xs">
                            Guest Favorite
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 bg-surface-muted/95 backdrop-blur-xs font-extrabold text-sm text-brand-primary px-2.5 py-1 rounded-xs shadow-sm">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 text-left">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-bold text-base text-text-primary leading-snug">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-3">
                        {item.description}
                      </p>

                      {item.pairing && (
                        <div className="text-[11px] text-brand-mint font-semibold mb-2">
                          ✦ Recommended pairing: {item.pairing}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: Metadata and Add to Order Button */}
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-3 border-t border-surface-raised/30 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-text-tertiary">
                      {item.prepTime || item.calories || 'Freshly made'}
                    </span>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`inline-flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded-xs transition-all duration-fast ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-brand-primary hover:bg-[#00471c] active:bg-[#001f0c] text-surface-muted'
                      }`}
                      aria-label={`Add ${item.name} to pickup bag`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
