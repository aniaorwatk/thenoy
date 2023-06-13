import WelcomeTitle from "../../components/WelcomeTitle/WelcomeTitle";
import Background from "./../../components/Background/Background";
import Header from "../../components/Header/Header";
import styles from "./page.module.css";
import Main from "../../components/Main/Main";

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <Header />
      <WelcomeTitle />
      <Main />
    </main>
  );
}
