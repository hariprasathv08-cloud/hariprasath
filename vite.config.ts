import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    spa: { enabled: true },
  },
  nitro: {
    preset: "node-server",
  },
  vite: {
    preview: {
      host: "0.0.0.0",
      port: process.env["PORT"] ? Number(process.env["PORT"]) : 4173,
      allowedHosts: true,
    },
    server: {
      allowedHosts: true,
    },
  },
});
