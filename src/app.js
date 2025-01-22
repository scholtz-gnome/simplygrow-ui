import React, { useState } from 'react';
import {
  ActionButton,
  Code,
  FileInputButton,
  FlexContainer,
  GridContainer,
  Heading,
  Input,
  LinkButton,
  Modal,
  Paragraph,
  Select,
  Table,
  Textarea,
} from './components';
import Container from './container';
import './index.css';
import { UIProvider } from './providers';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textarea, setTextarea] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [_file, setFile] = useState(undefined);

  return (
    <UIProvider appTheme={'skillbook'}>
      <div
        style={{
          backgroundColor: '#f1f5f9',
          padding: '24px 24px 236px 24px',
          minHeight: '100svh',
          display: 'flex',
          gap: '12px',
          flexDirection: 'column',
        }}
      >
        <Container>
          <Heading>Table</Heading>
          <Container>
            <Code>{'<Table .../>'}</Code>
          </Container>

          <Table
            title="Table Title"
            columns={[
              { id: 'col1', label: 'Column 1' },
              { id: 'col2', label: 'Column 2' },
              { id: 'col3', label: 'Column 3' },
              { id: 'col4', label: 'Column 4' },
              { id: 'col5', label: 'Column 5' },
              { id: 'col6', label: 'Column 6' },
              { id: 'col7', label: 'Column 7' },
              { id: 'col8', label: 'Column 8' },
              { id: 'col9', label: 'Column 9' },
              { id: 'col10', label: 'Column 10' },
              { id: 'col11', label: 'Column 11' },
              { id: 'col12', label: 'Column 12' },
            ]}
            data={[
              {
                id: 'row1',
                col1: 'Row 1 Column 1',
                col2: 'Row 1 Column 2',
                col3: 'Row 1 Column 3',
                col4: 'Row 1 Column 4',
                col5: 'Row 1 Column 5',
                col6: 'Row 1 Column 6',
                col7: 'Row 1 Column 7',
                col8: 'Row 1 Column 8',
                col9: 'Row 1 Column 9',
                col10: 'Row 1 Column 10',
                col11: 'Row 1 Column 11',
                col12: 'Row 1 Column 12',
              },
              {
                id: 'row2',
                col1: 'Row 2 Column 1',
                col2: 'Row 2 Column 2',
                col3: 'Row 2 Column 3',
                col4: 'Row 2 Column 4',
                col5: 'Row 2 Column 5',
                col6: 'Row 2 Column 6',
                col7: 'Row 2 Column 7',
                col8: 'Row 2 Column 8',
                col9: 'Row 2 Column 9',
                col10: 'Row 2 Column 10',
                col11: 'Row 2 Column 11',
                col12: 'Row 2 Column 12',
              },
              {
                id: 'row3',
                col1: 'Row 3 Column 1',
                col2: 'Row 3 Column 2',
                col3: 'Row 3 Column 3',
                col4: 'Row 3 Column 4',
                col5: 'Row 3 Column 5',
                col6: 'Row 3 Column 6',
                col7: 'Row 3 Column 7',
                col8: 'Row 3 Column 8',
                col9: 'Row 3 Column 9',
                col10: 'Row 3 Column 10',
                col11: 'Row 3 Column 11',
                col12: 'Row 3 Column 12',
              },
              {
                id: 'row4',
                col1: 'Row 4 Column 1',
                col2: 'Row 4 Column 2',
                col3: 'Row 4 Column 3',
                col4: 'Row 4 Column 4',
                col5: 'Row 4 Column 5',
                col6: 'Row 4 Column 6',
                col7: 'Row 4 Column 7',
                col8: 'Row 4 Column 8',
                col9: 'Row 4 Column 9',
                col10: 'Row 4 Column 10',
                col11: 'Row 4 Column 11',
                col12: 'Row 4 Column 12',
              },
              {
                id: 'row5',
                col1: 'Row 5 Column 1',
                col2: 'Row 5 Column 2',
                col3: 'Row 5 Column 3',
                col4: 'Row 5 Column 4',
                col5: 'Row 5 Column 5',
                col6: 'Row 5 Column 6',
                col7: 'Row 5 Column 7',
                col8: 'Row 5 Column 8',
                col9: 'Row 5 Column 9',
                col10: 'Row 5 Column 10',
                col11: 'Row 5 Column 11',
                col12: 'Row 5 Column 12',
              },
              {
                id: 'row6',
                col1: 'Row 6 Column 1',
                col2: 'Row 6 Column 2',
                col3: 'Row 6 Column 3',
                col4: 'Row 6 Column 4',
                col5: 'Row 6 Column 5',
                col6: 'Row 6 Column 6',
                col7: 'Row 6 Column 7',
                col8: 'Row 6 Column 8',
                col9: 'Row 6 Column 9',
                col10: 'Row 6 Column 10',
                col11: 'Row 6 Column 11',
                col12: 'Row 6 Column 12',
              },
            ]}
            footerValues={[
              { id: 'footer1', label: 'Footer 1' },
              { id: 'footer2', label: 'Footer 2' },
              { id: 'footer3', label: 'Footer 3' },
              { id: 'footer4', label: 'Footer 4' },
              { id: 'footer5', label: 'Footer 5' },
              { id: 'footer6', label: 'Footer 6' },
              { id: 'footer7', label: 'Footer 7' },
              { id: 'footer8', label: 'Footer 8' },
              { id: 'footer9', label: 'Footer 9' },
              { id: 'footer10', label: 'Footer 10' },
              { id: 'footer11', label: 'Footer 11' },
              { id: 'footer12', label: 'Footer 12' },
            ]}
            rowSelectionEnabled={true}
            rowsPerPageSelectionEnabled={true}
            rowsPerPageOptions={[5, 10, 15, 25, 40]}
            pageSize={4}
          />
        </Container>

        <GridContainer gap={'md'}>
          <Container>
            <Heading>Action Buttons</Heading>

            <FlexContainer flexDirection={'column'} gap={'md'}>
              <Code>{'<ActionButton onClick={doSomething}>Min</ActionButton>'}</Code>

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
              <Code>{"<LinkButton href={'https://example.com'}>Min Width</LinkButton>"}</Code>

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

          <Container>
            <Heading>File input button</Heading>

            <FlexContainer flexDirection={'column'} gap={'md'}>
              <Code>{"<FileInputButton id={'file-upload'} setFile={setFile}>Upload</FileInputButton>"}</Code>

              <FileInputButton id={'file-upload'} setFile={setFile}>
                Upload
              </FileInputButton>
              <FileInputButton id={'file-upload'} setFile={setFile}>
                Upload file button fit to text
              </FileInputButton>
              <FileInputButton id={'file-upload2'} setFile={setFile} disabled>
                Upload file disabled
              </FileInputButton>
              <FileInputButton id={'file-upload3'} setFile={setFile} fullWidth>
                Upload file full width
              </FileInputButton>

              <FileInputButton id={'file-upload4'} setFile={setFile} variant={'secondary'}>
                Upload file secondary
              </FileInputButton>
              <FileInputButton id={'file-upload5'} setFile={setFile} disabled variant={'secondary'}>
                Upload file disabled
              </FileInputButton>
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
          <Heading>FlexContainer (with heading)</Heading>

          <Code>
            {'<FlexContainer justify={"space-between" heading={"Custom heading here"}} wrap={false}></FlexContainer>'}
          </Code>

          <FlexContainer justify={'space-between'} heading={'Custom heading here'}>
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
          </FlexContainer>
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

        <Container>
          <Heading>Form fields</Heading>

          <Code>
            {
              "<Input required label={'Email'} id={'email'} type={'email'} placeholder={'Enter email'} value={email} setValue={setEmail} />"
            }
          </Code>

          <GridContainer>
            <FlexContainer flexDirection={'column'} gap={'md'}>
              <Paragraph>Required email input</Paragraph>

              <Input
                required
                label={'Email'}
                id={'email'}
                type={'email'}
                placeholder={'Enter email'}
                value={email}
                setValue={setEmail}
              />
            </FlexContainer>

            <FlexContainer flexDirection={'column'} gap={'md'}>
              <Paragraph>Required password input</Paragraph>

              <Input
                required
                label={'Password'}
                id={'password'}
                type={'password'}
                placeholder={'Password'}
                value={password}
                setValue={setPassword}
              />
            </FlexContainer>

            <FlexContainer flexDirection={'column'} gap={'md'}>
              <Paragraph>Textarea</Paragraph>

              <Textarea
                id={'text-area'}
                label={'Textarea'}
                value={textarea}
                setValue={setTextarea}
                placeholder={'Enter text...'}
                required
              />
            </FlexContainer>

            <FlexContainer flexDirection={'column'} gap={'md'}>
              <Paragraph>Select</Paragraph>

              <Select
                id={'select'}
                label={'Select'}
                value={selectValue}
                onSelect={setSelectValue}
                options={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']}
              />
            </FlexContainer>
          </GridContainer>
        </Container>

        <Modal open={false}>
          <Paragraph>Hello</Paragraph>
        </Modal>
      </div>
    </UIProvider>
  );
}

export default App;
