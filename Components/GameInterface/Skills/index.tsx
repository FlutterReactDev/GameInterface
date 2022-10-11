import styles from "./Skills.module.css";
import cn from "classnames";
import ShieldPlus from "./icons/ShieldPlus.svg";
import ShieldRegen from "./icons/ShieldRegen.svg";
import NumberIcon from "./icons/NumberBackground.svg";
import EnergyPlus from "./icons/EnergyPlus.svg";
import EnergyRegen from "./icons/EnergyRegen.svg";
import Damage from "./icons/Damage.svg";
import Speed from "./icons/Speed.svg";
import SkillsItem from "./SkillsItem/SkillsItem";
import { useEffect, useState } from "react";

function Skills() {
    const [activeIndex,setActiveIndex] = useState(-1)
    const [show,setShow] = useState(false)
    const data = [
    {
      icon: <ShieldPlus />,
      name: "armour<br/>capaciy",
      className: styles.BlueBackground,
      order: 1,
      index:45
    },
    {
      icon: <ShieldRegen />,
      name: "armour<br />REGEN",
      className: styles.BlueBackground,
      order: 2,
      index:46
    },
    {
      icon: <EnergyPlus />,
      name: "  ENERGY<br />capaciy",
      className: styles.YellowBackground,
      order: 3,
      index:47
    },
    {
        icon: <EnergyRegen />,
        name: "  ENERGY<br />REGEN",
        className: styles.YellowBackground,
        order: 4,
        index:48
      },
    {
      icon:<Damage />,
      name: "Damage",
      className: styles.RedBackground,
      order: 5,
      index:49
    },
    {
        icon: <Speed />,
        name: "BULLET <br /> SPEED",
        className: styles.GreenBackground,
        order: 6,
        index:50
      },
  ];
 
  useEffect(() => {
    setShow(true)
  },[])
  return (
    <div className={cn(styles.Skills,{
        [styles.MoveOn]:show,
        [styles.MoveOut]:!show
    })}>
        {data.map((item) => {
            return <SkillsItem onClick={() => {     
                setActiveIndex(item.index)
            }}  key={item.index} idx={item.index} activeIndex={activeIndex} {...item}/>
        })}
    
    </div>
  );
}

export default Skills;
