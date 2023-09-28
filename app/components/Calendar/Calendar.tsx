import DateComponent from './Date';
import type { Date } from '../../types/';

interface CalendarProps {
  dates: Date[];
}

export default function Calendar({ dates }: CalendarProps) {
  return (
    <ul className="grid grid-cols-5 gap-2 pb-8">
      {dates.slice(0, 30).map(({ day, href }) => (
        <DateComponent key={day} day={day} />
      ))}
      {dates.slice(30).map(({ day, href }) => (
        <DateComponent key={day} day={day} fullWidth />
      ))}
    </ul>
  );
}
