import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { HalloweenHeader } from '~/components/HalloweenHeader';
import dates from '~/data/dates';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `The Coffin Fits | Halloween Day ${data?.day}` }];
};

export const loader = ({ params }: LoaderFunctionArgs) => {
  const date = Number(params.date);

  return json(dates[date - 1]);
};

export default function HalloweenDate() {
  const { day, href } = useLoaderData<typeof loader>();

  return (
    <main className="main-container">
      <HalloweenHeader title={`${day}`} />
      {href && (
        <iframe
          title="youtube embed"
          src={href}
          className="aspect-video w-full"
        />
      )}
    </main>
  );
}
