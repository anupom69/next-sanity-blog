import { Lilita_One } from "next/font/google";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Skeleton,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import { Suspense } from "react";

const lilita = Lilita_One({ weight: "400", subsets: ["latin"] });

export default function Nav() {
  return (
    <Navbar maxWidth="xl">
      <NavbarBrand>
        <Link href={`/`} className={`${lilita.className} text-3xl font-bold`}>
          Techie<span className="text-purple-500">Tales</span>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Suspense fallback={<Sk />}>
            <ThemeSwitcher />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export function Sk() {
  return <Skeleton className="h-7 rounded-full w-12" />;
}
