export interface Recipe {
  id: string;
  title: string;
  image?: string;
  cookingTime: string;
  ingredients: string[];
  instructions: string;
}