import labels from "../../public/labels/labels";
import Card from "../Card/Card";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Card color="orange">{labels.footer.created}</Card>
      <Card color="purple">{labels.footer.designed}</Card>
      <Card color="grass">{labels.footer.images}</Card>
    </footer>
  );
};

export default Footer;
