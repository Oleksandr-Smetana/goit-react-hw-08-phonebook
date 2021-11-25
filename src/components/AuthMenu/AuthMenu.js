import { NavLink } from 'react-router-dom';

import s from './AuthMenu.module.css';

export default function AuthMenu() {
  return (
    <div className={s.authMenu}>
      <NavLink
        to="register"
        className={({ isActive }) =>
          isActive ? s.activeLink : s.link
        }
      >
        Registration
      </NavLink>

      <NavLink
        to="login"
        className={({ isActive }) =>
          isActive ? s.activeLink : s.link
        }
      >
        Login
      </NavLink>
    </div>
  );
}
