import Card from '../card/card';
import { getCards } from '../../store/modules/cards/selector-cards';
import { useAppSelector } from '../../store/store-hooks';


export default function FavoriteGroup(): JSX.Element {
  const cards = useAppSelector(getCards);

  return (

    <div className='cards-grid'>
      {cards.map((card) => (<Card key={card.id} card={card} cardBelonging=' decorated-page'/>))}
    </div>
  );
}
