import styles from './Option.module.css';
import utilStyles from './utilStyles.module.css';

export default function Option({ children, name, state, setState }) {
  return (
    <div
      className={`${styles.option} ${utilStyles[name]} ${
        state === name && styles[name]
      }`}
      onClick={() => setState(name)}
    >
      <span className={styles.span}>{children}</span>
    </div>
  );
}
