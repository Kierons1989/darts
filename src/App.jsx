import { useState, useEffect } from 'react';
import LightMode from './components/LightMode';
import DarkMode from './components/DarkMode';
import Dartboard from './components/Dartboard';
import DesignSystem from './components/DesignSystem';

const views = ["light", "dark", "board"];
const labels = {
  light: "LIGHT",
  dark: "DARK",
  board: "BOARD"
};

export default function App() {
  const [active, setActive] = useState("light");

  // Hidden design system page — access via ?design-system in URL
  useEffect(() => {
    if (window.location.search.includes("design-system")) {
      setActive("design-system");
    }
  }, []);

  if (active === "design-system") {
    return <DesignSystem />;
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      background: "#000000",
      fontFamily: "'Barlow Semi Condensed', sans-serif",
    }}>
      {/* View switcher */}
      <div style={{
        display: "flex",
        padding: "12px",
        gap: "8px",
      }}>
        {views.map(v => (
          <button
            key={v}
            onClick={() => setActive(v)}
            style={{
              flex: 1,
              padding: "14px",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "18px",
              letterSpacing: "3px",
              color: active === v ? "#000000" : "#666666",
              background: active === v ? "#c8ff00" : "transparent",
              border: active === v ? "none" : "1px solid #333333",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {labels[v]}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        margin: "0 12px 12px",
        overflow: "auto",
      }}>
        {active === "light" && <LightMode key="light" />}
        {active === "dark" && <DarkMode key="dark" />}
        {active === "board" && <Dartboard key="board" />}
      </div>
    </div>
  );
}
