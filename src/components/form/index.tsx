"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/assets/arrow.svg";
import styles from "./style.module.scss";
import { useHookFormMask } from "use-mask-input";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerWithMask = useHookFormMask(register);

  const onSubmit = (data: any) =>
    router.push(
      `/card?name=${data.name}&phone=${data.phone}&email=${data.email}`
    );

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.subitem}>
          <label htmlFor="name">Nome*</label>
          <input
            placeholder="Nome"
            {...register("name", {
              required: {
                value: true,
                message: "Campo requirido.",
              },
              minLength: {
                value: 2,
                message: "Necessário pelo menos dois caracteres.",
              },
            })}
            className={styles.input}
          />
          {errors.name && <span>{errors?.name?.message?.toString()}</span>}
        </div>

        <div className={styles.item}>
          <div className={styles.subitem}>
            <label htmlFor="phone">Telefone*</label>
            <input
              placeholder="(00) 0 0000-0000"
              {...registerWithMask(
                "phone",
                ["99 9999-9999", "99 9 9999-9999"],
                {
                  required: true,
                }
              )}
              className={styles.input}
            />

            {errors.phone && <span>Campo requerido.</span>}
          </div>
          <div className={styles.subitem}>
            <label htmlFor="email">E-mail*</label>
            <input
              placeholder="nome@email.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Campo requirido.",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Endereço de e-mail inválido.",
                },
              })}
              className={styles.input}
            />

            {errors.email && <span>{errors?.email?.message?.toString()}</span>}
          </div>
        </div>

        <div className={styles.terms}>
          <ul>
            <li>
              Ao preencher o formulário, concordo * em receber comunicações de
              acordo com meus interesses.
            </li>
            <li>
              Ao informar meus dados, eu concordo com a{" "}
              <Link
                href={{
                  pathname: "https://legal.rdstation.com/pt/privacy-policy/",
                }}
                target="_blank"
              >
                Política de privacidade
              </Link>
              .
            </li>
          </ul>
          * Você pode alterar suas permissões de comunicação a qualquer tempo.
        </div>

        <button type="submit" className={styles.button}>
          Gerar CARTÃO Grátis
          <Image src={arrow} alt={"Seta"} width={24} height={24} />
        </button>
      </form>
    </div>
  );
}
