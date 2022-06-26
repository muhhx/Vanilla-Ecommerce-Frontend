import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Layout from "./components/Layout";
import Home from "./pages/Home";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<span>Registrar</span>} />
          <Route path="/login" element={<span>Login</span>} />
          <Route path="/user" element={<span>Private</span>} />
        </Route>
      </Routes>
    </Router>
  );
}
