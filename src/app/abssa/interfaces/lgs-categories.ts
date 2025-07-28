export interface CategoryPaginated {
    data: Category[];
    pageToken: string;
  }
  
  export interface Category {
    name: string;
    description: string;
    imgCategory: string;
    path: string;
    stores: number;
    id: string;
  }