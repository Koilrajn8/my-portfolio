import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = lazy(() => import('./modules/layout/Layout'));
const Home = lazy(() => import('./modules/home/Home'))
const Projects = lazy(() => import('./modules/projects/index'))
const NotFound = lazy(() => import('./NotFound'))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [ 
      { index: true, element: <Home />}, // default route
      { path: "projects", element: <Projects /> },
    ],
  },
  { path: "*", element: <NotFound /> }, // catch-all for 404
]);