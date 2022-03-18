import { Link } from "react-router-dom";
import "./style.css";

const Pagina404 = () => {
  return (
    <div className="container">
      <h2>Página não encontrada!</h2>
      <Link to="/">Voltar pra Home</Link>
    </div>
  );
};

export default Pagina404;
