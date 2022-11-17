import Head from 'next/head';
import ItemList from '../../components/ItemList';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>商品一覧</title>
      </Head>
      <h1>商品一覧</h1>
      <ItemList />
      <form action="http://localhost:3000/items/register">
        <button>登録</button>
      </form>
    </>
  );
}
