 
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { useContext } from "react";
import * as S from "./styles";

export default function LevelUpModal() {

  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <S.Overlay>
      <S.Container>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal} >
          <img src="/icons/close.svg" alt="Fechar"/>
        </button>
      </S.Container>
    </S.Overlay>
  );
}
