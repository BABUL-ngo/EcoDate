import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CertificateCanvas from "../components/CertificateCanvas";
import "./results.css"

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, []);

  const finalScore = location.state?.finalScore ?? 0;
  const name = location.state?.name ?? "Player";

  // GENERATED ONCE
  const serial = `${new Date().getFullYear()}-${Math.floor(
    Math.random() * 100000
  )}`;
  const date = new Date().toLocaleDateString();

  const downloadCertificate = () => {
    const canvas = document.querySelector("canvas");
    const link = document.createElement("a");
    link.download = `${name}-EcoDate-Certificate.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="detail" style={{ textAlign: "center" }}>
      <br/>
      <br/>
      <h1>Game Completed 🎉</h1>

      <p>Compatibility Meter</p>
      <h2>{finalScore}%</h2>
      <br/>
      <button onClick={downloadCertificate}>
        Download Certificate 📄
      </button>
      <br/>

      <button onClick={() => navigate("/")}>
        Play Again
      </button>


      {/* PNG CERTIFICATE */}
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
        }}
      >
        <CertificateCanvas
          name={name}
          score={`${finalScore}%`}
          date={date}
          serial={serial}
        />
      </div>
    </div>
  );
}

export default Result;
