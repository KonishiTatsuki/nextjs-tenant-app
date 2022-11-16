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
export default function Post({ allPostsData }: any) {
  return (
    <section>
      <ul>
        {allPostsData.map(({ id, date, title }: any) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </section>
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
