import blogLogo from "../assests/blog.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AddBlog } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useBlogContext } from "../context/BlogContext";

import "./styles/newblog.css";

const NewBlog = () => {
  let navigate = useNavigate();
  const { currentUser } = useAuthContext();
  const {info,setInfo,date,time} = useBlogContext();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // const privateId  = currentUser.reloadUserInfo.localId;
    /* burdaki name => inputa göre değişir. title, url veya content. */
    // burada hepsini ortak paydada aldım istersem aşağıda teker teker de bunları atayabilirim
    setInfo({...info,[name]:value , date:date+time})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddBlog(info,currentUser);
    //yeni blog eklendikten sonra inputları boşaltmak için
    setInfo({...info,title:"",imageUrl:"",content:"",date:""})

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

  console.log(info)

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
          value={info?.title}
          onChange={handleChange}
        />

        <TextField
          sx={style}
          required
          id="outlined-required"
          label="Image URL"
          name="imageUrl"
          type="url"
          value={info?.imageUrl}
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
          value={info?.content}
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
