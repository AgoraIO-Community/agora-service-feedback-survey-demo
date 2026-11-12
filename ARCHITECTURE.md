# Service Feedback Survey Architecture

## Components

The browser uses Agora RTC for audio and RTM for transcript and Agent events. Next.js only signs credentials and starts/stops the managed Agent. No business session, data API, local file store or persistent application database is required. Native Node.js, Docker and a Next.js-compatible serverless deployment use the same conversation flow. Actual hosted voice acceptance remains a separate check.

## Start and stop

The page requests an RTC/RTM token and starts the managed Agent using requester_id and channel_name. RTM is ready before the RTC conversation component mounts. End conversation stops the Agent, logs out RTM and unmounts hook-owned media. No customer, shopping, follow-up or event session participates in startup.

## State

Scenario instructions and static public reference material are bundled with the app. Current-call transcript, activity and Inspector state live in browser memory. There is no business Map, writable result file, business API or application database.

## Ownership and invariants

LandingPage owns bootstrap and RTM. ConversationComponent owns RTC/toolkit subscriptions and uses the StrictMode guard. Preserve local-user UID normalization and interrupted turns. Token, invite and stop routes own privileged operations. lib/agent-tools.ts always returns an empty list.

## Deployment

The browser uses Agora RTC for audio and RTM for transcript and Agent events. Next.js only signs credentials and starts/stops the managed Agent. No business session, data API, local file store or persistent application database is required. Native Node.js, Docker and a Next.js-compatible serverless deployment use the same conversation flow. Actual hosted voice acceptance remains a separate check.

Supply NEXT_PUBLIC_AGORA_APP_ID at build and runtime and keep NEXT_AGORA_APP_CERTIFICATE server-only. No persistent volume is required. Synthetic verification does not prove real speech or hosted reachability.

## Usage FAQ ownership

`components/ScenarioFaq.tsx` owns static usage answers; `styles/faq.css` owns disclosure styling, scrolling and transitions. Its header trigger and content share a Radix Dialog root in `LandingPage`. Dialog handles focus trapping, Escape/backdrop dismissal and returning focus to the trigger. FAQ has no session or business API calls.


## Phase-one conversation update — 2026-11-08

Share what worked, explain specific concerns and suggest improvements in a short, adaptive interview. This first version is conversation-only. No business data lookup, external tools, database, record writes, saved results, or cross-session business history are available. Keep details in the current conversation. Do not claim a real registration, reminder, survey submission, callback, payment or saved result. Do not request secrets or unnecessary personal identifiers.

See [current capabilities](README.md#what-you-can-do), the [conversation contract](ARCHITECTURE.md#conversation-behavior) and [verification guidance](AGENTS.md#verification-and-maintenance). Tools remain disabled, and no persistent business operations are provided.

## Conversation behavior

### Conversation flow

Ask permission for a short feedback conversation and explain once that the feedback is not submitted or saved here. If the caller has already agreed or shared their experience, acknowledge it and ask only for the next missing answer.

Establish whether the issue was resolved, partly resolved or unresolved in the caller's own words. If they have no experience to discuss, let them choose a clearly hypothetical example or decline; do not create a fictional service history for them.

Ask for a one-to-five satisfaction rating. If a rating is outside the scale, given as a range or on a ten-point scale, clarify once without clamping, converting or selecting a score for the caller. Accept a correction or a decision to skip. A numerical rating is not permission to invent sentiment or causes; branch on what the caller actually says, and ask a neutral reason question when only a number is known.

For stated satisfaction, ask what specifically worked well, then ask whether anything could still be improved even if the rating is five. If useful, ask one concrete follow-up about the aspect they praised, such as which explanation was clear. Do not imply that satisfaction means there is no improvement to suggest.

For stated dissatisfaction or an unresolved issue, first acknowledge the specific concern in neutral words. Ask one question that builds on the caller's answer instead of repeating a generic reason question. For waiting, ask which stage involved waiting or how it affected them; for repeated contacts, ask what they had to repeat; for unclear communication, ask which part was unclear; for an unresolved outcome, ask what remains unresolved. Follow their answer with at most one further relevant question about impact or what a better experience would look like. Do not assume duration, number of contacts, blame or a desired remedy.

For mixed feedback, preserve both the positive aspect and the unmet need. Clarify their priority if needed without changing the rating. Neutral or skipped ratings can still have a useful reason and improvement discussion. Ask one question per turn. Limit optional detail follow-ups to two in total, skip facts already supplied and stop probing on refusal, fatigue or early exit. Invite an optional improvement suggestion unless already supplied or declined; do not force an answer such as nothing to improve.

Read back a faithful recap when requested or before a natural close: resolution, confirmed rating if supplied, positive aspects, specific concerns and impact, optional improvement and skipped items. Include only what the caller actually said and invite a correction. Do not turn the interview into troubleshooting, offer compensation, promise that the case will be fixed or claim the recap was submitted, saved or escalated.

### Capability boundary

No support case, survey database or submission tool is connected. Do not invent answers, infer sentiment, infer permission to contact, infer a rating from tone, convert scales without agreement or create completed/abandoned records. Do not collect contact details, save or share feedback, troubleshoot or change the original support case, promise a callback or claim an escalation was sent. Keep hypothetical examples distinct from the caller's own experience.

### Source ownership

- `lib/agent-config.ts`: role, greeting, workflow and guardrails.
- `lib/prompt-context.ts`: short-turn rules and U.S. local date/DST context.
- `lib/scenario-knowledge.ts`: teaching material or configured fictional reference.
- `lib/presentation.ts` and `components/ScenarioFaq.tsx`: matching entry and FAQ.

No reference generation performs a business lookup or saves state. Fictional addresses are demonstration text, not real navigation destinations.

## Token lifetime compatibility

Browser RTC/RTM tokens and server-side Agent/REST tokens use the shared ten-minute `TOKEN_LIFETIME_SECONDS` duration. Token builders take durations, not Unix expiry timestamps. Keep the App Certificate and ConvoAI-capable REST tokens on the server.

The Agent start/stop routes explicitly mint tokens with `ConvoAITokenBuilder.buildToken` and pass the supported SDK `authToken` / session `token` options. This avoids the `agora-agents` 2.14.0 / `agora-token` 2.0.7 positional-argument mismatch: the SDK helper otherwise treats publisher role `1` as a one-second token lifetime. Do not patch installed dependencies or add blanket overrides. `verify:api` exercises the real SDK serialization with intercepted network transport, decodes and verifies actual signed tokens, and checks a 600-second lifetime for browser, REST start, Agent RTC/RTM and REST stop tokens. Revisit the explicit-token compatibility path only after an upstream SDK correction passes this regression and live acceptance.

## Lint dependency security compatibility

The registry audit reports GHSA-g3hv-75wg-m249 in minimatch 10.2.6, including the latest typescript-estree 8.72.2 dependency range. A parent-scoped pnpm override selects minimatch 11.0.1 only for `@typescript-eslint/typescript-estree>minimatch`; it does not replace unrelated consumers. Node.js 24 satisfies its runtime requirement, and the caller uses the retained CommonJS `minimatch` function with `dot: true`. Recheck and remove this compatibility override when the upstream dependency range includes a patched version. Run the complete verification suite and an official-registry audit after lockfile updates.
