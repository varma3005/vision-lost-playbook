import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
AlertTriangle,
Bot,
ChevronDown,
Eye,
Gauge,
Network,
Play,
RotateCcw,
ScanLine,
Sparkles,
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

const team = [
{ name: "Sumanth", role: "Senior Lead SRE", power: "Keeps production calm—even when Slack is not.", boss: "“who deployed on Friday?”" },
{ name: "Bikash", role: "Observability Crew", power: "Asks “what changed?” before anyone blames the network.", boss: "“it's never DNS (it's DNS)”" },
{ name: "Sarah", role: "Product Owner", power: "Turns incident chaos into a suspiciously tidy roadmap.", boss: "“is this a P1 or a vibe?”" },
{ name: "B Vaishnavi", role: "Agentic AI", power: "Gets her hands dirty so the agents can think cleanly.", boss: "“can we automate this?”" },
{ name: "Mani", role: "Splunk + AI", power: "Asks the logs smarter questions—and expects answers.", boss: "“ask the logs nicely”" },
{ name: "Sathish", role: "Observability Crew", power: "Can translate dashboard red into an actual next step.", boss: "“ok but what do we DO”" },
{ name: "Dinesh", role: "Observability Crew", power: "Checks the evidence before touching the restart button.", boss: "“did we try restarting it”" },
{ name: "Jai", role: "SRE Scaled Engineer", power: "Makes traces travel farther than most holiday plans.", boss: "“where does this span go?”" },
{ name: "Rishika", role: "Site Reliability Engineer", power: "Can find the one useful log in a million noisy ones.", boss: "“it's in the logs somewhere”" },
{ name: "Balaji", role: "SRE Engineer", power: "Sees the memory spike before the container feels it.", boss: "“that graph is climbing…”" },
{ name: "Sharon", role: "Journey Expert", power: "Fresh eyes, sharp questions, zero fear of red dashboards.", boss: "“wait, why is that red?”" },
{ name: "Simon", role: "Observability Crew", power: "Quietly connects dots while everyone else refreshes.", boss: "“stop refreshing, look here”" },
{ name: "Richard", role: "Observability Crew", power: "Brings context to the call before the panic joins.", boss: "“let's not panic yet”" },
{ name: "Elyse", role: "Site Reliability Engineer", power: "Makes mysterious signals considerably less mysterious.", boss: "“the mystery signal”" },
{ name: "Alyssa", role: "SRE Engineer", power: "Treats every alert like a clue, not a jump scare.", boss: "“3am pager duty”" },
{ name: "Lipismita", role: "Quality Engineer", power: "Keeps a cool head and a very warm telemetry stream.", boss: "“stay calm, read the trace”" },
{ name: "Lalita", role: "Site Reliability Engineer", power: "Spots the pattern hiding between two noisy graphs.", boss: "“the noisy neighbor graph”" },
{ name: "Santhosh", role: "Software Engineer", power: "Turns production mysteries into short-lived mysteries.", boss: "“the unexplained 500s”" },
{ name: "Joe", role: "Observability Crew", power: "Keeps incidents moving and the guessing to a minimum.", boss: "“keep the bridge moving”" },
{ name: "Thuy", role: "Journey Expert", power: "Finds signal in the noise—and occasionally in the silence.", boss: "“the suspicious silence”" },
{ name: "Aniruddh", role: "Platform Engineer", power: "Follows the trace until the root cause runs out of places to hide.", boss: "“the shy root cause”" },
{ name: "Hareesh", role: "Site Reliability Engineer", power: "Makes sure “probably fine” comes with supporting evidence.", boss: "“is it *actually* fine?”" },
];

const initials = (name: string) =>
name
.replace(/\(.*?\)/g, "")
.trim()
.split(/\s+/)
.filter(Boolean)
.slice(0, 2)
.map((word) => word[0]?.toUpperCase() ?? "")
.join("");


const bootLines = [
"booting enterprise...",
"loading applications...",
"loading infrastructure...",
"loading telemetry...",
"brewing coffee... (critical dependency)",
"pretending it's not Friday...",
];

