import GradienStripe from "./../GradienStripe/GradienStripe";
import styles from "./Background.module.css";

interface Stripe {
  index: number;
  color: "dark" | "light";
}

const Background = () => {
  const stripes: Stripe[] = Array.from({ length: 4 }, (_, index) => ({
    index,
    color: index % 2 === 0 ? "dark" : "light",
  }));

  const calculateMargin = (index: number) => {
    const percentage = 13 - index * 2;
    return `${percentage}%`;
  };

  const boxWithStripes = stripes.map((stripe) => (
    <GradienStripe
      key={stripe.index}
      color={stripe.color}
      margin={calculateMargin(stripe.index)}
    />
  ));

  return (
    <div className={styles.background}>
      <div className={styles.box}>{boxWithStripes}</div>
      <div className={`${styles.box} ${styles.boxReverse}`}>
        {boxWithStripes}
      </div>
    </div>
  );
};

export default Background;
