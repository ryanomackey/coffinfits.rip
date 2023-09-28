import { Calendar } from '../Calendar';
import type { Date } from '../../types/';
import { HalloweenHeader } from '../HalloweenHeader';

interface HalloweenProps {
  dates: Date[];
}

export default function Halloween({ dates }: HalloweenProps) {
  return (
    <>
      <HalloweenHeader
        title="Countdown to Halloween"
        subtitle="with the Coffin Fits!"
      />
      <Calendar dates={dates} />
    </>
  );
}
