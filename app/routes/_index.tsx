import { json, type MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { Halloween } from '~/components/Halloween';
import dates from '~/data/dates';

export const meta: MetaFunction = () => {
  return [{ title: 'The Coffin Fits | Home' }];
};

export function loader() {
  return json(dates);
}

export default function Index() {
  const dates = useLoaderData<typeof loader>();

  return (
    <main className="main-container">
      <Halloween dates={dates} />
    </main>
  );
}
