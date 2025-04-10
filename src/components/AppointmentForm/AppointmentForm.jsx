import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { closeModal } from '../../redux/modal/slice';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import sprite from '../../assets/sprite.svg';
import css from './AppointmentForm.module.css';
import Button from '../ui/Button/Button';
import Title from '../ui/Title/Title';
import Text from '../ui/Text/Text';
import TimePicker from '../TimePicker/TimePicker';
import toast from 'react-hot-toast';

const numberRegex = /^\+380\d{9}$/;

const schema = yup.object().shape({
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
});

const AppointmentForm = ({ nanny }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    toast.success('Your appointment has been successfully scheduled!', {
      duration: 4000,
    });

    reset();
    dispatch(closeModal());
  };

  return (
    <>
      <button className={css.btnClose} onClick={() => dispatch(closeModal())}>
        <svg className={css.iconClose}>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </button>

      <div className={css.titleWrapper}>
        <Title variant="modal">Make an appointment with a babysitter</Title>
        <Text variant="light">
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </Text>
      </div>

      <div className={css.nannyWrapper}>
        <img className={css.avatar} src={nanny.avatar_url} alt={nanny.name} />
        <div>
          <Text variant="yourNanny">Your nanny</Text>
          <Text variant="bold">{nanny.name}</Text>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.row}>
          <div className={css.inputBox}>
            <input
              type="text"
              placeholder="Address"
              {...register('address')}
              className={css.input}
            />
            {errors.address && (
              <span className={css.error}>{errors.address.message}</span>
            )}
          </div>
          <div className={css.inputBox}>
            <input
              type="tel"
              placeholder="+380"
              {...register('phone')}
              className={css.input}
            />
            {errors.phone && (
              <span className={css.error}>{errors.phone.message}</span>
            )}
          </div>
        </div>

        <div className={css.row}>
          <div className={css.inputBox}>
            <input
              type="text"
              placeholder="Child's age"
              {...register('childAge')}
              className={css.input}
            />
            {errors.childAge && (
              <span className={css.error}>{errors.childAge.message}</span>
            )}
          </div>
          <div className={css.inputBox}>
            <TimePicker
              register={register}
              setValue={setValue}
              setError={setError}
              errors={errors}
            />
          </div>
        </div>

        <div className={css.inputBox}>
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className={css.input}
          />
          {errors.email && (
            <span className={css.error}>{errors.email.message}</span>
          )}
        </div>

        <div className={css.inputBox}>
          <input
            type="text"
            placeholder="Father's or mother's name"
            {...register('parentName')}
            className={css.input}
          />
          {errors.parentName && (
            <span className={css.error}>{errors.parentName.message}</span>
          )}
        </div>

        <textarea
          placeholder="Comment"
          {...register('comment')}
          className={css.textarea}
        ></textarea>

        <Button type="submit" variant="filled">
          Send
        </Button>
      </form>
    </>
  );
};

export default AppointmentForm;
