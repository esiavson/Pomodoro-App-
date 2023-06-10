import styles from './TimeRemaining.module.css';

function TimeRemaining({ getDasharray, themeColor }) {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={styles.circle}>
        <circle className={styles.pathElapsed} cx="50" cy="50" r="45" />
        <path
          strokeDasharray={getDasharray()}
          className={`${styles.pathRemaining} ${styles[themeColor]}`}
          d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
        ></path>
      </g>
    </svg>
  );
}

export default TimeRemaining;
