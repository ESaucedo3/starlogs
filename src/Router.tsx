import { createHashRouter } from 'react-router-dom';
import { App } from './App.tsx';
import AuthGuard from './utils/AuthGuard.js';
import ErrorPage from './pages/ErrorPage.tsx';
import HomePage from './pages/HomePage.tsx';
import AccountPage from './pages/AccountPage.tsx';
import StarshipPage from './pages/StarshipPage.tsx';


export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: 'starships/:starshipId',
        element: <StarshipPage />
      },
      {
        path: "account",
        element:
          <AuthGuard>
            <AccountPage />
          </AuthGuard>,
      },
    ],
  },
]);