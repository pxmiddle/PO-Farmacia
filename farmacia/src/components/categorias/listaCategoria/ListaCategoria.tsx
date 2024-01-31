import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import CardCategorias from "../cardCategoria/CardCategoria";
import { DNA } from "react-loader-spinner";
import { buscar } from "../../../services/Service";

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias);
  }
  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="DNA-loading"
          wrapperStyle={{}}
          wrapperClass="DNA-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((Categoria) => (
              <>
                <CardCategorias key={Categoria.id} Categoria={Categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;
