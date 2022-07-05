import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layouts
import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";
import AdminLayout from "./components/AdminLayout";

//Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/User";
import Admin from "./pages/Admin";
import NotFound from "./pages/404";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          <Route element={<AuthLayout />}>
            <Route path="/user" element={<User />} />

            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
