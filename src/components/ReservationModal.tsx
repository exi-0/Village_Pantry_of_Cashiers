import React, { useState, useEffect } from 'react'
import { X, Calendar, Clock, Users, CheckCircle, Sparkles, MapPin, Phone, AlertCircle } from 'lucide-react'
import { RESTAURANT_INFO } from '../data/restaurantData'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
  initialGuests?: number
  initialBoardType?: string
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialGuests = 2,
  initialBoardType = '',
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('12:00')
  const [guests, setGuests] = useState(initialGuests)
  const [seatingPreference, setSeatingPreference] = useState<'indoor' | 'patio' | 'pickup'>('indoor')
  const [notes, setNotes] = useState(initialBoardType ? `Interested in: ${initialBoardType}` : '')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    if (initialGuests) setGuests(initialGuests)
    if (initialBoardType) setNotes(`Interested in: ${initialBoardType}`)
  }, [initialGuests, initialBoardType])

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const validate = () => {
    const errs: { [key: string]: string } = {}
    if (!name.trim()) errs.name = 'Please provide your full name'
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email address is required'
    if (!phone.trim()) errs.phone = 'Phone number is required for booking confirmation'
    if (!date) errs.date = 'Please select a preferred date'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    // Simulate instantaneous verification
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 800)
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setPhone('')
    setDate('')
    setTime('12:00')
    setGuests(2)
    setNotes('')
    setIsSuccess(false)
    setErrors({})
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
    >
      <div className="bg-surface-muted rounded-md max-w-xl w-full p-6 sm:p-8 shadow-modal border border-surface-raised/80 relative text-left transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text-tertiary hover:text-text-primary rounded-xs transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary"
          aria-label="Close reservation dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Confirmation Screen */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-brand-primary rounded-full flex items-center justify-center mx-auto border-2 border-brand-mint">
              <CheckCircle className="w-10 h-10 text-brand-mint" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-mint">
                Inquiry Confirmed
              </span>
              <h3 className="text-2xl font-extrabold text-brand-primary">
                Thank You, {name}!
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto">
                We have received your reservation & catering inquiry for <strong>{date} at {time}</strong>. Our pantry team will reach out directly at <strong>{phone}</strong> to confirm your details.
              </p>
            </div>

            <div className="bg-surface-strong p-4 rounded-xs border border-surface-raised/60 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-text-tertiary">Location:</span>
                <span className="font-semibold text-text-primary">32 Village Walk Wy, Cashiers, NC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-tertiary">Party Size:</span>
                <span className="font-semibold text-text-primary">{guests} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-tertiary">Preference:</span>
                <span className="font-semibold text-text-primary capitalize">{seatingPreference} Seating</span>
              </div>
              {notes && (
                <div className="flex justify-between pt-1 border-t border-surface-raised/30">
                  <span className="text-text-tertiary">Special Request:</span>
                  <span className="font-semibold text-text-primary truncate max-w-[200px]">{notes}</span>
                </div>
              )}
            </div>

            <div className="pt-3">
              <button
                onClick={handleReset}
                className="bg-brand-primary hover:bg-[#00471c] text-surface-muted font-bold text-xs sm:text-sm px-6 py-3 rounded-xs shadow-card transition-colors"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        ) : (
          /* Input Form */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-mint mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero-Commission Direct Booking</span>
              </div>
              <h3 id="reservation-title" className="text-2xl font-extrabold text-[#002b11] tracking-tight">
                Table Reservation & Catering Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Book a table for lunch, arrange a mountain picnic hamper, or order an artisanal charcuterie platter.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Montgomery"
                    className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xs border ${
                      errors.name ? 'border-red-500 bg-red-50' : 'border-surface-raised/70 bg-surface-strong'
                    } focus:bg-surface-muted focus:border-brand-primary outline-hidden`}
                  />
                  {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. (828) 555-0192"
                    className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xs border ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-surface-raised/70 bg-surface-strong'
                    } focus:bg-surface-muted focus:border-brand-primary outline-hidden`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Row 2: Email */}
              <div>
                <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xs border ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-surface-raised/70 bg-surface-strong'
                  } focus:bg-surface-muted focus:border-brand-primary outline-hidden`}
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
              </div>

              {/* Row 3: Date, Time & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xs border border-surface-raised/70 bg-surface-strong focus:bg-surface-muted focus:border-brand-primary outline-hidden"
                  />
                  {errors.date && <p className="text-[11px] text-red-600 mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xs border border-surface-raised/70 bg-surface-strong focus:bg-surface-muted focus:border-brand-primary outline-hidden"
                  >
                    <option value="11:00">11:00 AM (Opening)</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM (Lunch Peak)</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM (Pantry / Pickup)</option>
                    <option value="16:00">4:00 PM (Pantry / Pickup)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xs border border-surface-raised/70 bg-surface-strong focus:bg-surface-muted focus:border-brand-primary outline-hidden"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16, 20].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1">
                  Seating or Service Preference:
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setSeatingPreference('indoor')}
                    className={`py-2 px-2.5 rounded-xs border text-center transition-colors ${
                      seatingPreference === 'indoor'
                        ? 'border-brand-primary bg-emerald-50 text-brand-primary'
                        : 'border-surface-raised/60 bg-surface-strong text-text-secondary'
                    }`}
                  >
                    Indoor Dining
                  </button>
                  <button
                    type="button"
                    onClick={() => setSeatingPreference('patio')}
                    className={`py-2 px-2.5 rounded-xs border text-center transition-colors ${
                      seatingPreference === 'patio'
                        ? 'border-brand-primary bg-emerald-50 text-brand-primary'
                        : 'border-surface-raised/60 bg-surface-strong text-text-secondary'
                    }`}
                  >
                    Porch / Patio
                  </button>
                  <button
                    type="button"
                    onClick={() => setSeatingPreference('pickup')}
                    className={`py-2 px-2.5 rounded-xs border text-center transition-colors ${
                      seatingPreference === 'pickup'
                        ? 'border-brand-primary bg-emerald-50 text-brand-primary'
                        : 'border-surface-raised/60 bg-surface-strong text-text-secondary'
                    }`}
                  >
                    Pickup / Catering
                  </button>
                </div>
              </div>

              {/* Notes / Requests */}
              <div>
                <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1">
                  Special Requests, Dietary Preferences, or Catering Notes:
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Gluten-free bread option requested; preparing for a boat day on Lake Glenville..."
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xs border border-surface-raised/70 bg-surface-strong focus:bg-surface-muted focus:border-brand-primary outline-hidden"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3 border-t border-surface-raised/40 flex items-center justify-between gap-3">
                <span className="text-[11px] text-text-tertiary">
                  Direct inquiry • No third-party fees
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-[#00471c] active:bg-[#001f0c] text-surface-muted font-bold text-xs sm:text-sm px-6 py-3 rounded-xs shadow-card transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming...</span>
                  ) : (
                    <span>Submit Reservation Inquiry</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

