import { authStatus } from '../redux/users/userSlice';

const handleUserStatus = (userStatus) => {
  switch (userStatus) {
    case authStatus.authenticated:
      return [true, null];
    case authStatus.rejected:
      return [false, 'Token is not verified, Login again'];
    case authStatus.unauthenticated:
      return [false, 'You need to login'];
    default:
      return [true, null];
  }
};

export default handleUserStatus;
