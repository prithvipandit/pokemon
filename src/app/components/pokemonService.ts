import { Pokemon } from '@prisma/client';


export const getAllPokemons = async()=>{
    try{
        const response = await fetch('/api/pokemon', {method: 'GET'});
        const data = await response.json();
        let pokemons :Pokemon[] = data.pokemon;
        return pokemons;
    }catch(err){
        console.log("error while fetching data ",err);
        return [];
    }
};

export const getPokemon = async(id:any)=>{
    try{
        const response = await fetch(`/api/pokemon/${+id}`, {method: 'GET'});
        const data = await response.json();
        return data;
    }catch(err){
        console.log("error while fetching data ",err);
        return [];
    }
};

export const getListPokemons = async (ids:any[])=>{
    try{
        let data : any[] = [];
        for(const id in ids){
            const pokemon = await getPokemon(ids[id]);
            data.push(pokemon);
        }
        return data;
    }catch(err){
        console.log("error while fetching data ",err);
        return [];
    }
};

export const addPokemon = async(data:Pokemon)=>{
    const response = await fetch('/api/pokemon', {
        method: 'POST',
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return await response.json();
};