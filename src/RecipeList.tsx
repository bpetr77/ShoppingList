import { RecipeItem } from "./RecipeItem";
import "./RecipeList.less";

export function RecipeList({ items, togglePurchased, deleteItem }: {
    items: { id: number, name: string, quantity: string, purchased: boolean }[],
    togglePurchased: (id: number) => void,
    deleteItem: (id: number) => void
}) {
    return (
        <ul>
            {/* Minden elem megjelenítése */}
            {items.map(item => (
                <RecipeItem
                    key={item.id}
                    item={item}
                    togglePurchased={togglePurchased}
                    deleteItem={deleteItem}
                />
            ))}
        </ul>
    );
}