import React, { useState } from 'react'
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CheckCircle2, Clock } from 'lucide-react'
import { CartItem } from '../types'
import { RESTAURANT_INFO } from '../data/restaurantData'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (id: string, delta: number) => void
  onRemoveItem: (id: string) => void
  onClearCart: () => void
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [pickupTime, setPickupTime] = useState('Today at 12:30 PM')
  const [isOrdered, setIsOrdered] = useState(false)

  if (!isOpen) return null

  const subtotal = items.reduce((sum, item) => sum + item.item.price * item.quantity, 0)
  const tax = subtotal * 0.07 // 7% NC Sales Tax
  const total = subtotal + tax

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setIsOrdered(true)
  }

  const handleFinish = () => {
    setIsOrdered(false)
    onClearCart()
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      <div className="bg-surface-muted w-full max-w-md h-full shadow-modal flex flex-col justify-between text-left">
        {/* Drawer Header */}
        <div className="p-5 border-b border-surface-raised/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-primary" />
            <h3 id="cart-title" className="font-extrabold text-base text-text-primary">
              Your Pickup Order ({items.reduce((acc, i) => acc + i.quantity, 0)} items)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-text-tertiary hover:text-text-primary rounded-xs transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isOrdered ? (
          <div className="p-8 text-center space-y-4 my-auto">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto border-2 border-brand-mint">
              <CheckCircle2 className="w-10 h-10 text-brand-mint" />
            </div>
            <h4 className="text-xl font-extrabold text-brand-primary">
              Pickup Order Sent!
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Thank you, <strong>{customerName || 'Guest'}</strong>. Your order is being freshly prepared at Village Pantry of Cashiers for pickup at <strong>{pickupTime}</strong>.
            </p>
            <div className="p-3 bg-surface-strong rounded-xs border border-surface-raised/50 text-xs text-text-secondary">
              Total to pay upon pickup: <strong>${total.toFixed(2)}</strong>
            </div>
            <button
              onClick={handleFinish}
              className="w-full bg-brand-primary text-surface-muted font-bold text-xs py-3 rounded-xs"
            >
              Done / Return to Site
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="p-8 text-center space-y-4 my-auto">
            <div className="w-16 h-16 bg-surface-strong rounded-full flex items-center justify-center mx-auto text-text-tertiary">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h4 className="text-base font-bold text-text-primary">
              Your Order Bag is Empty
            </h4>
            <p className="text-xs text-text-secondary max-w-xs mx-auto">
              Explore our freshly prepared sandwiches, soups, charcuterie boards, and boutique pantry olive oils.
            </p>
            <button
              onClick={onClose}
              className="bg-brand-primary text-surface-muted font-bold text-xs px-5 py-2.5 rounded-xs"
            >
              Browse Lunch Menu
            </button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 pb-3 border-b border-surface-raised/30"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-xs shrink-0 border border-surface-raised/40"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs sm:text-sm text-text-primary truncate">
                      {item.name}
                    </h5>
                    <div className="text-xs font-semibold text-brand-primary">
                      ${(item.price * quantity).toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1.5 bg-surface-strong px-2 py-1 rounded-xs border border-surface-raised/50">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="text-text-secondary hover:text-text-primary p-0.5"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="text-text-secondary hover:text-text-primary p-0.5"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-text-tertiary hover:text-red-600 p-1"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}

              {/* Pickup Contact Information Form */}
              <form id="cart-form" onSubmit={handleSubmitOrder} className="pt-2 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-text-primary">
                  Pickup Contact Details
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-text-secondary mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David King"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-xs border border-surface-raised/60 bg-surface-strong focus:bg-surface-muted focus:border-brand-primary outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-text-secondary mb-1">
                    Mobile Phone (for pickup text) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (828) 555-0199"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-xs border border-surface-raised/60 bg-surface-strong focus:bg-surface-muted focus:border-brand-primary outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-text-secondary mb-1">
                    Estimated Pickup Time
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-xs border border-surface-raised/60 bg-surface-strong focus:bg-surface-muted focus:border-brand-primary outline-hidden"
                  >
                    <option value="In 20 minutes (11:45 AM)">In 20 minutes</option>
                    <option value="Today at 12:15 PM">Today at 12:15 PM</option>
                    <option value="Today at 12:45 PM">Today at 12:45 PM</option>
                    <option value="Today at 1:30 PM">Today at 1:30 PM</option>
                    <option value="Today at 2:30 PM">Today at 2:30 PM</option>
                    <option value="Pantry pickup at 4:00 PM">Pantry pickup at 4:00 PM</option>
                  </select>
                </div>
              </form>
            </div>

            {/* Summary & Checkout Footer */}
            <div className="p-5 border-t border-surface-raised/50 bg-surface-strong space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>NC Sales Tax (7%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-brand-primary pt-1.5 border-t border-surface-raised/40">
                  <span>Total Due at Pickup</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                form="cart-form"
                className="w-full bg-brand-primary hover:bg-[#00471c] active:bg-[#001f0c] text-surface-muted font-bold text-xs sm:text-sm py-3 px-4 rounded-xs shadow-card flex items-center justify-center gap-2 transition-colors"
              >
                <span>Submit Pickup Order (${total.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] text-center text-text-tertiary">
                Pick up at 32 Village Walk Wy, Cashiers, NC • Pay at counter
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

