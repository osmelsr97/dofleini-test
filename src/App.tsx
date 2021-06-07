import React from 'react';
import './App.css';
import { Col, Row } from 'antd';
import CardForm from './components/cardForm';
import CardPreview from './components/cardPreview';
import WorkSpaceProvider from './hooks/WorkSpace/workSpaceProvider';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isSmartPhone = useMediaQuery({ maxDeviceWidth: 1024 });

  return (
    <WorkSpaceProvider>
      <Row align="top" justify="space-around">
        <Col span={!isSmartPhone ? 8 : 24}>
          <CardForm />
        </Col>
        {!isSmartPhone &&
          <Col span={8}>
            <CardPreview />
          </Col>}
      </Row>
    </WorkSpaceProvider>
  );
}

export default App;
