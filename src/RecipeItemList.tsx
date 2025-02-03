import { Recipe } from "./Recipe";
import { Button } from "./Button";
import "./RecipeItemList.less";

export function RecipeItemList({ selectedRecipe, togglePurchased, deleteItem }: {
    selectedRecipe: Recipe,
    togglePurchased: (itemId: number) => void,
    deleteItem: (itemId: number) => void
}) {
    return (
        <ul class="ul-edit">
            {/* Minden elem megjelenítése a listában */}
            {selectedRecipe.items.map(item => (
                <li key={item.id}>
                    <label>
                        {/* Checkbox az elem állapotának váltásához */}
                        <input
                            type="checkbox"
                            checked={item.purchased}
                            onChange={() => togglePurchased(item.id)}
                            class="item-checkbox"
                        />
                        {/* Elem neve és mennyisége */}
                        <span class="item-text">{item.name} - {item.quantity}</span>
                    </label>
                    {/* Törlés gomb */}
                    <Button onClick={() => deleteItem(item.id)} className="material-symbols-outlined" className2="delete-button">
                        delete
                    </Button>
                </li>
            ))}
        </ul>
    );
}