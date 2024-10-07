import ChattingRoom from "@pages/ChattingRoom";
import Home from "@pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "style/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/chattingRoomId",
        element: <ChattingRoom />,
      },
      { path: "/home", element: <Home /> },
    ],
  },
]);
