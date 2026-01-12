import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { stages } from "../data/gameData";
import "../styles/Game.css";
import beach1 from "../assets/beach-day1.jpg";
import beach2 from "../assets/beach-day2.jpg";
import beach3 from "../assets/beach-day3.jpg";
import beach4 from "../assets/beach-day4.jpg";


const backgrounds = {
  1: beach1,
  2: beach2,
  3: beach3,
  4: beach4,
};

function Game() {
  const navigate = useNavigate();

  const [stageIndex, setStageIndex] = useState(0); // track current stage
  const [display, setDisplay] = useState("");
  const [userInput, setUserInput] = useState("");
  const [inputEnabled, setInputEnabled] = useState(false);
  const [score, setScore] = useState(50);

  const displayRef = useRef(""); // full cumulative text
  const storyPanelRef = useRef(null);
  const typingLock = useRef(false); // prevent double typing


  const location = useLocation();
  const playerName = location.state?.name || "Player";

  const stage = stages[stageIndex];

  const typeText = async (lines, speed = 25) => {
  if (typingLock.current) return;
  typingLock.current = true;

  for (const line of lines) {
    // Replace ${score} dynamically
    const processedLine = line.replace("${score}", score);

    for (const ch of processedLine) {
      displayRef.current += ch;
      setDisplay(displayRef.current);
      await new Promise((r) => setTimeout(r, speed));

      // Auto-scroll
      storyPanelRef.current?.scrollTo({
        top: storyPanelRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
    displayRef.current += "\n";
    setDisplay(displayRef.current);
  }

  typingLock.current = false;
};

  // Display stage intro when stageIndex changes
  useEffect(() => {
    setInputEnabled(false);
    (async () => {
      await typeText(stage.intro);
      setInputEnabled(true);
    })();
  }, [stageIndex]);

  const submitAnswer = async () => {
    if (!userInput) return;

    setInputEnabled(false);

    // Display user's input
    displayRef.current += `\n👉 You: ${userInput}\n\n`;
    setDisplay(displayRef.current);
    const input = userInput.toLowerCase();
    setUserInput("");

    // Find outcome
    const outcome =
      stage.outcomes.find((o) => o.keywords.some((k) => input.includes(k))) ||
      stage.fallback;

    setScore((prev) => prev + outcome.score);

    // Show outcome
    await typeText(outcome.text);

    // Pause 3 seconds before next stage
    await new Promise((r) => setTimeout(r, 3000));

    // Move to next stage or go to results
    if (stageIndex + 1 < stages.length) {
      setStageIndex((prev) => prev + 1);
    } else {
      navigate("/result", {
        state: {
          finalScore: score + outcome.score,
          name: playerName,
        },
      });
    }
  };

  return (
<div
  className="game-container"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)),
      url(${backgrounds[stage.id]})
    `
  }}
>
      {/* Story Panel */}
      <div className="story-panel" ref={storyPanelRef}>
        <pre className="story-text">{display}</pre>
      </div>

      {/* User Input Panel */}
      <div className="input-panel">
        <textarea
          rows={2}
          className="input-textarea"
          value={userInput}
          disabled={!inputEnabled}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="..."
        />
        <button
          className="submit-button"
          disabled={!inputEnabled || !userInput}
          onClick={submitAnswer}
        >
          Submit Action
        </button>
      </div>
    </div>
  );
}

export default Game;
