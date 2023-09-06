import { publicProcedure,router } from "./trpc";
import { z } from "zod";
import { Pokemon, Prisma, PrismaClient } from '@prisma/client';


interface ResponseData {
    pokemons: {
      id: number;
      name: string;
      type: string;
      sprite: string;
    }[];
}

const prisma = new PrismaClient();


export const appRouter = router({
    getPokemon: publicProcedure.query(async(params)=>{
        const id:any = params;
        const fetchedPokemon = await prisma.pokemon.findUnique(id);
        return {pokemon:fetchedPokemon};
    }),
    addPokemon: publicProcedure.input(z.string()).mutation(async(opts)=>{
        try{
            const {id,name,type,sprite} =  JSON.parse(opts.input);
            const pokemon: Prisma.PokemonCreateInput = {id:id,name:name,type:type,sprite:sprite}
            const savedPokemon = await prisma.pokemon.create({ data: pokemon });
            return {message:"pokemon added sucessfully",pokemon:savedPokemon};
          }catch(err){
            console.log("error while fetching ",err);
            return {error: err};
        }
    }),
    getAllPokemons: publicProcedure.query(async()=>{
        try{
            console.log("#process.env.VERCEL_URL : ",process.env.VERCEL_URL);
            for (let key in process.env) {
                console.log(`${key}: ${process.env[key]}`);
            }
            const res :Pokemon[] = await prisma.pokemon.findMany();
            const pokemons: ResponseData= { pokemons : res};
            return pokemons;
          }catch(err){
            console.log("error while fetching ",err);
            return {error: err};
        }
    })
});

export type AppRouter = typeof appRouter