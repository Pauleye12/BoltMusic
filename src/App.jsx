import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Login from './components/Login'
import Welcome from './components/Welcome'
import TTA from './components/TTA';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/tta",
    element: <TTA />,
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
