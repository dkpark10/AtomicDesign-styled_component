import React from 'react';
import styled from 'styled-components';

interface ICircleImageProps {
  width: string;
  height: string;
  src: string;
}

const CircleImageWrapper = styled.div<Partial<ICircleImageProps>>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display:inline-block;
  border-radius: 50%;
  overflow: hidden;

  img {
    width:100%;
    height:100%;
    object-fit: cover;
  }
`;

export default function CircleImage({
  width,
  height,
  src
}: ICircleImageProps) {

  return (
    <>
      <CircleImageWrapper
        width={width}
        height={height}
      >
        <img src={src} />
      </CircleImageWrapper>
    </>
  )
}