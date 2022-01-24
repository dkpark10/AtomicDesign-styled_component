import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/button';
import Content from '../atoms/content';

const StyleContactWrapper = styled.div`
  display:flex;
  height:100%;
  align-items:center;
  justify-content: space-between;
`;

export default function Contact() {

  return (
    <>
      <StyleContactWrapper>
        {[['Following', '28%'], ['Message', '28%'], ['Contact', '28%'], ['>', '10%']].map((ele, idx) => {

          const [content, width] = ele;
          return(
            <Button
              key={idx}
              width={width}
              height={'60%'}
              backgroundColor={'white'}
              border={'0.5px solid #999'}
              radius={'3px'}
            >
              <Content
                textSize={'0.75rem'}
                bold={true}
              >
                {content}
              </Content>
            </Button>
          )
        })}
      </StyleContactWrapper>
    </>
  )
}