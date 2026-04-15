export interface MealOption {
  id: string;
  name: string;
  quantity: number;
}

export interface MealSection {
  type: "roti" | "sabzi" | "dal" | "raita" | "sweet";
  items: MealOption[];
}

export interface CartItem {
  id: string;
  title: string;
  roti: string;
  sabzi: string;
  dal: string;
  quantity: number;
  totalPrice: number;
}
