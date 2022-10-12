import styles from "../../HUD.module.css";
import cn from "classnames";
import HeartIcon from "../../icon/Heart.svg";
import { ProgressBarProps } from "../ProgressBar.props";

function HeartBar({ value, maxWidth }:ProgressBarProps) {
    const fillWidth = (value * maxWidth) / 100;
    const textureColor = "#F54343"
    return (
        <div className={styles.ProgressBar}>
        <div>
          <svg
            width="177"
            height="29"
            viewBox="0 0 177 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="5.55554"
              y="4.44444"
              width="167.444"
              height="19.5556"
              fill="#0B2F44"
            ></rect>
            <rect
              x="5.55554"
              y="19.1111"
              width="167.444"
              height="4.88889"
              fill="#0E3952"
            ></rect>
            <rect
              x="36.1111"
              y="19.1111"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 36.1111 19.1111)"
              fill="#0E3952"
            ></rect>
            <rect
              x="38.5555"
              y="14.2222"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 38.5555 14.2222)"
              fill="#0E3952"
            ></rect>
            <rect
              x="41"
              y="9.33333"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 41 9.33333)"
              fill="#0E3952"
            ></rect>
            <rect
              x="43.4444"
              y="4.44444"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 43.4444 4.44444)"
              fill="#0E3952"
            ></rect>
            <rect
              x="70.3333"
              y="19.1111"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 70.3333 19.1111)"
              fill="#0E3952"
            ></rect>
            <rect
              x="72.7778"
              y="14.2222"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 72.7778 14.2222)"
              fill="#0E3952"
            ></rect>
            <rect
              x="75.2222"
              y="9.33333"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 75.2222 9.33333)"
              fill="#0E3952"
            ></rect>
            <rect
              x="77.6667"
              y="4.44444"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 77.6667 4.44444)"
              fill="#0E3952"
            ></rect>
            <rect
              x="104.556"
              y="19.1111"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 104.556 19.1111)"
              fill="#0E3952"
            ></rect>
            <rect
              x="107"
              y="14.2222"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 107 14.2222)"
              fill="#0E3952"
            ></rect>
            <rect
              x="109.444"
              y="9.33333"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 109.444 9.33333)"
              fill="#0E3952"
            ></rect>
            <rect
              x="111.889"
              y="4.44444"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 111.889 4.44444)"
              fill="#0E3952"
            ></rect>
            <rect
              x="138.778"
              y="19.1111"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 138.778 19.1111)"
              fill="#0E3952"
            ></rect>
            <rect
              x="141.222"
              y="14.2222"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 141.222 14.2222)"
              fill="#0E3952"
            ></rect>
            <rect
              x="143.667"
              y="9.33333"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 143.667 9.33333)"
              fill="#0E3952"
            ></rect>
            <rect
              x="146.111"
              y="4.44444"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 146.111 4.44444)"
              fill="#0E3952"
            ></rect>

            <rect
              x="5.55554"
              y="4"
              width={fillWidth}
              height="19.5556"
              fill="#FF6363"
            />
            <rect
              x="9.55554"
              y="11.3333"
              width={value == 100 ? fillWidth - 4 : fillWidth}
              height="7.33333"
              fill="#FF6363"
            />
            <rect
              x="3.55554"
              y="18.6667"
              width={value < 98 ? fillWidth + 9 : fillWidth}
              height="4.88889"
              fill="#F54343"
            />
            <rect
              x="36.1111"
              y="18.6667"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 36.1111 18.6667)"
              fill={fillWidth >= 38 ? textureColor : ''}
            />
            <rect
              x="38.5555"
              y="13.7778"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 38.5555 13.7778)"
              fill={fillWidth >= 38 ? textureColor : ''}
            />
            <rect
              x="41"
              y="8.88889"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 41 8.88889)"
              fill={fillWidth >= 38 ? textureColor : ''}
            />
            <rect
              x="43.4444"
              y="4"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 43.4444 4)"
              fill={fillWidth >= 38 ? textureColor : ''}
            />
            <rect
              x="70.3333"
              y="18.6667"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 70.3333 18.6667)"
              fill={fillWidth >= 72 ? textureColor : ''}
            />
            <rect
              x="72.7778"
              y="13.7778"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 72.7778 13.7778)"
              fill={fillWidth >= 72 ? textureColor : ''}
            />
            <rect
              x="75.2222"
              y="8.88889"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 75.2222 8.88889)"
              fill={fillWidth >= 72 ? textureColor : ''}
            />
            <rect
              x="77.6667"
              y="4"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 77.6667 4)"
              fill={fillWidth >= 72 ? textureColor : ''}
            />
            <rect
              x="104.556"
              y="18.6667"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 104.556 18.6667)"
              fill={fillWidth >= 106 ? textureColor : ''}
            />
            <rect
              x="107"
              y="13.7778"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 107 13.7778)"
              fill={fillWidth >= 106 ? textureColor : ''}
            />
            <rect
              x="109.444"
              y="8.88889"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 109.444 8.88889)"
              fill={fillWidth >= 106 ? textureColor : ''}
            />
            <rect
              x="111.889"
              y="4"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 111.889 4)"
              fill={fillWidth >= 106 ? textureColor : ''}
            />
            <rect
              x="138.778"
              y="18.6667"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 138.778 18.6667)"
              fill={fillWidth >= 140 ? textureColor : ''}
            />
            <rect
              x="141.222"
              y="13.7778"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 141.222 13.7778)"
              fill={fillWidth >= 140 ? textureColor : ''}
            />
            <rect
              x="143.667"
              y="8.88889"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 143.667 8.88889)"
              fill={fillWidth >= 140 ? textureColor : ''}
            />
            <rect
              x="146.111"
              y="4"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 146.111 4)"
              fill={fillWidth >= 140 ? textureColor : ''}
            />

            <rect
              x="3.1111"
              y="6.88889"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 175.444 6.88889)"
              fill="#011D2B"
            ></rect>
            <rect
              x="3.1111"
              y="9.33333"
              width="2.44444"
              height="9.77778"
              fill="#011D2B"
            ></rect>
            <rect
              width="2.44444"
              height="8.55556"
              transform="matrix(-1 0 0 1 175.444 9.33333)"
              fill="#011D2B"
            ></rect>
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 175.444 16.6667)"
              fill="#011D2B"
            ></rect>
            <rect
              x="3.1111"
              y="4.44444"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 175.444 4.44444)"
              fill="#011D2B"
            ></rect>
            <rect
              x="5.55554"
              y="6.88889"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 173 6.88889)"
              fill="#011D2B"
            ></rect>
            <rect
              x="5.55554"
              y="19.1111"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 173 19.1111)"
              fill="#011D2B"
            ></rect>
            <rect
              x="3.1111"
              y="21.5556"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 175.444 21.5556)"
              fill="#011D2B"
            ></rect>
            <rect
              x="5.55554"
              y="4.44444"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 173 4.44444)"
              fill="#011D2B"
            ></rect>
            <rect
              x="7.99999"
              y="0.777779"
              width="162.556"
              height="3.66667"
              fill="#011D2B"
            ></rect>
            <rect
              x="3.1111"
              y="19.1111"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 175.444 19.1111)"
              fill="#011D2B"
            ></rect>
            <rect
              x="5.55554"
              y="21.5556"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 173 21.5556)"
              fill="#011D2B"
            ></rect>
            <rect
              x="7.99999"
              y="21.5556"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              x="7.99999"
              y="4.44444"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              x="5.55554"
              y="2"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              x="5.55554"
              y="24"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              x="168.111"
              y="4.44444"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              x="170.556"
              y="2"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              x="168.111"
              y="21.5556"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              x="170.556"
              y="24"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            ></rect>
            <rect
              x="7.99999"
              y="24"
              width="162.556"
              height="3.66667"
              fill="#011D2B"
            ></rect>
            <rect
              x="176.667"
              y="6.88889"
              width="14.6667"
              height="1.22222"
              transform="rotate(90 176.667 6.88889)"
              fill="#011D2B"
            ></rect>
            <rect
              x="3.1111"
              y="6.88889"
              width="14.6667"
              height="1.22222"
              transform="rotate(90 3.1111 6.88889)"
              fill="#011D2B"
            ></rect>
            <rect
              x="1.88888"
              y="9.33333"
              width="9.77778"
              height="1.22222"
              transform="rotate(90 1.88888 9.33333)"
              fill="#011D2B"
            ></rect>
          </svg>
        </div>
        <div className={styles.Icon}>
          <HeartIcon width="28" height="28" />
        </div>
        <div className={cn(styles.ProgressValue, styles.Heart)}>{value}</div>
      </div>
    )
}

export default HeartBar