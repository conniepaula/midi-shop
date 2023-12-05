export interface Product {
  id: string;
  name: string;
  description?: string | null;
  imageUrl: string;
  price: string;
  priceId?: string;
}
