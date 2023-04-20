export interface IselectedFilters {
  category: string[];
  brand: string[];
  price: { min: number | null; max: number | null; };
  stock: { min: number | null; max: number | null; };
  stringSearch: string;
}