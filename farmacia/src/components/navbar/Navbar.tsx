import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="w-full bg-red-700 text-white
                flex justify-center py-4"
    >
      <div className="container flex justify-between text-lg">
        <Link to="/home" className="text-2xl font-bold">
          Farmacia
        </Link>

        <div className="flex gap-4">
          <Link to="/produtos" className="hover:underline">
            Produtos
          </Link>
          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
          <Link to="/cadastrarCategoria" className="hover:underline">
            Cadastrar Categoria
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
