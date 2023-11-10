import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Link } from 'react-router-dom';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const bool = true;

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to='/'>Main Page</Link>
      <Link to='/about'>About Page</Link>
      <AppRouter />
    </div>
  );
};

export default App;
