import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router';
import Sell from './Sell';
import Buy from './Buy';
import Home from './home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<App />>
          <Route index={true} element=<Home /> />
          <Route path="/Sell" element=<Sell /> />
          <Route path="/Buy" element=<Buy /> />
          <Route path="*" element=<h2>404</h2> />
        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //errorElement: <h2>error</h2>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/Sell",
        element: <Sell />
      },
      {
        path: "/Buy",
        element: <Buy />
      },
      {
        path: "*",
        element: <h2>404</h2>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);