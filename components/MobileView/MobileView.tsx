import Avocado from "../Avocado/Avocado";
import Card from "../Card/Card";
import Contact from "../Contact/Contact";
import GirlCard from "../GirlCard/GirlCard";
import LinkToAnotherPage from "../LinkToAnotherPage/LinkToAnotherPage";
import data from "./../../data/data";
import styles from "./MobileView.module.css";

type MediaData = {
  name: string;
  href: string;
  src: string;
};

const MobileView = () => {
  const addMediaComponent = (
    mediaName: string,
    color: string,
    data: MediaData[]
  ) => {
    const media = data.find(
      (item) => item.name.toLowerCase() === mediaName.toLowerCase()
    );
    if (!media) {
      return null;
    }
    return (
      <LinkToAnotherPage linkHref={media.href} key={media.name}>
        <Card color={color} isLink>
          <div
            style={{
              width: "50px",
              height: "40px",
              backgroundImage: `url(${media.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          {media.name}
        </Card>
      </LinkToAnotherPage>
    );
  };

  const instagramCard = addMediaComponent("Instagram", "pink", data);
  const youtubeCard = addMediaComponent("Youtube", "grass", data);
  const twitchCard = addMediaComponent("twitch", "orangeLight", data);
  const tiktokCard = addMediaComponent("tiktok", "plum", data);
  const pinterestCard = addMediaComponent("pinterest", "grapefruit", data);

  return (
    <div className={styles.container}>
      <Contact />
      <div className={styles.centerBox}>
        <section className={styles.mobileRight}>
          {instagramCard}
          {youtubeCard}
          <Card color="lemon">
            <div className={styles.dndImg}></div>
          </Card>
          <div className={styles.twoCol}>
            {twitchCard}
            {tiktokCard}
          </div>
          {pinterestCard}
        </section>
        <section className={styles.mobileLeft}>
          <Avocado />
          <GirlCard />
        </section>
      </div>
    </div>
  );
};

export default MobileView;
