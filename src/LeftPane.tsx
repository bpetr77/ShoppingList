import "./LeftPane.less"
import { RecipeCard } from "./RecipeCard";
import { Recipe } from "./Recipe";


export function LeftPane({ onAddClick, recipes, onRecipeClick, onDeleteRecipe }: {
	onAddClick: () => void
	recipes: Recipe[]
	onRecipeClick: (recipe: Recipe) => void
    onDeleteRecipe: (recipeId: number) => void
}) {
	return <div class="LeftPane">{/* A bal oldali panel */}
		<div>
			<h3>Shopping lists</h3>
            {/* Minden bevársárlólista megjelenítése */}
			{recipes.length > 0 ? (
                <div className="recipes">
                    {recipes.map(recipe => (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                            selected={false} 
                            onSelect={() => onRecipeClick(recipe)} 
                            onDelete={() => onDeleteRecipe(recipe.id)} 
                        />
                    ))}
                </div>
            ) : (
                <p>No recipes available. Please add a recipe.</p>
            )}
		</div>
        {/* Új lista hozzáadása gomb */}
		<button class="material-symbols-outlined add-button" onClick={onAddClick}>
			add
		</button>
	</div>
}

