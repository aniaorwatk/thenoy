import WelcomeTitle from "../../components/WelcomeTitle/WelcomeTitle";
import Background from "./../../components/Background/Background";
import GirlCard from "../../components/GirlCard/GirlCard";
import Header from "../../components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <Header />
      <WelcomeTitle />
      <GirlCard />
    </main>
  );
}
