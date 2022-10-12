import styles from "./GameInteface.module.css";
import LevelUpButton from "./LevelUpButton";
import ModalWindow from "./ModalWindow";
import HUD from "./HUD";
import Radar from "./Radar";
import Skills from "./Skills";
function GameInterface() {
  return (
    <div className={styles.GameInterface}>
      <div className={styles.Left}>
        <HUD />
        <ModalWindow />
        <Radar />
      </div>
      <div className={styles.Center}>
        <LevelUpButton />
        <Skills/>
      </div>
    </div>
  );
}
export default GameInterface;
