import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.p`
  color: #93918f;
  margin-top: -2px;
  margin-bottom: 45px;
`;

const Subreddit = styled.p`
  margin-top: 45px;
`;

const Img = styled.img`
  margin-top: 20px;
`;

function Hero() {
  return (
    <Section>
      <h1>No reactions to your reddit posts?</h1>
      <Subtitle>
        Great timimg, great results! Find the best time to post on your
        subreddit.
      </Subtitle>
      <Link to="/search/javascript">
        <Button text="Show me the best time" padding="12px" />
      </Link>
      <Subreddit>r/javascript</Subreddit>
      <Link to="/search/javascript">
        <Img src="/table.svg" alt="Table" />
      </Link>
    </Section>
  );
}

export default Hero;
