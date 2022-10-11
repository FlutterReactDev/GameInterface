import styles from "../Skills.module.css";
import { SkillsProps } from "./SkillsProps";
import cn from "classnames";
import NumberIcon from "../icons/NumberBackground.svg";
import { useState } from "react";
function SkillsItem({
  activeIndex,
  idx,
  icon,
  name,
  className,
  order,
  ...props
}: SkillsProps) {

    
  return (
    <div
      className={cn(styles.SkillsItem, className, {
        [styles.Active]: activeIndex == idx,
      })}
      {...props}
    >
      <div
        className={styles.SkillName}
        dangerouslySetInnerHTML={{ __html: name }}
      />
      <div className={styles.Icon}>{icon}</div>

      <div className={styles.Level}>
        LV <span>1</span>
      </div>
      <div className={styles.Number}>
        <NumberIcon />
        <span>{order}</span>
      </div>
    </div>
  );
}

export default SkillsItem;
