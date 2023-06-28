import Background from "./../../components/Background/Background";
import Header from "../../components/Header/Header";
import styles from "./page.module.css";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
