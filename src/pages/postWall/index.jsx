import { useEffect } from "react";
import { getPosts } from "../../services/api";
import { useUpdatePost } from "../../context/PostContext";
import { useQuery } from "@tanstack/react-query";
import { Card } from "../../components/Card";
import { formatDate } from "../../utils";

export const PostWall = () => {
  const { posts, setPosts } = useUpdatePost();

  const { data: getAllPost, isFetching } = useQuery({
    queryKey: ["get_all_post"],
    queryFn: getPosts,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (getAllPost) {
      const postsData = getAllPost;

      setPosts((prevData) => ({
        ...prevData,
        ref: postsData,
        val: postsData,
      }));
    }
  }, [getAllPost, setPosts]);

  return (
    <>
      {isFetching ? (
        <h1> Loading... </h1>
      ) : (
        posts?.val?.data?.map((item) => {
          return (
            <Card
              key={item.id}
              profileImage={item.author.profilePictureUrl}
              name={item.author.name}
              postedDate={formatDate(item.createdAt)}
              text={item.text}
              imageUrls={item.attachments}
            />
          );
        })
      )}
    </>
  );
};
