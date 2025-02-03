// saját bementeni mező komponens
import "./Input.less";
export function Input({ value, onChange, placeholder }: {
    value: string,
    onChange: (e: Event) => void,
    placeholder: string
}) {
    return (
        <input 
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}