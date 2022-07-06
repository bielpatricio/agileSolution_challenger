import { Circle } from "phosphor-react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h2>Menu</h2>
      <div className={styles.userName}>
        <Circle size={24} weight="fill" color="#dc2626" />
        <h2>Gabriel Patricio</h2>
      </div>
      <h2>Sales Report</h2>
    </header>
  );
}
