import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";
import * as S from "./styles";

function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountDown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountDown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountDown();
  }

  return (
    <S.Container>
      {activeChallenge ? (
        <S.ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <S.ChallengeFailedButton
              onClick={handleChallengeFailed}
              type="button"
            >
              Falhei
            </S.ChallengeFailedButton>
            <S.ChallengeSucceededButton
              onClick={handleChallengeSucceeded}
              type="button"
            >
              Completei
            </S.ChallengeSucceededButton>
          </footer>
        </S.ChallengeActive>
      ) : (
        <S.ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </S.ChallengeNotActive>
      )}
    </S.Container>
  );
}

export default ChallengeBox;
