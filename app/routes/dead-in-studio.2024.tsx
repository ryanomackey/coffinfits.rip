import type { MetaFunction } from '@remix-run/cloudflare';
import { HalloweenHeader } from '~/components/HalloweenHeader';

export const meta: MetaFunction = () => {
  return [{ title: 'The Coffin Fits | Dead In Studio - 2024' }];
};

export default function Index() {
  return (
    <main className="main-container">
      <HalloweenHeader title="Dead In Studio" subtitle="2024" />
      <div className="my-8 text-center">
        <h2 className="my-32 text-2xl md:text-4xl">Coming Soon!</h2>
      </div>
    </main>
  );
}
