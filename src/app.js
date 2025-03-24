import React, { useState } from 'react';

import {
  ActionButton,
  ActionsToolbar,
  Code,
  FileInputButton,
  FlexContainer,
  GridContainer,
  Heading,
  Input,
  LinkButton,
  Modal,
  PageNavigation,
  Paragraph,
  SearchFilter,
  Select,
  TabbedView,
  Table,
  Textarea,
} from './components';
import {
  peopleflowTableData,
  peopleflowColumnConfig,
  convertPfColumnConfigToGridColDef,
} from './components/table/peopleflow';
import { TableToolbar, TableFooter } from './components/table';
import Container from './container';
import { UIProvider } from './providers';
import './index.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textarea, setTextarea] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [_file, setFile] = useState(undefined);
  const [selectedTableRows, setSelectedTableRows] = useState([2]);

  return (
    <UIProvider appTheme={'peopleflow'}>
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
          <Heading>Page Navigation</Heading>
          <Code>{'<PageNavigation logo={...} data={[...]} tail={...} />'}</Code>
          <div style={{ backgroundColor: '#CCC', padding: '24px 0px' }}>
            <PageNavigation
              logo={<div style={{ fontSize: 'bold', padding: '8px', borderRadius: '50%' }}>{`[ LOGO ]`}</div>}
              navOptions={[
                <a href={'#'} style={{ textDecoration: 'none', color: 'inherit' }}>
                  Home
                </a>,
                <a href={'#'} style={{ textDecoration: 'none', color: 'inherit' }}>
                  About
                </a>,
                <a href={'#'} style={{ textDecoration: 'none', color: 'inherit' }}>
                  Services
                </a>,
                <a href={'#'} style={{ textDecoration: 'none', color: 'inherit' }}>
                  Contact
                </a>,
              ]}
              tail={
                <div style={{ display: 'flex', gap: 18 }}>
                  <div style={{ fontSize: 14 }}>
                    John Doe
                    <br />
                    Acme Inc.
                  </div>
                  <div style={{ backgroundColor: 'lightsalmon', padding: '8px', borderRadius: '50%' }}>JD</div>
                </div>
              }
            />
          </div>
        </Container>

        <Container>
          <Heading>Tabbed View</Heading>
          <Code>{'<TabbedView tabs={[...]} />'}</Code>
          <TabbedView
            tabs={[
              { label: 'Tab 1', content: <div>Tab 1 content</div> },
              { label: 'Tab 2', content: <div>Tab 2 content</div> },
              { label: 'Tab 3', content: <div>Tab 3 content</div> },
            ]}
          />
        </Container>

        <Container>
          <Heading>Search</Heading>
          <Code>{'<SearchFilter id={abc} data={[]} setData={() => null} />'}</Code>
          <FlexContainer justify={'space-between'}>
            <div style={{ backgroundColor: '#CCC', padding: '24px' }}>
              <SearchFilter id={'search-filter'} data={[]} setData={() => null} />
            </div>
            <ActionsToolbar
              buttons={[
                { label: 'Add', variant: 'secondary', onClick: () => console.log('Add') },
                { label: 'Delete', variant: 'secondary', onClick: () => console.log('Delete') },
              ]}
            />
          </FlexContainer>
        </Container>

        <Container>
          <Heading>Table</Heading>
          <Code>
            {
              '<Table rows={...} columns={...} selectedRowIds={[...]} onRowClick={(params) => ...} onRowSelection={(selectedRowIds) => ...} />'
            }
          </Code>
          <Table
            rows={peopleflowTableData}
            columns={convertPfColumnConfigToGridColDef(peopleflowColumnConfig)}
            selectedRowIds={selectedTableRows}
            // selectedRowIds={['120494', '270191']}
            rowSelection={true}
            onRowClick={() => {
              console.log('CLICK');
            }}
            onRowSelection={setSelectedTableRows}
            editableColumns={['name', 'employeeNumber']}
            toolbar={TableToolbar}
            footer={TableFooter}
            // customStyleClasses={{
            //   '.MuiDataGrid-columnHeader': {
            //     backgroundColor: 'pink',
            //   },
            // }}
            // noHeader={true}
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
