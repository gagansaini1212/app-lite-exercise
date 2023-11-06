import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Container = styled.div`
  border-bottom: 0.5px solid #e4eaf0;
  padding-bottom: 20px;
`;

const Image = styled.figure`
  img {
    width: 88%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const SlickSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {data?.map((item) => {
          console.log(item);

          return (
            <div key={item.show.id}>
              <Image className="image is-4x5">
                <img src={item.show.image.medium} alt={item.show.name} />
              </Image>
              <h1 className="has-text-weight-bold py-3">{item.show.name}</h1>
              {item?.show?.rating?.average && (
                <p className="pb-3 is-size-7">
                  {item.show.rating.average} / 10
                </p>
              )}
              <div className="is-flex">
                {item?.show?.genres?.map((genre, index) => {
                  return (
                    <p
                      className="is-size-7 has-text-weight-bold pr-1"
                      key={index}
                    >
                      {genre}{" "}
                      {index + 1 === item?.show?.genres.length ? "" : ","}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default SlickSlider;
