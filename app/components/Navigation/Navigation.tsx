import { Link } from '@remix-run/react';

export default function Navigation() {
  return (
    <nav className="font-['Creepster'] text-3xl shadow-md shadow-orange-600">
      <div className="main-container flex justify-between py-1">
        <Link className="hover:text-orange-600" to="/">
          coffinfits.rip
        </Link>
        <div className="flex space-x-4">
          <Link className="hover:text-orange-600" to="/shows">
            Shows
          </Link>
          <Link className="hover:text-orange-600" to="/lore">
            Lore
          </Link>
        </div>
      </div>
    </nav>
  );
}
