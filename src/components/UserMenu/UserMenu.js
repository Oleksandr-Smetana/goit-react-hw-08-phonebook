import { useDispatch, useSelector } from 'react-redux';
// import Loader from 'react-loading';
import {
  getUserName,
  getUserEmail,
  //   getAuthLoading,
} from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(getUserName);
  const email = useSelector(getUserEmail);

  const onLogOut = () => dispatch(logOut());
  //   const isLogOut = useSelector(getAuthLoading);

  return (
    <>
      {/* {isLogOut && <Loader />} */}
      <p>{`Welcome, ${name}!`}</p>
      <p>{`My e-mail: ${email}.`}</p>

      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </>
  );
}
