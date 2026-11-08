export type MenuItemCategory =
  | 'sandwiches'
  | 'soups'
  | 'grab-and-go'
  | 'charcuterie'
  | 'pantry-goods'
  | 'beverages'

export interface MenuItem {
  id: string
  name: string
  category: MenuItemCategory
  price: number
  description: string
  image: string
  isChalkboardSpecial?: boolean
  isStaffPick?: boolean
  isGlutenFreeAvailable?: boolean
  isVegetarian?: boolean
  calories?: string
  prepTime?: string
  pairing?: string
}

export interface Review {
  id: string
  author: string
  location: string
  date: string
  rating: number // 1 - 5
  title: string
  content: string
  tripType: string
  verifiedTripadvisor: boolean
}

export interface CartItem {
  item: MenuItem
  quantity: number
  notes?: string
}

export interface ReservationData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  occasion: string
  seatingPreference: 'indoor' | 'patio' | 'pickup'
  notes?: string
}

export interface DesignToken {
  name: string
  token: string
  value: string
  description: string
}

