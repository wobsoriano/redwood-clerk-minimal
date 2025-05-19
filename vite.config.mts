import { defineConfig } from "vite";
import { redwood } from "rwsdk/vite";

export default defineConfig({
  resolve: {
    alias: [
      { find: /^swr\/infinite$/, replacement: import.meta.resolve('swr/infinite') },
      { find: /^swr$/, replacement: import.meta.resolve('swr') }
    ],
  },
  plugins: [redwood()],
});
