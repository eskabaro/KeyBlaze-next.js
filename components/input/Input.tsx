"use client";

import Image from "next/image";
import { FC, memo } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { enterSymbol } from "@/store/slices/keyboard/keyboard";
import styles from "./Input.module.scss";

export const Input: FC = memo(() => {
  const { currentWords } = useAppSelector((state) => state.keyboard);
  const dispatch = useAppDispatch();

  return (
    <label className={styles["input-box"]}>
      <span>{currentWords.current}</span>
      <input
        type="text"
        value={currentWords.entered}
        onChange={(e) => {
          const inputValue = e.currentTarget.value;

          dispatch(enterSymbol(inputValue.charAt(inputValue.length - 1)));
        }}
      />
      <button className={styles["input-box__btn"]}>
        <Image src="/svg/refresh.svg" alt="refresh" width={20} height={20} />
      </button>
    </label>
  );
});
