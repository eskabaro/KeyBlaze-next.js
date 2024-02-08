"use client";

import { FC, LegacyRef } from "react";
import styles from "./Modal.module.scss";
import cn from "classnames";

interface IModalProps {
  refModal: LegacyRef<HTMLDivElement> | undefined;
  isShow: boolean;
}

export const Modal: FC<IModalProps> = ({ refModal, isShow }) => {
  return (
    <div
      className={cn(styles["modal-bg"], {
        [styles.active]: isShow,
      })}
    >
      <div
        ref={refModal}
        className={cn(styles["modal-bg_modal"], {
          [styles.active]: isShow,
        })}
      ></div>
    </div>
  );
};
