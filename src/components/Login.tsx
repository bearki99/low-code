import React, { FC, useState } from "react";

interface Props {}

const Login: FC<Props> = (props) => {
  // 实现登陆页面
  // 用户已登陆/用户未登陆
  const [login, setLogin] = useState(false);
  const auth = localStorage.getItem('sessionID')
  return <div>login</div>;
};

export default Login;
