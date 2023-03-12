import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: Number(process.env.VITE_PORT),
      // strictPort: true,
      // https: true,
      hmr: {
        host: 'localhost',
        protocol: 'ws',
        port: Number(process.env.VITE_PORT),
      },
    },
  });
};