import labels from "../../public/labels/labels";
import Logo from "../Icons/Logo/Logo";
import styles from "./LogoWithName.module.css";

const LogoWithName = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <Logo type="logoWhite" />
      </div>
      <h2>{labels.namePage}</h2>
    </div>
  );
};

export default LogoWithName;
