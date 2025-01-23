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
  const [selectedTableRows, setSelectedTableRows] = useState([2]);

  const peopleflowTableData = [
    {
      id: '120494',
      workSite: '-',
      jobType: 'TEAM LEADER',
      departmentName: ['HOOFKANTOOR'],
      name: 'COLIN',
      surname: 'HUGHES',
      idPassport: '12345678',
      dob: '2014/11/25',
      startDate: '',
      terminationDate: '',
      employeeNumber: '6234',
      gender: ['MALE'],
      racialGroup: ['COLOURED'],
      southAfrican: ['NO'],
      isForeignNational: ['NO'],
    },
    {
      id: '190720',
      workSite: '-',
      jobType: 'SECURITY',
      departmentName: ['PLAAS 1'],
      name: 'EDMUND',
      surname: 'HILLARY',
      idPassport: '190722',
      dob: '2019/07/22',
      startDate: '2024/10/01',
      terminationDate: '2025/12/31',
      employeeNumber: '7878',
      gender: 'MALE',
      racialGroup: 'WHITE',
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
    {
      id: '210789',
      workSite: '-',
      jobType: ['GENERAL'],
      departmentName: ['PLAAS 1'],
      name: 'KEELY',
      surname: 'JONES',
      idPassport: '900719',
      dob: '1990/07/19',
      startDate: '2024/12/10',
      terminationDate: '',
      employeeNumber: '5432',
      gender: ['FEMALE'],
      racialGroup: ['WHITE'],
      southAfrican: ['NO'],
      isForeignNational: ['NO'],
    },
    {
      id: '270191',
      workSite: '-',
      jobType: ['GENERAL'],
      departmentName: ['PLAAS 2'],
      name: 'DANI',
      surname: 'ROJAS',
      idPassport: '970112',
      dob: '1997/01/12',
      startDate: '2025/01/08',
      terminationDate: '2025/12/31',
      employeeNumber: '76533',
      gender: ['MALE'],
      racialGroup: ['COLOURED'],
      southAfrican: ['NO'],
      isForeignNational: ['NO'],
    },
    {
      id: '270660',
      workSite: '-',
      jobType: ['TEAM LEADER'],
      departmentName: 'PLAAS 3',
      name: 'MR',
      surname: 'HIGGINS',
      idPassport: '270660',
      dob: '1927/07/30',
      startDate: '',
      terminationDate: '',
      employeeNumber: '7654',
      gender: ['MALE'],
      racialGroup: ['AFRICAN'],
      southAfrican: ['YES'],
      isForeignNational: ['YES'],
    },
    {
      id: '280672',
      workSite: '-',
      jobType: ['SECURITY'],
      departmentName: ['PAKSTOOR'],
      name: 'COACH',
      surname: 'BEARD',
      idPassport: '620674',
      dob: '1962/08/13',
      startDate: '2024/08/14',
      terminationDate: '',
      employeeNumber: '6543',
      gender: ['MALE'],
      racialGroup: ['COLOURED'],
      southAfrican: ['NO'],
      isForeignNational: ['NO'],
    },
    {
      id: '280774',
      workSite: '-',
      jobType: ['TEAM LEADER'],
      departmentName: ['HOOFKANTOOR'],
      name: 'REBECCA',
      surname: 'WELTON',
      idPassport: '950812REB',
      dob: '1995/08/12',
      startDate: '2024/11/25',
      terminationDate: '2026/01/07',
      employeeNumber: '7543',
      gender: ['FEMALE'],
      racialGroup: ['WHITE'],
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
    {
      id: '310392',
      workSite: '-',
      jobType: ['TEAM LEADER'],
      departmentName: ['PLAAS 2'],
      name: 'JAMIE',
      surname: 'TARTT',
      idPassport: '310399',
      dob: '1931/06/07',
      startDate: '2024/10/16',
      terminationDate: '',
      employeeNumber: '6432',
      gender: ['MALE'],
      racialGroup: ['AFRICAN'],
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
    {
      id: '500811',
      workSite: '-',
      jobType: ['TEAM LEADER'],
      departmentName: ['HOOFKANTOOR'],
      name: 'STEVE',
      surname: 'WOZNIAK',
      idPassport: '500811',
      dob: '1950/08/11',
      startDate: '',
      terminationDate: '',
      employeeNumber: '0000',
      gender: ['MALE'],
      racialGroup: ['COLOURED'],
      southAfrican: ['NO'],
      isForeignNational: ['NO'],
    },
    {
      id: '560709',
      workSite: '-',
      jobType: 'GENERAL',
      departmentName: ['PLAAS 1'],
      name: 'TOM',
      surname: 'HANKS',
      idPassport: '56070901TOM',
      dob: '1956/07/09',
      startDate: '',
      terminationDate: '',
      employeeNumber: '5586',
      gender: ['MALE'],
      racialGroup: ['WHITE'],
      southAfrican: ['NO'],
      isForeignNational: ['NO'],
    },
    {
      id: '610828',
      workSite: '-',
      jobType: ['GENERAL'],
      departmentName: ['HOOFKANTOOR'],
      name: 'JENNIFER',
      surname: 'COOLIDGE',
      idPassport: '610828',
      dob: '1961/08/28',
      startDate: '',
      terminationDate: '',
      employeeNumber: '1344',
      gender: ['FEMALE'],
      racialGroup: ['WHITE'],
      southAfrican: ['NO'],
      isForeignNational: ['NO'],
    },
    {
      id: '611210',
      workSite: '-',
      jobType: ['GENERAL'],
      departmentName: ['PLAAS 1'],
      name: 'KUMAIL',
      surname: 'NANJIANI',
      idPassport: '611211KUMAIL',
      dob: '1961/12/11',
      startDate: '',
      terminationDate: '',
      employeeNumber: '7695',
      gender: ['MALE'],
      racialGroup: ['AFRICAN'],
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
    {
      id: '671113',
      workSite: '-',
      jobType: ['TRACTOR DRIVER'],
      departmentName: ['PLAAS 2'],
      name: 'STEVE',
      surname: 'ZAHN',
      idPassport: '671113',
      dob: '1967/11/13',
      startDate: '',
      terminationDate: '',
      employeeNumber: '777',
      gender: ['MALE'],
      racialGroup: ['WHITE'],
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
    {
      id: '680211',
      workSite: '-',
      jobType: ['TEAM LEADER'],
      departmentName: ['HOOFKANTOOR'],
      name: 'DEON',
      surname: 'DAVIDS',
      idPassport: '680211',
      dob: '1968/02/11',
      startDate: '2024/11/11',
      terminationDate: '2025/09/30',
      employeeNumber: '7554',
      gender: ['MALE'],
      racialGroup: ['COLOURED'],
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
    {
      id: '680408',
      workSite: '-',
      jobType: ['CLEANER'],
      departmentName: ['PAKSTOOR'],
      name: 'CHANDLER',
      surname: 'BING',
      idPassport: '680310BING',
      dob: '1968/03/10',
      startDate: '',
      terminationDate: '',
      employeeNumber: '0000',
      gender: ['MALE'],
      racialGroup: ['COLOURED'],
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
    {
      id: '680705',
      workSite: '-',
      jobType: ['SECURITY'],
      departmentName: ['PLAAS 1'],
      name: 'ROSS',
      surname: 'GELLER',
      idPassport: '680705ROSS',
      dob: '1968/07/05',
      startDate: '2024/03/04',
      terminationDate: '',
      employeeNumber: '1233',
      gender: ['MALE'],
      racialGroup: ['AFRICAN'],
      southAfrican: 'NO',
      isForeignNational: ['NO'],
    },
    {
      id: '680916',
      workSite: '-',
      jobType: '-',
      departmentName: ['PLAAS 1'],
      name: 'RACHEL',
      surname: 'GREEN',
      idPassport: '680916',
      dob: '1968/09/16',
      startDate: '',
      terminationDate: '',
      employeeNumber: '67',
      gender: ['FEMALE'],
      racialGroup: ['COLOURED'],
      southAfrican: '-',
      isForeignNational: ['YES'],
    },
    {
      id: '690103',
      workSite: '-',
      jobType: 'GENERAL',
      departmentName: ['PAKSTOOR'],
      name: 'MONICA',
      surname: 'GELLER',
      idPassport: '690103',
      dob: '1969/01/03',
      startDate: '2024/12/31',
      terminationDate: '2025/12/31',
      employeeNumber: '446',
      gender: '-',
      racialGroup: '-',
      southAfrican: '-',
      isForeignNational: '-',
    },
    {
      id: '691204',
      workSite: '-',
      jobType: ['CLEANER'],
      departmentName: ['PLAAS 1'],
      name: 'SCHALK',
      surname: 'BURGER',
      idPassport: '691204',
      dob: '1969/12/04',
      startDate: '2024/10/10',
      terminationDate: '',
      employeeNumber: '655',
      gender: ['MALE'],
      racialGroup: ['WHITE'],
      southAfrican: ['NO'],
      isForeignNational: ['YES'],
    },
    {
      id: '700403',
      workSite: '-',
      jobType: '-',
      departmentName: ['PLAAS 1'],
      name: 'EDWARD',
      surname: 'GAL',
      idPassport: '700403',
      dob: '1970/04/03',
      startDate: '',
      terminationDate: '',
      employeeNumber: '5432',
      gender: '-',
      racialGroup: '-',
      southAfrican: '-',
      isForeignNational: '-',
    },
    {
      id: '740919',
      workSite: '-',
      jobType: ['GENERAL'],
      departmentName: ['PLAAS 1'],
      name: 'JIMMY',
      surname: 'FALLON',
      idPassport: '740919',
      dob: '1974/09/19',
      startDate: '2024/06/10',
      terminationDate: '2024/06/10',
      employeeNumber: '375764',
      gender: ['MALE'],
      racialGroup: ['WHITE'],
      southAfrican: ['NO'],
      isForeignNational: ['NO'],
    },
    {
      id: '760908',
      workSite: '-',
      jobType: ['ADMIN'],
      departmentName: 'PLAAS 2',
      name: 'PAM',
      surname: 'BEESLY',
      idPassport: '760908',
      dob: '1976/09/08',
      startDate: '',
      terminationDate: '',
      employeeNumber: '234',
      gender: ['MALE'],
      racialGroup: 'WHITE',
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
    {
      id: '770423',
      workSite: '-',
      jobType: ['GENERAL'],
      departmentName: '2023/03/23',
      name: 'JOHN',
      surname: 'OLIVER',
      idPassport: '770423',
      dob: '1977/04/23',
      startDate: '',
      terminationDate: '',
      employeeNumber: '8989',
      gender: ['MALE'],
      racialGroup: ['WHITE'],
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
    {
      id: '780403',
      workSite: '-',
      jobType: '-',
      departmentName: ['WORKSHOP'],
      name: 'JON',
      surname: 'SMIT',
      idPassport: '780403',
      dob: '1978/04/03',
      startDate: '',
      terminationDate: '',
      employeeNumber: '6432',
      gender: '-',
      racialGroup: '-',
      southAfrican: '-',
      isForeignNational: '-',
    },
    {
      id: '780606',
      workSite: '-',
      jobType: ['TEAM LEADER'],
      departmentName: ['WORKSHOP'],
      name: 'RYAN',
      surname: 'HOWARD',
      idPassport: '78060601RYAN',
      dob: '1978/06/06',
      startDate: '',
      terminationDate: '',
      employeeNumber: '5432',
      gender: '-',
      racialGroup: '-',
      southAfrican: ['YES'],
      isForeignNational: '-',
    },
    {
      id: '781001',
      workSite: '-',
      jobType: 'ADMIN',
      departmentName: ['HOOFKANTOOR'],
      name: 'JIM',
      surname: 'HALPERT',
      idPassport: '781001',
      dob: '1978/10/01',
      startDate: '2024/08/12',
      terminationDate: '',
      employeeNumber: '0000',
      gender: ['MALE'],
      racialGroup: ['AFRICAN'],
      southAfrican: ['NO'],
      isForeignNational: ['NO'],
    },
    {
      id: '800823',
      workSite: '-',
      jobType: ['GENERAL'],
      departmentName: 'PAKSTOOR',
      name: 'HASHIM',
      surname: 'AMLA',
      idPassport: '800823',
      dob: '1980/08/23',
      startDate: '2024/11/26',
      terminationDate: '',
      employeeNumber: '-',
      gender: ['MALE'],
      racialGroup: ['INDIAN'],
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
    {
      id: '810808',
      workSite: '-',
      jobType: ['ADMIN'],
      departmentName: ['HOOFKANTOOR'],
      name: 'ROGER',
      surname: 'FEDERER',
      idPassport: '810808',
      dob: '1981/08/08',
      startDate: '2024/08/12',
      terminationDate: '',
      employeeNumber: '5234',
      gender: ['FEMALE'],
      racialGroup: ['COLOURED'],
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
    {
      id: '821213',
      workSite: '-',
      jobType: ['SECURITY'],
      departmentName: 'PLAAS 2',
      name: 'QUINTON',
      surname: 'DE KOCK',
      idPassport: '821213',
      dob: '1982/12/13',
      startDate: '2024/11/25',
      terminationDate: '',
      employeeNumber: '1244',
      gender: ['MALE'],
      racialGroup: ['WHITE'],
      southAfrican: ['YES'],
      isForeignNational: '-',
    },
    {
      id: '823107',
      workSite: '-',
      jobType: ['TEAM LEADER'],
      departmentName: ['PAKSTOOR'],
      name: 'MICHAEL',
      surname: 'JUNG',
      idPassport: '823107',
      dob: '1984/07/07',
      startDate: '2024/08/12',
      terminationDate: '',
      employeeNumber: '000000000012',
      gender: ['MALE'],
      racialGroup: ['WHITE'],
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
    {
      id: '830925',
      workSite: '-',
      jobType: ['ADMIN'],
      departmentName: ['HOOFKANTOOR'],
      name: 'DONALD',
      surname: 'GLOVER',
      idPassport: '830925',
      dob: '1983/09/25',
      startDate: '2024/08/12',
      terminationDate: '',
      employeeNumber: '3463',
      gender: ['MALE'],
      racialGroup: ['COLOURED'],
      southAfrican: ['YES'],
      isForeignNational: ['NO'],
    },
  ];

  const peopleflowColumnConfig = [
    {
      sizeFactor: 1,
      label: 'EMP NUM',
      id: 'employeeNumber',
    },
    {
      sizeFactor: 1,
      label: 'Name',
      id: 'name',
    },
    {
      sizeFactor: 1,
      label: 'Surname',
      id: 'surname',
    },
    {
      sizeFactor: 1,
      label: 'ID / Passport',
      id: 'idPassport',
    },
  ];

  const convertPfColumnConfigToGridColDef = (columnConfig) => {
    return columnConfig.map((column) => {
      return {
        field: column.id,
        headerName: column.label,
        flex: column.sizeFactor,
        minWidth: 80,
      };
    });
  };

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
          <Heading>Table</Heading>
          <Code>{'<Table />'}</Code>
          <Table
            rows={peopleflowTableData}
            columns={convertPfColumnConfigToGridColDef(peopleflowColumnConfig)}
            selectedRowsIds={selectedTableRows}
            onRowSelection={(selectedRows) => setSelectedTableRows(selectedRows)}
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
