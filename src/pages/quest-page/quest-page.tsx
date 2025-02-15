import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { RoutePath } from '../../const';
import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { useEffect } from 'react';
import { getCardInfoByID } from '../../store/modules/quest/api-action-quest';
import { getCardFull } from '../../store/modules/quest/selector-quest';

export default function QuestPage(): JSX.Element {
  const {id: cardId } = useParams();


  const dispatch = useAppDispatch();

  useEffect (() => {
    if (cardId) {
      dispatch(getCardInfoByID({cardId}));
    }
  }, [cardId, dispatch]);

  const cardFull = useAppSelector(getCardFull);
  return (
    <div className='wrapper'>
      <Header />
      <main className='decorated-page quest-page'>
        <div className='decorated-page__decor' aria-hidden='true'>
          <picture>
            <source
              type='image/webp'
              srcSet={cardFull?.previewImgWebp}
            />
            <img
              src={cardFull?.previewImg}
              srcSet={cardFull?.coverImg}
              width='1366'
              height='768'
              alt=''
            />
          </picture>
        </div>
        <div className='container container--size-l'>
          <div className='quest-page__content'>
            <h1 className='title title--size-l title--uppercase quest-page__title'>{cardFull?.title}</h1>
            <p className='subtitle quest-page__subtitle'><span className='visually-hidden'>Жанр:</span>{cardFull?.type}
            </p>
            <ul className='tags tags--size-l quest-page__tags'>
              <li className='tags__item'>
                <svg width='11' height='14' aria-hidden='true'>
                  <use xlinkHref='#icon-person'></use>
                </svg>3&ndash;6&nbsp;чел
              </li>
              <li className='tags__item'>
                <svg width='14' height='14' aria-hidden='true'>
                  <use xlinkHref='#icon-level'></use>
                </svg>{cardFull?.level}
              </li>
            </ul>
            <p className='quest-page__description'>{cardFull?.description}</p>
            <Link className='btn btn--accent btn--cta quest-page__btn' to={RoutePath.Booking}>Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
