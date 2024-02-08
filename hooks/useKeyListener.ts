import { useEffect, useState } from "react";

export const useKeyListener = (
  letter: string
): { isPressed: boolean; isMistake: boolean } => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [isMistake, setIsMistake] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === letter) {
        setIsPressed(true);
      } else {
        setIsMistake(true);
      }
    };

    const handleKeyRelease = (event: any) => {
      if (event.key === letter) {
        setIsPressed(false);
      } else {
        setIsMistake(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyRelease);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyRelease);
    };
  }, [letter]);

  return { isPressed, isMistake };
};
