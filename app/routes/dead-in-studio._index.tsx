import type { MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';
import { HalloweenHeader } from '~/components/HalloweenHeader';

export const meta: MetaFunction = () => {
  return [{ title: 'The Coffin Fits | Dead In Studio' }];
};

function ListItem({ year }: { year: number }) {
  return (
    <li className="hover:text-primary my-32 text-center font-serif text-4xl">
      <Link to={`/dead-in-studio/${year}`}>{year}</Link>
    </li>
  );
}

export default function Index() {
  return (
    <main className="main-container">
      <HalloweenHeader title="Dead In Studio" />
      <ul className="flex w-full flex-col justify-center">
        {[2024, 2023].map((year) => (
          <ListItem key={year} year={year} />
        ))}
      </ul>
    </main>
  );
}
