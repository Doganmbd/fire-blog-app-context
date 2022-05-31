import  {createContext,useContext,useState} from "react";


export const BlogContext = createContext();

const initialValues = {
    title:"",
    imageUrl:"",
    content:"",
    date:""
}

const BlogContextProvider = ({children}) => {

    
    const date = new Date().toLocaleDateString() + " "
    const time = new Date().toLocaleTimeString().slice(0,5)
    
    const [info, setInfo] = useState(initialValues);


    return (
        <BlogContext.Provider value={{info,date,time,setInfo}} >
            {children}
        </BlogContext.Provider>
    )
}

export const useBlogContext = () => {
    return useContext(BlogContext);
}


export default BlogContextProvider;