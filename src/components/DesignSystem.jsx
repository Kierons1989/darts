export default function DesignSystem() {
  const colors = {
    primary: [
      { name: "--volt", value: "#c8ff00", label: "Volt Yellow (Primary Accent)" },
    ],
    base: [
      { name: "--black", value: "#000000", label: "Black" },
      { name: "--white", value: "#ffffff", label: "White" },
    ],
    neutrals: [
      { name: "gray-800", value: "#1a1a1a", label: "Board Background" },
      { name: "gray-700", value: "#222222", label: "Dark Borders" },
      { name: "gray-600", value: "#333333", label: "Borders / Inactive" },
      { name: "gray-500", value: "#444444", label: "Row Numbers (Dark)" },
      { name: "gray-400", value: "#666666", label: "Muted Text" },
      { name: "gray-300", value: "#999999", label: "Secondary Text" },
      { name: "gray-200", value: "#cccccc", label: "Placeholder Text" },
      { name: "gray-100", value: "#e5e5e5", label: "Light Borders / Dividers" },
    ],
    semantic: [
      { name: "red", value: "#e74c3c", label: "Dartboard Red" },
      { name: "green", value: "#27ae60", label: "Dartboard Green" },
      { name: "cream", value: "#f5f5dc", label: "Dartboard Cream" },
    ],
    voltVariants: [
      { name: "volt", value: "#c8ff00", label: "Primary" },
      { name: "volt-light", value: "#d4ff4d", label: "Checkout 2nd" },
      { name: "volt-lighter", value: "#e0ff80", label: "Checkout 3rd" },
    ],
  };

  const typography = {
    display: {
      family: "'Bebas Neue', sans-serif",
      name: "Bebas Neue",
      specimens: [
        { size: "120px", lineHeight: "0.85", letterSpacing: "-4px", label: "Hero Score", sample: "141" },
        { size: "48px", lineHeight: "1", letterSpacing: "-1px", label: "Opponent Score", sample: "218" },
        { size: "36px", lineHeight: "1", letterSpacing: "0", label: "Visit Dart", sample: "20" },
        { size: "28px", lineHeight: "1", letterSpacing: "1px", label: "Checkout Value", sample: "T20 • 17 • D22" },
        { size: "24px", lineHeight: "1", letterSpacing: "2px", label: "Header / Stats", sample: "501" },
        { size: "18px", lineHeight: "1", letterSpacing: "3px", label: "Nav Button", sample: "LIGHT" },
      ],
    },
    body: {
      family: "'Barlow Semi Condensed', sans-serif",
      name: "Barlow Semi Condensed",
      specimens: [
        { size: "14px", weight: 700, letterSpacing: "3px", label: "Player Name", sample: "ANDERSON" },
        { size: "14px", weight: 600, letterSpacing: "3px", label: "Opponent Name", sample: "VAN GERWEN" },
        { size: "13px", weight: 600, letterSpacing: "2px", label: "Leg/Set Info", sample: "LEG 3 / SET 1" },
        { size: "13px", weight: 600, letterSpacing: "0", label: "Row Number", sample: "1" },
        { size: "12px", weight: 700, letterSpacing: "2px", label: "Section Label (Bold)", sample: "CHECKOUT" },
        { size: "11px", weight: 700, letterSpacing: "2px", label: "Category Label", sample: "THIS VISIT" },
        { size: "11px", weight: 600, letterSpacing: "1px", label: "Stat Label", sample: "AVG" },
      ],
    },
  };

  const spacing = [
    { value: "4px", usage: "Dart indicator height, tiny gaps" },
    { value: "6px", usage: "Dart indicator gaps" },
    { value: "8px", usage: "Small gaps, button gaps, card gaps, stats margin-top" },
    { value: "12px", usage: "Medium padding, section gaps, label margin-bottom, player name gap" },
    { value: "14px", usage: "Button padding" },
    { value: "16px", usage: "Checkout padding, section padding-top" },
    { value: "20px", usage: "Content padding horizontal, section margin-bottom" },
    { value: "24px", usage: "Content padding top, large margin-bottom, stat gaps" },
  ];

  const animations = [
    { name: ".reveal", delay: "0s", description: "Base reveal — fade up 20px" },
    { name: ".reveal-1", delay: "0.05s", description: "Stagger step 1" },
    { name: ".reveal-2", delay: "0.1s", description: "Stagger step 2" },
    { name: ".reveal-3", delay: "0.15s", description: "Stagger step 3" },
    { name: ".reveal-4", delay: "0.2s", description: "Stagger step 4" },
    { name: ".reveal-5", delay: "0.25s", description: "Stagger step 5" },
  ];

  const sectionStyle = {
    marginBottom: "48px",
  };

  const sectionTitleStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "36px",
    color: "#ffffff",
    letterSpacing: "4px",
    borderBottom: "2px solid #c8ff00",
    paddingBottom: "8px",
    marginBottom: "24px",
  };

  const subsectionTitleStyle = {
    fontFamily: "'Barlow Semi Condensed', sans-serif",
    fontSize: "12px",
    fontWeight: 700,
    color: "#666666",
    letterSpacing: "2px",
    marginBottom: "16px",
    marginTop: "32px",
  };

  const labelStyle = {
    fontFamily: "'Barlow Semi Condensed', sans-serif",
    fontSize: "11px",
    fontWeight: 600,
    color: "#666666",
    letterSpacing: "1px",
  };

  const valueStyle = {
    fontFamily: "'Barlow Semi Condensed', sans-serif",
    fontSize: "12px",
    fontWeight: 500,
    color: "#999999",
  };

  return (
    <div style={{
      background: "#000000",
      minHeight: "100%",
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      padding: "32px 24px",
      color: "#ffffff",
    }}>
      {/* Page Header */}
      <div style={{ marginBottom: "48px" }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "14px",
          color: "#666666",
          letterSpacing: "4px",
          marginBottom: "8px",
        }}>
          DARTS SCORER
        </div>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "64px",
          color: "#c8ff00",
          letterSpacing: "6px",
          lineHeight: 0.9,
        }}>
          DESIGN SYSTEM
        </div>
        <div style={{
          height: "3px",
          background: "#c8ff00",
          marginTop: "16px",
          width: "80px",
        }} />
      </div>

      {/* Table of Contents */}
      <div style={sectionStyle}>
        <div style={sectionTitleStyle}>INDEX</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {["Colors", "Typography", "Spacing", "Components", "Effects"].map((item, i) => (
            <a
              key={item}
              href={`#ds-${item.toLowerCase()}`}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "20px",
                color: "#ffffff",
                letterSpacing: "2px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ color: "#c8ff00", fontSize: "14px", fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 600 }}>
                0{i + 1}
              </span>
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      {/* ==================== COLORS ==================== */}
      <div id="ds-colors" style={sectionStyle}>
        <div style={sectionTitleStyle}>COLORS</div>

        {/* Primary */}
        <div style={subsectionTitleStyle}>PRIMARY ACCENT</div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {colors.primary.map(c => (
            <div key={c.value} style={{ width: "160px" }}>
              <div style={{
                width: "100%",
                height: "80px",
                background: c.value,
                marginBottom: "8px",
                border: "1px solid #333333",
              }} />
              <div style={labelStyle}>{c.label}</div>
              <div style={valueStyle}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* Volt Variants */}
        <div style={subsectionTitleStyle}>VOLT VARIANTS (CHECKOUT HIGHLIGHTS)</div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {colors.voltVariants.map(c => (
            <div key={c.value} style={{ width: "160px" }}>
              <div style={{
                width: "100%",
                height: "80px",
                background: c.value,
                marginBottom: "8px",
              }} />
              <div style={labelStyle}>{c.label}</div>
              <div style={valueStyle}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* Base */}
        <div style={subsectionTitleStyle}>BASE PALETTE</div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {colors.base.map(c => (
            <div key={c.value} style={{ width: "160px" }}>
              <div style={{
                width: "100%",
                height: "80px",
                background: c.value,
                marginBottom: "8px",
                border: "1px solid #333333",
              }} />
              <div style={labelStyle}>{c.label}</div>
              <div style={valueStyle}>{c.name}: {c.value}</div>
            </div>
          ))}
        </div>

        {/* Neutrals */}
        <div style={subsectionTitleStyle}>NEUTRALS</div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {colors.neutrals.map(c => (
            <div key={c.value} style={{ width: "160px" }}>
              <div style={{
                width: "100%",
                height: "80px",
                background: c.value,
                marginBottom: "8px",
                border: "1px solid #333333",
              }} />
              <div style={labelStyle}>{c.label}</div>
              <div style={valueStyle}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* Semantic */}
        <div style={subsectionTitleStyle}>SEMANTIC / DARTBOARD</div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {colors.semantic.map(c => (
            <div key={c.value} style={{ width: "160px" }}>
              <div style={{
                width: "100%",
                height: "80px",
                background: c.value,
                marginBottom: "8px",
              }} />
              <div style={labelStyle}>{c.label}</div>
              <div style={valueStyle}>{c.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== TYPOGRAPHY ==================== */}
      <div id="ds-typography" style={sectionStyle}>
        <div style={sectionTitleStyle}>TYPOGRAPHY</div>

        {/* Display Font */}
        <div style={subsectionTitleStyle}>DISPLAY — {typography.display.name.toUpperCase()}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {typography.display.specimens.map(spec => (
            <div key={spec.label} style={{
              borderBottom: "1px solid #222222",
              paddingBottom: "16px",
            }}>
              <div style={{
                fontFamily: typography.display.family,
                fontSize: spec.size,
                lineHeight: spec.lineHeight,
                letterSpacing: spec.letterSpacing,
                color: "#ffffff",
                marginBottom: "8px",
              }}>
                {spec.sample}
              </div>
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                <span style={labelStyle}>{spec.label}</span>
                <span style={valueStyle}>{spec.size} / {spec.lineHeight} / {spec.letterSpacing}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Body Font */}
        <div style={subsectionTitleStyle}>BODY — {typography.body.name.toUpperCase()}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {typography.body.specimens.map(spec => (
            <div key={spec.label} style={{
              borderBottom: "1px solid #222222",
              paddingBottom: "12px",
            }}>
              <div style={{
                fontFamily: typography.body.family,
                fontSize: spec.size,
                fontWeight: spec.weight,
                letterSpacing: spec.letterSpacing,
                color: "#ffffff",
                marginBottom: "6px",
              }}>
                {spec.sample}
              </div>
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                <span style={labelStyle}>{spec.label}</span>
                <span style={valueStyle}>{spec.size} / wt {spec.weight} / {spec.letterSpacing}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== SPACING ==================== */}
      <div id="ds-spacing" style={sectionStyle}>
        <div style={sectionTitleStyle}>SPACING</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {spacing.map(s => (
            <div key={s.value} style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}>
              <div style={{
                width: parseInt(s.value),
                height: parseInt(s.value),
                minWidth: parseInt(s.value),
                background: "#c8ff00",
                opacity: 0.8,
              }} />
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "20px",
                color: "#ffffff",
                letterSpacing: "1px",
                minWidth: "48px",
              }}>
                {s.value}
              </div>
              <div style={valueStyle}>{s.usage}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== COMPONENTS ==================== */}
      <div id="ds-components" style={sectionStyle}>
        <div style={sectionTitleStyle}>COMPONENTS</div>

        {/* Buttons */}
        <div style={subsectionTitleStyle}>BUTTONS — NAV TABS</div>
        <div style={{
          display: "flex",
          gap: "8px",
          marginBottom: "32px",
        }}>
          <button style={{
            flex: 1,
            padding: "14px",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "18px",
            letterSpacing: "3px",
            color: "#000000",
            background: "#c8ff00",
            border: "none",
            cursor: "pointer",
          }}>
            ACTIVE
          </button>
          <button style={{
            flex: 1,
            padding: "14px",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "18px",
            letterSpacing: "3px",
            color: "#666666",
            background: "transparent",
            border: "1px solid #333333",
            cursor: "pointer",
          }}>
            INACTIVE
          </button>
          <button style={{
            flex: 1,
            padding: "6px 12px",
            fontSize: "11px",
            fontWeight: 600,
            color: "#666666",
            background: "transparent",
            border: "1px solid #333333",
            cursor: "pointer",
            fontFamily: "'Barlow Semi Condensed', sans-serif",
          }}>
            CLEAR (UTILITY)
          </button>
        </div>

        {/* Active Player Indicator */}
        <div style={subsectionTitleStyle}>ACTIVE PLAYER INDICATOR</div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "32px",
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
            ANDERSON
          </span>
        </div>

        {/* Dart Throw Indicators */}
        <div style={subsectionTitleStyle}>DART THROW INDICATORS</div>
        <div style={{
          display: "flex",
          gap: "6px",
          marginBottom: "8px",
        }}>
          {[true, false, false].map((active, i) => (
            <div key={i} style={{
              width: "32px",
              height: "4px",
              background: active ? "#c8ff00" : "#333333",
              boxShadow: active ? "0 0 8px rgba(200,255,0,0.5)" : "none",
            }} />
          ))}
        </div>
        <div style={valueStyle}>1 of 3 darts thrown</div>
        <div style={{
          display: "flex",
          gap: "6px",
          marginTop: "12px",
          marginBottom: "32px",
        }}>
          {[true, true, true].map((active, i) => (
            <div key={i} style={{
              width: "32px",
              height: "4px",
              background: "#c8ff00",
              boxShadow: "0 0 8px rgba(200,255,0,0.5)",
            }} />
          ))}
        </div>

        {/* Checkout Banner */}
        <div style={subsectionTitleStyle}>CHECKOUT BANNER</div>
        <div style={{
          background: "#c8ff00",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
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
            T20 • 17 • D22
          </span>
        </div>

        {/* Visit Cards */}
        <div style={subsectionTitleStyle}>VISIT CARDS</div>
        <div style={{
          display: "flex",
          gap: "8px",
          marginBottom: "32px",
        }}>
          <div style={{
            flex: 1,
            height: "72px",
            background: "#c8ff00",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "36px",
            color: "#000000",
          }}>
            20
          </div>
          <div style={{
            flex: 1,
            height: "72px",
            background: "#000000",
            border: "2px solid #333333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "36px",
            color: "#333333",
          }}>
            –
          </div>
          <div style={{
            flex: 1,
            height: "72px",
            background: "#000000",
            border: "2px solid #333333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "36px",
            color: "#333333",
          }}>
            –
          </div>
        </div>

        {/* History Row */}
        <div style={subsectionTitleStyle}>HISTORY TABLE</div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "28px 1fr 1fr",
          borderTop: "2px solid #ffffff",
          marginBottom: "32px",
        }}>
          {/* Normal row */}
          <div style={{ display: "contents" }}>
            <div style={{ padding: "12px 0", fontSize: "13px", fontWeight: 600, color: "#444444", borderBottom: "1px solid #222222" }}>1</div>
            <div style={{ padding: "12px 0", fontFamily: "'Bebas Neue', sans-serif", fontSize: "24px", color: "#ffffff", textAlign: "right", borderBottom: "1px solid #222222" }}>60</div>
            <div style={{ padding: "12px 0", fontFamily: "'Bebas Neue', sans-serif", fontSize: "24px", color: "#666666", textAlign: "right", borderBottom: "1px solid #222222" }}>45</div>
          </div>
          {/* Highlighted row (100+) */}
          <div style={{ display: "contents" }}>
            <div style={{ padding: "12px 0", fontSize: "13px", fontWeight: 600, color: "#444444", borderBottom: "1px solid #222222" }}>2</div>
            <div style={{ padding: "12px 0", fontFamily: "'Bebas Neue', sans-serif", fontSize: "24px", color: "#000000", textAlign: "right", borderBottom: "1px solid #222222", background: "#c8ff00", paddingRight: "8px" }}>100</div>
            <div style={{ padding: "12px 0", fontFamily: "'Bebas Neue', sans-serif", fontSize: "24px", color: "#666666", textAlign: "right", borderBottom: "1px solid #222222" }}>60</div>
          </div>
        </div>

        {/* Dividers */}
        <div style={subsectionTitleStyle}>DIVIDERS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
          <div>
            <div style={{ height: "2px", background: "#ffffff", marginBottom: "4px" }} />
            <div style={valueStyle}>Heavy — #ffffff 2px (table top)</div>
          </div>
          <div>
            <div style={{ height: "2px", background: "#c8ff00", marginBottom: "4px" }} />
            <div style={valueStyle}>Accent — #c8ff00 2px (section titles)</div>
          </div>
          <div>
            <div style={{ height: "1px", background: "#333333", marginBottom: "4px" }} />
            <div style={valueStyle}>Dark — #333333 1px (dark theme sections)</div>
          </div>
          <div>
            <div style={{ height: "1px", background: "#e5e5e5", marginBottom: "4px" }} />
            <div style={valueStyle}>Light — #e5e5e5 1px (light theme sections)</div>
          </div>
          <div>
            <div style={{ height: "1px", background: "#222222", marginBottom: "4px" }} />
            <div style={valueStyle}>Subtle — #222222 1px (table rows, dark theme)</div>
          </div>
        </div>
      </div>

      {/* ==================== EFFECTS ==================== */}
      <div id="ds-effects" style={sectionStyle}>
        <div style={sectionTitleStyle}>EFFECTS</div>

        {/* Shadows */}
        <div style={subsectionTitleStyle}>SHADOWS & GLOWS</div>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginBottom: "32px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: "80px",
              height: "80px",
              background: "#c8ff00",
              borderRadius: "50%",
              boxShadow: "0 0 12px #c8ff00",
              margin: "0 auto 8px",
            }} />
            <div style={valueStyle}>0 0 12px #c8ff00</div>
            <div style={labelStyle}>Active indicator glow</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: "80px",
              height: "8px",
              background: "#c8ff00",
              boxShadow: "0 0 8px rgba(200,255,0,0.5)",
              margin: "36px auto 44px",
            }} />
            <div style={valueStyle}>0 0 8px rgba(200,255,0,0.5)</div>
            <div style={labelStyle}>Dart indicator glow</div>
          </div>
        </div>

        {/* Animations */}
        <div style={subsectionTitleStyle}>ANIMATIONS — STAGGERED REVEAL</div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "16px",
        }}>
          {animations.map(a => (
            <div key={a.name} style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "8px 0",
              borderBottom: "1px solid #222222",
            }}>
              <span style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#c8ff00",
                minWidth: "80px",
              }}>
                {a.name}
              </span>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "18px",
                color: "#ffffff",
                minWidth: "60px",
              }}>
                {a.delay}
              </span>
              <span style={valueStyle}>{a.description}</span>
            </div>
          ))}
        </div>
        <div style={{
          background: "#1a1a1a",
          padding: "16px",
          marginBottom: "32px",
        }}>
          <div style={{ ...valueStyle, fontFamily: "monospace", fontSize: "12px", lineHeight: "1.6", color: "#999999" }}>
            {"@keyframes countUp {"}<br />
            {"  from { opacity: 0; transform: translateY(20px); }"}<br />
            {"  to { opacity: 1; transform: translateY(0); }"}<br />
            {"}"}<br />
            {".reveal { animation: countUp 0.4s cubic-bezier(0.0, 0.0, 0.2, 1) both; }"}
          </div>
        </div>

        {/* Transitions */}
        <div style={subsectionTitleStyle}>TRANSITIONS</div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}>
          <div style={{
            display: "flex",
            gap: "16px",
            padding: "8px 0",
            borderBottom: "1px solid #222222",
          }}>
            <span style={{ ...labelStyle, minWidth: "120px" }}>Button hover</span>
            <span style={valueStyle}>all 0.2s ease</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #333333",
        paddingTop: "16px",
        marginTop: "48px",
      }}>
        <div style={{
          fontSize: "11px",
          fontWeight: 600,
          color: "#444444",
          letterSpacing: "1px",
        }}>
          DESIGN SYSTEM — DARTS SCORER — GENERATED FROM CODEBASE
        </div>
      </div>
    </div>
  );
}
