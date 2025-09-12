import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
plugins: [react()],
base: '/blog-app/' // 這裡要改成你的 GitHub repo 名稱
});