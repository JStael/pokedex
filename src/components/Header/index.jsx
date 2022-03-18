import "./style.css";
import logo from "../../assets/images/logoPokemon.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-header">
      <Link to={"/"} style={{ backgroundColor: "#e11b22" }}>
        <img src={logo} alt="logo do Pokemon" className="logo" />
      </Link>
    </header>
  );
};

export default Header;
