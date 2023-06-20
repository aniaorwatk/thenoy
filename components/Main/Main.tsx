import GirlCard from "../GirlCard/GirlCard";
import LeftSide from "../LeftSide/LeftSide";
import MobileView from "../MobileView/MobileView";
import RightSide from "../RightSide/RightSide";
import StripsAroundPage from "../StripesAroundPage/StripesAroundPage";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <StripsAroundPage />
      <div className={styles.desktopView}>
        <LeftSide />
        <GirlCard />
        <RightSide />
      </div>
      <div className={styles.mobileView}>
        <MobileView />
      </div>
    </div>
  );
};
export default Main;
