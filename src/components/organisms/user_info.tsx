import React from 'react';
import styled from 'styled-components';
import Content from '../atoms/content';
import CircleImage from '../atoms/circle_image';

const StyleUserContent = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  display:flex;

  .user_profile_content {
    display:flex;
    width:25%;
    height:100%;
    justify-content:center;
    align-items:center;
  }
`;

export default function UserInfo() {

  return (
    <>
      <StyleUserContent
        height={'60%'}
      >
        <span className='user_profile_content'>
          <CircleImage
            width={'75px'}
            height={'75px'}
            src={'https://cdn3.vectorstock.com/i/1000x1000/48/37/web-developer-design-vector-5884837.jpg'}
          />
        </span>
        <span className='user_profile_content'>
          <div style={{ textAlign: 'center' }}>
            <Content
              bold={true}
              display={'block'}
            >
              {'23'}
            </Content>
            <Content textSize={'0.8rem'}>
              {'Posts'}
            </Content>
          </div>
        </span>
        <span className='user_profile_content'>
        <div style={{ textAlign: 'center' }}>
            <Content
              bold={true}
              display={'block'}
            >
              {'12323'}
            </Content>
            <Content textSize={'0.8rem'}>
              {'Followers'}
            </Content>
          </div>
        </span>
        <span className='user_profile_content'>
        <div style={{ textAlign: 'center' }}>
            <Content
              bold={true}
              display={'block'}
            >
              {'4'}
            </Content>
            <Content textSize={'0.8rem'}>
              {'Following'}
            </Content>
          </div>
        </span>
      </StyleUserContent>
      <StyleUserContent
        height={'40%'}
      >
        <Content
          textSize={'0.85rem'}
        >
          <p>
            HI im wakanda-developer<br />
            아토믹디자인 + 스타일드 컴포넌트로<br />
            <strong>재사용 가능한 컴포넌트를 사용해보자 !!</strong>
          </p>
        </Content>
      </StyleUserContent>
    </>
  )
}