import "./ButtonCard.css";
import "./ButtonRosa.css";

export function Button({ children, className }) {
    return (
        <div className={className}>
            <button>{children}</button>
        </div>
    );
}

export function ButtonCard() {
    return <Button className="button-card">Comprar</Button>;
}

export function ButtonRosa() {
    return <Button className="button-rosa">Comprar</Button>;
}