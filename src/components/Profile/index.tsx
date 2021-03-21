 
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { useContext } from 'react';
import * as S from "./styles";
import { useAuth } from "../../contexts/AuthContext";

export function Profile() {

  const { level } = useContext(ChallengesContext);
  const { userData, isHasData } = useAuth();
  return (
    <S.Container >
      {/* <img src="https://github.com/douglasdsda.png" alt="Douglas"/> */}
      <img src={userData.avatar_url} alt={userData.name}/>
      <div>
        <strong>{userData.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </S.Container>
  );
}