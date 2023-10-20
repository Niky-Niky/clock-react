import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import styles from '../Clock/Clock.module.css'


export const Clock = () => {
    const [time, setTime] = useState(() => new Date());
    const intervalId = useRef(null);
    // console.log(intervalId)
    useEffect(() => {
      intervalId.current = setInterval(() => {
     
            setTime(new Date());
          }, 1000);
          
    return(()=>{
        stop();
    })
    }, []) 



const stop = () => {
    clearInterval(intervalId.current);
  };

  
    return (
      <div className={styles.container}>
        <p className={styles.clockface}>
          Поточний час: {time.toLocaleTimeString()}
        </p>
        <button type="button" onClick={stop}>
          Зупитини
        </button>
      </div>
    );
  
}