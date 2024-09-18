import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "@/styles/home.module.scss";
import picture from "@/assets/picture.svg";
import Form from "@/components/form";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.hero}>
          <h2>Gerador de Cartão de Visita</h2>
          <h3>
            Crie grátis seu cartão de visita em passos rápidos! Você o insere no
            Instagram e demais canais digitais.
          </h3>
        </div>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image src={picture} alt={"Ilustração"} fill />
          </div>
          <Form />
        </div>
      </main>
      <Footer />
    </>
  );
}
