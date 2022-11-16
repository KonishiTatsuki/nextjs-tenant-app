export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: { post: {} },
  };
}

// paramsに入れる値を作成
export function getAllPostIds() {
  const JsonFile = fetch('/api/items').then((response) => {
    return response.json();
  });

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
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
