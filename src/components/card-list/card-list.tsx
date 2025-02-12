import { CardBelonging, CardType } from '../../types';
import Card from '../card/card';

type Props = {
  cards: CardType[];
  cardBelonging: CardBelonging;
}

export default function CardList({cards, cardBelonging}: Props): JSX.Element {
  return (
    <div className='cards-grid'>
      {cards.map((card) => (<Card key={card.id} card={card} cardBelonging={cardBelonging}/>))}
    </div>
  );
}
