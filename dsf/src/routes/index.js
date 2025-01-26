import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FrozenDeepSeaCrab from "../pages/FrozenDeepSeaCrab";
import LiveDeepSeaCrab from "../pages/LiveDeepSeaCrab";
import Error from "../pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:
        [
            {
                path: "/",
                element: <Home />,

            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element:<Contact />,
            },
            {
                path:"/frozen-crab",
                element:<FrozenDeepSeaCrab />,
            },
            {
                path: "/live-crab",
                element: <LiveDeepSeaCrab />,
            },
            {
                path: "*",
                element: <Error />,
            }
        
        ]    

  },
]);

export default router;
