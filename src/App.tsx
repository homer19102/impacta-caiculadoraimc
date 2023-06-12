import React, {useState} from 'react';
import {Button, TextField, Grid, Alert  } from '@mui/material';
import { IIMCForm } from '../interfaces';
import TabelaImc from './Components/TabelaImc';

function App() {
  const [form, setForm] = useState<IIMCForm>({} as IIMCForm);
  const [exibeTabelaImc, setExibeTabelaImc] = useState<boolean>(false);

  function onSetFormValue(field : string, value : string){
    setForm(prevState => ({
      ...(prevState || {}),
      peso: field === 'peso' ? Number(value) : prevState.peso,
      altura: field === 'altura' ? Number(value) : prevState.altura,
    }))
  }

  function onCalculaImc(){

    const resultado = form.peso / (form.altura * form.altura);

    setExibeTabelaImc(true);
    setForm(prevState => ({
      ...(prevState || {}),
      resultado: resultado.toFixed(2)
    }))
 
  }


  return (
    <Grid container direction="column" alignItems="center" spacing={4}>
      <Grid item xs={8}>
        <TextField required
         type='number'
         id="filled-basic"
         label="Peso em kg"
         variant="standard"
          inputProps={{ maxLength: 3 }}
         onChange={(value : React.ChangeEvent<HTMLInputElement>) => onSetFormValue('peso', value.target.value)} />
     </Grid>

     <Grid item xs={8}>
      <TextField 
        required 
        type='number'
        id="filled-basic"
        label="Altura em metros"
        variant="standard"
        inputProps={{ maxLength: 3 }}
        onChange={(value : React.ChangeEvent<HTMLInputElement>) => onSetFormValue('altura', value.target.value)} />
      
     </Grid>
     <Grid item xs={8}>
        <Button variant="contained" onClick={() => onCalculaImc()} >
          Calcular
        </Button>
       
    </Grid>

    {exibeTabelaImc &&
    <>
        <Grid item xs={8}>
          <TabelaImc/>
        </Grid>
        <Grid item xs={8}>
          <Alert severity="info">Seu imc é {form?.resultado}</Alert>
       </Grid>
    </>
    }
  
  </Grid>
   
  );
}

export default App;
