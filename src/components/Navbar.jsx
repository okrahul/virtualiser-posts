import { useUpdatePost } from "../context/PostContext";

export const Navbar = () => {
  const { posts, setPosts } = useUpdatePost();

  const handleChange = (event) => {
    const { value } = event.target;
    if (posts && posts.ref.data) {
      const filteredPosts = posts?.ref.data?.filter((post) =>
        post.author.name?.toLowerCase()?.includes(value.toLowerCase())
      );
      const formate = { ...posts, data: filteredPosts };
      setPosts((prevData) => ({
        ...prevData,
        val: formate,
      }));
    }
  };

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex justify-start text-white"></div>
        <div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search"
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>
        <div className="flex items-center text-white">logo2</div>
      </div>
    </nav>
  );
};
