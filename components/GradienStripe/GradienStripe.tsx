import styles from "./GradienStripe.module.css";

interface GradienStripeProps {
  color: "dark" | "light";
  margin: string;
}

const GradienStripe: React.FC<GradienStripeProps> = ({ color, margin }) => {
  const stripeClass = color === "dark" ? styles.dark : styles.light;
  const stripeStyle = { margin };

  return (
    <div
      className={`${styles.stripe} ${stripeClass}`}
      style={stripeStyle}
    ></div>
  );
};

export default GradienStripe;
