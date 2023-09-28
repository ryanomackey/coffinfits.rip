interface HalloweenHeaderProps {
  title: string;
  subtitle?: string;
}

export default function HalloweenHeader({
  title,
  subtitle,
}: HalloweenHeaderProps) {
  return (
    <div className="my-8 text-center">
      <h1 className="mb-4 font-['Creepster'] text-7xl text-orange-600 md:text-9xl">
        {title}
      </h1>
      {subtitle && (
        <span className="font-serif text-2xl italic md:text-4xl">
          {subtitle}
        </span>
      )}
    </div>
  );
}
