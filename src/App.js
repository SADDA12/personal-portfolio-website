import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingpage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage/> }
])

export default function App() {
  return (
   <>
   <RouterProvider router={router} />
   </>
  );
}

