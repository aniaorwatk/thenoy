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
    const disabled = !link.href ? styles.disabledLink : "";
    return (
      <a
        href={link.name === "Kontakt" ? `mailto:${link.href}` : `${link.href}`}
        key={link.name}
        target="_blank"
        rel="noopener noreferrer"
        className={disabled}
      >
        {link.name}
      </a>
    );
  });

  return <nav className={styles.navigation}>{links}</nav>;
};

export default Navigation;
