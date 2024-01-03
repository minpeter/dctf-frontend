"use client";

import Link from "next/link";
import { Logout } from "@/api/auth";
import { checkAdmin } from "@/api/admin";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);

  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    setIsClient(true);

    checkAdmin().then(setAdmin);
  }, []);

  let loggedOut = false;

  if (typeof window !== "undefined") {
    loggedOut = !localStorage.token;
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {admin && (
          <NavigationMenuItem>
            <Link href="/admin" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Admin
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/scores" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Scoreboard
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {isClient && loggedOut ? (
          <NavigationMenuItem>
            <Link href="/login" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Login
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ) : (
          <>
            <NavigationMenuItem>
              <Link href="/profile" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Profile
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/challs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Challenges
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <AlertDialog>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <AlertDialogTrigger>Logout</AlertDialogTrigger>
                </NavigationMenuLink>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Logout</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to logout?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={Logout}>
                      Logout
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
