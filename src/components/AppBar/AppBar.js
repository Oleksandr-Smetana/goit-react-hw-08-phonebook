import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getStatus } from '../../redux/auth/auth-selectors';
import AuthMenu from '../AuthMenu';
import UserMenu from '../UserMenu';

import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getStatus);

  return (
    <nav className={s.AppBar}>
      <div className={s.wrapper}>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) =>
            isActive ? s.activeLink : s.link
          }
        >
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? s.activeLink : s.link
            }
          >
            Contacts
          </NavLink>
        )}
      </div>

      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </nav>
  );
}
