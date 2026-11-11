import type { ScenarioPresentation } from '@/types/presentation';
export type { ScenarioPresentation } from '@/types/presentation';

export const presentation: ScenarioPresentation = {
  "id": "09-customer-survey",
  "name": "Service Feedback Survey",
  "purpose": "Feedback with thoughtful follow-up",
  "summary": "Share what worked, explain specific concerns and suggest improvements in a short, adaptive interview.",
  "featuresHeading": "In this conversation",
  "features": [
    {
      "emoji": "💬",
      "title": "Resolution & satisfaction rating"
    },
    {
      "emoji": "🎙️",
      "title": "Follow-ups based on your answers"
    },
    {
      "emoji": "📝",
      "title": "Strengths & improvement recap"
    }
  ],
  "builtWith": [
    "Agora Conversational AI",
    "Agents SDK",
    "Next.js"
  ],
  "startLabel": "Start feedback survey",
  "boundaryShort": "Conversation only. No survey submission, saved answers, support-case updates or follow-up.",
  "outcomes": [
    {
      "id": "helpful",
      "label": "The conversation helped"
    },
    {
      "id": "needs-guidance",
      "label": "I need more guidance"
    }
  ],
  "developer": {
    "sourceUrl": "https://github.com/AgoraIO-Community/agora-service-feedback-survey-demo",
    "runCommand": "pnpm install --frozen-lockfile\npnpm run doctor\npnpm run dev",
    "skillsCommand": "npx skills add github:AgoraIO/skills",
    "assistantPrompt": "Work in this existing Service Feedback Survey voice demo. Preserve RTC/RTM and the phase-one conversation-only boundary. Use configured fictional references and explicitly labeled current-conversation simulations where supported. Keep tools disabled, results unsaved and real business actions unavailable. Keep entry copy, FAQ and prompt behavior aligned.",
    "docsUrl": "https://docs.agora.io/en/ai/build/build-server-client",
    "sdkUrl": "https://www.npmjs.com/package/agora-agents",
    "consoleUrl": "https://console.agora.io/",
    "cliUrl": "https://github.com/AgoraIO/cli",
    "skillsUrl": "https://github.com/AgoraIO/skills",
    "extensionPoints": [
      {
        "title": "Change the conversation",
        "path": "lib/agent-config.ts"
      },
      {
        "title": "Choose models and voice",
        "path": "lib/runtime-profile.ts"
      },
      {
        "title": "Adapt scenario UI copy",
        "path": "lib/presentation.ts"
      }
    ]
  }
};

export function getScenarioPresentation(): ScenarioPresentation { return presentation; }
