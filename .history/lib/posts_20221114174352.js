export function getSortedPostsData() {
  // posts 下のファイル名一覧を取得する   pass取得
  const fileNames = fs.readdirSync(postsDirectory) //pre-rendering.md、ssg-ssr.mdを取得
  const allPostsData = fileNames.map(fileName => {
    // id を取得するために、拡張子 .md をファイル名から除去する
    const id = fileName.replace(/\.md$/, '')  //pre-rendering、ssg-ssrを取得

    // Markdown を文字列に読み込む
    const fullPath = path.join(postsDirectory, fileName)  //pre-rendering.md、ssg-ssr.mdまでのパスを取得
    const fileContents = fs.readFileSync(fullPath, 'utf8') //ファイルの中身を取得する

    // gray-matter を使用してメタデータ部をパースする
    const matterResult = matter(fileContents)  //data,contentに別れる

     // id とデータをあわせる
    return {
      id,
      ...matterResult.data
    }
  })
  // 日付で投稿をソートする(並び替える) 1なら並び替える
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

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
