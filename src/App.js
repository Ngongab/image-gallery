import React, { useState, useEffect } from "react";
import { Heading } from "./components/Heading";
import { Loader } from "./components/Loader";
import { UnsplashImage } from "./components/UnsplashImage";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { SRLWrapper } from "simple-react-lightbox";
import axios from "axios";

//style

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: san-serif;
}
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    var url = `${apiRoot}/photos/random?client_id=${accessKey}&count=10`;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .then((res) => setImages([...images, ...res.data]));
    console.log(url);
  };

  return (
    <div className="App">
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <SRLWrapper>
          <WrapperImage>
            {images.map((image) => (
              <a href={image.urls.regular}>
                <UnsplashImage url={image.urls.thumb} key={image.id} />
              </a>
            ))}
          </WrapperImage>
        </SRLWrapper>
      </InfiniteScroll>
    </div>
  );
}

export default App;
