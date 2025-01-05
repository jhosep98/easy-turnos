import * as React from "react";
import { Toaster } from "sonner";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AppRouter } from "./router";
import { queryClient } from "./providers/query-client";
import { AppContextProvider } from "./context/app/provider";

const App: React.FC = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRouter />

        <Toaster
          position="top-right"
          toastOptions={{
            classNames: {
              error: "bg-red-400 text-white",
              success: "text-green-400",
              warning: "text-yellow-400",
              info: "bg-blue-400",
            },
          }}
        />
      </AppContextProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>
);

export default App;
