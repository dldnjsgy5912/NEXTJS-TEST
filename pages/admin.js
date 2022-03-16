import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
const Admin = () => {
  const router = useRouter();
  const [user, setUser] = useState();
  const [isLoding, setIsLoding] = useState(false);

  const checkLogin = async () => {
    const res = await axios.get('api/isLogin');
    console.log(data);
    if (res.status === 200 && res.data.name) {
      //로그인
      setUser(res.data.name);
      setIsLoding(true);
    } else {
      //로그인 안됨
      router.push('/login');
    }
  };

  //로그아웃 기능
  const logout = async () => {
    try {
      const res = await axios.post('/api/logout');
      if (res.status === 200) {
        //로그인 성공
        router.push('/login');
      }
    } catch {}
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div>
      {user}님의 페이지 입니다.
      {isLoding && (
        <Button variant="danger" onClick={logout}>
          로그아웃
        </Button>
      )}
    </div>
  );
};

export default Admin;
