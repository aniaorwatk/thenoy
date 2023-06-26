import Image from "next/image";
import data from "../../data/data";
import Avocado from "../Avocado/Avocado";
import Card from "../Card/Card";
import LinkToAnotherPage from "../LinkToAnotherPage/LinkToAnotherPage";
import LogoWithName from "../LogoWithName/LogoWithName";
import YouWillFindMe from "../YouWillFindMe/YouWillFindMe";
import styles from "./LeftSide.module.css";

const LeftSide = () => {
  const filteredMedia = data.filter(
    (item) =>
      item.name === "Twitch" ||
      item.name === "YouTube" ||
      item.name === "Pinterest"
  );
  const linksToMedia = filteredMedia.map((item) => {
    let cardColor = "";
    if (item.name === "Pinterest") {
      cardColor = "grapefruit";
    } else if (item.name === "YouTube") {
      cardColor = "tangerine";
    } else if (item.name === "Twitch") {
      cardColor = "orange";
    }

    return (
      <LinkToAnotherPage linkHref={item.href} key={item.name}>
        <Card color={cardColor} isLink>
          <Image src={item.src} alt={""} width={45} height={45} />
          <span>{item.name}</span>
        </Card>
      </LinkToAnotherPage>
    );
  });

  return (
    <section className={styles.leftSide}>
      <div className={styles.logoBox}>
        <div className={styles.logo}>
          <Card color="grass">
            <LogoWithName />
          </Card>
        </div>
        <Avocado />
      </div>
      <div className={styles.media}>
        {linksToMedia}
        <YouWillFindMe />
      </div>
    </section>
  );
};

export default LeftSide;
