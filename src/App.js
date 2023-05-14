import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layouts/index';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const routes = createBrowserRouter([
  {
    path: "/react-portfolio",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/react-portfolio/about',
        element: <About />
      },
      {
        path: '/react-portfolio/contact',
        element: <Contact />
      },
      {
        path: '/react-portfolio/portfolio',
        element: <Portfolio />
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
