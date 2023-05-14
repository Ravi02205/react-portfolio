import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layouts/index';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/portfolio',
        element: <Portfolio/>
      }
    ]
  },
]);


function App() {
  return (

    <RouterProvider router={routes} />

  );
}

export default App;
