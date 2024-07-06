import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";

import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Chat from "./Pages/Chat/Chat.jsx";
import Preview from "./Pages/Preview/Preview.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/register",
      element: <Register />,
   },
   {
      path: "/chat",
      element: <Chat />,
   },
   {
      path: "/preview",
      element: <Preview />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <MantineProvider>
         <RouterProvider router={router} />
      </MantineProvider>
   </React.StrictMode>
);
