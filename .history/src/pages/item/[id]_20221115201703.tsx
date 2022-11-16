// 商品詳細へのパスが生成
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    postData,
  };
}

//id,name,descriptionを取得
export function getPostData(id: any) {
  const jsonFile = fetch('/api/items')
    .then((response) => {
      return response.json();
    });

  // id とデータをあわせる
  return {
    id,
    name,
    description
  };
}

// paramsに入れる値を作成
export function getAllPostIds() {
  const jsonFile = fetch('/api/items')
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log('失敗しました');
    });

  return jsonFile.map(({ fileName }) => {
    return {
      params: {
        id: fileName.id,
      },
    };
  });
}

// export function getAllPostIds() {    //IDを生成
// const fileNames = fs.readdirSync(postsDirectory)  //pre-rendering.md、ssg-ssr.mdを取得
// return fileNames.map(fileName => {
//   return {
//     params: {
//       id: fileName.replace(/\.md$/, '')
//     }
//   }
// })
// }
