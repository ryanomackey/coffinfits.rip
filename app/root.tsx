import type { LinksFunction } from '@remix-run/cloudflare';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import '~/tailwind.css';
import { Navigation } from '~/components/Navigation';
import { Footer } from '~/components/Footer';

export const links: LinksFunction = () => [
  // Fonts
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Creepster:400&display=swap',
  },
  // Favicon stuff
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/site.webmanifest' },
  { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A vaguely psychedelic sort of diet-goth™ garage rock band based in Austin, TX."
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />
      </head>
      <body className="grid h-screen grid-rows-[auto_1fr_auto]">
        <Navigation />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "a92ac69317134f398cc770fe702cb659"}'
        />
        {/* End Cloudflare Web Analytics */}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
