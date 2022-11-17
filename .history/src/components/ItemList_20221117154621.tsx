// src/components/ItemList.tsx
import useSWR from 'swr';

//一覧に表示される商品-------------------------------------------------------------------------

const fetcher = (resource: any) =>
  fetch(resource).then((res) => res.json());

function ItemList() {
  // 商品一覧をJSON Serverから取得
  const { data, error } = useSWR('/api/items', fetcher);

  // エラーになった場合は一覧は表示できないのでここで終わり
  if (error) return <div>failed to load</div>;

  // データ取得が完了していないときはローディング画面
  if (!data) return <div>loading...</div>;

  // 取得したdataは Item[] なので、一行に一件ずつ表示
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
              <form onSubmit={submitDelete}>
                <button type="submit">[削除]</button>
              </form>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

//削除ボタン-------------------------------------------------------------------------
const submitDelete = async (e: any) => {

    e.preventDefault(); //既定の動作を止める
    const response = await fetch('http://localhost:8000/items', { //Jsonファイルに送る
      method: 'POST',
      body: JSON.stringify({  //Jsonデータに保存する内容を記載
        name:name,
        description,
        price,
      }),
      headers:{
        'Content-type':'application/json'  //Jsonファイルということを知らせるために行う
      },
    }).then(() => {
        router.push('http://localhost:3000/items') //e.preventDefault()を行なった為、クライアント側の遷移処理をここで行う
    });
  };
//----------------------------------------------------------------------------------

export default ItemList;
