import { Link } from 'react-router-dom';
import { HeaderMenu, RoutePath } from '../../const';

export default function Header(): JSX.Element {
  return (
    <header className='header'>
      <div className='container container--size-l'>
        <span className='logo header__logo'>
          <svg width='134' height='52' aria-hidden='true'>
            <use xlinkHref='#logo'></use>
          </svg>
        </span>
        <nav className='main-nav header__main-nav'>
          <ul className='main-nav__list'>
            <li className='main-nav__item'>
              <Link className='link' to={RoutePath.Main}>{HeaderMenu.Quests}</Link>
            </li>
            <li className='main-nav__item'>
              <Link className='link' to={RoutePath.Contact}>{HeaderMenu.Contact}</Link>
            </li>
            <li className='main-nav__item'>
              <Link className='link' to={RoutePath.Favorites}>{HeaderMenu.Favorites}</Link>
            </li>
          </ul>
        </nav>
        <div className='header__side-nav'>
          <Link className='btn btn--accent header__side-item' to='#'>{HeaderMenu.Exit}</Link>
          <Link className='link header__side-item header__phone-link' to='tel:88003335599'>8 (000) 111-11-11</Link>
        </div>
      </div>
    </header>
  );
}
