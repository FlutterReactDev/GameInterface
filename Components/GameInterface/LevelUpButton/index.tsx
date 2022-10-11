import styles from './LevelUpButton.module.css'
import IconButton from './icon/Levelup.svg'
import { useState } from 'react';
import cn from 'classnames'
function LevelUpButton() {
    const [show,setShow] = useState(true)
    function onClick() {
        setShow(false)
        console.log('LEVEL UP');
        
    }
    return (
        <div onClick={onClick} className={cn(styles.LevelUpButton,{
            [styles.MoveOn]:show,
            [styles.MoveOut]:!show
        })}>
            <IconButton width="228" height="77"/>
        </div>
    )
}

export default LevelUpButton