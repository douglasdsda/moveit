 
 import { ChallengesContext } from "../../contexts/ChallengesContext";
import { useContext } from 'react';
import * as S from "./styles";

function CompletedChallenges() {

  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <S.Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.Container>
  );
}

export default CompletedChallenges;
