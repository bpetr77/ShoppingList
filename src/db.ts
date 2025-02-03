import { openDB } from 'idb';
import { Recipe } from './Recipe';
// Az adatbázis neve és az objektumtároló neve
const DB_NAME = 'recipesDB';
const STORE_NAME = 'recipes';

// Az adatbázis és az objektumtároló létrehozása
const dbPromise = openDB(DB_NAME, 1, {
    upgrade(db) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
    },
});

// Az összes recept lekérdezése az adatbázisból
export async function getAllRecipesFromDB() {
    const db = await dbPromise;
    return db.getAll(STORE_NAME);
}

// Egy recept hozzáadása az adatbázishoz
export async function addRecipeToDB(recipe: Recipe) {
    const db = await dbPromise;
    return db.put(STORE_NAME, recipe);
}

// Egy recept frissítése az adatbázisban
export async function updateRecipeToDB(recipe: Recipe) {
    const db = await dbPromise;
    return db.put(STORE_NAME, recipe);
}

// Egy recept törlése az adatbázisból
export async function deleteRecipeFromDB(id: number) {
    const db = await dbPromise;
    return db.delete(STORE_NAME, id);
}