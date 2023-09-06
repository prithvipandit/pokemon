import { httpBatchLink } from "@trpc/client";
import { appRouter } from "@/server";

const APP_URL : string =  "https://"+process.env.VERCEL_URL;

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${APP_URL}/api/trpc`,
    }),
  ],
});