import styles from "./GradienStripe.module.css";

interface IGradienStripeType {
  color: "dark" | "light" | "purple" | "darkPurple" | "blue";
  className?: string | undefined;
  isHorizontal?: boolean;
  isSmall?: boolean;
}

const GradienStripe = ({
  color,
  isHorizontal,
  isSmall,
  className,
}: IGradienStripeType) => {
  const stripeClass = `${styles[color]} ${isSmall ? styles.small : ""} ${
    isHorizontal ? styles.horizontalStrip : ""
  }`;

  const customClass = `${className ? styles[className] : ""}`;

  return <div className={`${styles.stripe} ${className} ${stripeClass}`}></div>;
};

export default GradienStripe;
