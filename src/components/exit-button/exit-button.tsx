import { Link, useNavigate } from 'react-router-dom';
import { HeaderMenu, RoutePath } from '../../const';
import { useAppDispatch } from '../../store/store-hooks';
import { logoutAction } from '../../store/modules/auth/api-action-auth';
import React from 'react';


export default function ExitButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
    navigate(RoutePath.Main);
  };

  return (
    <Link
      className='btn btn--accent header__side-item'
      onClick={handleSignOut} to='#'
    >
      {HeaderMenu.Exit}
    </Link>
  );
}
