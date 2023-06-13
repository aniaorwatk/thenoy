import Logo from "../Icons/Logo";
import LinkToAnotherPage from "../LinkToAnotherPage/LinkToAnotherPage";
import data from "./../../data/data";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const links = data.map((link) => {
    const disabled = !link.href ? styles.disabledLink : "";
    return (
      <LinkToAnotherPage
        key={link.name}
        linkName={link.name}
        linkHref={link.href}
        className={disabled}
      >
        {link.name}
      </LinkToAnotherPage>
    );
  });

  return <nav className={styles.navigation}>{links}</nav>;
};

export default Navigation;
