"use client"
import React ,{useState , useEffect} from "react";
import { Paper, Container, Typography, Table, TableHead,TableRow, TableBody,TableCell, Autocomplete, TextField, Checkbox } from "@mui/material";
import { Pokemon } from "@prisma/client";
import { trpc } from '../_trpc/client';
import MultiSelectDropdown from "./PokemonType";


interface ResponseData {
  pokemons: {
    id: number;
    name: string;
    type: string;
    sprite: string;
  }[];
}


const entries :Pokemon[]= [
                {id:1,name:"Bulbasaur",type:"gross",sprite:"ig.--"},
                {id:2,name:"Charmander",type:"fire",sprite:"ig.--"},
                {id:3,name:"Pikachu",type:"angry",sprite:"ig.--"}
              ];


export default function MyList(): React.JSX.Element {

    const { data, isLoading } = trpc.getAllPokemons.useQuery() as {
      data : ResponseData,
      isLoading : Boolean
    };
    const availableTypes = ['gross','angry','fire'];
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    
    const handleSelectedTypesChange = (newSelectedTypes: React.SetStateAction<any[]>) => {
      setSelectedTypes(newSelectedTypes);
    };

    useEffect(()=>{
      const fetchDataFromApi=async ()=> {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return await response.json();
      }

      fetchDataFromApi().then((data)=>{
        // console.log("data fetched ",data.url);
      });
    
    },[]);

    const filteredList=(pokemons:Pokemon[])=>{

      let filteredData :Pokemon[] = [];
      
      pokemons?.forEach((pokemon)=>{
        for(const typo in selectedTypes){
          if(pokemon.type.includes(selectedTypes[typo])){
            filteredData.push(pokemon);
            break;
          }
        }
      });
      return filteredData
    }

    
  return (
    <Container>
      <MultiSelectDropdown
        someKey="123"
        options={availableTypes}
        selectedOptions={selectedTypes}
        onSelectedOptionsChange={handleSelectedTypesChange}
      />
      { selectedTypes.length>0 ? <>
        <Typography mt={2} mb={2} variant="h5">Filtered Pokemons :</Typography>
        <Paper elevation={3} style={{ padding: '20px' }}>
        <Table>
        <TableHead>
          <TableRow>
            
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Sprite</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          { true ? filteredList(entries).map((entry) => (
            <TableRow key={entry.id}>
              
              <TableCell>{entry.name}</TableCell>
              <TableCell>[{entry.type}]</TableCell>
              <TableCell>{entry.sprite}</TableCell>
            </TableRow>
          )) : filteredList(data.pokemons)?.map((entry) => <TableRow key={entry.id}>
          
          <TableCell>{entry.name}</TableCell>
          <TableCell>[{entry.type}]</TableCell>
          <TableCell>{entry.sprite}</TableCell>
        </TableRow>)}
        </TableBody>
      </Table>
        </Paper></>  : <><Typography mt={2} mb={2} variant="h5">Pokemons : </Typography>
        <Paper elevation={3} style={{ padding: '20px' }}>
        <Table>
        <TableHead>
          <TableRow>
            
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Sprite</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          { true? entries.map((entry) => (
            <TableRow key={entry.id}>
              
              <TableCell>{entry.name}</TableCell>
              <TableCell>[{entry.type}]</TableCell>
              <TableCell>{entry.sprite}</TableCell>
            </TableRow>
          )) :  
          
          data.pokemons?.map((entry) => 
          <TableRow key={entry.id}>
            <TableCell>{entry.name}</TableCell>
            <TableCell>[{entry.type}]</TableCell>
            <TableCell>{entry.sprite}</TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
      </Paper></> }
    </Container>
  );
};


