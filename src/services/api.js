import axios from "axios";

const getPosts = async ({ pageParam, searchQuery }) => {
  const api_URL = `${import.meta.env.VITE_API_URL}/posts`;

  try {
    const getPostsData = await axios.get(api_URL, {
      params: {
        page: pageParam,
        limit: 10,
        query: searchQuery || "",
      },
      headers: {
        Authorization: import.meta.env.VITE_API_HEADER,
      },
    });
    return getPostsData.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
};

const getAPost = async (postID) => {
  const api_URL = `${import.meta.env.VITE_API_URL}/posts/${postID}`;

  try {
    const getPostsData = await axios.get(api_URL, {
      headers: {
        Authorization: import.meta.env.VITE_API_HEADER,
      },
    });
    return getPostsData.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
};

export { getPosts, getAPost };
