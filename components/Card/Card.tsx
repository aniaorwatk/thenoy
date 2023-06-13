import styles from "./Card.module.css";

interface ICardType {
  children: React.ReactNode;
  isLink?: boolean;
  color:
    | "tangerine"
    | "grapefruit"
    | "orange"
    | "orangeLight"
    | "pink"
    | "plum"
    | "purple"
    | "lemon"
    | "gray"
    | "avocado"
    | "grass"
    | "blueLight"
    | string;
}

const Card = ({ children, isLink, color }: ICardType) => {
  const classComponent = `${styles.card} ${styles[color]}`;
  const classLink = `${styles.isLink} ${classComponent}`;
  const classesCard = isLink ? classLink : classComponent;
  return <div className={classesCard}>{children}</div>;
};

export default Card;
