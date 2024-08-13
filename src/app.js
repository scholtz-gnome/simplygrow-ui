import React from 'react';
import { ActionButton, FlexContainer, GridContainer, Heading, LinkButton, Paragraph, Select } from './components';
import Container from './container';
import './index.css';
import { UIProvider } from './providers';

function App() {
  return (
    <UIProvider appTheme={'peopleflow'}>
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
          <FlexContainer flexDirection={'column'} gap={'md'}>
            <Heading order={2}>Action Buttons</Heading>
            <ActionButton>Min</ActionButton>
            <ActionButton>Fit to Text Action Button</ActionButton>
            <ActionButton fullWidth>Full Width Action Button</ActionButton>

            <Heading order={2}>Link Buttons</Heading>
            <LinkButton>Min Width</LinkButton>
            <LinkButton>Fit to Content Width</LinkButton>
            <LinkButton buttonWidth={'full-width'}>Full Width</LinkButton>
          </FlexContainer>

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
      </div>
    </UIProvider>
  );
}

export default App;
