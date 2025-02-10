import * as Yup from 'yup';

export const formSchema = Yup.object({
    name: Yup.string().min(3,('Too Short')).max(20,('Too Long')).required('Name Is Must'),
    email:Yup.string().email('Invalid Email').required('Email Is Must'),
    age:Yup.number().min(10).max(50).required('Age I Must'),
    pass:Yup.string().required('Password Is Must')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Enter Strong Password"),
    cpass:Yup.string().required('Password Is Must')
    .oneOf([Yup.ref('pass'), null], "Both Password Must match")
});