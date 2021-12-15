import * as yup from 'yup';

const userFormSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First Name is required'),
    last_name: yup
        .string()
        .trim()
        .required('Last Name is required'),
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Oops, looks like you forgot an email address'),
    password: yup
        .string()
        .min(8, 'Password must be 8 or more characters')
        .required('Please enter your password'),
    terms: yup.boolean(),

})

export default userFormSchema;