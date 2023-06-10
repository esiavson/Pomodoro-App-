import { useState, useEffect } from 'react'
import Selector from './components/Selector'
import Timer from './components/Timer'
import SettingsModal from './components/SettingsModal'
import styles from './App.module.css'
import SettingsIcon from './components/svg/SettingsIcon'

function App() {
  // TIMER state
  const [timeLimit, setTimeLimit] = useState(1500)
  const [timeLeft, setTimeLeft] = useState(timeLimit)
  const [isRunning, setIsRunning] = useState(false)

  // SELECTOR state
  const [activeSelector, setActiveSelector] = useState('pomodoro')

  // SETTINGS state
  const [isShowing, setIsShowing] = useState(false)

  const [pomodoro, setPomodoro] = useState(1500)
  const [shortBreak, setShortBreak] = useState(300)
  const [longBreak, setLongBreak] = useState(900)

  const [font, setFont] = useState('sans')
  const [themeColor, setThemeColor] = useState('redOrange')

  const defaultModalSettings = {
    pomodoro,
    shortBreak,
    longBreak,
    font,
    themeColor,
  }

  const applySettings = (settings) => {
    setPomodoro(settings.pomodoroSetting)
    setShortBreak(settings.shortBreakSetting)
    setLongBreak(settings.longBreakSetting)
    setFont(settings.fontSetting)
    setThemeColor(settings.colorSetting)

    setIsShowing(false)
  }

  // COUNTDOWN logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const tID = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => {
        clearTimeout(tID)
      }
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false)
    }
  })

  // TIMER/SELECTOR logic
  useEffect(() => {
    if (activeSelector === 'pomodoro') {
      setTimeLimit(pomodoro)
    } else if (activeSelector === 'shortBreak') {
      setTimeLimit(shortBreak)
    } else if (activeSelector === 'longBreak') {
      setTimeLimit(longBreak)
    }
  }, [activeSelector, pomodoro, shortBreak, longBreak])

  useEffect(() => {
    setIsRunning(false)
    setTimeLeft(timeLimit)
  }, [timeLimit])

  const handleClick = () => {
    if (timeLeft === 0) {
      setTimeLeft(timeLimit)
    }
    setIsRunning(!isRunning)
  }

  return (
    <div className={styles.App}>
      <h2 className={styles.title}>pomodoro</h2>
      <Selector
        activeSelector={activeSelector}
        setActiveSelector={setActiveSelector}
        font={font}
        themeColor={themeColor}
       
      />
      <Timer
        timeLeft={timeLeft}
        timeLimit={timeLimit}
        handleClick={handleClick}
        isRunning={isRunning}
        font={font}
        themeColor={themeColor}
      />
      <SettingsIcon isShowing={isShowing} setIsShowing={setIsShowing} />
      {isShowing ? (
        <SettingsModal
          defaultSettings={defaultModalSettings}
          applySettings={applySettings}
          setIsShowing={setIsShowing}
        />
      ) : null}
    </div>
  )
  
}

export default App
