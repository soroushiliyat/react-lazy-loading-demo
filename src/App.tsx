import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">خانه</Link>
        <Link to="/about">درباره ما</Link>
      </nav>

      <Suspense fallback={<p>در حال بارگذاری...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;