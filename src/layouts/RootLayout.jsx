import { Outlet, useNavigation } from 'react-router-dom';
import { Loader } from 'lucide-react';

import { Footer } from '@/components/Footer';
import NavigationMenu from '@/components/NavigationMenu';

export default function RootLayout() {
  const navigation = useNavigation();
  //console.log('RootLayout navigation.state:', navigation.state);
  
  return (
    <>
      <NavigationMenu />
      
      <main>
        {navigation.state === "loading" && (
          <Loader className='animate-spin mx-auto' size={50} />
        )}
		
        <Outlet /> {/* Отрисовывает дочерние маршруты */}
		
      </main>
      <Footer />
    </>
  );
};