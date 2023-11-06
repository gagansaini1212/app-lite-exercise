import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { LeftKeyboardArrow, RightKeyboardArrow } from "./icons";

const Container = styled.div`
  border-bottom: 0.5px solid #e4eaf0;
  padding-bottom: 20px;
`;

const ArrowsContainer = styled.div`
  position: absolute;
  bottom: 70%;
  width: 100%;
  left: -15px;
  @media only screen and (max-width: 768px) {
    position: relative;
    left: 0px;
    top: 15px;
    .slider-arrow {
      justify-content: center !important;
      gap: 10;
    }
    button {
      margin: 0 10px !important;
    }
  }

  button {
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  :hover {
    transition: 0.5s;
  }

  svg:not(:root).svg-inline--fa {
  }
  .slider-arrow {
    justify-content: space-between;
    display: flex;
  }
`;

const Image = styled.figure`
  img {
    width: 90%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Genre = styled.p`
  color: #9ca3af;
`;

const SlickSlider = ({ data }) => {
  const customSlider = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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

  const renderArrows = () => {
    return (
      <div className="slider-arrow">
        <button
          type="button"
          className="arrow-btn prev"
          onClick={() => customSlider.current.slickPrev()}
        >
          <LeftKeyboardArrow className="icon-class" />
        </button>
        <button
          type="button"
          className="arrow-btn next"
          onClick={() => customSlider.current.slickNext()}
        >
          <RightKeyboardArrow className="icon-class" />
        </button>
      </div>
    );
  };
  return (
    <Container>
      <Slider {...settings} ref={(slider) => (customSlider.current = slider)}>
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
                    <Genre
                      className="is-size-7 has-text-weight-bold pr-1"
                      key={index}
                    >
                      {genre}{" "}
                      {index + 1 === item?.show?.genres.length ? "" : ","}
                    </Genre>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Slider>
      <ArrowsContainer>{renderArrows()}</ArrowsContainer>
    </Container>
  );
};

export default SlickSlider;
