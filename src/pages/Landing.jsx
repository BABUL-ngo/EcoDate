import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Background.css";
import "../styles/Landing.css";

function Landing() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const startGame = () => {
    if (!name.trim()) return alert("Enter you full name to proceed.");
    navigate("/game", { state: { name } });
  };

  return (
    <div className="background">
      <div className="landing-content">
        <h1>Welcome to EcoDate</h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter you full name to proceed"
          className="text"
        />
        <div className="condition">
          <p>this name will be appeared in you certificate</p>
        </div>
        <br /><br />

        <button onClick={startGame}>Start Game</button>
      </div>
    </div>
  );
}

export default Landing;
