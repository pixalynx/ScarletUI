import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const root = path.resolve(__dirname, "./src/index.ts");
const componentsPath = path.resolve(__dirname, "./src/components/index.tsx");
const layoutsPath = path.resolve(__dirname, "./src/layouts/index.tsx");

// we tried to have multiple configs but couldnt get multiple index.d.ts files out correctly
const config = {
  scarlet_ui: {
    entry: componentsPath,
    name: "Scarlet",
    fileName: `scarlet-ui`,
  },

  scarlet_layout: {
    entry: layoutsPath,
    name: "Scarlet",
    fileName: `scarlet-layout`,
  },

  scarlet: {
    entry: root,
    name: "Scarlet",
    fileName: `scarlet-ui`,
  },
};

console.log(process.env.LIB_NAME);

const currentConfig = config[process.env.LIB_NAME];

if (currentConfig === undefined) {
  throw new Error("LIB_NAME is not defined");
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    emptyOutDir: false,
    lib: {
      ...currentConfig,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      rollupTypes: true,
    }),
  ],
});
