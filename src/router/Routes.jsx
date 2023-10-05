import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: ([
      {
        path: '/',
        element: 
      }
    ])
  },
]);

export default Routes;
