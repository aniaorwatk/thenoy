import GirlCard from "../GirlCard/GirlCard";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <LeftSide />
      <GirlCard />
      <RightSide />
    </div>
  );
};
export default Main;
