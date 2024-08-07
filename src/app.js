import 'app.css';
import React from 'react';
import '../dist/index.css';
import { ActionButton, FlexContainer, GridContainer, Heading, LinkButton } from './components';
import Container from './container';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#f1f5f9',
        padding: '12px 24px',
        height: '100svh',
        display: 'flex',
        gap: '12px',
        flexDirection: 'column',
      }}
    >
      <Container>
        <FlexContainer justify={'space-between'}>
          <Heading order={1}>H1</Heading>
          <Heading order={2}>H2</Heading>
          <Heading order={3}>H3</Heading>
        </FlexContainer>

        <GridContainer>
          <ActionButton>One</ActionButton>
          <ActionButton>Two</ActionButton>
        </GridContainer>
      </Container>

      <Container>
        <LinkButton href={'https://worklight.co.za/login'}>Log in</LinkButton>
      </Container>
    </div>
  );
}

export default App;
