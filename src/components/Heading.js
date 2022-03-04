import React from "react";
import styled from "styled-components";

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'oswald', san-serif;
  margin-bottom: 1em;
`;

export const Heading = () => {
  return (
    <Header>
      <H1>Unsplash Images</H1>
      <p>A grid of curated photos from Unsplash</p>
    </Header>
  );
};

export default Heading;
