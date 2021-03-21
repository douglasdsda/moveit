import { useState, useEffect, useContext } from "react";
import { setTimeout } from "timers";

 
import { CountdownContext } from "../../contexts/CountdownContext";
import * as S from "./styles";

function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    resetCountDown,
    isActive,
    startCountDown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");

  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  return (
    <div>
      <S.Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </S.Container>

      {hasFinished ? (
        <S.CountdownButton
          onClick={resetCountDown}
          disabled
       
        >
          Ciclo encerrado
        </S.CountdownButton>
      ) : (
        <>
          {isActive ? (
            <S.CountdownButtonActive
              onClick={resetCountDown}
              type="button"
              className="countdownButtonActive"
              // className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Abandonar ciclo
            </S.CountdownButtonActive>
          ) : (
            <S.CountdownButton
              onClick={startCountDown}
              type="button"
              // className={styles.countdownButton}
            >
              Iniciar um ciclo
            </S.CountdownButton>
          )}
        </>
      )}
    </div>
  );
}

export default Countdown;
