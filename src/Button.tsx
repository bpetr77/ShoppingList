import "./Button.less";
// saját gomb osztály ikonnal
export function Button({ onClick, className, children, content, className2 }: {
    onClick: () => void,
    className?: string,
    children: string,
    content?: string,
    className2?: string
}) {
    return (
        <button class={`${className2}`} onClick={onClick}>
        <span class={`${className}`}>
            {children}
        </span>
        {content}
    </button>
    );
}