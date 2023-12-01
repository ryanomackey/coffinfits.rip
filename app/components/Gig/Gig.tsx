import { format, addHours } from 'date-fns';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import type { Show } from '~/types';

interface GigProps {
  show: Show;
}

const Gig = ({ show }: GigProps) => {
  const { venue, otherBands } = show;
  const { address } = venue;
  const date = new Date(show.date);
  const approximateDuration = otherBands?.length ? otherBands.length + 1 : 1;

  const addToCalendarButtonOverrides = `
    --btn-background: rgb(23, 23, 23);
    --btn-background-hover: rgb(23, 23, 23);
    --btn-border: rgb(234, 88, 12);
    --btn-text: rgb(255, 255, 255);
    --btn-text-hover: rgb(255, 255, 255);
    --font: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
  `;

  return (
    <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
      <div className="flex flex-col pb-4">
        <span className="text-xl">{format(date, `PPPP`)}</span>
        <span className="text-sm">{format(date, 'p')}</span>
        <div className="ml-[-5px]">
          <AddToCalendarButton
            name={`Coffin Fits @ ${venue.name}`}
            options={['Apple', 'Google', 'Outlook.com']}
            location={`${address.line1}, ${
              address.line2 ? address.line2 + ',' : ''
            } ${address.city}, ${address.state} ${address.zip}`}
            startDate={format(date, 'yyyy-MM-dd')}
            endDate={format(addHours(date, approximateDuration), 'yyyy-MM-dd')}
            startTime={format(date, 'HH:mm')}
            endTime={format(addHours(date, approximateDuration), 'HH:mm')}
            timeZone="America/Chicago"
            size="2"
            hideCheckmark
            styleDark={addToCalendarButtonOverrides}
            styleLight={addToCalendarButtonOverrides}
          />
        </div>
      </div>
      <div className="flex flex-col pb-4">
        <span className="text-xl">{venue.name}</span>
        <div className="text-sm">
          <span className="block">{address.line1}</span>
          {address.line2 && <span className="block">{address.line2}</span>}
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
