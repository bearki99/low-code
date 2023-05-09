import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Login from "./Login";

interface Props {}
const { Header } = Layout;
const RequireAuth: FC<Props> = (props) => {
  return (
    <Layout>
      <Header>
        <Login />
      </Header>
      <Outlet />
    </Layout>
  );
};

export default RequireAuth;
