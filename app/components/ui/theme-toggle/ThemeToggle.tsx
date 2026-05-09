import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.scss';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const currentTheme = savedTheme || (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'dark';

    setTheme(currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <button type="button" onClick={toggleTheme} className={styles['theme-toggle']} aria-label="Переключить тему">
      <span className={styles['theme-toggle__icon']}>{theme === 'dark' ? '🌞' : '🌙'}</span>
    </button>
  );
}
