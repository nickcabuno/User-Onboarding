import * as yup from 'yup'

const formSchema = yup.object().shape({
    firstname: yup.string()
    .trim()
    .required('name is required, please fill out.')
    .min(1, 'name must be 1 character long'),
    lastname: yup.string()
    .trim()
    .required('name is required, please fill out.')
    .min(1, 'name must be 1 character long'),
    password: yup.string()
    .trim()
    .required('password is required, please fill out.')
    .min(6, 'password must be 6 characters long'),
    email: yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),

    role: yup.string()
    .oneOf(['ugly', 'cute', 'al pacino', 'miley cyrus'], 'Role is required'),

    civil: yup.string()
    .oneOf(['yes', 'no'], 'Civil status is required'),
 
    accept: yup.boolean()
    .oneOf([true], "must accept"),
    
})

export default formSchema