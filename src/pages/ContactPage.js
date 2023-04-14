import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact' />

            <Row className='row-content'>
                <Col xs='12'>
                    <h5>Send me a message!</h5>
                    <hr />
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;