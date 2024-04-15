import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css";

export const MediaCarousel = ({ mediaArray }) => {
  if (mediaArray?.length === 1) {
    const mediaItem = mediaArray[0];
    if (mediaItem.type === "video") {
      return <video src={mediaItem.url} loop />;
    } else {
      return <img src={mediaItem.url} alt="Media" />;
    }
  } else {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="my-5">
        <Slider {...settings}>
          {mediaArray?.map((mediaItem) => (
            <div key={mediaItem.id}>
              {mediaItem.type === "video" ? (
                <video src={mediaItem.url} autoPlay muted loop playsInline />
              ) : (
                <img src={mediaItem.url} alt="Media" />
              )}
            </div>
          ))}
        </Slider>
      </div>
    );
  }
};
