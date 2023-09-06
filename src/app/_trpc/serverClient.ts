import { httpBatchLink } from "@trpc/client";
import { appRouter } from "@/server";

const APP_URL : string =  process.env.VERCEL_URL || "http://localhost:3000";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${APP_URL}/api/trpc`,
    }),
  ],
});