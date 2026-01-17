import React, { useState, useEffect } from "react";
import { domains } from "../data/quizData";
import { API_BASE_URL } from "../config";

export default function LeaderboardScreen() {
  const [participants, setParticipants] = useState([]);
  const [activeDomain, setActiveDomain] = useState("overall");
  const [animate, setAnimate] = useState(true);

  /* 🔁 Fetch leaderboard data */
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/participants/leaderboard`);
        const data = await res.json();
        if (data.success) {
          setParticipants(data.leaderboards);
        }
      } catch (err) {
        console.error("Leaderboard fetch error:", err);
      }
    };

    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 2000);
    return () => clearInterval(interval);
  }, []);

  /* 🔄 Auto switch domain every 4 seconds (with animation) */
  useEffect(() => {
    const allDomains = ["overall", ...domains.map(d => d.id)];
    let index = 0;

    const interval = setInterval(() => {
      setAnimate(false); // fade out

      setTimeout(() => {
        index = (index + 1) % allDomains.length;
        setActiveDomain(allDomains[index]);
        setAnimate(true); // fade in
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* 🧮 Sort leaderboard */
  const displayList = [...participants]
    .map(p => {
      let displayScore = 0;
      if (activeDomain === "overall") {
        displayScore = p.score || 0;
      } else {
        displayScore = (p.domainScores && p.domainScores[activeDomain]) || 0;
      }
      return { ...p, displayScore };
    })
    .sort((a, b) => b.displayScore - a.displayScore);

  return (
    <div
      className="screen-container"
      style={{
        height: "auto",
        minHeight: "100%",
        justifyContent: "flex-start",
        paddingTop: "4rem"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>
        Leaderboards
      </h1>

      {/* Domain Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          marginBottom: "2rem",
          flexWrap: "wrap"
        }}
      >
        <button
          className="btn"
          style={{
            opacity: activeDomain === "overall" ? 1 : 0.5,
            border:
              activeDomain === "overall"
                ? "2px solid var(--primary-color)"
                : "1px solid #333"
          }}
          onClick={() => setActiveDomain("overall")}
        >
          Overall
        </button>

        {domains.map(d => (
          <button
            key={d.id}
            className="btn"
            style={{
              opacity: activeDomain === d.id ? 1 : 0.5,
              border:
                activeDomain === d.id
                  ? "2px solid var(--primary-color)"
                  : "1px solid #333"
            }}
            onClick={() => setActiveDomain(d.id)}
          >
            {d.name}
          </button>
        ))}
      </div>

      {/* Leaderboard Card */}
      <div
        className="leaderboards-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
          maxWidth: "800px",
          margin: "0 auto"
        }}
      >
        <div
          className="card"
          style={{
            transition: "all 0.4s ease",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(12px)"
          }}
        >
          <h3>
            TOP SCORERS —{" "}
            {activeDomain === "overall"
              ? "OVERALL"
              : domains.find(d => d.id === activeDomain)?.name.toUpperCase()}
          </h3>

          <ul style={{ listStyle: "none", padding: 0 }}>
            {displayList.map((p, i) => (
              <li
                key={i}
                style={{
                  padding: "0.5rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1.2rem"
                }}
              >
                <span>
                  <span
                    style={{
                      color: "var(--primary-color)",
                      marginRight: "1rem"
                    }}
                  >
                    #{i + 1}
                  </span>
                  {p.name}
                </span>
                <span style={{ color: "var(--secondary-color)" }}>
                  {p.displayScore} pts
                </span>
              </li>
            ))}

            {displayList.length === 0 && (
              <li
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  color: "#666"
                }}
              >
                No scores yet
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
