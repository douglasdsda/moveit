import { useAuth } from "../../contexts/AuthContext";

import DashboardTemplate from "../../templates/Dashboard";
import HomeTemplate from "../../templates/Home";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

interface Props {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  register_username: string;
}

export default function Dashboard(props: Props) {
  const { isHasData, userData } = useAuth();

 

  return (
    <>
      {!isHasData && (
        <HomeTemplate register_username={props.register_username} />
      )}
      {isHasData && (
        <DashboardTemplate
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
        />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    challengesCompleted,
    register_username,
  } = ctx.req.cookies;

  if (!level || !currentExperience || !challengesCompleted)
    return { props: {} };

  if (!register_username)
    return {
      props: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted),
      },
    };

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      register_username: register_username,
    },
  };
};
