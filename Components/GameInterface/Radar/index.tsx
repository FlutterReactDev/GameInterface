import styles from "./Radar.module.css";
import PlayerIcon from "./icon/Player.svg";
import BoxIcon from "./icon/Box.svg";
import RedCar from "./icon/RedCar.svg";
import BlueCar from "./icon/BlueCar.svg";
function Radar() {
  return (
    <div className={styles.Radar}>
      <div className={styles.Player}>
        <PlayerIcon width="53" height="53" />
      </div>
      <div className={styles.RadarItem} style={{ top: 66, left: 62 }}>
        <BoxIcon width="13" height="14" />
      </div>
      <div className={styles.RadarItem} style={{ top: 43, left: 152 }}>
        <BoxIcon width="13" height="14" />
      </div>
      <div
        className={styles.RadarItem}
        style={{
          top: 186,
          left: 63,
        }}
      >
        <BoxIcon width="13" height="14" />
      </div>
      <div
        className={styles.RadarItem}
        style={{
          top: 161,
          left: 156,
        }}
      >
        <BoxIcon width="13" height="14" />
      </div>

      <div className={styles.RadarItem} style={{ top: 46, left: 173 }}>
        <RedCar width="27" height="37" />
      </div>
      <div className={styles.RadarItem} style={{ top: 140, left: 40 }}>
        <BlueCar width="24" height="36" />
      </div>
    </div>
  );
}
export default Radar;
