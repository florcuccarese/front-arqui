import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "../components/navbar.js";
import BasicCard from "../components/basiccard.js";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const MainPage = styled('div')(({ theme }) => ({
  margin: theme.spacing(4), 
}));

export default function TestPage() {

  const URL = process.env.REACT_APP_API_URL;

  const tests = async () =>{ 
    const response = await fetch(`${URL}/GetTestsList`,
    {
      method: 'GET',
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(await response)

  }

  
// const editRecipe = async(newData,id) => {
//   const res = await fetch(`http://localhost:8000/recipe/${id}`, {
//       method: 'PUT',
//       //mode: "no-cors",
//       body: JSON.stringify(newData),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   const data = await res
//   console.log(res)
//   updateFilter()
// }

  const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar auth={true}/>
            <MainPage>
            <Grid container spacing={2}>
            <Button
              onClick={() => {
                tests();
                console.log(URL)
              }}
            >
              Click me
            </Button>
              <Grid item xs={4}>
              <BasicCard name="Rios" score="Test no realizado"></BasicCard>
              </Grid>
              <Grid item xs={4}>
              <BasicCard name="Rios" score="Test no realizado"></BasicCard>
              </Grid>
              <Grid item xs={4}>
              <BasicCard name="Rios" score="Test no realizado"></BasicCard>
              </Grid>
            </Grid>  
          </MainPage>
        </ThemeProvider>
      );
}