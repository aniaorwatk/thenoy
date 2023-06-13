import GirlCard from "../GirlCard/GirlCard";
import RightSide from "../RightSide/RightSide";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <GirlCard />
      <RightSide />
    </div>
  );
};
export default Main;
