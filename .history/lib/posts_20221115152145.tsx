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
  return(
    allPostsData
  );
}

// export function getPostData(id) {       //id,title,dateを取得
//   const fullPath = path.join(postsDirectory, `${id}.md`) //pre-rendering.md、ssg-ssr.mdまでのパスを取得
//   const fileContents = fs.readFileSync(fullPath, 'utf8') //ファイルの中身を取得する

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents)    //data,contentに別れる

//   // // id とデータをあわせる
//   return {
//     id,
//     ...matterResult.data
//   }
// }
