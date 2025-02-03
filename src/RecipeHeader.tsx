import "./RecipeHeader.less";

export function RecipeHeader({ recipeName, isEditing, setIsEditing }: {
    recipeName: string,
    isEditing: boolean,
    setIsEditing: (isEditing: boolean) => void
}) {
    return (
        <div class="header">{/* Recept címe */}
            <h3 class="recipe-name-h3">{recipeName}</h3>
            {/* Szerkesztés gomb */}
            <button
                class="material-symbols-outlined edit-button"
                onClick={() => setIsEditing(!isEditing)}
            >
                edit
            </button>
        </div>
    );
}