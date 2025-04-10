import { useState } from 'react';
import { generateTimeOptions } from '../../utils/generateTimeOptions';
import sprite from '../../assets/sprite.svg';
import css from './TimePicker.module.css';

const TimePicker = ({ register, setValue, setError, errors }) => {
  const times = generateTimeOptions('09:00', '17:00', 30);
  const [selectedTime, setSelectedTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectTime = time => {
    setSelectedTime(time);
    setValue('time', time);
    setError('time', { type: 'manual', message: '' });
    setIsOpen(false);
  };

  return (
    <div className={css.inputBox}>
      <div className={css.customSelect} onClick={() => setIsOpen(!isOpen)}>
        {selectedTime || '00:00'}
        <button type="button" className={css.clockButton}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-clock`}></use>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className={css.dropdown}>
          <p className={css.dropdownLabel}>Meeting time</p>
          <ul>
            {times.map(time => (
              <li
                key={time}
                className={css.option}
                onClick={() => handleSelectTime(time)}
              >
                {time}
              </li>
            ))}
          </ul>
        </div>
      )}
      <input type="hidden" {...register('time')} value={selectedTime} />
      {errors.time?.message && (
        <span className={css.error}>{errors.time.message}</span>
      )}
    </div>
  );
};

export default TimePicker;
