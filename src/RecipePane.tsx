import { useState } from "preact/hooks";
import { Recipe, RecipeItem } from "./Recipe";
import { RecipeForm } from "./RecipeForm";
import { RecipeList } from "./RecipeList";
import './RecipePane.less';
import { Input } from "./Input";
import { Button } from "./Button";

export function RecipePane({ addRecipe, isDarkMode }: { addRecipe: (recipe: Recipe) => void, isDarkMode: boolean }) {
    // Állapotok definiálása
    const [newRecipeName, setNewRecipeName] = useState("");
    const [newItemName, setNewItemName] = useState("");
    const [newItemQuantity, setNewItemQuantity] = useState("");
    const [newRecipeItems, setNewRecipeItems] = useState<RecipeItem[]>([]);

    // Új lista hozzáadása
    const handleAddRecipe = () => {
        if (newRecipeName.trim() === "") {
            return; // Ha a cím üres, ne csináljon semmit
        }
        const newRecipe = new Recipe(Date.now(), newRecipeName);
        newRecipe.items = newRecipeItems;
        addRecipe(newRecipe);
        setNewRecipeName("");
        setNewRecipeItems([]);
    };

    // Új elem hozzáadása a listához
    const addItemToNewRecipe = () => {
        const newItem: RecipeItem = {
            id: Date.now(), // Egyedi azonosító generálása
            name: newItemName,
            quantity: newItemQuantity,
            purchased: false
        };
        setNewRecipeItems([...newRecipeItems, newItem]);
        setNewItemName("");
        setNewItemQuantity("");
    };

    // Elem állapotának váltása (megvásárolt/nem megvásárolt)
    const togglePurchased = (itemId: number) => {
        setNewRecipeItems(newRecipeItems.map(item =>
            item.id === itemId ? { ...item, purchased: !item.purchased } : item
        ));
    };

    // Elem törlése a listából
    const deleteItem = (itemId: number) => {
        setNewRecipeItems(newRecipeItems.filter(i => i.id !== itemId));
    }

    return (
        <div class={`RecipePane ${isDarkMode ? 'dark-mode' : ''}`}>
            <h3>Add a new shopping list</h3>
            {/* Új lista címe */}
            <Input
                placeholder="Recipe name"
                value={newRecipeName}
                onChange={e => setNewRecipeName((e.target as HTMLInputElement).value)}
            />
            <h4>Add items:</h4>
            {/* Új hozzávaló hozzáadása a listához */}
            <RecipeForm
                addItemToNewRecipe={addItemToNewRecipe}
                newItemName={newItemName}
                setNewItemName={setNewItemName}
                newItemQuantity={newItemQuantity}
                setNewItemQuantity={setNewItemQuantity}
            />
            {/* Lista elemei */}
            <RecipeList
                items={newRecipeItems}
                togglePurchased={togglePurchased}
                deleteItem={deleteItem}
            />
            {/* Gomb a lista hozzáadásához */}
            <Button onClick={handleAddRecipe} className="material-symbols-outlined" children="add" content="Add Recipe" className2="button-right"></Button>
        </div>
    );
}