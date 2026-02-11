import { useState, useEffect } from 'react';
import F1Mode from './components/F1Mode';
import DesignSystem from './components/DesignSystem';

export default function App() {
  const [route, setRoute] = useState("app");

  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname;
      if (path === "/designsystem" || path === "/designsystem/") {
        setRoute("designsystem");
      } else {
        setRoute("app");
      }
    };

    handleRoute();
    window.addEventListener("popstate", handleRoute);
    return () => window.removeEventListener("popstate", handleRoute);
  }, []);

  if (route === "designsystem") {
    return <DesignSystem />;
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      background: "#15151e",
      fontFamily: "'Titillium Web', sans-serif",
    }}>
      <div style={{
        flex: 1,
        overflow: "auto",
      }}>
        <F1Mode />
      </div>
    </div>
  );
}
