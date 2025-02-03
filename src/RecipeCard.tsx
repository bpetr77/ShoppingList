import "./RecipeCard.less";
import { Recipe } from "./Recipe";

export function RecipeCard({ recipe, selected, onSelect, onDelete }: {
    recipe: Recipe,
    selected: boolean,
    onSelect: () => void
    onDelete: () => void
}) {
    let time = new Date(recipe.createdAt).toLocaleTimeString();
    return (
        <div class={"RecipeCard" + (selected ? " selected" : "")} onClick={() => onSelect()}> {/*egy bevásárló Lista a leftpanen a listák közül*/}
            <div class="RecipeCard-header"> {/* A lista címe és törlés gombja */}
                <h3>{recipe.name}</h3>
                <button class="material-symbols-outlined delete-button" onClick={(e) => {
                    e.stopPropagation(); // Megakadályozza, hogy a kattintás az onSelect-et is meghívja
                    onDelete();
                }}>delete</button>
            </div>
            {/* A lista felvételének dátuma */}
            <time datetime={recipe.createdAt.toISOString()}>{time}</time>
        </div>
    );
}