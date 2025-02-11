import { CardType } from '../../types';
import Card from '../card/card';

type Props = {
  cards: CardType[];
}

export default function CardList({cards}: Props): JSX.Element {
  return (
    <div className='cards-grid'>
      {cards.map((card) => (<Card key={card.id} card={card}/>))}
    </div>
  );
}
