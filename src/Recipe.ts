// egy bevásárlólista elemeit reprezentáló interfész
export interface RecipeItem {
    id: number;
    name: string;
    quantity: string;
    purchased: boolean;
}

// egy bevásárlólistát és elemeit reprezentáló osztály
export class Recipe {
    id: number;
    name: string;
    items: RecipeItem[];
    createdAt: Date;
    

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.items = [];
        this.createdAt = new Date();
    }
    // új elem hozzáadása a bevásárlólistához
    addItem(name: string, quantity: string) {
        const newItem: RecipeItem = {
            id: this.items.length + 1,
            name: name,
            quantity: quantity,
            purchased: false
        };
        this.items.push(newItem);
    }
    // elem megvásárolt állapotának váltása
    togglePurchased(itemId: number) {
        const item = this.items.find(item => item.id === itemId);
        if (item) {
            item.purchased = !item.purchased;
        }
    }
}