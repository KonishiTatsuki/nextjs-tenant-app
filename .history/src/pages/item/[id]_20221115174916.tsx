

export async function getStaticPaths(){
  return{
    paths:[{params:{id:'1'}},{params:{id:'2'}}],
    fallback:false,
  }
}

export async function getStaticProps(){
  return {
    props: {post:{}},
  };
}


export function getAllPostIds() {    //IDを生成
  // const fileNames = fs.readdirSync(postsDirectory)  //pre-rendering.md、ssg-ssr.mdを取得
  // return fileNames.map(fileName => {
  //   return {
  //     params: {
  //       id: fileName.replace(/\.md$/, '')   
  //     }
  //   }
  // })
}
