import React from 'react'
import { MapPin, Phone, Clock, Navigation, Car, Heart, ExternalLink, Calendar } from 'lucide-react'
import { RESTAURANT_INFO } from '../data/restaurantData'
import { IMAGES } from '../assets/images'

interface LocationContactProps {
  onOpenReservation: () => void
}

export const LocationContact: React.FC<LocationContactProps> = ({
  onOpenReservation,
}) => {
  return (
    <section id="location" className="py-14 sm:py-20 bg-surface-muted border-b border-surface-raised/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-mint bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
            <Navigation className="w-3.5 h-3.5 text-brand-mint" />
            <span>Plan Your Visit to Village Walk Way</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b11] tracking-tight">
            Location, Hours & Mountain Hospitality
          </h2>
          <p className="mt-2 text-sm sm:text-base text-text-secondary">
            Find us in the heart of Cashiers, North Carolina. Easy access with dedicated parking and a welcoming porch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hours, Address, Contact Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Hours Box */}
            <div className="bg-surface-strong p-6 rounded-md border border-surface-raised/70 shadow-subtle space-y-4">
              <div className="flex items-center gap-2.5 text-brand-primary font-bold text-base border-b border-surface-raised/50 pb-3">
                <Clock className="w-5 h-5 text-brand-mint" />
                <span>Operating Hours</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start justify-between">
                  <span className="font-semibold text-text-primary">Kitchen Lunch Menu</span>
                  <span className="text-right text-brand-primary font-bold">11:00 AM – 3:00 PM</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="font-semibold text-text-primary">Pantry & Grab-and-Go</span>
                  <span className="text-right text-brand-primary font-bold">11:00 AM – 5:00 PM</span>
                </div>
                <div className="flex items-start justify-between text-text-tertiary">
                  <span>Sunday</span>
                  <span className="text-right font-medium">Closed (Private Catering Only)</span>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xs border border-emerald-200 text-xs text-brand-primary">
                <strong>Tip for Hikers:</strong> Visiting Whiteside Mountain or Lake Glenville? Order ahead by 11:30 AM to guarantee your picnic hamper is chilled and ready.
              </div>
            </div>

            {/* Address & Phone Box */}
            <div className="bg-surface-strong p-6 rounded-md border border-surface-raised/70 shadow-subtle space-y-4">
              <div className="flex items-center gap-2.5 text-brand-primary font-bold text-base border-b border-surface-raised/50 pb-3">
                <MapPin className="w-5 h-5 text-brand-mint" />
                <span>Address & Contact</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-text-secondary">
                <div>
                  <div className="font-bold text-text-primary">Village Pantry of Cashiers</div>
                  <div>32 Village Walk Wy, Cashiers, NC 28717</div>
                  <div className="text-[11px] text-text-tertiary">Jackson County, Western North Carolina</div>
                </div>

                <div className="pt-2">
                  <div className="font-semibold text-text-primary">Direct Phone:</div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-base font-bold text-brand-primary hover:text-brand-mint flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-mint" />
                    <span>{RESTAURANT_INFO.phoneFormatted}</span>
                  </a>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <a
                    href={RESTAURANT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-[#00471c] text-surface-muted font-bold text-xs py-2.5 px-3 rounded-xs transition-colors"
                  >
                    <span>Google Maps Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={onOpenReservation}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-surface-muted border border-brand-primary text-brand-primary font-bold text-xs py-2.5 px-3 rounded-xs hover:bg-surface-strong transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Inquire / Booking</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Parking & Accessibility */}
            <div className="p-4 bg-surface-strong rounded-md border border-surface-raised/50 flex items-start gap-3">
              <Car className="w-5 h-5 text-brand-mint shrink-0 mt-0.5" />
              <div className="text-xs text-text-secondary">
                <strong>Free Parking:</strong> Dedicated complimentary parking directly in front of the shop on Village Walk Way. Step-free entry and wheelchair accessible.
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Storefront Visual */}
          <div className="lg:col-span-7 space-y-6">
            {/* Real Map Frame */}
            <div className="rounded-md overflow-hidden shadow-card border border-surface-raised/70 bg-surface-strong h-[340px] sm:h-[400px] relative">
              <iframe
                title="Village Pantry of Cashiers Location Map"
                src="https://maps.google.com/maps?q=32%20Village%20Walk%20Wy,%20Cashiers,%20NC%2028717&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                aria-label="Map showing Village Pantry of Cashiers at 32 Village Walk Wy, Cashiers, NC"
              />
            </div>

            {/* Regional Driving Distance Table */}
            <div className="bg-surface-strong p-5 rounded-md border border-surface-raised/60 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-3">
                Convenient Access from Surrounding Mountain Towns:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-surface-muted p-2.5 rounded-xs border border-surface-raised/40">
                  <div className="font-bold text-brand-primary">Highlands, NC</div>
                  <div className="text-[11px] text-text-tertiary">15 mins (10 miles)</div>
                </div>
                <div className="bg-surface-muted p-2.5 rounded-xs border border-surface-raised/40">
                  <div className="font-bold text-brand-primary">Lake Glenville</div>
                  <div className="text-[11px] text-text-tertiary">8 mins (5 miles)</div>
                </div>
                <div className="bg-surface-muted p-2.5 rounded-xs border border-surface-raised/40">
                  <div className="font-bold text-brand-primary">Sapphire Valley</div>
                  <div className="text-[11px] text-text-tertiary">6 mins (3.5 miles)</div>
                </div>
                <div className="bg-surface-muted p-2.5 rounded-xs border border-surface-raised/40">
                  <div className="font-bold text-brand-primary">Sylva / Cullowhee</div>
                  <div className="text-[11px] text-text-tertiary">35 mins (26 miles)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

