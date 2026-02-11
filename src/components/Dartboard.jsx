import { useState } from 'react';
import { gameState, BOARD_NUMBERS, RADII } from '../gameState';

// Helper to create segment path
function createSegmentPath(startAngle, endAngle, innerRadius, outerRadius, cx, cy) {
  const startRad = (startAngle - 90) * Math.PI / 180;
  const endRad = (endAngle - 90) * Math.PI / 180;

  const x1 = cx + innerRadius * Math.cos(startRad);
  const y1 = cy + innerRadius * Math.sin(startRad);
  const x2 = cx + outerRadius * Math.cos(startRad);
  const y2 = cy + outerRadius * Math.sin(startRad);
  const x3 = cx + outerRadius * Math.cos(endRad);
  const y3 = cy + outerRadius * Math.sin(endRad);
  const x4 = cx + innerRadius * Math.cos(endRad);
  const y4 = cy + innerRadius * Math.sin(endRad);

  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  return `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1} Z`;
}

// Parse checkout string to get target segments
function parseCheckout(checkout) {
  if (!checkout) return [];
  const targets = [];
  const parts = checkout.split("•").map(p => p.trim());

  parts.forEach((part, idx) => {
    if (part.startsWith("T")) {
      targets.push({ type: "triple", number: parseInt(part.slice(1)), order: idx });
    } else if (part.startsWith("D")) {
      targets.push({ type: "double", number: parseInt(part.slice(1)), order: idx });
    } else if (part === "BULL" || part === "50") {
      targets.push({ type: "bullseye", number: 50, order: idx });
    } else if (part === "25") {
      targets.push({ type: "outerBull", number: 25, order: idx });
    } else {
      targets.push({ type: "single", number: parseInt(part), order: idx });
    }
  });

  return targets;
}

