import React from 'react';
import { TiBatteryFull, TiWiFi } from "react-icons/ti";
import { AiFillSignal } from "react-icons/ai";
import styled from 'styled-components';
import Content from '../atoms/content';

const PhoneInfoWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  height:100%;
`;

export default function PhoneInfo() {

  return (
    <>
      <PhoneInfoWrapper>
        <Content
          bold={true}
          textSize={'0.8rem'}>
          {'12:34'}
        </Content>
        <PhoneInfoWrapper>
          <Content
            textSize={'0.7rem'}
            margin={'0px 1px'}
          >
            <AiFillSignal />
          </Content>
          <Content
            textSize={'0.9rem'}
            margin={'0px 1px'}
          >
            <TiWiFi />
          </Content>
          <Content
            textSize={'0.9rem'}
            margin={'0px 1px'}
          >
            <TiBatteryFull />
          </Content>
        </PhoneInfoWrapper>
      </PhoneInfoWrapper>
    </>
  )
}