import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import * as React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { useLocation,useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { DeleteBlog } from "../utils/firebase";
import { Button, Collapse } from "@mui/material";

import "./styles/details.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Details() {

    const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.item;

  console.log(data);

  const { currentUser, handleFavIcon } = useAuthContext();

  const deleteFunc = () => {
    DeleteBlog(data.id);
    navigate("/");
  };





  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="detailsContainer">
       
          <Card sx={{ width: 700, margin: "3rem"  }}  className="cardContainer">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {data.user[0]}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              sx={{ cursor: "pointer" }}
              title={data?.title}
              subheader={data?.date}
            />
            <CardMedia
              className="cardImage"
              component="img"
              height="194"
              image={data?.imageUrl}
              alt="image"
              
              sx={{ cursor: "pointer" }}
            />
            <CardContent className="cardContent">
              <Typography
                className="email"
                variant="body2"
                color="text.secondary"
               
              >
                {data.user}
              </Typography>
            </CardContent>

            <CardActions  className="cardContent" disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon
                  className={
                    data?.likedUserIds?.includes(currentUser.uid) > 0
                      ? "active"
                      : "favBtn"
                  }
                  sx={{ cursor: "pointer", marginRight: "5px" }}
                  onClick={(e) => handleFavIcon(e, data)}
                />
                <span style={{ marginRight: "0.5rem" }}>
                  {" "}
                  {data.likedUserIds?.length}
                </span>
           
              </IconButton>

              <IconButton aria-label="add to favorites">
                <ModeCommentOutlinedIcon
                  className={
                    data?.likedUserIds?.includes(currentUser.uid) > 0
                      ? "active"
                      : "favBtn"
                  }
                  sx={{ cursor: "pointer", marginRight: "5px" }}
                  onClick={(e) => handleFavIcon(e, data)}
                />
              
           
              </IconButton>

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  paragraph
                  
                >
                  {data?.content.substring(0, 1000) + " ..."}
                </Typography>
              </CardContent>
            </Collapse>

            {currentUser?.email === data?.user ? (
          <div className="buttons">
            <Button className="deleteButton" onClick={deleteFunc}>
              DELETE
            </Button>
            <Button
              className="updateButton"
              onClick={() => navigate(`/update/${data.id}`, { state: { data } })}
            >
              UPDATE
            </Button>
          </div>
        ) : (
          <div className="blogWarning">
            Only the author of this blog can make changes...
          </div>
        )}
          </Card>
    </div>
  );
}
