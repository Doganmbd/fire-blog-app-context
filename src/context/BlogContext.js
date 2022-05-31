import  {createContext,useContext} from "react";


export const BlogContext = createContext();


const BlogContextProvider = ({children}) => {






    return (
        <BlogContext.Provider >
            {children}
        </BlogContext.Provider>
    )
}

export const useBlogContext = () => {
    return useContext(BlogContext);
}


export default BlogContextProvider;