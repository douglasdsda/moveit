import Head from "next/head";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";

import { GetServerSideProps } from "next";
import Link from "next/link";

import styles from "../styles/pages/Login.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <section className={styles.section}>
        <div>
          <img src="/v2/login/logo-login.svg" alt="Logo Login" />
        </div>

        <div className={styles.form}>
          <img src="/v2/login/Logo-2.svg" alt="Logo 2" />
          <h1>Bem-vindo</h1>
          <div>
            <AiFillGithub />
            <span>Faca login com seu Github para começar</span>
          </div>
          <div className={styles.gitbutton}>
            <div>
              <input type="text" placeholder="Digite seu username" />
            </div>
            <div className={styles.click}>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};
