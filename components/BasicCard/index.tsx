import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const BasicCard = () => {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default BasicCard;

const BasicCard = () => {
  return (
    <Card sx = {{ 
      maxWidth: 500, 
      maxHeight: 500, 
      background: "#FFFFFF",
      boxShadow: "0px 0px 0px 1px #E0E0E0",
      borderRadius: "25px",
      display:'flex',
      flexDirection:"column",
      justifyContent:"center",
      alignItems: "center",
      margin: 10
      }}>
      <CardContent
      sx={{ 
        display:'flex',
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
      }}>
        <CardMedia
            alt="fundraise-img"
            component="img"
            title="Fundraise Image"
            height="140"
            image='/test.jpeg'
        />
        <Typography variant="h5" gutterBottom>
          FUNDRAISE FOR US
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas harum, porro molestiae numquam a
          nimi a vero neque corrupti ipsam dolorem id iure aperiam fugit necessitatibus soluta corporis doloremque tenetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas harum, porro molestiae numquam a
          nimi a vero neque corrupti ipsam dolorem id iure aperiam fugit necessitatibus soluta corporis doloremque tenetur.
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
        color="info"
        variant='contained'
        onClick={() => {
          alert('clicked')
        }}
        sx={{
          marginBottom: "10px"
        }}>
          SPONSOR NOW
        </Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;