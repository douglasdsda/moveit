 import styles from '../styles/components/ExperienceBar.module.css';
 import { ChallengesContext } from "../contexts/ChallengesContext";
import { useContext } from 'react';

function ExperienceBar() {

  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentualToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentualToNextLevel}%` }}>
          <span className={styles.currentExperience} style={{ left: `${percentualToNextLevel}%` }}>
            {currentExperience} xp
          </span>
        </div>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}

export default ExperienceBar;
