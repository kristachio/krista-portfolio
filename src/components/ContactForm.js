import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';


const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: '',
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='name' md='2'>
                        Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name='name'
                            placeholder='Name'
                            className='form-control'
                        />
                        <ErrorMessage name='name'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field
                            name='email'
                            placeholder='Email'
                            type='email'
                            className='form-control'
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='message' md='2'>
                        Your Message
                    </Label>
                    <Col md='10'>
                        <Field
                            name='message'
                            as='textarea'
                            rows='12'
                            className='form-control'
                        />
                        <ErrorMessage name='message'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type='submit' color='primary'>
                            Send Message
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default ContactForm;