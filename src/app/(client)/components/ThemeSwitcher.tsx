"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    
      <Switch
        color="secondary"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        defaultSelected={theme == "dark"}
        onChange={() => {
          setTheme(theme == "light" ? "dark" : "light");
        }}
      />
    
  );
}
