import "./RecipeForm.less";
import { Input } from "./Input";
import { Button } from "./Button";

export function RecipeForm({ addItemToNewRecipe, newItemName, setNewItemName, newItemQuantity, setNewItemQuantity }: {
    addItemToNewRecipe: () => void,
    newItemName: string,
    setNewItemName: (name: string) => void,
    newItemQuantity: string,
    setNewItemQuantity: (quantity: string) => void
}) {
    return (
        <div class="recipe-form">{/* Új elem hozzáadása */}
            {/* Új elem adatainak megadása */}
            <Input
                value={newItemName}
                onChange={e => setNewItemName((e.target as HTMLInputElement).value)}
                placeholder="Item name"
            />
            <Input
                value={newItemQuantity}
                onChange={e => setNewItemQuantity((e.target as HTMLInputElement).value)}
                placeholder="Quantity"
            />
            {/* Gomb az elem hozzáadásához */}
            <Button onClick={addItemToNewRecipe} className="material-symbols-outlined" children="add" content="Add item"/>
        </div>
    );
}