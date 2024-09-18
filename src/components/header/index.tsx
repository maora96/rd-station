import styles from "./style.module.scss";
import Image from "next/image";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={logo}
            alt={"Logo do gerador de cartão de visita"}
            width={147}
            height={36}
          />
        </div>
        <h1 className={styles.title}>Gerador de Cartão de Visita</h1>
      </div>
    </header>
  );
}
