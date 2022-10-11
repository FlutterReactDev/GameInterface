import styles from "./ModalWindow.module.css";
import BorderIcon from "./icon/Border.svg";
import cn from 'classnames'
import { useEffect, useRef, useState } from "react";

function ModalWindow() {
  const [show,setShow] = useState(false) 

  useEffect(() => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    },2000)
  },[])


  return (
    <div className={cn(styles.ModalWindow,{
      [styles.FadeIn]:show ,
      [styles.FadeOut]:!show 
    })}>
      <BorderIcon width="365" height="152" />
      <div className={styles.ModalWindowContent}>
        
        <div className={styles.TextHeader}>Attention!</div>A new super box has
        appeared on the map.
      </div>
    </div>
  );
}

export default ModalWindow;
