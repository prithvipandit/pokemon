"use client"
import React ,{useEffect} from 'react';
import { Container, Grid, Paper } from '@mui/material';
import Form from './components/AddPokemon';
import List from './components/PokemonList';




export default function Home() {

  return (
    <>
    <Container>
      <Grid container spacing={2}>
        {/* Left Section (30%) */}
        <Grid item xs={12} sm={4}>
          <Paper elevation={1}>
            {/* Content for the left section */}
            <div style={{ padding: '16px',height:'450px',display:'flex',justifyContent:'center',alignItems:'center' }}>
              {/* Add your content here */}
             
              <Form/>
            </div>
          </Paper>
        </Grid>

        {/* Right Section (70%) */}
        <Grid item xs={12} sm={8}>
          <Paper elevation={1}>
            {/* Content for the right section */}
            <div style={{ padding: '16px',height:'450px',display:'flex',justifyContent:'center' }}>
              {/* Add your content here */}
              <List/>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}
