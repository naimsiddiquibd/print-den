import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Print from './Pages/Print/Print.jsx';
import ChooseSizes from './Pages/ChooseSizes/ChooseSizes.jsx';
import PersonalInfo from './Pages/PersonalInfo/PersonalInfo.jsx';
import UnderConstructionPage from './Pages/UnderConstructionPage/UnderConstructionPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/print",
    element: <Print></Print>
  },
  {
    path: "/choose-size",
    element: <ChooseSizes></ChooseSizes>
  },
  {
    path: "/personal-info",
    element: <PersonalInfo></PersonalInfo>
  },
  {
    path: "/under-construction",
    element: <UnderConstructionPage></UnderConstructionPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
