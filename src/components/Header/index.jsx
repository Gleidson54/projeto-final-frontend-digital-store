import "./Header.css";
import cartIcon from "../../assets/cartIcon.svg";
import Search from "../../assets/Search.svg";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Header>
            <div className="cabecalho">
                <Logo />
                <div className="search-container">
                    <input type="text" placeholder="Pesquisar produto" />
                    <img className:'search icon' src={Search} alt="Ícone de pesquisa" />
                </div>
                <div>
                    <Link to="/register" className="cadastro">Cadastre-se</Link>
                    <Link to="/login" className="entrar">Entrar</Link>
                    <img className="cart" src={cartIcon} alt="Carrinho de Compras" />
                </div>
            </div>
            <NavBar />
        </Header>
    );
}