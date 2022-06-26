import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layouts
import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";
import AdminLayout from "./components/AdminLayout";

//Pages
import Home from "./pages/Home";
import Register from "./pages/Register";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<span>Login</span>} />

          <Route element={<AuthLayout />}>
            <Route path="/user" element={<span>Private</span>} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<span>Admin page</span>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
