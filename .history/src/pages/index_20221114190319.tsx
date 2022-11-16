import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ItemList from '/Users/konishi-work/src/nextjs-tenant-app/components/ItemList.js';
import Link from "next/link";


export default function Page() {
  return (
      <>
      <Head>
        <title>商品一覧</title>
      </Head>
      <Link href="/items/create">
      <a>新規登録</a>
      </Link>
      <ItemList />
      </>
  );
}

// export default function Home() {
//   return (
   
//   );
// }
