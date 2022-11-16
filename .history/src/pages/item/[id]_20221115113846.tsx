export default function Post() {
    return <Layout>{/* 後で実装 */}</Layout>;
  }

// [id].js に getStaticPaths 関数を追加し、生成したいページの id のリストを返す
export async function getStaticPaths() {
  return {
    // パスのパラメータのリスト。ここではそれぞれの `id` の値がパスパラメータになる
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    // 指定されたパスのページが存在しない場合の処理。`false` が指定されると 404 ページを返す
    fallback: false,
  };
}
// [id].js に getStaticProps 関数を追加し、生成するページのパラメータのリストを受け取り、個々のページを生成する
