import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import navigationData from "./navigationData"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// Types
interface NavLink {
  title: string
  href: string
  description?: string
}

interface NavLinkWithChildren extends NavLink {
  children?: NavLink[]
}

interface NavigationProps {
  theme?: 'dark' | 'light'
}

// ListItem Component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { 
    title: string;
    theme?: 'dark' | 'light';
  }
>(({ className, title, children, theme = 'dark', ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            theme === 'dark' 
              ? "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" 
              : "hover:bg-orange-100 hover:text-black focus:bg-orange-100 focus:text-black",
            className
          )}
          href={props.href || "#"}
          {...props}
        >
          <div className={cn(
            "text-sm font-semibold mb-3 leading-none",
            theme === 'light' && "text-black"
          )}>
            {title}
          </div>
          <p className={cn(
            "line-clamp-2 text-sm leading-snug",
            theme === 'dark' ? "text-muted-foreground" : "text-gray-600"
          )}>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

// Main Navigation Component
export function Navigation({ theme = 'dark' }: NavigationProps) {
  const renderMainLink = (link: NavLinkWithChildren) => {
    if (link.children) {
      return (
        <NavigationMenuItem key={link.href}>
          <NavigationMenuTrigger 
            className={cn(
              theme === 'dark' 
                ? "hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
                : "hover:bg-orange-100 hover:text-black data-[state=open]:bg-orange-100 data-[state=open]:text-black",
              theme === 'light' && "text-black"
            )}
          >
            {link.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={cn(
              "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
              theme === 'dark' ? "bg-white text-gray-900" : "bg-white text-gray-900"
            )}>
              {link.children.map((child) => (
                <ListItem
                  key={child.title}
                  title={child.title}
                  href={child.href}
                  theme={theme}
                  className={cn(
                    "p-4 space-y-2",
                    theme === 'dark' 
                      ? "hover:bg-orange-50 hover:text-black"
                      : "hover:bg-orange-50 hover:text-black"
                  )}
                >
                  {child.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      )
    }

    return (
      <NavigationMenuItem key={link.href}>
        <Link href={link.href} legacyBehavior passHref>
          <NavigationMenuLink 
            className={cn(
              navigationMenuTriggerStyle(),
              theme === 'dark' 
                ? "hover:bg-accent hover:text-accent-foreground"
                : "hover:bg-orange-100 hover:text-black",
              theme === 'light' && "text-black"
            )}
          >
            {link.title}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenu 
      className={cn(
        "rounded-md",
        theme === 'dark' 
          ? "bg-zinc-900 text-white" 
          : "bg-transparent"
      )}
    >
      <NavigationMenuList className="py-2">
        {navigationData.mainLinks.map(renderMainLink)}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation


