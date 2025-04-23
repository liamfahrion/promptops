const mockAgents = [
{
    name: "Trendai 1",
    slug: "trendai-1",
    description: "Trend analysis tool for enhanced data workflows.",
    category: "Data",
    details: `Trendai 1 is a specialized agent that leverages AI to handle trend analysis tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Ticketai 2",
    slug: "ticketai-2",
    description: "Ticket tagging tool for enhanced support workflows.",
    category: "Support",
    details: `Ticketai 2 is a specialized agent that leverages AI to handle ticket tagging tasks. It streamlines support processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Storyai 3",
    slug: "storyai-3",
    description: "Story brainstorming tool for enhanced writing workflows.",
    category: "Writing",
    details: `Storyai 3 is a specialized agent that leverages AI to handle story brainstorming tasks. It streamlines writing processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Meetingai 4",
    slug: "meetingai-4",
    description: "Meeting summarizer tool for enhanced productivity workflows.",
    category: "Productivity",
    details: `Meetingai 4 is a specialized agent that leverages AI to handle meeting summarizer tasks. It streamlines productivity processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Sqlai 5",
    slug: "sqlai-5",
    description: "SQL query generation tool for enhanced data workflows.",
    category: "Data",
    details: `Sqlai 5 is a specialized agent that leverages AI to handle sql query generation tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Dataai 6",
    slug: "dataai-6",
    description: "Data cleaning tool for enhanced data workflows.",
    category: "Data",
    details: `Dataai 6 is a specialized agent that leverages AI to handle data cleaning tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Customerai 7",
    slug: "customerai-7",
    description: "Customer sentiment classifier tool for enhanced support workflows.",
    category: "Support",
    details: `Customerai 7 is a specialized agent that leverages AI to handle customer sentiment classifier tasks. It streamlines support processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Poetryai 8",
    slug: "poetryai-8",
    description: "Poetry generation tool for enhanced writing workflows.",
    category: "Writing",
    details: `Poetryai 8 is a specialized agent that leverages AI to handle poetry generation tasks. It streamlines writing processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Forecastingai 9",
    slug: "forecastingai-9",
    description: "Forecasting tool tool for enhanced data workflows.",
    category: "Data",
    details: `Forecastingai 9 is a specialized agent that leverages AI to handle forecasting tool tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Focusai 10",
    slug: "focusai-10",
    description: "Focus timer tool for enhanced productivity workflows.",
    category: "Productivity",
    details: `Focusai 10 is a specialized agent that leverages AI to handle focus timer tasks. It streamlines productivity processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Excelai 11",
    slug: "excelai-11",
    description: "Excel automation tool for enhanced data workflows.",
    category: "Data",
    details: `Excelai 11 is a specialized agent that leverages AI to handle excel automation tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Voicetotextai 12",
    slug: "voicetotextai-12",
    description: "Voice-to-text call transcription tool for enhanced support workflows.",
    category: "Support",
    details: `Voicetotextai 12 is a specialized agent that leverages AI to handle voice-to-text call transcription tasks. It streamlines support processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Emailai 13",
    slug: "emailai-13",
    description: "Email tone correction tool for enhanced writing workflows.",
    category: "Writing",
    details: `Emailai 13 is a specialized agent that leverages AI to handle email tone correction tasks. It streamlines writing processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Taskai 14",
    slug: "taskai-14",
    description: "Task manager tool for enhanced productivity workflows.",
    category: "Productivity",
    details: `Taskai 14 is a specialized agent that leverages AI to handle task manager tasks. It streamlines productivity processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Goalai 15",
    slug: "goalai-15",
    description: "Goal tracker tool for enhanced productivity workflows.",
    category: "Productivity",
    details: `Goalai 15 is a specialized agent that leverages AI to handle goal tracker tasks. It streamlines productivity processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Goalai 16",
    slug: "goalai-16",
    description: "Goal tracker tool for enhanced productivity workflows.",
    category: "Productivity",
    details: `Goalai 16 is a specialized agent that leverages AI to handle goal tracker tasks. It streamlines productivity processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Sqlai 17",
    slug: "sqlai-17",
    description: "SQL query generation tool for enhanced data workflows.",
    category: "Data",
    details: `Sqlai 17 is a specialized agent that leverages AI to handle sql query generation tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Dataai 18",
    slug: "dataai-18",
    description: "Data cleaning tool for enhanced data workflows.",
    category: "Data",
    details: `Dataai 18 is a specialized agent that leverages AI to handle data cleaning tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Pdfai 19",
    slug: "pdfai-19",
    description: "PDF summarization tool for enhanced data workflows.",
    category: "Data",
    details: `Pdfai 19 is a specialized agent that leverages AI to handle pdf summarization tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Customerai 20",
    slug: "customerai-20",
    description: "Customer sentiment classifier tool for enhanced support workflows.",
    category: "Support",
    details: `Customerai 20 is a specialized agent that leverages AI to handle customer sentiment classifier tasks. It streamlines support processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Calendarai 21",
    slug: "calendarai-21",
    description: "Calendar optimizer tool for enhanced productivity workflows.",
    category: "Productivity",
    details: `Calendarai 21 is a specialized agent that leverages AI to handle calendar optimizer tasks. It streamlines productivity processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Goalai 22",
    slug: "goalai-22",
    description: "Goal tracker tool for enhanced productivity workflows.",
    category: "Productivity",
    details: `Goalai 22 is a specialized agent that leverages AI to handle goal tracker tasks. It streamlines productivity processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Faqai 23",
    slug: "faqai-23",
    description: "FAQ matcher tool for enhanced support workflows.",
    category: "Support",
    details: `Faqai 23 is a specialized agent that leverages AI to handle faq matcher tasks. It streamlines support processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Sqlai 24",
    slug: "sqlai-24",
    description: "SQL query generation tool for enhanced data workflows.",
    category: "Data",
    details: `Sqlai 24 is a specialized agent that leverages AI to handle sql query generation tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Focusai 25",
    slug: "focusai-25",
    description: "Focus timer tool for enhanced productivity workflows.",
    category: "Productivity",
    details: `Focusai 25 is a specialized agent that leverages AI to handle focus timer tasks. It streamlines productivity processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Scriptwritingbot 26",
    slug: "scriptwritingbot-26",
    description: "Scriptwriting tool for enhanced writing workflows.",
    category: "Writing",
    details: `Scriptwritingbot 26 is a specialized agent that leverages AI to handle scriptwriting tasks. It streamlines writing processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Excelai 27",
    slug: "excelai-27",
    description: "Excel automation tool for enhanced data workflows.",
    category: "Data",
    details: `Excelai 27 is a specialized agent that leverages AI to handle excel automation tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Calendarai 28",
    slug: "calendarai-28",
    description: "Calendar optimizer tool for enhanced productivity workflows.",
    category: "Productivity",
    details: `Calendarai 28 is a specialized agent that leverages AI to handle calendar optimizer tasks. It streamlines productivity processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Trendai 29",
    slug: "trendai-29",
    description: "Trend analysis tool for enhanced data workflows.",
    category: "Data",
    details: `Trendai 29 is a specialized agent that leverages AI to handle trend analysis tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Voicetotextai 30",
    slug: "voicetotextai-30",
    description: "Voice-to-text call transcription tool for enhanced support workflows.",
    category: "Support",
    details: `Voicetotextai 30 is a specialized agent that leverages AI to handle voice-to-text call transcription tasks. It streamlines support processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Customerai 31",
    slug: "customerai-31",
    description: "Customer sentiment classifier tool for enhanced support workflows.",
    category: "Support",
    details: `Customerai 31 is a specialized agent that leverages AI to handle customer sentiment classifier tasks. It streamlines support processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Goalai 32",
    slug: "goalai-32",
    description: "Goal tracker tool for enhanced productivity workflows.",
    category: "Productivity",
    details: `Goalai 32 is a specialized agent that leverages AI to handle goal tracker tasks. It streamlines productivity processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Knowledgeai 33",
    slug: "knowledgeai-33",
    description: "Knowledge base bot tool for enhanced support workflows.",
    category: "Support",
    details: `Knowledgeai 33 is a specialized agent that leverages AI to handle knowledge base bot tasks. It streamlines support processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Ticketai 34",
    slug: "ticketai-34",
    description: "Ticket tagging tool for enhanced support workflows.",
    category: "Support",
    details: `Ticketai 34 is a specialized agent that leverages AI to handle ticket tagging tasks. It streamlines support processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Emailai 35",
    slug: "emailai-35",
    description: "Email tone correction tool for enhanced writing workflows.",
    category: "Writing",
    details: `Emailai 35 is a specialized agent that leverages AI to handle email tone correction tasks. It streamlines writing processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Autoresponderbot 36",
    slug: "autoresponderbot-36",
    description: "Auto-responder tool for enhanced support workflows.",
    category: "Support",
    details: `Autoresponderbot 36 is a specialized agent that leverages AI to handle auto-responder tasks. It streamlines support processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Forecastingai 37",
    slug: "forecastingai-37",
    description: "Forecasting tool tool for enhanced data workflows.",
    category: "Data",
    details: `Forecastingai 37 is a specialized agent that leverages AI to handle forecasting tool tasks. It streamlines data processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Storyai 38",
    slug: "storyai-38",
    description: "Story brainstorming tool for enhanced writing workflows.",
    category: "Writing",
    details: `Storyai 38 is a specialized agent that leverages AI to handle story brainstorming tasks. It streamlines writing processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Emailai 39",
    slug: "emailai-39",
    description: "Email tone correction tool for enhanced writing workflows.",
    category: "Writing",
    details: `Emailai 39 is a specialized agent that leverages AI to handle email tone correction tasks. It streamlines writing processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
{
    name: "Autoresponderbot 40",
    slug: "autoresponderbot-40",
    description: "Auto-responder tool for enhanced support workflows.",
    category: "Support",
    details: `Autoresponderbot 40 is a specialized agent that leverages AI to handle auto-responder tasks. It streamlines support processes by offering context-aware suggestions, real-time feedback, and seamless integration with your existing workflows. Ideal for teams or individuals aiming to increase efficiency without sacrificing quality.`
},
];