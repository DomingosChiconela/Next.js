
//pagina not found que sera chamada em caso de algum erro nas paginas,essa so e chamada se nao hover outras mais proximas em questao de herarquia de pastas onde surgiu ou erro, posso ate usar analogia das variaveis globais de expecificas
export default  function notFound (){

    return (


        <div className=" h-screen w-screen flex flex-col justify-center items-center ">
            <h1 className="text-blue-600 text-4xl font-bold ">404</h1>
            <p>pagina nao  encontrada</p>
        </div>
    

    )
}