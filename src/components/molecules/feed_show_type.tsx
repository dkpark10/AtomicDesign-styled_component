import { BsFillGrid3X3GapFill, BsFillFilePersonFill } from "react-icons/bs";
import styled from 'styled-components';
import Button from '../atoms/button';

const FeedShowTypeWrapper = styled.div`
  display:flex;
  justify-content: space-around;
  align-items:center;
  height:100%;
`;

export default function FeedShowType() {
  return (
    <>
      <FeedShowTypeWrapper>
        <Button
          width={'100%'}
          height={'100%'}
        >
          <BsFillGrid3X3GapFill
            size="1.4rem"
          />
        </Button>
        <Button
          width={'100%'}
          height={'100%'}
        >
          <BsFillFilePersonFill
            size="1.4rem"
          />
        </Button>
      </FeedShowTypeWrapper>
    </>
  )
}