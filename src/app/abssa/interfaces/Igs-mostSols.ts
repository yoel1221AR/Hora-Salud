export interface MostSoldProducts {
  products: Product[];
}

export interface Product {
  stockMatrix: StockMatrix;
  discountPrice: number;
  available: boolean;
  description: string;
  stars: number;
  price: number;
  currency: string;
  hasStockMatrix: boolean;
  sku: string;
  stock: number;
  image: string[];
  name: string;
  productCategory: string;
  productMainImg: string;
  imageBrand: string;
  brandName: string;
  store: Store;
  features: Features;
  uid: string;
}

export interface Features {
  sizes: number[];
  colors: Color[];
}

export interface Color {
  value: string;
  key: string;
}

export interface Store {
  uid: string;
  name: string;
}

export interface StockMatrix {
  '#278f1b-41': number;
  '#278f1b-42': number;
  '#eb4034-40': number;
  '#eb4034-43': number;
}
