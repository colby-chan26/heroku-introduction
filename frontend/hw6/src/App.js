import {Container, TextField, Grid, } from '@mui/material';
import React, {useState} from 'react';

const App = () => {

  const [output, setOutput] = useState('')

  const getData = async (e) => {
    e.preventDefault();
    console.log('hello')
    const res = await fetch(`/name?lastName=${e.target.value}`)
    const data = await res.json()
    setOutput(data.result)
    return data;
  }

  return (
    <Container>
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh'}}>
          <Grid item xs={3}>
            <TextField onChange={(e) => getData(e)} id="outlined-basic" label="Your Input Request to Server" variant="outlined" />
            <TextField value={output} id="outlined-basic" label="Server Response" variant="outlined" />
          </Grid>
      </Grid>
    </Container>
  );
}

export default App;
