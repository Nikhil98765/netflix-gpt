import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from "./Login";
import Browse from "./Browse";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/browse',
    element: <Browse />
  }
])

const Body = () => {

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default Body;
