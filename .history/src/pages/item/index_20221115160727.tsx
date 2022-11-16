import Head from 'next/head';
import ItemList from '../../components/ItemList';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import Link from "next/link";
import { getSortedPostsData } from '../../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


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

export default function Home({ allPostsData }) {
  return (
   
  );
}
