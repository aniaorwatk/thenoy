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
  const linksToMedia = filteredMedia.map((item, index) => {
    let cardColor = "";
    if (item.name === "Pinterest") {
      cardColor = "grapefruit";
    } else if (item.name === "YouTube") {
      cardColor = "tangerine";
    } else if (item.name === "Twitch") {
      cardColor = "orange";
    }

    // const addQute = index === 0 ? styles.addQute : "";
    return (
      <LinkToAnotherPage
        linkHref={item.href}
        key={item.name}
        // className={addQute}
      >
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
      <div className={styles.media}>
        {linksToMedia}
        <YouWillFindMe />
        {/* {filteredMedia.length > 0 && <YouWillFindMe />} */}
      </div>
    </section>
  );
};

export default LeftSide;
