import Link from "next/link";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        <Link
          href={{
            pathname: "https://legal.rdstation.com/pt/privacy-policy/",
          }}
          target="_blank"
        >
          Política de Privacidade
        </Link>
      </span>
      © 2023 Resultados Digitais
    </footer>
  );
}
