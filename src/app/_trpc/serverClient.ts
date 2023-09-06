import { httpBatchLink } from "@trpc/client";
import { appRouter } from "@/server";
import { vercel } from "@/server/trpc";

const APP_URL : string =  "https://"+vercel+"/" || "http://localhost:3000/";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${APP_URL}api/trpc`,
    }),
  ],
});