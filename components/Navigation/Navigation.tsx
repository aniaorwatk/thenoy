import LinkToAnotherPage from "../LinkToAnotherPage/LinkToAnotherPage";
import styles from "./Navigation.module.css";

export type MediaItem = {
  name: string;
  href: string;
  src: string;
};

const Navigation = ({ data }: { data: MediaItem[] }) => {
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
