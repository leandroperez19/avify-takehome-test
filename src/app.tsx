import React from "react";
import { Router } from "@/routers/router";
import { QueryClient, QueryClientProvider } from "react-query";
import Providers from "./providers/providers";

const queryClient = new QueryClient();

const App: React.FC = () => (
    <QueryClientProvider client={queryClient}>
        <Providers>
            <Router />
        </Providers>
    </QueryClientProvider>
);

export { App };
