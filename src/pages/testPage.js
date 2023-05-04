import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "../components/navbar.tsx";
import BasicCard from "../components/basiccard.tsx";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const MainPage = styled('div')(({ theme }) => ({
  margin: theme.spacing(4), 
}));

export default function TestPage() {

  const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar auth={true}/>
            <MainPage>
            <Grid container spacing={2}>
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