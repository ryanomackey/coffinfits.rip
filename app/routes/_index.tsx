import type { MetaFunction } from '@remix-run/cloudflare';
import { Halloween } from '~/components/Halloween';

export const meta: MetaFunction = () => {
  return [{ title: 'The Coffin Fits | Home' }];
};

export default function Index() {
  return (
    <main className="main-container">
      <Halloween />
    </main>
  );
}
