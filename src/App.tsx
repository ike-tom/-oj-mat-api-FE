import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
import { Button, FormControl, InputGroup, Form, Container, Row, Col } from 'react-bootstrap';
import './App.css';

import { SERVER_URL } from './URLs';

import readAll from './api/read';
import { defaultTextAreaPlaceholder } from './const';
import InformationModal from './components/InformationModal/InformationModal';

function App() {
  const [text, setText] = useState<string[] | string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const showResponse = async (inputValue: string) => {
    setText(JSON.stringify(await readAll(inputValue), null, '\t'));
  };

  return (
    <div className="App">
      <h1 className="header">
        <span className="header__firstTwoLetters">Oj</span>MAT API
      </h1>
      <Container>
        <Row sm={8}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              showResponse(inputRef.current?.value as string);
            }}
          >
            <Form.Label htmlFor="form__input">Give it a try!</Form.Label>
            <InputGroup className="mb-3">
              <Col xs={12} md={6} lg={4}>
                <InputGroup.Text id="form__http-path">{SERVER_URL}</InputGroup.Text>
              </Col>
              <Col xs={12} md={6} lg={true} id="form__input-container">
                <FormControl ref={inputRef} placeholder="people/1" id="form__input" />
              </Col>
              <Col xs={12} lg={2} id="form__submit-button-container">
                <div className="d-grid gap-2">
                  <Button variant="danger" id="form__submit-button" type="submit">
                    REQUEST
                  </Button>
                </div>
              </Col>
            </InputGroup>
          </Form>
        </Row>
        <Row sm={8}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="form__server-response">Response</Form.Label>
            <Form.Control
              placeholder={JSON.stringify(defaultTextAreaPlaceholder, null, '\t')}
              disabled
              as="textarea"
              value={text}
              id="form__server-response"
            />
          </Form.Group>
        </Row>
      </Container>
      <InformationModal />
    </div>
  );
}

export default App;
