import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from './routes/Root/Root';
import { ErrorPage } from "./routes/ErorPage/ErrorPage";
import { Home } from './routes/Home/Home';
import { ConfComputer } from './routes/ConfComputer/CofComputer';
import { ProductBasket } from './routes/ProductBasket/ProductBasket';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gather',
        element: <ConfComputer />,
      },
      {
        path: '/basket',
        element: <ProductBasket />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;