import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import One from "./pages/one/one";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages111",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/one",
          element: <One />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
/*
Outlet 組件是 React Router v6 中的一個元素，用於渲染與特定路徑匹配的所有子元素。在這個程式碼中，Outlet 組件被包含在 createBrowserRouter 函數返回的 RouterProvider 組件中。
RouterProvider 組件是一個包含路由器對象的組件，該對象使用 createBrowserRouter 函數創建。Layout 函數返回一個包含 Navbar、Outlet 和 Footer 組件的 div 元素。Navbar 和 Footer 組件可能是頁面上的導航欄和頁腳。
Outlet 組件是一個占位符，用於顯示其他組件。因此，Outlet 組件與 createBrowserRouter 函數之間的關係是，Outlet 組件是 createBrowserRouter 函數返回的 RouterProvider 組件的子元素之一。*/