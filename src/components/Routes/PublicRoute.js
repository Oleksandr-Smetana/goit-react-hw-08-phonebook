import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getStatus } from '../../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo,
}) {
  const status = useSelector(getStatus);
  const shouldRedirect = status && restricted;
  return shouldRedirect ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}

PublicRoute.propTypes = {
  children: PropTypes.object.isRequired,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
