import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";

export default defineConfig(() => {
  // 优先使用 process.env.PORT（如服务器环境变量），否则用 .env 文件 VITE_PORT，否则默认 8000
  const PORT = Number(process.env.PORT) || 8000;
  console.log("⚙️ Vite 配置 - 后端端口:", PORT);
  return {
    plugins: [react()],
    server: {
      port: PORT,
      host: true, // 允许 127.0.0.1 和 localhost 访问
      proxy: {
        "/api": "http://127.0.0.1:" + PORT,
      },
    },
    preview: {
      port: PORT,
      strictPort: true,
    },
  };
});
