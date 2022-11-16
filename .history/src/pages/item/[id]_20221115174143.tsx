

export async function getStaticPaths(){
  return{
    paths:[{params:{id:'1'}},{params:{id:'2'}}],
    fallback:false,
  }
}
