import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'; 
import 'bulma/css/bulma.min.css';
import Home from './Pages/home.tsx';
import Time from './Pages/integrantes.tsx';
import ConhecaProjeto from './Pages/conhecaProjeto.tsx';
import Ferramentas from './Pages/ferramentas.tsx';
import GuiaDeUso from './Pages/guiaDeUso.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'conheçaotime',
    element: <Time />,
  },
  {
    path: 'conheçaoprojeto',
    element: <ConhecaProjeto />,
  },
  {
    path: 'ferramentas',
    element: <Ferramentas/>,
  },
  {
    path: 'guiadeuso',
    element: <GuiaDeUso/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
