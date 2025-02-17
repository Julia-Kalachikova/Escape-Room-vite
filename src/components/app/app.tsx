import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import QuestPage from '../../pages/quest-page/quest-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-rout/private-rout';
import BookingPage from '../../pages/booking-page/booking-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import Spinner from '../spinner/spinner';

import { LoginStatus, RoutePath } from '../../const';
import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { fetchCardsAction } from '../../store/modules/cards/api-action-cards';
import { checkAuthStatus } from '../../store/modules/auth/api-action-auth';
import { getAuthStatus } from '../../store/modules/auth/selector-auth';
import { getIsLoadingCards } from '../../store/modules/cards/selector-cards';


export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const isLoading = useAppSelector(getIsLoadingCards);

  useEffect(() => {
    dispatch(checkAuthStatus());
    dispatch(fetchCardsAction());
  }, [dispatch]);

  if(isLoading || authStatus === LoginStatus.Unknown) {
    return <Spinner/>;
  }

  return (
    <Routes>
      <Route
        path={RoutePath.Main}
        element={
          <MainPage />
        }
      />
      <Route
        path={RoutePath.Login}
        element={<LoginPage/>}
      />
      <Route
        path={RoutePath.Quest}
        element={<QuestPage/>}
      />
      <Route
        path={RoutePath.NOT_FOUND}
        element={<NotFoundPage/>}
      />
      <Route
        path={RoutePath.Contact}
        element={<ContactsPage />}
      />
      <Route
        path={RoutePath.Booking}
        element={
          <PrivateRoute loginStatus={authStatus}>
            <BookingPage/>
          </PrivateRoute>
        }
      />
      <Route
        path={RoutePath.Favorites}
        element={
          <PrivateRoute loginStatus={authStatus}>
            <FavoritePage />
          </PrivateRoute>
        }
      />
      <Route path={RoutePath.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
