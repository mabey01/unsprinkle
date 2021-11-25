import React from "react";
import styled from "styled-components/macro";
import { getImageSource } from "./getImageSource";

const Hero = () => {
  return (
    <Wrapper>
      <picture>
        <source
          type="image/avif"
          srcSet={`
      ${getImageSource("hero-img", 1, "avif")} 1x,
      ${getImageSource("hero-img", 2, "avif")} 2x,
      ${getImageSource("hero-img", 3, "avif")} 3x
    `}
        />
        <source
          type="image/webp"
          srcSet={`
          ${getImageSource("hero-img", 1)} 1x,
          ${getImageSource("hero-img", 2)} 2x,
          ${getImageSource("hero-img", 3)} 3x
          `}
        />
        <HeroImage src={getImageSource("hero-img")} alt="Unsprinkle cat" />
      </picture>
      <Swoop src="/swoop.svg" alt="Decorative swoop" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
