import { useState } from 'react';
import styles from './ThemeToggle.module.scss';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    }

    return 'dark';
  });

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';

    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles['theme-toggle']}
      aria-label="Переключить тему"
    >
      <span className={styles['theme-toggle__icon']}>
        {theme === 'dark' ? '🌞' : '🌙'}
      </span>
    </button>
  );
}