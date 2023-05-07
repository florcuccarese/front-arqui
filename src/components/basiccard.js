import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function BasicCard(props) {

  let navigate = useNavigate();

  const handleExam =() => {
    navigate(
      '/question',
      {
        state: {
          questions:props.questions,
          testId: props.testId
        }
      }
    );
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.score == -1 ?  "Examen sin nota" : props.score }
        </Typography>
        <Typography variant="body2">
            Realiza este test para evaluar tu conocimiento sobre {props.name}
        </Typography>
      </CardContent>
      <CardActions>
        {props.submited ? <Button disabled size="small">Realizar test</Button> : <Button onClick={handleExam} size="small">Realizar test</Button>}
      </CardActions>
    </Card>
  );
}