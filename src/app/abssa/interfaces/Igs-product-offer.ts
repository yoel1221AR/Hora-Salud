export interface IGsProductOffer {
  sale: boolean;
  productId: string;
  productMainImg: string;
  price: number;
  name: string;
  stars: number;
  store: Store;
  specialPrice: number;
  isActive: boolean;
  uid: string;
}

export interface Store {
  name: string;
  id: string;
}
