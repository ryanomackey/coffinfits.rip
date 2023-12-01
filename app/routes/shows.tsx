import { type MetaFunction } from '@remix-run/cloudflare';
import { isAfter } from 'date-fns';
import { Gig } from '~/components/Gig';
import shows from '~/data/shows';

export const meta: MetaFunction = () => {
  return [{ title: 'The Coffin Fits | Shows' }];
};

export default function Lore() {
  return (
    <main className="main-container">
      <h1 className="py-8 text-2xl font-bold">Upcoming shows</h1>
      <ul className="divide-y divide-orange-600 py-4">
        {shows
          .filter((show) => {
            const date = new Date(show.date);

            return isAfter(date, new Date());
          })
          .map((show, index) => {
            return (
              <li key={index}>
                <Gig show={show} />
              </li>
            );
          })}
      </ul>
    </main>
  );
}