export default function Dartboard() {
  const [hitMarkers, setHitMarkers] = useState([]);

  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const boardRadius = size / 2 - 10;

  const r = {
    bullseye: boardRadius * RADII.bullseye,
    outerBull: boardRadius * RADII.outerBull,
    tripleInner: boardRadius * RADII.tripleInner,
    tripleOuter: boardRadius * RADII.tripleOuter,
    doubleInner: boardRadius * RADII.doubleInner,
    doubleOuter: boardRadius * RADII.doubleOuter,
  };

  const segmentAngle = 360 / 20;
  const checkoutTargets = parseCheckout(gameState.checkout);

  const isTargetSegment = (number, type) => {
    return checkoutTargets.find(t => t.number === number && t.type === type);
  };

  const getHighlightColor = (target) => {
    if (!target) return null;
    const colors = ["#c8ff00", "#d4ff4d", "#e0ff80"];
    return colors[Math.min(target.order, colors.length - 1)];
  };

  const handleBoardClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - cx;
    const y = e.clientY - rect.top - cy;

    const distance = Math.sqrt(x * x + y * y);
    let angle = Math.atan2(y, x) * 180 / Math.PI + 90;
    if (angle < 0) angle += 360;

    const segmentIndex = Math.floor((angle + segmentAngle / 2) / segmentAngle) % 20;
    const number = BOARD_NUMBERS[segmentIndex];

    let label = "";
    let value = 0;

    if (distance <= r.bullseye) {
      label = "BULL";
      value = 50;
    } else if (distance <= r.outerBull) {
      label = "25";
      value = 25;
    } else if (distance >= r.tripleInner && distance <= r.tripleOuter) {
      label = `T${number}`;
      value = number * 3;
    } else if (distance >= r.doubleInner && distance <= r.doubleOuter) {
      label = `D${number}`;
      value = number * 2;
    } else if (distance <= r.doubleOuter) {
      label = `${number}`;
      value = number;
    } else {
      label = "MISS";
      value = 0;
    }

    if (hitMarkers.length < 3) {
      setHitMarkers([...hitMarkers, { x, y, label, value }]);
    }
  };

  const clearHits = () => setHitMarkers([]);
  const totalScore = hitMarkers.reduce((sum, h) => sum + h.value, 0);

  return (
    <div style={{
      background: "#000000",
      minHeight: "100%",
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      padding: "24px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}>
      {/* Header */}
      <div className="reveal" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "24px",
          color: "#ffffff",
          letterSpacing: "2px",
        }}>
          DARTBOARD
        </span>
        <span style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#666666",
        }}>
          Click to place darts
        </span>
      </div>

      {/* Dartboard */}
      <div className="reveal reveal-1" style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px 0",
      }}>
        <svg
          width={size}
          height={size}
          style={{ cursor: "crosshair" }}
          onClick={handleBoardClick}
        >
          <circle cx={cx} cy={cy} r={boardRadius} fill="#1a1a1a" />

          {BOARD_NUMBERS.map((num, i) => {
            const startAngle = i * segmentAngle - segmentAngle / 2;
            const endAngle = startAngle + segmentAngle;
            const isBlack = i % 2 === 0;

            const doubleTarget = isTargetSegment(num, "double");
            const tripleTarget = isTargetSegment(num, "triple");
            const singleTarget = isTargetSegment(num, "single");

            return (
              <g key={num}>
                <path
                  d={createSegmentPath(startAngle, endAngle, r.doubleInner, r.doubleOuter, cx, cy)}
                  fill={doubleTarget ? getHighlightColor(doubleTarget) : (isBlack ? "#e74c3c" : "#27ae60")}
                  stroke="#111"
                  strokeWidth="0.5"
                />
                <path
                  d={createSegmentPath(startAngle, endAngle, r.tripleOuter, r.doubleInner, cx, cy)}
                  fill={singleTarget ? getHighlightColor(singleTarget) : (isBlack ? "#1a1a1a" : "#f5f5dc")}
                  stroke="#111"
                  strokeWidth="0.5"
                />
                <path
                  d={createSegmentPath(startAngle, endAngle, r.tripleInner, r.tripleOuter, cx, cy)}
                  fill={tripleTarget ? getHighlightColor(tripleTarget) : (isBlack ? "#e74c3c" : "#27ae60")}
                  stroke="#111"
                  strokeWidth="0.5"
                />
                <path
                  d={createSegmentPath(startAngle, endAngle, r.outerBull, r.tripleInner, cx, cy)}
                  fill={singleTarget ? getHighlightColor(singleTarget) : (isBlack ? "#1a1a1a" : "#f5f5dc")}
                  stroke="#111"
                  strokeWidth="0.5"
                />
                {(() => {
                  const labelRadius = boardRadius * 1.08;
                  const midAngle = (startAngle + endAngle) / 2;
                  const rad = (midAngle - 90) * Math.PI / 180;
                  const lx = cx + labelRadius * Math.cos(rad);
                  const ly = cy + labelRadius * Math.sin(rad);
                  return (
                    <text
                      x={lx}
                      y={ly}
                      fill="#fff"
                      fontSize="11"
                      fontWeight="700"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {num}
                    </text>
                  );
                })()}
              </g>
            );
          })}

          <circle
            cx={cx}
            cy={cy}
            r={r.outerBull}
            fill={isTargetSegment(25, "outerBull") ? getHighlightColor(isTargetSegment(25, "outerBull")) : "#27ae60"}
            stroke="#111"
            strokeWidth="0.5"
          />
          <circle
            cx={cx}
            cy={cy}
            r={r.bullseye}
            fill={isTargetSegment(50, "bullseye") ? getHighlightColor(isTargetSegment(50, "bullseye")) : "#e74c3c"}
            stroke="#111"
            strokeWidth="0.5"
          />

          {hitMarkers.map((hit, i) => (
            <g key={i}>
              <circle
                cx={cx + hit.x}
                cy={cy + hit.y}
                r={8}
                fill="none"
                stroke="#c8ff00"
                strokeWidth="2"
              />
              <circle
                cx={cx + hit.x}
                cy={cy + hit.y}
                r={3}
                fill="#c8ff00"
              />
              <text
                x={cx + hit.x}
                y={cy + hit.y - 14}
                fill="#fff"
                fontSize="10"
                fontWeight="700"
                textAnchor="middle"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}
              >
                {hit.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Checkout */}
      <div className="reveal reveal-2" style={{
        background: "#c8ff00",
        padding: "16px 20px",
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
        }}>
          {gameState.checkout}
        </span>
      </div>

      {/* This Visit */}
      <div className="reveal reveal-3">
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}>
          <span style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#666666",
            letterSpacing: "2px",
          }}>
            THIS VISIT
          </span>
          <button
            onClick={clearHits}
            style={{
              padding: "6px 12px",
              fontSize: "11px",
              fontWeight: 600,
              color: "#666666",
              background: "transparent",
              border: "1px solid #333333",
              cursor: "pointer",
            }}
          >
            CLEAR
          </button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {[0, 1, 2].map(i => {
            const hit = hitMarkers[i];
            return (
              <div key={i} style={{
                flex: 1,
                height: "72px",
                background: hit ? "#c8ff00" : "#000000",
                border: hit ? "none" : "2px solid #333333",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <div style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: hit ? "#000000" : "#333333",
                  opacity: hit ? 0.7 : 1,
                }}>
                  {hit?.label ?? "–"}
                </div>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "28px",
                  color: hit ? "#000000" : "#333333",
                }}>
                  {hit?.value ?? ""}
                </div>
              </div>
            );
          })}
        </div>
        {hitMarkers.length > 0 && (
          <div style={{
            marginTop: "12px",
            textAlign: "center",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "24px",
            color: totalScore >= 100 ? "#c8ff00" : "#ffffff",
          }}>
            TOTAL: {totalScore}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="reveal reveal-4" style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        fontSize: "12px",
        color: "#666666",
        borderTop: "1px solid #333333",
        paddingTop: "16px",
      }}>
        <span style={{ fontWeight: 600 }}>LEGEND:</span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: "12px", height: "12px", background: "#c8ff00" }} />
          Checkout target
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#c8ff00" }} />
          Your dart
        </span>
      </div>
    </div>
  );
}
