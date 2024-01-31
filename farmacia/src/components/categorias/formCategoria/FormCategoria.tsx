import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormCategoria() {
    const [categorias, setCategorias] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{id: string }>();

    function retornar() {
        navigate("/categorias");
      }


    let navigate = useNavigate();

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategorias)
      }

    useEffect(() => {
        if (id !== undefined) {

            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
          ...categorias,
          [e.target.name]: e.target.value,
        });
    
        console.log(JSON.stringify(categorias));
      }

      async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
    
        if (id !== undefined) {
            await atualizar(`/categorias`, categorias, setCategorias);
            alert("Categoria atualizada com sucesso");
            retornar();
        }else{
            await cadastrar(`/categorias`, categorias, setCategorias
              );

              alert("Categoria cadastrada com sucesso");
        }
        setIsLoading(false);
        retornar();
    }
    return(
        <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastre uma nova categoria" : "Editar categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da categoria</label>
          <input
            type="text"
            placeholder="nome"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categorias.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-slate-400 hover:bg-slate-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span> {id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria