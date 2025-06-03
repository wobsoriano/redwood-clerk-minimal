import { defineConfig } from "vite";
import { redwood } from "rwsdk/vite";

export default defineConfig({
  resolve: {
    alias: [
      // See https://github.com/redwoodjs/sdk/issues/449
      { find: /^swr\/infinite$/, replacement: import.meta.resolve('swr/infinite') },
      { find: /^swr$/, replacement: import.meta.resolve('swr') },
    ],
  },
  plugins: [redwood()],
});
