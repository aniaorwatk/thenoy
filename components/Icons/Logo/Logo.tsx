import Image from "next/image";
import logo from "./../../../assets/logo.svg";
import styles from "./Logo.module.css";

type ILogoType = {
  type?: "logoWhite";
};

const Logo = ({ type }: ILogoType) => {
  const classLogo = type === "logoWhite" ? styles["logoWhite"] : "";

  return (
    <Image src={logo} alt={""} className={classLogo} width="74" height="74" />
  );
};

export default Logo;
