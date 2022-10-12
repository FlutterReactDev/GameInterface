import styles from "../../HUD.module.css";
import cn from "classnames";
import ShieldIcon from "../../icon/Shield.svg";
import { ProgressBarProps } from "../ProgressBar.props";
function ProtectBar({ value, maxWidth }:ProgressBarProps) {
  const fillWidth = (value * maxWidth) / 100;
  const textureColor = "#597DCE"
  return (
    <div className={styles.ProgressBar}>
      <div className={styles.Progress}>
        <svg
          width="177"
          height="28"
          viewBox="0 0 176 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_4_1328)">
            <rect
              x="5.55556"
              y="3.66667"
              width="167.444"
              height="19.5556"
              fill="#0B2F44"
            />
            <rect
              x="5.55556"
              y="18.3333"
              width="167.444"
              height="4.88889"
              fill="#0E3952"
            />
            <rect
              x="36.1111"
              y="18.3333"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 36.1111 18.3333)"
              fill="#0E3952"
            />
            <rect
              x="38.5556"
              y="13.4444"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 38.5556 13.4444)"
              fill="#0E3952"
            />
            <rect
              x="41"
              y="8.55556"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 41 8.55556)"
              fill="#0E3952"
            />
            <rect
              x="43.4444"
              y="3.66667"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 43.4444 3.66667)"
              fill="#0E3952"
            />
            <rect
              x="70.3333"
              y="18.3333"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 70.3333 18.3333)"
              fill="#0E3952"
            />
            <rect
              x="72.7778"
              y="13.4444"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 72.7778 13.4444)"
              fill="#0E3952"
            />
            <rect
              x="75.2222"
              y="8.55556"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 75.2222 8.55556)"
              fill="#0E3952"
            />
            <rect
              x="77.6667"
              y="3.66667"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 77.6667 3.66667)"
              fill="#0E3952"
            />
            <rect
              x="104.556"
              y="18.3333"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 104.556 18.3333)"
              fill="#0E3952"
            />
            <rect
              x="107"
              y="13.4444"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 107 13.4444)"
              fill="#0E3952"
            />
            <rect
              x="109.444"
              y="8.55556"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 109.444 8.55556)"
              fill="#0E3952"
            />
            <rect
              x="111.889"
              y="3.66667"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 111.889 3.66667)"
              fill="#0E3952"
            />
            <rect
              x="138.778"
              y="18.3333"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 138.778 18.3333)"
              fill="#0E3952"
            />
            <rect
              x="141.222"
              y="13.4444"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 141.222 13.4444)"
              fill="#0E3952"
            />
            <rect
              x="143.667"
              y="8.55556"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 143.667 8.55556)"
              fill="#0E3952"
            />
            <rect
              x="146.111"
              y="3.66667"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 146.111 3.66667)"
              fill="#0E3952"
            />
            <rect
              x="5.55556"
              y="3.66667"
              width={fillWidth}
              height="19.5556"
              fill="#6DC2CA"
            />
            <rect
              x="9.55556"
              y="11"
              width={value == 100 ? fillWidth - 4 : fillWidth}
              height="7.33333"
              fill="#6DC2CA"
            />
            <rect
              x="3.55556"
              y="18.3333"
              width={value < 98 ? fillWidth + 9 : fillWidth}
              height="4.88889"
              fill="#597DCE"
            />
            <rect
              x="36.1111"
              y="18.3333"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 36.1111 18.3333)"
              fill={fillWidth >= 38 ? textureColor : ''}
            />
            <rect
              x="38.5556"
              y="13.4444"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 38.5556 13.4444)"
              fill={fillWidth >= 38 ? textureColor : ''}
            />
            <rect
              x="41"
              y="8.55556"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 41 8.55556)"
              fill={fillWidth >= 38 ? textureColor : ''}
            />
            <rect
              x="43.4444"
              y="3.66667"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 43.4444 3.66667)"
              fill={fillWidth >= 38 ? textureColor : ''}
            />
            <rect
              x="70.3333"
              y="18.3333"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 70.3333 18.3333)"
              fill={fillWidth >= 72 ? textureColor : ''}
            />
            <rect
              x="72.7778"
              y="13.4444"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 72.7778 13.4444)"
              fill={fillWidth >= 72 ? textureColor : ''}
            />
            <rect
              x="75.2222"
              y="8.55556"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 75.2222 8.55556)"
              fill={fillWidth >= 72 ? textureColor : ''}
            />
            <rect
              x="77.6667"
              y="3.66667"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 77.6667 3.66667)"
              fill={fillWidth >= 72 ? textureColor : ''}
            />
            <rect
              x="104.556"
              y="18.3333"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 104.556 18.3333)"
              fill={fillWidth >= 106 ? textureColor : ''}
            />
            <rect
              x="107"
              y="13.4444"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 107 13.4444)"
              fill={fillWidth >= 106 ? textureColor : ''}
            />
            <rect
              x="109.444"
              y="8.55556"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 109.444 8.55556)"
              fill={fillWidth >= 106 ? textureColor : ''}
            />
            <rect
              x="111.889"
              y="3.66667"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 111.889 3.66667)"
              fill={fillWidth >= 106 ? textureColor : ''}
            />
            <rect
              x="138.778"
              y="18.3333"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 138.778 18.3333)"
              fill={fillWidth >= 140 ? textureColor : ''}
            />
            <rect
              x="141.222"
              y="13.4444"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 141.222 13.4444)"
              fill={fillWidth >= 140 ? textureColor : ''}
            />
            <rect
              x="143.667"
              y="8.55556"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 143.667 8.55556)"
              fill={fillWidth >= 140 ? textureColor : ''}
            />
            <rect
              x="146.111"
              y="3.66667"
              width="4.88889"
              height="3.66667"
              transform="rotate(90 146.111 3.66667)"
              fill={fillWidth >= 140 ? textureColor : ''}
            />
            <rect
              x="3.11111"
              y="6.11111"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 175.444 6.11111)"
              fill="#011D2B"
            />
            <rect
              x="3.11111"
              y="8.55556"
              width="2.44444"
              height="9.77778"
              fill="#011D2B"
            />
            <rect
              width="2.44444"
              height="8.55556"
              transform="matrix(-1 0 0 1 175.444 8.55556)"
              fill="#011D2B"
            />
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 175.444 15.8889)"
              fill="#011D2B"
            />
            <rect
              x="3.11111"
              y="3.66667"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 175.444 3.66667)"
              fill="#011D2B"
            />
            <rect
              x="5.55556"
              y="6.11111"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 173 6.11111)"
              fill="#011D2B"
            />
            <rect
              x="5.55556"
              y="18.3333"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 173 18.3333)"
              fill="#011D2B"
            />
            <rect
              x="3.11111"
              y="20.7778"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 175.444 20.7778)"
              fill="#011D2B"
            />
            <rect
              x="5.55556"
              y="3.66667"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 173 3.66667)"
              fill="#011D2B"
            />
            <rect x="8" width="162.556" height="3.66667" fill="#011D2B" />
            <rect
              x="3.11111"
              y="18.3333"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 175.444 18.3333)"
              fill="#011D2B"
            />
            <rect
              x="5.55556"
              y="20.7778"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              width="2.44444"
              height="2.44444"
              transform="matrix(-1 0 0 1 173 20.7778)"
              fill="#011D2B"
            />
            <rect
              x="8"
              y="20.7778"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              x="8"
              y="3.66667"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              x="5.55556"
              y="1.22222"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              x="5.55556"
              y="23.2222"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              x="168.111"
              y="3.66667"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              x="170.556"
              y="1.22222"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              x="168.111"
              y="20.7778"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              x="170.556"
              y="23.2222"
              width="2.44444"
              height="2.44444"
              fill="#011D2B"
            />
            <rect
              x="8"
              y="23.2222"
              width="162.556"
              height="3.66667"
              fill="#011D2B"
            />
            <rect
              x="176.667"
              y="6.11111"
              width="14.6667"
              height="1.22222"
              transform="rotate(90 176.667 6.11111)"
              fill="#011D2B"
            />
            <rect
              x="3.11111"
              y="6.11111"
              width="14.6667"
              height="1.22222"
              transform="rotate(90 3.11111 6.11111)"
              fill="#011D2B"
            />
            <rect
              x="1.88889"
              y="8.55556"
              width="9.77778"
              height="1.22222"
              transform="rotate(90 1.88889 8.55556)"
              fill="#011D2B"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_4_1328"
              x="0.666672"
              y="0"
              width="176"
              height="27.8889"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4_1328"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4_1328"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={styles.Icon}>
        <ShieldIcon width="28" height="28" />
      </div>
      <div className={cn(styles.ProgressValue, styles.Shield)}>{value}</div>
    </div>
  );
}

export default ProtectBar;
