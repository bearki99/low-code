import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";
import RequireAuth from "./components/RequireAuth";
import EditPage from "./pages/EditPage";
import ListPage from "./pages/ListPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RequireAuth />}>
          <Route index element={<EditPage />}></Route>
          <Route path="list" element={<ListPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
