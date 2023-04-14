import { Container, Row, Col } from 'reactstrap';


const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col className='text-center'>
                    <h5>made with ♡ by kristachio</h5>
                    <h5> © 2023</h5>
                    </Col>
                </Row>
            </Container>
        </footer>   
    );
};

export default Footer;