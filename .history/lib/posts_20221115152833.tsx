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
