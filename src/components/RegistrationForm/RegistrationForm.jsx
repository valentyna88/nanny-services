import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { closeModal } from '../../redux/modal/slice';
import { registerUser } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as yup from 'yup';
import sprite from '../../assets/sprite.svg';
import css from './RegistrationForm.module.css';
import Button from '../ui/Button/Button';
import Title from '../ui/Title/Title';
import Text from '../ui/Text/Text';

const schema = yup.object().shape({
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

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async ({ name, email, password }) => {
    console.log('User registered:', { email, password });
    try {
      await dispatch(registerUser({ email, password }));
      reset();
      dispatch(closeModal());
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <>
      <button className={css.btnClose} onClick={() => dispatch(closeModal())}>
        <svg className={css.iconClose}>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      <div className={css.titleWrapper}>
        <Title variant="modal">Registration</Title>
        <Text variant="light">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </Text>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <input
          type="text"
          placeholder="Name"
          {...register('name')}
          className={css.input}
        />
        {errors.name && (
          <span className={css.error}>{errors.name.message}</span>
        )}

        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          className={css.input}
        />
        {errors.email && (
          <span className={css.error}>{errors.email.message}</span>
        )}

        <div className={css.passwordWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
            className={css.input}
          />
          <button
            type="button"
            className={css.eyeIcon}
            onClick={togglePasswordVisibility}
          >
            <svg width={20} height={20}>
              <use
                href={`${sprite}#icon-${showPassword ? 'eye' : 'eye-off'}`}
              ></use>
            </svg>
          </button>
        </div>
        {errors.password && (
          <span className={css.error}>{errors.password.message}</span>
        )}
        <Button type="submit" variant="filled">
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default RegistrationForm;
