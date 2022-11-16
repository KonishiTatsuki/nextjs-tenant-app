import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ItemList from '../components/ItemList.js';
import Link from "next/link";


export default function Page() {
  return (
      <>
      <Head>
        <title>商品一覧</title>
      </Head>
      <h1>商品一覧</h1>
      {/* <Link href="/items/create">
      <a>新規登録</a>
      </Link> */}
      <ItemList />
      </>
  );
}

// export default function Home() {
//   return (
   
//   );
// }
