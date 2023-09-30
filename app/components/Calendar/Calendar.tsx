import DateComponent from './Date';

export default function Calendar() {
  return (
    <ul className="grid grid-cols-5 gap-2 pb-8">
      {Array(30)
        .fill({})
        .map((_, index) => (
          <DateComponent key={index} day={index + 1} />
        ))}
      <DateComponent day={31} fullWidth />
    </ul>
  );
}
