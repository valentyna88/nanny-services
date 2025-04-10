import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const numberRegex = /^\+380\d{9}$/;

export const appointmentSchema = yup.object().shape({
  address: yup.string().required('Address is required!'),
  phone: yup
    .string()
    .matches(numberRegex, 'Phone must be in format +380XXXXXXXXX')
    .required('Phone number is required!'),
  childAge: yup
    .string()
    .matches(/^\d+$/, "Child's age must be a number")
    .required("Child's age is required!"),
  time: yup.string().required('Meeting time is required!'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  parentName: yup.string().required("Parent's name is required!"),
  comment: yup.string().required('Comment is required!'),
});
