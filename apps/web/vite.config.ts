import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
export default defineConfig({ plugins:[tanstackStart({spa:{enabled:true}}),react()], server:{host:"127.0.0.1",port:4310,strictPort:true,proxy:{"/api":"http://localhost:4300","/__local":"http://localhost:4300"}} });
