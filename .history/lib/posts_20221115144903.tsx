import test from '../data/db.json' assert {type: 'json'};

// Jsonの中身を取得


console.log(test.items[0]);




export function getAllPostIds() {    //IDを生成
  const fileNames = fs.readdirSync(postsDirectory)  //pre-rendering.md、ssg-ssr.mdを取得
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')   
      }
    }
  })
}

export function getPostData(id) {       //id,title,dateを取得
  const fullPath = path.join(postsDirectory, `${id}.md`) //pre-rendering.md、ssg-ssr.mdまでのパスを取得
  const fileContents = fs.readFileSync(fullPath, 'utf8') //ファイルの中身を取得する

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)    //data,contentに別れる

  // // id とデータをあわせる
  return {
    id,
    ...matterResult.data
  }
}
