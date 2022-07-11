
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MemeCards from "./MemeCards";
import useMemes from "./services/useMemes";

function App() {

  const memes = useMemes();
  console.log(memes);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <MemeCards memes={memes} />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
