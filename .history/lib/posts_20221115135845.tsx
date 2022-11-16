import useSWR from 'swr';

  const fetcher = (resource: any) =>
  fetch(resource).then((res) => res.json());

export function GetSortedPostsData() {
  const { data, error } = useSWR('/api/items', fetcher);
  const id = data.id;
  const name = data.name;


    // エラーになった場合は一覧は表示できないのでここで終わり
    if (error) return <div>failed to load</div>;

    // データ取得が完了していないときはローディング画面
    if (!data) return <div>loading...</div>;

  
     // id とデータをあわせる
    return {
      id,
      name
    }
}
