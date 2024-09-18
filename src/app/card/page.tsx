"use client";
import Header from "@/components/header";
import Image from "next/image";
import styles from "@/styles/card.module.scss";
import Footer from "@/components/footer";
import picture from "@/assets/picture.svg";
import { useSearchParams } from "next/navigation";
import NewCard from "@/components/card";

export default function Card() {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  const name = searchParams.get("name");
  const phone = searchParams.get("phone");
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image src={picture} alt={"Ilustração"} width={471} height={347} />
          </div>
          <NewCard name={name!} phone={phone!} email={email!} />
        </div>
      </main>
      <Footer />
    </>
  );
}
