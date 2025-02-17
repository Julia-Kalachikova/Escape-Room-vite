import CardList from '../../components/card-list/card-list';
import FilterGroup from '../../components/filter-group/filter-group';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { getCards, getCurrentGenre, getCurrentLevel } from '../../store/modules/cards/selector-cards';
import { useAppSelector } from '../../store/store-hooks';
import { CardType } from '../../types';

export default function MainPage(): JSX.Element {
  const currentLevel = useAppSelector(getCurrentLevel);
  const currentGenre = useAppSelector(getCurrentGenre);
  const cards = useAppSelector(getCards);

  const cardsFilteredGenre: CardType[] = currentGenre === 'all' ? cards : cards.filter((card) => card.type === currentGenre);
  const cardsFiltered: CardType[] = currentLevel === 'any' ? cardsFilteredGenre : cardsFilteredGenre.filter((card) => card.level === currentLevel);

  return (
    <div className='wrapper'>
      <Header />
      <main className='page-content'>
        <div className='container'>
          <div className='page-content__title-wrapper'>
            <h1 className='subtitle page-content__subtitle'>квесты в Санкт-Петербурге
            </h1>
            <h2 className='title title--size-m page-content__title'>Выберите тематику</h2>
          </div>
          <div className='page-content__item'>
            <FilterGroup />
          </div>
          <h2 className='title visually-hidden'>Выберите квест</h2>
          <CardList cards={cardsFiltered}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
