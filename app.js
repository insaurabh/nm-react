import React from "react";
import ReactDOM from "react-dom/client";
import dotenv from "dotenv";
dotenv.config();

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import ErrorPage from "./src/components/ErrorPage";
import RecipeDetail from "./src/components/RecipeDetail";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about-us',
        element: <About />
      },
      {
        path: '/contact-us',
        element: <Contact />
      },
      {
        path: '/recipe/:slug',
        element: <RecipeDetail />
      }
    ],
    errorElement: <ErrorPage />
  },


])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
