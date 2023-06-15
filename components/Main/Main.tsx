import GirlCard from "../GirlCard/GirlCard";
import RightSide from "../RightSide/RightSide";
import StripsAroundPage from "../StripesAroundPage/StripesAroundPage";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <StripsAroundPage />
      <GirlCard />
      <RightSide />
    </div>
  );
};
export default Main;
