import axios from "axios";

const getPosts = async () => {
  const api_URL =
    "https://rigi-react-assignment-ii-server-production.up.railway.app/api/posts";

  try {
    const getPostsData = await axios.get(api_URL, {
      params: {
        page: 1,
        limit: 10,
      },
      headers: {
        Authorization: import.meta.env.VITE_API_HEADER,
      },
    });
    return getPostsData.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export { getPosts };
