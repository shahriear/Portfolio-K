import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import './index.css';
import Layout from './components/Layout/Layout';
import PageNotFound from './components/Error/PageNotFound';
import Error from './components/Error/Error';
import BlogDetails from './components/Blog/BlogDetails';
import Portfolio_single from './components/Portfilio-single/Portfolio_single';
import Portfolio_Lyout from './components/Portfolio_Lyot/Portfolio_Lyout';
import Basic from './components/Home/Basic/Basic';
import Service from './components/About/Service/Service';
import Portfolio_grid from './components/Portfolio_Lyot/Portfolio_grid';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/portfolio" element={<Portfolio_Lyout />} />
        <Route path="/portfoliosingle" element={<Portfolio_single />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/service" element={<Service />} />
        <Route path="/grid" element={<Portfolio_grid />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
