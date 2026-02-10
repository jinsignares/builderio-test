import React from 'react';
import styles from './SMSAnimation.module.css';

export function SMSAnimation() {
  return (
    <div className={styles.container} aria-label="Frontline absence automation sequence">
      <div className={styles.step1}>
        <img 
          src="/assets/images/homepage/2.png" 
          alt="Assistant responds" 
          className={`${styles.overlay} ${styles.step2}`} 
        />
        <img 
          src="/assets/images/homepage/3.png" 
          alt="Workflow progresses" 
          className={`${styles.overlay} ${styles.step3}`} 
        />
        <img 
          src="/assets/images/homepage/4.png" 
          alt="Manager view" 
          className={`${styles.overlay} ${styles.step4}`} 
        />
        <img 
          src="/assets/images/homepage/5-1.png" 
          alt="Integration stage one" 
          className={`${styles.overlay} ${styles.step5_1}`} 
        />
        <img 
          src="/assets/images/homepage/5-2.png" 
          alt="Integration stage two" 
          className={`${styles.overlay} ${styles.step5_2}`} 
        />
        <img 
          src="/assets/images/homepage/5-3.png" 
          alt="Integration stage three" 
          className={`${styles.overlay} ${styles.step5_3}`} 
        />
        <img 
          src="/assets/images/homepage/5-4.png" 
          alt="Integration stage four" 
          className={`${styles.overlay} ${styles.step5_4}`} 
        />
      </div>
    </div>
  );
}
