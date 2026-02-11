import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) =>
                        [
                            "sodipodi:namedview",
                            "dc:format",
                            "dc:type",
                            "cc:license",
                            "dc:title",
                            "cc:Agent",
                            "dc:publisher",
                            "cc:Work",
                            "cc:permits",
                            "cc:License",
                            "rdf:RDF",
                        ].includes(tag),
                },
            },
        }),
        vueJsx(),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    base: "./",
});
