import { getSortedPostsData } from '../../../lib/posts';

// 詳細画面に表示される部分
export default function Post({ PostsData }: any) {
  return (
    <section>
      <ul>
        {PostsData.map(({ id }: any) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </section>
  );
}

export async function getStaticPaths() {
  return {
    // パスのパラメータのリスト。ここではそれぞれの `id` の値がパスパラメータになる
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    // 指定されたパスのページが存在しない場合の処理。`false` が指定されると 404 ページを返す
    fallback: false,
  };
}


export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
