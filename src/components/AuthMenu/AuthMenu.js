import { NavLink } from 'react-router-dom';
import s from './AuthMenu.module.css';

export default function AuthMenu() {
  return (
    <div>
      <NavLink to="register" className={s.link}>
        Registration
      </NavLink>

      <NavLink to="login" className={s.link}>
        Login
      </NavLink>
    </div>
  );
}
