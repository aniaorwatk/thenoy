import data from "../../data/data";
import Avocado from "../Avocado/Avocado";
import Card from "../Card/Card";
import LinkToAnotherPage from "../LinkToAnotherPage/LinkToAnotherPage";
import LogoWithName from "../LogoWithName/LogoWithName";
import styles from "./LeftSide.module.css";

const LeftSide = () => {
  const linksToMedia = data
    .filter(
      (item) =>
        item.name === "Twitch" ||
        item.name === "YouTube" ||
        item.name === "Pinterest"
    )
    .map((item) => {
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
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundImage: `url(${item.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            {item.name}
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
      <div className={styles.media}>{linksToMedia}</div>
    </section>
  );
};

export default LeftSide;
