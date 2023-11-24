import type { Show } from '~/types';

const shows: Show[] = [
  {
    date: '2023-11-30',
    time: 'Doors at 7:00 PM',
    venue: {
      name: 'How Much?! Studios',
      address: {
        line1: '6910 Shirley Ave',
        line2: 'Suite L',
        city: 'Austin',
        state: 'TX',
        zip: '78752',
      },
    },
    otherBands: [{ name: 'BOO85' }],
  },
  {
    date: '2023-12-14',
    time: 'Doors at 9:00 PM',
    venue: {
      name: 'Swan Dive',
      address: {
        line1: '615 Red River St',
        city: 'Austin',
        state: 'TX',
        zip: '78701',
      },
    },
    otherBands: [{ name: 'BOO85' }, { name: 'Solar Moth' }],
  },
  {
    date: '2023-12-15',
    venue: {
      name: 'Hotel Vegas',
      address: {
        line1: '1502 E 6th St',
        city: 'Austin',
        state: 'TX',
        zip: '78702',
      },
    },
  },
  {
    date: '2023-12-28',
    venue: {
      name: 'The Hole in the Wall',
      address: {
        line1: '2538 Guadalupe St',
        city: 'Austin',
        state: 'TX',
        zip: '78705',
      },
    },
  },
  {
    date: '2024-01-19',
    venue: {
      name: 'Rio Market',
      address: {
        line1: '620 W 29th St',
        city: 'Austin',
        state: 'TX',
        zip: '78705',
      },
    },
    otherBands: [{ name: 'BOO85' }, { name: 'Jay Wanderer' }],
  },
];

export default shows;
