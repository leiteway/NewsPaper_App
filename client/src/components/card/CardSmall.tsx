import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import DeleteOutlineOutlinerIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

//import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import { sx } from '@material-ui/system';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const link = "https://www.google.com/";

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    
    <Card sx= {{ 
        background: 'linear-gradient(90deg, #0E212C, #1A3645)', 
        maxWidth: 360,
        borderRadius: 10,
        
        }}>
      
      <CardMedia sx={{
        display: 'flex',
        justifyContent: 'center',
        width: 330,
        height: 200,
        margin: 2,
        alignContent: 'center',
        borderRadius: 5,
        
      }}
        component="img"
        height="194"
        image="../src/assets/images/person-using-ai-tool-job.jpg"
        alt="Open IA"
        
      />
      <CardContent>
      <Typography variant="body1">
        24 de septiembre de 2021
      </Typography>
        
        <Typography sx={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            padding: 1,
            marginLeft: -1,
        }}>
        OpenAI 
        </Typography>

        <Typography sx={{
            color: 'white',
            fontSize: 14,
            padding: 1,
            marginLeft: -1,
        
        }}>
        OpenAI lanza DALL-E 3, un modelo de IA que genera imágenes realistas a partir de descripciones textuales: un hito en la generación infinita de este tipo de creaciones.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>


      <Button  sx={{
        color: 'white',
        paddingLeft: 2,
        paddingRight: 2,
        marginLeft: 2,
        marginRight: 1,
        marginTop: 1,
        marginBottom: 1,
        borderRadius: 5,
        fontSize: 14,
        textTransform: 'none',
        border: '1px solid white',
    
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      }}>
        <Link sx={{
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
      
      href={link} target="_blank">Leer</Link>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Leer más"
        >
          <ExpandMoreIcon sx={{
            color: 'white',

          
          }}/>
        </ExpandMore>
        </Button>
          
          
        <IconButton sx={{
            color: 'white',
           
            '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
        }}
        
        aria-label="like">
          <FavoriteIcon />
          
        </IconButton>


        <IconButton sx={{
            color: 'white',
           
            '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
        }}
        
        aria-label="edit">
          <EditOutlinedIcon/>
        </IconButton>

        <IconButton sx={{
            color: 'white',
           
            '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
        }}
        
        aria-label="edit">
          <DeleteOutlineOutlinerIcon/>
        </IconButton>

        <Avatar
          alt="Antonio"
          src="../assets/public/users/antonio.png"
          sx={{ 
            padding: 1,
            width:45,
            height: 45,
            
        }}
        />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography paragraph>
          OpenAI, la organización de investigación sin fines de lucro fundada por Elon Musk, ha dado un paso de gigante en el campo de la inteligencia artificial con el lanzamiento de DALL-E 3. Este nuevo modelo de IA no solo es capaz de generar imágenes realistas a partir de descripciones textuales, sino que también permite un control creativo sin precedentes sobre el resultado final.
          
          </Typography>
          <Typography paragraph>
          DALL-E 3 funciona utilizando un sistema de aprendizaje profundo que ha sido entrenado con un conjunto de datos masivo de imágenes y texto. Esto le permite comprender las relaciones entre las palabras y las imágenes, y traducir las descripciones textuales en representaciones visuales de alta calidad.DALL-E 3 aún se encuentra en fase beta, pero ya ha generado un gran interés en la comunidad artística y tecnológica. Su capacidad para crear imágenes realistas a partir de la imaginación abre un nuevo mundo de posibilidades para la creación de contenido visual.
            </Typography>
          <Typography paragraph>
          Este lanzamiento marca un hito importante en el desarrollo de la inteligencia artificial. DALL-E 3 es un ejemplo del potencial que tiene la IA para transformar la forma en que creamos y consumimos contenido visual.
          En un futuro próximo, podemos esperar que DALL-E 3 y otras tecnologías similares se integren en nuestras vidas de forma cada vez más profunda.
          </Typography>
          <Typography>
            Las aplicaciones de esta tecnología son vastas y podrían revolucionar industrias como la publicidad, el diseño, la educación y el entretenimiento.
            Sin duda, DALL-E 3 es un avance significativo en el campo de la IA y un paso emocionante hacia un futuro donde la imaginación es el único límite.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
   
  );
}