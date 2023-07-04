import GirlCard from "../GirlCard/GirlCard";
import LeftSide from "../LeftSide/LeftSide";
import MobileView from "../MobileView/MobileView";
import { MediaItem } from "../Navigation/Navigation";
import RightSide from "../RightSide/RightSide";
import StripsAroundPage from "../StripesAroundPage/StripesAroundPage";
import WelcomeTitle from "../WelcomeTitle/WelcomeTitle";
import styles from "./Main.module.css";

const Main = ({ data }: { data: MediaItem[] }) => {
  return (
    <div className={styles.container}>
      <StripsAroundPage />
      <div className={styles.desktopPage}>
        <WelcomeTitle />
        <div className={styles.desktopView}>
          <LeftSide data={data} />
          <GirlCard />
          <RightSide data={data} />
        </div>
      </div>
      <div className={styles.mobileView}>
        <MobileView data={data} />
      </div>
    </div>
  );
};
export default Main;
