import "./RightPane.less";
import { useCallback, useEffect, useState } from "preact/hooks";
import { RecipePane } from "./RecipePane";
import { Recipe } from "./Recipe";
import { Button } from "./Button";
import { EditForm } from "./EditForm";
import { RecipeItemList } from "./RecipeItemList";
import { RecipeHeader } from "./RecipeHeader";

export function RightPane({ showAddRecipeForm, addRecipe, selectedRecipe, setSelectedRecipe, updateRecipe }: {
    showAddRecipeForm: boolean,
    addRecipe: (recipe: Recipe) => void,
    selectedRecipe: Recipe | null,
    setSelectedRecipe: (recipe: Recipe | null) => void
    updateRecipe: (recipe: Recipe) => void
}) {
    // Állapotok definiálása
    const [isEditing, setIsEditing] = useState(false);
    const [newItemName, setNewItemName] = useState("");
    const [newItemQuantity, setNewItemQuantity] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Betöltjük a sötét mód állapotát a localStorage-ból
        return localStorage.getItem('theme') === 'dark';
    });

    // useEffect hook a sötét mód állapotának kezelésére
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Elem törlése a receptből
    const deleteItem = useCallback((itemId: number) => {
        if (selectedRecipe) {
            const updatedItems = selectedRecipe.items.filter(item => item.id !== itemId);
            const updatedRecipe = new Recipe(selectedRecipe.id, selectedRecipe.name);
            updatedRecipe.items = updatedItems;
            updatedRecipe.createdAt = selectedRecipe.createdAt;
            setSelectedRecipe(updatedRecipe);
        }
    }, [selectedRecipe, setSelectedRecipe]);

    // Új elem hozzáadása a recepthez
    const addItemToRecipe = useCallback(() => {
        if (selectedRecipe) {
            const newItem = {
                id: Date.now(),
                name: newItemName,
                quantity: newItemQuantity,
                purchased: false
            };
            const updatedItems = [...selectedRecipe.items, newItem];
            const updatedRecipe = new Recipe(selectedRecipe.id, selectedRecipe.name);
            updatedRecipe.items = updatedItems;
            updatedRecipe.createdAt = selectedRecipe.createdAt;
            setSelectedRecipe(updatedRecipe);
            setNewItemName("");
            setNewItemQuantity("");
        }
    }, [selectedRecipe, newItemName, newItemQuantity, setSelectedRecipe]);

    // Elem állapotának váltása (megvásárolt/nem megvásárolt)
    const togglePurchased = useCallback((itemId: number) => {
        if (selectedRecipe) {
            const updatedItems = selectedRecipe.items.map(i =>
                i.id === itemId ? { ...i, purchased: !i.purchased } : i
            );
            const updatedRecipe = new Recipe(selectedRecipe.id, selectedRecipe.name);
            updatedRecipe.items = updatedItems;
            updatedRecipe.createdAt = selectedRecipe.createdAt;
            setSelectedRecipe(updatedRecipe);
        }
    }, [selectedRecipe, setSelectedRecipe]);

    // Változások mentése
    const saveChanges = useCallback(() => {
        if (selectedRecipe) {
            updateRecipe(selectedRecipe); // Frissítjük a recipes állapotot a Main komponensben
        }
        setIsEditing(false); // Kilépünk a szerkesztési módból
    }, [selectedRecipe, updateRecipe]);
    return (
        <div class="RightPane">
            {/* Lista hozzáadása, űrlap megjelenítése, ha nincs kiválasztott lista */}
            {showAddRecipeForm && !selectedRecipe && <RecipePane addRecipe={addRecipe} isDarkMode={isDarkMode} />}
            {/* Kiválasztott recept részleteinek megjelenítése */}
            {selectedRecipe && (
                <div class="recipe-details">
                    <RecipeHeader
                        recipeName={selectedRecipe.name}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                    />
                    {/* Szerkesztési űrlap megjelenítése, ha szerkesztési módban vagyunk */}
                    {isEditing && (
                        <EditForm
                            newItemName={newItemName}
                            setNewItemName={setNewItemName}
                            newItemQuantity={newItemQuantity}
                            setNewItemQuantity={setNewItemQuantity}
                            addItemToRecipe={addItemToRecipe}
                        />
                    )}
                    {/* Listaelemek megjelenítése ha van*/}
                    {selectedRecipe.items.length > 0 ? (
                        <RecipeItemList
                            selectedRecipe={selectedRecipe}
                            togglePurchased={togglePurchased}
                            deleteItem={deleteItem}
                        />
                    ) : (
                        <p>No items in this recipe.</p>
                    )}
                     {/* Mentés gomb szerkesztési módban*/}
                    <Button
                        onClick={saveChanges}
                        className="material-symbols-outlined"
                        children="save"
                        className2="save-button" />
                </div>
            )}
            {/* Sötét mód váltó gomb */}
            <button
                class="material-symbols-outlined mode-change-button"
                onClick={() => setIsDarkMode(!isDarkMode)} // Állapot váltása kattintáskor
            >
                {isDarkMode ? "light_mode" : "dark_mode"}
            </button>
        </div>
    );
}