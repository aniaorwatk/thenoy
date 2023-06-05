import WelcomeTitle from "../../components/WelcomeTitle/WelcomeTitle";
import Background from "./../../components/Background/Background";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <Navigation />
       <WelcomeTitle />   
    </main>
  );
}
