import blogLogo from "../assests/blog.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AddBlog } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

import "./styles/newblog.css";



const NewBlog = () => {
  
  let navigate = useNavigate();
  const { currentUser } = useAuthContext();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // const privateId  = currentUser.reloadUserInfo.localId; 
    /* burdaki name => inputa göre değişir. title, url veya content. */
    ;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddBlog(currentUser);
    //yeni blog eklendikten sonra inputları boşaltmak için
    
    navigate("/");
  };

  const style = {
    "& label.Mui-focused": {
      color: "#e84224",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#ef6f59",
      },
    },
  };


  return (
    <div className="newblogContainer">
      <img src={blogLogo} alt="blog-logo" className="blogLogo" />
      <h1>── New Blog ──</h1>

      <form action="" onSubmit={handleSubmit}>
        <TextField
        sx={style}
          required
          id="outlined-required"
          label="Title"
          name="title"
         
          onChange={handleChange}
        />


        <TextField
        sx={style}
          required
          id="outlined-required"
          label="Image URL"
          name="imgUrl"
          
          type="url"
          onChange={handleChange}
        />

        <TextField
        sx={style}
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={10}
          required
          name="content"
         
          onChange={handleChange}
        />
        <Button variant="contained" className="btn" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default NewBlog;
