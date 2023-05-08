import React, { useCallback, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "../components/navbar.js";
import BasicCard from "../components/basiccard.js";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';



const MainPage = styled('div')(({ theme }) => ({
  margin: theme.spacing(4), 
}));

export default function TestPage() {

  const [listTest, setListTest] = useState([]);

  const URL = process.env.REACT_APP_API_URL;

  const getTests = useCallback( async () =>{ 
    const response = await fetch(`${URL}/GetTestsList`,
    {
      method: 'GET',
      mode: "cors",
      headers: {
          'Accept': 'application/x-www-form-urlencoded',
          'Origin': 'http://localhost:3006',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    const data = await response.json();
    // console.log(data);
    setListTest(data)
  },[])

  useEffect(() => {
    getTests()
  }, [getTests])


  
  const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar auth={true}/>
            <MainPage>
            <Grid container spacing={2}> 
              {listTest.map (el => (
                <Grid key={el.testId} item xs={4}>
                <BasicCard key={el.testId} name={el.name} score={el.score} submited={el.submited} questions={el.questions} testId={el.testId}></BasicCard>
                </Grid>
              ))}
            </Grid>  
          </MainPage>
        </ThemeProvider>
      );
}