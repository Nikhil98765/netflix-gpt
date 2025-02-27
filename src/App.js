import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Body from "./components/Body";
import { appStore } from "./store/AppStore";
import Login from "./components/Login";
import Browse from "./components/Browse";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
          <RouterProvider router={routes}/>
      </Provider>
    </div>
  );
}

export default App;
