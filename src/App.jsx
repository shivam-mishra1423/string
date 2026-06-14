import { useState } from "react";
import { patterns, levels } from "./data";
import "./App.css";

const difficultyColor = {
  Easy: "#22c55e",
  Medium: "#f59e0b",
  Hard: "#ef4444"
};

function PatternCard({ pattern, onClick }) {
  const isDetailed = pattern.concept !== undefined;
  return (
    <div
      className={`pattern-card ${isDetailed ? "clickable" : ""}`}
      onClick={isDetailed ? () => onClick(pattern) : undefined}
      style={{ "--accent": pattern.color }}
    >
      <div className="card-header">
        <span className="card-emoji">{pattern.emoji}</span>
        <div>
          <div className="card-num">Pattern {String(pattern.id).padStart(2, "0")}</div>
          <div className="card-name">{pattern.name}</div>
        </div>
        {isDetailed && <span className="card-arrow">→</span>}
      </div>
      <p className="card-desc">{pattern.description}</p>
      {isDetailed && (
        <div className="card-stats">
          <span>🟡 {pattern.leetcode?.length} LeetCode</span>
          <span>🟢 {pattern.gfg?.length} GFG</span>
        </div>
      )}
    </div>
  );
}

function ProblemLink({ prob, platform }) {
  return (
    <a
      href={prob.url}
      target="_blank"
      rel="noopener noreferrer"
      className="problem-link"
    >
      <span className="prob-dot" style={{ background: difficultyColor[prob.difficulty] }} />
      <span className="prob-name">{prob.name}</span>
      <span className="prob-diff" style={{ color: difficultyColor[prob.difficulty] }}>
        {prob.difficulty}
      </span>
      <span className="prob-platform">{platform}</span>
    </a>
  );
}

