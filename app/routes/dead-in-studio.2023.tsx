import type { MetaFunction } from '@remix-run/cloudflare';
import { Calendar } from '~/components/Calendar';
import { HalloweenHeader } from '~/components/HalloweenHeader';

export const meta: MetaFunction = () => {
  return [{ title: 'The Coffin Fits | Dead In Studio 2023' }];
};

export default function Index() {
  return (
    <main className="main-container">
      <HalloweenHeader title="Dead In Studio" subtitle="2023" />
      <Calendar />
    </main>
  );
}
