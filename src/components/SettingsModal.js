import { useState } from 'react';
import Option from './Option';
import Input from './Input';

import styles from './SettingsModal.module.css';
import utilStyles from './utilStyles.module.css';

export default function SettingsModal({
  defaultSettings,
  applySettings,
  setIsShowing,
}) {
  const [pomodoroSetting, setPomodoroSetting] = useState(
    defaultSettings.pomodoro
  );
  const [shortBreakSetting, setShortBreakSetting] = useState(
    defaultSettings.shortBreak
  );
  const [longBreakSetting, setLongBreakSetting] = useState(
    defaultSettings.longBreak
  );

  const [fontSetting, setFontSetting] = useState(defaultSettings.font);
  const [colorSetting, setColorSetting] = useState(defaultSettings.themeColor);

  const settings = {
    pomodoroSetting,
    shortBreakSetting,
    longBreakSetting,
    fontSetting,
    colorSetting,
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={`${utilStyles.flex} ${styles.heading}`}>
          <h2>Settings</h2>
          <div
            className={utilStyles.pointer}
            onClick={() => setIsShowing(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <path
                fill="#1E213F"
                fillRule="evenodd"
                d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
                opacity=".5"
              />
            </svg>
          </div>
        </div>

        <div>
          <h4>Time (Minutes)</h4>
          <div className={styles.card}>
            <Input state={pomodoroSetting} setState={setPomodoroSetting}>
              pomodoro
            </Input>
            <Input state={shortBreakSetting} setState={setShortBreakSetting}>
              short break
            </Input>
            <Input state={longBreakSetting} setState={setLongBreakSetting}>
              long break
            </Input>
          </div>
        </div>

        <div className={`${styles.card} ${utilStyles.border}`}>
          <h4>Font</h4>
          <div className={styles.options}>
            <Option name="sans" state={fontSetting} setState={setFontSetting}>
              Aa
            </Option>
            <Option name="serif" state={fontSetting} setState={setFontSetting}>
              {' '}
              Aa{' '}
            </Option>
            <Option name="mono" state={fontSetting} setState={setFontSetting}>
              {' '}
              Aa
            </Option>
          </div>
        </div>

        <div className={`${styles.card} ${utilStyles.border}`}>
          <h4>Color</h4>
          <div className={styles.options}>
            <Option
              name="redOrange"
              state={colorSetting}
              setState={setColorSetting}
            >
              {colorSetting === 'redOrange' && '✓'}
            </Option>
            <Option name="aqua" state={colorSetting} setState={setColorSetting}>
              {colorSetting === 'aqua' && '✓'}
            </Option>
            <Option
              name="magenta"
              state={colorSetting}
              setState={setColorSetting}
            >
              {colorSetting === 'magenta' && '✓'}
            </Option>
          </div>
        </div>

        <button
          className={styles.button}
          onClick={() => applySettings(settings)}
        >
          Apply
        </button>
      </div>
      <div className={styles.overlay} onClick={() => setIsShowing(false)} />
    </>
  )
}
