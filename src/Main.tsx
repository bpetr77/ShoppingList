import "./Main.less"
import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";
import { useEffect, useState } from "preact/hooks";
import { Recipe } from "./Recipe";
import { addRecipeToDB, deleteRecipeFromDB, getAllRecipesFromDB, updateRecipeToDB } from "./db";

export function Main() {
    let [showAddRecipeForm, setShowAddRecipeForm] = useState(false);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    // Az oldal betöltésekor lekérjük az összes receptet az adatbázisból
    useEffect(() => {
        async function loadRecipes() {
            const storedRecipes = await getAllRecipesFromDB();
            setRecipes(storedRecipes);
        }
        loadRecipes();
    }, []);


    // Új recept hozzáadása az adatbázishoz
    const addRecipe = async (recipe: Recipe) => {
        setRecipes([...recipes, recipe]);
        await addRecipeToDB(recipe);
    };

    // Recept frissítése az adatbázisban
    const updateRecipe = async (updatedRecipe: Recipe) => {
        setRecipes(recipes.map(recipe => 
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ));
        await updateRecipeToDB(updatedRecipe);
    };
    
    // Recept törlése az adatbázisból
    const deleteRecipe = async (recipeId: number) => {
        setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
        await deleteRecipeFromDB(recipeId);
    };

    return <div class="Main">
        {/* A bal oldalon a receptek listája */}
        <LeftPane
            onAddClick={() => {
                setShowAddRecipeForm(true);
                setSelectedRecipe(null);
            }}
            recipes={recipes}
            onRecipeClick={setSelectedRecipe}
            onDeleteRecipe={deleteRecipe}
        />      

        {/* A jobb oldalon a kiválasztott recept részletei és új létrehozása*/}             
        <RightPane
            showAddRecipeForm={showAddRecipeForm}
            addRecipe={addRecipe}
            selectedRecipe={selectedRecipe}
            setSelectedRecipe={setSelectedRecipe}
            updateRecipe={updateRecipe}
        />
    </div>
}
