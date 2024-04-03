import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: '8titxm92',
    dataset: 'production',
    title: "Jesi's web",
    apiVersion: '2024-04-02',
    basePath: '/admin',
    plugins: [structureTool()],
    schema: { types: schemas}
})

export default config;