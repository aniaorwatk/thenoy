import Image from "next/image";
import star from "./../../assets/shootingStar.svg";
import labels from "../../public/labels/labels";
import styles from "./WelcomeTitle.module.css";
import { Roboto } from "next/font/google";
import Flower from "../Flower/Flower";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
});

const WelcomeTitle = () => {
  return (
    <div className={styles.container}>
      <Image src={star} alt="star" className={styles.star} />
      <div className={styles.flowers}>
        <Flower
          width={30}
          height={33}
          fill="#F6D9D2"
          className={styles.flowerOrange}
        />
        <Flower
          width={42}
          height={46.5}
          fill="#ECA7C3"
          className={styles.flowerPink}
        />
        <Flower
          width={37}
          height={40.5}
          fill="#D0DDFF"
          className={styles.flowerPlum}
        />
      </div>
      <div className={styles.secondFlowers}>
        <Flower
          width={42}
          height={46.5}
          fill="#C7E5CB"
          className={styles.flowerGreen}
        />
        <Flower
          width={20.7}
          height={22.7}
          fill="#C6E5F7"
          className={styles.flowerBlue}
        />
      </div>
      <h1>{labels.namePage}</h1>
      <h3 className={`${styles.welcome} ${roboto.className}`}>
        {labels.welcomeText}
      </h3>
      <div className={styles.flowers}></div>
    </div>
  );
};

export default WelcomeTitle;
