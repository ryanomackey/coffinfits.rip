import { Link } from '@remix-run/react';

export default function Navigation() {
  return (
    <nav className="font-['Creepster'] text-3xl shadow-md shadow-orange-600">
      <div className="main-container flex justify-between py-1">
        <Link to="/">coffinfits.rip</Link>
        <Link to="/lore">Lore</Link>
      </div>
    </nav>
  );
}
