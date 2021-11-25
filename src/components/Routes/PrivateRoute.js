import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getStatus } from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  children,
  redirectTo,
}) {
  const status = useSelector(getStatus);
  return status ? children : <Navigate to={redirectTo} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};
