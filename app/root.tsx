import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import './styles/style.scss';
// import Navbar from './components/layout/navbar/Navbar';

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
        {/* <Navbar /> */}
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
