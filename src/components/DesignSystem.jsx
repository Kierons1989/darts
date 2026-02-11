export default function DesignSystem() {
  const navigateHome = () => {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  // ── Design Tokens ──
  const tokens = {
    colors: {
      primary: { name: "F1 Red", value: "#e10600", css: "--f1-red" },
      background: { name: "Midnight", value: "#15151e", css: "--bg-primary" },
      surface: { name: "Surface", value: "#1e1e2e", css: "--bg-surface" },
      border: { name: "Border", value: "#2a2a3a", css: "--border" },
      borderSubtle: { name: "Border Subtle", value: "#252535", css: "--border-subtle" },
      white: { name: "White", value: "#ffffff", css: "--white" },
      textMuted: { name: "Text Muted", value: "#6b7280", css: "--text-muted" },
      textDim: { name: "Text Dim", value: "#4b5563", css: "--text-dim" },
    },
    radii: {
      sm: { value: "2px", usage: "Accent bars, dart indicators" },
      md: { value: "6px", usage: "Stat chips, small cards" },
      lg: { value: "8px", usage: "Cards, banners, visit cards, history table" },
      full: { value: "50%", usage: "Active player dot, circular elements" },
    },
    shadows: {
      redGlow: { value: "0 0 12px rgba(225,6,0,0.8), 0 0 4px rgba(225,6,0,0.4)", usage: "Active player indicator" },
      redBar: { value: "0 0 8px rgba(225,6,0,0.5)", usage: "Dart throw indicators" },
      redBanner: { value: "0 4px 24px rgba(225,6,0,0.3), 0 1px 4px rgba(225,6,0,0.2)", usage: "Checkout banner" },
      redCard: { value: "0 4px 16px rgba(225,6,0,0.25)", usage: "Filled visit cards" },
    },
    spacing: [
      { value: "4px", usage: "Dart bar height, micro spacing" },
      { value: "6px", usage: "Dart bar gaps, stat chip radius base" },
      { value: "8px", usage: "Card gaps, visit card gaps, stat chip padding-v, inner component gaps" },
      { value: "10px", usage: "Header accent gap, stat row margin-top" },
      { value: "12px", usage: "Section label margin-bottom, table cell padding, card padding-h, opponent card padding" },
      { value: "14px", usage: "Stat chip padding-h, dart bar margin-top" },
      { value: "16px", usage: "Checkout padding, opponent card padding, table header padding" },
      { value: "20px", usage: "Content padding horizontal, section margin-bottom, checkout padding-h" },
      { value: "24px", usage: "Content padding top, divider margin-bottom, visit section margin-bottom" },
    ],
    typography: {
      display: {
        family: "'Bebas Neue', sans-serif",
        name: "Bebas Neue",
        role: "Display, scores, data values",
        specimens: [
          { size: "120px", lh: "0.85", ls: "-4px", label: "Hero Score", sample: "141" },
          { size: "44px", lh: "1", ls: "-1px", label: "Opponent Score", sample: "218" },
          { size: "36px", lh: "1", ls: "0", label: "Visit Dart Value", sample: "20" },
          { size: "28px", lh: "1", ls: "1px", label: "Checkout Path", sample: "T20 \u2022 17 \u2022 D22" },
          { size: "24px", lh: "1", ls: "2px", label: "Section Header", sample: "501" },
          { size: "22px", lh: "1", ls: "0", label: "History Score", sample: "100" },
        ],
      },
      body: {
        family: "'Titillium Web', sans-serif",
        name: "Titillium Web",
        role: "Body text, labels, metadata",
        specimens: [
          { size: "13px", weight: 700, ls: "3px", label: "Player Name", sample: "ANDERSON" },
          { size: "13px", weight: 600, ls: "3px", label: "Opponent Name", sample: "VAN GERWEN" },
          { size: "12px", weight: 600, ls: "2px", label: "Leg/Set Info", sample: "LEG 3 / SET 1" },
          { size: "11px", weight: 700, ls: "2px", label: "Banner Label", sample: "CHECKOUT" },
          { size: "10px", weight: 700, ls: "2px", label: "Section Label", sample: "THIS VISIT" },
          { size: "10px", weight: 700, ls: "1.5px", label: "Stat Label", sample: "AVG" },
          { size: "9px", weight: 700, ls: "1px", label: "Table Header", sample: "ANDERSON" },
        ],
      },
    },
    animations: [
      { name: ".reveal", delay: "0s", desc: "Base \u2014 fade up 20px, 0.4s ease-out" },
      { name: ".reveal-1", delay: "0.05s", desc: "Stagger step 1" },
      { name: ".reveal-2", delay: "0.1s", desc: "Stagger step 2" },
      { name: ".reveal-3", delay: "0.15s", desc: "Stagger step 3" },
      { name: ".reveal-4", delay: "0.2s", desc: "Stagger step 4" },
      { name: ".reveal-5", delay: "0.25s", desc: "Stagger step 5" },
    ],
  };

  // ── Shared Styles ──
  const sectionStyle = { marginBottom: "56px" };

  const sectionTitle = (text, num) => (
    <div style={{
      display: "flex",
      alignItems: "baseline",
      gap: "12px",
      borderBottom: "2px solid #e10600",
      paddingBottom: "10px",
      marginBottom: "28px",
    }}>
      <span style={{
        fontFamily: "'Titillium Web', sans-serif",
        fontSize: "12px",
        fontWeight: 700,
        color: "#e10600",
        letterSpacing: "1px",
      }}>{num}</span>
      <span style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "36px",
        color: "#ffffff",
        letterSpacing: "4px",
      }}>{text}</span>
    </div>
  );

  const subsectionTitle = (text) => (
    <div style={{
      fontSize: "10px",
      fontWeight: 700,
      color: "#6b7280",
      letterSpacing: "2px",
      marginBottom: "16px",
      marginTop: "36px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }}>
      <div style={{ width: "12px", height: "1px", background: "#e10600" }} />
      {text}
    </div>
  );

  const labelStyle = {
    fontSize: "10px",
    fontWeight: 600,
    color: "#6b7280",
    letterSpacing: "1px",
  };

  const valueStyle = {
    fontSize: "11px",
    fontWeight: 500,
    color: "#4b5563",
  };

  const codeStyle = {
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    fontSize: "11px",
    color: "#6b7280",
    background: "#1a1a28",
    padding: "2px 6px",
    borderRadius: "4px",
    border: "1px solid #2a2a3a",
  };

  return (
    <div style={{
      background: "#15151e",
      minHeight: "100vh",
      fontFamily: "'Titillium Web', sans-serif",
      padding: "32px 24px 64px",
      color: "#ffffff",
      WebkitFontSmoothing: "antialiased",
    }}>
      {/* ── Page Header ── */}
      <div className="reveal" style={{ marginBottom: "56px" }}>
        <button
          onClick={navigateHome}
          style={{
            background: "none",
            border: "1px solid #2a2a3a",
            borderRadius: "6px",
            color: "#6b7280",
            fontSize: "11px",
            fontWeight: 600,
            fontFamily: "'Titillium Web', sans-serif",
            letterSpacing: "1px",
            padding: "6px 14px",
            cursor: "pointer",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "all 0.2s ease",
          }}
        >
          <span style={{ fontSize: "14px" }}>&larr;</span> BACK TO APP
        </button>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "8px",
        }}>
          <div style={{
            width: "4px",
            height: "32px",
            background: "#e10600",
            borderRadius: "2px",
          }} />
          <span style={{
            fontSize: "12px",
            fontWeight: 700,
            color: "#e10600",
            letterSpacing: "3px",
          }}>
            DARTS SCORER
          </span>
        </div>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "56px",
          color: "#ffffff",
          letterSpacing: "6px",
          lineHeight: 0.95,
        }}>
          DESIGN SYSTEM
        </div>
        <div style={{
          height: "2px",
          background: "linear-gradient(90deg, #e10600 0%, #e10600 120px, #2a2a3a 120px, #2a2a3a 100%)",
          marginTop: "16px",
        }} />
      </div>

      {/* ── Table of Contents ── */}
      <div className="reveal reveal-1" style={sectionStyle}>
        {sectionTitle("INDEX", "00")}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
        }}>
          {[
            { num: "01", label: "COLORS", id: "ds-colors" },
            { num: "02", label: "TYPOGRAPHY", id: "ds-typography" },
            { num: "03", label: "SPACING", id: "ds-spacing" },
            { num: "04", label: "BORDER RADIUS", id: "ds-radii" },
            { num: "05", label: "SHADOWS", id: "ds-shadows" },
            { num: "06", label: "COMPONENTS", id: "ds-components" },
            { num: "07", label: "ANIMATIONS", id: "ds-animations" },
          ].map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 16px",
                background: "#1e1e2e",
                border: "1px solid #2a2a3a",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
            >
              <span style={{
                fontFamily: "'Titillium Web', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: "#e10600",
              }}>{item.num}</span>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "18px",
                color: "#ffffff",
                letterSpacing: "2px",
              }}>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ══════════════ 01 COLORS ══════════════ */}
      <div id="ds-colors" style={sectionStyle}>
        {sectionTitle("COLORS", "01")}

        {subsectionTitle("PRIMARY")}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <ColorSwatch color={tokens.colors.primary} labelStyle={labelStyle} codeStyle={codeStyle} />
        </div>

        {subsectionTitle("BACKGROUNDS")}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {[tokens.colors.background, tokens.colors.surface].map(c => (
            <ColorSwatch key={c.css} color={c} labelStyle={labelStyle} codeStyle={codeStyle} />
          ))}
        </div>

        {subsectionTitle("BORDERS")}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {[tokens.colors.border, tokens.colors.borderSubtle].map(c => (
            <ColorSwatch key={c.css} color={c} labelStyle={labelStyle} codeStyle={codeStyle} />
          ))}
        </div>

        {subsectionTitle("TEXT")}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {[tokens.colors.white, tokens.colors.textMuted, tokens.colors.textDim].map(c => (
            <ColorSwatch key={c.css} color={c} labelStyle={labelStyle} codeStyle={codeStyle} />
          ))}
        </div>
      </div>

      {/* ══════════════ 02 TYPOGRAPHY ══════════════ */}
      <div id="ds-typography" style={sectionStyle}>
        {sectionTitle("TYPOGRAPHY", "02")}

        {subsectionTitle(`DISPLAY \u2014 ${tokens.typography.display.name.toUpperCase()}`)}
        <div style={{
          background: "#1e1e2e",
          border: "1px solid #2a2a3a",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "8px",
        }}>
          {tokens.typography.display.specimens.map((spec, i) => (
            <div key={spec.label} style={{
              padding: "20px",
              borderBottom: i < tokens.typography.display.specimens.length - 1 ? "1px solid #252535" : "none",
            }}>
              <div style={{
                fontFamily: tokens.typography.display.family,
                fontSize: spec.size,
                lineHeight: spec.lh,
                letterSpacing: spec.ls,
                color: "#ffffff",
                marginBottom: "10px",
              }}>
                {spec.sample}
              </div>
              <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
                <span style={labelStyle}>{spec.label}</span>
                <span style={codeStyle}>{spec.size} / {spec.lh} / {spec.ls}</span>
              </div>
            </div>
          ))}
        </div>

        {subsectionTitle(`BODY \u2014 ${tokens.typography.body.name.toUpperCase()}`)}
        <div style={{
          background: "#1e1e2e",
          border: "1px solid #2a2a3a",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {tokens.typography.body.specimens.map((spec, i) => (
            <div key={spec.label} style={{
              padding: "16px 20px",
              borderBottom: i < tokens.typography.body.specimens.length - 1 ? "1px solid #252535" : "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <div>
                <div style={{
                  fontFamily: tokens.typography.body.family,
                  fontSize: spec.size,
                  fontWeight: spec.weight,
                  letterSpacing: spec.ls,
                  color: "#ffffff",
                  marginBottom: "4px",
                }}>
                  {spec.sample}
                </div>
                <span style={labelStyle}>{spec.label}</span>
              </div>
              <span style={codeStyle}>{spec.size} / wt{spec.weight} / {spec.ls}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════ 03 SPACING ══════════════ */}
      <div id="ds-spacing" style={sectionStyle}>
        {sectionTitle("SPACING", "03")}
        <div style={{
          background: "#1e1e2e",
          border: "1px solid #2a2a3a",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {tokens.spacing.map((s, i) => (
            <div key={s.value} style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "12px 20px",
              borderBottom: i < tokens.spacing.length - 1 ? "1px solid #252535" : "none",
            }}>
              <div style={{
                width: parseInt(s.value),
                height: parseInt(s.value),
                minWidth: parseInt(s.value),
                background: "#e10600",
                borderRadius: "2px",
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

      {/* ══════════════ 04 BORDER RADIUS ══════════════ */}
      <div id="ds-radii" style={sectionStyle}>
        {sectionTitle("BORDER RADIUS", "04")}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "12px",
        }}>
          {Object.entries(tokens.radii).map(([key, r]) => (
            <div key={key} style={{
              background: "#1e1e2e",
              border: "1px solid #2a2a3a",
              borderRadius: "8px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}>
              <div style={{
                width: "56px",
                height: "56px",
                background: "#e10600",
                borderRadius: r.value,
                opacity: 0.9,
              }} />
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "20px",
                color: "#ffffff",
              }}>{r.value}</div>
              <div style={{ ...valueStyle, textAlign: "center", fontSize: "10px" }}>{r.usage}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════ 05 SHADOWS ══════════════ */}
      <div id="ds-shadows" style={sectionStyle}>
        {sectionTitle("SHADOWS", "05")}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}>
          {Object.entries(tokens.shadows).map(([key, s]) => (
            <div key={key} style={{
              background: "#1e1e2e",
              border: "1px solid #2a2a3a",
              borderRadius: "8px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}>
              <div style={{
                width: "64px",
                height: "32px",
                background: "#e10600",
                borderRadius: "6px",
                boxShadow: s.value,
              }} />
              <div style={{ ...labelStyle, textAlign: "center" }}>{s.usage}</div>
              <div style={{
                ...codeStyle,
                fontSize: "9px",
                textAlign: "center",
                wordBreak: "break-all",
              }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════ 06 COMPONENTS ══════════════ */}
      <div id="ds-components" style={sectionStyle}>
        {sectionTitle("COMPONENTS", "06")}

        {/* Active Player Indicator */}
        {subsectionTitle("ACTIVE PLAYER INDICATOR")}
        <div style={{
          background: "#1e1e2e",
          border: "1px solid #2a2a3a",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "8px",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <div style={{
              width: "8px",
              height: "8px",
              background: "#e10600",
              borderRadius: "50%",
              boxShadow: "0 0 12px rgba(225,6,0,0.8), 0 0 4px rgba(225,6,0,0.4)",
            }} />
            <span style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "3px",
            }}>
              ANDERSON
            </span>
          </div>
        </div>

        {/* Stat Chips */}
        {subsectionTitle("STAT CHIPS")}
        <div style={{
          display: "flex",
          gap: "12px",
          marginBottom: "8px",
        }}>
          {[
            { label: "AVG", value: "72" },
            { label: "LEGS", value: "2" },
            { label: "SETS", value: "1" },
          ].map(s => (
            <div key={s.label} style={{
              background: "#1e1e2e",
              border: "1px solid #2a2a3a",
              borderRadius: "6px",
              padding: "8px 14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <span style={{ fontSize: "10px", fontWeight: 700, color: "#6b7280", letterSpacing: "1.5px" }}>{s.label}</span>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "22px",
                color: "#ffffff",
              }}>{s.value}</span>
            </div>
          ))}
        </div>

        {/* Dart Throw Indicators */}
        {subsectionTitle("DART THROW INDICATORS")}
        <div style={{
          display: "flex",
          gap: "24px",
          marginBottom: "8px",
        }}>
          {[1, 2, 3].map(count => (
            <div key={count}>
              <div style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{
                    width: "32px",
                    height: "4px",
                    borderRadius: "2px",
                    background: i < count ? "#e10600" : "#2a2a3a",
                    boxShadow: i < count ? "0 0 8px rgba(225,6,0,0.5)" : "none",
                  }} />
                ))}
              </div>
              <span style={valueStyle}>{count} of 3</span>
            </div>
          ))}
        </div>

        {/* Opponent Card */}
        {subsectionTitle("OPPONENT CARD")}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          background: "#1e1e2e",
          border: "1px solid #2a2a3a",
          borderRadius: "8px",
          marginBottom: "8px",
        }}>
          <span style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#6b7280",
            letterSpacing: "3px",
          }}>
            VAN GERWEN
          </span>
          <div style={{
            display: "flex",
            alignItems: "baseline",
            gap: "12px",
          }}>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#4b5563", letterSpacing: "1px" }}>AVG 56.6</span>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "44px",
              color: "#6b7280",
              letterSpacing: "-1px",
            }}>218</span>
          </div>
        </div>

        {/* Checkout Banner */}
        {subsectionTitle("CHECKOUT BANNER")}
        <div style={{
          background: "#e10600",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          boxShadow: "0 4px 24px rgba(225,6,0,0.3), 0 1px 4px rgba(225,6,0,0.2)",
          marginBottom: "8px",
        }}>
          <span style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "2px",
          }}>CHECKOUT</span>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "28px",
            color: "#ffffff",
            letterSpacing: "1px",
          }}>T20 &bull; 17 &bull; D22</span>
        </div>

        {/* Visit Cards */}
        {subsectionTitle("VISIT CARDS")}
        <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
          {/* Filled */}
          <div style={{ flex: 1 }}>
            <div style={{ ...valueStyle, marginBottom: "8px" }}>Filled</div>
            <div style={{
              height: "72px",
              background: "#e10600",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "36px",
              color: "#ffffff",
              boxShadow: "0 4px 16px rgba(225,6,0,0.25)",
            }}>20</div>
          </div>
          {/* Empty */}
          <div style={{ flex: 1 }}>
            <div style={{ ...valueStyle, marginBottom: "8px" }}>Empty</div>
            <div style={{
              height: "72px",
              background: "#1e1e2e",
              border: "1px solid #2a2a3a",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "36px",
              color: "#2a2a3a",
            }}>&ndash;</div>
          </div>
        </div>

        {/* History Table */}
        {subsectionTitle("HISTORY TABLE")}
        <div style={{
          background: "#1e1e2e",
          border: "1px solid #2a2a3a",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "8px",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "36px 1fr 1fr",
            padding: "0 12px",
            borderBottom: "2px solid #e10600",
          }}>
            <div style={{ padding: "10px 0", fontSize: "9px", fontWeight: 700, color: "#4b5563", letterSpacing: "1px" }}>RD</div>
            <div style={{ padding: "10px 0", fontSize: "9px", fontWeight: 700, color: "#e10600", letterSpacing: "1px", textAlign: "right" }}>ANDERSON</div>
            <div style={{ padding: "10px 0", fontSize: "9px", fontWeight: 700, color: "#4b5563", letterSpacing: "1px", textAlign: "right" }}>VAN GERWEN</div>
          </div>
          {[
            { rd: 1, p1: 60, p2: 45, highlight: false },
            { rd: 2, p1: 100, p2: 60, highlight: true },
            { rd: 3, p1: 85, p2: 81, highlight: false },
          ].map((row, i) => (
            <div key={row.rd} style={{
              display: "grid",
              gridTemplateColumns: "36px 1fr 1fr",
              padding: "0 12px",
              borderBottom: i < 2 ? "1px solid #252535" : "none",
              background: row.highlight ? "rgba(225,6,0,0.1)" : "transparent",
            }}>
              <div style={{ padding: "12px 0", fontSize: "12px", fontWeight: 600, color: "#4b5563" }}>{row.rd}</div>
              <div style={{
                padding: "12px 0",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "22px",
                color: row.highlight ? "#e10600" : "#ffffff",
                textAlign: "right",
              }}>{row.p1}</div>
              <div style={{
                padding: "12px 0",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "22px",
                color: "#4b5563",
                textAlign: "right",
              }}>{row.p2}</div>
            </div>
          ))}
        </div>

        {/* Gradient Divider */}
        {subsectionTitle("GRADIENT DIVIDER")}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "8px",
        }}>
          <div>
            <div style={{
              height: "1px",
              background: "linear-gradient(90deg, #e10600 0%, #e10600 30%, #2a2a3a 30%, #2a2a3a 100%)",
              marginBottom: "6px",
            }} />
            <span style={valueStyle}>Header divider &mdash; 30% red accent</span>
          </div>
          <div>
            <div style={{
              height: "2px",
              background: "linear-gradient(90deg, #e10600 0%, #e10600 120px, #2a2a3a 120px, #2a2a3a 100%)",
              marginBottom: "6px",
            }} />
            <span style={valueStyle}>Page header divider &mdash; 120px red accent</span>
          </div>
          <div>
            <div style={{
              height: "2px",
              background: "#e10600",
              marginBottom: "6px",
            }} />
            <span style={valueStyle}>Table header &mdash; full red</span>
          </div>
        </div>

        {/* Accent Bar */}
        {subsectionTitle("ACCENT BAR")}
        <div style={{
          display: "flex",
          gap: "24px",
          marginBottom: "8px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
            <div style={{
              width: "4px",
              height: "24px",
              background: "#e10600",
              borderRadius: "2px",
            }} />
            <span style={valueStyle}>4 &times; 24</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
            <div style={{
              width: "4px",
              height: "32px",
              background: "#e10600",
              borderRadius: "2px",
            }} />
            <span style={valueStyle}>4 &times; 32</span>
          </div>
        </div>
      </div>

      {/* ══════════════ 07 ANIMATIONS ══════════════ */}
      <div id="ds-animations" style={sectionStyle}>
        {sectionTitle("ANIMATIONS", "07")}

        {subsectionTitle("STAGGERED REVEAL")}
        <div style={{
          background: "#1e1e2e",
          border: "1px solid #2a2a3a",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "16px",
        }}>
          {tokens.animations.map((a, i) => (
            <div key={a.name} style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "12px 20px",
              borderBottom: i < tokens.animations.length - 1 ? "1px solid #252535" : "none",
            }}>
              <span style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#e10600",
                minWidth: "72px",
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              }}>
                {a.name}
              </span>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "18px",
                color: "#ffffff",
                minWidth: "52px",
              }}>
                {a.delay}
              </span>
              <span style={valueStyle}>{a.desc}</span>
            </div>
          ))}
        </div>

        {subsectionTitle("KEYFRAME DEFINITION")}
        <div style={{
          background: "#1a1a28",
          border: "1px solid #2a2a3a",
          borderRadius: "8px",
          padding: "20px",
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          fontSize: "12px",
          lineHeight: 1.8,
          color: "#6b7280",
        }}>
          <span style={{ color: "#e10600" }}>@keyframes</span> <span style={{ color: "#ffffff" }}>countUp</span> {"{"}<br />
          {"  "}<span style={{ color: "#e10600" }}>from</span> {"{ "}
          <span style={{ color: "#4b5563" }}>opacity:</span> 0; <span style={{ color: "#4b5563" }}>transform:</span> translateY(20px); {"}"}<br />
          {"  "}<span style={{ color: "#e10600" }}>to</span> {"{ "}
          <span style={{ color: "#4b5563" }}>opacity:</span> 1; <span style={{ color: "#4b5563" }}>transform:</span> translateY(0); {"}"}<br />
          {"}"}<br /><br />
          <span style={{ color: "#e10600" }}>.reveal</span> {"{ "}<span style={{ color: "#4b5563" }}>animation:</span> countUp 0.4s cubic-bezier(0, 0, 0.2, 1) both; {"}"}
        </div>

        {subsectionTitle("TRANSITIONS")}
        <div style={{
          background: "#1e1e2e",
          border: "1px solid #2a2a3a",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {[
            { prop: "Button hover", value: "all 0.2s ease" },
            { prop: "Card state change", value: "all 0.3s ease" },
          ].map((t, i) => (
            <div key={t.prop} style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 20px",
              borderBottom: i === 0 ? "1px solid #252535" : "none",
            }}>
              <span style={labelStyle}>{t.prop}</span>
              <span style={codeStyle}>{t.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{
        borderTop: "1px solid #2a2a3a",
        paddingTop: "16px",
        marginTop: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{
          fontSize: "10px",
          fontWeight: 600,
          color: "#4b5563",
          letterSpacing: "1px",
        }}>
          DESIGN SYSTEM &mdash; DARTS SCORER
        </div>
        <div style={{
          width: "4px",
          height: "12px",
          background: "#e10600",
          borderRadius: "2px",
        }} />
      </div>
    </div>
  );
}

// ── Color Swatch Component ──
function ColorSwatch({ color, labelStyle, codeStyle }) {
  return (
    <div style={{ width: "140px" }}>
      <div style={{
        width: "100%",
        height: "72px",
        background: color.value,
        borderRadius: "8px",
        marginBottom: "10px",
        border: color.value === "#15151e" || color.value === "#1e1e2e" || color.value === "#2a2a3a" || color.value === "#252535"
          ? "1px solid #2a2a3a"
          : "none",
        boxShadow: color.value === "#e10600" ? "0 4px 16px rgba(225,6,0,0.2)" : "none",
      }} />
      <div style={{ ...labelStyle, marginBottom: "2px" }}>{color.name}</div>
      <div style={codeStyle}>{color.value}</div>
    </div>
  );
}
