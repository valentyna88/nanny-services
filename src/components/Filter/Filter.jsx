import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import css from './Filter.module.css';

const options = [
  { label: 'A to Z', value: 'asc' },
  { label: 'Z to A', value: 'desc' },
  { label: 'Less than 10$', value: 'lt10' },
  { label: 'Greater than 10$', value: 'gt10' },
  { label: 'Popular', value: 'popular' },
  { label: 'Not popular', value: 'notPopular' },
  { label: 'Show all', value: 'all' },
];

const Filter = ({ onFilter }) => {
  const [selected, setSelected] = useState(options[0].value);
  const [open, setOpen] = useState(false);

  const handleSelect = value => {
    setSelected(value);
    setOpen(false);
    onFilter(value);
  };

  return (
    <div className={`${css.selectWrapper} ${open ? css.active : ''}`}>
      <label className={css.label}>Filters</label>
      <div className={css.selectedOption} onClick={() => setOpen(!open)}>
        {options.find(opt => opt.value === selected).label}
        <svg className={css.icon}>
          <use xlinkHref={`${sprite}#icon-chevron-down`}></use>
        </svg>
      </div>
      <ul className={css.dropdown}>
        {options.map(opt => (
          <li
            key={opt.value}
            className={css.option}
            onClick={() => handleSelect(opt.value)}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
