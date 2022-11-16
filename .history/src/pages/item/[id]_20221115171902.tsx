

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


import test from '../data/db.json' assert {type: 'json'};

// Jsonの中身を取得
export function getSortedPostsData() {
  const file = test.items;
  const allPostsData = file.map(fileName => {
    const id = fileName.id;
    return {
      id
    }
  })
  return allPostsData.sort(({ id: a }, { id: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {    //IDを生成
  const file = test.items;
  return file.map(fileName => {
    return {
      params: {
        id: fileName.id
      }
    }
  })
}


// export function getPostData() {       //id,title,dateを取得
//   const file = test.items;

//   // // id とデータをあわせる
//   return {
//     id,
//   }
// }
