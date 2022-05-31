import  {createContext,useContext,useState} from "react";


export const BlogContext = createContext();

const initialValues = {
    title:"",
    imageUrl:"",
    content:"",
    date:""
}

const BlogContextProvider = ({children}) => {

    const [data, setData] = useState(initialValues);

    const date = new Date().toLocaleDateString() + " "
    const time = new Date().toLocaleTimeString().slice(0,5)



    return (
        <BlogContext.Provider value={{data,date,time,setData}} >
            {children}
        </BlogContext.Provider>
    )
}

export const useBlogContext = () => {
    return useContext(BlogContext);
}


export default BlogContextProvider;