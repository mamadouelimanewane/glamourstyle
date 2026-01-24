export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  category: 'coiffure' | 'coloration' | 'soin' | 'coiffure-evenement' | 'extension';
  image?: string;
  popular?: boolean;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  totalPrice: number;
  depositPaid: boolean;
  depositAmount: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface PaymentOption {
  id: string;
  name: string;
  description: string;
  logo: string;
  type: 'bnpl' | 'card' | 'cash';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export interface LoyaltyProgram {
  name: string;
  description: string;
  discount: number; // percentage
  minVisits?: number;
}

export interface BookingFormData {
  serviceId: string;
  date: string;
  time: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes?: string;
}
