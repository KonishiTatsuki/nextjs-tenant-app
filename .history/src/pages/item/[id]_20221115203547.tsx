export default function Post({ postData }:any) {
  return (
    <>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </>
  );
}

// 商品詳細へのパスを生成する
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// idのリストを作成する
export function getAllPostIds() {
  const jsonFile = fetch('/api/items')
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log('失敗しました');
    });

  return jsonFile.map(({ fileName }:any) => {
    return {
      params: {
        id: fileName.id,
      },
    };
  });
}

//id,name,descriptionを取得(商品詳細情報を取得)
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

// 商品詳細情報を取得し `props` として返します
export async function getStaticProps({ params }:any) {
  const postData = await getPostData(params.id);
  return {
    postData,
  };
}
