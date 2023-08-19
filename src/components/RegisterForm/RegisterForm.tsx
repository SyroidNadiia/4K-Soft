import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

interface RegisterFormProps {
  onRegister: (values: RegisterFormValues) => void;
}

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: RegisterFormValues = {
  name: '',
  email: '',
  password: '',
};

const registerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: values => {
      onRegister(values);
    },
  });

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
      onSubmit={formik.handleSubmit}
    >
      <Input
        name="name"
        type="text"
        placeholder="Enter your name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.errors.name && formik.touched.name && (
        <span style={{ color: 'red' }}>{formik.errors.name}</span>
      )}

      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email && (
        <span style={{ color: 'red' }}>{formik.errors.email}</span>
      )}

      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.errors.password && formik.touched.password && (
        <span style={{ color: 'red' }}>{formik.errors.password}</span>
      )}

      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
