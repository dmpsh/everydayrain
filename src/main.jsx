import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FavoritesProvider } from "@/contexts/FavoritesContext";

//import routes from '@/routes.jsx'; // v-1 USAGE
import { routes } from '@/routes.jsx'; // v-2 USAGE

//import '@/assets/css/style.css'; // подключаем стили если не подключены в файле /index.html

//console.log(import.meta.env);
const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL || '/',
  //future: { v7_partialHydration: true },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router}></RouterProvider>
    </FavoritesProvider>
  </StrictMode>,
)