function Index() {
const [booted, setBooted] = useState(false);
const [incidentStarted, setIncidentStarted] = useState(false);
const [teamOpen, setTeamOpen] = useState(false);
const [gameChoice, setGameChoice] = useState<string | null>(null);
const [blind, setBlind] = useState(false);
const [videoOpen, setVideoOpen] = useState(false);
const [panicClicks, setPanicClicks] = useState(0);

useEffect(() => {
const timer = window.setTimeout(() => setBooted(true), 3700);
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

// Vibe check: healthy when we can see, chaos when we can't.
const vibe = incidentStarted ? 12 : 98;

if (!booted) {
return (
<main className="boot-screen" aria-label="System boot sequence">
<div className="boot-terminal">
<div className="boot-mark"><Eye /> OBSERVABILITY_OS</div>
{bootLines.map((line, i) => (
<p key={line} style={{ animationDelay: `${i * 0.55}s` }}>{line}</p>
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
</nav>
<span className={`live-dot ${incidentStarted ? "danger" : ""}`}>
<i /> {incidentStarted ? "INCIDENT" : "LIVE"}
</span>
</header>

<section id="top" className="opening section-grid">
<div className="eyebrow"><ScanLine /> LIVE SYSTEM VIEW / 09:42:17</div>
<h1>WELCOME TO A<br />COMPLETELY <em>NORMAL</em> DAY.</h1>
<div className="status-line"><span /> SYSTEM STATUS: CHILL ✨</div>
<p className="deadpan">Nothing is on fire. <small>probably. no cap.</small></p>
<a className="scroll-cue" href="#signals">OBSERVABILITY IS WATCHING <ChevronDown /></a>
</section>

<section id="signals" className={`signals-section section-grid ${incidentStarted ? "incident" : ""}`}>
<div className="section-kicker">01 / LIVE SIGNALS</div>
<div className="signals-copy">
<h2>{incidentStarted ? "WE SEEM TO HAVE LOST VISIBILITY." : "Everything looks fine."}</h2>
<p>{incidentStarted ? "Attempting to investigate... investigation failed. reason: we genuinely do not know what happened. it's giving chaos." : "Your systems are talking. right now, we can actually hear them. lowkey magical."}</p>
<div className={`vibe-check ${incidentStarted ? "bad" : "good"}`}>
<span className="vibe-label">VIBE CHECK</span>
<span className="vibe-bar"><i style={{ width: `${vibe}%` }} /></span>
<b>{incidentStarted ? "12% — it's over 😭" : "98% — immaculate"}</b>
</div>
<Button variant={incidentStarted ? "destructive" : "default"} onClick={() => setIncidentStarted((v) => !v)}>
{incidentStarted ? <RotateCcw /> : <AlertTriangle />}
{incidentStarted ? "Restore telemetry (pls)" : "Simulate signal loss"}
</Button>
</div>
<div className="signal-console">
<div className="console-top"><span>PRODUCTION / OVERVIEW</span><span>● ● ●</span></div>
{signalState.map((signal) => (
<div className={`signal-row ${signal.state}`} key={signal.name}>
<span>{signal.name}</span><span className="signal-rule" /><b>{signal.value}</b>
</div>
))}
<div className="log-strip">{incidentStarted ? "ERR visibility.pipeline disconnected — context unavailable — we fr cannot see" : "telemetry.ingest stream=healthy events=12,482/min — we see everything 👀"}</div>
</div>
</section>

<section className={`incident-reveal ${incidentStarted ? "active" : ""}`}>
<div className="alert-banner"><AlertTriangle /> {incidentStarted ? "INCIDENT DETECTED" : "ALL SYSTEMS OPERATIONAL"}</div>
<div className="incident-data">
<dl>
<div><dt>Incident</dt><dd>Production service degradation</dd></div>
<div><dt>Status</dt><dd>Investigating (frantically)</dd></div>
<div><dt>Telemetry</dt><dd>Logs · Metrics · Traces</dd></div>
<div><dt>Tools</dt><dd>Splunk + New Relic + Dynatrace</dd></div>
<div><dt>Severity</dt><dd>High</dd></div>
<div><dt>Customer impact</dt><dd>Being assessed 🫠</dd></div>
</dl>
<div className="who-copy"><p>okay… who actually deals with this?</p><h2>22 PEOPLE.<br /><span>ONE MISSION.</span><br />KEEP PRODUCTION VISIBLE.</h2></div>
</div>
<div className="capability-rail">{capabilities.map((item) => <span key={item}>{item}</span>)}</div>
</section>

<section className="film-section section-grid">
<div className="section-kicker">02 / MEANWHILE, ON THE ENGINEERING FLOOR</div>
<div className="film-frame">
{videoOpen ? (
<video
src="/media/incident-film.mp4"
poster="/media/incident-film-poster.jpg"
controls
autoPlay
playsInline
aria-label="Engineering incident film"
/>
) : (
<button className="film-poster" onClick={() => setVideoOpen(true)} aria-label="Play the engineering incident film">
<span className="film-noise" />
<span className="film-title">IS PROD<br />DOWN?</span>
<span className="play-disc"><Play fill="currentColor" /></span>
<span className="film-caption">A 60-SECOND INCIDENT STORY · 🍿</span>
</button>
)}
</div>
<p className="film-punchline">NO LOGS. NO ALERTS. NO CONTEXT. <strong>JUST VIBES.</strong></p>
</section>

<section className="resurrection section-grid">
<div className="telemetry-rain" aria-hidden="true">{Array.from({ length: 18 }).map((_, i) => <i key={i} />)}</div>
<p>you missed us, didn't you? 🥺</p>
<h2><Eye /> OBSERVABILITY</h2>
<h3>We don't make the noise.<br />We make sure you can hear it.</h3>
</section>

<section className="powers section-grid">
<article><Eye /><span>WE SEE 👀</span><h3>Logs. Metrics. Traces. Signals.</h3><p>basically everything your systems are trying to tell you—even the stuff they'd rather keep private.</p></article>
<article><AlertTriangle /><span>WE KNOW 🚨</span><h3>Something looks weird?</h3><p>we'd rather find out before your users do. before they even open the app, ideally.</p></article>
<article><Network /><span>WE CONNECT THE DOTS 🔍</span><h3>Error → service → dependency → root cause.</h3><p>because “something broke” is not a root cause, bestie. that's a feeling.</p></article>
<article><Zap /><span>WE AUTOMATE ⚙️</span><h3>We don't like doing things twice.</h3><p>if a human clicks the same 17 screens every time, a machine should probably be doing that. respectfully.</p></article>
</section>

<section className="game-section section-grid">
<div className="section-kicker">04 / INCIDENT DRILL</div>
<h2>CAN YOU SURVIVE WITHOUT OBSERVABILITY?</h2>
<p>Messaging is down. API latency is climbing. it's 4:57pm on a Friday. where do you look first?</p>
<div className="game-options">
{["Restart Kubernetes", "Check Splunk telemetry", "Blame DNS", "Deploy again"].map((choice) => (
<Button key={choice} variant="outline" onClick={() => setGameChoice(choice)}>{choice}</Button>
))}
</div>
{gameChoice && (
<div className={`game-result ${gameChoice === "Check Splunk telemetry" ? "correct" : "wrong"}`}>
{gameChoice === "Check Splunk telemetry"
? "YOU FOUND IT...ONE SIGNAL CAN CHANGE EVERYTHING."
: gameChoice === "Blame DNS"
? "❌ it's always DNS... except this time it wasn't. congrats, the incident is now worse."
: "❌ NOPE. congratulations, you've officially made the incident worse. touch grass, then check telemetry."}
</div>
)}
</section>

<section id="team" className="team-section section-grid">
<div className="section-kicker">05 / THE HUMANS</div>
<h2>THE TEAM BEHIND THE SCENES<br />WHEN THE DASHBOARD TURNS RED.</h2>
<p>Not avatars. Not alert-routing rules. Twenty-two actual humans keeping the lights on (and the graphs green).</p>
<Button onClick={() => setTeamOpen((v) => !v)}><Users /> {teamOpen ? "Close team console" : "Open team console"}</Button>
{teamOpen && (
<div className="team-console">
<div className="team-console-head">
<div className="team-orbit"><Eye /></div>
<div><b>22 PEOPLE</b><p>{capabilities.join(" · ")}</p><small>PRODUCTION VISIBILITY CREW / ALL SIGNALS ONLINE</small></div>
</div>
<div className="team-roster">
{team.map((person, index) => (
<article className="team-member" key={person.name}>
<div className="badge-top">
<span className="badge-id">{String(index + 1).padStart(2, "0")}</span>
<span className="badge-status"><i /> ONLINE</span>
</div>
<div className="badge-mono" aria-hidden="true">{initials(person.name)}</div>
<h3>{person.name}</h3>
<b>{person.role}</b>
<p className="power"><Sparkles /> {person.power}</p>
<p className="boss">🎮 boss battle: {person.boss}</p>
</article>
))}
</div>
</div>
)}
</section>

<section className="finale section-grid">
<p>imagine all of this disappearing again.</p>
<Button variant="destructive" size="lg" onClick={() => { setBlind(true); setPanicClicks((c) => c + 1); }}><AlertTriangle /> Turn observability off</Button>
{blind && (
<div className="blackout" onClick={() => setBlind(false)} role="button" tabIndex={0}>
<p>yeah.</p><p>we'd rather not.</p>
<h2><Eye /> YOU ONLY NOTICE US WHEN WE'RE GONE.</h2>
<small>{panicClicks > 1 ? "Visibility shouldn't be optional." : "Click anywhere to restore visibility."}</small>
</div>
)}
</section>
</main>
);
}
