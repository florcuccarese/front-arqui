import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.score}
        </Typography>
        <Typography variant="body2">
            Realiza este test para evaluar tu conocimiento sobre {props.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Realizar test</Button>
      </CardActions>
    </Card>
  );
}