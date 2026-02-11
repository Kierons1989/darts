import { gameState } from '../gameState';

export default function ScoreView() {
  return (
    <div style={{
      background: "#15151e",
      minHeight: "100%",
      fontFamily: "'Titillium Web', sans-serif",
      padding: "24px 20px",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header */}
      <div className="reveal" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <div style={{
            width: "4px",
            height: "24px",
            background: "#1D4ED8",
            borderRadius: "2px",
          }} />
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "24px",
            color: "#ffffff",
            letterSpacing: "2px",
          }}>
            501
          </span>
        </div>
        <span style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#6b7280",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}>
          LEG {gameState.leg} / SET {gameState.set}
        </span>
      </div>

      {/* Divider */}
      <div className="reveal reveal-1" style={{
        height: "1px",
        background: "linear-gradient(90deg, #1D4ED8 0%, #1D4ED8 30%, #2a2a3a 30%, #2a2a3a 100%)",
        marginBottom: "24px",
      }} />

      {/* Active Player Score */}
      <div className="reveal reveal-1" style={{ marginBottom: "20px" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "4px",
        }}>
          <div style={{
            width: "8px",
            height: "8px",
            background: "#1D4ED8",
            borderRadius: "50%",
            boxShadow: "0 0 12px rgba(29,78,216,0.8), 0 0 4px rgba(29,78,216,0.4)",
          }} />
          <span style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "3px",
          }}>
            {gameState.p1.name}
          </span>
        </div>

        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "120px",
          lineHeight: 0.85,
          color: "#ffffff",
          letterSpacing: "-4px",
          marginLeft: "-4px",
        }}>
          {gameState.p1.score}
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex",
          gap: "16px",
          marginTop: "10px",
        }}>
          {[
            { label: "AVG", value: gameState.p1.average },
            { label: "LEGS", value: gameState.p1.legsWon },
          ].map(stat => (
            <div key={stat.label} style={{
              background: "#1e1e2e",
              border: "1px solid #2a2a3a",
              borderRadius: "6px",
              padding: "8px 14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <span style={{ fontSize: "10px", fontWeight: 700, color: "#6b7280", letterSpacing: "1.5px" }}>{stat.label}</span>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "22px",
                color: "#ffffff",
              }}>{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Darts thrown */}
        <div style={{
          display: "flex",
          gap: "6px",
          marginTop: "14px",
        }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: "32px",
              height: "4px",
              borderRadius: "2px",
              background: i < gameState.p1.dartsThrown ? "#1D4ED8" : "#2a2a3a",
              boxShadow: i < gameState.p1.dartsThrown ? "0 0 8px rgba(29,78,216,0.5)" : "none",
              transition: "all 0.3s ease",
            }} />
          ))}
        </div>
      </div>

      {/* Opponent */}
      <div className="reveal reveal-2" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        background: "#1e1e2e",
        border: "1px solid #2a2a3a",
        borderRadius: "8px",
        marginBottom: "20px",
      }}>
        <span style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#6b7280",
          letterSpacing: "3px",
        }}>
          {gameState.p2.name}
        </span>
        <div style={{
          display: "flex",
          alignItems: "baseline",
          gap: "12px",
        }}>
          <span style={{
            fontSize: "10px",
            fontWeight: 700,
            color: "#4b5563",
            letterSpacing: "1px",
          }}>AVG {gameState.p2.average}</span>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "44px",
            color: "#6b7280",
            letterSpacing: "-1px",
          }}>
            {gameState.p2.score}
          </span>
        </div>
      </div>

      {/* Checkout */}
      <div className="reveal reveal-3" style={{
        background: "#1D4ED8",
        padding: "16px 20px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px",
        boxShadow: "0 4px 24px rgba(29,78,216,0.3), 0 1px 4px rgba(29,78,216,0.2)",
      }}>
        <span style={{
          fontSize: "11px",
          fontWeight: 700,
          color: "rgba(255,255,255,0.85)",
          letterSpacing: "2px",
        }}>
          CHECKOUT
        </span>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "28px",
          color: "#ffffff",
          letterSpacing: "1px",
        }}>
          {gameState.checkout}
        </span>
      </div>

      {/* This Visit */}
      <div className="reveal reveal-4" style={{ marginBottom: "24px" }}>
        <div style={{
          fontSize: "10px",
          fontWeight: 700,
          color: "#6b7280",
          letterSpacing: "2px",
          marginBottom: "12px",
        }}>
          THIS VISIT
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {[0, 1, 2].map(i => {
            const hasValue = gameState.p1.currentRound[i] != null;
            return (
              <div key={i} style={{
                flex: 1,
                height: "72px",
                background: hasValue ? "#1D4ED8" : "#1e1e2e",
                border: hasValue ? "none" : "1px solid #2a2a3a",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "36px",
                color: hasValue ? "#ffffff" : "#2a2a3a",
                boxShadow: hasValue ? "0 4px 16px rgba(29,78,216,0.25)" : "none",
                transition: "all 0.3s ease",
              }}>
                {gameState.p1.currentRound[i] ?? "\u2013"}
              </div>
            );
          })}
        </div>
      </div>

      {/* Round History */}
      <div className="reveal reveal-5" style={{ flex: 1 }}>
        <div style={{
          fontSize: "10px",
          fontWeight: 700,
          color: "#6b7280",
          letterSpacing: "2px",
          marginBottom: "12px",
        }}>
          HISTORY
        </div>

        <div style={{
          background: "#1e1e2e",
          border: "1px solid #2a2a3a",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {/* Table header */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "36px 1fr 1fr",
            padding: "0 12px",
            borderBottom: "2px solid #1D4ED8",
          }}>
            <div style={{
              padding: "10px 0",
              fontSize: "9px",
              fontWeight: 700,
              color: "#4b5563",
              letterSpacing: "1px",
            }}>RD</div>
            <div style={{
              padding: "10px 0",
              fontSize: "9px",
              fontWeight: 700,
              color: "#1D4ED8",
              letterSpacing: "1px",
              textAlign: "right",
            }}>{gameState.p1.name}</div>
            <div style={{
              padding: "10px 0",
              fontSize: "9px",
              fontWeight: 700,
              color: "#4b5563",
              letterSpacing: "1px",
              textAlign: "right",
            }}>{gameState.p2.name}</div>
          </div>

          {gameState.p1.rounds.map((r, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "36px 1fr 1fr",
              padding: "0 12px",
              borderBottom: i < gameState.p1.rounds.length - 1 ? "1px solid #252535" : "none",
              background: r >= 100 ? "rgba(29,78,216,0.1)" : "transparent",
            }}>
              <div style={{
                padding: "12px 0",
                fontSize: "12px",
                fontWeight: 600,
                color: "#4b5563",
              }}>{i + 1}</div>
              <div style={{
                padding: "12px 0",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "22px",
                color: r >= 100 ? "#1D4ED8" : "#ffffff",
                textAlign: "right",
                fontWeight: r >= 100 ? 400 : 400,
              }}>{r}</div>
              <div style={{
                padding: "12px 0",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "22px",
                color: "#4b5563",
                textAlign: "right",
              }}>{gameState.p2.rounds[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
