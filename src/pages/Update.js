import blogLogo from "../assests/blog.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles/newblog.css";
import { useBlogContext } from "../context/BlogContext";
import { EditUser } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

import { Toastify } from "../utils/toastify";


const Update = () => {
  const { info, setInfo, date, time } = useBlogContext();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data

  const newValue = { title: data.title,
    imageUrl: data.imageUrl,
    content: data.content,
    date: data.date,
    likes: 0,
    user: currentUser.email,}


  const handleChange = (e) => {
    e.preventDefault();
    const { name, defaultValue, value } = e.target;
    setInfo({ ...newValue, [name]: (value ? value : defaultValue), date: date + time, id:data.id, user:data.user });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EditUser(info);
    // editten sonra new blog value larını temizlemek için : 
    Toastify("update succeeded");
    setInfo({ ...info, title: "", imageUrl: "", content: "", date: "" });
    navigate(`/`);
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
      <h1>── Update Blog ──</h1>

      <form action="" onSubmit={handleSubmit}>
        <TextField
        sx={style}
          required
          id="outlined-required"
          label="Title"
          defaultValue={data?.title}
          name="title"
          onChange={(e)=>handleChange(e)}
        />

        <TextField
        sx={style}
          required
          id="outlined-required"
          label="Image URL"
          defaultValue={data?.imageUrl}
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
          defaultValue={data?.content}
          required
          name="content"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          className="btn"
          onClick={handleSubmit}
          type="submit"
        >
          EDIT
        </Button>
      </form>
    </div>
  );
};
export default Update;
