import { useRouter } from 'next/router';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Item from '../../src/component/Item';
const Post = ({ item, name }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>워뇨의 홈페이지</title>
            <meta name="description" content={item.description} />
          </Head>
          {name}환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

// 서버사이드 렌더링 = 동적 페이지 사용
export async function getServerSideProps(context) {
  const id = context.params.id;
  const { data } = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
