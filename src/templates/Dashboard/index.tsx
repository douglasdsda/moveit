import Head from "next/head";

import ExperienceBar from "../../components/ExperienceBar";
import CompletedChallenges from "../../components/CompletedChallenges";
import Countdown from "../../components/Countdown";
import ChallengeBox from "../../components/ChallengeBox";
import { Profile } from "../../components/Profile";
import { CountdownProvider } from "../../contexts/CountdownContext";
import { GetServerSideProps } from "next";

import * as S from "./styles";

import { ChallengesProvider } from "../../contexts/ChallengesContext";
import { useAuth } from "../../contexts/AuthContext";

interface Props {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function DashboardTemplate (props: Props) {
  // console.log("props: ", props);

  const { userData, isHasData } = useAuth();

  if(!isHasData) return (<p><h1>Usuario nao encontrado</h1></p>)

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <S.Container>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </S.Container>
    </ChallengesProvider>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

//   if (!level || !currentExperience || !challengesCompleted)
//     return { props: {} };

//   return {
//     props: {
//       level: Number(level),
//       currentExperience: Number(currentExperience),
//       challengesCompleted: Number(challengesCompleted),
//     },
//   };
// };
