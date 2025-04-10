import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { closeModal } from '../../redux/modal/slice';
import { loginUser } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginSchema } from '../../utils/validationSchemas';
import sprite from '../../assets/sprite.svg';
import css from './LoginForm.module.css';
import Button from '../ui/Button/Button';
import Title from '../ui/Title/Title';
import Text from '../ui/Text/Text';

const LoginForm = () => {
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
    resolver: yupResolver(loginSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await dispatch(loginUser({ email, password }));
      reset();
      dispatch(closeModal());
    } catch (error) {
      console.error('Login failed:', error);
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
        <Title variant="modal">Log In</Title>
        <Text variant="light">
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </Text>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
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
          Log In
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
