// 商品のオプション
type Option = {
  // 識別子
  id: number;
  // オプションの名前
  name: string;
  // オプションの説明
  description: string;
  // オプションの価格
  price: number;
};

// 商品
type Item = {
  // 識別子
  id: number;
  // 商品名
  name: string;
  // 商品の説明
  description: string;
  // 商品の価格
  price: number;
  // 商品画像のURL
  imageUrl: string;
  // 削除フラグ
  deleted: boolean;
  // 商品に付随するオプション
  options: Option[];
};





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
  const response = await fetch('http://localhost:8000/items',{method:'GET'})
  const items = await response.json();

  return items.map((fileName:Item) => {
    return {
      params: {
        id: String(fileName.id),
      },
    };
  });
}

//id,name,descriptionを取得(商品詳細情報を取得)
export async function getPostData() {
  const response = await fetch('http://localhost:8000/items',{method:'GET'})
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
