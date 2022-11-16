import useSWR from 'swr';
import fetcher from '../../../components/ItemList';

// 詳細画面に表示される部分
export default function Post() {
  return <p>あとで実装</p>;
}

export function Json() {
  const { data, error } = useSWR('/api/items', fetcher);
  // エラーになった場合は一覧は表示できないのでここで終わり
  if (error) return <div>failed to load</div>;

  // データ取得が完了していないときはローディング画面
  if (!data) return <div>loading...</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>商品名</th>
          <th>説明</th>
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
              <td>[削除]</td>
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
