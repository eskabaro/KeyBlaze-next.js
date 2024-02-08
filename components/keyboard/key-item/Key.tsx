"use client";

import { FC, memo, useEffect, useState } from "react";
import { KeyboardTettersType } from "@/store/slices/keyboard/keyboard.types";
import styles from "./Key.module.scss";
import cn from "classnames";
import { useKeyListener } from "@/hooks/useKeyListener";
import { useAppDispatch } from "@/store/hooks";
import { setMis } from "@/store/slices/keyboard/keyboard";

interface IKeyProps extends KeyboardTettersType {}

export const Key: FC<IKeyProps> = memo(({ letter }) => {
  const { isMistake, isPressed } = useKeyListener(letter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMis(isMistake));
  }, [isMistake]);

  return (
    <button
      className={cn(styles.key, {
        [styles[letter]]: letter.length >= 2,
        [styles["is-press"]]: isPressed,
      })}
    >
      {letter === " " ? "Space" : letter}
    </button>
  );
});
