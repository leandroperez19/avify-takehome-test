import { defineConfig } from "cypress";

export default defineConfig({
    component: {
        devServer: {
            framework: "react",
            bundler: "webpack",
        },
    },
    e2e: {
        baseUrl: "http://localhost:5173",
        specPattern: [
            "cypress/e2e/**/*.cy.{ts,tsx}",
            "src/tests/e2e/*.cy.{ts,tsx}",
        ],
    },
});
