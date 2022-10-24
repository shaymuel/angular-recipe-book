import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";



@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Spagetti', 'It\'s Italian', 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80', [
            new Ingredient('pasta', 1),
            new Ingredient('tomato sauce', 4),
            new Ingredient('meatball', 1),
        ]),
        new Recipe('Spagetti', 'It\'s Italian', 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80', [
            new Ingredient('pasta', 1),
            new Ingredient('tomato sauce', 4),
            new Ingredient('meatball', 1),
        ]),
      ];

    constructor(private slService: ShoppingListService) {
    }
    

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addAllIngredients(ingredients);
    }
}