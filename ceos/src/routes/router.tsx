import ChattingRoom from "@pages/ChattingRoom";
import Chattings from "@pages/Chattings";
import Home from "@pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "style/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/message/:userId",
        element: <ChattingRoom />,
      },
      { path: "/chattinglist", element: <Chattings /> },
    ],
  },
]);
