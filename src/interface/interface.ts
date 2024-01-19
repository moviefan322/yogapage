export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface ShoppingCartState {
  items: Product[];
  isLoading: boolean;
  isError: string | null;
  isSuccess: boolean;
}