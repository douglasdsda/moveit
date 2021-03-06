 import styles from '../styles/components/CompletedChallenges.module.css';
 import { ChallengesContext } from "../contexts/ChallengesContext";
import { useContext } from 'react';

function CompletedChallenges() {

  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}

export default CompletedChallenges;
