import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/forest-house-3d/",
  assetsInclude: ["**/*.glb", "**/*.hdr"],
});
