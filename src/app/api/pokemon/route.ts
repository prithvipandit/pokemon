import {  NextResponse } from 'next/server';

import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const GET = async (req:Request,res:Response) => {
  try{
    const res = await prisma.pokemon.findMany();
    return NextResponse.json({pokemon:res},{status:200});
  }catch(err){
    console.log("error while fetching ",err);
  }
};


export const POST = async (req:Request,res:Response) =>{
  try{
    const obj = await req.json();
    const pokemon: Prisma.PokemonCreateInput = {id:obj.id,name:obj.name,type:obj.type,sprite:obj.sprite}
    const savedPokemon = await prisma.pokemon.create({ data: pokemon });
    console.log("-->#",savedPokemon);
    return NextResponse.json({message:"pokemon added sucessfully",pokemon:savedPokemon},{status:200});
  }catch(err){
    console.log("error while fetching ",err);
  }
};


