import { defineConfig } from "vite";
import { redwood } from "rwsdk/vite";
import { createRequire } from "node:module";

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
