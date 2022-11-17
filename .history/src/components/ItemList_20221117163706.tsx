// src/components/ItemList.tsx
import useSWR from 'swr';
import { useRouter } from 'next/router';

//一覧に表示される商品-------------------------------------------------------------------------

const fetcher = (resource: any) =>
  fetch(resource).then((res) => res.json());

function ItemList() {
  const router = useRouter(); //削除された状態のページ

  const { data, error } = useSWR('/api/items?deleted=false', fetcher);   // 商品一覧をJSON Serverから取得

  if (error) return <div>failed to load</div>;  // エラーになった場合は一覧は表示できないのでここで終わり

  if (!data) return <div>loading...</div>;   // データ取得が完了していないときはローディング画面

  // 取得したdataは Item[] なので、一行に一件ずつ表示

  //削除ボタン-------------------------------------------------------------------------
  const submitDelete = async (e: any, id: any) => { //EventとIDを取得
    e.preventDefault(); //既定の動作を止める

    const response = await fetch(
      `http://localhost:8000/items/${id}`, //Jsonファイルの一つを指定
      {
        //Jsonファイルに送る
        method: 'PATCH',                    //変更
        body: JSON.stringify({ deleted: true }), 
        headers: {
          'Content-type': 'application/json', //Jsonファイルということを知らせるために行う
        },
      }
    ).then(() => {
      router.push('http://localhost:3000/items'); //e.preventDefault()を行なった為、クライアント側の遷移処理をここで行う
    });
  };
  //----------------------------------------------------------------------------------

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
              <button
                type="submit"
                onClick={(e) => submitDelete(e, item.id)}
              >
                削除
              </button>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ItemList;
