import React from 'react';
import Content from '../atoms/content';
import Button from '../atoms/button';
import styled from 'styled-components';

const HeaderContentWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  height:100%;
`;

export default function Header() {
  return (
    <>
      <HeaderContentWrapper>
        <Button
          width={'none'}
          height={'none'}
          backgroundColor={'white'}
        >
          <Content bold={true}>
            {'<'}
          </Content>
        </Button>
        <Content bold={true}>
          {'wakanda_developer'}
        </Content>
        <Button
          width={'none'}
          height={'none'}
          backgroundColor={'white'}
        >
          <Content bold={true}>
            {'...'}
          </Content>
        </Button>
      </HeaderContentWrapper>
    </>
  )
}