// src/components/ItemList.tsx
import useSWR from 'swr'


const fetcher = (resource:any) => fetch(resource).then((res) => res.json());

function ItemList() {
    // 商品一覧をJSON Serverから取得
  const { data, error } = useSWR('/api/items', fetcher)

  // エラーになった場合は一覧は表示できないのでここで終わり
  if (error) return <div>failed to load</div>

  // データ取得が完了していないときはローディング画面
  if (!data) return <div>loading...</div>

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
        {data.map((item:any) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>[削除]</td>
                </tr>
            )
        })}
    </tbody>
  </table>
  )
}

export default ItemList;
