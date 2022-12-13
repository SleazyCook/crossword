import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// General
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';

const appElement = document.getElementById('app');
const root = createRoot(appElement);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children : [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])

root.render(<RouterProvider router = {router} />);