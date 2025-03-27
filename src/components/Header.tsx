import Logo from "/rocket.svg";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="foguete" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
}
