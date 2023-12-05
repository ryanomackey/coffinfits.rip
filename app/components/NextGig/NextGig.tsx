import shows from '~/data/shows';
import { upcomingShowsFilter } from '~/utils';
import { Gig } from '~/components/Gig';

const NextGig = () => {
  const nextShow = shows.filter(upcomingShowsFilter)[0];

  if (nextShow) {
    return (
      <section className="my-8">
        <div className="flex flex-col rounded-md border-2 border-orange-600 p-4 shadow-lg shadow-orange-900">
          <p className="mb-2 text-3xl font-bold">Next show</p>
          <Gig show={nextShow} />
          <a
            href="/shows"
            className="text-right underline hover:text-orange-600"
          >
            View all upcoming shows
          </a>
        </div>
      </section>
    );
  }

  return null;
};

export default NextGig;
