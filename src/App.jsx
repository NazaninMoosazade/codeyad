import React from "react";
import routes from "./routse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const router = createBrowserRouter(routes);

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-bgWhite">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </>
  );
}
