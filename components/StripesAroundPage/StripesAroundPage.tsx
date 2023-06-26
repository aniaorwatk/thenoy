import GradienStripe from "../GradienStripe/GradienStripe";
import styles from "./StripesAroundPage.module.css";

const StripesAroundPage = () => {
  return (
    <>
      <GradienStripe
        color="darkPurple"
        isSmall
        className={styles.smallStripe}
      />
      <GradienStripe color="purple" className={styles.purpleStripe} />
    </>
  );
};

export default StripesAroundPage;
