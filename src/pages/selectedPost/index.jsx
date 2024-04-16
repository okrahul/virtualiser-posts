import React from "react";
import { getAPost } from "../../services/api";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card } from "../../components/Card";
import { formatDate } from "../../utils";

export const SelectedPost = () => {
  const { postId } = useParams();

  const [cardData, setCardData] = React.useState({
    author: {
      name: "Loading",
      profilePictureUrl: "https://avatars.githubusercontent.com/u/43858527",
    },
    createdAt: "Loading",
    text: "Loading",
    attachments: [],
  });

  const { data: postData, isFetching } = useQuery({
    queryKey: ["get-a-post", postId],
    queryFn: () => getAPost(postId),
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    setCardData(postData);
  }, [postData]);

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Card
        imageUrls={cardData?.attachments}
        name={cardData?.author?.name}
        postedDate={formatDate(cardData?.createdAt)}
        profileImage={cardData?.author?.profilePictureUrl}
        text={cardData?.text}
      />
    </div>
  );
};
