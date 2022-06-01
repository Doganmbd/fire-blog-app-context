import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import * as React from "react";

import CardHeader from "@mui/material/CardHeader";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";



import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useFetch } from "../utils/firebase";
import spinner from "../assests/spinner.gif";



export default function BlogCard() {
  const { blogList } = useFetch();
  let navigate = useNavigate();
  const { currentUser, handleFavIcon } = React.useContext(AuthContext);
  

   
  
    return (
    <div className="blogCardForm">
      {blogList ? (
        blogList?.map((item, index) => (
          <Card sx={{ maxWidth: 345 }} key={index} className="cardContainer">
            <div className="cardBasic">          
            <CardHeader
              onClick={(e) => 
                navigate(`/details/${item.id}`, { state: { item } })
              }
              
              avatar={
                <Avatar sx={{ bgcolor: red[500]  }} aria-label="recipe">
                  
                </Avatar>
              }
              
              sx={{ cursor: "pointer" }} 
              titleTypographyProps={{variant:'h5' }}
              title={item?.title}  
              subheader={item?.date}
            />

            
            <CardMedia
              className="cardImage"
              component="img"
              height="194"
              image={item?.imageUrl}
              alt="image"
              onClick={() =>
                navigate(`/details/${item.id}`, { state: { item } })
              }
              sx={{ cursor: "pointer" }}
            />
            <CardContent className="cardBottom">
              <Typography
                className="email"
                variant="body2"
                color="text.secondary"
                onClick={() =>
                  navigate(`/details/${item.id}`, { state: { item } })
                }
              >
                {item.user}
              </Typography>
            </CardContent>

            <CardActions  className="cardBottom" disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon
                  className={
                    item?.likedUserIds?.includes(currentUser.uid) > 0
                      ? "active"
                      : "favBtn"
                  }
                  sx={{ cursor: "pointer", marginRight: "5px" }}
                  onClick={(e) => handleFavIcon(e, item)}
                />
                <span style={{ marginRight: "0.5rem" }}>
                  {" "}
                  {item.likedUserIds?.length}
                </span>
                
              </IconButton>

              <IconButton aria-label="add to favorites">
                <ModeCommentOutlinedIcon
                  className={
                    item?.likedUserIds?.includes(currentUser.uid) > 0
                      ? "active"
                      : "favBtn"
                  }
                  sx={{ cursor: "pointer", marginRight: "5px" }}
                  /* onClick={(event) => handleFavIcon(event, item)} */
                />
                
               
                
              </IconButton>
              

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              
            </CardActions>
            <CardContent>
              <Typography
              height={90}
                variant="body2"
                color="text.secondary"
                sx={{ cursor: "pointer", "&:hover": { color: "black" } }}
                onClick={() =>
                  navigate(`/details/${item.id}`, { state: { item } })
                }
              >
                {item?.content.substring(0, 170) + " ..."}
              </Typography>
              </CardContent>
            
            </div>
          </Card>
        ))
      ) : (
        <div className="spinner">
          <img style={{ align: "center" }} src={spinner} alt="" />
        </div>
      )}
    </div>
  );
}
