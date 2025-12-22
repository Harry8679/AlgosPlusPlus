import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import AlgorithmPage from './pages/AlgorithmPage';
// import Layout from '@/components/Layout';
// import HomePage from '@/pages/HomePage';
// import ChapterPage from '@/pages/ChapterPage';
// import AlgorithmPage from '@/pages/AlgorithmPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/chapter/:chapterId" element={<ChapterPage />} />
          <Route path="/algorithm/:algoId" element={<AlgorithmPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;