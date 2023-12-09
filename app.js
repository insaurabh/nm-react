import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import dotenv from "dotenv";
dotenv.config();

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import About from "./src/components/About";
// import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import ErrorPage from "./src/components/ErrorPage";
import RecipeDetail from "./src/components/RecipePage/RecipeDetail";

import { recipesLoader, recipeLoader } from "./src/components/RecipePage/loaders";
const About = lazy(() => import('./src/components/About'));
const Contact = lazy(() => import("./src/components/Contact"));

import CardShimmer from './src/components/Shimmers/Card';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="h-24 min-h-full" style={{ minHeight: "36rem" }}>
        <Outlet />
      </div>
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
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
      },
      {
        path: '/contact-us',
        element: <Suspense fallback={<h2>Loading...</h2>}><Contact /></Suspense>
      },
      {
        path: '/recipe/:slug',
        element: <RecipeDetail />,
        loader: async ({ params }) => {
          return recipeLoader(params.slug);
        },
      }
    ],
    errorElement: <ErrorPage />
  },


])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
