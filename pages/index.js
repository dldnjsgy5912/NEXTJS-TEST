import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { Spinner, Container } from 'react-bootstrap';
import ItemList from '../src/component/ItemList';

export default function Home({ item }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>워뇨의 홈페이지</title>
        <meta name="description" content="워뇨 홈입니다." />
      </Head>
      <Container>
        <h3 className={styles.title}>베스트 상품</h3>
        <ItemList item={item.slice(0, 9)} />
        <h3 className={styles.title}>새상품</h3>
        <ItemList item={item.slice(9)} />
      </Container>
    </div>
  );
}

//getStaticProps = 정적 페이지 불러올때
export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const { data } = await axios.get(apiUrl);

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
