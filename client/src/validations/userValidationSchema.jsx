import * as yup from 'yup';

const userValidationSchema = yup.object().shape({
 name: yup.string()
    .required('A name is required'),
 email: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
 password: yup.string()
    .required('This field cannot be empty')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),
});

export default userValidationSchema;