import labels from "../../public/labels/labels";
import styles from "./WelcomeTitle.module.css";

const WelcomeTitle = () => {
  return (
    <>
      <h1>{labels.namePage}</h1>
      <h3 className={styles.welcome}>{labels.welcomeText}</h3>
    </>
  );
};

export default WelcomeTitle;
