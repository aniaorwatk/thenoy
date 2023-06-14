import Image from "next/image";
import Card from "../Card/Card";
import data from "./../../data/data";
import LinkToAnotherPage from "../LinkToAnotherPage/LinkToAnotherPage";
import styles from "./Contact.module.css";
import WriteToMe from "../WriteToMe/WriteToMe";
import YouWillFindMe from "../YouWillFindMe/YouWillFindMe";

const Contact = () => {
  const contact = data
    .filter((item) => item.name === "Kontakt")
    .map((link) => {
      return (
        <LinkToAnotherPage
          key={link.name}
          linkName={link.name}
          linkHref={link.href}
        >
          <Card color="purple" isLink>
            <span className={styles.centerOfCard}>
              <span>{link.name}</span>
              <span>{link.href}</span>
            </span>
          </Card>
        </LinkToAnotherPage>
      );
    });

  return (
    <div className={styles.container}>
      <WriteToMe />
      <Card color="gray">
        <Image
          src="/images/handsMail.png"
          width={66}
          height={48}
          alt="zdjęcie koperty"
        />
      </Card>
      {contact}
    </div>
  );
};

export default Contact;
