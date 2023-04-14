
import { Container, Row, Col } from 'reactstrap';
import TypewriterText from './Typewriter';


const HomeComp = () => {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Krista</h2>
            <span></span>
            <TypewriterText /> 
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default HomeComp;