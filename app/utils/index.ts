export const getHalloweenCountdownHelpers = (date: number) => {
  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const TARGET_MONTH = 9; // October (zero-indexed)
  const TARGET_YEAR = 2023;
  const isAtLeastOctober2023 =
    currentYear >= TARGET_YEAR && currentMonth >= TARGET_MONTH;

  const centralDate = +today.toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    day: 'numeric',
  });
  const dateIsAvailable = centralDate >= date;

  return {
    isAtLeastOctober2023,
    dateIsAvailable,
  };
};
