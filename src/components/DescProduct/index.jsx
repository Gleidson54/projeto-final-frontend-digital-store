import './DescProduct.css';
import React, { useState } from 'react';
import Star from '../Stars';
import { FaStar } from 'react-icons/fa';
import ColorShoes from '../CollorsShoes';
import { FontAwesomeIcon } from '@fortawesome/react-Fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import SizeButtonShoes from '../SizeButtonShoes';

import Tenis1 from '../../../public/detalhes.png';

const coresFundo = [
    { cor: '#E2E3FF' },
    { cor: '#FFE8BC' },
    { cor: '#FFC0BC' },
    { cor: '#DEC699' },
    { cor: '#E8DFCF' }
];

export function DescProduct() {
    const [indiceCor, setIndiceCor] = useState(0);

    const proximaCor = () => {
        setIndiceCor((indiceCor + 1) % coresFundo.length);
    };

    const anteriorCor = () => {
        setIndiceCor((indiceCor - 1 + coresFundo.length) % coresFundo.length);
    };

    return (
        <div className='color-background'>
            <div className='containerDP'>
                <div className='caminhoTenis'>
                    <h5> Home | Produtos | Tênis | Nike | Tênis Nike Rervolution </h5>
                </div>
                <div className='descricaoProduto'>
                    <div className='imgDescProd'>
                        <div className='imagemGrande' style={{ backgroundColor: coresFundo[indiceCor].cor }}>
                            <img src={Tenis1} alt="" />
                            {/*Botões de navegação */}
                            <div className='btn-slide'>
                                <FontAwesomeIcon icon={faChevronLeft} className="botaoNavegacao" onClick={anteriorCor} />
                                <FontAwesomeIcon icon={faChevronRight} className="botaoNavegacao" onClick={proximaCor} />

                            </div>
                        </div>
                        {/* Miniaturas de imagem (alteram o slide de cor) */}
                        <div className='miniImagens'>
                            {coresFundo.map((cor, index) => (
                                <img key={index} onClick={() => setIndiceCor(index)} src={Tenis1} className={`item${index + 1}`} alt="" />
                            ))}
                        </div>
                    </div>
                    <div className='dadosProduto'>
                        <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                        <p className='referenciasProduto'>Casual | Nike | REF:38416711</p>
                        <div className='imgDescProdRow'>
                            <Star />
                            <p className='avaliacao'> 4.7 <faStar /></p>
                            <p className='referenciasProduto'>90 avaliações</p>
                        </div>
                        <h2 className='precoProd'>R$ 219,00</h2>
                        <h4 className='referenciasProduto'>Descrição do Produto</h4>
                        <p className='referenciasProduro'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga laboriosam dolore rerum hic at, vel quibusdam similique perspiciatis enim culpa soluta dignissimos cupiditate eveniet suscipit? Sint nesciunt exercitationem aspernatur!</p>
                        <h4 className='referenciasProduto'>Tamanho</h4>
                        <div className='tamanhoProduto'>
                            <SizeButtonShoes />
                        </div>
                        <h4 className='referenciasProduto'>Cores</h4>
                        <div className='cores'>
                            <ColorShoes />
                        </div>
                    </div>
                    <button className='btn-comprar'>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default DescProduct;