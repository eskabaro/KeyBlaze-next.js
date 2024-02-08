import { Keyboard } from "@/components/keyboard/Keyboard";
import styles from "./Home.module.scss";
// here was loading animation

export default function HomePage() {
  return (
    <main className={styles["keyboard-box"]}>
      <Keyboard />
    </main>
  );
}
