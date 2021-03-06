
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

interface CountdownContextData {
  startCountDown: () => void;
  resetCountDown: () => void;
  minutes: number;
  seconds: number;

  hasFinished: boolean;
  isActive: boolean;
}
interface CountdownProviderProps {
  children: ReactNode;
}

let countdownTimeOut: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsAtive] = useState(false);
  const [hasFinished, setHashFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() {
    setIsAtive(true);
  }

  function resetCountDown() {
    clearTimeout(countdownTimeOut);
    setTime(0.1 * 60);
    setIsAtive(false);
    setHashFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHashFinished(true);
      setIsAtive(true);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        resetCountDown,
        isActive,
        startCountDown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
