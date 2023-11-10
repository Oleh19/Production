import { Suspense } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames';
import { AboutPage } from '../pages/AboutPage';
import { MainPage } from '../pages/MainPage';



const App = () => {
  const { theme, toggleTheme } = useTheme();
  const bool = true;

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to='/'>Main Page</Link>
      <Link to='/about'>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
