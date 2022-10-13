import { BookingPage } from 'pages/Booking';
import { HomePage } from 'pages/Home';
import { LoginPage } from 'pages/Login';
import { NotFoundPage } from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';

export const App = (): JSX.Element => (
  <Routes>
    <Route element={<HomePage />} path="/" />
    <Route element={<LoginPage />} path="/login" />
    <Route element={<BookingPage />} path="/booking" />
    <Route element={<NotFoundPage />} path="*" />
  </Routes>
);
