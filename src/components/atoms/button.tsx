import React from 'react';
import styled from 'styled-components';

interface IButton {
  width: string;
  height: string;
  children: JSX.Element | string | number;
  backgroundColor?: string;
  border?:string;
  radius?:string;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>
};

const StyleButton = styled.button<IButton>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({border}) => border};
  border-radius: ${({ radius }) => radius};
  color: black;
  cursor:pointer;
`;

export default function Button({
  width,
  height,
  backgroundColor = 'white',
  onMouseDown,
  border='none',
  radius='0px',
  children }: IButton) {

  return (
    <>
      <StyleButton
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        onMouseDown={onMouseDown}
        border={border}
        radius={radius}
      >
        {children}
      </StyleButton>
    </>
  )
}