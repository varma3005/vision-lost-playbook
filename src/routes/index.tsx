import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  Bot,
  ChevronDown,
  Eye,
  Gauge,
  Network,
  Play,
  RotateCcw,
  ScanLine,
  Terminal,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Day the Internet Forgot How to See" },
      {
        name: "description",
        content: "An interactive observability story about Splunk, New Relic, and the people keeping production visible.",
      },
      { property: "og:title", content: "The Day the Internet Forgot How to See" },
      {
        property: "og:description",
        content: "Experience what happens when observability disappears—and meet the team that brings it back.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const signals = [
  ["API", "42ms"],
  ["DATABASE", "18ms"],
  ["KUBERNETES", "HEALTHY"],
  ["MESSAGING", "HEALTHY"],
  ["SPLUNK", "WATCHING"],
];

const capabilities = ["Detect", "Observe", "Investigate", "Respond", "Automate", "Innovate"];
const metrics = [
  "Services / applications monitored",
  "Incidents detected & supported",
  "Mean time to detect",
  "Mean time to resolve",
  "Telemetry coverage",
  "Alerts / events handled",
  "Engineering hours saved",
];

function Index() {
  const [booted, setBooted] = useState(false);
  const [incidentStarted, setIncidentStarted] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [gameChoice, setGameChoice] = useState<string | null>(null);
  const [blind, setBlind] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setBooted(true), 3300);
    return () => window.clearTimeout(timer);
  }, []);

  const signalState = useMemo(
    () =>
      signals.map(([name, value], index) => ({
        name,
        value: incidentStarted && index > 2 ? (name === "SPLUNK" ? "OFFLINE" : "UNKNOWN") : value,
        state: incidentStarted && index > 2 ? (name === "SPLUNK" ? "down" : "warn") : "ok",
      })),
    [incidentStarted],
  );

  if (!booted) {
    return (
      <main className="boot-screen" aria-label="System boot sequence">
        <div className="boot-terminal">
          <div className="boot-mark"><Eye /> OBSERVABILITY_OS</div>
          {["booting enterprise...", "loading applications...", "loading infrastructure...", "loading telemetry..."].map((line, i) => (
            <p key={line} style={{ animationDelay: `${i * 0.62}s` }}>{line}</p>
          ))}
          <span className="cursor" />
        </div>
      </main>
    );
  }

  return (
    <main className={`story-shell ${blind ? "is-blind" : ""}`}>
      <header className="story-nav">
        <a href="#top" className="brand"><Eye /> OBSERVABILITY</a>
        <nav aria-label="Main navigation">
          <a href="#signals">{incidentStarted ? "HOME" : "SIGNALS"}</a>
          <a href="#team">{incidentStarted ? "???" : "TEAM"}</a>
          <a href="#ai">{incidentStarted ? "???" : "AI"}</a>
          <a href="#impact">{incidentStarted ? "???" : "IMPACT"}</a>
        </nav>
        <span className={`live-dot ${incidentStarted ? "danger" : ""}`}>
          <i /> {incidentStarted ? "INCIDENT" : "LIVE"}
        </span>
      </header>

      <section id="top" className="opening section-grid">
        <div className="eyebrow"><ScanLine /> LIVE SYSTEM VIEW / 09:42:17</div>
        <h1>WELCOME TO A<br />COMPLETELY <em>NORMAL</em> DAY.</h1>
        <div className="status-line"><span /> SYSTEM STATUS: CHILL</div>
        <p className="deadpan">Nothing is on fire. <small>Probably.</small></p>
        <a className="scroll-cue" href="#signals">OBSERVABILITY IS WATCHING <ChevronDown /></a>
      </section>

      <section id="signals" className={`signals-section section-grid ${incidentStarted ? "incident" : ""}`}>
        <div className="section-kicker">01 / LIVE SIGNALS</div>
        <div className="signals-copy">
          <h2>{incidentStarted ? "WE SEEM TO HAVE LOST VISIBILITY." : "Everything looks fine."}</h2>
          <p>{incidentStarted ? "Attempting to investigate... Investigation failed. Reason: we don't know what happened." : "Your systems are talking. Right now, we can hear them."}</p>
          <Button variant={incidentStarted ? "destructive" : "default"} onClick={() => setIncidentStarted((v) => !v)}>
            {incidentStarted ? <RotateCcw /> : <AlertTriangle />}
            {incidentStarted ? "Restore telemetry" : "Simulate signal loss"}
          </Button>
        </div>
        <div className="signal-console">
          <div className="console-top"><span>PRODUCTION / OVERVIEW</span><span>● ● ●</span></div>
          {signalState.map((signal) => (
            <div className={`signal-row ${signal.state}`} key={signal.name}>
              <span>{signal.name}</span><span className="signal-rule" /><b>{signal.value}</b>
            </div>
          ))}
          <div className="log-strip">{incidentStarted ? "ERR visibility.pipeline disconnected — context unavailable" : "telemetry.ingest stream=healthy events=12,482/min"}</div>
        </div>
      </section>

      <section className={`incident-reveal ${incidentStarted ? "active" : ""}`}>
        <div className="alert-banner"><AlertTriangle /> {incidentStarted ? "INCIDENT DETECTED" : "ALL SYSTEMS OPERATIONAL"}</div>
        <div className="incident-data">
          <dl>
            <div><dt>Incident</dt><dd>Production service degradation</dd></div>
            <div><dt>Status</dt><dd>Investigating</dd></div>
            <div><dt>Telemetry</dt><dd>Logs · Metrics · Traces</dd></div>
            <div><dt>Tools</dt><dd>Splunk + New Relic</dd></div>
            <div><dt>Severity</dt><dd>High</dd></div>
            <div><dt>Customer impact</dt><dd>Being assessed</dd></div>
          </dl>
          <div className="who-copy"><p>Okay… who actually deals with this?</p><h2>22 PEOPLE.<br /><span>ONE MISSION.</span><br />KEEP PRODUCTION VISIBLE.</h2></div>
        </div>
        <div className="capability-rail">{capabilities.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="film-section section-grid">
        <div className="section-kicker">02 / MEANWHILE, ON THE ENGINEERING FLOOR</div>
        <div className="film-frame">
          {videoOpen ? (
            <video src="/media/incident-film.mp4" controls autoPlay playsInline aria-label="Engineering incident film" />
          ) : (
            <button className="film-poster" onClick={() => setVideoOpen(true)} aria-label="Play the engineering incident film">
              <span className="film-noise" />
              <span className="film-title">IS PROD<br />DOWN?</span>
              <span className="play-disc"><Play fill="currentColor" /></span>
              <span className="film-caption">A 60-SECOND INCIDENT STORY</span>
            </button>
          )}
        </div>
        <p className="film-punchline">NO LOGS. NO ALERTS. NO CONTEXT. <strong>JUST VIBES.</strong></p>
      </section>

      <section className="resurrection section-grid">
        <div className="telemetry-rain" aria-hidden="true">{Array.from({ length: 18 }).map((_, i) => <i key={i} />)}</div>
        <p>You missed us, didn't you?</p>
        <h2><Eye /> OBSERVABILITY</h2>
        <h3>We don't make the noise.<br />We make sure you can hear it.</h3>
      </section>

      <section className="powers section-grid">
        <article><Eye /><span>WE SEE</span><h3>Logs. Metrics. Traces. Signals.</h3><p>Basically: everything your systems are trying to tell you.</p></article>
        <article><AlertTriangle /><span>WE KNOW</span><h3>Something looks weird?</h3><p>We'd rather know before your users do.</p></article>
        <article><Network /><span>WE CONNECT THE DOTS</span><h3>Error → service → dependency → root cause.</h3><p>Because “something broke” isn't a root cause.</p></article>
        <article><Zap /><span>WE AUTOMATE</span><h3>We don't like doing things twice.</h3><p>If humans click the same 17 screens, a machine should probably do it.</p></article>
      </section>

      <section id="ai" className="ai-section section-grid">
        <div className="section-kicker">03 / AGENTIC OBSERVABILITY</div>
        <h2>Okay, but what if<br />Observability could <em>think?</em></h2>
        <div className="agent-flow">
          {[{ icon: AlertTriangle, label: "ALERT" }, { icon: Bot, label: "AGENT" }, { icon: Eye, label: "LOOKS" }, { icon: Network, label: "CONNECTS" }, { icon: Zap, label: "ACTS" }].map(({ icon: Icon, label }, i) => (
            <div className="agent-node" key={label}><span>0{i + 1}</span><Icon /><b>{label}</b></div>
          ))}
        </div>
        <div className="comparison"><p><span>Traditional monitoring</span>“Something is wrong.”</p><p><span>Agentic observability</span>“Here's what happened, why it happened, and what you can do next.”</p></div>
      </section>

      <section className="game-section section-grid">
        <div className="section-kicker">04 / INCIDENT DRILL</div>
        <h2>CAN YOU SURVIVE WITHOUT OBSERVABILITY?</h2>
        <p>Messaging is down. API latency is rising. Where do you look first?</p>
        <div className="game-options">
          {["Restart Kubernetes", "Check Splunk telemetry", "Blame DNS", "Deploy again"].map((choice) => (
            <Button key={choice} variant="outline" onClick={() => setGameChoice(choice)}>{choice}</Button>
          ))}
        </div>
        {gameChoice && <div className={`game-result ${gameChoice === "Check Splunk telemetry" ? "correct" : "wrong"}`}>{gameChoice === "Check Splunk telemetry" ? "YOU FOUND IT. See? You already need us." : "NOPE. Congratulations, you've made the incident worse."}</div>}
      </section>

      <section id="team" className="team-section section-grid">
        <div className="section-kicker">05 / THE HUMANS</div>
        <h2>MEET THE HUMANS<br />BEHIND THE DASHBOARDS.</h2>
        <p>Not avatars. Not alert-routing rules. Twenty-two actual humans keeping the lights on.</p>
        <Button onClick={() => setTeamOpen((v) => !v)}><Users /> {teamOpen ? "Close team console" : "Open team console"}</Button>
        {teamOpen && <div className="team-console"><div className="team-orbit"><Eye /></div><div><b>22 PEOPLE</b><p>{capabilities.join(" · ")}</p><small>Individual profiles ready when team details are supplied.</small></div></div>}
      </section>

      <section id="impact" className="impact-section section-grid">
        <div className="section-kicker">06 / OKAY, JOKES ASIDE</div>
        <h2>REAL IMPACT.<br />ZERO INVENTED NUMBERS.</h2>
        <div className="metrics-grid">{metrics.map((metric) => <div key={metric}><strong>—</strong><span>{metric}</span><small>VERIFIED FIGURE PENDING</small></div>)}</div>
        <div className="case-studies">
          <article><div className="case-head"><Gauge /><span>NEW RELIC / PROACTIVE DETECTION</span></div><h3>The crash that never happened.</h3><p>Container memory climbed for days. At 85%, New Relic alerted the team. Historical telemetry traced it to a deployment. Root cause found. Fix shipped. No customer impact.</p><div className="story-flow">RISING MEMORY → 85% ALERT → INVESTIGATE → DEPLOYMENT FOUND → FIX</div></article>
          <article><div className="case-head"><Terminal /><span>SPLUNK / CENTRAL VISIBILITY</span></div><h3>One place to start asking why.</h3><p>Dashboards, logs, alerts, and service maps give engineers shared context when production turns red—so investigation starts with signals, not guesses.</p><div className="story-flow">SIGNAL → CONTEXT → CORRELATION → ROOT CAUSE → RESPONSE</div></article>
        </div>
      </section>

      <section className="finale section-grid">
        <p>Imagine all of this disappearing again.</p>
        <Button variant="destructive" size="lg" onClick={() => setBlind(true)}><AlertTriangle /> Turn observability off</Button>
        {blind && <div className="blackout" onClick={() => setBlind(false)} role="button" tabIndex={0}>
          <p>Yeah.</p><p>We'd rather not.</p><h2><Eye /> YOU ONLY NOTICE US WHEN WE'RE GONE.</h2><small>Click anywhere to restore visibility.</small>
        </div>}
      </section>
    </main>
  );
}