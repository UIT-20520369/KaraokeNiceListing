import './App.css';
import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from './layouts/Default';
import Home from './pages/Home';
const App = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[
      {
        path:'/',
        element: <Home />
      }
    ]
  }
])

export default App;
