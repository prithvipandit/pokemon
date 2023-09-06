import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@/server";

export const trpc = createTRPCReact<AppRouter>({});

export const vercel:string = process.env.VERCEL_URL || "XZ";