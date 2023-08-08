/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import AddToCartBtn from "./AddToCart";
export default function MyCard({ arr, data }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardActionArea>
        <Link
          to={"/" + arr.title}
          className="discription"
          onClick={() => {
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={arr.img}
            alt={arr.title}
            decoding="async"
          />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
              {arr.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-desc"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae consequuntur
              <span className="show-more">Show More....</span>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              className="card-price"
            >
              $ {arr.price}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions className="card-btn">
        <AddToCartBtn dataId={arr.id} data={data} />
      </CardActions>
    </Card>
  );
}
