import Image from "next/image";
import { shadow } from "@/app/layout";
import arrow from "./../../assets/greenArrow.svg";
import labels from "../../public/labels/labels";
import styles from "./YouWillFindMe.module.css";

const YouWillFindMe = () => {
  return (
    <div className={styles.container}>
      <p className={shadow.className}>{labels.youwillfindMe}</p>
      <div className={styles.imgContainer}>
        <Image src={arrow} alt="strzałka" />
      </div>
    </div>
  );
};

export default YouWillFindMe;
