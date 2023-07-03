import Logo from "../Icons/Logo/Logo";
import LogoWithName from "../LogoWithName/LogoWithName";
import Navigation, { MediaItem } from "../Navigation/Navigation";
import styles from "./Header.module.css";

interface IHeaderType {
  data: MediaItem[];
}

const Header = ({ data }: IHeaderType) => {
  return (
    <>
      <header className={styles.headerMobile}>
        <LogoWithName />
      </header>
      <header className={styles.headerDesktop}>
        <Logo />
        <Navigation data={data} />
      </header>
    </>
  );
};

export default Header;