function Modal({ pattern, onClose }) {
  const [activeTab, setActiveTab] = useState("concept");
  if (!pattern) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-hero" style={{ "--accent": pattern.color }}>
          <span className="modal-emoji">{pattern.emoji}</span>
          <div>
            <div className="modal-pattern-num">Pattern {pattern.id}</div>
            <h2 className="modal-title">{pattern.name}</h2>
            <span className="modal-level">{pattern.level}</span>
          </div>
        </div>

        <div className="modal-tabs">
          {["concept", "code", "problems"].map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              style={activeTab === tab ? { "--accent": pattern.color } : {}}
            >
              {tab === "concept" ? "💡 Concept" : tab === "code" ? "⌨️ Code" : "🎯 Problems"}
            </button>
          ))}
        </div>

        <div className="modal-body">
          {activeTab === "concept" && (
            <div className="tab-content">
              <div className="concept-box">
                <h3>Concept</h3>
                <p>{pattern.concept}</p>
              </div>

              <div className="viz-box">
                <h3>Visualization</h3>
                <pre>{pattern.visualization}</pre>
              </div>

              <div className="algo-box">
                <h3>Algorithm</h3>
                <ol>
                  {pattern.algorithm?.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="complexity-box">
                <div className="complexity-item">
                  <span className="cx-label">Time</span>
                  <span className="cx-val">{pattern.complexity?.time}</span>
                </div>
                <div className="complexity-item">
                  <span className="cx-label">Space</span>
                  <span className="cx-val">{pattern.complexity?.space}</span>
                </div>
              </div>

              <div className="keywords-box">
                <h3>🔍 Pattern Recognition</h3>
                <p>Agar question mein ye dikhey:</p>
                <div className="keywords">
                  {pattern.keywords?.map((k, i) => (
                    <span key={i} className="keyword-tag">{k}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="tab-content">
              <div className="code-section">
                <h3>Template</h3>
                <pre className="code-block template"><code>{pattern.template}</code></pre>
              </div>
              <div className="code-section">
                <h3>Full Code (C++)</h3>
                <pre className="code-block full"><code>{pattern.code}</code></pre>
              </div>
            </div>
          )}

          {activeTab === "problems" && (
            <div className="tab-content">
              <div className="problems-section">
                <h3>
                  <img src="https://leetcode.com/favicon.ico" alt="" width="16" />
                  LeetCode Problems
                </h3>
                <div className="problems-list">
                  {pattern.leetcode?.map((p, i) => (
                    <ProblemLink key={i} prob={p} platform="LC" />
                  ))}
                </div>
              </div>
              <div className="problems-section">
                <h3>
                  <img src="https://www.geeksforgeeks.org/favicon.ico" alt="" width="16" />
                  GeeksForGeeks Problems
                </h3>
                <div className="problems-list">
                  {pattern.gfg?.map((p, i) => (
                    <ProblemLink key={i} prob={p} platform="GFG" />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(null);
  const [activeLevel, setActiveLevel] = useState("All");

  const filteredPatterns = activeLevel === "All"
    ? patterns
    : patterns.filter(p => p.level === activeLevel);

  return (
    <div className="app">
      {/* Hero */}
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">DSA String Patterns</div>
          <h1 className="hero-title">
            <span className="hero-code">12</span> Patterns
            <br />
            <span className="hero-sub">to Master String Problems</span>
          </h1>
          <p className="hero-desc">
            Foundation se KMP tak — ek complete roadmap.<br/>
            Hinglish mein, interview-ready style mein.
          </p>
          <div className="hero-stats">
            <div className="stat"><span className="stat-n">12</span><span className="stat-l">Patterns</span></div>
            <div className="stat-div" />
            <div className="stat"><span className="stat-n">50+</span><span className="stat-l">Problems</span></div>
            <div className="stat-div" />
            <div className="stat"><span className="stat-n">4</span><span className="stat-l">Levels</span></div>
          </div>
        </div>
      </header>

      {/* Roadmap */}
      <section className="roadmap">
        <div className="section-label">Learning Path</div>
        <div className="roadmap-steps">
          {["Foundation", "Pointers", "Windows", "Advanced String"].map((l, i) => (
            <div key={l} className="roadmap-step">
              <div className="step-circle">{i + 1}</div>
              <div className="step-name">{l}</div>
              {i < 3 && <div className="step-line" />}
            </div>
          ))}
        </div>
      </section>

      {/* Filter */}
      <div className="filter-bar">
        {["All", ...levels.map(l => l.name)].map(lv => (
          <button
            key={lv}
            className={`filter-btn ${activeLevel === lv ? "active" : ""}`}
            onClick={() => setActiveLevel(lv)}
          >
            {lv}
          </button>
        ))}
      </div>

      {/* Patterns Grid */}
      <main className="patterns-main">
        {levels.filter(l => activeLevel === "All" || l.name === activeLevel).map(level => {
          const levelPatterns = filteredPatterns.filter(p => p.level === level.name);
          if (levelPatterns.length === 0) return null;
          return (
            <div key={level.name} className="level-section">
              <div className="level-header" style={{ "--lcolor": level.color }}>
                <span className="level-dot" />
                <span className="level-title">{level.name}</span>
                <span className="level-count">{levelPatterns.length} patterns</span>
              </div>
              <div className="patterns-grid">
                {levelPatterns.map(p => (
                  <PatternCard key={p.id} pattern={p} onClick={setSelected} />
                ))}
              </div>
            </div>
          );
        })}
      </main>

      {/* Quick Reference */}
      <section className="quick-ref">
        <div className="section-label">Quick Reference</div>
        <h2 className="qr-title">Substring vs Subsequence</h2>
        <div className="compare-table">
          <div className="compare-row header">
            <div>Feature</div><div>Substring</div><div>Subsequence</div>
          </div>
          {[
            ["Continuous", "✅", "❌"],
            ["Order Required", "✅", "✅"],
            ["Sliding Window", "✅", "❌"],
            ["DP Usage", "Less", "Very High"]
          ].map(([f, s, sq], i) => (
            <div key={i} className="compare-row">
              <div className="cf">{f}</div>
              <div className="cv">{s}</div>
              <div className="cv">{sq}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Insights */}
      <section className="insights">
        <div className="section-label">Interview Insight</div>
        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-trigger">Agar "Longest Common" dikhe →</div>
            <div className="insight-answer">LCS (DP)</div>
          </div>
          <div className="insight-card">
            <div className="insight-trigger">Agar "Pattern Matching" dikhe →</div>
            <div className="insight-answer">KMP</div>
          </div>
          <div className="insight-card">
            <div className="insight-trigger">Agar "Auto Complete" dikhe →</div>
            <div className="insight-answer">Trie</div>
          </div>
          <div className="insight-card">
            <div className="insight-trigger">Agar "Order maintain + skip" dikhe →</div>
            <div className="insight-answer">Subsequence + Two Pointers</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-badge">Made with ❤️ for DSA learners</div>
          <div className="footer-links">
            <a href="https://www.instagram.com/shivam_mishrasm/" target="_blank" rel="noopener noreferrer">
              📸 Instagram
            </a>
            <a href="https://www.linkedin.com/in/shivam-mishra-b47739279/" target="_blank" rel="noopener noreferrer">
              💼 LinkedIn
            </a>
          </div>
          <div className="footer-note">
            All 12 String Patterns • LeetCode + GFG Links • Interview Ready
          </div>
        </div>
      </footer>

      {selected && <Modal pattern={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
