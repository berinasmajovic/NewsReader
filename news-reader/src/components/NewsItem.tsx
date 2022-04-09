import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const NewsItem = ({
  title,
  description,
  url,
  urlToImage,
}: {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}) => {
  return (
    <Card style={{ padding: "5%" }}>
      <CardMedia
        component="img"
        height="140"
        image={urlToImage}
        alt="image"
      ></CardMedia>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Card>
  );
};

export default NewsItem;
