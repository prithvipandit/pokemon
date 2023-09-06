"use client"

import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Grid,Typography } from '@mui/material';
import { trpc } from '../_trpc/client';


export default function Form() {

  const getAllPokemons = trpc.getAllPokemons.useQuery();
  const addPokm = trpc.addPokemon.useMutation({
    onSettled:()=>{
      getAllPokemons.refetch();
      setEntry1('');
      setEntry2('');
      setEntry3('');
      setEntry4('');
    }
  });


  const [entry1, setEntry1] = useState('');
  const [entry2, setEntry2] = useState('');
  const [entry3, setEntry3] = useState('');
  const [entry4, setEntry4] = useState('');

  const handleSubmit = async(e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const res = await addPokm.mutate(JSON.stringify({id:+entry1,name:entry2,type:entry3,sprite:entry4}))
    console.log("add :: ",res);

    // addPokemon({id:+entry1,name:entry2,type:entry3,sprite:entry4}).then((res)=>{
    //     console.log("response ",res);
    //     setEntry1('');
    //     setEntry2('');
    //     setEntry3('');
    //     setEntry4('');
    // }).catch((error)=>{
    //     console.log("error ",error);
    // });
  };

  return (
    <Container>
        <Typography mb={4} variant="h5" component="h5">add pokemon details : </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="id (Number)"
                fullWidth
                variant="outlined"
                value={entry1}
                onChange={(e) => setEntry1(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="name"
                fullWidth
                variant="outlined"
                value={entry2}
                onChange={(e) => setEntry2(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="type"
                fullWidth
                variant="outlined"
                value={entry3}
                onChange={(e) => setEntry3(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="sprite"
                fullWidth
                variant="outlined"
                value={entry4}
                onChange={(e) => setEntry4(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
