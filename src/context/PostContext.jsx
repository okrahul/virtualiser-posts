import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export const useUpdatePost = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState({
    ref: [],
    val: [],
  });

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
