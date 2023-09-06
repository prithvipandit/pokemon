import {  NextResponse } from 'next/server';

import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const GET = async (req:Request,res:Response) => {
    try{
        const id:any = +req.url.split('/pokemon')[1]; 
        const res = await prisma.pokemon.findFirst(id);
        return NextResponse.json({pokemon:res},{status:200});
    }catch(err){
      console.log("error while fetching ",err);
    }
  };