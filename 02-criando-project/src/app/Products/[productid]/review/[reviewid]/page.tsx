import {notFound} from "next/navigation"


interface infoParams{
    params:{
      productid:number
      reviewid:string
    }
  }
  
  
  //e possivel tambem criar pesquisas alinhadas com base na herarquia das basta e ter acesso aos paramentros 
  export default  function info({params}:infoParams){

    if ( parseInt(params.reviewid)> 20) {

      notFound()


    } 
    return (
  
      <>
      <p>informacao{params.productid}</p>
      <p>review{params.reviewid}</p>
      </>
    )
  
  }