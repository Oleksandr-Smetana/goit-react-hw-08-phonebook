import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getStatus } from '../../redux/auth/auth-selectors';
import s from './AppBar.module.css';
import AuthMenu from '../AuthMenu';
import UserMenu from '../UserMenu';

export default function AppBar() {
  const isLoggedIn = useSelector(getStatus);

  return (
    <div>
      <nav>
        <NavLink exact="true" to="/" className={s.link}>
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink to="contacts" className={s.link}>
            Contacts
          </NavLink>
        )}

        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </nav>
    </div>
  );
}
