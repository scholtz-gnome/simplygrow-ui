import React from 'react';
import { ActionButton, Code, FlexContainer, GridContainer, Heading, LinkButton, Paragraph } from './components';
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
          minHeight: '100svh',
          display: 'flex',
          gap: '12px',
          flexDirection: 'column',
        }}
      >
        <GridContainer gap={'md'}>
          <Container>
            <Heading>Action Buttons</Heading>

            <FlexContainer flexDirection={'column'} gap={'md'}>
              <ActionButton>Min</ActionButton>
              <ActionButton>Fit to Text Action Button</ActionButton>
              <ActionButton fullWidth>Full Width Action Button</ActionButton>
              <ActionButton disabled>Disabled Action Button</ActionButton>
              <ActionButton variant={'secondary'}>Secondary Button</ActionButton>
              <ActionButton variant={'secondary'} disabled>
                Secondary Button Disabled
              </ActionButton>
            </FlexContainer>
          </Container>

          <Container>
            <Heading>Link Buttons</Heading>

            <FlexContainer flexDirection={'column'} gap={'md'}>
              <LinkButton>Min Width</LinkButton>
              <LinkButton>Fit to Content Width</LinkButton>
              <LinkButton buttonWidth={'full-width'}>Full Width</LinkButton>
              <LinkButton disabled>Disabled Link Button</LinkButton>
              <LinkButton variant={'secondary'}>Secondary Button</LinkButton>
              <LinkButton variant={'secondary'} disabled>
                Secondary Button Disabled
              </LinkButton>
            </FlexContainer>
          </Container>
        </GridContainer>

        <Container>
          <Heading>Paragraphs</Heading>

          <GridContainer columns={3}>
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

            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit ea minima similique. Suscipit
              laudantium aut rerum repellat officiis omnis culpa quae quas placeat. Culpa magni magnam eaque
              perspiciatis deserunt.
            </Paragraph>
          </GridContainer>
        </Container>

        <Container>
          <Heading>FlexContainer</Heading>

          <Paragraph>With fixed-width children</Paragraph>

          <Code>{'<FlexContainer justify={"space-between"} wrap={false}></FlexContainer>'}</Code>

          <FlexContainer justify={'space-between'}>
            <div
              style={{
                content: '',
                height: '350px',
                width: '265px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              1
            </div>
            <div
              style={{
                content: '',
                height: '350px',
                width: '265px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              2
            </div>
            <div
              style={{
                content: '',
                height: '350px',
                width: '265px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              3
            </div>
            <div
              style={{
                content: '',
                height: '350px',
                width: '265px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              4
            </div>
          </FlexContainer>
        </Container>

        <Container>
          <Heading>FlexContainer</Heading>

          <Paragraph>With fixed-width children</Paragraph>

          <Code>{'<FlexContainer justify={"space-between"} wrap={true}></FlexContainer>'}</Code>

          <FlexContainer justify={'space-between'} wrap={true}>
            <div
              style={{
                content: '',
                height: '350px',
                width: '265px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              1
            </div>
            <div
              style={{
                content: '',
                height: '350px',
                width: '265px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              2
            </div>
            <div
              style={{
                content: '',
                height: '350px',
                width: '265px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              3
            </div>
            <div
              style={{
                content: '',
                height: '350px',
                width: '265px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              4
            </div>
          </FlexContainer>
        </Container>

        <Container>
          <Heading>GridContainer</Heading>

          <Paragraph>With fixed-width children</Paragraph>

          <Code>{'<GridContainer columns={3}>{children}</GridContainer>'}</Code>

          <GridContainer columns={3}>
            <div
              style={{
                content: '',
                width: '260px',
                height: '350px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              1
            </div>
            <div
              style={{
                content: '',
                width: '260px',
                height: '350px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              2
            </div>
            <div
              style={{
                content: '',
                width: '260px',
                height: '350px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              3
            </div>
            <div
              style={{
                content: '',
                width: '260px',
                height: '350px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              4
            </div>
          </GridContainer>
        </Container>

        <Container>
          <Heading>GridContainer</Heading>

          <Paragraph>Width not specified</Paragraph>

          <Code>{'<GridContainer columns={3}>{children}</GridContainer>'}</Code>

          <GridContainer columns={3}>
            <div
              style={{
                content: '',
                height: '350px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              1
            </div>
            <div
              style={{
                content: '',
                height: '350px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              2
            </div>
            <div
              style={{
                content: '',
                height: '350px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              3
            </div>
            <div
              style={{
                content: '',
                height: '350px',
                backgroundColor: '#CCC',
                borderRadius: '6px',
                border: '1px solid orange',
              }}
            >
              4
            </div>
          </GridContainer>
        </Container>
      </div>
    </UIProvider>
  );
}

export default App;
