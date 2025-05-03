import "./CardSection.css";
import { ButtonCard } from "../Buttons/index";

import collection1 from "../../../public/collection1.png";
import collection2 from "../../../public/collection2.png";
import collection3 from "../../../public/collection3.png";

const collections = [
    { Image: collection1, offer: "30% OFF, title: 'Novo Drop Supreme' },
    { Image: collection2, offer: "30% OFF, title: 'Coleção Adidas' },
    { Image: collection3, offer: "30% OFF, title: 'Novo Beat Bass' },
]

export function CardSection() {
    return (
        <div className="color-bg">
            <section className="containerSectionCard">
                <div className="container-title-card">Coleções em destaque</div>
                <div className="container-colletion">
                    {collections.map((collection, index) => (
                        <div
                            key={index}
                            className="collection"
                            style={{ backgroundImage: `url(${collection.Image})` }}
                        >
                            <div className="oferta">{collection.offer}</div>
                            <h3>{collection.title}</h3>
                            <ButtonCard />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}