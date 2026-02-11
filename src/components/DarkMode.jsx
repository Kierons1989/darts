import { gameState } from '../gameState';

export default function DarkMode() {
  return (
    <div style={{
      background: "#000000",
      minHeight: "100%",
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      padding: "24px 20px",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header */}
      <div className="reveal" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: "8px",
      }}>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "24px",
          color: "#ffffff",
          letterSpacing: "2px",
        }}>
          501
        </span>
        <span style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#666666",
          letterSpacing: "2px",
        }}>
          LEG {gameState.leg} / SET {gameState.set}
        </span>
      </div>

      {/* Divider */}
      <div className="reveal reveal-1" style={{
        height: "1px",
        background: "#333333",
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
            background: "#c8ff00",
            borderRadius: "50%",
            boxShadow: "0 0 12px #c8ff00",
          }} />
          <span style={{
            fontSize: "14px",
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
          gap: "24px",
          marginTop: "8px",
        }}>
          <div>
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#666666", letterSpacing: "1px" }}>AVG</span>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "24px",
              color: "#ffffff",
              marginLeft: "8px",
            }}>{gameState.p1.average}</span>
          </div>
          <div>
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#666666", letterSpacing: "1px" }}>LEGS</span>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "24px",
              color: "#ffffff",
              marginLeft: "8px",
            }}>{gameState.p1.legsWon}</span>
          </div>
        </div>

        {/* Darts thrown */}
        <div style={{
          display: "flex",
          gap: "6px",
          marginTop: "12px",
        }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: "32px",
              height: "4px",
              background: i < gameState.p1.dartsThrown ? "#c8ff00" : "#333333",
              boxShadow: i < gameState.p1.dartsThrown ? "0 0 8px rgba(200,255,0,0.5)" : "none",
            }} />
          ))}
        </div>
      </div>

      {/* Opponent */}
      <div className="reveal reveal-2" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        paddingBottom: "20px",
        borderBottom: "1px solid #333333",
        marginBottom: "20px",
      }}>
        <span style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#666666",
          letterSpacing: "3px",
        }}>
          {gameState.p2.name}
        </span>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "48px",
          color: "#666666",
          letterSpacing: "-1px",
        }}>
          {gameState.p2.score}
        </span>
      </div>

      {/* Checkout */}
      <div className="reveal reveal-3" style={{
        background: "#c8ff00",
        padding: "16px 20px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{
          fontSize: "12px",
          fontWeight: 700,
          color: "#000000",
          letterSpacing: "2px",
        }}>
          CHECKOUT
        </span>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "28px",
          color: "#000000",
          letterSpacing: "1px",
        }}>
          {gameState.checkout}
        </span>
      </div>

      {/* This Visit */}
      <div className="reveal reveal-4" style={{ marginBottom: "24px" }}>
        <div style={{
          fontSize: "11px",
          fontWeight: 700,
          color: "#666666",
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
                background: hasValue ? "#c8ff00" : "#000000",
                border: hasValue ? "none" : "2px solid #333333",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "36px",
                color: hasValue ? "#000000" : "#333333",
              }}>
                {gameState.p1.currentRound[i] ?? "–"}
              </div>
            );
          })}
        </div>
      </div>

      {/* Round History */}
      <div className="reveal reveal-5" style={{ flex: 1 }}>
        <div style={{
          fontSize: "11px",
          fontWeight: 700,
          color: "#666666",
          letterSpacing: "2px",
          marginBottom: "12px",
        }}>
          HISTORY
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "28px 1fr 1fr",
          borderTop: "2px solid #ffffff",
        }}>
          {gameState.p1.rounds.map((r, i) => (
            <div key={i} style={{ display: "contents" }}>
              <div style={{
                padding: "12px 0",
                fontSize: "13px",
                fontWeight: 600,
                color: "#444444",
                borderBottom: "1px solid #222222",
              }}>{i + 1}</div>
              <div style={{
                padding: "12px 0",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "24px",
                color: r >= 100 ? "#000000" : "#ffffff",
                textAlign: "right",
                borderBottom: "1px solid #222222",
                background: r >= 100 ? "#c8ff00" : "transparent",
                paddingRight: r >= 100 ? "8px" : "0",
              }}>{r}</div>
              <div style={{
                padding: "12px 0",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "24px",
                color: "#666666",
                textAlign: "right",
                borderBottom: "1px solid #222222",
              }}>{gameState.p2.rounds[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
