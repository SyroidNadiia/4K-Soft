import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { register } from '../../redux/auth/authOperations';
import { RegisterFormStyle } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  password: '',
};

const registerSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
      'Password must contain at least one uppercase letter and one special character'
    ),
});

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();

  const onHandleSubmit = async (
    formValues: RegisterData,
    { resetForm }: { resetForm: () => void }
  ) => {
    dispatch(register(formValues) as any);
    resetForm();
  };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues,
      onSubmit: onHandleSubmit,
      validationSchema: registerSchema,
    });

  return (
    <RegisterFormStyle onSubmit={handleSubmit}>
      <Input
        name="name"
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />
      {errors.name && touched.name ? (
        <span style={{ color: 'red' }}>{errors.name}</span>
      ) : null}

      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {errors.email && touched.email ? (
        <span style={{ color: 'red' }}>{errors.email}</span>
      ) : null}

      <Input
        name="password"
        type="password"
        placeholder="Create a password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {errors.password && touched.password ? (
        <span style={{ color: 'red' }}>{errors.password}</span>
      ) : null}

      <Button type="submit">Register</Button>
    </RegisterFormStyle>
  );
};

export default RegisterForm;
