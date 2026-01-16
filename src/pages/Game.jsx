import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { stages } from "../data/gameData";
import "../styles/Game.css";

import beach1 from "../assets/EcoDate Mobility.png";
import beach2 from "../assets/EcoDate food.png";
import beach3 from "../assets/EcoDate shopping.png";
import beach4 from "../assets/EcoDate Nature Outing.png";

const backgrounds = {
  1: beach1,
  2: beach2,
  3: beach3,
  4: beach4,
};

function Game() {


  const navigate = useNavigate();
  const location = useLocation();
  const playerName = location.state?.name || "Player";

  const [stageIndex, setStageIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [userInput, setUserInput] = useState("");
  const [inputEnabled, setInputEnabled] = useState(false);
  const [score, setScore] = useState(50);

  
  useEffect(()=>{
    if(!location.state){
      navigate("/")
    }
  }, []);

  // NEW
  const [gameFinished, setGameFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const displayRef = useRef("");
  const storyPanelRef = useRef(null);
  const typingLock = useRef(false);

  const stage = stages[stageIndex];

  const typeText = async (lines, speed = 50) => {//50
    if (typingLock.current) return;
    typingLock.current = true;

    for (const line of lines) {
      const processedLine = line.replace("${score}", score);

      for (const ch of processedLine) {
        displayRef.current += ch;
        setDisplay(displayRef.current);

        await new Promise((r) => setTimeout(r, speed));

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

  // Load stage intro
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

    displayRef.current += `\n👉 You: ${userInput}\n\n`;
    setDisplay(displayRef.current);

    const input = userInput.toLowerCase();
    setUserInput("");

    const outcome =
      stage.outcomes.find((o) =>
        o.keywords.some((k) => input.includes(k))
      ) || stage.fallback;

    const updatedScore = score + outcome.score;
    setScore(updatedScore);

    await typeText(outcome.text);

    await new Promise((r) => setTimeout(r, 1650));//1650

    if (stageIndex + 1 < stages.length) {
      setStageIndex((prev) => prev + 1);
    } else {
      // GAME COMPLETED
      setFinalScore(updatedScore);
      setGameFinished(true);
    

      const now = new Date();
      const dateTime = now.toLocaleString("en-IN", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      sendResultToSheet(playerName, updatedScore, dateTime);
    }
  };

  const handleKeyDown = (e) => {
    // ENTER → submit
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent new line
      if (inputEnabled && userInput.trim() && !gameFinished) {
        submitAnswer();
      }
    }

    // Block copy / paste / cut shortcuts
    if (
      (e.ctrlKey || e.metaKey) &&
      ["c", "v", "x"].includes(e.key.toLowerCase())
    ) {
      e.preventDefault();
    }
  };

  const sendResultToSheet = async (name, score, date) => {
    try{
    await fetch("https://script.google.com/macros/s/AKfycbyIpXDZEugjJnS_G9zRcQ0LK2eU3amVbXV8FOJtTipLOoo0QXrzcPsQo1nZPybrvVw1/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        score,
        date
      }),
    });
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div
      className="game-container"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)),
          url(${backgrounds[stage.id]})
        `,
      }}
    >
      {/* Story Panel */}
      <div className="story-panel" ref={storyPanelRef}>
        <pre className="story-text">{display}</pre>

        {/* FINAL BUTTON */}
        {gameFinished && (
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button
              onClick={() =>
                navigate("/result", {
                  state: {
                    finalScore: finalScore,
                    name: playerName,
                  },
                })
              }
              style={{
                marginTop: "20px",
                padding: "14px 30px",
                fontSize: "16px",
                background: "#11d698",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              View Results
            </button>
          </div>
        )}
      </div>

      {/* Input Panel */}
      <div className="input-panel">
        <textarea
          rows={2}
          value={userInput}
          disabled={!inputEnabled || gameFinished}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="..."
          onCopy={(e) => e.preventDefault()}
          onPaste={(e) => e.preventDefault()}
          onCut={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}      
        />
        <button
          disabled={!inputEnabled || !userInput || gameFinished}
          onClick={submitAnswer}
        >
          Submit Action
        </button>
      </div>
    </div>
  );
}

export default Game;