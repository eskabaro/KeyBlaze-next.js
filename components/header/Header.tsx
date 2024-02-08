"use client";

import Image from "next/image";
import { FC } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { Modal } from "../modal/Modal";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  const { ref, isShow, setIsShow } = useClickOutside(false);

  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <h1>KeyBlaze</h1>
      </div>
      <button
        className={styles.header_settings}
        onClick={() => setIsShow(!isShow)}
      >
        <Image src="/svg/settings.svg" alt="settings" width={20} height={20} />
      </button>
      <Modal refModal={ref} isShow={isShow} />
    </header>
  );
};
