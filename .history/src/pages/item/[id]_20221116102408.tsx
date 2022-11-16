export default function Post({ postData }:any) {
  return (
    <>
      {postData.id},
      {postData.name},
      {postData.description},
    </>
  );
}

// 商品詳細へのパスを生成する
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// idのリストを作成する
export async function getAllPostIds() {
  const response = await fetch('/8000/items',{method:'GET'})
  const items = await response.json();

  return items.map(({fileName}:any ) => {
    return {
      params: {
        id: fileName.id,
      },
    };
  });
}

//id,name,descriptionを取得(商品詳細情報を取得)
export async function getPostData() {
  const response = await fetch('/8000/items',{method:'GET'})
  const items = await response.json();

  // id とデータをあわせる
  return {
    items,
  };
}

// 商品詳細情報を取得し `props` として返します
export async function getStaticProps({ params }:any) {
  const postData = await getPostData();
  return {
    props:{
      postData,
    }
  };
}
