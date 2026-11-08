import React, { useState } from 'react'
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ThumbsUp } from 'lucide-react'
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData'

export const ReviewsSection: React.FC = () => {
  const [helpfulCounts, setHelpfulCounts] = useState<{ [id: string]: number }>({
    'rev-1': 14,
    'rev-2': 11,
    'rev-3': 9,
    'rev-4': 6,
  })

  const handleHelpful = (id: string) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  return (
    <section id="reviews" className="py-14 sm:py-20 bg-surface-strong border-b border-surface-raised/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary bg-surface-muted px-3 py-1 rounded-full border border-surface-raised/60 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
            <span>Tripadvisor Verified Guest Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b11] tracking-tight">
            Guest Experiences & Mountain Acclaim
          </h2>
          <p className="mt-2 text-sm sm:text-base text-text-secondary">
            Read what visitors, hikers, and Cashiers residents say about our gourmet sandwiches, soups, and hospitality.
          </p>
        </div>

        {/* Rating Scorecard Overview */}
        <div className="bg-surface-muted p-6 rounded-md shadow-card border border-surface-raised/70 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Big Score */}
            <div className="md:col-span-4 text-center md:text-left md:border-r border-surface-raised/50 md:pr-6 space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-brand-primary">
                  {RESTAURANT_INFO.rating}
                </span>
                <div>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-text-secondary mt-0.5">
                    Excellent rating
                  </div>
                </div>
              </div>
              <div className="text-xs text-text-tertiary">
                Based on guest reviews & traveler feedback
              </div>
              <div className="text-xs font-bold text-brand-mint pt-1">
                {RESTAURANT_INFO.tripadvisorRank}
              </div>
            </div>

            {/* Score Breakdown Bars */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="bg-surface-strong p-3 rounded-xs border border-surface-raised/40">
                <div className="text-xs text-text-tertiary uppercase font-bold tracking-wider">Food Quality</div>
                <div className="text-lg font-bold text-brand-primary mt-1">4.8 / 5.0</div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-brand-primary h-full rounded-full" style={{ width: '96%' }} />
                </div>
              </div>

              <div className="bg-surface-strong p-3 rounded-xs border border-surface-raised/40">
                <div className="text-xs text-text-tertiary uppercase font-bold tracking-wider">Atmosphere</div>
                <div className="text-lg font-bold text-brand-primary mt-1">4.9 / 5.0</div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-brand-primary h-full rounded-full" style={{ width: '98%' }} />
                </div>
              </div>

              <div className="bg-surface-strong p-3 rounded-xs border border-surface-raised/40">
                <div className="text-xs text-text-tertiary uppercase font-bold tracking-wider">Service</div>
                <div className="text-lg font-bold text-brand-primary mt-1">4.8 / 5.0</div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-brand-primary h-full rounded-full" style={{ width: '96%' }} />
                </div>
              </div>

              <div className="bg-surface-strong p-3 rounded-xs border border-surface-raised/40">
                <div className="text-xs text-text-tertiary uppercase font-bold tracking-wider">Value</div>
                <div className="text-lg font-bold text-brand-primary mt-1">4.7 / 5.0</div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-brand-primary h-full rounded-full" style={{ width: '94%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-surface-muted rounded-md p-5 sm:p-6 border border-surface-raised/60 shadow-subtle hover-lift flex flex-col justify-between text-left transition-all duration-fast"
            >
              <div>
                {/* Author row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="font-bold text-sm text-text-primary flex items-center gap-1.5">
                      <span>{review.author}</span>
                      {review.verifiedTripadvisor && (
                        <span title="Verified Traveler">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-text-tertiary">
                      {review.location} • {review.tripType}
                    </div>
                  </div>
                  <div className="text-xs text-text-tertiary">
                    {review.date}
                  </div>
                </div>

                {/* Rating stars and title */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <h4 className="font-bold text-sm text-text-primary line-clamp-1">
                    {review.title}
                  </h4>
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                  "{review.content}"
                </p>
              </div>

              {/* Review card footer */}
              <div className="pt-3 border-t border-surface-raised/30 flex items-center justify-between text-xs text-text-tertiary">
                <span className="flex items-center gap-1 text-[11px]">
                  <MessageSquare className="w-3 h-3" /> Review from Tripadvisor
                </span>
                <button
                  onClick={() => handleHelpful(review.id)}
                  className="flex items-center gap-1 hover:text-brand-primary transition-colors text-[11px] font-medium"
                  aria-label="Mark review as helpful"
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>Helpful ({helpfulCounts[review.id] || 0})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
