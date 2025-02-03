import { Button } from "./Button";
import "./RecipeItem.less";

// Egyetlen lista-összetevőt megjelenítő komponens
export function RecipeItem({ item, togglePurchased, deleteItem }: {
    item: { id: number, name: string, quantity: string, purchased: boolean },
    togglePurchased: (id: number) => void,
    deleteItem: (id: number) => void
}) {
    return (
        <li key={item.id}>{/* Listaelem a bevásárló lista összetevőjéhez */}
            <label class="item-label">
                {/* Jelölőnégyzet az összetevő "megvásárolva" állapotának váltására */}
                <input
                    type="checkbox"
                    class="item-checkbox"
                    checked={item.purchased}
                    onChange={() => togglePurchased(item.id)}
                />
                {/* Összetevő neve és mennyisége */}
                <span class="item-text">{item.name} - {item.quantity}</span>
                {/* Törlés gomb */}
                <Button onClick={() => deleteItem(item.id)} className="material-symbols-outlined" children="delete" content="" className2="delete-button"/>
            </label>
        </li>
    );
}