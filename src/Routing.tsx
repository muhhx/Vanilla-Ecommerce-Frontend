import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Layout from "./components/Layout";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<span>Teste</span>} />
          <Route path="/register" element={<span>Registrar</span>} />
          <Route path="/login" element={<span>Login</span>} />
          <Route path="/user" element={<span>Private</span>} />
        </Route>
      </Routes>
    </Router>
  );
}
