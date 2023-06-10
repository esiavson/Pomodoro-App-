import styles from './Input.module.css';
import utilStyles from './utilStyles.module.css';
import ArrowUp from './svg/ArrowUp';
import ArrowDown from './svg/ArrowDown';

function Input({ children, state, setState }) { 
  const ONE_MINUTE = 60; //in seconds
  return (
    <label>
      <span className={styles.label}>{children}</span>
      <div className={styles.inputBox}>
        <span>{state / ONE_MINUTE}</span>
        <div className={`${utilStyles.pointer} ${styles.buttons}`}>
          <div onClick={() => setState(state + ONE_MINUTE)}>
            <ArrowUp />
          </div>
          <div onClick={() => setState(state - ONE_MINUTE)}>
            <ArrowDown />
          </div>
        </div>
      </div>
    </label>
  );
}

export default Input;
