interface infoParams{
    params:{
      productid:number
      reviewid:number
    }
  }
  
  
  //e possivel tambem criar pesquisas alinhadas com base na herarquia das basta e ter acesso aos paramentros 
  export default  function info({params}:infoParams){
    return (
  
      <>
      <p>informacao{params.productid}</p>
      <p>review{params.reviewid}</p>
      </>
    )
  
  }