import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 20%;
  height: 400px;
  min-width: 240px;
`;

const CardWrapper = styled.div`
  position: relative;
  margin: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    img {
      transform: scale(1.05);
      transition: 0.3s ease;
    }
  }
`;

const CardContent = styled.div`
  padding: 10px;
  position: relative;
  height: 47px;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0px 0px;
  display: flex;
  height: 100%;
  align-items: center;
  line-height: 16px;
`;
const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  font-size: 0px;
`;
const Image = styled.img`
  width: 100%;
  height: 309px;
  transition: 0.3s ease;
`;

const Rating = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -3rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  padding: 1.5rem;
  background-color: goldenrod;
  color: #000;
  font-weight: 700;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;

const MovieCard = ({ movie: { image, name, rating, premiered } }) => {
  return (
    <Card>
      <CardWrapper>
        <ImageWrapper>
          <Image src={image?.medium ? image.medium : 'https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg'} />
        </ImageWrapper>        
        <CardContent>
          <CardTitle>
            {name} ({premiered?.split("-")[0]})
          </CardTitle>
          <Rating>{rating.average}</Rating>
        </CardContent>
      </CardWrapper>
    </Card>
  );
};

export default MovieCard;
