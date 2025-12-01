import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'
import path from 'node:path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: env.VITE_CLIENT_BASE_URL || '/',
    server: {
      port: env.VITE_CLIENT_PORT ? parseInt(env.VITE_CLIENT_PORT, 10) : 5173,
      open: env.VITE_CLIENT_OPEN_BROWSER === 'true',
    },
    build: {
      outDir: './dist', // вывод сборки в папку ./dist 
      sourcemap: false, // отключение генерации sourcemap файлов
    },
    plugins: [
      react({
        babel: {
          plugins: [
            ["babel-plugin-react-compiler", { target: '19' }],
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // пример подключения файла: import NavigationMenu from '@/components/NavigationMenu';
      },
    },
  }
});