import { useRouteError } from "react-router-dom";

import RootLayout from '@/layouts/RootLayout';

import HomePage from '@/pages/HomePage';
import { ContactPage } from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

//const routes = [ // v-1
export const routes = [ // v-2
  {
    path: '/',
    element: <RootLayout />,
    //errorElement: <NotFoundPage />, // ТОЛЬКО содержимое NotFoundPage ( БЕЗ содержимого <RootLayout /> )
    children: [
      {
        id: 'home',
        index: true,
        element: <HomePage />,
		
      },
      {
        id: 'contacts',
        path: "/contacts",
        element: <ContactPage />,
      },
      {
        id: 'notfound',
        path:'*',
        element: <NotFoundPage /> // ВСЁ на 404 страницу ( ВСЁ содержимое <RootLayout /> )
      },
      
	  
	  
    ],
  },
];
//export default routes;// v-1