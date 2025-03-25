import { useState, useEffect } from "react";

export default function CountdownLightSwitch() {
  const [theme, setTheme] = useState("light");
  const [timeLeft, setTimeLeft] = useState(30); // Countdown starts at 30
  const [isRunning, setIsRunning] = useState(false);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Start the countdown timer
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false); // Stop the timer when it reaches 0
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // Calculate progress bar width percentage
  const progressPercentage = ((30 - timeLeft) / 30) * 100;

  return (
    <div className={`container ${theme}`}>
      <h1>Countdown & Theme Switch</h1>

      <button onClick={toggleTheme} className="toggle-btn">
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div className="timer">
        <h2>Time Left: {timeLeft}s</h2>
        <button onClick={() => setIsRunning(true)} disabled={isRunning}>
          Start Countdown
        </button>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <style>
        {`
          .container {
            text-align: center;
            padding: 20px;
            transition: background 0.3s, color 0.3s;
          }
          .light {
            background: #fff;
            color: #000;
          }
          .dark {
            background: #222;
            color: #fff;
          }
          .toggle-btn {
            padding: 10px 20px;
            margin: 10px;
            cursor: pointer;
            border: none;
            background: #007bff;
            color: white;
            border-radius: 5px;
          }
          .timer {
            margin: 20px;
            font-size: 1.5rem;
          }
          .progress-bar {
            width: 100%;
            height: 10px;
            background: #ddd;
            border-radius: 5px;
            margin-top: 10px;
          }
          .progress {
            height: 100%;
            background: #28a745;
            border-radius: 5px;
            transition: width 1s linear;
          }
        `}
      </style>
    </div>
  );
}
