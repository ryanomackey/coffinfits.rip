import * as React from 'react';
import { Link } from '@remix-run/react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu';
import { cn } from '~/lib/utils';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground hover:text-primary focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="font-[Creepster] text-sm font-medium leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default function Navigation() {
  return (
    <nav className="w-full shadow-md shadow-primary">
      <div className="main-container flex justify-between py-4">
        <Link className="font-['Creepster'] text-3xl hover:text-primary" to="/">
          coffinfits.rip
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="mr-[-16px] font-[Creepster] text-3xl">
                Menu
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[275px] gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/shows" title="Shows">
                    See where we're playing next.
                  </ListItem>
                  <ListItem href="/dead-in-studio" title="Dead In Studio">
                    Catch up on our annual Halloween tradition.
                  </ListItem>
                  <ListItem href="/lore" title="Lore">
                    Lean how The Coffin Fits came to be.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
