import * as React from 'react';
/* import { styled } from '@mui/material/styles'; */
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton /* { IconButtonProps } */ from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import DeleteOutlineOutlinerIcon from '@mui/icons-material/DeleteOutlineOutlined';
/* import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; */
import Button from '@mui/material/Button';
/* import Link from '@mui/material/Link';
 */

/* import { getAllNews, deletePost, getOnePost  } from '../../services/newsServices'; */

import { useNavigate, useParams, /* useState  */} from "react-router-dom"; 

//import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import { sx } from '@material-ui/system';
const { id } = useParams();
/* const [news, setNews] = useState([]);*/
const navigate = useNavigate();
const [expanded, setExpanded] = React.useState(false);
/* const link = "http://localhost:3000/news/${id}";*/


interface CardProps {
  expand: boolean;
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  user_id: string;
}



const CardSmall : React.FC<CardProps> = ({title, description, content, image, date, user_id }) => {
/* const [expanded, setExpanded] = React.useState(false); */
 
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
        image={image}
        alt="Imagen de la noticia"
        
      />
      <CardContent>
      <Typography variant="body1">
        {date}
      </Typography>
        
        <Typography sx={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            padding: 1,
            marginLeft: -1,
        }}>
        {title} 
        </Typography>

        <Typography sx={{
            color: 'white',
            fontSize: 14,
            padding: 1,
            marginLeft: -1,
        
        }}>
        {description}
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
            {/* <Link to=link target="_blank"
            sx={{
            color: 'white',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            }, 
          }}>
            Leer</Link> */}
       {/*  <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Leer más"
          >
            <ExpandMoreIcon sx={{
              color: 'white',
  
            
            }}/>
          </ExpandMore> */}
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
  
  
          <IconButton onClick={() => navigate(`/Edit/${id}`)}
            sx={{
              color: 'white',
             
              '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
          }}
          
          aria-label="edit">
            <EditOutlinedIcon/>
          </IconButton>
  
          <IconButton onClick={() => { const confirmDelete = window.confirm('¿Deseas eliminar esta noticia?'); if (confirmDelete) {(id); navigate(0)}}}
            sx={{
              color: 'white',
             
              '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
          }}
          
          aria-label="delete">
            <DeleteOutlineOutlinerIcon/>
          </IconButton>
  
          <Avatar
            alt="Antonio"
            src={user_id}
            sx={{ 
              padding: 1,
              width:45,
              height: 45,
              
              
          }}
          />
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            
            <Typography>
              {content}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
     
    );
} 
export default Card;