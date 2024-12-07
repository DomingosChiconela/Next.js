
interface infoParams{
  params:{
    productid:number
  }
}


//para criar rotas dinamicas  usa-se quase o mesmo principio das estaticas que e baseado na pastas basta colocar em [] compilador sabera que se trata de parametro de url 
export default  function info({params}:infoParams){
  return (

    <>
    <p>informacoe{params.productid}</p>
    </>
  )

}