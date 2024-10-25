import type { MetaFunction } from '@remix-run/cloudflare';
import { NextGig } from '~/components/NextGig';

export const meta: MetaFunction = () => {
  return [{ title: 'The Coffin Fits | Home' }];
};

export default function Index() {
  return (
    <main className="main-container">
      <NextGig />
    </main>
  );
}
