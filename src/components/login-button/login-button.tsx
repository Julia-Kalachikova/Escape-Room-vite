import { Link } from 'react-router-dom';

import { HeaderMenu, RoutePath } from '../../const';


export default function LoginButton(): JSX.Element {
  return (
    <Link
      className='btn header__side-item header__login-btn'
      to={RoutePath.Login}
    >
      {HeaderMenu.Login}
    </Link>
  );
}
