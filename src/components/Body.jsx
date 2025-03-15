import Brower from './Brower';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Footer from './Footer';
import SignUp from './SignUp';

const appRouter = createBrowserRouter([
     {
          path: '/',
          element: <Login />
     },
     {
          path: '/brower',
          element: <Brower />
     },{
          path:'/sign-up',
          element:<SignUp/>
     }
]);

const Body = () => {
     return (
          <div>
               <RouterProvider router={appRouter} />
          </div>
     );
};

export default Body;
