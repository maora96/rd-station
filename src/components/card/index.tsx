import Link from "next/link";
import Image from "next/image";
import chevron from "@/assets/chevron-left.svg";
import down from "@/assets/downlong.svg";
import right from "@/assets/right.svg";
import symbol from "@/assets/symbol.svg";
import styles from "./style.module.scss";

export default function NewCard({
  name,
  phone,
  email,
}: {
  name: string;
  phone: string;
  email: string;
}) {
  return (
    <div className={styles.container}>
      <Link
        href={{
          pathname: "/",
        }}
      >
        <Image src={chevron} alt={"Chevron"} width={20} height={20} />
        Gerar outro cartão
      </Link>
      <div className={styles.card}>
        <div className={styles.symbol}>
          <Image src={symbol} alt={"Symbol"} fill />
        </div>
        <div className={styles.info}>
          <p>{name}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
      <button type="button" className={styles.button} disabled>
        <Image src={down} alt={"Chevron"} width={24} height={24} />
        Baixar cartão
      </button>

      <Link
        target="_blank"
        href={{
          pathname: "https://app.rdstation.com.br/signup",
        }}
        className={styles.outbound}
      >
        fazer um teste grátis do RD Station Marketing
        <Image src={right} alt={"Arrow right"} width={20} height={20} />
      </Link>
    </div>
  );
}
