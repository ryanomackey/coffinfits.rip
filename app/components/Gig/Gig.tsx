import { formatInTimeZone } from 'date-fns-tz';
import type { Show } from '~/types';

interface GigProps {
  show: Show;
}

const Gig = ({ show }: GigProps) => {
  const { venue, otherBands } = show;
  const { address } = venue;
  const date = formatInTimeZone(new Date(show.date), 'UTC', `PPPP`);

  return (
    <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
      <div className="flex flex-col pb-4">
        <span className="text-xl">{date}</span>
        {show.time && <span className="text-sm">{show.time}</span>}
      </div>
      <div className="flex flex-col pb-4">
        <span className="text-xl">{venue.name}</span>
        <div className="text-sm">
          <span className="block">{address.line1}</span>
          <span>
            {address.city}, {address.state} {address.zip}
          </span>
        </div>
      </div>
      {otherBands && (
        <div className="flex flex-col pb-4">
          <span className="text-xl">With our friends</span>
          <span className="text-sm">
            {otherBands.map(({ name }) => name).join(', ')}
          </span>
        </div>
      )}
    </div>
  );
};

export default Gig;
