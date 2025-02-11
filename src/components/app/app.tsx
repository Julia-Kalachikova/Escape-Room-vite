import { Route, Routes } from 'react-router-dom';
import { RoutePath } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import { CardType } from '../../types';

type Props = {
  cards: CardType[];
}

export default function App({cards}: Props): JSX.Element {
  return (
    <Routes>
      <Route
        path={RoutePath.Main}
        element={
          <MainPage
            cards={cards}
          />
        }
      />
    </Routes>
  );
}
