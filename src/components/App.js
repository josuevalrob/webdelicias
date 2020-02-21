import React from 'react';
import {Title, Wrapper} from './styles/General'

function App() {
  console.log(process.env)
  return (
    <Wrapper>
      <Title>
        Hello World!
      </Title>
    </Wrapper>
  );
}

export default App;
