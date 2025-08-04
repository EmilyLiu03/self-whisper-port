import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// 获取仓库名称用于GitHub Pages
const repoName = 'self-whisper-port'; // 替换为你的GitHub仓库名称

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 为GitHub Pages添加base配置
  base: mode === 'production' ? `/${repoName}/` : '/',
}));
