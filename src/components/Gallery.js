import React from "react";
import styled from "styled-components";

//component
import HeroImage from "./HeroImage";

//data
import { heroList } from "../data";

const StyledGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function Gallery() {
  return (
    <StyledGallery>
      {heroList.map((hero) => (
        <HeroImage img={hero.pic} name={hero.name} key={hero.id} />
      ))}
    </StyledGallery>
  );
}

export default Gallery;
