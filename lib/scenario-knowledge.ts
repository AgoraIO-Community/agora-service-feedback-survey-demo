// Public reference only. Keep private records, live inventory and business actions out of this module.
export const SCENARIO_KNOWLEDGE = {
  "source": {
    "kind": "Survey conversation guide",
    "revision": "2026-11-08",
    "scope": "Question wording and summary structure only; no prior service interaction or saved response is included."
  },
  "timeZone": "America/New_York",
  "ratingScale": {
    "minimum": 1,
    "maximum": 5,
    "anchors": {
      "1": "Very dissatisfied",
      "2": "Dissatisfied",
      "3": "Neither satisfied nor dissatisfied",
      "4": "Satisfied",
      "5": "Very satisfied"
    }
  },
  "questions": [
    "Was the issue resolved, partly resolved or still unresolved?",
    "How satisfied were you with the service, from one to five?",
    "What specifically worked well, or what led to your concern?",
    "A relevant follow-up about the stated experience, then at most one about impact or the desired improvement.",
    "Even if you were satisfied, is there anything that could be improved?"
  ],
  "summaryFields": [
    "Resolution as stated",
    "Rating only if supplied or confirmed",
    "Positive aspects in the caller's words",
    "Specific concern and impact only if stated",
    "Optional improvement suggestion",
    "Items the caller skipped"
  ],
  "followUpBoundary": "Asking to be contacted can be acknowledged in the verbal recap, but no contact request is saved or scheduled.",
  "followUpGuide": {
    "waiting": "Which part involved the wait?",
    "repeatedContacts": "What did you need to explain again?",
    "communication": "Which part of the explanation was unclear?",
    "unresolved": "What is still unresolved?",
    "positive": "What made that part helpful?",
    "limit": "At most two optional detail follow-ups in total; one question per turn, no repeated answered questions or assumed causes."
  }
} as const;
