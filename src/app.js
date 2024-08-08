import React from 'react';
import { ActionButton, FlexContainer, GridContainer, Heading, LinkButton, Paragraph, Select } from './components';
import Container from './container';
import { UIProvider } from './providers';

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
      <UIProvider appTheme={'peopleflow'}>
        <Container>
          <FlexContainer justify={'space-between'}>
            <Heading order={1}>H1</Heading>
            <Heading order={2}>H2</Heading>
            <Heading order={3}>H3</Heading>
          </FlexContainer>

          <GridContainer columns={3}>
            <ActionButton>Action Button 1</ActionButton>
            <ActionButton>Action Button 2</ActionButton>
          </GridContainer>

          <Heading>Paragraphs</Heading>

          <GridContainer>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit ea minima similique. Suscipit
              laudantium aut rerum repellat officiis omnis culpa quae quas placeat. Culpa magni magnam eaque
              perspiciatis deserunt.
            </Paragraph>

            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit ea minima similique. Suscipit
              laudantium aut rerum repellat officiis omnis culpa quae quas placeat. Culpa magni magnam eaque
              perspiciatis deserunt.
            </Paragraph>

            <Select id={'select-me'} options={['one', 'two', 'three']} onSelect={() => console.log('hello')} />
          </GridContainer>
        </Container>

        <Container>
          <LinkButton href={'https://google.com'}>Link button</LinkButton>
        </Container>
      </UIProvider>
    </div>
  );
}

export default App;
