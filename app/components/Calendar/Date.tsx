import { Link } from '@remix-run/react';
import clsx from 'clsx';

interface DateProps {
  day: number;
  fullWidth?: boolean;
}

export default function Date({ day, fullWidth = false }: DateProps) {
  return (
    <Link
      to={`/halloween/${day}`}
      className={clsx(
        'flex items-center justify-center rounded-md border-2 border-orange-600 text-center font-["Creepster"] text-5xl shadow-lg shadow-orange-900 hover:cursor-pointer hover:bg-orange-600 md:text-9xl',
        fullWidth ? 'col-span-5 aspect-[5/1]' : 'aspect-square',
      )}
    >
      <li>{day}</li>
    </Link>
  );
}
