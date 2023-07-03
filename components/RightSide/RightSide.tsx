import Image from "next/image";
import imageLemon from "./../../assets/orange.svg";
import Card from "../Card/Card";
import Contact from "../Contact/Contact";
import LinkToAnotherPage from "../LinkToAnotherPage/LinkToAnotherPage";
import { MediaItem } from "../Navigation/Navigation";
import styles from "./RightSide.module.css";

interface IRightSideType {
  data: MediaItem[];
}

const RightSide = ({ data }: IRightSideType) => {
  const linksToMedia = data
    .filter((item) => item.name === "Instagram" || item.name === "TikTok")
    .map((item) => {
      let cardColor = "";
      if (item.name === "Instagram") {
        cardColor = "pink";
      } else if (item.name === "TikTok") {
        cardColor = "plum";
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
    <section className={styles.rightSide}>
      <div className={styles.media}>{linksToMedia}</div>
      <div className={styles.boxWithContact}>
        <Card color="lemon">
          <Image
            src={imageLemon}
            width={150}
            height={121}
            alt="obrazek pomarańczy"
          />
        </Card>
        <Contact />
      </div>
    </section>
  );
};

export default RightSide;
