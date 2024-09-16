import{ Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home, Leaderboard, Play, Login } from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className ="bg-slate-300/20" >
      <Router>
        {/* <Navbar /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/leaderboard" element={<Leaderboard /> } />
          <Route path="/play" element={<Play /> } />
          <Route path="/login" element={<Login /> } />
        </Routes>
      </Router>
    </main>
  )
}

export default App