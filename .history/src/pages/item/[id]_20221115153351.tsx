import { getSortedPostsData } from '../../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// 詳細画面に表示される部分
export default function Post() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>商品名</th>
          <th>説明</th>
          <th>価格</th>
          <th>画像</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.imageUrl}</td>
              <td>[編集]</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


// // 渡された id からデータを取得
// export function getPostData() {
//   return {};
// }

// // [id].js に getStaticPaths 関数を追加し、生成したいページの id のリストを返す
// export async function getStaticPaths() {
//   return {
//     // パスのパラメータのリスト。ここではそれぞれの `id` の値がパスパラメータになる
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//     // 指定されたパスのページが存在しない場合の処理。`false` が指定されると 404 ページを返す
//     fallback: false,
//   };
// }
// // [id].js に getStaticProps 関数を追加し、生成するページのパラメータのリストを受け取り、個々のページを生成する
