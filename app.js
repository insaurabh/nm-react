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
import RecipeDetail from "./src/components/RecipePage/RecipeDetail";

import { recipesLoader, recipeLoader } from "./src/components/RecipePage/loaders";


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
        index: true,
        path: '/',
        element: <Body />,
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
        element: <RecipeDetail />,
        loader:  async ({params}) => {
          return recipeLoader(params.slug);
        },
      }
    ],
    errorElement: <ErrorPage />
  },


])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
