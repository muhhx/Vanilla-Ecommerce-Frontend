import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Layout from "./components/Layout";
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
          <Route path="/user" element={<span>Private</span>} />
        </Route>
      </Routes>
    </Router>
  );
}
