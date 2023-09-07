import { httpBatchLink } from "@trpc/client";
import { appRouter } from "@/server";


const APP_URL= async()=> {
  const response = await fetch('/api/data');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data.url;
}

export const serverClient = APP_URL().then((url)=>{
  return appRouter.createCaller({
    links: [
      httpBatchLink({
        url: `${url}api/trpc`,
      }),
    ],
  })
});