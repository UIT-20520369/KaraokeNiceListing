import './App.css';
import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from './layouts/Default';
import Home from './pages/Home';
import Listing from './pages/Listing';
import DetailRoom from './pages/Detail';
import BookingRoom from './pages/Booking';
const App = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/listing',
        element: <Listing />
      },
      {
        path:'/detail',
        element:<DetailRoom />
      },
      {
        path:'/booking',
        element:<BookingRoom />
      }
    ]
  }
])

export default App;
