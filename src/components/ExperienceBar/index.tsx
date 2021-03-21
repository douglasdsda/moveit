import { ChallengesContext } from "../../contexts/ChallengesContext";

import { useContext } from "react";
import * as S from "./styles";

function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentualToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <S.Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentualToNextLevel}%` }}>
          <S.CurrentExperience style={{ left: `${percentualToNextLevel}%` }}>
            {currentExperience} xp
          </S.CurrentExperience>
        </div>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </S.Container>
  );
}

export default ExperienceBar;
