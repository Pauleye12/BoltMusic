// import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Login from './components/Login'
import Welcome from './components/Welcome'
import TTA from './components/TTA';
import AgarPrep from './components/AgarPrep';



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
    path: "/welcome/tta",
    element: <TTA />,
  },
  {
    path: "/welcome/agarprep",
    element: <AgarPrep />,
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
