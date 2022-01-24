import React from 'react';
import styled from 'styled-components';
import Header from '../molecules/header';
import PhoneInfo from '../molecules/phone_info';
import UserInfo from '../organisms/user_info';
import Contact from '../organisms/contact';
import StoryList from '../organisms/storylist';
import FeedShowType from '../molecules/feed_show_type';
import Feed from '../organisms/feed';

const PhoneWrapper = styled.div`
  position: absolute; 
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  border:6px solid black;
  border-radius:15px;
  width:375px;
`;

interface IUserPageWrapper {
  height: string;
  padding?: string;
  border?: string;
}

const UserPageWrapper = styled.div<IUserPageWrapper>`

  .battery-info-wrapper, 
  .header-wrapper, 
  .user-info-wrapper,
  .user-contact-wrapper,
  .story-wrapper,
  .feed-showing-type-wrapper,
  .feed-wrapper{
    height: ${({ height }) => height};
    padding: ${({ padding = '0px 17px' }) => padding};
    border-top: ${({ border = 'none' }) => border};
    border-bottom: ${({ border = 'none' }) => border};
  }
`;

export default function UserPage() {

  return (
    <>
      <PhoneWrapper>
        <UserPageWrapper
          height={'40px'}
        >
          <div className='battery-info-wrapper'>
            <PhoneInfo />
          </div>
        </UserPageWrapper>
        <UserPageWrapper
          height={'40px'}
        >
          <div className='header-wrapper'>
            <Header />
          </div>
        </UserPageWrapper>
        <UserPageWrapper
          height={'176px'}
        >
          <div className='user-info-wrapper'>
            <UserInfo />
          </div>
        </UserPageWrapper>
        <UserPageWrapper
          height={'40px'}
        >
          <div className='user-contact-wrapper'>
            <Contact />
          </div>
        </UserPageWrapper>
        <UserPageWrapper
          height={'96px'}
        >
          <div className='story-wrapper'>
            <StoryList />
          </div>
        </UserPageWrapper>
        <UserPageWrapper
          height={'44px'}
          padding={'0 0px'}
          border={'0.5px solid #999'}
        >
          <div className='feed-showing-type-wrapper'>
            <FeedShowType />
          </div>
        </UserPageWrapper>
        <UserPageWrapper
          height={'100%'}
          padding={'0 0px'}
        >
          <div className='feed-wrapper'>
            <Feed />
          </div>
        </UserPageWrapper>
      </PhoneWrapper>
    </>
  )
}