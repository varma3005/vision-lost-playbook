# Signal Sense

The concept I'd use

“THE DAY THE INTERNET FORGOT HOW TO SEE.” 👁️

Instead of making the website about Observability, make the website itself become the story.

You enter and everything looks normal.

Then the site slowly starts losing its ability to see.

And the user realizes:

Oh… this is what happens when Observability disappears.

The whole website becomes a mini interactive thriller/comedy.

🕶️ THE STORY

Opening

Black screen.

A blinking cursor:

booting enterprise...
loading applications...
loading infrastructure...
loading telemetry...

Then:

WELCOME TO A COMPLETELY NORMAL DAY.

Big green:

SYSTEM STATUS: 🟢 CHILL

Then:

Nothing is on fire.

Probably.

😂

👀 THEN THE WEBSITE STARTS WATCHING YOU

A tiny message appears:

Observability is watching.

You scroll.

The website shows fake live signals:

API            🟢 42ms
DATABASE       🟢 18ms
KUBERNETES     🟢 HEALTHY
MESSAGING      🟢 HEALTHY
SPLUNK         🟢 WATCHING

Everything feels slick.

Then...

one signal disappears.

MESSAGING      ⚠️ UNKNOWN

Then another.

DATABASE       ⚠️ UNKNOWN

Then:

SPLUNK         🔴 OFFLINE

Screen glitches.

💀 THE WEBSITE ITSELF BREAKS

Now the user is literally experiencing the problem.

The navigation starts changing.

Instead of:

HOME | TEAM | AI | PROJECTS

it becomes:

HOME | ??? | ??? | ???

😂

A popup:

We seem to have lost visibility.

Another:

Attempting to investigate...

Then:

Investigation failed.

Reason: We don't know what happened.

💀

🎬 THEN THE VIDEO STARTS

“Meanwhile, somewhere in the engineering floor…”

Your 60-second video plays.

Scene:

Engineer:

“Is prod down?”

Another:

“I don't know.”

“Check Splunk.”

“Splunk is gone.”

Silence.

Someone:

“Okay... check the logs.”

“Which logs?”

Then chaos:

“Kubernetes?”

“Network?”

“DNS?”

“Who deployed?”

Everyone slowly looks at one person.

“...It was Friday.”

😂

Then:

NO LOGS.

NO ALERTS.

NO CONTEXT.

JUST VIBES.

🦸 THEN YOUR TEAM ENTERS

The video ends.

The website suddenly comes back to life.

Green telemetry starts flowing again.

And the screen says:

“You missed us, didn't you?”

Then:

👀 OBSERVABILITY

We don't make the noise.

We make sure you can hear it.

🔥

That's much cooler than:

"Our team provides monitoring, alerting and incident management."

🧠 THEN THE WEBSITE EXPLAINS WHAT YOU DO

But in a Gen-Z way.

Instead of:

Monitoring

Say:

WE SEE 👀

Logs. Metrics. Traces. Signals.

Basically: everything your systems are trying to tell you.

Alerting

WE KNOW 🚨

Something looks weird?

We'd rather know before your users do.

Investigation

WE CONNECT THE DOTS 🔍

Show:

ERROR
 ↓
SERVICE
 ↓
DEPENDENCY
 ↓
INFRASTRUCTURE
 ↓
ROOT CAUSE

Then:

“Because ‘something broke’ isn't a root cause.”

Automation

WE DON'T LIKE DOING THINGS TWICE ⚙️

If humans have to repeatedly click through the same 17 screens...

we should probably automate that.

😂

🤖 THEN YOUR AI STORY

This should be one of the coolest parts.

Screen:

“Okay, but what if Observability could THINK?”

Then an animated AI agent appears.

🚨 ALERT
   ↓
🤖 AGENT
   ↓
👀 LOOKS AT TELEMETRY
   ↓
🔍 INVESTIGATES
   ↓
🧠 CONNECTS CONTEXT
   ↓
⚡ SUGGESTS ACTION

Then:

Traditional monitoring:

“Something is wrong.”

Then:

Agentic Observability:

“Something is wrong. Here's what happened, why it probably happened, and what you can do next.”

This lets you naturally bring in your Agentic AI / Splunk AI work without making it feel like a PowerPoint.

🎮 AND THEN — LET THE AUDIENCE PLAY

I'd absolutely include this.

CAN YOU SURVIVE WITHOUT OBSERVABILITY?

Give them a fake production incident.

PRODUCTION STATUS

Payments       🟢
Auth           🟢
Messaging      🔴
Database       🟢
API Gateway    🟡

Question:

Something broke. Where do you look first?

They click.

Wrong:

❌ Nope.

Congratulations, you've just made the incident worse.

Right:

🟢 YOU FOUND IT.

Then:

See? You already need us.

😂

🧑‍💻 THEN YOUR TEAM

Instead of boring employee cards:

THE PEOPLE WHO GET BLAMED WHEN THE DASHBOARD TURNS RED

😂

Then introduce everyone.

Each person gets:

NAME

ROLE

SUPERPOWER

CURRENT BOSS BATTLE

Example:

Vaishnavi

Agentic AI Engineer

⚡ Superpower: Making repetitive work disappear

🧠 Boss battle: “Can we automate this?”

Obviously use actual team details.📊 THEN YOUR REAL IMPACT

Title:

OKAY, JOKES ASIDE.

This is where you become serious for 10–15 seconds.

Show actual:

 services monitored

 dashboards

 alerts

 incidents

 automation

 OpenTelemetry

 Splunk

 AI initiatives

 reliability improvements

But make the numbers huge and animated.

This gives leadership the business/technical substance after you've hooked them with the fun stuff.

🔥 FINAL WEBSITE MOMENT

The user reaches the end.

Everything fades to black.

One line:

Imagine all of this disappearing again.

Then:

🟢 TURN OBSERVABILITY OFF

The user clicks.

Everything disappears.

Silence.

Then:

Yeah.

Pause.

We'd rather not.

Then:

👀 YOU ONLY NOTICE US WHEN WE'RE GONE.

And your team logo/name.

🎨 THE WEBSITE SHOULD FEEL LIKE THIS

Not:

❌ Corporate dashboard
❌ PowerPoint
❌ “Our Mission / Our Vision”
❌ 20 paragraphs
❌ Generic employee cards

Instead:

Netflix intro + Figma interaction + Splunk dashboard + Gen-Z humor + tech thriller

Think:

dark → mysterious → funny → chaotic → impressive → futuristic → meaningful

The user should feel like they're experiencing a story, not reading about a team.

add these prod use cases these two prod scenarios 🟢 New Relic — where you're using it
Your memory-leak rescue story is the strongest New Relic use case.

The scenario is:

Container memory

→ slowly increases over several days

→ reaches 85%

→ New Relic detects/alerts

→ engineer investigates historical telemetry

→ traces the problem back to a deployment

→ root cause identified

→ fix deployed

→ customer never experiences the crash.

So New Relic represents proactive performance monitoring and early detection.

The key story is:
You show:

Splunk dashboards going blank

Alerts disappearing

Logs no longer visible

Service maps disappearing

Teams asking “Can someone check Splunk?”

Engineers losing their central source of visibility during an incident

Using telemetry to investigate an incident and understand what happened

So the cinematic message is:

Without Splunk/observability, teams don't necessarily know that something is wrong—or where to start looking.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vision-lost-playbook.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/57505058-50e3-4e08-95dd-eb190c4d9ba9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
