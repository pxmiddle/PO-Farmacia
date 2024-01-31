
function Home() {
  return (
    <>
    
    <div
        id="container"
        className="bg-red-300 flex justify-center relative"
      >
        
        <div
          id="subcontainer"
          className="container grid grid-cols-2 text-white"
        >
            <div id="imagem" className="flex justify-center">
            <img
              className="w-2/3"
              src="https://ik.imagekit.io/pxmiddle/Medical%20prescription-pana.svg?updatedAt=1706704942133"
              alt="Imagem da Página Home"
            />
          </div>
          <div
            id="texto"
            className="flex flex-col gap-4 items-center justify-center py-4"
          >
            <h2 className=" text-5xl font-bold ">Seja Bem-vindo! </h2>
            <p className="text-xl">
              Os Nossos produtos estão em destaque!
            </p>
            <div
              id="containterButton"
              className="flex justify-around gap-4 w-1/2 text-center"
            >
             <div className="rounded text-indigo-900 border-white bg-white border-solid border-2 px-4 py-2 flex-1">
                Criar Produtos
              </div>
              <div className="rounded text-indigo-900 border-white bg-white border-solid border-2 px-4 py-2 flex-1">
                Ver Produtos
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default Home