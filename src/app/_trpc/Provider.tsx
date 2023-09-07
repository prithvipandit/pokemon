"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState,useEffect } from "react";
import { trpc } from "./client";



export default function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({}));

  const APP_URL= async()=> {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data.url;
  }

  const [appUrl, setAppUrl] = useState(""); // Store the URL as state

  useEffect(() => {
    // Fetch the URL and set it in the component's state
    APP_URL()
      .then((url) => setAppUrl(url))
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  }, []);

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${appUrl}api/trpc`
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}