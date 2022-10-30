import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup.string().email().required('Please Enter your email'),
  username: yup.string().required('Please Enter your username'),
  password: yup.string().required('Please Enter your password'),
  confirmPassword: yup
    .string()
    .required('Please Confirm your password')
    .oneOf([yup.ref('password')], 'Passwords does not match'),
});
