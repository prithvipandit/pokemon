"use client"
import React ,{useState , useEffect} from "react";
import { Paper, Container, Typography, Table, TableHead,TableRow, TableBody,TableCell } from "@mui/material";
import { Pokemon } from "@prisma/client";
import { getAllPokemons } from "./pokemonService";




const entries :Pokemon[]= [
                {id:1,name:"pokemon1",type:"gross",sprite:"img--"},
                {id:2,name:"pokemon1",type:"gross",sprite:"img--"},
                {id:3,name:"pokemon1",type:"gross",sprite:"img--"}
            ];


export default function MyList(): React.JSX.Element {

    const [list,setList] = useState<Pokemon[]>([]);

    useEffect(() => {

        async function pullData(){
            const res = await getAllPokemons();
            setList(res);
            console.log("#response : ",res);
            console.log("#Updated List : ",list);
            return res;
        }

        pullData();
       
      }, []);

    

    

    

  return (
    <Container>
        <Typography mt={2} mb={2} variant="h5">list of added pokemons : </Typography>
        <Paper elevation={3} style={{ padding: '20px' }}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>name</TableCell>
            <TableCell>type</TableCell>
            <TableCell>sprite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.id}</TableCell>
              <TableCell>{entry.name}</TableCell>
              <TableCell>{entry.type}</TableCell>
              <TableCell>{entry.sprite}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>
    </Container>
  );
};


