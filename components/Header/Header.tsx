import Logo from "../Icons/Logo/Logo";
import LogoWithName from "../LogoWithName/LogoWithName";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.headerMobile}>
        <LogoWithName />
      </header>
      <header className={styles.headerDesktop}>
        <Logo />
        <Navigation />
      </header>
    </>
  );
};

export default Header;
