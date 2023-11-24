export type Date = {
  day: number;
  href: string;
};

type Address = {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
};

type Venue = {
  name: string;
  address: Address;
};

type Band = {
  name: string;
};

export type Show = {
  date: string;
  time?: string;
  venue: Venue;
  otherBands?: Band[];
};
