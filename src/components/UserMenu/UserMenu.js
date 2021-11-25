import { useDispatch, useSelector } from 'react-redux';
import {
  getUserName,
  getUserEmail,
} from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(getUserName);
  const email = useSelector(getUserEmail);

  const onLogOut = () => dispatch(logOut());

  return (
    <div className={s.userMenu}>
      <p
        className={s.text}
      >{`Welcome, ${name}! (${email})`}</p>

      <button
        type="button"
        className={s.button}
        onClick={onLogOut}
      >
        Logout
      </button>
    </div>
  );
}
