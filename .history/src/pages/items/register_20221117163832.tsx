import { format } from 'path';
import React, { useState } from 'react';
import { useRouter } from 'next/router'

export default function Display() {
  const [name, setName] = React.useState('');  //名前の情報を更新して保存
  const [description, setDescription] = React.useState('');  //説明の情報を更新して保存
  const [price, setPrice] = React.useState(''); //価格の情報を更新して保存
  const router = useRouter(); //登録された情報を更新した状態でページを移動

  // 登録内容を登録する
  const submitHandler = async (e: any) => {

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

  return (
    <form
    //   action="http://localhost:3000/items/"
      onSubmit={submitHandler}
    >
      <ul>
        <li>
          <label>名前</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>
        <li>
          <label>説明</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </li>
        <li>
          <label>価格</label>
          <input
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </li>
        <li>
          <button type="submit">登録</button>
          <button >キャンセル</button>
        </li>
      </ul>
    </form>
  );
}
