import Link from "next/link";
import Logo from "../Icons/Logo";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const dataNavigation = [
    {
      name: "Twitch",
      href: "https://www.twitch.tv/thenoyart/about",
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@thenoyart",
    },
    {
      name: "Instagran",
      href: "https://www.instagram.com/thenoyart/",
    },
    {
      name: "Pinterest",
      href: "",
    },
    {
      name: "Tiktok",
      href: "",
    },
    {
      name: "Kontakt",
      href: "paulinatargo@gmail.com",
    },
  ];

  const links = dataNavigation.map((link) => {
    return (
      <a
        href={link.name === "Kontakt" ? `mailto:${link.href}` : `${link.href}`}
        key={link.name}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.name}
      </a>
    );
  });

  return (
    <div className={styles.contener}>
      <Logo />
      <nav className={styles.navigation}>{links}</nav>
    </div>
  );
};

export default Navigation;
