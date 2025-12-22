import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LevelPage from './pages/LevelPage';
import AlgorithmPage from './pages/AlgorithmPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/level/:levelId" element={<LevelPage />} />
          <Route path="/algorithm/:algoId" element={<AlgorithmPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;