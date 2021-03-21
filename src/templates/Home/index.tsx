import Head from "next/head";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";

import { GetServerSideProps } from "next";
// import Link from "next/link";

// import styles from "../styles/pages/Login.module.css";

import { useAuth } from "../../contexts/AuthContext";

import * as S from "./styles";
import { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface Props {
  register_username: string;
}

export default function HomeTemplate(props: Props) {
  const { registerUser, userData, isHasData } = useAuth();
  const [valueName, setValueName] = useState("");

  useEffect(() => {
    registerUser(props.register_username);
  }, []);

  const handleUser = useCallback(() => {
    console.log("teste");
    registerUser(valueName);
  }, [valueName]);

  return (
    <S.Container>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <section>
        <S.ContainerImage>
          <img src="/v2/login/logo-login.svg" alt="Logo Login" />
        </S.ContainerImage>

        <S.Form>
          <img src="/v2/login/Logo-2.svg" alt="Logo 2" />
          <h1>Bem-vindo</h1>
          <div>
            <AiFillGithub />
            <span>Faca login com seu Github para começar</span>
          </div>
          <S.Gitbutton>
            <div>
              <input
                type="text"
                value={valueName}
                onChange={(e) => setValueName(e.target.value)}
                placeholder="Digite seu username"
              />
            </div>
            <S.GitbuttonClick type="button" onClick={handleUser}>
              <AiOutlineArrowRight />
            </S.GitbuttonClick>
          </S.Gitbutton>
        </S.Form>
      </section>
    </S.Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { register_username } = ctx.req.cookies;

  if (!register_username) return { props: {} };

  return {
    props: {
      register_username,
    },
  };
};
