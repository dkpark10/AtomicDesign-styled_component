import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/button';
import Content from '../atoms/content';
import CircleImage from '../atoms/circle_image';

const StyleStoryList = styled.div`
  display:flex;
  height:100%;
  align-items:center;
`;

const StyleStoryContent = styled.span`
  display:inline-block;
  width:20%;
  text-align:center;
`;

export default function StoryList() {

  return (
    <>
      <StyleStoryList>
        {['userid_1', 'userid_2', 'userid_3', 'userid_4', 'userid_5'].map((ele, idx) => {
          return (
            <StyleStoryContent
              key={idx}
            >
              <CircleImage
                width={'50px'}
                height={'50px'}
                src={'https://cdn3.vectorstock.com/i/1000x1000/48/37/web-developer-design-vector-5884837.jpg'}
              />
              <Content
                textSize={'0.75rem'}
                bold={true}
              >
                {ele}
              </Content>
            </StyleStoryContent>
          )
        })}
      </StyleStoryList>
    </>
  )
}