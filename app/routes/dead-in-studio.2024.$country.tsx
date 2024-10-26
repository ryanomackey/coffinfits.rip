import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { HalloweenHeader } from '~/components/HalloweenHeader';
import { capitalizeFirstLetter } from '~/utils';

export const loader = ({ params }: LoaderFunctionArgs) => {
  let href;

  switch (params.country) {
    case 'brazil':
      href = 'https://youtube.com/embed/4xcfT8MsrbM';
      break;
    case 'france':
      href = 'https://youtube.com/embed/bX4PlluVGZE';
      break;
    case 'germany':
      href = 'https://youtube.com/embed/l2KyKXH13W8';
      break;
    case 'japan':
      href = 'https://youtube.com/embed/V0juMvi1iVk';
      break;
  }

  return {
    country: capitalizeFirstLetter(params.country || ''),
    href,
  };
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `The Coffin Fits | Dead In Studio 2024 | ${data?.country} ` },
  ];
};

export default function Index() {
  const { country, href } = useLoaderData<typeof loader>();

  return (
    <main className="main-container">
      <HalloweenHeader title={country} />
      <iframe
        title="youtube embed"
        src={href}
        className="aspect-video w-full"
      />
    </main>
  );
}
