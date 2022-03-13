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

// getStaticPaths
export const getStaticPaths = async () => {
  // 우리는 오로지 이 path들만 빌드타임에 프리렌더 함
  // { fallback: false } 는 다른 routes들은 404임을 의미
  // true이면 만들어지지 않은 것도 추후 요청이 들어오면 만들어 줄 거라는 뜻
  return {
    paths: [{ params: { id: '740' } }, { params: { id: '730' } }, { params: { id: '729' } }],
    fallback: true,
  };
};

// getStaticProps 렌더링
export async function getStaticProps(context) {
  const id = context.params.id;
  const { data } = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
