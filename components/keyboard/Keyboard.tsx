"use client";

import { FC, memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { generateWords } from "@/store/slices/keyboard/keyboard";
import { Input } from "../input/Input";
import { Key } from "./key-item/Key";
import styles from "./Keyboard.module.scss";
import cn from "classnames";

export const Keyboard: FC = memo(() => {
  const { letters, currentWords, mistake } = useAppSelector(
    (state) => state.keyboard
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(generateWords());
  }, []);

  useEffect(() => {
    if (currentWords.current === currentWords.entered) {
      dispatch(generateWords());
    }
  }, [currentWords.entered]);

  return (
    <section className={styles["keyboard-box"]}>
      <div className={styles["keyboard-box_keyboard"]}>
        <Input />
        <div
          className={cn(styles["keyboard-box_keyboard_wrapper"], {
            [styles.error]: mistake,
          })}
        >
          {letters.map((item) => (
            <Key key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
});
