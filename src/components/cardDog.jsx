import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CardDog = (props) => {
  const classes = useStyles()
  const {name,edad,propietario,ubicacion,foto}=props.info
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={foto}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <p>Nombre:{name}</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p>Edad:{edad}</p>
            <p>Nombre propietario:{propietario}</p>
            <p>Ubicacion:{ubicacion}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Adoptar
        </Button>
        <Button size="small" color="primary">
          Contacto propietario
        </Button>
      </CardActions>
    </Card>
  );
}

 
export default CardDog;