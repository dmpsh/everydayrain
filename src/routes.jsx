import { useRouteError } from "react-router-dom";

import RootLayout from '@/layouts/RootLayout';

import HomePage, { loader as HomeLoader } from '@/pages/HomePage';
import { ContactPage } from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Global error boundary
function GlobalErrorPage() {
  const error = useRouteError();
  return (
    <div className="global-error-page">
      <p>{error.message || "Unknown error"}</p>
    </div>
  );
}

function CustomErrorPage() {
  const error = useRouteError();
  //console.log(error)
  return (
    <div className="error-page">
      <h1>Ошибка</h1>
      <p>{error.data || "Произошла ошибка при загрузке данных."}</p>
    </div>
  );
}

//const routes = [ // v-1
export const routes = [ // v-2
  {
    path: '/',
    element: <RootLayout />,
    handle: { crumb: () => 'Главная' },
    //errorElement: <NotFoundPage />, // ТОЛЬКО содержимое NotFoundPage ( БЕЗ содержимого <RootLayout /> )
    //errorElement: <GlobalErrorPage />, // ТОЛЬКО содержимое GlobalErrorPage ( БЕЗ содержимого <RootLayout /> )
    children: [
      {
        id: 'home',
        index: true,
        element: <HomePage />,
        loader: HomeLoader,
        errorElement: <CustomErrorPage />, // ВСЁ содержимое <RootLayout /> + содержимое CustomErrorPage
      },
      {
        id: 'contacts',
        path: "/contacts",
        element: <ContactPage />,
        handle: { crumb: () => 'Контакты' },
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