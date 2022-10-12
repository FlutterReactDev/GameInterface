import styles from "./HUD.module.css";
import ScoreIcon from "./icon/Score.svg";
import ShieldIcon from "./icon/Shield.svg";
import EnergyIcon from "./icon/Energy.svg";
import HeartIcon from "./icon/Heart.svg";
import cn from "classnames";
import ProtectBar from "./Progress/ProtectBar";
import EnergyBar from "./Progress/EnergyBar";
import HeartBar from "./Progress/HeartBar";

function HUD() {
  return (
    <div className={styles.HUD}>
      <div className={styles.Score}>
        <ScoreIcon width="110" height="113" />
        <div className={styles.ScoreValue}>543</div>
      </div>
      <div className={styles.ProgressWrapper}>
        <ProtectBar value={25} maxWidth={167}/>
       <EnergyBar value={50} maxWidth={167}/>
       <HeartBar value={75} maxWidth={167}/>
      </div>
    </div>
  );
}

export default HUD;
