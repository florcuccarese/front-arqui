import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "../components/navbar.js";
import { styled } from '@mui/material/styles';
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




const MainPage = styled('div')(({ theme }) => ({
  margin: theme.spacing(4), 
}));

const url1 = 'https://cdn.discordapp.com/attachments/786469581178667041/1103776246980165752/AAAAAElFTkSuQmCC.png'
const url2 = 'https://cdn.discordapp.com/attachments/786469581178667041/1103776662845403166/xznJZgi2TkEgAAAABJRU5ErkJggg.png'
const url3 = 'https://cdn.discordapp.com/attachments/786469581178667041/1103776478728044696/wf4NGLgUq0IAAAAABJRU5ErkJggg.png'

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
    
export default function QuestionPage(props) {
  let navigate = useNavigate();
  const theme = createTheme();
  const {state} = useLocation();
  const { questions, testId} = state;
  const [data, setData] = useState(questions);


  const URL = process.env.REACT_APP_API_URL;

  const sendAnwer = async()=>{
    const answerData = {
      "user": 10,
      "testId": testId,
      "questionId": 0,
      "answerId": 0
    }
    const res = await fetch(`${URL}/SubmitAnswer`, {
          method: 'POST',
          body: JSON.stringify(data),
          mode: "cors",
          headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Origin': 'http://localhost:3006',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        // if (!res.ok)
        //   alert('Error creando receta');
  }


  const updateQuestion = () => {
    if (data.length == 1){
      navigate('/')
    }else if (data.length > 1) {
      console.log(data);
      const newData = [...data];
      newData.shift();
      setData(newData);
      console.log(data);
    }  
  }

  useEffect (() => {
  },[data])

    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar auth={true}/>
            <MainPage>
            <Grid container alignItems={"center"} alignContent={"center"} spacing={11} mt={9}>
            <Grid item xs={12}>
            <Typography variant="h4" marked="center" align="center" component="h2" mb={6}>
                {data[0].question}
            </Typography>
            <Divider variant='middle'></Divider>
            </Grid>
            <Grid item marked="center" align="center" xs={12}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '40%' }}>
                <ImageButton
                onClick={() => updateQuestion()}
                focusRipple
                key={data[0].answer1}
                style={{
                    width: '33.3%',
                }}
                >
                <ImageSrc style={{ backgroundImage: `url(${url1})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                    >
                    {data[0].answer1}
                    <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                </Image>
                </ImageButton>
                <ImageButton
                focusRipple
                key={data[0].answer2}
                style={{
                    width: '33.3%',
                }}
                >
                <ImageSrc style={{ backgroundImage: `url(${url2})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                    >
                    {data[0].answer2}
                    <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                </Image>
                </ImageButton>
                <ImageButton
                focusRipple
                key={data[0].answer3}
                style={{
                    width: '33.3%',
                }}
                >
                <ImageSrc style={{ backgroundImage: `url(${url3})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                    >
                    {data[0].answer3}
                    <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                </Image>
                </ImageButton>
            </Box>
            </Grid>
            </Grid>
          </MainPage>
        </ThemeProvider>
      );
}