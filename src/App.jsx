import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PlanDay from './pages/PlanDay';
import Dashboard from './pages/Dashboard';
import FocusMode from './pages/FocusMode';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plan" element={<PlanDay />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/focus" element={<FocusMode />} />
      </Routes>
    </Router>
  );
}

export default App;