"use client";

import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/button";

export const ThemeSwitcher: FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Button size="sm" variant="flat" onClick={() => setTheme("light")}>
        Light
      </Button>
      <Button size="sm" variant="flat" onClick={() => setTheme("dark")}>
        Dark
      </Button>
    </div>
  );
};
