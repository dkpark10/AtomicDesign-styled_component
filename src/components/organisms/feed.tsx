import React from 'react';
import styled from 'styled-components';

const FeedWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const IMG_SRC = 'https://cdn3.vectorstock.com/i/1000x1000/48/37/web-developer-design-vector-5884837.jpg';

export default function Feed() {
  return (
    <>
      <FeedWrapper>
        <img style={{ width: '100%', height: '100%' }} src={IMG_SRC} />
        <img style={{ width: '100%', height: '100%' }} src={IMG_SRC} />
        <img style={{ width: '100%', height: '100%' }} src={IMG_SRC} />
        <img style={{ width: '100%', height: '100%' }} src={IMG_SRC} />
        <img style={{ width: '100%', height: '100%' }} src={IMG_SRC} />
        <img style={{ width: '100%', height: '100%' }} src={IMG_SRC} />
        <img style={{ width: '100%', height: '100%' }} src={IMG_SRC} />
        <img style={{ width: '100%', height: '100%' }} src={IMG_SRC} />
        <img style={{ width: '100%', height: '100%' }} src={IMG_SRC} />
      </FeedWrapper>
    </>
  )
}