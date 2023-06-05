import styles from "./GradienStripe.module.css";

interface IGradienStripeType {
  color: "dark" | "light";
}

const GradienStripe = ({ color }: IGradienStripeType) => {
  const stripeClass = color === "dark" ? styles.dark : styles.light;

  return <div className={`${styles.stripe} ${stripeClass}`}></div>;
};

export default GradienStripe;
