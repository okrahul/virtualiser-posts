import React from "react";
import { getPosts } from "../../services/api";
import { useUpdatePost } from "../../context/PostContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useSearch } from "../../context/SearchContext";
import { Card } from "../../components/Card";
import { formatDate } from "../../utils";

export const PostWall = () => {
  const { posts, setPosts } = useUpdatePost();
  const { ref: spanRef, inView } = useInView();
  const { searchQuery } = useSearch();

  const {
    data: getAllPost,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["get_all_post", searchQuery],
    queryFn: ({ pageParam }) => getPosts({ pageParam, searchQuery }),
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.pagination?.hasMore) {
        return allPages.length + 1;
      }
      return undefined;
    },
  });

  React.useEffect(() => {
    if (getAllPost) {
      const allPosts = getAllPost.pages.flatMap((page) => page.data);
      setPosts({ ref: allPosts, val: allPosts });
    }
  }, [getAllPost, setPosts]);

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (!isFetching && posts?.val[0] === undefined) {
    return <h1> No Data... </h1>;
  }

  if (isFetching && !hasNextPage && !isFetchingNextPage) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {posts?.val?.map((item) => {
        return (
          <Card
            key={item?.id}
            profileImage={item?.author.profilePictureUrl}
            name={item?.author?.name}
            postedDate={formatDate(item?.createdAt)}
            text={item?.text}
            imageUrls={item?.attachments}
          />
        );
      })}
      <div ref={spanRef} style={{ width: "100%" }}>
        {isFetchingNextPage
          ? "Loading... More Posts"
          : !hasNextPage && !isFetchingNextPage
          ? "No More Data"
          : ""}
      </div>
    </>
  );
};
