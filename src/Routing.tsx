import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<span>Teste</span>} />
        <Route path="/register" element={<span>Registrar</span>} />
        <Route path="/login" element={<span>Login</span>} />
        <Route path="/private" element={<span>Private</span>} />
      </Routes>
    </Router>
  );
}
