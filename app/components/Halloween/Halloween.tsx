import { Calendar } from '../Calendar';
import { HalloweenHeader } from '../HalloweenHeader';

export default function Halloween() {
  return (
    <>
      <HalloweenHeader
        title="Countdown to Halloween"
        subtitle="with the Coffin Fits!"
      />
      <Calendar />
    </>
  );
}
