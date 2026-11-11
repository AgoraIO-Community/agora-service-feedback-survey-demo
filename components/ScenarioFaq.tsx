'use client';

import { ChevronDown } from 'lucide-react';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const questions = [
  {
    "question": "How do I start a conversation?",
    "answer": "Choose Start feedback survey and allow microphone access when your browser asks. Speak in English and describe what you need. You can mute the microphone or end the conversation with the voice controls."
  },
  {
    "question": "What should I say?",
    "answer": "Describe a support experience, whether the issue was resolved and your satisfaction from one to five. Try: “The agent was helpful, but I had to repeat my problem twice.” You can skip a question or end at any time."
  },
  {
    "question": "What happens if I am satisfied?",
    "answer": "The assistant asks what worked well and whether anything could still improve, including after a five-out-of-five rating. It may ask a relevant detail about what you praised; satisfaction does not imply there is nothing to improve."
  },
  {
    "question": "What happens if I am dissatisfied?",
    "answer": "The assistant follows the concern you describe, such as waiting, repeated contacts, unclear communication or an unresolved issue. It asks at most two optional detail follow-ups, one question at a time, about specifics, impact or a better experience. It preserves mixed feedback and avoids repeating answered questions."
  },
  {
    "question": "Will it submit my feedback or fix the case?",
    "answer": "No. You can hear and correct a recap of your rating, resolution, positive aspects, concerns and suggestions. Nothing is submitted, saved or escalated, and the assistant does not troubleshoot the case or promise compensation or a callback."
  },
  {
    "question": "Can I change what I said?",
    "answer": "Yes. Tell the assistant which detail to correct, ask it to repeat or clarify an answer, or request a verbal recap. Details are used within the current conversation; this demo does not save business results or remember them across sessions."
  },
  {
    "question": "What if my microphone does not work?",
    "answer": "Check that microphone access is allowed for this page and that the correct input device is selected in your browser or system settings. Make sure the microphone is not muted, then try Start feedback survey again."
  }
];

export function ScenarioFaq() {
  return (
    <DialogContent className="demo-inspector demo-faq-drawer">
      <DialogHeader className="demo-faq-heading">
        <DialogTitle>Frequently asked questions</DialogTitle>
        <DialogDescription>How to get started, what to ask, and what to expect.</DialogDescription>
      </DialogHeader>
      <div className="demo-faq-list">
        {questions.map(({ question, answer }) => (
          <details className="demo-faq-item" key={question}>
            <summary>
              <span>{question}</span>
              <ChevronDown className="demo-faq-chevron" size={16} aria-hidden="true" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </DialogContent>
  );
}
