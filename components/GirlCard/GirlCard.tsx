import Card from "../Card/Card";
import styles from "./GirlCard.module.css";

const GirlCard = () => {
  return (
    <div className={styles.container}>
      <Card color="orangeLight">
        <div className={styles.firstPart}></div>
      </Card>
      <Card color="blueLight">
        <div className={styles.secondPart}></div>
      </Card>
    </div>
  );
};

export default GirlCard;
