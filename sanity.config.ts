import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import project from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: '8titxm92',
    dataset: 'production',
    title: 'My personal website',
    apiVersion: '2024-04-02',
    basePath: '/admin',
    plugins: [structureTool()],
    schema: { types: schemas}
})

export default config;