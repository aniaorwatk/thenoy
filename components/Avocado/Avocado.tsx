import Image from "next/image";
import Card from "../Card/Card";
import imgAvocado from "./../../assets/avocado.svg";
import styles from "./Avocado.module.css";

const Avocado = () => {
  const avocado = [...Array(5)].map((_, index) => (
    <Image
      key={index}
      src={imgAvocado}
      alt="ikona avocado"
      width={32}
      height={32}
    />
  ));

  return (
    <div className={styles.container}>
      <Card color="avocado">
        <div className={styles.avocado}>{avocado}</div>
      </Card>
    </div>
  );
};

export default Avocado;
