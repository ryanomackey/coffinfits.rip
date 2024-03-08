import type { Show } from '~/types';

const shows: Show[] = [
  {
    date: '2023-11-30T19:00:00-0600',
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
    date: '2023-12-15T21:00:00-0600',
    venue: {
      name: 'Hotel Vegas',
      address: {
        line1: '1502 E 6th St',
        city: 'Austin',
        state: 'TX',
        zip: '78702',
      },
    },
    otherBands: [
      { name: 'Dead Tramps' },
      { name: 'Tear Dungeon' },
      { name: 'Shivering Demons' },
    ],
  },
  {
    date: '2023-12-28T20:00:00-0600',
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
    date: '2024-01-11T21:00:00-0600',
    venue: {
      name: 'Swan Dive',
      address: {
        line1: '615 Red River St',
        city: 'Austin',
        state: 'TX',
        zip: '78701',
      },
    },
    otherBands: [{ name: 'BOO85' }, { name: 'Digger of Dirt' }],
  },
  {
    date: '2024-01-19T19:00:00-0600',
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
  {
    date: '2024-01-30T20:00:00-0600',
    venue: {
      name: 'Mohawk',
      address: {
        line1: '912 Red River St',
        city: 'Austin',
        state: 'TX',
        zip: '78701',
      },
    },
    otherBands: [{ name: 'BOO85' }, { name: 'Painted Panic' }],
  },
  {
    date: '2024-02-23T20:00:00-0600',
    venue: {
      name: 'Nosferatu Festival @ Kick Butt Coffee',
      address: {
        line1: '5775 Airport Blvd',
        line2: 'Suite 725',
        city: 'Austin',
        state: 'TX',
        zip: '78752',
      },
    },
  },
  {
    date: '2024-03-14T19:00:00-0500',
    venue: {
      name: 'Deep-Fried Fest @ Voodoo Doughnut',
      address: {
        line1: '212 E 6th St',
        city: 'Austin',
        state: 'TX',
        zip: '78701',
      },
    },
    otherBands: [
      {
        name: 'TC Jester',
      },
      {
        name: 'CONNOR',
      },
      {
        name: 'Dyed Skies',
      },
      {
        name: 'Summer Affective Disorder',
      },
    ],
  },
];

export default shows;
