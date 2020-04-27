import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Salad',
      'mediterranean salad with croutons',
      'https://bit.ly/2VfvZQN',
      [
        new Ingredient('Salad', 1),
        new Ingredient('Croutons', 20)]),

    new Recipe('Spicy Tacos',
      'Tacos with ghost pepper and guac',
      'https://bit.ly/2XDwd5G',
      [
        new Ingredient('Spicy Tacos', 4),
        new Ingredient('Guac', 20)]),

    new Recipe('Burger',
      'Old fashioned hamburger',
      'https://bit.ly/2VcOK7i',
      [
        new Ingredient('Burger', 1),
        new Ingredient('Fries', 1)]),
    new Recipe('Shrimp Tacos',
      'Tasty shrimp tacos',
      'https://bit.ly/2XClSXA',
      [
        new Ingredient('Tacos', 3),
        new Ingredient('Chips', 20)])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

}
