import Image from "next/image";
import { shadow } from "@/app/layout";
import arrow from "./../../assets/purpleArrow.svg";
import labels from "../../public/labels/labels";
import styles from "./WriteToMe.module.css";

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
