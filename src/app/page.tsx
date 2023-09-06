"use client"
import React ,{useEffect} from 'react';
import { Container, Grid, Paper } from '@mui/material';
import Form from './components/addForm';
import List from './components/displayData';




export default function Home() {

  return (
    <>
    <Container>
    <Grid container spacing={2}>
        {/* Left Section (30%) */}
        <Grid item xs={12} sm={11}>
          <Paper elevation={1} style={{ marginBottom: '7px' }}>
            {/* Content for the left section */}
            <div style={{ padding: '16px',height:'22',display:'flex',justifyContent:'center',alignItems:'center' }}>
              Content Moderation for Pokemons
            </div>
          </Paper>
        </Grid>

        {/* Right Section (70%) */}
        <Grid item xs={12} sm={1}>
          <Paper elevation={1} style={{ marginBottom: '7px' }}>
            {/* Content for the right section */}
            <div style={{ padding: '16px',height:'22',display:'flex',justifyContent:'center' }}>
              
            </div>
          </Paper>
        </Grid>
      </Grid>

    </Container>
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
              <List />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}
