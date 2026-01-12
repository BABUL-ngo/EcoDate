import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const finalScore = location.state?.finalScore ?? 0;
  const name = location.state?.name ?? "Player";

  const downloadCertificate = async () => {
    const cert = document.getElementById("certificate");

    const canvas = await html2canvas(cert, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape");
    pdf.addImage(imgData, "PNG", 10, 10, 280, 160);
    pdf.save(`${name}-Harithavaran-Certificate.pdf`);
  };

return (
  <div
    style={{
      minHeight: "100vh",
      overflowY: "auto",
      // padding: "-100px",
      textAlign: "center",
    }}
  >
    <h1>Game Completed 🎉</h1>

    <p>Pollution Meter</p>
    <h2>{finalScore}%</h2>

    {/* Certificate */}
    <div
      id="certificate"
      style={{
        position: "relative",
        margin: "40px auto",
        padding: "60px",
        width: "900px",
        background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
        border: "12px solid #2e7d32",
        borderRadius: "16px",
        textAlign: "center",
        color: "#1b5e20",
        fontFamily: "Poppins",
      }}
    >
      {/* Watermark */}
      <img
        src="/logo.png"
        alt=""
        style={{
          position: "absolute",
          opacity: 0.08,
          width: "400px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Logo */}
      {/* <img src="/logo.png" alt="Logo" style={{ width: "100px" }} /> */}

      <h1 style={{ fontFamily: "Playfair Display", fontSize: "48px" }}>
        Certificate of Participation
      </h1>

      <p>This certifies that</p>

      <h2 style={{ fontSize: "36px", margin: "20px 0" }}>
        {name}
      </h2>

      <p>
        has successfully completed the <strong>Harithavaran</strong>
        <br />
        Environmental Awareness Game
      </p>

      <p style={{ marginTop: "30px" }}>
        Final Score: <strong>{finalScore}%</strong>
      </p>

      <p style={{ marginTop: "40px", fontSize: "14px" }}>
        Issued on {new Date().toLocaleDateString()}
      </p>
    </div>

    <button onClick={downloadCertificate}>
      Download Certificate 📄
    </button>

    <br /><br />

    <button onClick={() => navigate("/")}>
      Play Again
    </button>
  </div>
);

}

export default Result;