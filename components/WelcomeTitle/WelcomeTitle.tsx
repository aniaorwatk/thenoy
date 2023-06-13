import labels from "../../public/labels/labels";
import styles from "./WelcomeTitle.module.css";

const WelcomeTitle = () => {
  return (
    <div className={styles.container}>
      <h1>{labels.namePage}</h1>
      <h3 className={styles.welcome}>{labels.welcomeText}</h3>
    </div>
  );
};

export default WelcomeTitle;
