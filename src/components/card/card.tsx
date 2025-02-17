import { Link } from 'react-router-dom';

import QuestCardInfo from '../quest-card-info/quest-card-info';
import ButtonCancel from '../button-cancel/button-cancel';

import { CardBelonging, CardType } from '../../types';
import { RoutePath } from '../../const';


type Props = {
  card: CardType;
  cardBelonging: CardBelonging;
}

export default function Card({card, cardBelonging}: Props): JSX.Element {
  const {title, previewImg, previewImgWebp, level, peopleMinMax} = card;
  return (
    <div className='quest-card'>
      <div className='quest-card__img'>
        <picture>
          <source
            type='image/webp'
            srcSet={previewImgWebp}
          />
          <img
            src={previewImg}
            srcSet='img/content/crypt/crypt-size-s@2x.jpg 2x'
            width='344'
            height='232'
            alt='Мужчина в клетке в подземелье.'
          />
        </picture>
      </div>
      <div className='quest-card__content'>
        <div className='quest-card__info-wrapper'>
          <Link className='quest-card__link' to={RoutePath.Quest.replace(':id', card.id)}>{title}</Link>
          {cardBelonging === ' decorated-page' ? <QuestCardInfo/> : ''}
        </div>
        <ul className='tags quest-card__tags'>
          <li className='tags__item'>
            <svg
              width='11'
              height='14'
              aria-hidden='true'
            >
              <use xlinkHref='#icon-person'></use>
            </svg>{`${peopleMinMax[0]} - ${peopleMinMax[1]}`} чел
          </li>
          <li className='tags__item'>
            <svg
              width='14'
              height='14'
              aria-hidden='true'
            >
              <use xlinkHref='#icon-level'></use>
            </svg>{level}
          </li>
        </ul>
        {cardBelonging === ' decorated-page' ? <ButtonCancel /> : ''}
      </div>
    </div>
  );
}
