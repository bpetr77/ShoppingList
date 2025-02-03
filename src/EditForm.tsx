import { Input } from "./Input";
import { Button } from "./Button";
import "./EditForm.less";

// Saját szerkesztő komponens
export function EditForm({ newItemName, setNewItemName, newItemQuantity, setNewItemQuantity, addItemToRecipe }: {
    newItemName: string,
    setNewItemName: (name: string) => void,
    newItemQuantity: string,
    setNewItemQuantity: (quantity: string) => void,
    addItemToRecipe: () => void
}) {
    return (
        <div class="edit-form">{/* Új elem hozzáadása egy meglévő listához*/}
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
            <Button
                onClick={addItemToRecipe}
                className="material-symbols-outlined"
                children="add"
                content="Add item"
            />
        </div>
    );
}