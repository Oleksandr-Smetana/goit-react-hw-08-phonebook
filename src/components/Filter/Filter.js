import { useSelector, useDispatch } from 'react-redux';

import Loader from '../Loader';

import { changeFilter } from '../../redux/contacts/contacts-actions';
import {
  getFilter,
  getLoading,
} from '../../redux/contacts/contacts-selectors';

import s from './Filter.module.css';

export default function Filter() {
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  const value = useSelector(getFilter);
  const onChange = e =>
    dispatch(changeFilter(e.currentTarget.value));

  return (
    <div className={s.filter}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>

      {isLoading && <Loader />}
    </div>
  );
}
