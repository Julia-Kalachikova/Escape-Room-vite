import { Navigate } from 'react-router-dom';
import { LoginStatus, RoutePath } from '../../const';

type PrivateRoutProps = {
  children: JSX.Element;
  loginStatus: LoginStatus;
}

export default function PrivateRoute({children, loginStatus}: PrivateRoutProps): JSX.Element {
  return (
    loginStatus === LoginStatus.Auth ? children : <Navigate to={RoutePath.Login}/>
  );
}
