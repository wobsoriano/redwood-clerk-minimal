import { defineConfig } from "vite";
import { redwood } from "rwsdk/vite";

export default defineConfig({
  optimizeDeps: {
    include: ['swr', 'swr/infinite']
  },
  plugins: [redwood()],
});
