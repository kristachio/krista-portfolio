import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Me' />
            <Row className='row-content'>
                <Col sm='6'>
                    <h3>A little about me...</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>Placeholder</h3>
                                <CardBody>
                                    <dl className='row'>
                                        <dt className='col-6'>Placeholder</dt>
                                        <dd className='col-6'>Placeholder</dd>
                                        <dt className='col-6'>Placeholder</dt>
                                        <dd className='col-6'>Placeholder</dd>
                                        <dt className='col-6'>Placeholder</dt>
                                        <dd className='col-6'>Placeholder</dd>
                                        <dt className='col-6'>Placeholder</dt>
                                        <dd className='col-6'>Placeholder</dd>
                                    </dl>   
                                </CardBody>
                        </CardHeader>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p>
                                I will not follow where the path may lead, but I
                                will go where there is no path, and I will leave
                                a trail.
                                </p>
                                <footer className='blockquote-footer'>
                                Muriel Strode,{' '}
                                    <cite title='Source Title'>
                                        "Wind-Wafted Wild Flowers" - The Open Court,
                                        1903
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        
        </Container>
    );
};

export default AboutPage;