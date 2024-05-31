import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Categories from "./components/Categories/Categories";
import Products from "./pages/Products/products";
import Product from "./pages/Product/product";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div className="App" >
      <Header />
      <Outlet />
      <Footer />
    </div >
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Categories />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      }
    ]
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div >
  );
}

export default App;
