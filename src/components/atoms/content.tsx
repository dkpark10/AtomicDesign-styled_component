import React from 'react';
import styled from 'styled-components';

interface IText {
  textSize?: string;
  textColor?: string;
  bold?: boolean;
  margin?: string;
  display?: string;
  children: JSX.Element | string | number;
};

const StyleContent = styled.span<IText>`
  color: ${({ textColor }) => textColor};
  font-size: ${({ textSize }) => textSize};
  margin: ${({margin}) => margin};
  font-weight: ${({ bold }) => {
    return bold === true ? 'bold' : 'none';
  }};
  display: ${({display}) => display};
`;

export default function Content({
  textSize = '1.0rem',
  textColor = 'black',
  bold = false,
  margin = '0px 0px',
  display = 'inline',
  children }: IText) {

  return (
    <>
      <StyleContent
        textColor={textColor}
        textSize={textSize}
        bold={bold}
        margin={margin}
        display={display}
      >
        {children}
      </StyleContent>
    </>
  )
}