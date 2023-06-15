import Image from "next/image";
import { Shadows_Into_Light_Two } from "next/font/google";
import arrow from "./../../assets/purpleArrow.svg";
import labels from "../../public/labels/labels";
import styles from "./WriteToMe.module.css";

const shadow = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: "400",
});

const WriteToMe = () => {
  return (
    <div className={styles.container}>
      <p className={shadow.className}>{labels.writeToMe}</p>
      <div className={styles.imgContainer}>
        <Image src={arrow} alt="strzałka" />
      </div>
    </div>
  );
};

export default WriteToMe;
