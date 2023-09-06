import { initTRPC } from "@trpc/server";

const t = initTRPC.create();


export const vercel : string = process.env.VERCEL_URL || "NOT_FOUND" ;
export const router = t.router;
export const publicProcedure = t.procedure;

