import { useEffect, useRef } from "react";
import certImg from "../assets/certificate.png";

function CertificateCanvas({ name, score, date, serial }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = certImg;

    image.onload = async () => {
      // Match canvas to image size
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw base certificate image
      ctx.drawImage(image, 0, 0);

      /* ---------------- FONT SETTINGS ---------------- */
      ctx.fillStyle = "#1b5e20";
      ctx.textAlign = "center";

      /* ---------------- NAME ---------------- */
      ctx.font = "60px Playfair Display";
      ctx.fillText(name,540, 440);

      /* ---------------- SCORE ---------------- */
      ctx.font = "105px Poppins";
      ctx.fillText(`${score}`, 600, 727);

      /* ---------------- DATE ---------------- */
      ctx.font = "28px monospace";
      ctx.fillText(date, 280, 802);

      /* ---------------- SERIAL NUMBER ---------------- */
      ctx.textAlign = "right";
      ctx.font = "28px monospace";
      ctx.fillText(serial, 350, 755);
    };
  }, [name, score, date, serial]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        maxWidth: "100%",
        borderRadius: "12px",
      }}
    />
  );
}

export default CertificateCanvas;