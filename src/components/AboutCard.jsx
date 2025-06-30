import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function AboutCard() {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <Card
      className="quote-card-view"
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <Card.Body>
        <blockquote
          className="blockquote mb-0 text-white"
          style={{ lineHeight: "1.7", fontSize: "15px" }}
        >
          <p style={{ textAlign: "justify" }}>
            👋 Hi, I'm <span className="purple">Sai Rishi Palavalasa</span>, a final-year Information Technology student at{" "}
            <strong className="purple">GMR Institute of Technology (GMRIT)</strong>, Rajam.
          </p>

          <p style={{ textAlign: "justify" }}>
            I'm passionate about Full-Stack Web Development using the{" "}
            <strong className="purple">MERN stack</strong> — MongoDB, Express, React, and Node.js.
            I enjoy creating clean, responsive web applications that balance user experience and performance.
          </p>

          
              <p style={{ textAlign: "justify", marginTop: "1rem" }}>
                Beyond development, I actively explore technologies like{" "}
                <strong className="purple">AWS</strong> and love solving{" "}
                <strong className="purple">Data Structures & Algorithms</strong> on platforms like LeetCode.
              </p>

              <p style={{ textAlign: "justify" }}>
                I have a strong foundation in programming languages like{" "}
                <strong>Java</strong>, <strong>Python</strong>, and <strong>C</strong>, which I often use
                to tackle real-world challenges and build scalable systems.
              </p>

              {showMore && (
            <>
              <p style={{ textAlign: "justify" }}>
                I'm a strong believer in consistency, and I spend time each day building, learning, or refining something new.
                Whether it's a personal side project, a new framework, or a better problem-solving technique — I’m always experimenting.
              </p>

              <p style={{ textAlign: "justify" }}>
                My goal is to become a software engineer who not only delivers results but also inspires teamwork, shares knowledge,
                and contributes to meaningful innovations in tech. I'm driven by curiosity, and I'm always looking forward to what’s next.
              </p>
            </>
          )}

<div style={{ display: "flex", gap: "16px", marginTop: "16px", justifyContent: "flex-start" }}>
  {/* Show More / Show Less Button */}
  <Button
    onClick={toggleContent}
    style={{
      border: "none",
      padding: "8px 20px",
      borderRadius: "20px",
      fontWeight: "600",
      fontSize: "14px",
      background: "linear-gradient(135deg, #A084DC, #8E7AB5)",
      color: "#fff",
      boxShadow: "0 4px 12px rgba(160, 132, 220, 0.3)",
      transition: "all 0.3s ease-in-out",
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "scale(1.05)";
      e.target.style.boxShadow = "0 6px 16px rgba(160, 132, 220, 0.4)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "scale(1)";
      e.target.style.boxShadow = "0 4px 12px rgba(160, 132, 220, 0.3)";
    }}
  >
    {showMore ? "Show Less ▲" : "Read More ▼"}
  </Button>

  {/* Contact Me Button (left aligned, matching style) */}
  <Button
    onClick={() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
    style={{
      border: "none",
      padding: "8px 20px",
      borderRadius: "20px",
      fontWeight: "600",
      fontSize: "14px",
      background: "linear-gradient(135deg, #A084DC, #8E7AB5)",
      color: "#fff",
      boxShadow: "0 4px 12px rgba(160, 132, 220, 0.3)",
      transition: "all 0.3s ease-in-out",
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "scale(1.05)";
      e.target.style.boxShadow = "0 6px 16px rgba(160, 132, 220, 0.4)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "scale(1)";
      e.target.style.boxShadow = "0 4px 12px rgba(160, 132, 220, 0.3)";
    }}
  >
    Contact Me
  </Button>
</div>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
