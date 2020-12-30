import React from 'react';
import { H1, ZenWrapper } from './styled';
import ZenOctocat from './ZenOctocat';

const Home = () => (
  <>
    <H1 className="App-header">
      Get super interesting data from GitHub API
    </H1>
    <ZenWrapper>
      <ZenOctocat />
    </ZenWrapper>
  </>
);

export default Home;
