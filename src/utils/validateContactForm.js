export const validateContactForm = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length < 2) {
        errors.name = 'Must be at least 2 characters.';
    } else if (values.name.length > 30) {
        errors.name = 'Must be 30 characters or less';
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain an @';
    }

    if (!values.message) {
        errors.message = 'Required';
    }

    return errors;
};