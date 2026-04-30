import { useState } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, Link } from 'react-router';
import './styles/style.scss';

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <button onClick={toggle} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg--base">
        <div className="sp-t-yellow">
          <div className="container">
            <div className="col">
              <nav>
                <Link style={{ paddingRight: '20px' }} to="/">
                  Home
                </Link>
                <Link style={{ paddingRight: '20px' }} to="/stylekit">
                  Stylekit
                </Link>
                <ThemeToggle />
              </nav>
            </div>
          </div>
        </div>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
